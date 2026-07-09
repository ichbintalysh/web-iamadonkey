const background = document.getElementById("background");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* ===========================
   BACKGROUND IMAGES
=========================== */

const images = [
    "images/real1.jpg",
    "images/real2.jpg",
    "images/real3.jpg",

    "images/cartoon1.jpeg",
    "images/cartoon2.jpeg",
    "images/cartoon3.jpeg",

    "images/meme1.jpeg",
    "images/meme2.jpeg",
    "images/meme3.jpeg",

    "images/shrek1.jpeg",
    "images/shrek2.jpeg",
    "images/shrek3.jpeg"
];

let current = -1;

function changeBackground() {

    let next;

    do {
        next = Math.floor(Math.random() * images.length);
    } while (next === current);

    current = next;

    background.style.opacity = "0";

    setTimeout(() => {

        background.style.backgroundImage = `url('${images[next]}')`;

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

function moveButton() {

    const rect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - rect.width - 20;
    const maxY = window.innerHeight - rect.height - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseenter", moveButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveButton();

});


/* ===========================
   YES BUTTON
=========================== */

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
    <div style="
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:#000;
        color:white;
        font-family:Arial,Helvetica,sans-serif;
        text-align:center;
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
            color:#ff69b4;
            text-shadow:
                0 0 20px hotpink,
                0 0 40px hotpink;
        ">
            Biliyordum ❤️
        </h1>

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
