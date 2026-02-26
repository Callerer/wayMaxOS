document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById('calcInputBox')
    let buttons = document.getElementsByClassName('calcBtn')
    let string = ""
    let arr = Array.from(buttons)
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML === "=") {
                let randomNum = Math.floor(Math.random() * 9 | 0).toString();
                console.log(randomNum)
                try {
                    string = eval(string + " + " + randomNum).toString();
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            } else if (e.target.innerHTML === 'AC') {
                string = "";
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        })
    })
})