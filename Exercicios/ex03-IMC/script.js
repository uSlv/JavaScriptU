var nome = prompt('Qual o seu nome?')
var altura = prompt('Qual o sua altura?(centímetros)')
var peso = prompt('Qual o seu peso?(kg)')



/*Transformando para float*/
altura = parseFloat(altura)
peso = parseFloat(peso)

/*Convertendo para m*/
altura = altura / 100

/*Cálculo*/ 
var imc = peso / (altura * altura)

if (imc < 16) {
    document.write('Baixo peso muito grave.')
} else {
    if (imc >= 16 && imc < 17) {
        document.write('Olá ' + nome + ' você possui a classificação de: Baixo peso grave ')
    } else {
        if (imc >= 17 && imc < 18.50) {
            document.write('Olá ' + nome + ' você possui a classificação de: Baixo peso ')
        } else {
            if (imc >= 18.50 && imc < 25) {
                document.write('Olá ' + nome + ' você possui a classificação de: Peso Normal.')
            } else {
                if (imc >= 25 && imc < 30) {
                    document.write('Olá ' + nome + ' você possui a classificação de: Sobrepeso')
                } else {
                    if (imc >= 30 && imc < 35) {
                        document.write('Olá ' + nome + ' você possui a classificação de: Obesidade grau I')
                    } else {
                        if (imc >= 35 && imc < 40) {
                            document.write('Olá ' + nome + ' você possui a classificação de: Obesidade grau  II')
                        } else {
                            document.write('Olá ' + nome + ' você possui a classificação de: Obesidade grau III')
                        }
                    }
                }
            }
        }
    }
}

document.write(' E também você possui índice de massa corporal igual a ' + imc.toFixed(2))


