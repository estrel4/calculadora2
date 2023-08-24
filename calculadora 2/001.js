
var button = document.getElementById('butt')

button.addEventListener('click',calculo)

function calculo(){
    a =document.getElementById('a')
    b =document.getElementById('b')
    c =document.getElementById('c')
    an = Number (a.value)
    bn = Number (b.value)
    cn = Number (c.value)
    console.log(an,bn,cn)
    let raiz1
    let raiz2
    let delta = bn*bn - 4*an*cn
   

    if (delta > 0 ){
         raiz1 = (-bn + Math.sqrt(delta)) / (2*an)

         raiz2 = (-bn - Math.sqrt(delta)) / (2*an)

       resultado.innerHTML = 'Raiz 1 = ' + raiz1 + ' Raiz 2 = ' + raiz2
    } else if (delta === 0){
        raiz1 = raiz2 = -bn/(2*an)
      resultado.innerHTML = 'Raiz dupla é: ' + raiz1

    } else if (delta < 0){
       resultado.innerHTML = 'Delta < 0, não exitem raízes reais.'
    }


}