document.addEventListener("DOMContentLoaded", () => {

    document.documentElement.classList.add("scroll-locked");
    document.body.classList.add("scroll-locked");

    const bloomButton = document.getElementById("bloomButton");
    const backgroundMusic = document.getElementById("backgroundMusic");

    const flowers = document.querySelectorAll(
        ".random-flower, .tiny-flower"
    );

    const giftSection = document.getElementById("giftSection");
    const gift = document.getElementById("gift");

    const letterSection = document.getElementById("letterSection");
    const memoriesButton = document.getElementById("memoriesButton");
    const memoriesSection = document.getElementById("memories");


    /* =========================
       AUTOMATIC BLOOM
    ========================= */

    function startBloom() {

        bloomButton.disabled = true;
        bloomButton.textContent = "Let the flowers bloom... 🌸";


        // Automatically start music
        backgroundMusic.volume = 0.5;

        backgroundMusic.play().catch((error) => {
            console.log("Music autoplay blocked:", error);
        });


        // Bloom flowers one by one
        flowers.forEach((flower, index) => {

            setTimeout(() => {
                flower.classList.add("bloom");
            }, index * 180);

        });


        // Calculate bloom duration
        const bloomDuration =
            (flowers.length * 180) + 1800;


        // Change button after blooming
        setTimeout(() => {

            bloomButton.textContent =
                "The garden is blooming 🌷";

            bloomButton.classList.add("bloomed");

        }, bloomDuration);


        // Automatically move to gift section
    setTimeout(() => {

    document.documentElement.classList.remove("scroll-locked");
    document.body.classList.remove("scroll-locked");

    giftSection.classList.add("show");

    giftSection.scrollIntoView({
        behavior: "smooth"
    });

}, bloomDuration + 1000);

    }


    /* =========================
       START AUTOMATICALLY
    ========================= */

    // Wait a little after page loads
    setTimeout(() => {
        startBloom();
    }, 1500);


    /* =========================
       GIFT
    ========================= */

    gift.addEventListener("click", () => {

    gift.classList.add("opened");

    setTimeout(() => {

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);

});


    /* =========================
       MEMORIES
    ========================= */

    memoriesButton.addEventListener("click", () => {

        memoriesSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// /* =========================================
//    GIFT OPENING
// ========================================= */

// gift.addEventListener("click", () => {

//     // Don't allow the gift to be opened twice
//     if (gift.classList.contains("opened")) {
//         return;
//     }


//     // Open gift
//     gift.classList.add("opened");


//     // Change text underneath gift
//     const giftText = document.querySelector(".click-gift");

//     if (giftText) {

//         giftText.textContent =
//             "Something special inside... 💙";

//     }


//     // Go to letter
//     setTimeout(() => {

//         letterSection.scrollIntoView({
//             behavior: "smooth"
//         });

//     }, 1000);

// });


// /* =========================================
//    LETTER → MEMORIES
// ========================================= */

// memoriesButton.addEventListener("click", () => {

//     memories.scrollIntoView({
//         behavior: "smooth"
//     });

// });


/* =========================================
   IMAGE FALLBACK
========================================= */

const images = document.querySelectorAll(".polaroid-photo img");

images.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";


        const placeholder = document.createElement("div");

        placeholder.className =
            "image-placeholder";


        placeholder.innerHTML = "✿";


        image.parentElement.insertBefore(
            placeholder,
            image
        );

    });

});


/* =========================================
   OPTIONAL: CLICK FLOWER EFFECT
========================================= */

flowers.forEach((flower) => {

    flower.addEventListener("click", () => {

        flower.style.transition =
            "transform .4s ease";

        flower.style.transform =
            "scale(1.15) rotate(8deg)";

        setTimeout(() => {

            flower.style.transform =
                "scale(1)";

        }, 400);

    });

});