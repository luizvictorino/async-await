// Função assíncrona para simplificar o código usando async/await
async function autenticarEObterFotos() {
  console.log("fazer autenticação no Instagram e buscar fotos recentes dos meus seguidores");

  try {
    // Autenticação simulada
    const autenticacao = await new Promise((resolve, reject) => {
      console.log("Inicio de autenticação de usuário");
      setTimeout(() => {
        let sucesso = true;
        if (sucesso)
          resolve({ userName: "LuizVictorino", following: [1, 2, 3] });
        else reject("Ocorreu um erro na autenticação");
      }, 3000);
    });

    // Busca de fotos recentes
    const fotosRecentes = await new Promise((resolve, reject) => {
      console.log("Iniciando busca das fotos recentes de quem eu sigo");
      setTimeout(() => {
        let sucesso = true;
        if (sucesso)
          resolve([
            { foto: "scr1", user: 1 },
            { foto: "scr2", user: 2 },
            { foto: "scr3", user: 1 },
          ]);
        else
          reject(
            "Ocorreu um erro nas buscas das fotos recentes de quem eu sigo"
          );
      }, 3000);
    });

    // Exibir as fotos recentes
    console.log(fotosRecentes);
  } catch (erro) {
    console.log(erro);
  }
}

// Chama a função
autenticarEObterFotos();
