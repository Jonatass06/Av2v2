export default ({ disciplinas, aluno }) => {
    return (
        <div>
            <div>
                <div>
                    Alunos
                </div>
                <button>
                    Gerar Relatório
                </button>
            </div>
            <div>
                {disciplinas.map(disciplina => {
                    return <div>
                        <div>{disciplina.nome}</div>
                        <div>
                            <div onClick={() => setMostrarN(true)}>
                                Notas
                            </div>
                            {mostrarNotas &&
                                <div>
                                    {aluno.provas.map(prova => {
                                        if (prova.disciplina == disciplina) {
                                            return <div>
                                                <div>{prova.nota}</div>
                                            </div>
                                        }
                                    })}
                                </div>
                            }
                        </div>
                        <div>{disciplina.cargaHoraria}</div>
                        <div>{disciplina.professor}</div>
                    </div>
                })}
            </div>
        </div>
    )
}