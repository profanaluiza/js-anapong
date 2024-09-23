// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

//variável movimentação da bolinha10
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da minha Raquete
let xRaquete = 5; // posição eixo x
let yRaquete = 150; // posição eixo y
let larguraRaquete = 10; // largura
let alturaRaquete = 90; // altura

//colisão da bolinha com a raquete
let colidiu = false;

//raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 200;
let velocidadeYOponente= 0;

// placar do jogo 
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400); // tamanho da tela
}

function draw() {
  background("rgb(201,95,201)"); // cor de fundo - red,green,blue
  fill("rgb(105,209,223)"); // preenchimento da cor da bolinha
  mostraBolinha(); // chamando a função
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  colisaoMinhaRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto ();
}

function mostraBolinha() {
  fill("white")
  circle(xBolinha, yBolinha, diametro); // posição da bolinha na tela e tamanho.
}

function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete() {
  fill("rgb(0,244,255)")
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function colisaoMinhaRaquete() {
  colidiu = collideRectCircle(
    xRaquete,
    yRaquete,
    larguraRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    diametro
  );
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  fill("purple")
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

// function movimentaRaqueteOponente() {
//   velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete/2
//   ;
//   yRaqueteOponente += velocidadeYOponente;
  
// }

function movimentaRaqueteOponente() {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function colisaoRaqueteOponente() {
   colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    larguraRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    diametro
  );
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar () {
  fill ("")
  text (meusPontos, 250, 26);
  text (pontosOponente,350,26);
}

function marcaPonto() {
  if (xBolinha > 600) {
    meusPontos +=1;
  }
  if (xBolinha < 1) {
    pontosOponente +=1;
  }
}