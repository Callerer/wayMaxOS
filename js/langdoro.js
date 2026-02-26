let displayMsg = document.getElementById('langLore')
function moveFwd() {
    displayMsg.textContent = "Thank you!"
    document.getElementById('optionsBtn').style.display = 'none'
    setTimeout( () => {
        displayMsg.textContent = "How many languages do you speak?"
        document.getElementById('inputField').style.display = 'block'
        },900)   
}

document.getElementById('numLangsSubmitBtn').addEventListener("click",() => {
    // get num of langs spoken by guest    
    let num_langs = document.getElementById("inputBox").value;
    console.log(typeof(num_langs))
    if (num_langs === "0") {
            alert("How sad!");
    } else if (num_langs === "1") {
            alert("Not so cool, I see");
    } else if (num_langs === "2") {
            alert("you're alive");
    } else if (num_langs === "3") {
            alert("Not bad!");
    } else if (num_langs === "4") {
            alert("My twin!");
    } else {
            alert("You need to be my buddy!");
    }

    //ask them to be buds
    document.getElementById('inputField').style.display = 'none'
    displayMsg.textContent = "Wanna be buds?"
    document.getElementById('wannaBuds').style.display = 'block'
})

function reply1() {
        document.getElementById('wannaBuds').style.display = 'none'
        displayMsg.textContent = "GNATSING!"
        document.getElementById('alvida').style.display = 'block'
        document.getElementById('simalvida').style.display = 'block'  
}

function reply2() {
        document.getElementById('wannaBuds').style.display = 'none'
        displayMsg.textContent = "Well..okay..?"
        document.getElementById('alvida').style.display = 'block'
        document.getElementById('aralvida').style.display = "block"
}

function alvida() {
        document.getElementById('alvida').style.display = 'none'
        displayMsg.textContent = "Gotta recharge wayMax."
        document.getElementById('adios').style.display = 'block'
}

function sayAdios() {
        document.getElementById("langdoroContent").style.display = 'none'
}




function booEm() {
        document.getElementById('langLore').style.display = 'none'
        document.getElementById('optionsBtn').style.display = 'none'
        document.getElementById('gab').style.display = 'block'
        console.log('Voor jou: Tu és parça demais... *-* ')
        setTimeout(() => {
                document.getElementById("langdoroContent").style.display = 'none'
        },1000)
}


//to-do: add reaction drawing for user input num_langs
/*
function getImg () {
        let imgDisplay = document.getElementById('imgdisplay');
        console.log("changing img!")
        let img = document.createElement('img')
        img.src = 'url(../images/app-search.png)';
        console.log(img.src)
        imgDisplay.style.backgroundImage = 'url(../images/app-search.png)' ;
}*/