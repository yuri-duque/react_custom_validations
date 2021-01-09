import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {

  // states
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  // constante para guardar os erros
  const [erros, setErros] = useState({ cpf: { valido: false, texto: "" } });

  return (
    <form onSubmit={event => {
      event.preventDefault();
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
    }}>
      <TextField value={nome} onChange={event => setNome(event.target.value)} id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

      <TextField value={sobrenome} onChange={event => setSobrenome(event.target.value)} id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />

      <TextField
        value={cpf}
        onChange={event => setCpf(event.target.value)}
        onBlur={(event) => { 
          const ehValido = validarCPF(cpf);
          setErros(ehValido);
        }}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" color="primary" checked={promocoes} onChange={event => setPromocoes(event.target.checked)} />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" color="primary" checked={novidades} onChange={event => setNovidades(event.target.checked)} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
