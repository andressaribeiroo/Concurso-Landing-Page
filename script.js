const contador = document.querySelector("#counter");
const textarea = document.querySelector("#textarea");
const agreement = document.querySelector("#agreement");
const submitBtn = document.querySelector("#submit-btn");
const test = document.getElementById("teste");
const emaill = document.querySelector("#email");
const inputsName = document.getElementById("input-names");
const inputsSobrenome = document.getElementById("input-sobrenome");
const telefone = document.getElementById("inpuTel");
const inputArea = document.getElementById("inputArea");
const form = document.getElementById("form");
const mensagem = document.getElementById("mensagem");

function validateName() {
  let nome = document.getElementById("txtnome").value;
  let padrao = /[^a-zà-ú]/gi;
  let valida_nome = nome.match(padrao);

  if (valida_nome || !nome) {
    inputsName.classList.add("invalid");
    inputsName.classList.remove("valid");
  } else {
    inputsName.classList.add("valid");
    inputsName.classList.remove("invalid");
  }
}

function validateSobrenome() {
  let sobrenome = document.getElementById("txtsobrenome").value;
  let padrao = /[^a-zà-ú]/gi;
  let valida_sobrenome = sobrenome.match(padrao);

  if (valida_sobrenome || !sobrenome) {
    inputsSobrenome.classList.add("invalid");
    inputsSobrenome.classList.remove("valid");
  } else {
    inputsSobrenome.classList.add("valid");
    inputsSobrenome.classList.remove("invalid");
  }
}

function validateEmail() {
  const email = emaill.value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    test.classList.add("valid");
    test.classList.remove("invalid");
  } else {
    test.classList.add("invalid");
    test.classList.remove("valid");
  }
  if (email == "") {
    test.classList.remove("invalid");
    test.classList.remove("valid");
  }
}

function validateTel() {
  let phone = document.getElementById("phone").value;
  let padrao = /[0-9]+$/;
  let valida_telefone = phone.match(padrao);

  if (valida_telefone) {
    telefone.classList.add("valid");
    telefone.classList.remove("invalid");
  } else {
    telefone.classList.add("invalid");
    telefone.classList.remove("valid");
  }
}

function validateArea() {
  let area = textarea.value;
  let padrao = /[^a-zà-ú]/gi;
  let valida_area = area.match(padrao);

  if (valida_area || !area) {
    inputArea.classList.add("invalid");
    inputArea.classList.remove("valid");
  } else {
    inputArea.classList.add("valid");
    inputArea.classList.remove("invalid");
  }
}

const formAvaliation = (e) => {
  e.preventDefault();
  mensagem.style.display = "flex";
  form.style.display = "none";
};

function submit() {
  submitBtn.disabled = !agreement.checked;
}

window.onload = function check() {
  mensagem.style.display = "none";
  agreement.addEventListener("change", submit);
};

textarea.addEventListener("input", () => {
  contador.innerHTML = 500 - textarea.value.length;
});

form.addEventListener("submit", formAvaliation);
