let enterButton = document.getElementById("enter-btn")
let allButtons = document.querySelectorAll(".token")

let player = {
    name:"",
    money:0,
    token:0
}




// setting money and name
function saveButtonValue(event){
    let buttonValue = event.target.value

    player.token = buttonValue
    player.money = buttonValue
    
    // setting name
    let playerName = document.getElementById("name").value
    player.name = playerName

    localStorage.setItem("playerObject", JSON.stringify(player))
}

allButtons.forEach(button => {
    button.addEventListener("click", saveButtonValue)
    
})

// events for "ENTER" button
enterButton.addEventListener("click", function(){

    window.location.href = "desk.html"

})


























