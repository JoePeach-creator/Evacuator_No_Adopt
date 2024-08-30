const mySlider = new Splide('#mySlider',{
    perPage: 2,
    gap:'32px'
});

mySlider.mount()


document.addEventListener("DOMContentLoaded", function() {
    const btnOne = document.querySelector(".block__btn-price");
    const btnTwo = document.querySelector(".block__btn-oreder");
    const contentOne = document.querySelector(".order__content");
    const contentTwo = document.querySelector(".price__content");

    btnOne.addEventListener("click", function() {
        btnOne.classList.add("btn-active");
        btnTwo.classList.remove("btn-active");

        contentOne.style.display = "block";
        contentTwo.style.display = "none";
    });

    btnTwo.addEventListener("click", function() {
        btnTwo.classList.add("btn-active");
        btnOne.classList.remove("btn-active");

        contentTwo.style.display = "block";
        contentOne.style.display = "none";
    });
});