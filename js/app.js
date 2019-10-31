SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb',
});
let pageSize = 20;
SC
    .get('/tracks/', { q: 'Oasis', limit: pageSize })
    .then( (tracks) => {
        tracks.map( (track) => console.log(track.title));
    } )

// SC.stream('/tracks/293').then(function(player){
//     player.play();
// });

function search() {

}