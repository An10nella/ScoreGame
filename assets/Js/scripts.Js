

var count = 0
var count1 = 0

var resetBtn = document.getElementById("new_game")

var home = document.getElementById("home")
var guest = document.getElementById("guest")

var counterEl = document.getElementById("home-score")

var incrementBtn = document.getElementById("button_score")

var result = document.getElementById("stats-score")








function increment() {
    count += 1

    counterEl.textContent = count

    result.textContent = "Home is :" + count
    loopCounter()
}


function increment0() {
    count += 2
    counterEl.textContent = count
    result.textContent = "Home is : " + count
    loopCounter()

}

function increment00() {
    count += 3
    counterEl.textContent = count
    result.textContent = "Home is :" + count
    loopCounter()
}

loopCounter()

var counterEl2 = document.getElementById("button-guest")
var incrementBtn2 = document.getElementById("guest_score")




function increment2() {
    count1 += 1
    counterEl2.textContent = count1
    result.textContent = "Guest is :" + count1
    loopCounter()

}


function increment22() {
    count1 += 2
    counterEl2.textContent = count1
    result.textContent = "Guest is :" + count1
    loopCounter()
}


function increment222() {
    count1 += 3
    counterEl2.textContent = count1
    result.textContent = "Guest is :" + count1
    loopCounter()

}



function reset() {
    count = 0
    counterEl.textContent = count
    result.textContent = "SAME SCORE BOTH"
    color2()
    count1 = 0
    counterEl2.textContent = count1
    result.textContent = "SAME SCORE BOTH"
    color2()
}



function loopCounter() {
    var difference = count - count1
    var difference1  = count1 -count
   
    if (count > count1) {

        result.textContent = "HOME IS HIGHER BY" + difference
        color()
       
       
        
    }

    else if (count < count1) {

        result.textContent = "GUEST ID HIGHER BY" + difference1
        color1()
        
    }

    else {
        result.textContent = "HOME AND GUEST ARE EQUAL"
    }


}
function color(){
    home.style.backgroundColor =" #f94f6d"
    guest.style.backgroundColor=" #1b244a"
    
}
function color1(){
    guest.style.backgroundColor="#f94f6d"
    home.style.backgroundColor="#1b244a"

}

function color2(){
    home.style.backgroundColor="#1b244a"
    guest.style.backgroundColor="#1b244a"

}












