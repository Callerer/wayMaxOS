console.log("Toccalo = click it!")
setTimeout (() => {
    document.getElementById('appSearchBox').style.display = 'block';
},4000)

function showAppSearch() {
    document.getElementById('appSearchBox').style.display = 'none'
    document.getElementById('showAppSearch').style.display = 'block'
    document.getElementById('appSearchVid').remove()
}