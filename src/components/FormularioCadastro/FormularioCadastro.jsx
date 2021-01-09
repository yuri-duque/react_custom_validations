import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validaRegras }) {

  // states
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  // constante para guardar os erros
  const [erros, setErros] = useState({ nome: { valido: true, texto: "" }, sobrenome: { valido: true, texto: "" }, cpf: { valido: true, texto: "" } });

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };
  const handleSobrenomeChange = (event) => {
    setSobrenome(event.target.value);
  };
  const handleCPFChange = (event) => {
    setCpf(event.target.value);
  };
  const handlePromocoesChange = (event) => {
    setPromocoes(event.target.checked);
  };
  const handleNovidadesChange = (event) => {
    setNovidades(event.target.checked);
  };

  const onBlurNome = () => {
    var result = validaRegras("nome", nome);

    console.log({ ...erros, nome: result });

    setErros({ ...erros, nome: result });
  }
  const onBlurSobrenome = () => {
    var result = validaRegras("sobrenome", nome);
    setErros({ ...erros, sobrenome: result });
  }
  const onBlurCpf = () => {
    var result = validaRegras("cpf", nome);
    setErros({ ...erros, cpf: result });
  }


  return (
    <form onSubmit={event => {
      event.preventDefault();
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
    }}>
      <TextField
        value={nome}
        onChange={handleNomeChange}
        onBlur={onBlurNome}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={handleSobrenomeChange}
        onBlur={onBlurSobrenome}
        error={!erros.sobrenome.valido}
        helperText={erros.sobrenome.texto}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={handleCPFChange}
        onBlur={onBlurCpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" color="primary" checked={promocoes} onChange={handlePromocoesChange} />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" color="primary" checked={novidades} onChange={handleNovidadesChange} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
