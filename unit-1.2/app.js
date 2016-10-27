

document.addEventListener('DOMContentLoaded', function(){
    var theInput = document.querySelector('#name');
        theInput.addEventListener('keyup', function(){
        var inputValue = theInput.value;
        var myH1 = document.querySelector('#whereNameGoes');
        myH1.innerHTML =  inputValue

    })

})
