
const img = (image) => {
    let div = document.createElement("div")
    div.className = "ClassI"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

const imgOne = (image) => {
    let div = document.createElement("div")
    div.className = "ClassA"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

const imgTwo = (image) => {
    let div = document.createElement("div")
    div.className = "ClassB"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

const imgThree = (image) => {
    let div = document.createElement("div")
    div.className = "ClassF"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}
export {img,imgOne, imgTwo,imgThree}