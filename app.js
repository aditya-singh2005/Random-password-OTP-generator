const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet="abcdefghijklmnopqrstuvwxyz"
const numberSet="0123456789"
const symbolSet="!@#$%^&*()_+{}|:<>?[]\;',./~`"

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const totalChar=document.getElementById("total_char");
const upperInput=document.getElementById("upper_case");
const lowerInput=document.getElementById("lower_case");
const symbolInput=document.getElementById("symbol_case");
const numberInput=document.getElementById("number_case");
const pass=document.getElementById("span");

function truncate (str,num) {
    if(str.length > num){
        return str.substring(0,num);
    }
    else return str;
}
const generatePassword= (password="") => {
    if(upperInput.checked){
        password+=getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerSet);
    }
    if(symbolInput.checked){
        password+=getRandomData(symbolSet);
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    if(password.length > totalChar.value){
        truncate(password,totalChar.value);
    }
    pass.innerText=password;
    
}
document.getElementById("btn").addEventListener("click",
    function() {
        generatePassword();
    }
);
