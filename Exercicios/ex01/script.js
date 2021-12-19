var idade = prompt('Qual a sua idade em dias?')
var ano
var meses
var dias

if(idade > 0){
ano = idade/365
meses = (idade%365)/30
dias = (idade%365)%30

document.write("Sua idade é: "+ano+' anos '+meses+' meses '+dias+' dias.')
} else{
    document.write('Valor Inválido!!!!')
}

