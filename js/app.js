/*
console.log(window.matchMedia("(prefers-color-scheme: dark)"))
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if(event.matches){
        checkbox.setAttribute("checked",true)
    console.log('mode dark true');
    }else{
        console.log('mode light');
    checkbox.setAttribute("checked",false)
    } 
    
})

*/
const checkbox= document.querySelector('#checkbox')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    checkbox.setAttribute("checked",true)
    console.log('mode dark true');
    console.log(this);
}

checkbox.addEventListener('change', function (event) {
    if (this.checked) {
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
        
    }
    else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
        
    }
})



