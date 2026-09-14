document.addEventListener("DOMContentLoaded", () => {

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

        bloomButton.textContent =
            "Watch the flowers bloom... 🌸";


        /* MUSIC */

        backgroundMusic.volume = 0.5;

        backgroundMusic.play().catch((error) => {
            console.log("Music autoplay blocked:", error);
        });


        /* FLOWERS */

        flowers.forEach((flower, index) => {

            setTimeout(() => {

                flower.classList.add("bloom");

            }, index * 180);

        });


        /* TOTAL BLOOM TIME */

        const bloomDuration =
            (flowers.length * 180) + 1800;


        /* CHANGE BUTTON TEXT */

        setTimeout(() => {

            bloomButton.textContent =
                "The garden is blooming 🌷";

            bloomButton.classList.add("bloomed");

        }, bloomDuration);


        /* =================================
           GO TO GIFT AUTOMATICALLY
        ================================= */

        setTimeout(() => {

            // Unlock scrolling temporarily
            document.documentElement.classList.remove(
                "scroll-locked"
            );

            document.body.classList.remove(
                "scroll-locked"
            );


            // Show gift
            giftSection.classList.add("show");


            // Move to gift
            giftSection.scrollIntoView({
                behavior: "smooth"
            });


            /*
             * Lock scrolling again after
             * reaching the gift.
             */

            setTimeout(() => {

                document.documentElement.classList.add(
                    "scroll-locked"
                );

                document.body.classList.add(
                    "scroll-locked"
                );

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

        // Unlock temporarily
        document.documentElement.classList.remove(
            "scroll-locked"
        );

        document.body.classList.remove(
            "scroll-locked"
        );


        // Open gift
        gift.classList.add("opened");


        /* Go to letter */

        setTimeout(() => {

            letterSection.scrollIntoView({
                behavior: "smooth"
            });


            // Lock again after reaching letter
            setTimeout(() => {

                document.documentElement.classList.add(
                    "scroll-locked"
                );

                document.body.classList.add(
                    "scroll-locked"
                );

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