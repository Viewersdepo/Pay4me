document.addEventListener("DOMContentLoaded", function () {
    const ratingValue = 5; // Set the rating to always show 5 full stars
    const starContainer = document.getElementById("star-rating");
    const ratingText = document.getElementById("rating-text");

    // Generate full stars (always 5)
    let starsHTML = "★★★★★";

    starContainer.innerHTML = starsHTML;
    ratingText.innerText = `${ratingValue} star Google rating`;
});
