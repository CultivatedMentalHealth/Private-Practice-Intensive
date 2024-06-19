// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function openBook() {
    if (window.innerWidth > 768) {
        book.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    } else {
        book.style.transform = "none";
        prevBtn.style.transform = "none";
        nextBtn.style.transform = "none";
    }
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "none";
    } else {
        book.style.transform = "none";
    }
    prevBtn.style.transform = "none";
    nextBtn.style.transform = "none";
}

function resetPages() {
    paper1.classList.remove("flipped");
    paper2.classList.remove("flipped");
    paper3.classList.remove("flipped");
    paper4.classList.remove("flipped");
    paper5.classList.remove("flipped");

    paper1.style.zIndex = 5;
    paper2.style.zIndex = 4;
    paper3.style.zIndex = 3;
    paper4.style.zIndex = 2;
    paper5.style.zIndex = 1;
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    } else {
        // Reset to the beginning
        closeBook(true);
        resetPages();
        currentLocation = 1;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    } else {
        // Reset to the end
        openBook();
        paper1.classList.add("flipped");
        paper2.classList.add("flipped");
        paper3.classList.add("flipped");
        paper4.classList.add("flipped");
        paper5.classList.add("flipped");
        currentLocation = maxLocation - 1;
    }
}

// Event listener to handle resize events
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        book.style.transform = "none";
        prevBtn.style.transform = "none";
        nextBtn.style.transform = "none";
    }
});