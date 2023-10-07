//ficha de candidatos (objeto/ enumerada)
const CANDIDATOS = {
        Xnome: "Candidato X",
        Xnumero: 889,
        Ynome: "Candidato Y",
        Ynumero: 847,
        Znome: "Candidato Z",
        Znumero: 515,
        brancoNome: "Branco",
        brancoNumero: 0

    }
    //Zereisma
var qtdVotosX
var qtdVotosY
var qtdVotosZ
var qtdVotosBrancos
var qtdVotosNulos

//do while
do {
    do {
        var testeLetra = false
        let voto = alert(`Bem - vindo a eleição!
        Candidatos:
        ${CANDIDATOS.Xnome}: ${CANDIDATOS.Xnumero}
        ${CANDIDATOS.Ynome}: ${CANDIDATOS.Ynumero}
        ${CANDIDATOS.Znome}: ${CANDIDATOS.Znumero}
        ${CANDIDATOS.brancoNome}: ${CANDIDATOS.brancoNumero}
        Vote:`);

        alert(String(voto).length);

        for (let i = 0; i < voto.length; i++) {
            if (isNaN(Number(voto(i)))) {
                testeLetra = true

            } else {

            }


        }

    } while (testeLetra) {

    }


} while (condition) {

}