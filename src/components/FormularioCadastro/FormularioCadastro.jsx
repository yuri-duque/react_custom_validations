import React, {useState} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form onSubmit={event => {event.preventDefault()}}>
      <TextField value={nome} onChange={event => setNome(event.target.value)} id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

      <TextField value={sobrenome} onChange={event => setSobrenome(event.target.value)} id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />

      <TextField value={cpf} onChange={event => setCpf(event.target.value)} id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />
 
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked={true} color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked={true} color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
