const ratingRange = document.querySelector ('#ratingRange');
const ratingValue = document.querySelector ('#ratingValue');

ratingRange.addEventListener( 'input' , () => {
    ratingValue.textContent = ratingRange.value;
})

// logica para el menu en responsil

const buttonmovile = document.getElementById("bouton-movile")
      const mobilecolose=document.getElementById("close-navbar");
      const mobilenav=document.getElementById("navbar-movile");
      buttonmovile.addEventListener("click", ()=>{
        mobilenav.classList.add("mostrar")
        mobilecolose.classList.add("ocultar")
      })

      mobilecolose.addEventListener("click", ()=>{
        mobilenav.classList.remove("mostrar")
        mobilecolose.classList.remove("ocultar")
      })