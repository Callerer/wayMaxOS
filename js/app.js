let messWith = ['huh','bruh','wa dat mean?','budge off buddy','idgab (i don give a budge)']

function searchApp() {
    let app = document.getElementById('searchbar').value
    document.getElementById('apps').style.display = 'flex'
    if (app === 'orodlang') {
        console.log('langdoro visible')
        document.getElementById("langdoro").style.display = 'block'
        document.getElementById('faultycalc').style.display = 'none'
        document.getElementById('notapp').style.display = 'none'  
    } else if (app === 'calc') {
        console.log('calc visible')
        document.getElementById("faultycalc").style.display = 'block'
        document.getElementById('langdoro').style.display = 'none'
        document.getElementById('notapp').style.display = 'none'
    } else {
        console.log('none of existing apps')
        document.getElementById("langdoro").style.display = 'none'
        let randomMsg = messWith[Math.floor(Math.random()* messWith.length|0)]
        document.getElementById('notapp').style.display = 'block' 
        document.getElementById('notapp').textContent = randomMsg
    }
}


let showAppsBtn = document.getElementById('showApps')
let isClicked = true
function showAllApps () {
    if (isClicked) {
        isClicked = false
        showAppsBtn.textContent = "hide apps"
        document.getElementById('apps').style.display = 'block'
        document.getElementById("faultycalc").style.display = 'block'
        document.getElementById('langdoro').style.display = 'block'
        console.log('all apps visible')
    } else {
        isClicked = true
        showAppsBtn.textContent = "show apps"
        document.getElementById('apps').style.display = 'none'
        document.getElementById("faultycalc").style.display = 'none'
        document.getElementById('langdoro').style.display = 'none'
        console.log('all apps hidden')
    }
}