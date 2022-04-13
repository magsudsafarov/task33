function Add() {
    let div = document.createElement('div');
    div.setAttribute('class','box');
    
    div.style.padding = "30px 0"
    div.style.textAlign = "center"
    div.style.width = "0%";
    div.addEventListener('click',(e)=>console.log(e))

    let value = document.getElementById('input').value;
    let h3 = document.createElement('h3');
    h3.innerHTML = value;
    div.appendChild(h3);

    let row = document.getElementById('list');
    row.appendChild(div)

    let x = document.getElementById('list').children;
}