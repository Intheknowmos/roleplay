import characterData from "./data.js"
import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "/index.js"

// function Character (data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.setDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount)
//         this.diceArray = this.currentDiceScore.map(num =>
//             `<div class="dice">${num}</div>`).join("")
//     }

//     this.maxHealth = this.health

//     this.getHealthBarHtml = function () {
//         const percent = getPercentage(this.health, this.maxHealth)
//         console.log(percent)

//         return `
//         <div class="health-bar-outer">
//             <div class="health-bar-inner ${percent < 25 ? "danger" : ""}" 
//             style="width: ${percent}%;">
//             </div>
//         </div>`

//     }

//     this.takeDamage = function (attackScoreArray) {
//         const totalAttackScore = attackScoreArray.reduce((total, currentScore)=> total + currentScore)
        
//         this.health = this.health - totalAttackScore
//         if (this.health <= 0) {
//             this.health = 0
//             this.isDead = true
//             console.log(this.isDead)
//         }
//     }

//     this.getCharacterHtml = function () {
//         const {fname, avatar, health, diceArray, diceCount} = this
//         const healthBar = this.getHealthBarHtml()

        
//         return  `
//             <div class="character-card">
//                 <h4 class="name"> ${fname} </h4>
//                 <img class="avatar" src="${avatar}"/>
//                 <p class="health">health: <b> ${health} </b></p>
//                 ${healthBar}
//                 <div class="dice-container">
//                 ${diceArray} 
//                 </div>
//             </div> 
//         `

//     }
// }

class Character {

    constructor (data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceArray = getDicePlaceholderHtml(this.diceCount)
    }


    setDiceHtml () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num =>
            `<div class="dice">${num}</div>`).join("")
    }

    

    getHealthBarHtml () {
        const percent = getPercentage(this.health, this.maxHealth)
        console.log(percent)

        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 25 ? "danger" : ""}" 
            style="width: ${percent}%;">
            </div>
        </div>`

    }

    takeDamage (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, currentScore)=> total + currentScore)
        
        this.health = this.health - totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.isDead = true
            console.log(this.isDead)
        }
    }

    getCharacterHtml () {
        const {fname, avatar, health, diceArray} = this
        const healthBar = this.getHealthBarHtml()

        
        return  `
            <div class="character-card">
                <h4 class="name"> ${fname} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
                <div class="dice-container">
                ${diceArray} 
                </div>
            </div> 
        `

    }
}



export {Character}