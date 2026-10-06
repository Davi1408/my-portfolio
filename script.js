document.addEventListener("DOMContentLoaded", () => {

    const coverArt = document.querySelector(".cover-art");
    const blueShape = document.querySelector(".blue-shape");
    const portfolioWord = document.querySelector(".portfolio-word");
    const graphicLabel = document.querySelector(".graphic-label");
    const portfolioLabel = document.querySelector(".portfolio-label");
    const designerName = document.querySelector(".designer-name");
    const scrollDown = document.querySelector(".scroll-down");

    if (coverArt && blueShape && portfolioWord) {

        coverArt.addEventListener("mousemove", (event) => {
            const rect = coverArt.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (mouseX - centerX) / 35;
            const moveY = (mouseY - centerY) / 35;

            const baseBlueTransform = "translate(-50%, -50%) rotate(-2deg)";
            const baseWordTransform = "translate(-50%, -50%) rotate(-3deg)";

            blueShape.style.transform = `${baseBlueTransform} translate(${moveX}px, ${moveY}px) scale(1.04)`;
            portfolioWord.style.transform = `${baseWordTransform} translate(${moveX * 0.35}px, ${moveY * 0.35}px) scale(1.02)`;

            if (graphicLabel) {
                graphicLabel.style.transform = `rotate(${(-17 + moveX * 0.15).toFixed(2)}deg) translate(${moveX * 0.3}px, ${moveY * 0.25}px)`;
            }

            if (portfolioLabel) {
                portfolioLabel.style.transform = `rotate(${(8 + moveX * 0.12).toFixed(2)}deg) translate(${moveX * 0.25}px, ${moveY * 0.2}px)`;
            }

            if (designerName) {
                designerName.style.transform = `rotate(${(8 + moveX * 0.15).toFixed(2)}deg) translate(${moveX * 0.2}px, ${moveY * 0.2}px)`;
            }
        });

        coverArt.addEventListener("mouseleave", () => {
            blueShape.style.transform = "translate(-50%, -50%) rotate(-2deg)";
            portfolioWord.style.transform = "translate(-50%, -50%) rotate(-3deg)";

            if (graphicLabel) {
                graphicLabel.style.transform = "rotate(-17deg)";
            }

            if (portfolioLabel) {
                portfolioLabel.style.transform = "rotate(8deg)";
            }

            if (designerName) {
                designerName.style.transform = "rotate(8deg)";
            }
        });
    }

    if (scrollDown) {
        scrollDown.addEventListener("click", () => {
            const nextSection = document.querySelector("#about, .portfolio-section");

            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
