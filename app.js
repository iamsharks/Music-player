const music = new Audio('Audio/1.mp3');
//music.play();
const songs = [
    {
        id: "1",
        songName:`Kannum Kannum<br>
        <div class="subtitle">Harris Jeyaraj</div>`,
        poster:"poster/1.jpeg",
    },
    {
        id: "2",
        songName:`Kadhal Yaanai<br>
        <div class="subtitle">Harris Jeyaraj</div>`,
        poster:"poster/2.jpeg",
    },
    {
        id: "3",
        songName:`Kalapakkara<br>
        <div class="subtitle">Unknown artist</div>`,
        poster:"poster/3.jpeg",
    },
    {
        id: "4",
        songName:`Vera Level Sago<br>
        <div class="subtitle">AR Rahman</div>`,
        poster:"poster/4.jpeg",
    },
    {
        id: "5",
        songName:`Maamadura<br>
        <div class="subtitle">Santhosh Narayanan</div>`,
        poster:"poster/5.jpeg",
    },
    {
        id: "6",
        songName:`BadAss<br>
        <div class="subtitle">Anirudh Ravichandran</div>`,
        poster:"poster/6.jpeg",
    },
    {
        id: "7",
        songName:`Nan ready<br>
        <div class="subtitle">Anirudh Ravichandran</div>`,
        poster:"poster/7.jpeg",
    },
    {
        id: "8",
        songName:`His Name is john<br>
        <div class="subtitle">Harris Jeyaraj</div>`,
        poster:"poster/8.jpeg",
    },
    {
        id: "9",
        songName:`Aariro<br>
        <div class="subtitle">GV Prakash</div>`,
        poster:"poster/9.jpeg",
    },
    {
        id: "10",
        songName:`Aazhi soozhndha<br>
        <div class="subtitle">GV prakash</div>`,
        poster:"poster/10.jpeg",
    },
    {
        id: "11",
        songName:`Eeriye<br>
        <div class="subtitle">Unknown Artist</div>`,
        poster:"poster/11.jpeg",
    },
    {
        id: "12",
        songName:`En roja neeya<br>
        <div class="subtitle">Abdul Wahab</div>`,
        poster:"poster/12.jpeg",
    },
    {
        id: "13",
        songName:`I'm Scared<br>
        <div class="subtitle">Anirudh Ravichandran</div>`,
        poster:"poster/13.jpeg",
    },
    {
        id: "14",
        songName:`Jawan<br>
        <div class="subtitle">Anirudh Ravichandran</div>`,
        poster:"poster/14.jpeg",
    },
    {
        id: "15",
        songName:`Kaatrodu patam pola<br>
        <div class="subtitle">Pradeep Kumar</div>`,
        poster:"poster/15.jpeg",
    },
    {
        id: "16",
        songName:`Thee Thalapathy<br>
        <div class="subtitle">Thaman</div>`,
        poster:"poster/16.jpeg",
    },
    {
        id: "17",
        songName:`Kaavaala<br>
        <div class="subtitle">Anirudh Ravichandran</div>`,
        poster:"poster/17.jpeg",
    },
    {
        id: "18",
        songName:`Vandha Edam<br>
        <div class="subtitle">Anirudh Ravichandran</div>`,
        poster:"poster/18.jpeg",
    },
    {
        id: "19",
        songName:`Vizhigalil oru vanavil<br>
        <div class="subtitle">GV Prakash</div>`,
        poster:"poster/19.jpeg",
    },
    {
        id: "20",
        songName:`ThunderKaaran<br>
        <div class="subtitle">HipHopThamizha</div>`,
        poster:"poster/20.jpeg",
    },
    {
        id: "21",
        songName:`Priyathama <br>
        <div class="subtitle">Unknown Artist</div>`,
        poster:"poster/21.jpeg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay =document.getElementById('masterPlay');
let wave =document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105, .0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        //console.log(index);
        music.src = `Audio/${index}.mp3`;
        poster_master_play.src = `poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //console.log(music_dur);
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    //console.log(min1);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText= `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value ==  0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value >  0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value >  50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `Audio/${index}.mp3`;
        poster_master_play.src = `poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `Audio/${index}.mp3`;
        poster_master_play.src = `poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

})
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft +=330;
});
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -=330;
});