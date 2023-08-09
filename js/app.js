// Review data
const reviewData = [
    {
        name: 'Not_FBI',
        rating: 5,
        text: 'Highly fictional game! FBI doesn\'t work like this!',
        date: '2023-04-21',
        image: "./images/com1.jpg"
    },
    {
        name: 'Ada Wong',
        rating: 4,
        text: 'Meet you in the next game!',
        date: '2023-05-13',
        image: "./images/com2.jpeg"
    },
    {
        name: 'Senator Jiggly',
        rating: 3.5,
        text: 'Not enough jiggle in the game, story is good though!',
        date: '2023-06-06',
        image: "./images/com3.jpg"
    },
    {
        name: 'Mohammad Shamas',
        rating: 5,
        text: 'pls attend my oop class',
        date: '2023-06-19',
        image: "./images/com4.jpeg"
    },
    {
        name: 'youhavetoguessit',
        rating: 4.5,
        text: 'Okay game, nothing like tekken though',
        date: '2023-07-30',
        image: "./images/com5.jpg"
    },
    {
        name: 'Angela White',
        rating: 5,
        text: 'Who wants to play this with me!',
        date: '2023-08-07',
        image: "./images/com6.jpg"
    },

];

const insertReviews = () => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = "";
    
    reviewData.forEach(review => {
        const { image, name, text, rating, date } = review;
        const div = document.createElement("div");
        div.className = "card";
        
        const img = document.createElement("img");
        img.src = image;
        img.style.cssText = "width: 200px; height: 200px;";
        
        const nameEl = document.createElement("div");
        nameEl.className = "review-name";
        nameEl.textContent = name;
        
        const content = document.createElement("div");
        content.textContent = text;
        
        const ratingEl = document.createElement("div");
        ratingEl.innerHTML = "★".repeat(rating) + "☆".repeat(5 - rating);
        
        const dateEl = document.createElement("div");
        dateEl.className = "review-time";
        dateEl.textContent = date;
        
        div.append(img, nameEl, content, ratingEl, dateEl);
        cardsContainer.appendChild(div);
    });
};

const carousel = () => {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
            const activeSlide = slides.querySelector("[data-active]");
            
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            newIndex = (newIndex + slides.children.length) % slides.children.length;
            
            activeSlide.removeAttribute("data-active");
            slides.children[newIndex].setAttribute("data-active", true);
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    insertReviews();

    const reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = parseFloat(document.getElementById("rating").value);
        const reviewText = document.getElementById("reviewText").value;
        const currentDate = new Date().toISOString().split('T')[0];
        const image = "./images/default-user-image.jpg";

        const newReview = {
            name,
            rating,
            text: reviewText,
            date: currentDate,
            image
        };

        reviewData.push(newReview);

        document.getElementById("name").value = "";
        document.getElementById("rating").value = "";
        document.getElementById("reviewText").value = "";

        insertReviews();
    });
});


function getRandomImageSrc() {
    const imageFiles = [
        "ada.jpg",
        "ashley.jpg",
        "black.jpg",
        "com2.jpg",
        "com3.jpg",
        "com 2.jpg",
        "com 2.jpg",
        "com4.jpg",
        "com5.jpg",
        "com6.jpg",
        "re4.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return `./src/images/${imageFiles[randomIndex]}`;
}
