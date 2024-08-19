const counter = document.getElementById("counter")
const btnIncrement = document.getElementById("increment")
const btnDecrease = document.getElementById("decrease")
const btnReset = document.getElementById("reset")

btnIncrement.addEventListener("click", () => {
    counter.textContent = Number(counter.textContent)+1
})

btnDecrease.addEventListener("click", () => {
    counter.textContent = Number(counter.textContent)-1
})

btnReset.addEventListener("click", () => {
    counter.textContent = 0
})
