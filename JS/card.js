
const card = (titleTwo, paraOne, paraTwo, paraThree) => {
    let div = document.createElement("div")
    div.className = "ClassC"
    div.innerHTML = `<h1>${titleTwo}</h1>
                     <p>${paraOne}</p>
                     <p>${paraTwo}</p>
                     <p>${paraThree}</p>`
                     
    return div
}

export {card}