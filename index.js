const play =document.getElementById("play");
const music = document.querySelector("audio");
const img =document.querySelector("img");
const prev =document.getElementById("prev");
const next =document.getElementById("next");
const artist =document.getElementById("artist");
const header =document.getElementById("header");
let isPlay = false;

const song =[{
    name:"music-1",
    header:"Koto Dur",
    artist:"Adverb"
  
},
{
    name:"music-2",
    header:"NightMare",
    artist:"The Arlong"
},
{
    name:"music-3",
    header:"Nijeke Harabar Bhoy",
    artist:"AvoidRafa"
}
]

const playMusic = ()=>{
    isPlay = true;
    music.play();
    play.classList.replace("fa-play","fa-pause")
    img.classList.add("anim")
}


const pauseMusic =()=>{
    isPlay = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play")
    img.classList.remove("anim")
}
play.addEventListener("click",()=>{
    if(isPlay){
        pauseMusic();
       
    }else{
        playMusic();
    }

});

songIndex =0;
const loadSongs=(song)=>{
    header.textContent=song.header;
    artist.textContent=song.artist;
    music.src ="audio/"+song.name+".mp3"
    img.src ="img/"+song.name+".jpg"
}

const nextSong =()=>{
    songIndex =(songIndex +1)%song.length;
    loadSongs(song[songIndex]);
    playMusic();
}
const prevSong =()=>{
    songIndex =(songIndex - 1 + song.length)%song.length;
    loadSongs(song[songIndex]);
    playMusic();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);