
function hacker_function(id) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let interval = null;
    console.log("thing: " + event)
    document.querySelector("#" + id).onmouseover = event => {  
        let iteration = 0;
        clearInterval(interval);
        console.log("here")
        //console.log("hi: " + event)
        
        //Runs the code inside the anonymous function indicated by => every x (miliseconds I assume) 30 in this case is x presumably.
        /*
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            
            .map((letter, index) => {
                if(index < iteration) {
                return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length) { 
                clearInterval(interval);//Stops the interval from running
            }
            
            iteration += 1 / 3;
        }, 30);*/

        //Essentially the above function is this, which is objectively less clean, but more palettable to my eyes
        //I've written so much python that it's weird when you can do your own styling conventions in other languages
        //Also there are like 2 nested anonymous functions in here :/

        console.log(event.target)
        interval = setInterval(() => { //Curly boi here
            event.target.innerText = event.target.innerText.split("").map((letter, index) => { //Curly boi here
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            }).join(""); //Curly boi here
            
            if(iteration >= event.target.dataset.value.length) {  //
                clearInterval(interval); //Stops the interval from running
            }
            
            iteration += 1 / 3;
        }, 30); //Curly boi here
    }
}