import { 
    update as updateSnake, 
    draw as drawSnake,
    SNAKE_SPEED ,
    getSnakeHead,
    snakeIntersection,
} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document .getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('you lost, press ok to restart')) {
            window.location = '/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
updateSnake()
updateFood()
checkDeth()
}

function draw() {
gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}

function checkDeth() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}