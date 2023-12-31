// CARD ARRAY
const cardArray = [
    { location: "cards_png/2_of_clubs.png", value: 2 },
    { location: "cards_png/2_of_diamonds.png", value: 2 },
    { location: "cards_png/2_of_hearts.png", value: 2 },
    { location: "cards_png/2_of_spades.png", value: 2 },
    { location: "cards_png/3_of_clubs.png", value: 3 },
    { location: "cards_png/3_of_diamonds.png", value: 3 },
    { location: "cards_png/3_of_hearts.png", value: 3 },
    { location: "cards_png/3_of_spades.png", value: 3 },
    { location: "cards_png/4_of_clubs.png", value: 4 },
    { location: "cards_png/4_of_diamonds.png", value: 4 },
    { location: "cards_png/4_of_hearts.png", value: 4 },
    { location: "cards_png/4_of_spades.png", value: 4 },
    { location: "cards_png/5_of_clubs.png", value: 5 },
    { location: "cards_png/5_of_diamonds.png", value: 5 },
    { location: "cards_png/5_of_hearts.png", value: 5 },
    { location: "cards_png/5_of_spades.png", value: 5 },
    { location: "cards_png/6_of_clubs.png", value: 6 },
    { location: "cards_png/6_of_diamonds.png", value: 6 },
    { location: "cards_png/6_of_hearts.png", value: 6 },
    { location: "cards_png/6_of_spades.png", value: 6 },
    { location: "cards_png/7_of_clubs.png", value: 7 },
    { location: "cards_png/7_of_diamonds.png", value: 7 },
    { location: "cards_png/7_of_hearts.png", value: 7 },
    { location: "cards_png/7_of_spades.png", value: 7 },
    { location: "cards_png/8_of_clubs.png", value: 8 },
    { location: "cards_png/8_of_diamonds.png", value: 8 },
    { location: "cards_png/8_of_hearts.png", value: 8 },
    { location: "cards_png/8_of_spades.png", value: 8 },
    { location: "cards_png/9_of_clubs.png", value: 9 },
    { location: "cards_png/9_of_diamonds.png", value: 9 },
    { location: "cards_png/9_of_hearts.png", value: 9 },
    { location: "cards_png/9_of_spades.png", value: 9 },
    { location: "cards_png/10_of_clubs.png", value: 10 },
    { location: "cards_png/10_of_diamonds.png", value: 10 },
    { location: "cards_png/10_of_hearts.png", value: 10 },
    { location: "cards_png/10_of_spades.png", value: 10 },
    { location: "cards_png/ace_of_clubs.png", value: 1 },
    { location: "cards_png/ace_of_diamonds.png", value: 1 },
    { location: "cards_png/ace_of_hearts.png", value: 1 },
    { location: "cards_png/ace_of_spades.png", value: 1 },
    { location: "cards_png/jack_of_clubs.png", value: 10 },
    { location: "cards_png/jack_of_diamonds.png", value: 10 },
    { location: "cards_png/jack_of_hearts.png", value: 10 },
    { location: "cards_png/jack_of_spades.png", value: 10 },
    { location: "cards_png/king_of_clubs.png", value: 10 },
    { location: "cards_png/king_of_diamonds.png", value: 10 },
    { location: "cards_png/king_of_hearts.png", value: 10 },
    { location: "cards_png/king_of_spades.png", value: 10 },
    { location: "cards_png/queen_of_clubs.png", value: 10 },
    { location: "cards_png/queen_of_diamonds.png", value: 10 },
    { location: "cards_png/queen_of_hearts.png", value: 10 },
    { location: "cards_png/queen_of_spades.png", value: 10 },
];


////////////////////////////////////// //////////////////////////////////////////////////////////////////////
/*                         MAIN PART OF CODE STRUCTURE                                   */

// Variables for Player
let cards = []
let sum = 0
var hasPlayerBlackJack;
let isAlive = false
let isDebited = false


// Variables for general usage
let message = ""
let orderofcard;

// Variables for Croupier
let cardsForCroupier = []
let sumForCroupier = 0
var hasCroupierBlackJack;



