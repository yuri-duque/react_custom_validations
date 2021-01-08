import React from "react";
import { Button, TextField } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth/>

      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth/>

      <TextField id="cpf" label="CPF" variant="outlined" fullWidth/>

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
