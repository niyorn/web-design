console.log('it works')

let plusButton = document.querySelectorAll('.amount-button.plus');
plusButton.forEach(i => {
    i.addEventListener('click', (event, a) => {
        let input = event.target.offsetParent.childNodes[3];
        input.stepUp(1)

        checkAdded()
    })
})


let minusButton = document.querySelectorAll('.amount-button.minus');
minusButton.forEach(i => {
    i.addEventListener('click', (event, a) => {
        let input = event.target.offsetParent.childNodes[3];
        input.stepUp(-1)

        checkAdded()
    })
})


function checkAdded() {
    let input = document.querySelectorAll('#amount');
    let value = 0;
    input.forEach((i) => {
        if (i.value > 0) {
            value++
        }
    })

    if(value == 0){
        let amountInput = document.querySelector('.navigation ul li #added-amount').innerHTML = '';
        let addButton = document.querySelector('.navigation #total-added').classList.remove('active')
    }
    else {
        let amountInput = document.querySelector('.navigation ul li #added-amount').innerHTML = value;
        let addButton = document.querySelector('.navigation #total-added').classList.add('active')

    }

}

checkAdded()