import { useState } from "react"

export default ({ alunos, professor }) => {
    const [mostrarNotas, setMostrarN] = useState(false)
    return (
        <div>
            <div>alunos</div>
            <div>
                {alunos.map(aluno => {
                    return <div>
                        <div>{aluno.nome}</div>
                        <div>{aluno.turma}</div>
                        <div>
                            <div>
                                <div onClick={() => setMostrarN(true)}>
                                    Notas
                                </div>

                                {mostrarNotas &&
                                    <div>
                                        {aluno.provas.map(prova => {
                                            if (prova.disciplina == professor.disciplina) {
                                                return <div>
                                                    <div>{prova.nota}</div>
                                                    <button>X</button>
                                                </div>
                                            }
                                        })}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}