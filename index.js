function getByIdElement(id){
    return document.getElementById(id)
}

const inputButton= document.querySelectorAll('.input-button')
const input= getByIdElement('input')

let equalPressed= 0

inputButton.forEach(item => {
    item.addEventListener('click', function(){
        if(equalPressed === 1){
            equalPressed= 0
            input.value= ''
        }
        input.value += item.value
    })
})

getByIdElement('equal').addEventListener('click', function(){
    equalPressed= 1
    try {
        const result= eval(input.value)
        Number.isInteger(result) ? input.value= result : input.value= result.toFixed(2)
    } catch (error) {
        alert('error.message')
    }
})

getByIdElement('clear').addEventListener('click', function(){
    input.value= ''
})

getByIdElement('erase').addEventListener('click', function(){
    input.value= input.value.substr(0, input.value.length-1)
})