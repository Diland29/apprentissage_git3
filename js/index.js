let form= document.querySelector("form")
let nom= document.querySelector("input[type=text]")
let tel= document.querySelector("input[type=tel]")
let errortel= document.querySelector(".errortel")
let errornom= document.querySelector(".errornom")

form.addEventListener('submit',function(e){
e.preventDefault()

if(nom.value.trim()===""){
    errornom.textContent="ce champ est obligatoire"
}else{
    errornom.textContent=""
}

if(tel.value.trim()===""){
    errortel.textContent="ce champ est obligatoire"
}else{
    errortel.textContent=""
}




})