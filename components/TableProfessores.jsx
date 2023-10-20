import ModalCadastro from "./ModalCadastro"

export default ({professores, disciplinas}) => {

    function post(obj){
        PostData(obj, "professor")
    }

    return(
        <div>
            <div>professores</div>
            <div>
                {professores.map(professor =>{
                    return <div> 
                        <div>{professor.nome}</div>
                        <select>
                            {disciplinas.map(disciplina => {
                                try{
                                    if(disciplina.id == professor.disciplina.id){
                                        return <option value={disciplina.id} selected>{disciplina.nome}</option>
                                    }
                                } catch(erro){}
                                return <option value={disciplina.id}>{disciplina.nome}</option>
                            })}
                        </select>
                    </div>
                })}
            </div>
            <ModalCadastro post={obj => post(obj)}></ModalCadastro>
        </div>
    )
}