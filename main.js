const myVideo = document.getElementById("myVideo");
const myTimer = document.getElementById("video__timer");
let m
let s
let ms

myVideo.addEventListener('click', () => (myVideo.paused)? myVideo.play() : myVideo.pause());

myVideo.addEventListener('ended', () => myVideo.currentTime = 0, false);

myVideo.addEventListener('timeupdate', function () {
    myTimer.innerHTML = timeTransform(myVideo.currentTime);
}, false);

function timeTransform(time){

    m = Math.floor(time / 60);
    s = Math.floor(time % 60);
    ms = Math.ceil((time % 1)*1000);

    (m < 10) ? m = "0" + m : m;
    (s < 10) ? s = "0" + s : s;
    (("" + ms).length === 3) ? ms : (("" + ms).length === 2) ? ms = "0" + ms : ms = "00" + ms;

    return m + ":" + s + ":" + ms;
}
