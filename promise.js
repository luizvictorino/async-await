console.log("Eu: Preciso de um caderno novo ");

let promessaDeCompra = new Promise((resolve, reject) => {
  console.log("Amigo: Estou indo comprar o caderno...");

  setTimeout(() => {
    let sucesso = false;
    if (sucesso) resolve("Amigo: Aqui está seu caderno");
    else reject("Amigo: A loja estava fechada quando eu cheguei");
  }, 5000); //5s de tempo de espera
});

console.log(
  "Eu: Vou continuar estudando as coisas que preciso enquanto espero o caderno"
);

promessaDeCompra
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.log(erro));
