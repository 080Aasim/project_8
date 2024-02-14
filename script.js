const input = document.querySelector("#input")
// console.log(input);

const buttons = document.querySelectorAll("button")
// console.log(buttons);

let string = "";

let arr = Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click',(button) =>{
        // console.log(e);
        if (button.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(button.target.innerHTML == "C"){
            string = "";
            input.value = string 
        }
        else if(button.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += button.target.innerHTML;
            input.value = string;
        }
    })
})