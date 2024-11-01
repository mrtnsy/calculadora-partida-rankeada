const saldoVitorias = saldoDeRankeadas(108,200)
const nivel = nivelDoJogador(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)



function saldoDeRankeadas(vitorias, derrotas){

    let saldo = vitorias - derrotas

    return Math.max(saldo,0)
}

function nivelDoJogador(saldoVitorias){//Como no exercício anterior atribuí 10 para ferro, pois não se encaixava em nenhuma classificação.
    
    const ranks = [
        {pontos: 10, nivel: "Ferro"},
        {pontos: 20, nivel: "Bronze"},
        {pontos: 50, nivel: "Prata"},
        {pontos: 80, nivel: "Ouro"},
        {pontos: 90, nivel: "Diamante"},
        {pontos: 100, nivel: "Lendario"}
    ]
    
    const rankEncontrado = ranks.find(r => saldoVitorias <= r.pontos)
    return rankEncontrado ? rankEncontrado.nivel : "Imortal"
}