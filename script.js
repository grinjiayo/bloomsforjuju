document.addEventListener("DOMContentLoaded", () => {

    const bloomButton = document.getElementById("bloomButton");
    
    const backgroundMusic = document.getElementById("backgroundMusic");

    backgroundMusic.volume = 0.5;

    function playMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch((error) => {
                console.log("Music could not start:", error);
            });
        }
    }

    const flowers = document.querySelectorAll(
        ".random-flower, .tiny-flower"
    );

    const giftSection = document.getElementById("giftSection");
    const gift = document.getElementById("gift");

    const letterSection = document.getElementById("letterSection");
    const memoriesButton = document.getElementById("memoriesButton");
    const memoriesSection = document.getElementById("memories");


    /* =================================
       START WITH SCROLLING LOCKED
    ================================= */

    document.documentElement.classList.add("scroll-locked");
    document.body.classList.add("scroll-locked");


    /* =================================
       AUTOMATIC FLOWER BLOOM
    ================================= */

    function startBloom() {

    bloomButton.disabled = true;
    bloomButton.textContent = "Watch the flowers bloom... 🌸";

    // Try autoplay
    playMusic();

    flowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.classList.add("bloom");
        }, index * 180);
    });

    const bloomDuration =
        (flowers.length * 180) + 1800;

    setTimeout(() => {
        bloomButton.textContent = "The garden is blooming 🌷";
        bloomButton.classList.add("bloomed");
    }, bloomDuration);

    setTimeout(() => {

        document.documentElement.classList.remove("scroll-locked");
        document.body.classList.remove("scroll-locked");

        giftSection.classList.add("show");

        giftSection.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            document.documentElement.classList.add("scroll-locked");
            document.body.classList.add("scroll-locked");
        }, 1200);

    }, bloomDuration + 1000);
}


    /* =================================
       START AUTOMATICALLY
    ================================= */

    setTimeout(() => {

        startBloom();

    }, 1500);


    /* =================================
       GIFT CLICK
    ================================= */

    gift.addEventListener("click", () => {

    // User has now interacted with the page,
    // so browsers will normally allow the music.
    playMusic();

    document.documentElement.classList.remove("scroll-locked");
    document.body.classList.remove("scroll-locked");

    gift.classList.add("opened");

    setTimeout(() => {

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            document.documentElement.classList.add("scroll-locked");
            document.body.classList.add("scroll-locked");
        }, 1200);

    }, 1000);
});


    /* =================================
       MEMORIES BUTTON
    ================================= */

    memoriesButton.addEventListener("click", () => {

        // Unlock temporarily
        document.documentElement.classList.remove(
            "scroll-locked"
        );

        document.body.classList.remove(
            "scroll-locked"
        );


        // Go to memories
        memoriesSection.scrollIntoView({
            behavior: "smooth"
        });


        // Lock after reaching memories
        setTimeout(() => {

            document.documentElement.classList.add(
                "scroll-locked"
            );

            document.body.classList.add(
                "scroll-locked"
            );

        }, 1200);

    });

});