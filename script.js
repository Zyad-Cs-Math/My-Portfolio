let currentHour = new Date().getHours();
let welcomemassage = document.querySelector("#Welcome h1");

if (currentHour < 12) {
    welcomemassage.textContent = "Good Morning!, Welcome to My Portfolio";

}else if (currentHour < 18) {
    welcomemassage.textContent = "Good Afternoon!, Welcome to My Portfolio";

}else {
    welcomemassage.textContent = "Good Evening!, Welcome to My Portfolio";
}


let skillslist = document.querySelectorAll(".myskills span");

for (let i = 0; i < skillslist.length; i++){ 
skillslist[i].onclick = function() {
    this.style.backgroundColor = "blue";
     this.style.color = "#ffffff";

}

};
