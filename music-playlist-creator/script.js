// HTML
// we need the actual modal overlay, the container, and general structure

// CSS
// make it look how we want

// JS
// make it show and close
// for every playlist we click, we do a few things:
// 1. open the modal
//    change the visibility from hidden to not hidden
// 2. find out which playlist we clicked (like playlist id 1 or 2 etc)
//    ideally, we have the ID of the playlist somewhere accessible
//    so we can grab it via JS to use it to lookup in the data
// 3. fill in the modal with information from that playlist
//    create a function that dynamically populates HTML and injects with
//    data from previous stepunjbndtniddnudfciivletbfhfffjbnd




let playlistCards = document.getElementById("playlist-cards");

playlistCards = data.playlists.forEach(playlist => {
    let wholeCard = document.createElement('div');
    wholeCard.classList.add('whole-card');
    wholeCard.innerHTML = `
    <img id='card-img' src=${playlist.playlist_art}>
    <h3 id='playlistName'>${playlist.playlist_name}</h3>
    <p id='playlistCreator'>${playlist.playlist_creator}</p>
    <span id="likecount" >${playlist.likeCount}</span> 
    <button id="button" onclick= "openModal(playlist)" 'data-playlist-id'=${playlist.playlistID}>Open</button>

    `;
    wholeCard.addEventListener("click", () => {
        openModal(playlist);
        populateModal([0]);
    });
    playlistCards.appendChild(wholeCard);
    
} 
)
 
function populateModal(playlistId){
    const playlist = data.playlists.find(p =>p.playlistID === playlistId);

    const modal = document.getElementById('playlistModal');
    modal.querySelector('#playlistImage').src = playlist.playlist_art;
    modal.querySelector('#playlistImage').alt = playlist.playlist_name;
    modal.querySelector('#playlistName').textContent = playlist.playlist_name;
    modal.querySelector('#creatorName').textContent = playlist.playlist_creator;

    const playlist_content = modal.querySelector('.playlist_content');
    playlist_content.innerHTML = '';


    playlist.songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('songContainer');

        songElement.innerHTML = `
            <img id="songImage" src="${song.cover_art}" alt="${song.title}">
            <div class="songContent">
                <h3 id="songTitle">${song.title}</h3>
                <p id="artistName">${song.artist}</p>
                <p id="albumName">${song.album}</p>
            </div>
            <p id="songDuration">${song.duration}</p>
        `;
        playlist_content.appendChild(songElement);
    });

}

populateModal(0);


var modal = document.getElementById("playlistModal");
var span = document.getElementsByClassName("close")[0];
function openModal(playlist){
    document.getElementById('creatorName').innerText = playlist.playlist_creator;
    document.getElementById('playlistName').innerText = playlist.playlist_name;
    document.getElementById('playlistImage').src = playlist.imageurl;
    span.addEventListener('click', (event) => {
        let playlistId = Number(event.target.getAttribute('data-playlist-id'));
        populateModal(playlistId);
    });
    // document.getElementById('playlistLineup').innerHTML = `<strong>Lineup:</strong> ${}`;
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none"
}

window.onclick = function(event){
    if (event.target === modal) {
        modal.style.display = "none"
    }
}
















































// let playlist_content = document.getElementById("songs");

// songSection = data.playlists.songs.forEach(song => {
//     let playlist_content = document.createElement('div');
//     songSection.classList.add('songSection');
//     songDSection.innerHTML = `
//     <img id='songImage' src=${playlist.songs.cover_art}>
//     <h3 id='songTitle'>${playlist.songs.title}</h3>
//     <p id='artistName'>${playlist.songs.artist}</p>
//     <p id="albumName" >${playlist.songs.album}</p> 
//     <p id="songDuration" >${playlist.songs.duration}</p> 
    
    
//     `;
//     songSection.addEventListener("click", () => {
//         openModal(playlist.songs);
//     });
//     playlist_content.appendChild(songSection);


// function openModal(playlist){
    //     document.getElementById('playlistName').innerText = playlistName;
    //     document.getElementById('playlistImage').src = playlist.imageurl;
    //     document.getElementById('playlistLineup').innerHTML = `<strong>Lineup:</strong> ${playlist.Lineup.join(', ')}`;
    //     modal.style.display = "block";
    // }
    
    
    
    
    // document.getElementByClassName('playlistName')[0].innerText = playlistName;
    // document.getElementById('playlistImage').src = playlist.imageurl;
    // modal.style.display = "block";
