// console.log("Hello, world!")



let btn = document.querySelector("#loginBtn");
let card = document.querySelector(".login-card");
let box = document.querySelector(".box");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    box.style.visibility = "hidden";
    let email = document.querySelector("#inputEmail").value;
    let pwd = document.querySelector("#inputPassword").value;
    console.log(email);
    console.log(pwd);
    card.style.display = "block";
    let card_text = document.querySelector(".card-text");
    card_text.innerHTML = `Welcome, ${email}`;
})