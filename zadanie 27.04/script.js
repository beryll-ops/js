//jezeli haslo sklada sie conajmniej z 7 znakow i zawiera cyfre to wyswietlamy komunikat hjaslo jest dobre w kolorze zielonym jezeli haslo zawiera conajmniej 4 znaki w tym cyfre to wyswietla komunikat haslo jest srednie w kolorze niebieskim w kazdym innym wypadku wyswietla sie komunikat haslo jest slabe w kolorze zoltym
passwd = getElementById(password).value
let length = passwd.length

const dobre = RegEx('\d+')
const srednie = RegEx('\d+')

function weryfikacja(){
  if ((length >= 7) && (dobre.test(passwd))){
    document.getElementById('outcome').innerHTML='hasło jest dobre'
    document.getElementById('outcome').style.color='green'
  }
  else if ((length >= 7) && (srednie.test(passwd))) {
    document.getElementById('outcome').innerHTML='hasło jest srednie'
    document.getElementById('outcome').style.color='blue'
  }
  else if (length >= 1) {
    document.getElementById('outcome').innerHTML='hasło jest slabe'
    document.getElementById('outcome').style.color='yellow'
  }
  else if (length == 0) {
    document.getElementById('outcome').innerHTML='hasło jest nie'
    document.getElementById('outcome').style.color='red'
  }
}
document.getElementById('button').onclick=weryfikacja()
