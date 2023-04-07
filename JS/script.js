let h1 = document.querySelector("h1")
let add = document.querySelector(".plus")
let reduce = document.querySelector(".minus")
let zero = document.querySelector(".reset")
let anyNumber = document.querySelector(".random")
let int = 0

add.onclick = () => {
    int++
    h1.innerHTML = int
}

reduce.onclick = () => {
    int--
    h1.innerHTML = int
}

zero.onclick = () => {
    int = 0
    h1.innerHTML = int
}

anyNumber.onclick = () => {
    int = Math.round(Math.random() * 100)
    h1.innerHTML = int
}