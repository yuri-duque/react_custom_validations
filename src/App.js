import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import FormularioRegras from "./components/FormularioRegras/FormularioRegras";
import { Container, Typography, Box } from "@material-ui/core";

const regras = [];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Box p={2} m={2} bgcolor="background.paper">
          <Container component="article" maxWidth="md">
            <Typography variant="h3" component="h1" align="center">Cadastro de Regras</Typography>
            <FormularioRegras aoEnviar={aoEnviarRegra} />
          </Container>
        </Box>

        <Box p={2} m={2} bgcolor="background.paper">
          <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">Cadastro de usuários</Typography>
            <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} validaRegras={validaRegras} />
          </Container>
        </Box>
      </Fragment>

    );
  }
}

function aoEnviarRegra(regra) {
  regras.push(regra);
  console.log(regras);
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validaRegras(propriedade, valor) {
  const regra = regras.find(element => element.propriedade === propriedade);

  let result;

  switch (regra.operador) {
    case '===':
      result = validarOperadorIgual(regra, valor);
      break;
    case '!==':
      result = validarOperadorDiferente(regra, valor);
      break;
    case '<':
      result = validarOperadorMenor(regra, valor);
      break;
    case '>':
      result = validarOperadorMaior(regra, valor);
      break;
    case '<=':
      result = validarOperadorMenorIgual(regra, valor);
      break;
    case '>=':
      result = validarOperadorMaiorIgual(regra, valor);
      break;
    case 'obrigatorio':
      result = validarOperadorObrigatorio(regra, valor);
      break;
  }

  return { valido: result, texto: regra.mensagemErro }
}

function validarOperadorIgual(regra, valor) {
  return valor === regra.valor;
}

function validarOperadorDiferente(regra, valor) {
  return valor !== regra.valor;
}

function validarOperadorMenor(regra, valor) {
  return valor < regra.valor;
}

function validarOperadorMaior(regra, valor) {
  return valor > regra.valor;
}

function validarOperadorMenorIgual(regra, valor) {
  return valor <= regra.valor;
}

function validarOperadorMaiorIgual(regra, valor) {
  return valor >= regra.valor;
}

function validarOperadorObrigatorio(regra, valor) {
  if (valor)
    return true;

  return false;
}

function validarCPF(cpf) {
  if (cpf.length !== 11)
    return { cpf: { valido: true, texto: "CPF deve ter 11 digitos" } };
  else if (cpf.length === 11)
    return { cpf: { valido: false, texto: "" } };
}

export default App;
