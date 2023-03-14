let nomeDeUsuario, senha;

do {
  // Lê nome de usuário e senha
  nomeDeUsuario = prompt("Escreva seu nome de usuário:");
  senha = prompt("Digite sua senha:");

  // Verifica se a senha é igual ao nome de usuário
  if (nomeDeUsuario === senha) {
    alert("Erro: A senha não pode ser a mesma que o nome de usuário. Tente outra senha.");
  }
} while (nomeDeUsuario === senha); // Repete o loop enquanto a senha for igual ao nome de usuário

// Exibe as informações
alert("Nome de usuário: " + nomeDeUsuario + "\nSenha: " + senha);
