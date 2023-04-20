import React, { useState, useEffect } from "react";
import AgoraUIKit from 'agora-react-uikit';
import AgoraRTC from "agora-rtc-sdk-ng";


const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "1ba5e29566184a42a7675087fbafcaf8",
    channel: "wdj",
    token: "007eJxTYPj+9r7p/rCCMvaKjH4zs95Y4cQfj/IvRLwLP/HUay13ApcCg2FSommqkaWpmZmhhUmiiVGiuZm5qYGFeVpSYlpyYppFtIpjSkMgI0PpqROMjAwQCOIzM5SnZDEwAABGgh8n'", // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  useEffect(() => {
    const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    agoraClient.init(rtcProps.appId, () => {
      console.log("AgoraRTC client initialized");
    });

    const uid = Math.floor(Math.random() * 10000); // generate random uid

    const localTracks = {
      videoTrack: null,
    };

    agoraClient.join(rtcProps.token, rtcProps.channel, null, uid).then(() => {
      console.log("User joined channel successfully");
      localTracks.videoTrack = AgoraRTC.createCameraVideoTrack();
      agoraClient.publish(Object.values(localTracks)).then(() => {
        console.log("Tracks published successfully");
      });
    });

    const interval = setInterval(() => {
      const canvas = document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 480;
      const ctx = canvas.getContext("2d");
      const video = document.querySelector("video");

      if (video) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const base64Image = canvas.toDataURL("image/jpeg");

        // TODO: send base64Image to server
        console.log("Screenshot taken and sent to server");
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      agoraClient.unpublish(Object.values(localTracks));
      agoraClient.leave();
    };
  }, []);

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default App;
