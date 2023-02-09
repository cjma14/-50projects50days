const CARDS = document.querySelectorAll('.card')

console.log("asda");
CARDS.forEach(card => {
    card.addEventListener("click", () => {
        removeActiveClasses()
        card.classList.add("card--active")
    })
})


function removeActiveClasses() {
    CARDS.forEach(card => {
        card.classList.remove("card--active")
    })
}