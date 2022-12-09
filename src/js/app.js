import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
const prices = document.querySelectorAll('.hot')
prices.forEach(el=>{

      el.innerHTML+=' 🔥'
  })

});
