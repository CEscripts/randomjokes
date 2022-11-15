function marsName () {
    let name = '';
    const randomNum1 = Math.floor(Math.random() * 10)
    switch (randomNum1) {
        case 0:
            return name = "Nomios"
        case 1:
            return name = "Kitto"
        case 2:
            return name = "Dione"
        case 3:
            return name = "Daemons"
        case 4:
            return name = "Arae"
        case 5:
            return name = "Fruden"
        case 6:
            return name = "Eurydice"
        case 7:
            return name = "Aphrodit"
        case 8:
            return name = "Echion"
        case 9:
            return name = "Erebus"
    }
    return name
}
function marsSaying () {
    const randomNum2 = Math.floor(Math.random() * 10)
    switch (randomNum2) {
        case 0:
            return "I’ve come to a point in my life where I need a stronger word than fuck"
        case 1:
            return `When someone points at your black clothes and asks whose funeral it is, having a look around the room and saying
            'Haven’t decided yet' is typically a good respons.`
        case 2:
            return "Okay okay stop asking me if I'm straight, gay, bi, whatever. I identify as a FUCKING THREAT."
        case 3:
            return "With great power comes great need to take a nap. Wake me up later."
        case 4:
            return "All these ghosts! All these ghosts! I still can’t find a boo."
        case 5:
            return "You think I really give a fuck? I can’t even read."
        case 6:
            return "I’m going to defeat you with the power of friendship! ... And this knife I found."
        case 7:
            return "Died and came back as a cowboy, I call that reintarnation."
        case 8:
            return "You’ll have a hard time believing this because it never happens, but I made a mistake."
        case 9:
            return "So apparently the 'bad vibes' I’ve been feeling are actually severe psychological distress"
    }
}
function message () {
    console.log(`Your name on planet Mars is${marsName()} and we're told you take pride in saying: "${marsSaying()}"`)
}
message()