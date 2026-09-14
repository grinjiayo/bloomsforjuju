const bloomButton = document.getElementById("bloomButton");
const backgroundMusic = document.getElementById("backgroundMusic");

bloomButton.addEventListener("click", () => {
    backgroundMusic.play().catch(error => {
        console.log("Music could not start:", error);
    });
});

const flowers = document.querySelectorAll(
    ".random-flower, .tiny-flower"
);

const giftSection = document.getElementById("giftSection");
const gift = document.getElementById("gift");

const letterSection = document.getElementById("letterSection");

const memoriesButton = document.getElementById("memoriesButton");
const memories = document.getElementById("memories");


/* =========================================
   BLOOMING INTRO
========================================= */

bloomButton.addEventListener("click", () => {

    // Prevent clicking the button again
    bloomButton.disabled = true;

    bloomButton.textContent = "Watch them bloom... ✿";


    // Bloom flowers one by one
    flowers.forEach((flower, index) => {

        setTimeout(() => {

            flower.classList.add("bloom");

        }, index * 120);

    });


    // Change button text after the flowers bloom
    setTimeout(() => {

        bloomButton.textContent =
            "A little garden for Juju 💙";

    }, 2200);


    // Show gift section
    setTimeout(() => {

        giftSection.classList.add("show");


        // Scroll to gift
        setTimeout(() => {

            giftSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 300);

    }, 2700);

});


/* =========================================
   GIFT OPENING
========================================= */

gift.addEventListener("click", () => {

    // Don't allow the gift to be opened twice
    if (gift.classList.contains("opened")) {
        return;
    }


    // Open gift
    gift.classList.add("opened");


    // Change text underneath gift
    const giftText = document.querySelector(".click-gift");

    if (giftText) {

        giftText.textContent =
            "Something special inside... 💙";

    }


    // Go to letter
    setTimeout(() => {

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);

});


/* =========================================
   LETTER → MEMORIES
========================================= */

memoriesButton.addEventListener("click", () => {

    memories.scrollIntoView({
        behavior: "smooth"
    });

});


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