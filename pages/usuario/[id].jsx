import { GetAllData, GetDataId }from "@/pages/api/hello";
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

export default() =>{
    const id = useRouter().query.id;
    const secretarios = GetAllData("secretario");
    const alunos = GetAllData("aluno");
    const professores = GetAllData("professor");
    const usuario = GetDataId(id, "usuario")
 
    return(
        <RotaPrivada id={id}>
            <Header></Header>
            {
                alunos.includes(usuario) &&
                <div>
                    <TableDisciplinasAluno></TableDisciplinasAluno>
                    <TableMinhaTurma></TableMinhaTurma>
                </div>
            }
            {
                professores.includes(usuario) &&
                <div>
                    <TableTurmas></TableTurmas>
                    <TableAlunosProfessor></TableAlunosProfessor>
                </div>
            }
            {
                secretarios.includes(usuario) &&
                <div>
                    <TableAlunos></TableAlunos>
                    <TableTurmas></TableTurmas>
                    <TableProfessores></TableProfessores>
                    <TableDisciplinas></TableDisciplinas>
                </div>
            }
        </RotaPrivada>
    )

}