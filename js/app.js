window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDG-y-Ddn1ySi9eJ5ph6p-ulIS_KBTEPkqnMYT9kEZ9H4tqx8WEgyigyJA7s9Y3Qm2-SQXJCVFmyC0DdsFylkYAtGLGTn0D2etTzEIEkpjznVlT-mDR6Q8J4WSB7tbGvDdy2TqvckhyNK4-HBs6xuKY_eaRLRsXVyxs-w';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  };