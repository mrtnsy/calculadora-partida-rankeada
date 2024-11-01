let saldoVitorias = saldoDeRankeadas(108,20)
let nivel = nivelDoJogador(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)



function saldoDeRankeadas(vitorias, derrotas){

    let saldo = vitorias - derrotas
    if(saldo <= 0)
        saldo = 0
    return saldo
}

function nivelDoJogador(saldoVitorias){//Como no exercício anterior atribuí 10 para ferro, pois não se encaixava em nenhuma classificação.
    
    let ranks = [
        {pontos: 10, nivel: "Ferro"},
        {pontos: 20, nivel: "Bronze"},
        {pontos: 50, nivel: "Prata"},
        {pontos: 80, nivel: "Ouro"},
        {pontos: 90, nivel: "Diamante"},
        {pontos: 100, nivel: "Lendario"}
    ]
    for(let rank of ranks){
        if(saldoVitorias <= rank.pontos)
            return rank.nivel
    }
    return "Imortal"
}