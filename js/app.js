let messWith = ['huh','bruh','wa dat mean?','budge off buddy','idgab']

function searchApp() {
    let app = document.getElementById('searchbar').value
    document.getElementById('apps').style.display = 'flex'
    if (app === 'orodlang') {
        console.log('langdoro visible')
        document.getElementById("langdoro").style.display = 'block'
        document.getElementById('faultycalc').style.display = 'none'
        document.getElementById('notapp').style.display = 'none' 
        document.getElementById("agenda").style.display = 'none' 
    } else if (app === 'calc') {
        console.log('calc visible [not faulty...is it?]')
        document.getElementById("faultycalc").style.display = 'block'
        document.getElementById('langdoro').style.display = 'none'
        document.getElementById('notapp').style.display = 'none'
        document.getElementById("agenda").style.display = 'none'
    } else if (app === 'agenda') {
        console.log('agenda visible')
        document.getElementById("agenda").style.display = 'block'
        document.getElementById("faultycalc").style.display = 'none'
        document.getElementById('langdoro').style.display = 'none'
        document.getElementById('notapp').style.display = 'none'
    
    } else {
        console.log('none of existing apps')
        document.getElementById('apps').style.display = 'none'
        document.getElementById("faultycalc").style.display = 'none'
        document.getElementById('langdoro').style.display = 'none'
        document.getElementById("agenda").style.display = 'none'
        let randomMsg = messWith[Math.floor(Math.random()* messWith.length|0)]
        document.getElementById('notapp').style.display = 'block' 
        document.getElementById('notapp').textContent = randomMsg
    }
} 
