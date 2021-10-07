let clear = document.getElementById('clear')
let display = document.getElementById('display')

let buttons = document.querySelectorAll('.number-button')
console.log(buttons)

for (let button of buttons) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText
    })
}

clear.addEventListener('click', () => {
    display.innerText = ""
})

let equals = document.getElementById('equals')

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
   console.log("button clicked")
})