// Testimonials Section:
        //////////////////////////////////////////////
        const prev = document.getElementById("t-prev");
        const next = document.getElementById("t-next");

        prev.addEventListener("click", function () {
            /* Find the current card */
            const currCard = document.querySelector(".t-wrap.t-view");
            /* Set the prevCard based on its availability */
            const prevCard = currCard.previousElementSibling
                ? currCard.previousElementSibling
                : document.querySelector(".t").lastElementChild;
            currCard.classList.remove("t-view");
            prevCard.classList.add("t-view");
        });

        next.addEventListener("click", function () {
            /* Find the current card */
            const currCard = document.querySelector(".t-wrap.t-view");
            /* Set the nextCard based on its availability */
            const nextCard = currCard.nextElementSibling
                ? currCard.nextElementSibling
                : document.querySelector(".t").firstElementChild;
            currCard.classList.remove("t-view");
            nextCard.classList.add("t-view");
        });