const ratingRange = document.querySelector ('#ratingRange');
const ratingValue = document.querySelector ('#ratingValue');

ratingRange.addEventListener( 'input' , () => {
    ratingValue.textContent = ratingRange.value;
})