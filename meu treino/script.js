const loginForm = document.getElementById('form-login');
const cadastroForm = document.getElementById('form-cadastro');
const mostrarCadastro = document.getElementById('mostrar-cadastro');
const mostrarLogin = document.getElementById('mostrar-login');

mostrarCadastro.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  cadastroForm.classList.remove('hidden');
});

mostrarLogin.addEventListener('click', () => {
  cadastroForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Login realizado com sucesso!');
  window.location.href = 'main.html';
});

cadastroForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputs = cadastroForm.querySelectorAll('input');
  const senha = inputs[1].value;
  const confirmarSenha = inputs[2].value;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  alert('Conta criada com sucesso!');
  window.location.href = 'main.html';
});



