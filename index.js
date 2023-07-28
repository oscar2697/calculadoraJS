const display = document.querySelector("#display");
const buttons =  document.querySelectorAll("button");
//con el forEach recorre  o mapea todos los botones o el tipo de clase
buttons.forEach((item) => { 
    item.onclick = () => { //va a reconocer atraves del id que haga click
        if(item.id == "clear"){
            display.innerText = "";
        }else if(item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        }else if(display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText);
        }else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        }else{
            display.innerText+= item.id;
        }
    };
});

