console.log("welcome to spotify");
// let audioElement = new Audio('Stay(PagalWorld).mp3');
// audioElement.play();
let songIndex=0;
let audioElement = new Audio('lmlu.mp3');
let masterPLay = document.getElementById('masterPlay');
// console.log(masterPLay);
let mnt_time_stmp = document.getElementById('minutetimestamp');
let scnd_time_stamp = document.getElementById('secondtimestamp');
// console.log(mnt_time_stmp);
// console.log(scnd_time_stamp);

let songbanner = Array.from(document.getElementsByClassName('songbanner'))[0].getElementsByTagName('img')[0];
// console.log(songbanner);
// songbanner.src = "Intentions.jpeg";
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName:"Let me love you", filePath:"lmlu.mp3" , coverPath: "let me love you.jpg"},
    {songName:"Intentions", filePath:"intentions.mp3" , coverPath: "Intentions.jpg"},
    {songName:"STAY 2021", filePath:"stay.mp3" , coverPath: "stay.jpg"},
    {songName:"Baby", filePath:"baby.mp3" , coverPath: "baby.jpg"},
    {songName:"Yummy", filePath:"yummy.mp3" , coverPath: "yummy.jpg"},
    {songName:"Ghost", filePath:"ghost.mp3" , coverPath: "ghost.jpg"},
]

//handle play pause click
masterPLay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime <= 0){

        audioElement.play();
        masterPLay.classList.remove("fa-circle-play");
        masterPLay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPLay.classList.remove("fa-circle-pause");
        masterPLay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>
{
    // console.log('timeupdate');
    progress = parseInt(audioElement.currentTime/audioElement.duration *100);
    mnt_time_stmp.innerText = Math.floor(audioElement.currentTime/60);
    if(Math.floor(audioElement.currentTime%60) < 10)
    scnd_time_stamp.innerText = '0'+Math.floor(audioElement.currentTime%60);
    else
    scnd_time_stamp.innerText = Math.floor(audioElement.currentTime%60);
    myProgressBar.value = progress;
    // console.log(myProgressBar.value);
    if(myProgressBar.value == 100){
        audioElement.currentTime = 0;
        audioElement.play();
    }
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        // console.log(element);
        // if(songIndex != element.id){
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        // }
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target.id);
        // console.log(songIndex);
        makeAllPlays();
        if(parseInt(e.target.id) == songIndex){
            // console.log('equal');
            if(audioElement.paused){
                audioElement.play();
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                masterPLay.classList.remove("fa-circle-play");
                masterPLay.classList.add("fa-circle-pause");

                gif.style.opacity = 1;
            }
            else{

                audioElement.pause();
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-circle-play');
                masterPLay.classList.remove("fa-circle-pause");
                masterPLay.classList.add("fa-circle-play");
                gif.style.opacity = 0;
            }
        }
        else{
            // console.log('unequal');
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.currentTime = 0;
            audioElement.src = songs[songIndex].filePath;
            masterPLay.classList.remove("fa-circle-play");
            masterPLay.classList.add("fa-circle-pause");
            audioElement.play();
            gif.style.opacity = 1;
        }
        document.getElementById("songname-bottom").innerText = songs[songIndex].songName;
        songbanner.src = songs[songIndex].coverPath;
        // sngbanner.style.opacity = 0.5;

    })
})

document.getElementById('previous').addEventListener('click',()=>{
    makeAllPlays();
    if(songIndex == 0)
    songIndex=5;
    else
    songIndex-=1;

    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    masterPLay.classList.remove("fa-circle-play");
    masterPLay.classList.add("fa-circle-pause");
    audioElement.play();
    gif.style.opacity = 1;
    document.getElementById("songname-bottom").innerText = songs[songIndex].songName;
    songbanner.src = songs[songIndex].coverPath;
    //  sngbanner.style.opacity = 0.5;

})

document.getElementById('next').addEventListener('click',()=>{
    makeAllPlays();
    if(songIndex == 5)
    songIndex=0;
    else
    songIndex+=1;
    let num = songIndex;
    // console.log(num.toString());
    document.getElementById(num.toString()).classList.remove('fa-circle-play');
    document.getElementById(num.toString()).classList.add('fa-circle-pause');
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    masterPLay.classList.remove("fa-circle-play");
    masterPLay.classList.add("fa-circle-pause");
    audioElement.play();
    gif.style.opacity = 1;
    document.getElementById("songname-bottom").innerText = songs[songIndex].songName;
    songbanner.src = songs[songIndex].coverPath;
    // sngbanner.style.opacity = 0.5;

})