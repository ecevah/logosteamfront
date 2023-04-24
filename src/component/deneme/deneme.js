import React, {useState,useEffect} from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import {useNavigate} from 'react-router-dom';
import phone from '../../img/phoneIcon.svg';
import html2canvas from 'html2canvas';
import FeatherIcon from 'feather-icons-react';

import logosLogo from '../../img/logosLogoLight.svg';

import verify from '../../api/verify';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Meeting(){
  const [post,setPost]=useState(null);
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    Auth();
    const interval = setInterval(() => {
      imagePredict();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  async function imagePredict() {
    const element = document.getElementById(1);
    try {
      const canvas = await html2canvas(element);
      const img = canvas.toDataURL('image/png');
      const response = await axios.post("http://127.0.0.1:5001/image/predict", {
        "image": img
      });
      console.log(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

    const Auth = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
      
        try {
            const res = await verify(token);
            if (res) {
              setPost(true);
            } else {
              navigate('/login');
            }
          } catch (err) {
            navigate('/login')
          }
        }
    let options =
{
    // Pass your App ID here.
    appId: '1ba5e29566184a42a7675087fbafcaf8',
    // Set the channel name.
    channel: 'wdj',
    // Pass your temp token here.
    token: '007eJxTYFAJbny83E1g5ymBiSWmyvGsHxLfmRnoRPU86vu1SPhGRZ4Cg2FSommqkaWpmZmhhUmiiVGiuZm5qYGFeVpSYlpyYpqFy17XlIZARgar7zEsjAwQCOIzM5SnZDEwAADKxR30',
    // Set the user ID.
    uid: 0,
};

let channelParameters =
{
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    // A variable to hold the remote user id.s
    remoteUid: 1,
};
async function startBasicCall()
{
// Create an instance of the Agora Engine

const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
// Dynamically create a container in the form of a DIV element to play the remote video track.
const remotePlayerContainer = document.createElement("div");
// Dynamically create a container in the form of a DIV element to play the local video track.
const localPlayerContainer = document.createElement('div');
// Specify the ID of the DIV container. You can use the uid of the local user.
localPlayerContainer.id = options.uid;
// Set the textContent property of the local video container to the local user id.
//localPlayerContainer.textContent = "Local user " + options.uid;
// Set the local video container size.
localPlayerContainer.style.width = "200px";
localPlayerContainer.style.height = "200px";
localPlayerContainer.style.position = 'absolute';
localPlayerContainer.style.bottom = '50px';
localPlayerContainer.style.left = '50px'
localPlayerContainer.style.zIndex= 10;
localPlayerContainer.style.borderRadius = '10px';
localPlayerContainer.style.overflow = 'hidden';
// Set the remote video container size.
remotePlayerContainer.style.width = "75vw";
remotePlayerContainer.style.height = "101vh";
remotePlayerContainer.style.position = 'absolute';
remotePlayerContainer.style.margin = '0px';
remotePlayerContainer.style.left= '0px';

// Listen for the "user-published" event to retrieve a AgoraRTCRemoteUser object.
agoraEngine.on("user-published", async (user, mediaType) =>
{ 
// Subscribe to the remote user when the SDK triggers the "user-published" event.
await agoraEngine.subscribe(user, mediaType);
console.log("subscribe success");
// Subscribe and play the remote video in the container If the remote user publishes a video track.
if (mediaType === "video")
{
    // Retrieve the remote video track.
    channelParameters.remoteVideoTrack = user.videoTrack;
    // Retrieve the remote audio track.
    channelParameters.remoteAudioTrack = user.audioTrack;
    // Save the remote user id for reuse.
    //channelParameters.remoteUid = user.uid.toString();
    // Specify the ID of the DIV container. You can use the uid of the remote user.
    remotePlayerContainer.id = channelParameters.remoteUid;
    channelParameters.remoteUid = channelParameters.remoteUid;
    // Append the remote container to the page body.
    document.body.append(remotePlayerContainer);
    // Play the remote video track.
    channelParameters.remoteVideoTrack.play(remotePlayerContainer);
}
// Subscribe and play the remote audio track If the remote user publishes the audio track only.
if (mediaType === "audio")
{
    // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
    channelParameters.remoteAudioTrack = user.audioTrack;
    // Play the remote audio track. No need to pass any DOM element.
    channelParameters.remoteAudioTrack.play();
}
// Listen for the "user-unpublished" event.
agoraEngine.on("user-unpublished", user =>
{
    console.log(user.uid+ "has left the channel");
});
    });
window.onload = function ()
{
  //Auth();
    const tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = Math.random();
    localStorage.tabId = tabId;

    const interval = setInterval(async function(){
        if(tabId != localStorage.tabId){
        clearInterval(interval)
        await tabError();
        }
        document.getElementById('isLoading').style.display = 'none';
    },1000);

    function tabError(){
        document.getElementById('root').style.display = 'none';
        document.getElementById('unroot').style.display = 'flex';
        document.getElementById('isLoading').style.display = 'none';
        document.getElementById('join').style.display = 'none';
        document.getElementById('goback').style.display = 'none';
        document.getElementById('logo').style.display = 'none';
        document.getElementById('leave').style.display = 'none';
        document.getElementById('mic').style.display = 'none';
        document.getElementById('cam').style.display = 'none';
        // Destroy the local audio and video tracks.
        channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        removeVideoDiv(remotePlayerContainer.id);
        removeVideoDiv(localPlayerContainer.id);
        // Leave the channel
        console.log("You left the channel");
        window.close();
        if (!window.closed) {
          window.location.reload();
        }
    }
    // Listen to the Join button click event.
    document.getElementById("join").onclick = async function ()
    {
        document.getElementById('join').style.display = 'none';
        document.getElementById('goback').style.display = 'none';
        document.getElementById('logo').style.display = 'none';
        document.getElementById('leave').style.display = 'block';
        document.getElementById('mic').style.display = 'block';
        document.getElementById('cam').style.display = 'block';
        // Join a channel.
        await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
        // Create a local audio track from the audio sampled by a microphone.
        channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        // Create a local video track from the video captured by a camera.
        channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        // Append the local video container to the page body.
        document.body.append(localPlayerContainer);
        // Publish the local audio and video tracks in the channel.
        await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
        // Play the local video track.
        channelParameters.localVideoTrack.play(localPlayerContainer);
        console.log("publish success!");
    }
    // Listen to the Leave button click event.
    document.getElementById('leave').onclick = async function ()
    {
      Swal.fire({
        title: 'Yorum',
        text: "Konuşmayı Yorumlamak İster Misin?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8C10B8',
        cancelButtonColor: '#422f2f80',
        confirmButtonText: 'Konuşmaya Yorum Yap',
        cancelButtonText: 'Çık'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Yorum',
            inputPlaceholder: 'Yorumunu buraya yazabilirsin',
            inputAttributes: {
              'aria-label': 'Yorumunu buraya yazabilirsin'
            },
            showCancelButton: true,
            confirmButtonColor: '#8C10B8',
            cancelButtonColor: '#422f2f80',
            confirmButtonText: 'Yorum Yap',
            cancelButtonText: 'Çık'
          })
          if (text) {
            await Swal.fire({
              icon: 'success',
              title: 'Tamamlandı',
              text: 'Yorum Başarıyla Kaydedildi',
              confirmButtonColor: '#8C10B8',
              confirmButtonText: 'Tamam'
            })
            navigate('/reservation');
          }
          else{
            await Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Kaydedilmedi',
              confirmButtonColor: '#8C10B8',
              confirmButtonText: 'Tamam'
            })
            document.getElementById('join').style.display = 'block';
            document.getElementById('goback').style.display = 'block';
            document.getElementById('logo').style.display = 'block';
            document.getElementById('leave').style.display = 'none';
            document.getElementById('mic').style.display = 'none';
            document.getElementById('cam').style.display = 'none';
            // Destroy the local audio and video tracks.
            channelParameters.localAudioTrack.close();
            channelParameters.localVideoTrack.close();
            // Remove the containers you created for the local video and remote video.
            removeVideoDiv(remotePlayerContainer.id);
            removeVideoDiv(localPlayerContainer.id);
            // Leave the channel
            console.log("You left the channel");
            localStorage.setItem('meet','Yapıldı')
            // Refresh the page for reuse
            window.location.reload();
          }
        }else{
          document.getElementById('join').style.display = 'block';
          document.getElementById('goback').style.display = 'block';
          document.getElementById('logo').style.display = 'block';
          document.getElementById('leave').style.display = 'none';
          document.getElementById('mic').style.display = 'none';
          document.getElementById('cam').style.display = 'none';
          // Destroy the local audio and video tracks.
          channelParameters.localAudioTrack.close();
          channelParameters.localVideoTrack.close();
          // Remove the containers you created for the local video and remote video.
          removeVideoDiv(remotePlayerContainer.id);
          removeVideoDiv(localPlayerContainer.id);
          // Leave the channel
          console.log("You left the channel");
          localStorage.setItem('meet','Yapıldı')
          // Refresh the page for reuse
          window.location.reload();
        }
      })
    }
  }
  /*document.getElementById('photo').onclick = async function (){
    const element = document.getElementById(1);
    html2canvas(element)
      .then((canvas) => {
        const img = canvas.toDataURL('image/png');
        axios.post("http://127.0.0.1:5001/image/predict", 
        {
          "image":img
        })
              .then(response => {
                console.log(response.data.result);
              })
              .catch(error => {
                console.error(error);
              });
      })
      .catch((error) => {
        console.error('Oops, bir şeyler ters gitti!', error);
      });
  };*/
}

