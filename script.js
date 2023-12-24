 let inputBox = document.querySelector("input")

 let buttons = document.querySelectorAll("button")

 let string = "";

 let btnArray = Array.from(buttons);

 btnArray.forEach((button)=>{
    button.addEventListener("click",(a)=>{

        if(a.target.innerHTML == "=") {
       string = eval(string)
       inputBox.value = string;
        }

        else if(a.target.innerHTML == "AC") {
       string = "";
       inputBox.value = string;
        }

        else if(a.target.innerHTML == "DEL") {
       string = string.substring(0, string.length - 1);
       inputBox.value = string;
        }

        else{
        string += a.target.innerHTML;
        inputBox.value = string;
        }
    })
 })