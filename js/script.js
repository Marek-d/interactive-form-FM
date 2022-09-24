const form = document.querySelector("#form")
const cardHolderNameSpan = document.querySelector("#card-holder-name-js")
const cardNum = document.querySelector(".card-num-js")
const dateSpan = document.querySelector("#date-js")
const cvc = document.querySelector(".cvc-js")

form.addEventListener("input", (event) => {
    cardHolderNameSpan.textContent = form['card-holder-name'].value
    cardNum.textContent = form['card-number'].value
    dateSpan.textContent = `${form['dateMM'].value}/${form['dateYY'].value}`
    cvc.textContent = form['cvc'].value
})

form.addEventListener("submit", e => {
    e.preventDefault()

    let isError = false

    if (/\D/.test(form['card-number'].value)) {
        document.querySelector(".error-format").classList.remove("hide")
        form['card-number'].classList.add("border-red")
        isError = true
    } else {
        document.querySelector(".error-format").classList.add("hide")
        form['card-number'].classList.remove("border-red")
    }
    
    if (form['dateMM'].value.length === 0 || 
    form['dateYY'].value.length === 0) {
        document.querySelector(".error-blank-1").classList.remove("hide")
        form['dateMM'].classList.add("border-red")
        form['dateYY'].classList.add("border-red")
        isError = true
    } else {
        document.querySelector(".error-blank-1").classList.add("hide")
        form['dateMM'].classList.remove("border-red")
        form['dateYY'].classList.remove("border-red")
    }

    if (form['cvc'].value.length === 0) {
        document.querySelector(".error-blank-2").classList.remove("hide")
        form['cvc'].classList.add("border-red")
        isError = true
    } else {
        document.querySelector(".error-blank-2").classList.add("hide")
        form['cvc'].classList.remove("border-red")
    }

    if (!isError) {
        form.classList.add("hide")
        document.querySelector(".complete-container").classList.remove("hide")
    }
})

document.querySelector(".complete-container button").addEventListener("click", () => {
    form.classList.remove("hide")
    document.querySelector(".complete-container").classList.add("hide")

    form['card-holder-name'].value = ""
    form['card-number'].value = ""
    form['dateMM'].value = ""
    form['dateYY'].value = ""
    form['cvc'].value = ""

    location.reload()
})