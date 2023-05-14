 function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert ('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 18){
            //Criança
                img.setAttribute('src', 'fotohomemcrianca.png')
            } else if(idade < 60){
            //Adulto
                img.setAttribute('src','fotohomemadulto.png')
            } else if(idade >= 60){
            //Idoso
                img.setAttribute('src','fotohomemidoso.png')
            }
        } else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >= 0 && idade < 18){
                //Criança
                img.setAttribute('src','fotomulhercrianca.png')
            } else if (idade >= 18 && idade < 60){
                //Adulta
                img.setAttribute('src','fotomulheradulta.png')
            } else if (idade >= 60){
                //Idosa
                img.setAttribute('src','fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+ genero + ' com ' + idade +' anos.'
        res.appendChild(img)
    }
 }