export default () => {
    let professor = []
    let alunos = []
    return (
        <div className="fixed">
            <div>Boletim</div>
            <div>Professor: {professor}</div>
            <div>
                {
                    alunos.map(aluno => {
                        return <div className={`flex gap-6 ${alunos.indexOf(aluno) % 2 == 0 ? "bg-branco" : "bg-[#D9F0E5]"}`}>
                            <div>
                                Aluno: {aluno.nome}
                            </div>
                            {aluno.notas.map((nota) => {
                                return <div>{nota}</div>
                            })}
                            <div>
                                {aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length}
                            </div>
                        </div>
                    })
                }
            </div>

        </div >

    )
}