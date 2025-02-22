//import React from "react"; //especificando o que a função vai retornar
//import Button from '@mui/material/Button';


/* const Cadastro: React.FC = () => {
   return (

    <>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim necessitatibus non perspiciatis atque quis quod nostrum, saepe facere, fugit quidem veritatis ab tempora assumenda doloremque praesentium? Placeat, labore. Maiores, rerum!
        </p>
        <Button variant="text">Text</Button>
    </>

   )
 
}

export default Cadastro; */

import React, { useState } from 'react';
import { Container,Typography,TextField,Button,FormControl,InputLabel,Select,MenuItem, SelectChangeEvent} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { format } from 'date-fns';
import Grid2 from '@mui/material/Grid2'; // Import Grid2

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  dataNascimento: Date | null;
  genero: string;
}

function CadastroAluno() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    dataNascimento: null,
    genero: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }> | SelectChangeEvent ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, dataNascimento: date });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Dados do Formulário Enviados:', {
      ...formData,
      dataNascimento: formData.dataNascimento ? format(formData.dataNascimento, 'dd-MM-yyyy') : null,
    });
    // chamada de API aqui...
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro de Alunos
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                fullWidth
                label="Senha"
                name="senha"
                type="password"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={12}>
              <DatePicker
                format="dd/MM/yyyy"
                label="Data de Nascimento"
                value={formData.dataNascimento}
                onChange={handleDateChange}
                //renderInput={(params) => <TextField fullWidth {...params} />}
                slotProps={{ textField: { fullWidth: true} }} //usando as configurações do DatePicker V6
              />
            </Grid2>
            <Grid2 size={12}>
              <FormControl fullWidth>
                <InputLabel id="genero">Gênero</InputLabel>
                <Select
                  labelId="genero"
                  label="Gênero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="masculino">Masculino</MenuItem>
                  <MenuItem value="feminino">Feminino</MenuItem>
                  <MenuItem value="outro">Outro</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Cadastrar
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Container>
    </LocalizationProvider>
  );
}

export default CadastroAluno;