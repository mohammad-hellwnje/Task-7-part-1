//first section
let firstNum = document.getElementById("frist-number")
let secondNum = document.getElementById("second-number")
let thirdNum = document.getElementById("third-number")
let MAX = document.getElementById("maxnumber")
let MIN = document.getElementById("minnumber")


function maxminNumber() {
    let num1 = firstNum.value
    let num2 = secondNum.value
    let num3 = thirdNum.value
    let max = Math.max(num1 , num2 , num3)
    let min = Math.min(num1 , num2 , num3 )
    MAX.innerText = ""
    MIN.innerText = ""
    MAX.innerText = max
    MIN.innerText = min
    firstNum.value = '';
    secondNum.value = '';
    thirdNum.value = '';
}
//second section

let inputCharacter = document.getElementById("inputcharacter")
let test = document.getElementById("Test")

function testCharacter() {
    let character = inputCharacter.value;
    if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
        test.innerText ="The Character Is VOWEL"
    }
    else {
        test.innerText ="The Character Is Consonant"
    }
    inputCharacter.value = '';
}

//third section
let numberInput = document.getElementById("numberinput")
let multiRes = document.getElementById("multiRes")

function Multiplication () {
    multiRes.innerText = " "
    for ( let i = 1 ; i <=12 ; i++) {
        let res = numberInput.value*i
        multiRes.innerHTML += res
        multiRes.innerText += " "
    }
    numberInput.value = ""
    
}
// section four
let evenNumber = document.getElementById("even-input")
let even = document.getElementById("even")

function evenNumbers() {
    even.innerText = " "
    for (let i = 1 ; i <= evenNumber.value ; i++) {
        if (i % 2 == 0) {
          even.innerHTML += i
          even.innerText += "  "  
        }
    }
    evenNumber.value = ""
}

//section five 
let sub1 = document.getElementById("sub1")
let sub2 = document.getElementById("sub2")
let sub3 = document.getElementById("sub3")
let sub4 = document.getElementById("sub4")
let sub5 = document.getElementById("sub5")
let total = document.getElementById("total")
let average = document.getElementById("average")
let Percentage = document.getElementById("Percentage")
function Marks () {

    let totalMark = +sub1.value + +sub2.value + +sub3.value + +sub4.value + +sub5.value
    total.innerText = ""
    total.innerText = totalMark
    let avg = totalMark / 5
    average.innerText = ""
    average.innerText = avg
    let per = (totalMark / 500) * 100
    Percentage.innerText =""
    Percentage.innerText = per
    sub1.value = ''
    sub2.value = ''
    sub3.value = ''
    sub4.value = ''
    sub5.value = ''
}

//section six 
 
let phy =document.getElementById("physics")
let che =document.getElementById("chemistry")
let bio =document.getElementById("biology")
let mat =document.getElementById("mathematics")
let com =document.getElementById("computer")
let perc = document.getElementById("perc")
let Grade = document.getElementById("Grade")

function percentageGrade () {
    let sum = +phy.value + +che.value + +bio.value + +mat.value + +com.value
    let perc1 = (sum / 500) * 100
    if (perc1 >= 90) {
        perc.innerText = perc1
        Grade.innerText = "A"
    }
    else if (perc1 >= 80 ){
        perc.innerText = perc1
        Grade.innerText = "B"
    }
    else if (perc1 >= 70){
        perc.innerText = perc1
        Grade.innerText = "C"
    }
    else if (perc1 >= 60){
        perc.innerText = perc1
        Grade.innerText = "D"
    }
    else if (perc1 >= 40){
        perc.innerText = perc1
        Grade.innerText = "E"
    }
    else {
        perc.innerText = perc1
        Grade.innerText = "F"
    }
    phy.value = ''
    che.value = ''
    bio.value = ''
    mat.value = ''
    com.value = ''

}