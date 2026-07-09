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

let last = -1;

function changeBackground(){

    let index;

    do{
        index = Math.floor(Math.random()*images.length);
    }while(index === last);

    last = index;

    background.style.opacity = "0";

    setTimeout(()=>{

        background.style.backgroundImage =
            `url("${images[index]}")`;

        background.style.transform =
            `scale(${1.08 + Math.random()*0.08})`;

        background.style.opacity = "1";

    },400);

}

changeBackground();

setInterval(changeBackground,3500);



/* ===========================
   NO BUTTON
=========================== */

function moveNoButton(){

    const rect = noBtn.getBoundingClientRect();

    const padding = 20;

    const maxX =
        window.innerWidth-rect.width-padding;

    const maxY =
        window.innerHeight-rect.height-padding;

    let x =
        Math.random()*maxX;

    let y =
        Math.random()*maxY;

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveNoButton();

});



/* ===========================
   YES BUTTON
=========================== */

yesBtn.addEventListener("click",()=>{

    document.body.innerHTML=`

    <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:black;
        color:white;
        font-family:Arial;
        text-align:center;
        overflow:hidden;
    ">

        <h1 style="
            font-size:70px;
            color:#ff6fae;
            text-shadow:
                0 0 20px hotpink,
                0 0 60px hotpink;
            animation:pulse 1.8s infinite;
        ">
            ❤️❤️❤️
        </h1>

        <h2 style="
            margin-top:25px;
            font-size:45px;
        ">
            Seni Çok Ama Çok Seviyorum Ezgi ❤️
        </h2>

        <p style="
            margin-top:20px;
            font-size:22px;
            color:#ddd;
        ">
            İyi ki varsın.
        </p>

    </div>

    <style>

    @keyframes pulse{

        0%{
            transform:scale(1);
        }

        50%{
            transform:scale(1.12);
        }

        100%{
            transform:scale(1);
        }

    }

    </style>

    `;

});
