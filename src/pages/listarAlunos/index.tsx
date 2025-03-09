import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const alunos = [
    { id: 1, nome: 'Thiago', sobrenome:'Figueira', email: 'thiago@email.com', senha: '123456',dataNascimento: '15/07/1986', genero: 'Masculino' },
    { id: 2, nome: 'Paulo', sobrenome:'Silva', email: 'paulo@email.com', senha: '123456',dataNascimento: '10/05/1995', genero: 'Masculino' },
    { id: 3, nome: 'João', sobrenome:'Pereira', email: 'joao@email.com', senha: '123456',dataNascimento: '12/04/1991', genero: 'Masculino' },
];

const ListarAlunos: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>ID</b></TableCell>
                        <TableCell><b>Nome</b></TableCell>
                        <TableCell><b>Sobrenome</b></TableCell>
                        <TableCell><b>Email</b></TableCell>
                        <TableCell><b>Senha</b></TableCell>
                        <TableCell><b>Data de Nascimento</b></TableCell>
                        <TableCell><b>Genero</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {alunos.map((aluno) => (
                        <TableRow key={aluno.id}>
                            <TableCell>{aluno.id}</TableCell>
                            <TableCell>{aluno.nome}</TableCell>
                            <TableCell>{aluno.sobrenome}</TableCell>
                            <TableCell>{aluno.email}</TableCell>
                            <TableCell>{aluno.senha}</TableCell>
                            <TableCell>{aluno.dataNascimento}</TableCell>
                            <TableCell>{aluno.genero}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListarAlunos;