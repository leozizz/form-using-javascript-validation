const inputs = document.querySelectorAll(".input")

let formControl = document.querySelectorAll(".form-control")

const submitButton = document.querySelector('#submit')

submitButton.addEventListener("click", function(e) {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    inputs.forEach(function (item) {
        if (item.value === "") {
            errorAlert(item)
        } else {
            console.log(item, item.value)
            successAlert(item)
        }
    })}

function errorAlert(item) {
    item.style.borderColor = "#F52E2E"
    formControl.forEach(function (item) {
        item.className = "form-control error"
    })
}

function successAlert(item) {
    item.style.borderColor = "#00C22B"
    formControl.forEach(function (item) {
        item.className = "form-control success"
    })
}