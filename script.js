function atualizarRelogio(){

    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, '0');

    const minutos = String(agora.getMinutes()).padStart(2, '0');

    const segundos = String(agora.getSeconds()).padStart(2, '0');


    const horarioAtual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('time').textContent = horarioAtual;
}


    //atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);

    //chama a função ao carregar a página para evitar atraso inicial
    atualizarRelogio();




