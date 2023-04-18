import React, { useEffect, useState } from 'react';
import AgoraRTC, { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-sdk-ng';

const appId = '1ba5e29566184a42a7675087fbafcaf8';
const channelName = 'wdj';
const tempToken = '007eJxTYNgiqL0nfMqCxTKas022+nGKeRyrlQ/J+BmesmRqxBtmZXEFBsOkRNNUI0tTMzNDC5NEE6NEczNzUwML87SkxLTkxDSL3xdsUxoCGRnsj1gxMjJAIIjPzFCeksXAAABVJByH';

const App = () => {
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const client = createClient({ mode: 'rtc', codec: 'vp8' });
      setClient(client);

      const [audioTrack, videoTrack] = await createMicrophoneAndCameraTracks();
      setLocalAudioTrack(audioTrack);
      setLocalVideoTrack(videoTrack);

      await client.join(appId, channelName, tempToken);
      await client.publish([audioTrack, videoTrack]);

      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'audio') {
          user.audioTrack.play();
        } else if (mediaType === 'video') {
          user.videoTrack.play();
          setRemoteUsers((users) => [...users, user]);
        }
      });

      client.on('user-unpublished', (user, mediaType) => {
        if (mediaType === 'audio') {
          user.audioTrack.stop();
        } else if (mediaType === 'video') {
          user.videoTrack.stop();
          setRemoteUsers((users) => users.filter((u) => u.uid !== user.uid));
        }
      });
    };

    init();

    return async () => {
      if (client) {
        client.leave();
      }

      if (localAudioTrack) {
        localAudioTrack.stop();
        setLocalAudioTrack(null);
      }

      if (localVideoTrack) {
        localVideoTrack.stop();
        setLocalVideoTrack(null);
      }
    };
  }, []);

  return (
    <div>
      <div id="local-stream" ref={(node) => node && localVideoTrack && localVideoTrack.play(node)} />
      {remoteUsers.map((user) => (
        <div key={user.uid} id={`remote-stream-${user.uid}`} ref={(node) => node && user.videoTrack.play(node)} />
      ))}
    </div>
  );
};

export default App;
