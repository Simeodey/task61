import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
const prices = document.querySelectorAll('p')
prices.forEach(el=>
  {
    if(el.className.includes('hot')){
      el.innerHTML = el.innerHTML + '🔥'
    }
  })

});
