// Simulação de processo de encomenda
console.log("Fazendo o pedido da encomenda");

let pedidoEncomenda = new Promise((resolve, reject) => {
  console.log("Prcessando o pedido feito se está correto.");

  setTimeout(() => {
    let sucesso = true;

    if (sucesso) resolve("Pedido feito com sucesso");
    else reject("Erro no pedido");
  }, 5000);
});

let pagamentoPedido = (pedido) => new Promise((resolve, reject) => {
    console.log("Processando pagamento");

    setTimeout(() => {
      let sucesso = false;

      if (sucesso) resolve("Pagamento feito com sucesso");
      else reject("Erro na forma de pagamento, tente outro meio de pagamento");
    }, 5000);
  });

pedidoEncomenda
  .then((resposta) => {
    return pagamentoPedido(resposta);
  })
  .catch((erro) => console.log(erro))

  .then((responstaPagamento) => {
    console.log(responstaPagamento);
  })
  .catch((erro) => console.log(erro));
