document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('mensagemSucesso').style.display = 'none';

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    let temErro = false;

    if (nome === "") {
        document.getElementById('erroNome').textContent = "Nome completo é obrigatório.";
        temErro = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('erroEmail').textContent = "E-mail é obrigatório.";
        temErro = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById('erroEmail').textContent = "Formato de e-mail inválido.";
        temErro = true;
    }

    if (telefone === "") {
        document.getElementById('erroTelefone').textContent = "Telefone é obrigatório.";
        temErro = true;
    }

    if (senha === "") {
        document.getElementById('erroSenha').textContent = "Senha é obrigatória.";
        temErro = true;
    } else if (senha.length < 6) {
        document.getElementById('erroSenha').textContent = "A senha deve ter no mínimo 6 caracteres.";
        temErro = true;
    }

    if (confirmarSenha === "") {
        document.getElementById('erroConfirmarSenha').textContent = "Confirmação de senha é obrigatória.";
        temErro = true;
    } else if (senha !== confirmarSenha) {
        document.getElementById('erroConfirmarSenha').textContent = "As senhas não coincidem.";
        temErro = true;
    }

    if (!temErro) {
        const cliente = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha
        };

        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        clientes.push(cliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));

        document.getElementById('mensagemSucesso').textContent = "Cadastro realizado com sucesso!";
        document.getElementById('mensagemSucesso').style.display = 'block';

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
});
