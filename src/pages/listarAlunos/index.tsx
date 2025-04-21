import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
//import BasicModal from '../../Components/Modal';

const alunos = [
    { id: 1, nome: 'Thiago', sobrenome:'Figueira', email: 'thiago@email.com', senha: '123456',dataNascimento: '15/07/1986', genero: 'Masculino' },
    { id: 2, nome: 'Paulo', sobrenome:'Silva', email: 'paulo@email.com', senha: '123456',dataNascimento: '10/05/1995', genero: 'Masculino' },
    { id: 3, nome: 'João', sobrenome:'Pereira', email: 'joao@email.com', senha: '123456',dataNascimento: '12/04/1991', genero: 'Masculino' },
    { id: 4, nome: 'Maria', sobrenome: 'Oliveira', email: 'maria@email.com', senha: '123456', dataNascimento: '20/03/1990', genero: 'Feminino' },
    { id: 5, nome: 'Ana', sobrenome: 'Costa', email: 'ana@email.com', senha: '123456', dataNascimento: '25/12/1988', genero: 'Feminino' },
    { id: 6, nome: 'Carlos', sobrenome: 'Santos', email: 'carlos@email.com', senha: '123456', dataNascimento: '05/11/1992', genero: 'Masculino' },
    { id: 7, nome: 'Fernanda', sobrenome: 'Lima', email: 'fernanda@email.com', senha: '123456', dataNascimento: '18/08/1993', genero: 'Feminino' },
    { id: 8, nome: 'Lucas', sobrenome: 'Almeida', email: 'lucas@email.com', senha: '123456', dataNascimento: '30/01/1994', genero: 'Masculino' },
    { id: 9, nome: 'Juliana', sobrenome: 'Barbosa', email: 'juliana@email.com', senha: '123456', dataNascimento: '14/06/1987', genero: 'Feminino' },
    { id: 10, nome: 'Pedro', sobrenome: 'Ferreira', email: 'pedro@email.com', senha: '123456', dataNascimento: '22/09/1996', genero: 'Masculino' },
    { id: 11, nome: 'Clara', sobrenome: 'Mendes', email: 'clara@email.com', senha: '123456', dataNascimento: '07/07/1991', genero: 'Feminino' },
    { id: 12, nome: 'Rafael', sobrenome: 'Gomes', email: 'rafael@email.com', senha: '123456', dataNascimento: '19/02/1989', genero: 'Masculino' },
    { id: 13, nome: 'Beatriz', sobrenome: 'Ribeiro', email: 'beatriz@email.com', senha: '123456', dataNascimento: '11/04/1995', genero: 'Feminino' },
    { id: 14, nome: 'Gabriel', sobrenome: 'Martins', email: 'gabriel@email.com', senha: '123456', dataNascimento: '03/10/1990', genero: 'Masculino' },
    { id: 15, nome: 'Sofia', sobrenome: 'Carvalho', email: 'sofia@email.com', senha: '123456', dataNascimento: '09/05/1993', genero: 'Feminino' },
    { id: 16, nome: 'Rodrigo', sobrenome: 'Pinto', email: 'rodrigo@email.com', senha: '123456', dataNascimento: '16/12/1986', genero: 'Masculino' },
    { id: 17, nome: 'Isabela', sobrenome: 'Teixeira', email: 'isabela@email.com', senha: '123456', dataNascimento: '28/07/1992', genero: 'Feminino' },
    { id: 18, nome: 'Felipe', sobrenome: 'Rocha', email: 'felipe@email.com', senha: '123456', dataNascimento: '13/03/1994', genero: 'Masculino' },
    { id: 19, nome: 'Larissa', sobrenome: 'Vieira', email: 'larissa@email.com', senha: '123456', dataNascimento: '21/06/1988', genero: 'Feminino' },
    { id: 20, nome: 'Bruno', sobrenome: 'Souza', email: 'bruno@email.com', senha: '123456', dataNascimento: '08/11/1991', genero: 'Masculino' },
    { id: 21, nome: 'Camila', sobrenome: 'Monteiro', email: 'camila@email.com', senha: '123456', dataNascimento: '02/02/1990', genero: 'Feminino' },
];

const ListarAlunos: React.FC = () => {
    const handleEdit = (id: number) => {
        console.log(`Editar aluno com ID: ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Deletar aluno com ID: ${id}`);

    };

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
                        <TableCell><b>Ações</b></TableCell>
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
                            <TableCell>
                                <IconButton onClick={() => handleEdit(aluno.id)} aria-label="editar">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(aluno.id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListarAlunos;