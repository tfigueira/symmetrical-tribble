import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
  genero: string;
}

function CadastroAluno() {
  const { handleSubmit, control, reset } = useForm<FormData>({
    defaultValues: {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      dataNascimento: new Date(),
      genero: '',
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Dados do Formulário Enviados:', {
      ...data,
      dataNascimento: data.dataNascimento ? format(data.dataNascimento, 'dd-MM-yyyy') : null,
    });
    reset();  // Limpar o formulário após envio
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro de Alunos
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="nome"
                control={control}
                rules={{ required: 'Nome é obrigatório' }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nome"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    required
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="sobrenome"
                control={control}
                rules={{ required: 'Sobrenome é obrigatório' }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Sobrenome"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    required
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Email inválido'
                  }
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    type="email"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    required
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="senha"
                control={control}
                rules={{ required: 'Senha é obrigatória' }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Senha"
                    type="password"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    required
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="dataNascimento"
                control={control}
                rules={{ required: 'Data de nascimento é obrigatória' }}
                render={({ field, fieldState }) => (
                  <DatePicker
                    {...field}
                    label="Data de Nascimento"
                    format="dd/MM/yyyy"
                    value={dayjs(field.value)}//{field.value}
                    onChange={field.onChange}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!fieldState.error,
                        helperText: fieldState.error?.message,
                      }
                    }}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="genero"
                control={control}
                rules={{ required: 'Gênero é obrigatório' }}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth error={!!fieldState.error}>
                    <InputLabel id="genero">Gênero</InputLabel>
                    <Select
                      {...field}
                      labelId="genero"
                      label="Gênero"
                      required
                    >
                      <MenuItem value="masculino">Masculino</MenuItem>
                      <MenuItem value="feminino">Feminino</MenuItem>
                      <MenuItem value="outro">Outro</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>

            <Grid size={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </LocalizationProvider>
  );
}

export default CadastroAluno;
