function Oblicz(){
let rodzaj = parseInt(document.getElementById('rodzaj').value)
let ilosc = parseInt(document.getElementById('ilosc').value)
let koszt = 0
  if (rodzaj == 2) {
    koszt = 3.5 * ilosc
  }
  else if (rodzaj == 1) {
    koszt = 4 * ilosc
  }
document.getElementById('wynik').innerHTML = 'koszt paliwa: ' + koszt + 'zł'
}
document.getElementById('oblicz').onclick = Oblicz
