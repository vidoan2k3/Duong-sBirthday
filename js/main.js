var beginForm = document.querySelector (".begin");
var nextForm = document.querySelector (".next");
var beginBtn = document.querySelector (".begin .button");
var nextBtn = document.querySelector (".next .button");
var signInBtn = document.querySelector (".sign-in-form button")
var mainForm = document.querySelector (".form-main")
var mainBtn = document.querySelector (".form-main .button")
var mutedVideo = document.querySelector (".muted-video")
var mainVideo = document.querySelector (".main-video")
function start () {
    beginBtn.addEventListener ("click", (e) => {
        e.preventDefault ();
        nextForm.classList.add ("active");
    })
    nextBtn.addEventListener ("click", (e) => {
        e.preventDefault ();
        mainForm.classList.add ("active")
    })
    mainBtn.addEventListener ("click", (e) => {
        e.preventDefault ();
        mainForm.classList.remove ("active")
        nextForm.classList.remove ("active")
        beginForm.classList.remove ("active")
        mutedVideo.style.display = "none";
        mainVideo.style.display = "block";
        mainVideo.play();
    })
}



start ();
