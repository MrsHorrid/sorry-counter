const sorryBtn = document.getElementById("sorry-btn");
const resetBtn = document.getElementById("reset-btn");
const sorryCount = document.getElementById("sorry-count");
const nameBad = document.getElementById("input-bad");
const nameEnter = document.getElementById("name-enter");
const badpName = document.getElementById("bad-p-name");
let meme = document.getElementById("meme");
let nameP = ''

meme.style.display = `none`

nameEnter.addEventListener("click", function(){
    if (nameBad.value === '')
    {
        nameBad.placeholder = "Please enter a name"
    }
    else
    {
        nameP = nameBad.value
        nameBad.placeholder = `the name ${nameP} has been entered`
        nameBad.value = ''
    }

    
})

nameEnter.placeholder = `the name${nameP} has been entered`

let sorry = 0
let hasReached = false

sorryBtn.addEventListener("click", function(){
    
    if (sorry == 20)
    {
        hasReached = true
        sorry = 20
        badpName.innerHTML = ` ${nameP} Has been very bad by saying sorry`
        meme.style.display = 'block'
    }
    
    else 
    {
        
        sorry += 1;
        sorryCount.textContent = sorry
    }
})


resetBtn.addEventListener("click", function(){
    sorry = 0;
    sorryCount.textContent = sorry
    meme.style.display = `none`
    badpName.innerHTML = ''
    nameBad.placeholder = 'Who is being bad by saying sorry today?'
})