document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");
    const papers = document.querySelectorAll(".paper");
    let currentPageIndex = 0;

    prevBtn.addEventListener("click", goPrevPage);
    nextBtn.addEventListener("click", goNextPage);

    function goPrevPage() {
        if (currentPageIndex > 0) {
            papers[currentPageIndex].classList.remove("visible");
            currentPageIndex--;
            papers[currentPageIndex].classList.add("visible");
        }
    }

    function goNextPage() {
        if (currentPageIndex < papers.length - 1) {
            papers[currentPageIndex].classList.remove("visible");
            currentPageIndex++;
            papers[currentPageIndex].classList.add("visible");
        }
    }
});
