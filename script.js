const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);

// Telefon üçün
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

// Evet düyməsi
yesBtn.addEventListener("click", function(){

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:#111;
            color:white;
            font-family:Arial;
            text-align:center;
        ">

            <h1 style="
                font-size:70px;
                color:#ff6fae;
                text-shadow:0 0 30px hotpink;
            ">
                ❤️ Teşekkür ederim ❤️
            </h1>

            <h2 style="margin-top:25px;">
                Seni Çok Ama Çok Ama Çok Seviyorum Ezgi
            </h2>

        </div>
    `;
});
