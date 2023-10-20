export default ({secretarios}) => {
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
        </div>
    )
}