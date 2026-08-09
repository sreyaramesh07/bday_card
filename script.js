// ----------------------------
// SELECT ELEMENTS
// ----------------------------

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const birthday = document.getElementById("birthday");
const subtitle = document.getElementById("subtitle");
const nextBtn = document.getElementById("next");

const letter = document.getElementById("letterText");

// ----------------------------
// INITIAL SETTINGS
// ----------------------------

nextBtn.style.display = "none";

slide1.classList.add("active");
slide2.classList.remove("active");
slide3.classList.remove("active");

// ----------------------------
// CHANGE TO SLIDE 2
// ----------------------------

setTimeout(() => {

    slide1.classList.remove("active");

    slide2.classList.add("active");

    startTyping();

}, 6000);

// ----------------------------
// TYPEWRITER EFFECT
// ----------------------------

const message = "🎉 Happy Birthday Kathleen Kezhiah! 💜";

let index = 0;

function startTyping(){

    birthday.innerHTML = "";

    const typing = setInterval(function(){

        birthday.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(typing);

            subtitle.classList.add("fadeIn");

            setTimeout(function(){

                nextBtn.style.display = "block";

                nextBtn.classList.add("fadeIn");

            },1000);

        }

    },120);

}

// ======================================
// PART 2
// OPEN LETTER
// ======================================

// Replace this with your own letter later
const finalLetter = `

My Dearest Kathu,

Happy Birthday dear! 💜

You are the most selfless person I know.

You really have a pretty face and a most innocent soul.😘

I am planning on taking this beautiful friendship throughout my life. I hope its the same for u too if not pls accept the fact coz u r stuck with me.😌

May all your dreams come true and hope u find a future husband straight out of ur day dreams.🤭

U deserve all the goodness in life and may it find its way to you.😘

With loads of love,
Sreya❤️

`;


// --------------------------------------
// BUTTON CLICK
// --------------------------------------

nextBtn.addEventListener("click", function(){

    slide2.classList.remove("active");

    slide3.classList.add("active");

    typeLetter();

    createHearts();

});


// --------------------------------------
// LETTER TYPEWRITER
// --------------------------------------

function typeLetter(){

    letter.innerHTML="";

    let i=0;

    const writer=setInterval(function(){

        letter.innerHTML+=finalLetter.charAt(i);

        i++;

        if(i>=finalLetter.length){

            clearInterval(writer);

        }

    },40);

}


// --------------------------------------
// FLOATING HEARTS
// --------------------------------------

function createHearts(){

    setInterval(function(){

        const heart=document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML="💜";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },8000);

    },500);

}

// =======================================
// PART 3
// EXTRA ANIMATIONS
// =======================================


// ----------------------------
// CONFETTI
// ----------------------------

function startConfetti(){

    setInterval(function(){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.backgroundColor=randomColor();

        confetti.style.width=(8+Math.random()*8)+"px";

        confetti.style.height=(8+Math.random()*8)+"px";

        document.body.appendChild(confetti);

        setTimeout(function(){

            confetti.remove();

        },6000);

    },120);

}


// ----------------------------
// RANDOM COLORS
// ----------------------------

function randomColor(){

    const colors=[

        "#ff5fa2",
        "#ffffff",
        "#ffd166",
        "#9d7bff",
        "#b388ff",
        "#6ec6ff",
        "#ff99ff"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}



// ----------------------------
// SPARKLES
// ----------------------------

function createSparkles(){

    setInterval(function(){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=Math.random()*100+"vw";

        sparkle.style.top=Math.random()*100+"vh";

        sparkle.style.animationDuration=(1+Math.random()*2)+"s";

        document.body.appendChild(sparkle);

        setTimeout(function(){

            sparkle.remove();

        },3000);

    },250);

}



// ----------------------------
// START WHEN SLIDE 2 OPENS
// ----------------------------

setTimeout(function(){

    startConfetti();

    createSparkles();

},6500);



// ----------------------------
// OPTIONAL MUSIC
// ----------------------------

const music=new Audio("birthday.mp3");

music.loop=true;

document.body.addEventListener("click",function(){

    music.play().catch(()=>{});

},{once:true});



// ----------------------------
// LETTER GLOW
// ----------------------------

setInterval(function(){

    if(slide3.classList.contains("active")){

        document.querySelector(".letter").style.boxShadow=

        "0 0 "+(20+Math.random()*20)+"px violet";

    }

},800);



// ----------------------------
// FLOATING EFFECT
// ----------------------------

function floating(){

    const letter=document.querySelector(".letter");

    if(letter){

        letter.animate([

            {transform:"translateY(0px)"},

            {transform:"translateY(-10px)"},

            {transform:"translateY(0px)"}

        ],{

            duration:4000,

            iterations:Infinity

        });

    }

}

floating();



// ----------------------------
// END MESSAGE
// ----------------------------

console.log("🎂 Birthday Website Loaded Successfully 💜");