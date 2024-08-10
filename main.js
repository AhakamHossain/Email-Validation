let inp = document.querySelector(`#inp`);
let label = document.querySelector(`#label`);
let msg = document.querySelector(`#msg`);

inp.addEventListener(`focus`,()=>{
    label.style.bottom = `110%`;
})
inp.addEventListener(`blur`,()=>{
    if(inp.value == ""){
    label.style.bottom = `0`;
    msg.innerHTML = `Please enter a your email`;
    }
})

inp.addEventListener(`keyup`,()=>{
    if(!inp.value.match(/^[A-Za-z0-z\.-_/]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        msg.innerHTML = `Please enter a valid email`;
        msg.style.color = `red`;
        inp.style.borderBottomColor = `red`;
    }else{
        msg.innerHTML = ``;
        msg.style.color = `green`;
        inp.style.borderBottomColor = `green`;
    }
})