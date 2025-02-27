const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')


//Song titles

const songs = ['work it', 'fly d nite', 'sad looking mountains']

// Keep track of songs

let songIndex = 0

// Initially load song

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song
    audio.src = `audio/$(song).mp3`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

}

// event listeners

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})