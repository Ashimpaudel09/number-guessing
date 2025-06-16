let minimum = 1
let maximum = 100
const answer = Math.floor(Math.random()* (maximum - minimum +1))+minimum
let attemps = 0 
let guess
let running =true
while(running){
  guess = window.prompt(`Enter number between ${minimum} - ${maximum}`)
  guess = Number(guess)
  if(isNaN(guess)){
    window.alert("Enter a number")
    attemps++

  }
  else if(guess<minimum || guess> maximum){
    window.alert('Enter a valid NUmber')
    

  }
  else {
    if(guess>answer){
    window.alert('Entered Number is high')
    attemps++

  }
  else if(guess<answer){
    window.alert('Entered Number is low')
    attemps++

  }
  else{
    attemps++
    window.alert(`correct answer!! you take ${attemps} attempts to guess the correct number`)
    running = false
  }
}

}