// randomized array for cards
var randomized

// unknown card for Courpier
var unknown_ImageForCroupier




// DOM Elements
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let sumForCroupierEl = document.getElementById("kerim-sum-el")
let cardsEl = document.getElementById("cards-el")
let cardsForCroupierEl = document.getElementById("kerim-cards-el")

let playerEl = document.getElementById("player-el")

let cardsImgPartForPlayerEl = document.getElementById("cards-img-for-player")
let cardsImgPartForCroupierEl = document.getElementById("croupier-cards-part")

// DOM Buttons
let startGameButton = document.getElementById("start-btn")
let newCardButton = document.getElementById("newcard-btn")
let standButton = document.getElementById("stand-btn")
let leaveButton = document.getElementById("leave-btn")






////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Functions....

function clearDesk(){
    cardsImgPartForPlayerEl.innerHTML = null
    cardsImgPartForCroupierEl.innerHTML = null
}


// Fetching name, money and token of the player
function getName(){
    let retrievedPlayerObject = JSON.parse(localStorage.getItem("playerObject"))
    let PlayerName = retrievedPlayerObject.name
    return PlayerName
}

function getMoney(){
    let retrievedPlayerObject = JSON.parse(localStorage.getItem("playerObject"))
    let PlayerMoney = Number(retrievedPlayerObject.money)
    return PlayerMoney
}

function getToken(){
    let retrievedPlayerObject = JSON.parse(localStorage.getItem("playerObject"))
    let PlayerToken = Number(retrievedPlayerObject.token)
    return PlayerToken
}


// Function for showing info about name and money of the player
function getInfo(nameval, moneyval){

    playerEl.innerHTML = `Player: ${nameval} Money: ${moneyval}$`
}


// BUTTON'S EVENT LISTENERS
startGameButton.addEventListener("click", function(){
    if( isDebited === false){
        hasPlayerBlackJack = false
        hasCroupierBlackJack = false
        clearDesk()
        isAlive = true


        randomized = Array.from({length:52}, (_, i) => i).sort(function(a,b){return 0.5 - Math.random()})

        orderofcard = 0

        // Showing first card for croupier
        let card1ForCroupier = cardArray[randomized[orderofcard]]
        
        let card1_ImageForCroupier = document.createElement("img")
        card1_ImageForCroupier.src = card1ForCroupier.location
        cardsImgPartForCroupierEl.append(card1_ImageForCroupier)

        // unknown card for Croupier
        unknown_ImageForCroupier = document.createElement("img")
        unknown_ImageForCroupier.src = "images/un.png"
        cardsImgPartForCroupierEl.append(unknown_ImageForCroupier)


        let firstCardForCroupier = card1ForCroupier.value
        cardsForCroupier = [firstCardForCroupier]
        sumForCroupier = firstCardForCroupier



        // Showing 2 card for Player onto desk

        orderofcard++;
        let card1 = cardArray[randomized[orderofcard]]
        orderofcard++;
        let card2 = cardArray[randomized[orderofcard]]

        // card1
        let card1_ImageForPlayer = document.createElement("img")
        card1_ImageForPlayer.src = card1.location
        cardsImgPartForPlayerEl.append(card1_ImageForPlayer)

        // card2
        let card2_ImageForPlayer = document.createElement("img")
        card2_ImageForPlayer.src = card2.location
        cardsImgPartForPlayerEl.append(card2_ImageForPlayer)


        let firstCard = card1.value
        let secondCard = card2.value
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        

        let PlayerMoney = getMoney()
        let PlayerName = getName()

        getInfo(PlayerName, PlayerMoney)
        renderGame()
    }
    
}) 



