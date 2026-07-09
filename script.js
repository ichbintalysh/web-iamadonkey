const background = document.getElementById("background");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const images = [
    "images/real1.jpg",
    "images/real2.jpg",
    "images/real3.jpg",

    "images/cartoon1.jpeg",
    "images/cartoon2.jpeg",
    "images/cartoon3.jpeg",

    "images/shrek1.jpeg",
    "images/shrek2.jpeg",
    "images/shrek3.jpeg",

    "images/meme1.jpeg",
    "images/meme2.jpeg",
    "images/meme3.jpeg"
];

let lastImage = -1;

/* ===========================
   BACKGROUND
=========================== */

function changeBackground() {

    let index;

    do {
        index = Math.floor(Math.random() * images.length);
    } while (index === lastImage);

    lastImage = index;

    background.style.opacity = "0";

    setTimeout(() => {

        background.style.backgroundImage = `url("${images[index]}")`;

        background.style.transform =
            `scale(${1.05 + Math.random() * 0.08})`;

        background.style.opacity = "1";

    }, 350);

}

changeBackground();

setInterval(changeBackground, 3500);


/* ===========================
   NO BUTTON
=========================== */

function moveNoButton() {

    const rect = noBtn.getBoundingClientRect();

    const padding = 20;

    const maxX = window.innerWidth - rect.width - padding;
    const maxY = window.innerHeight - rect.height - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function (e) {

    e.preventDefault();

    moveNoButton();

});


/* ===========================
   YES BUTTON
=========================== */

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `

    <div style="
        width:100%;
        height:100vh;
        background:#000;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        color:white;
        font-family:Arial,Helvetica,sans-serif;
        overflow:hidden;
    ">

        <div style="
            font-size:90px;
            animation:pulse 1.2s infinite;
        ">
            ❤️
        </div>

        <h1 style="
            margin-top:20px;
            font-size:72px;
            color:#ff6db2;
            text-shadow:
                0 0 15px hotpink,
                0 0 40px hotpink;
        ">
            Biliyordum ❤️
        </h1>

        <p style="
            margin-top:30px;
            font-size:34px;
        ">
            Seni Çok Ama Çok Ama Çok Seviyorum Ezgi ❤️
        </p>

    </div>

    <style>

    @keyframes pulse{

        0%{
            transform:scale(1);
        }

        50%{
            transform:scale(1.15);
        }

        100%{
            transform:scale(1);
        }

    }

    </style>

    `;

});
