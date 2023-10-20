export default ({disciplinas}) => {
    return(
        <div>
            <div>Disciplinas</div>
            <div>
                {disciplinas.map(disciplina =>{
                    return <div> 
                        <div>{disciplina.nome}</div>
                        <div>{disciplina.cargaHoraria}</div>
                    </div>
                })}
            </div>
        </div>
    )
}