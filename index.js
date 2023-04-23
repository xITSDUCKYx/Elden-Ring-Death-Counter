let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0

document.addEventListener("click", function(e){
 
    console.log(e.target)
    if (e.target == incrementBtn){
        count++
        countEl.textContent = count
    } else if (e.target == saveBtn){
        let countStr = ""
        if (saveEl.textContent){
          countStr += " - " + count

        } else {
          countStr += count
        }

        saveEl.textContent += countStr
        count = 0
        countEl.textContent = 0 
    }else {
        //console.log("Clicked on the page")
    }
})
