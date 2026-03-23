document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('erroEmailLogin').textContent = '';
    document.getElementById('erroSenhaLogin').textContent = '';
    document.getElementById('mensagemErro').style.display = 'none';
    document.getElementById('mensagemSucessoLogin').style.display = 'none';

    const emailLogin = document.getElementById('emailLogin').value.trim();
    const senhaLogin = document.getElementById('senhaLogin').value;

    let temErro = false;

    if (emailLogin === "") {
        document.getElementById('erroEmailLogin').textContent = "E-mail é obrigatório.";
        temErro = true;
    }

    if (senhaLogin === "") {
        document.getElementById('erroSenhaLogin').textContent = "Senha é obrigatória.";
        temErro = true;
    }

    if (temErro) {
        document.getElementById('mensagemErro').textContent = "Por favor, preencha todos os campos.";
        document.getElementById('mensagemErro').style.display = 'block';
        return;
    }

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    debugger;
    const clienteEncontrado = clientes.find(c => c.email === emailLogin);

    if (!clienteEncontrado) {
        document.getElementById('mensagemErro').textContent = "E-mail não encontrado.";
        document.getElementById('mensagemErro').style.display = 'block';
        return;
    }

    if (clienteEncontrado.senha !== senhaLogin) {
        document.getElementById('mensagemErro').textContent = "Senha incorreta.";
        document.getElementById('mensagemErro').style.display = 'block';
        return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(clienteEncontrado));

    document.getElementById('mensagemSucessoLogin').textContent = "Login realizado com sucesso!";
    document.getElementById('mensagemSucessoLogin').style.display = 'block';

    setTimeout(() => {
        window.location.href = 'areaCliente.html';
    }, 1500);
});
