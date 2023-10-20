export default ({professores, disciplinas}) => {
    return(
        <div>
            <div>professores</div>
            <div>
                {professores.map(professor =>{
                    return <div> 
                        <div>{professor.nome}</div>
                        <select>
                            {disciplinas.map(disciplina => {
                                if(disciplina.id == professor.disciplina.id){
                                    return <option value={disciplina.id} selected>{disciplina.nome}</option>
                                }
                                return <option value={disciplina.id}>{disciplina.nome}</option>
                            })}
                        </select>
                    </div>
                })}
            </div>
        </div>
    )
}