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
playlistCards.innerHTML = '';

data.playlists.forEach(playlist => {
    let wholeCard = document.createElement('div');
    wholeCard.classList.add('whole-card');
    console.log(playlist.playlistID)
    wholeCard.innerHTML = `
    <img id='card-img' data-playlist-id=${playlist.playlistID} src=${playlist.playlist_art}>
    <h3 id='playlistName'>${playlist.playlist_name}</h3>
    <p id='playlistCreator'>${playlist.playlist_creator}</p>
    <span id="likecount" >${playlist.likeCount}</span>
    <button id="likeButton" data-playlist-id=${playlist.playlistID}>♡</button>

    `;

    
    let image = wholeCard.querySelector('#card-img');
    image.addEventListener("click", (event) => {
        let playlist = Number(event.target.getAttribute('data-playlist-id'));
        // console.log(playlist);
        openModal(playlist);
        modal.style.display = "block";
        // populateModal([0]);
    });
    playlistCards.appendChild(wholeCard);

    wholeCard.querySelector('#likeButton').addEventListener("click", (event) => {
        oldCount= Number(wholeCard.querySelector('#likecount').textContent);
        let newCount = ++oldCount;
        wholeCard.querySelector('#likecount').textContent = newCount;
    });

    // const shuffleButton = document.createElement('button');
    // shuffleButton.innerText = 'Shuffle';
    // shuffleButton.addEventListener('click',(event) => {

    // })
    
} 
)


// function populateModal(playlist){
//     playlist = data.playlists.find(p =>p.playlistID === playlistId);

//     const modal = document.getElementById('playlistModal');
//     modal.querySelector('#playlistImage').src = playlist.playlist_art;
//     modal.querySelector('#playlistImage').alt = playlist.playlist_name;
//     modal.querySelector('#playlistName').textContent = playlist.playlist_name;
//     modal.querySelector('#creatorName').textContent = playlist.playlist_creator;

//     const playlist_content = modal.querySelector('.playlist_content');
//     playlist_content.innerHTML = '';


//     playlist.songs.forEach(song => {
//         const songElement = document.createElement('div');
//         songElement.classList.add('songContainer');

//         songElement.innerHTML = `
//             <img id="songImage" src="${song.cover_art}" alt="${song.title}">
//             <div class="songContent">
//                 <h3 id="songTitle">${song.title}</h3>
//                 <p id="artistName">${song.artist}</p>
//                 <p id="albumName">${song.album}</p>
//             </div>
//             <p id="songDuration">${song.duration}</p>
//         `;
//         playlist_content.appendChild(songElement);
//     });


//     function populateModalShuffled(playlistId, shuffledPlaylist){
//         const playlist = data.playlists.find(p =>p.playlistID === playlistId);
    
//         const modal = document.getElementById('playlistModal');
//         modal.querySelector('#playlistImage').src = playlist.playlist_art;
//         modal.querySelector('#playlistImage').alt = playlist.playlist_name;
//         modal.querySelector('#playlistName').textContent = playlist.playlist_name;
//         modal.querySelector('#creatorName').textContent = playlist.playlist_creator;
    
//         const playlist_content = modal.querySelector('.playlist_content');
//         playlist_content.innerHTML = '';
    
    
//         shuffledPlaylist.songs.forEach(song => {
//             const songElement = document.createElement('div');
//             songElement.classList.add('songContainer');
    
//             songElement.innerHTML = `
//                 <img id="songImage" src="${song.cover_art}" alt="${song.title}">
//                 <div class="songContent">
//                     <h3 id="songTitle">${song.title}</h3>
//                     <p id="artistName">${song.artist}</p>
//                     <p id="albumName">${song.album}</p>
//                 </div>
//                 <p id="songDuration">${song.duration}</p>
//             `;
//             playlist_content.appendChild(songElement);
//         });

//     const data = document.getElementById('playlist')
       
//       };
//       const playlists = data.playlists;
//       playlists.forEach((playlist) => {
//         const playlistID = playlist.playlistID;
        
//       });

// }

// populateModal(0);

