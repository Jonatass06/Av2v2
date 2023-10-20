import GetAllData,{GetDataId }from "@/pages/api/hello";
import Header from "@/components/Header";
import RotaPrivada from "@/components/RotaPrivada"
import TableAlunos from "@/components/TableAlunos";
import TableAlunosProfessor from "@/components/TableAlunosProfessor";
import TableDisciplinas from "@/components/TableDisciplinas";
import TableDisciplinasAluno from "@/components/TableDisciplinasAluno";
import TableMinhaTurma from "@/components/TableMinhaTurma";
import TableProfessores from "@/components/TableProfessores";
import TableTurmas from "@/components/TableTurmas";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import contem from "@/functions/contem";

export default () =>{
    const id = useRouter().query.id;
    let [secretarios, setSecretarios] = useState([]);
    let [alunos, setAlunos] = useState([]);
    let [professores, setProfessores] = useState([]);
    let [turmas, setTurmas] = useState([]);
    let [disciplinas, setDisciplinas] = useState([]);
    let [usuario, setUsuario] = useState({});

    useEffect( () =>{
        setDados();
    }, [10000])

    async function setDados(){
        setSecretarios(await GetAllData("secretario"))
        setAlunos( await GetAllData("aluno"));
        setProfessores(await GetAllData("professor"));
        setUsuario(await GetDataId(id, "usuario"))
        setDisciplinas(await GetAllData("disciplina"));
        setTurmas(await GetAllData("turma"))
    }

    return(
        <RotaPrivada id={id}>
            <Header></Header>
            {
                contem(usuario, alunos) &&
                <div>
                    <TableDisciplinasAluno aluno={usuario}></TableDisciplinasAluno>
                    <TableMinhaTurma turma={usuario.turma}></TableMinhaTurma>
                </div>
            }
            {
                contem(usuario, professores) &&
                <div>
                    <TableTurmas professor turmas={turmas}></TableTurmas>
                    <TableAlunosProfessor></TableAlunosProfessor>
                </div>
            }
            {
                contem(usuario, secretarios) &&
                <div>
                    <TableAlunos alunos={alunos} turmas={turmas}></TableAlunos>
                    <TableTurmas turmas={turmas}></TableTurmas>
                    <TableProfessores professores={professores} disciplinas={disciplinas}></TableProfessores>
                    <TableDisciplinas disciplinas={disciplinas}></TableDisciplinas>
                </div>
            }
        </RotaPrivada>
    )

}