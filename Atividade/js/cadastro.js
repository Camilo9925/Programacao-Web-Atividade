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
        document.getElementById('erroNome').textContent = "Nome não pode estar vazio";
        temErro = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('erroEmail').textContent = "E-mail deve possuir formato válido";
        temErro = true;
    }

    if (telefone === "") {
        document.getElementById('erroTelefone').textContent = "Telefone não pode estar vazio";
        temErro = true;
    }

    if (senha.length < 6) {
        document.getElementById('erroSenha').textContent = "Senha deve possuir mínimo de 6 caracteres";
        temErro = true;
    }

    if (senha !== confirmarSenha) {
        document.getElementById('erroConfirmarSenha').textContent = "Senha e confirmação devem ser iguais";
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

        
        const msgSucesso = document.getElementById('mensagemSucesso');
        msgSucesso.style.display = 'block';
        msgSucesso.textContent = "Cadastro realizado com sucesso!";

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
});
