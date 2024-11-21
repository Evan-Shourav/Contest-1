// ========================  dom part start ===========================

            // ==========  heading part dom  ==========
let resultUsing         = document.querySelector('.resultUsing')
let resultInput         = document.querySelector('.resultInput')
let wellcome            = document.querySelector('.wellcome')
let userName            = document.querySelector('.userName')
let input               = document.querySelector('.input')
let allCard             = document.querySelector('.allCard')

            // ==========  todo list dom  ==========
let head_input          = document.querySelector('.head_input')
let error               = document.querySelector('.error')
let todo_head           = document.querySelector('.todo_head')
let todo_list           = document.querySelector('.todo_list')

            // ==========  guessing game dom  ==========
                    // --- player one dom ---
let playerOne           = document.querySelector('.playerOne')
let playerOneInput      = document.querySelector('.playerOneInput')

                    // --- player two dom ---
let playerTwo           = document.querySelector('.playerTwo')            
let playerTwoInput      = document.querySelector('.playerTwoInput')
let mainPlayerTwo       = document.querySelector('.mainPlayerTwo') 

                    // --- others dom ---
let gameError           = document.querySelector('.error')
let winner              = document.querySelector('.winner')
let win                 = document.querySelector('.win')
let chanceNumber        = document.querySelector('.chanceNumber')
let chance              = 0
// ========================  dom part end ===========================

// ========================  fonction part start  ===================
                // ---  welcome part ---
setTimeout(()=>{
    wellcome.style = 'display: block'
}, 1000);
setInterval(()=>{
    wellcome.style = 'display: none'
    userName.style = 'display: block'
}, 4000);

                // ---  input & result part  ---
let haldelClick    = ()=>{
    if(input.value == ''){
        alert(`
            ! Please enter your name`)
    }else{
        resultInput.innerHTML = input.value
        resultUsing.style     = 'display: block'
        input.value           = ''
        allCard.style         = 'display: block'
    }
}
let inputKey    = (item)=>{
    if(item.key == 'Enter')
        haldelClick()
}
// ========================  fonction part end  ===================

// ========================  todo list start  =====================
                        // ---  todo function part  ---
let add = ()=>{
    if(head_input.value  == ""){
        alert('an error of judgement !')
        error.innerHTML  = 'an error of judgement !'
        todo_head.style  = 'border: 1px solid red'
    }else{
        error.innerHTML = ''
        todo_head.style = 'border: 2px solid black'

                // ---  element part  ---
        let todo_div    = document.createElement('div')
        let todo_input  = document.createElement('input')
        let todo_edit   = document.createElement('button')
        let todo_delete = document.createElement('button')
        let todo_time   = document.createElement('h1')

                // ---  parent part  ---
        todo_list.appendChild(todo_div)
        todo_div.appendChild(todo_input)
        todo_div.appendChild(todo_edit)
        todo_div.appendChild(todo_delete)

                // ---  class name  ---
        todo_div.classList.add('single_todo')
        todo_delete.classList.add('delete')

                // ---  delete & edit  ---
        todo_delete.innerHTML = 'Delete'
        todo_edit.innerHTML   = 'Edit'
        todo_input.value      = head_input.value
        head_input.value      = ''
        todo_input.setAttribute('readonly' , 'readonly')

                // ---  delete function  ---
        todo_delete.addEventListener('click' , ()=>{
            todo_div.remove()
        })
                // --- edit todo  ---
        todo_edit.addEventListener('click', ()=>{
            if(todo_edit.innerHTML  == 'Edit'){
                todo_edit.innerHTML = 'Save'
                todo_edit.style = 'color: #08C2FF ; background: #000;'
                todo_input.removeAttribute('readonly' , 'readonly')
            }else{
                todo_edit.innerHTML = 'Edit'
                todo_edit.style = 'color: #000 ; background: #08C2FF;'
                todo_input.setAttribute('readonly' , 'readonly')
            }
        })        
    }
}
                // ---  todo enter function  ---
let addKey = (item)=>{
    if(item.key == "Enter"){
        add()
    }
}
// ========================  todo list end  =====================

// =======================  guessing game part start  ================

                // ---  chance function  ---
chanceNumber.innerHTML = chance

                // ---  playerOne function  ---
let playerOneClick = ()=>{
    if(playerOneInput.value == '' ){
        gameError.innerHTML = 'Please enter an value!'
    }else{
        if(playerOneInput.value > 10){
            gameError.innerHTML  = 'More than number 10 not allowed'
            playerOneInput.value = ''
        }else{
            playerOne.style      = 'display: none'
            gameError.innerHTML  = ''
            mainPlayerTwo.style  = 'display: block'
        }
    }
}
                // ---  playerTwo function  ---
let playerTwoClick = ()=>{
    if(playerTwoInput.value == ''){
        alert('Please enter an value!')
    }else{
        if(playerTwoInput.value > 10){
            alert('Please guest under number 10')
        }else{
            if(playerOneInput.value  == playerTwoInput.value){
                winner.style         = 'display: block'
                mainPlayerTwo.style  = 'display: none'
                win.innerHTML        = 'Player - 2 win'
            }else{
                 playerTwoInput.value = ''
                chance++
                chanceNumber.innerHTML  = chance
                if(chance == 5){
                    winner.style        = 'display: block'
                    mainPlayerTwo.style = 'display: none'
                    win.innerHTML       = 'Player - 1 win'
                }
            }
        }
    }
}
                // ---  enter function player one  ---
let playerOneKey = (item)=>{
    if(item.key == 'Enter'){
        playerOneClick()
    }
}
                // ---  enter function player two  ---
let playerTwoKey = (item)=>{
    if(item.key == 'Enter'){
        playerTwoClick()
    }
}
// =======================  guessing game part end  =================