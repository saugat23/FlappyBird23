const birdElement = document.querySelector("#bird")
const BIRD_SPEED = 0.35
const JUMP_DURATION = 200
let timeSinceLastJump = Number.POSITIVE_INFINITY

export function setupBird(){
    setTop(window.innerHeight / 2)
    document.removeEventListener('keydown', handleJump)
    document.addEventListener('keydown', handleJump)
}

export function updateBird(delta){
    if(timeSinceLastJump < JUMP_DURATION){
        setTop(getTop() - BIRD_SPEED * delta)
    }else{
        setTop(getTop() + BIRD_SPEED * delta)
    }

    timeSinceLastJump += delta
}

export function getBirdRect(){
    return birdElement.getBoundingClientRect()
}

function setTop(top){
    birdElement.style.setProperty("--bird-top", top)
}

function getTop(){
    return parseFloat(getComputedStyle(birdElement).getPropertyValue("--bird-top"))
}

function handleJump(e){
    if(e.code !== "Space") return

    timeSinceLastJump = 0
}