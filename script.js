// ============================
// Sticky Navbar
// ============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "#0b3d91";
        nav.style.padding = "12px 60px";

    } else {

        nav.style.background = "#0d47a1";
        nav.style.padding = "18px 70px";

    }

});


// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ============================
// Back To Top Button
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#1565c0";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ============================
// Image Hover Animation
// ============================

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = ".4s";

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// ============================
// Scroll Animation
// ============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = 0;
    section.style.transform = "translateY(80px)";
    section.style.transition = "1s";

    observer.observe(section);
  // ============================
// DARK MODE
// ============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.style.position = "fixed";
darkBtn.style.left = "30px";
darkBtn.style.bottom = "30px";
darkBtn.style.width = "55px";
darkBtn.style.height = "55px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.background = "#222";
darkBtn.style.color = "#fff";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "22px";
darkBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
darkBtn.style.zIndex = "9999";

document.body.appendChild(darkBtn);

let darkMode = false;

darkBtn.onclick = () => {

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background="#111";
        document.body.style.color="#fff";

        document.querySelectorAll(".card,.portfolio-item,.contact-box")
        .forEach(item=>{

            item.style.background="#1d1d1d";
            item.style.color="#fff";

        });

        darkBtn.innerHTML="☀️";

    }else{

        document.body.style.background="#eef6ff";
        document.body.style.color="#222";

        document.querySelectorAll(".card,.portfolio-item,.contact-box")
        .forEach(item=>{

            item.style.background="#fff";
            item.style.color="#222";

        });

        darkBtn.innerHTML="🌙";

    }

};



// ============================
// LIGHTBOX
// ============================

const lightbox=document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.top=0;
lightbox.style.left=0;
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.85)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="99999";

const lightImg=document.createElement("img");

lightImg.style.maxWidth="90%";
lightImg.style.maxHeight="90%";
lightImg.style.borderRadius="10px";

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

document.querySelectorAll(".gallery-grid img,.certificate-grid img")
.forEach(img=>{

img.addEventListener("click",()=>{

lightImg.src=img.src;

lightbox.style.display="flex";

});

});

lightbox.onclick=()=>{

lightbox.style.display="none";

};



// ============================
// TYPING EFFECT
// ============================

const title=document.querySelector(".hero h2");

if(title){

const text=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}



// ============================
// FADE IN CARDS
// ============================

document.querySelectorAll(".portfolio-item,.skill").forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="translateY(-12px)";

card.style.transition=".3s";

card.style.boxShadow="0 20px 40px rgba(0,0,0,.25)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="translateY(0)";

card.style.boxShadow="";

});

});



// ============================
// PRELOADER
// ============================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},700);

}

});

});
