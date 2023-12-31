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
import user from "@/data/usuario";

export default () =>{
    const id = useRouter().query.id;
    const [secretarios, setSecretarios] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [professores, setProfessores] = useState([]);
    const [turmas, setTurmas] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [usuario, setUsuario] = useState({});

    useEffect( () =>{
        if(id!=undefined){
            setDados();
        }
    }, [id])

    async function setDados(){
        setSecretarios(await GetAllData("secretario"))
        setAlunos( await GetAllData("aluno"));
        setProfessores(await GetAllData("professor"));
        console.log(id)
        setUsuario(await GetDataId(id, "usuario"))
        setDisciplinas(await GetAllData("disciplina"));
        setTurmas(await GetAllData("turma"))
    }

    return(
        <RotaPrivada id={id}>
            <Header id={id}></Header>
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