//RENDERING OPERATIONS (MOST IMPORTANT PART)
function renderGame(){

    // Message Part Style Properties
    let messageColor = "white"
    let messageBackgroundColor = null

    cardsEl.textContent = "Cards(Player): "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    cardsForCroupierEl.textContent = "Cards(Croupier): "
    for(let i = 0; i<cardsForCroupier.length; i++){
        cardsForCroupierEl.textContent += cardsForCroupier[i] + " "
    }
    
    
    sumEl.textContent = "Sum(Player): " + sum
    sumForCroupierEl.textContent = "Sum(Courpier): " + sumForCroupier


    // WIN/LOSE CONDITIONS...
    let name = getName()
    let money = getMoney()
    let token = getToken()


    if (sum <= 20) {
        if (isAlive === true){
        message = "Do you want to draw a new card?"
        }
        else{
            if(sumForCroupier > 21){
                message = "YOU WON"
                money += token
            }
            else if (sumForCroupier <=20){
                if (sum > sumForCroupier){
                    message = "YOU WON :):)"
                    money += token
                }
                else if (sum === sumForCroupier){
                    message = "DRAWN"
                    messageColor = "yellow"
                    money += (token/2)
                }
                else{
                    message = "YOU LOST"
                    money -= token
                }
            }
            else if (sumForCroupier === 21){
                message = "YOU LOST"
                money -= token
            }
        }
    } 
    else if (sum === 21) {
        if (sumForCroupier != 21){
            message = "Wohoo! You've got Blackjack!"
            hasPlayerBlackJack = true
            money += token
        }
        else{
            message = "DRAWN"
            messageColor = "yellow"
            hasPlayerBlackJack = true
            hasCroupierBlackJack = true
            money -= (token/2)
        }
    }
    else {
        message = "You're out of the game!"
        messageColor = "red"
        messageBackgroundColor= "white"
        isAlive = false
        money -= token
    }

    if(money <= 0){
        message = "PLEASE LEAVE THE GAME, EARN MONEY AND COME BACK!!!!"
        isDebited = true
        isAlive = false
    }

    // setting the new money value
    let newMoney = money

    let retrievedPlayerObject = JSON.parse(localStorage.getItem("playerObject"))

    retrievedPlayerObject.money = newMoney

    localStorage.setItem("playerObject", JSON.stringify(retrievedPlayerObject))

    // Adjusting style of message box
    messageEl.textContent = message
    messageEl.style.color = messageColor
    messageEl.style.backgroundColor = messageBackgroundColor

    getInfo(name, money)
}


newCardButton.addEventListener("click", function(){
    
    
    if(isAlive === true && hasPlayerBlackJack === false && hasCroupierBlackJack === false){

        // newCard
        orderofcard++
        let newCardForPlayer = cardArray[randomized[orderofcard]]

        // Showing new card onto desk
        let newCard_ImageForPlayer = document.createElement("img")
        newCard_ImageForPlayer.src = newCardForPlayer.location
        cardsImgPartForPlayerEl.append(newCard_ImageForPlayer)



        let card = newCardForPlayer.value
        sum += card
        cards.push(card)

        renderGame()
    }
}) 

standButton.addEventListener("click", function(){

    if(isAlive === true && hasPlayerBlackJack === false && hasCroupierBlackJack === false){
        isAlive = false


        orderofcard++;
        let newCardForCroupier = cardArray[randomized[orderofcard]]
        unknown_ImageForCroupier.src = newCardForCroupier.location

        let newCardValueForCroupier = newCardForCroupier.value
        sumForCroupier += newCardValueForCroupier
        cardsForCroupier.push(newCardValueForCroupier)


        if(sumForCroupier > 16){
        renderGame()
        }
        else{
            while (sumForCroupier <= 16){
                orderofcard++;
                let moreCardForCroupier = cardArray[randomized[orderofcard]]
    
                let moreCard_ImageForCroupier = document.createElement("img")
                moreCard_ImageForCroupier.src = moreCardForCroupier.location
                cardsImgPartForCroupierEl.append(moreCard_ImageForCroupier)
    
                let newCardValueForCroupier = moreCardForCroupier.value
                sumForCroupier += newCardValueForCroupier
                cardsForCroupier.push(newCardValueForCroupier)
    
                renderGame()
            }
        }
    }
})

leaveButton.addEventListener("click", function(){
    localStorage.clear()
    window.location.href = "index.html"
})
