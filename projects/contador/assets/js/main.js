var getId = document.getElementById('value_container')
var btnId = document.getElementById('increment')
var btnId2 = document.getElementById('decrement')
var btnId3 = document.getElementById('reset')
var value = 0

btnId.addEventListener('click', function(){
    getId.innerHTML = ++value
})

btnId2.addEventListener('click', function(){
    if(value > 0){
        getId.innerHTML = --value
    }
})

btnId3.addEventListener('click', function(){
    getId.innerHTML = value = 0

})