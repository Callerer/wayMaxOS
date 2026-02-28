function checkAgenda() {
    let guessAgenda = document.getElementById('guessAgenda').value.toLowerCase()

    if (guessAgenda === 'calendar') {
        document.getElementById('unlockAgenda').style.display = 'none'
        document.getElementById('agendaContent').style.border = 'none'
        document.getElementById('agendacloseBtn').style.transform = 'rotate(5deg)'
        document.getElementById('agendacloseBtn').style.border = 'none'
        document.getElementById('agendacloseBtn').style.color = 'white'
        document.getElementById('theAgenda').style.display = 'block'
    } else {
        document.getElementById('unlockAgenda').style.display = 'none'
        document.getElementById('nope').style.display = 'block'
        setTimeout(() => {
        document.getElementById('unlockAgenda').style.display = 'block'
        document.getElementById('nope').style.display = 'none'
        }, 3000)
    }
}