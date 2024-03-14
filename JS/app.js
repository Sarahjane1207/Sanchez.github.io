import{info} from "./info.js"
import{img} from "./img.js"
import {imgOne} from "./img.js"
import {imgTwo} from "./img.js"
import {imgThree} from "./img.js"
import{card} from "./card.js"

const data ={
    title       : "SANCHU",
    para        : "Hello, I'm glad that you're here! I am Sarah Jane C. Sanchez, a 2nd year BSIT student .",
    contactBtn  : "Contact Me",
    myImage     : "girl3.jpg"
}

const datatwo ={
    titleTwo: "PROJECT COMPLETED",
    imageOne: "projectOne.jpg",
    paraOne: " PBL, students are given the freedom and chance to discover real-world problems and form a deeper and more improved understanding. Starting with the PBL is not easy, there are lots of stakeholders including administrators and colleagues and not to forget parents and, in this hustle, and bustle educators tend to forget the students.", 

    imageTwo: "Project.jpg",
    paraTwo: "Kevin Jones, a cancer researcher, describes his work as “taking a bath in uncertainty and unknowns and exceptions and outliers.” School administrators can relate. Dr. Jones suggests the two most important values, given the level of uncertainty in his line of work, are humility and curiosity.", 

    imageThree: "projectTwo.jpg",
    paraThree: "The Focus Project promotes project-​oriented learning. Students develop a concept, design, calculate and build a product; working together in teams from the initial idea through to a fully-​functioning prototype."
}

const {title, para, contactBtn, myImage} = data
const {titleTwo, imageOne, paraOne, imageTwo,  paraTwo, imageThree, paraThree} = datatwo

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(info(title, para, contactBtn))
sectionOne.append(img(myImage))
sectionTwo.append(card(titleTwo, paraOne, paraTwo, paraThree))
sectionTwo.append(imgOne(imageOne))
sectionTwo.append(imgTwo(imageTwo))
sectionTwo.append(imgThree(imageThree))