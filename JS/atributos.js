// lampada

class Lampada {
  constructor() {
    this.brilho = 0;
    this.cor = 'branca';
    this.estaLigada = false;
  }

  ligar() {
    this.estaLigada = true;
    console.log(`A lâmpada agora esta ligada.`);
  }

  desligar() {
    this.estaLigada = false;
    console.log(`A lâmpada agora esta desligada.`);
  }

  mudarCor(novaCor) {
    this.cor = novaCor;
    console.log(`Cor da luz alterada para ${novaCor}.`);
  }
}

const minhaLampada = new Lampada();
minhaLampada.ligar();
minhaLampada.mudarCor('azul');
minhaLampada.desligar();


//ventilador

class Ventilador {
  constructor() {
    this.velocidade = 0;
    this.rotação = false;
    this.estaLigado = false;
  }

  ligar() {
    this.estaLigado = true;
    console.log(`O ventilador agora esta ligado.`);
  }

  desligar() {
    this.estaLigado = false;
    console.log(`O ventilador agora esta desligado.`);
  }

  ajustarVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade;
    console.log(`Velocidade do ventilador definida para ${novaVelocidade}.`);
  }
}

const meuVentilador = new Ventilador();
meuVentilador.ligar();
meuVentilador.ajustarVelocidade(2);
meuVentilador.desligar();


//musica

class Musica {
  constructor() {
    this.volume = 50;
    this.faixaAtual = 'Nenhuma música tocando';
    this.estaTocando = false;
  }

  tocar() {
    this.estaTocando = true;
    console.log(`A música agora esta tocando.`);
  }

  pausar() {
    this.estaTocando = false;
    console.log(`A música esta pausada.`);
  }

  alterarVolume(novoVolume) {
    this.volume = novoVolume;
    console.log(`Volume definido para ${novoVolume}.`);
  }
}

const minhaMusica = new Musica();
minhaMusica.tocar();
minhaMusica.alterarVolume(70);
minhaMusica.pausar();


// vento

class Vento {
  constructor() {
    this.velocidade = 0;
    this.direção = 'Norte';
    this.estaSoprando = false;
  }

  começarASoprar() {
    this.estaSoprando = true;
    console.log(`O vento agora esta soprando.`);
  }

  pararDeSoprar() {
    this.estaSoprando = false;
    console.log(`O vento parou.`);
  }

  alterarDireção(novaDireção) {
    this.direção = novaDireção;
    console.log(`Direção do vento alterada para ${novaDireção}.`);
  }
}

const ventoAgora = new Vento();
ventoAgora.começarASoprar();
ventoAgora.alterarDireção('Sudoeste');
ventoAgora.pararDeSoprar();
