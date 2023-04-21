import React, {useState,useEffect} from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import {useNavigate} from 'react-router-dom';
import phone from '../../img/phoneIcon.svg';
import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';

import verify from '../../api/verify';
import axios from '../../api/axios';
export default function Meeting(){
  const navigate = useNavigate();
  const [post,setPost]=useState(null);
  useEffect(()=>{
        Auth();
    },[])

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
            console.error(err);
          }
        }
    const [voice, setVoice] = useState(true);

    let options =
{
    // Pass your App ID here.
    appId: '1ba5e29566184a42a7675087fbafcaf8',
    // Set the channel name.
    channel: 'wdj',
    // Pass your temp token here.
    token: '007eJxTYGCZ9/onT5tfU03t/d+nLrc3Z/dOXv47wPyizBI1pSnnxDYoMBgmJZqmGlmampkZWpgkmhglmpuZmxpYmKclJaYlJ6ZZSLU6pTQEMjKkyyxgYIRCEJ+ZoTwli4EBAIvDH3g=',
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
    }
    // Listen to the Join button click event.
    document.getElementById("join").onclick = async function ()
    {
        document.getElementById('join').style.display = 'none';
        document.getElementById('leave').style.display = 'block';
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
        document.getElementById('join').style.display = 'block';
        document.getElementById('leave').style.display = 'none';
        // Destroy the local audio and video tracks.
        channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        removeVideoDiv(remotePlayerContainer.id);
        removeVideoDiv(localPlayerContainer.id);
        // Leave the channel
        console.log("You left the channel");
        // Refresh the page for reuse
        window.location.reload();
    }
  }
  document.getElementById('photo').onclick = async function (){
    const element = document.getElementById(1);
    html2canvas(element)
      .then((canvas) => {
        const img = canvas.toDataURL('image/png');
        console.log(img)
      })
      .catch((error) => {
        console.error('Oops, bir şeyler ters gitti!', error);
      });
  };
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

  return (
    <>
        <div className="row">
            <div>
                <button type="button" id="join">Join</button>
                <button type="button" id="leave" style={{display:'none'}}><img src={phone} alt='phone' width={70} height={70}></img></button>
                <div id='talk' style={{display:'none'}}>
                    <div>Konuşşma metni: adasdsasadsad</div>
                    <div>Duygu durumu</div>
                    <div>Kullanılan Kelimeler</div>
                </div>
                <button type="button" id='photo'>Photo check</button>
            </div>
        </div>
    </>
  )
}
