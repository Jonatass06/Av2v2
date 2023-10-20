import { useState } from "react"
import {Nomes} from "./Nomes";

export default ({ turmas, professor }) => {
    const [mostrarAlunos, setMostrarA] = useState(false);
    const [mostrarDisciplinas, setMostrarD] = useState(false);


    return (
        <div>
            <div>Turmas</div>
            <div>
                {turmas.map(turma => {
                    return <div>
                        <div>{turma.id}</div>
                        <div>
                            <div onClick={() => setMostrarA(true)}>
                                Alunos
                            </div>
                            {mostrarAlunos && <Nomes objs={turma.alunos}></Nomes>}
                        </div>
                        {!professor &&
                            <div>
                                <div onClick={() => setMostrarD(true)}>
                                    Disciplinas
                                </div>
                                {mostrarDisciplinas && <Nomes objs={turma.disciplinas}></Nomes>}
                            </div>
                        }
                        <button>Relatorio</button>
                    </div>
                })}
            </div>
        </div>
    )
}