let correctPassword = "11-01-2026"; // change if needed

function checkPassword(){
    let input = document.getElementById("passwordInput").value;
    if(input === correctPassword){
        document.getElementById("passwordBox").classList.add("hidden");
        document.getElementById("questionBox").classList.remove("hidden");
    }else{
        document.getElementById("error").innerText = "Wrong password 💔";
    }
}

function firstYes(){
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("cat1").classList.remove("hidden");
}

function secondYes(){
    document.getElementById("cat1").classList.add("hidden");
    document.getElementById("cat2").classList.remove("hidden");
}

function showGallery(){
    document.getElementById("cat2").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
}

let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg"
];

let index = 0;

function nextImage(){
    index = (index + 1) % images.length;
    document.getElementById("slideImage").src = images[index];
}

function prevImage(){
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slideImage").src = images[index];
}

function showCards(){
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("cardsSection").classList.remove("hidden");
}

function goMessage(){
    window.location.href="message.html";
}
