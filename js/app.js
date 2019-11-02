// SC.initialize({
//     client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb',
// });
// let pageSize = 1;
// SC
//     .get('/tracks/', { q: 'Metallica', limit: pageSize })
//     .then( (tracks) => tracks.map( (track) => track.id))
//     .then( (track) => stream(track))
//     .then( (player) => player.play())
//     .catch( (error) => console.log(error))

// SC.stream('/tracks/293').then(function(player){
//     player.play();
// });