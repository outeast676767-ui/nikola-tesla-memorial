const enterButton =
document.getElementById("enterButton");
const memoryHall=
document.getElementById("memoryHall");
enterButton.addEventListener("click", function () {
    memoryHall.scrollIntoView({behavior: 'smooth'});
})
const backButton=
document.getElementById("backToHall");
backButton.addEventListener("click", function() {
    memoryHall.scrollIntoView({
        behavior: "smooth"
    });
});
const mindBackButton=
document.getElementById("mindBackButton");
mindBackButton.addEventListener("click", function () {
    memoryHall.scrollIntoView({
        behavior: "smooth"
    })
})
const lifeCard=
document.getElementById("lifeCard");
const lifeRoom=
document.getElementById("lifeRoom");
lifeCard.addEventListener("click", function () {
    lifeRoom.scrollIntoView({
        behavior: "smooth"
    });
});
const experimentButton =
document.getElementById("experimentButton");
const experimentStatus=
document.getElementById("experimentStatus");
const mindRoom=
document.getElementById("mindRoom");
experimentButton.addEventListener("click", function() {
    mindRoom.classList.toggle("experiment-active");
    if (mindRoom.classList.contains("experiment-active")) {
        experimentStatus.textContent="EXPERIMENT ACTIVE";
        experimentButton.innerHTML="DEACTIVE EXPERIMENT <span>&#9889;</span>"
    } else {
        experimentStatus.textContent="SYSTEM STANDBY";
        experimentButton.innerHTML="ACTIVE EXPERIMENT <span>&#9889;</span>";
    }
})
const mindCard =
document.getElementById("mindCard");
mindCard.addEventListener("click", function() {
    mindRoom.scrollIntoView({
        behavior: "smooth"
    })
})
const legacyBackButton=
document.getElementById("legacyBackButton");
legacyBackButton.addEventListener("click", function () {
    memoryHall.scrollIntoView({
        behavior:"smooth"
    });
});
const legacyCard=
document.getElementById("legacyCard");
const legacyRoom=
document.getElementById("legacyRoom");
legacyCard.addEventListener("click", function() {
    legacyRoom.scrollIntoView({
        behavior: "smooth"
    });
});

const revealElements=
document.querySelectorAll(
    ".room-card, .life-room h2, .life-room p, .invention, .legacy-portrait, .legacy-message"
);
const revealObserver=
new IntersectionObserver(function(entries) {
    entries.forEach(function (entry) 
    {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
    }
});
}, {
    threshold: 0.15
});
revealElements.forEach(function(element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
