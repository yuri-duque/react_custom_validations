import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Box, FormControl, InputLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: 5,
        minWidth: 120,
    }
}));

function FormularioRegras({ aoEnviar }) {
    const classes = useStyles();

    // states
    const [propriedade, setPropriedade] = useState("");
    const [operador, setOperador] = useState("");
    const [valor, setValor] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    // handles
    const handlePropriedadeChange = (event) => {
        setPropriedade(event.target.value);
    };
    const handleOperadorChange = (event) => {
        setOperador(event.target.value);
    };
    const handleValorChange = (event) => {
        setValor(event.target.value);
    };
    const handleMensagemErroErro = (event) => {
        setMensagemErro(event.target.value);
    };


    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({ propriedade, operador, valor, mensagemErro });
            
            setPropriedade(null);
            setOperador(null);
            setValor(null);
            setMensagemErro(null);
        }}>

            <Box display="flex" justifyContent="center">
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Selecione a propriedade</InputLabel>
                    <Select value={propriedade} onChange={handlePropriedadeChange} label="Selecione a propriedade">
                        <MenuItem value="nome">Nome</MenuItem>
                        <MenuItem value="sobrenome">Sobrenome</MenuItem>
                        <MenuItem value="cpf">CPF</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <InputLabel>Selecione o operador</InputLabel>
                    <Select value={operador} onChange={handleOperadorChange} label="Selecione o operador">
                        <MenuItem value={"==="}>{"==="}</MenuItem>
                        <MenuItem value={"!=="}>{"!=="}</MenuItem>
                        <MenuItem value={"<"}>{"<"}</MenuItem>
                        <MenuItem value={">"}>{">"}</MenuItem>
                        <MenuItem value={"<="}>{"<="}</MenuItem>
                        <MenuItem value={">="}>{">="}</MenuItem>
                        <MenuItem value={"obrigatorio"}>{"Obrigatório"}</MenuItem>
                    </Select>
                </FormControl>

                <TextField value={valor} onChange={handleValorChange} id="valor" label="Valor" variant="outlined" className={classes.formControl} fullWidth />
            </Box>


            <TextField value={mensagemErro} onChange={handleMensagemErroErro} id="mensagemErro" label="Mensagem de erro" variant="outlined" className={classes.formControl} fullWidth />

            <Box display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar Regra
                </Button>
            </Box>
        </form>
    );
}

export default FormularioRegras;
