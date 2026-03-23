const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuarioLogado) {
    document.getElementById('nomeUsuario').textContent = usuarioLogado.nome;
    document.getElementById('emailUsuario').textContent = usuarioLogado.email;
    document.getElementById('telefoneUsuario').textContent = usuarioLogado.telefone;
} else {
    
    window.location.href = 'login.html';
}


document.getElementById('btnSair').addEventListener('click', function() {
    
    localStorage.removeItem("usuarioLogado");
    
    
    window.location.href = 'login.html';
});
