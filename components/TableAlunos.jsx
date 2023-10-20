import contem from "@/functions/contem"
import { PostData } from "@/pages/api/hello"
import ModalCadastro from "./ModalCadastro"

export default ({alunos, turmas}) => {
    function post(obj){
        PostData(obj, "aluno")
    }
    return(
        <div>
            <div>alunos</div>
            <div>
                {alunos.map(aluno =>{
                    return <div> 
                        <div>{aluno.nome}</div>
                        <select>
                            {turmas.map(turma => {
                                if(contem(aluno, turma.alunos)){
                                    return <option value={turma.id} selected>{turma.id}</option>
                                }
                                return <option value={turma.id}>{turma.id}</option>
                            })}
                        </select>
                    </div>
                })}
            </div>
            <ModalCadastro post={obj => post(obj)}/>
        </div>
    )
}