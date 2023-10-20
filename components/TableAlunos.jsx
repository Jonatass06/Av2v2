import contem from "@/functions/contem"

export default ({alunos, turmas}) => {
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
        </div>
    )
}