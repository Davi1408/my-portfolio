/* ==================================================
   DESIGNBYTHEDAVE
   OLUSEGUN D. OYAYEYE
   PORTFOLIO JAVASCRIPT
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("DesignByTheDave portfolio loaded successfully.");


    /* ==========================================
       MOUSE MOVEMENT EFFECT
       ========================================== */

    const coverArt = document.querySelector(".cover-art");

    const blueShape = document.querySelector(".blue-shape");

    const portfolioWord =
        document.querySelector(".portfolio-word");


    if (coverArt && blueShape && portfolioWord) {

        coverArt.addEventListener("mousemove", (event) => {

            const rect =
                coverArt.getBoundingClientRect();


            const mouseX =
                event.clientX - rect.left;


            const mouseY =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const moveX =
                (mouseX - centerX) / 35;


            const moveY =
                (mouseY - centerY) / 35;


            blueShape.style.transform = `
                translate(
                    calc(-50% + ${moveX}px),
                    calc(-50% + ${moveY}px)
                )
                rotate(-2deg)
                scale(1.04)
            `;


            portfolioWord.style.transform = `
                translate(
                    ${moveX * 0.25}px,
                    ${moveY * 0.25}px
                )
                rotate(-3deg)
                scale(1.02)
            `;

        });


        /* ======================================
           RESET WHEN MOUSE LEAVES
           ====================================== */

        coverArt.addEventListener("mouseleave", () => {

            blueShape.style.transform = "";

            portfolioWord.style.transform = "";

        });

    }

});

/* =========================================================
   DESIGNBYTHEDAVE
   SECTION 2 JAVASCRIPT
   ========================================================= */


/* =========================================================
   TAGLINE TYPING EFFECT
   ========================================================= */

const typingText =
    "If you can picture it, I can capture it.";

const typingElement =
    document.getElementById("typing-text");

let typingPosition = 0;

function typeTagline() {

    if (!typingElement) {
        return;
    }

    if (typingPosition < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(typingPosition);

        typingPosition++;

        setTimeout(
            typeTagline,
            70
        );
    }
}

typeTagline();


/* =========================================================
   PROFILE PHOTO TILT
   ========================================================= */

const profilePhoto =
    document.querySelector(".profile-photo");

if (profilePhoto) {

    profilePhoto.addEventListener(
        "mousemove",
        function(event) {

            const box =
                profilePhoto.getBoundingClientRect();

            const x =
                event.clientX - box.left;

            const y =
                event.clientY - box.top;

            const centerX =
                box.width / 2;

            const centerY =
                box.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            profilePhoto.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;
        }
    );


    profilePhoto.addEventListener(
        "mouseleave",
        function() {

            profilePhoto.style.transform = "";

        }
    );
}

/* =========================================================
   DESIGNBYTHEDAVE
   POSTER IMAGE PREVIEW
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll(
        ".poster-collage-two, .book-cover-grid, .brand-mockup-grid, .social-media-grid"
    );

    if (galleries.length === 0) {
        return;
    }

    const lightbox = document.createElement("dialog");
    lightbox.className = "poster-lightbox";
    lightbox.setAttribute("aria-label", "Portfolio image preview");

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "poster-lightbox-close";
    closeButton.setAttribute("aria-label", "Close image preview");
    closeButton.textContent = "Close";

    const previewImage = document.createElement("img");
    previewImage.alt = "";

    lightbox.append(closeButton, previewImage);
    document.body.append(lightbox);

    function openPreview(card) {
        const image = card.querySelector("img");

        if (!image) {
            return;
        }

        previewImage.src = image.currentSrc || image.src;
        previewImage.alt = image.alt || "Poster design";
        lightbox.showModal();
        closeButton.focus();
    }

    galleries.forEach((gallery) => {
        gallery.querySelectorAll(
            ".poster-card-two-item, .book-cover-card, .brand-mockup-card, .social-design-card"
        ).forEach((card) => {
            const image = card.querySelector("img");

            if (!image) {
                return;
            }

            card.tabIndex = 0;
            card.setAttribute("role", "button");
            card.setAttribute(
                "aria-label",
                `View ${image.alt || "portfolio image"} larger`
            );

            card.addEventListener("click", () => openPreview(card));
            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openPreview(card);
                }
            });
        });
    });

    closeButton.addEventListener("click", () => lightbox.close());

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });

    lightbox.addEventListener("close", () => {
        previewImage.removeAttribute("src");
    });
});
