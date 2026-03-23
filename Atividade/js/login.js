document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('erroEmailLogin').textContent = '';
    document.getElementById('erroSenhaLogin').textContent = '';
    document.getElementById('mensagemErro').style.display = 'none';
    document.getElementById('mensagemSucessoLogin').style.display = 'none';
    
    const emailLogin = document.getElementById('emailLogin').value.trim();
    const senhaLogin = document.getElementById('senhaLogin').value;
    
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    
    const clienteEncontrado = clientes.find(c => c.email === emailLogin);

    if (!clienteEncontrado) {
        document.getElementById('erroEmailLogin').textContent = "E-mail não encontrado";
        document.getElementById('mensagemErro').style.display = 'block';
        document.getElementById('mensagemErro').textContent = "E-mail não encontrado";
        return;
    }
    
    if (clienteEncontrado.senha !== senhaLogin) {
        document.getElementById('erroSenhaLogin').textContent = "Senha incorreta";
        document.getElementById('mensagemErro').style.display = 'block';
        document.getElementById('mensagemErro').textContent = "Senha incorreta";
        return;
    }
        
    localStorage.setItem("usuarioLogado", JSON.stringify(clienteEncontrado));

    const msgSucesso = document.getElementById('mensagemSucessoLogin');
    msgSucesso.style.display = 'block';
    msgSucesso.textContent = "Login realizado com sucesso!";

    setTimeout(() => {
        window.location.href = 'areaCliente.html';
    }, 1500);
});
