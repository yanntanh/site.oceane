/* =========================
   ELEMENTS DES PAGES
========================= */


const hero = document.querySelector(".hero");
const letter = document.querySelector(".letter");
const gallery = document.querySelector(".gallery");
const moments = document.querySelector(".moments");
const quotePage = document.querySelector(".quote-page");
const ending = document.querySelector(".ending");
const finalLetter = document.querySelector(".final-letter");



const allPages = document.querySelectorAll(".page");



/* =========================
   CHANGER DE PAGE
========================= */


function showPage(page) {

    allPages.forEach(section => {

        section.classList.add("hidden");

    });


    page.classList.remove("hidden");


    page.style.animation = "fadeIn 1s ease";

    window.scrollTo(0, 0);

}





/* =========================
   BOUTONS
========================= */


document
    .getElementById("startButton")
    .addEventListener("click", () => {

        showPage(letter);

        startTyping();

    });




document
    .getElementById("continueButton")
    .addEventListener("click", () => {

        showPage(gallery);

    });




document
    .getElementById("galleryButton")
    .addEventListener("click", () => {

        showPage(moments);

    });





document
    .getElementById("momentButton")
    .addEventListener("click", () => {

        showPage(quotePage);

    });





document
    .getElementById("quoteButton")
    .addEventListener("click", () => {

        showPage(ending);

    });





document
    .getElementById("letterButton")
    .addEventListener("click", () => {

        showPage(finalLetter);

    });







/* =========================
   MACHINE A ECRIRE
========================= */


const text = `Je voulais prendre le temps de créer cet endroit pour toi.

Pas seulement pour dire pardon,
mais pour te montrer que certaines choses comptent vraiment.

Parfois les mots sont difficiles à dire directement,
alors j'ai voulu les écrire autrement.

Merci d'avoir pris le temps de découvrir cette petite attention. ❤️`;



let textIndex = 0;



function startTyping() {


    const element = document.getElementById("typingText");


    element.innerHTML = "";


    textIndex = 0;



    function write() {


        if (textIndex < text.length) {


            element.innerHTML += text.charAt(textIndex);


            textIndex++;


            setTimeout(write, 35);


        }


    }



    write();


}







/* =========================
   PETALES
========================= */


const petals = document.getElementById("petals");



function createPetal() {


    const petal = document.createElement("div");


    petal.classList.add("petal");


    petal.innerHTML = "🌸";



    petal.style.left =
        Math.random() * 100 + "vw";



    petal.style.animationDuration =
        (5 + Math.random() * 7) + "s";



    petal.style.fontSize =
        (15 + Math.random() * 20) + "px";



    petals.appendChild(petal);



    setTimeout(() => {


        petal.remove();


    }, 12000);


}



setInterval(createPetal, 600);







/* =========================
   LETTRE AU SCROLL
========================= */


const reveals = document.querySelectorAll(".reveal");



function revealText() {


    reveals.forEach(item => {


        const position =
            item.getBoundingClientRect().top;



        const height =
            window.innerHeight;



        if (position < height - 100) {


            item.classList.add("visible");


        }


    });



}



window.addEventListener(
    "scroll",
    revealText
);