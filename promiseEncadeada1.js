console.log(
  "fazer autenticação no Instagram e buscar fotos recentes dos meus seguidores"
);

// Cria uma promise para simular o processo de autenticação no Instagram
let autenticacaoInstagram = new Promise((resolve, reject) => {
  console.log("Inicio de autenticação de usuário");

  // Simulação de um atraso de 3 segundos para o processo de autenticação
  setTimeout(() => {
    let sucesso = true; // Simulando que a autenticação foi bem-sucedida

    if (sucesso)
      resolve({
        // Retorna um objeto simulando o usuário autenticado e as pessoas que ele segue
        userName: "LuizVictorino",
        following: [{ user: 1 }, { user: 2 }, { user: 3 }],
      });
    else reject("Ocorreu um erro na autenticação"); // Caso falhe, rejeita a promise
  }, 3000);
});

// Função que retorna uma promise para simular a busca de fotos recentes de quem eu sigo
let buscaDasFotosSeguindo = (quemEuSigo) =>
  new Promise((resolve, reject) => {
    console.log("Iniciando busca das fotos recentes de quem eu sigo");

    // Simula um atraso de 3 segundos para buscar as fotos
    setTimeout(() => {
      let sucesso = true; // Simula o sucesso da busca

      if (sucesso)
        resolve([
          // Simula um array de objetos contendo as fotos e o ID de quem postou
          { foto: "scr1", user: 1 },
          { foto: "scr2", user: 2 },
          { foto: "scr3", user: 1 },
        ]);
      else
        reject("Ocorreu um erro nas buscas das fotos recentes de quem eu sigo"); // Caso falhe, rejeita a promise
    }, 3000);
  });

// Chama a promise de autenticação
autenticacaoInstagram
  .then((resposta) => {
    // Quando a autenticação for bem-sucedida, chama a função de busca de fotos
    return buscaDasFotosSeguindo(resposta);
  })
  .then((respostaFotosRecentes) => {
    // Quando as fotos forem recuperadas com sucesso, imprime o array no console
    console.log(respostaFotosRecentes);
  });
