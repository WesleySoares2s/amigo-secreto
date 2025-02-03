
let amigos = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo').value;
    if (nomeDigitado !== '' && !amigos.includes(nomeDigitado)) {
        amigos.push(nomeDigitado);
        document.getElementById('amigo').value = ''
        atualizarListaDeAmigos();
    } else if (amigos.includes(nomeDigitado)) {
        alert('Este nome já foi adicionado à Lista.');
    } else {
        alert('Por favor, digite um nome')
    }
}

function atualizarListaDeAmigos() {
    let nomesExibidos = document.getElementById('listaAmigos');
    nomesExibidos.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        nomesExibidos.appendChild(item);
        console.log(amigos[i]);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há nomes para serem sorteados.');
        return;
    }
    let amigosRestantes = [...amigos];
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    let pares = {};
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let opcoes = amigosRestantes.filter(a => a !== amigo);
        let sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
        pares[amigo] = sorteado;
        amigosRestantes = amigosRestantes.filter(a => a !== sorteado);
    }
 
    for (let amigo in pares) {
        let item = document.createElement('li');
        item.textContent = `${amigo} tirou ${pares[amigo]}`;
        listaResultado.appendChild(item);
    }
}