startBasicCall();
// Remove the video stream from the container.
function removeVideoDiv(elementId)
{
    console.log("Removing "+ elementId+"Div");
    let Div = document.getElementById(elementId);
    if (Div)
    {
        Div.remove();
    }
};
let isAudioEnabled = false;
let audioStream = null;
const handleMic = async () => {
  setMic(!mic);
}
  return (
    <>
        <div className="row">
            <div>
                <img src={logosLogo} id='logo' height={176} width={345} style={{position:'absolute', top:'35%', left:'44.5%'}} alt='logos'></img>
                <button type="button" id="join"><FeatherIcon icon='phone' color='#FFFFFF' size="45" style={{marginLeft:'auto',marginRight:'auto'}} stroke-width="2.5"/></button>
                <button type="button" id="goback" onClick={()=> navigate('/reservation')}><FeatherIcon icon='log-out' color='#FFFFFF' size="45" style={{marginLeft:'auto',marginRight:'auto'}} stroke-width="2.5"/></button>
                <button type="button" id="leave" style={{display:'none'}}><img src={phone} alt='phone' width={70} height={70}></img></button>
                <button type="button" id="mic" style={{display:'none'}} onClick={()=>handleMic()}><FeatherIcon icon={mic?'mic':'mic-off'} color='#FFFFFF' size="45" style={{marginLeft:'auto',marginRight:'auto'}} stroke-width="2.5"/></button>
                <button type="button" id="cam" style={{display:'none'}} onClick={()=>setCam(!cam)}><FeatherIcon icon={cam?'video':'video-off'} color='#FFFFFF' size="45" style={{marginLeft:'auto',marginRight:'auto'}} stroke-width="2.5"/></button>
                <div id='talk' style={{display:'none'}}>
                    <div>Konuşşma metni: adasdsasadsad</div>
                    <div>Duygu durumu</div>
                    <div>Kullanılan Kelimeler</div>
                </div>
            </div>
        </div>
    </>
  )
}
