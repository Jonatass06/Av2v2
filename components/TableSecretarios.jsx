import ModalCadastro from "./ModalCadastro"

export default ({secretarios}) => {

    function post(obj){
        PostData(obj, "secretario")
    }

    return(
        <div>
            <div>Secretarios</div>
            <div>
                {secretarios.map(secretario =>{
                    return <div> 
                        <div>{secretario.nome}</div>
                        <div>{secretario.qtdBoletins}</div>
                    </div>
                })}
            </div>
            <ModalCadastro post={obj => post(obj)}></ModalCadastro>
        </div>
    )
}