document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
    ]

    console.log(cardArray.sort(() => 0.5 - Math.random()))
    let cardChosen = []
    let cardChosenIds = []
    let cardsWon = []

    const gird = document.querySelector('.grid')
    const resultDisplay = document.querySelector("#result")
    resultDisplay.innerHTML='John'

    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gird.appendChild(card)

        }
    }

    createBoard()

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenIds.push(cardId)
        console.log(cardChosenIds)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardChosenIds[0]
        const optionTwoId = cardChosenIds[1]
        if (optionOneId === optionTwoId) {
            alert('You have clicked the same image!')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        } else if (cardChosen[0] === cardChosen[1]) {
            alert('You have found a match')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('Sorry, try again!')
        }
        console.log(cardsWon);
        cardChosen = []
        cardChosenIds = []

    resultDisplay.textContent=cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congralations! You have won!'
    }
}


})