var modal = document.getElementById("playlistModal");
var close = document.getElementsByClassName("close")[0];
// var playlist = data.playlists;
// var shuffle = document.getElementById("shuffleButton");
// shuffle.setAttribute("data-playlist-id",` ${playlist.playlistID}`)

// function openModal(playlistId){
//     var playlist = data.playlists.find(item => item.playlistID === playlistId);

//     var modal = document.getElementById("playlistModal");
//     modal.querySelector('#playlistImage').src = playlist.playlist_art;
//     modal.querySelector('#playlistName').textContent = playlist.playlist_name;
//     modal.querySelector('#creatorName').textContent = playlist.playlist_creator;
//     let songs = data.playlists[playlistId].songs;
//     console.log(songs);
//     let playlistContent = document.querySelector(".playlist_content");
//     let songContainer = document.querySelector('.songContainer');
//     console.log(songs);
//     songs.forEach(song => {
//         songContainer.querySelector('#songImage').src = song.cover_art;
//         songContainer.querySelector('#songTitle').textContent = song.title;
//         songContainer.querySelector('#artistName').textContent = song.artist;
//         songContainer.querySelector('#albumName').textContent = song.album;
//     })
//     playlistContent.appendChild(songContainer);
//     console.log(playlistContent);
   
//     // span.addEventListener('click', (event) => {
//     //     let playlistId = Number(event.target.getAttribute('data-playlist-id'));
//     //     populateModal(playlistId);
//     // });
   
    
// }

// var close = document.getElementsByClassName("close")[0];
// var playlist = data.playlists;

function openModal(playlistId){
    var playlist = data.playlists.find(item => item.playlistID === playlistId);

    var modal = document.getElementById("playlistModal");
    modal.querySelector('#playlistImage').src = playlist.playlist_art;
    modal.querySelector('#playlistName').textContent = playlist.playlist_name;
    modal.querySelector('#creatorName').textContent = playlist.playlist_creator;
    modal.querySelector('#shuffleButton').setAttribute("data-playlist-id",` ${playlist.playlistID}`);
    
    let songs = data.playlists[playlistId].songs;
    let playlistContent = document.querySelector(".playlist_content");
    playlistContent.innerHTML = '';

    songs.forEach(song => {
        let songContainer = document.createElement('div');
        songContainer.classList.add('songContainer');

        songContainer.innerHTML = `
            <img id="songImage" src="${song.cover_art}" alt="${song.title}">
            <div class="songContent">
                <h3 id="songTitle">${song.title}</h3>
                <p id="artistName">${song.artist}</p>
                <p id="albumName">${song.album}</p>
            </div>
            <p id="songDuration" style="justify-content: center;padding-top: 6%;">${song.duration}</p>
        `;
        playlistContent.appendChild(songContainer);
    });
}

// const songs = data.playlists.songs
// songs.forEach(song => {

// }
// )
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

function shuffleArray(array){
    let current = array.length, tempValue, random;
    while (0 != current) {
        random = Math.floor(Math.random() * current);
        current -= 1;

        tempValue = array[current]
        array[current] = array[random]
        array[random] = tempValue
    }
    return array
}

let shuffleButton = document.querySelector('#shuffleButton')
shuffleButton.addEventListener('click', (event) => {
    let playlistId = Number(event.target.getAttribute('data-playlist-id'));
    // console.log(playlistId);
    // const album = data.playlists.find(p => p.playlistID === playlistId);
    let songs = data.playlists[playlistId].songs;
    
    const songCopy = [...songs];
    const shuffledSongs = shuffleArray(songCopy);
    let playlistContent = document.querySelector(".playlist_content");
    playlistContent.innerHTML = '';

    shuffledSongs.forEach(song => {
        let songContainer = document.createElement('div');
        songContainer.classList.add('songContainer');

        songContainer.innerHTML = `
            <img id="songImage" src="${song.cover_art}" alt="${song.title}">
            <div class="songContent">
                <h3 id="songTitle">${song.title}</h3>
                <p id="artistName">${song.artist}</p>
                <p id="albumName">${song.album}</p>
            </div>
            <p id="songDuration">${song.duration}</p>
        `;
        playlistContent.appendChild(songContainer);
    });
    }
)

close.onclick = function(){
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