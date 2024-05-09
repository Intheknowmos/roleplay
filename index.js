import characterData from "/data.js"
import {Character} from "/character.js"

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false


let getDiceRollArray = (diceCount)=> {

    return new Array(diceCount).fill("0").map(()=> {
        return Math.floor(Math.random() * 6) + 1
    })
}

let getDicePlaceholderHtml = (diceCount)=> {
    return new Array(diceCount).fill(0).map(()=> {
        return `<div class="placeholder-dice"></div>`
    }).join("")
}

const getPercentage = (remainingHealth, maximumHealth) => {
    return (100 * remainingHealth) / maximumHealth
}

const getNewMonster = ()=> {
    const nextMonsterData = characterData[monstersArray.shift()]

    return nextMonsterData ? new Character(nextMonsterData) : {}
}


// let getDiceHtml = (diceCount)=> {
//     return getDiceRollArray(diceCount).map((diceRolls)=> {
//         return `<div class="dice">${diceRolls}</div>`
//     }).join("")
// }

let attack = ()=> {
    if (!isWaiting) {
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
    
        if (wizard.isDead) {
            setTimeout(endGame, 1500)
        } else if (monster.isDead) {
            isWaiting = true
            if (monstersArray.length > 0) {
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                }, 1000)
            } else {
                setTimeout(endGame, 1500)
            }
        }
    }
}

const endGame = ()=> {
    isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ? "No victors, all creatures are dead" : wizard.health > 0 ? "The Wizard Wins" : "The Orc is Victorious" 
    const endEmoji = wizard.health === 0 && monster.health === 0 ? "☠️" : wizard.health > 0 ? "🔮" : "👽" 

    document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
  
    console.log(endMessage)
}

document.getElementById("attack-button").addEventListener("click", attack)





const wizard = new Character(characterData.hero)

let monster = getNewMonster()



let render = ()=> {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

render()

// let renderCharacter = (data) => {
//     const {elementId, fname, avatar, health, diceCount} = data

//     const diceHtml = getDiceHtml(diceCount)
    
    
//     document.getElementById(elementId).innerHTML = `
//         <div class="character-card">
//             <h4 class="name"> ${fname} </h4>
//             <img class="avatar" src="${avatar}"/>
//             <p class="health">health: <b> ${health} </b></p>
//             <div class="dice-container">
//              ${diceHtml} 
//             </div>
//         </div> 
//         `

// }

// renderCharacter(hero)
// renderCharacter(monster)

const energyCostEuros = [140, 153, 164, 153, 128, 146]
const exchangeRate = 1.13

const energyCostDollars = energyCostEuros.map((energyCost)=> {
    return energyCost * exchangeRate
})
console.log(energyCostDollars)

////////////////////////////
/// Constructor function //////

const animalForRelease1 = {
    name: 'Tilly',
    species: 'tiger',
    weightKg: 56,
    age: 2,
    dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
    name: 'Nelly',
    species: 'elephant',
    weightKg: 320,
    age: 16,
    dateOfRelease: '03-02-2022'
}

function Animal (data) {
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weightKg
    this.age = data.age
    this.dateOfRelease = data.dateOfRelease
    this.summarize = function () {
        console.log(`${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`)
    }
}

const tellyTheTiger = new Animal(animalForRelease1)
tellyTheTiger.summarize()

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}






