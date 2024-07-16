const card = document.querySelector(".card");
const icon = document.querySelector("#love");
const heartBtn = document.querySelector("#heartBtn");

let btnState = 0; 

card.addEventListener("dblclick", () => {
    icon.style.transform = "translate(-50%,-50%) scale(1)";
    icon.style.opacity = 0.8;
    setTimeout(() => {
        icon.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
        icon.style.transform = "translate(-50%,-50%) scale(0)";
    }, 3000);

    heartBtn.style.color = "red";
});

heartBtn.addEventListener("click", () => {
    if (btnState === 0) {
        heartBtn.style.color = "red";
        btnState = 1;
    } else {
        heartBtn.style.color = "white";
        btnState = 0;
    }
});
