const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

// For play / pause buttons
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music list
const songs = [
    {
        name : 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name : 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design',
    },
    {
        name : 'jacinto-3',
        displayName: 'Goodnight Disco Queen',
        artist: 'Jacinto Design',
    },
    {
        name : 'metric-1',
        displayName: 'Metric Day (Remix)',
        artist: 'Jacinto Design',
    }
]

// Check if play
let isPlaying = false;

//Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play' , 'fa-pause');
    playBtn.setAttribute('title' , 'Pause');
    music.play(); //play() is a default function in javaScript
}

//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause' , 'fa-play');
    playBtn.setAttribute('title' , 'Play');
    music.pause();
}

// Play or Pause - Event Listener
playBtn.addEventListener('click' , () => (isPlaying ? pauseSong() : playSong()));


// Update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;
    if(songIndex >= songs.length){
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// On load - Select first song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click' , prevSong);
nextBtn.addEventListener('click' , nextSong);