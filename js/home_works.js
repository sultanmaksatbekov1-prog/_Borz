const gmailInput = document.querySelector("#gmail_input")
const gmailBtn = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[\w]+@gmail\.com$/

gmailBtn.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = "red"
    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let x = 0
let y = 0
let speed = 2

const maxX = parentBlock.clientWidth - childBlock.clientWidth
const maxY = parentBlock.clientHeight - childBlock.clientHeight

let direction = 'right'

const move = () => {
  if (direction === 'right') {
    x += speed
    if (x >= maxX) direction = 'down'
  }

  else if (direction === 'down') {
    y += speed
    if (y >= maxY) direction = 'left'
  }

  else if (direction === 'left') {
    x -= speed
    if (x <= 0) direction = 'up'
  }

  else if (direction === 'up') {
    y -= speed
    if (y <= 0) direction = 'right'
  }

  childBlock.style.left = `${x}px`
  childBlock.style.top = `${y}px`

  requestAnimationFrame(move)
}

move()

//TIMER

const seconds = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let interval;
let secs = 0;

startBtn.onclick = () => {
    if (!interval) {
        interval = setInterval(() => {
            secs++;
            seconds.innerText = secs;
        }, 1000);
    }
};

stopBtn.onclick = () => {
    clearInterval(interval);
    interval = null;
};

resetBtn.onclick = () => {
    clearInterval(interval);
    interval = null;
    secs = 0;
    seconds.innerText = 0;
};

// CARDS

const charactersContainer = document.querySelector('.characters-list')

const xhr = new XMLHttpRequest()

xhr.open('GET', '../data/characters.json')
xhr.send()

xhr.onload = () => {
    const characters = JSON.parse(xhr.response)

    characters.forEach(character => {
        const card = document.createElement('div')
        card.className = 'character-card'

        card.innerHTML = 
            `<img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p><b>Birth:</b> ${character.birth}</p>
            <p>${character.bio}</p>
        `

        charactersContainer.append(card)
    })
}

const xhr2 = new XMLHttpRequest()

xhr2.open('GET', '../data/any.json')
xhr2.send()

xhr2.onload = () => {
    const data = JSON.parse(xhr2.response)
    console.log(data)
}