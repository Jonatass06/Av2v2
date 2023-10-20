import Header from "@/components/Header"
import contem from "@/functions/contem";
import { DeleteData } from "@/pages/api/hello";
import GetAllData, { GetDataId } from "@/pages/api/hello";
import RotaPrivada from "@/components/RotaPrivada"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default () => {
    const id = useRouter().query.id;
    const [secretarios, setSecretarios] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [professores, setProfessores] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [tabela, setTabela] = useState("")

    async function setDados() {
        setSecretarios(await GetAllData("secretario"))
        setAlunos(await GetAllData("aluno"));
        setProfessores(await GetAllData("professor"));
        setUsuario(await GetDataId(id, "usuario"))
    }
    async function deletar(){
        console.log(usuario)
        await setDados();
        if (contem(usuario, alunos)) {
            setTabela("aluno")
        } else if (contem(usuario, professores)) {
            setTabela("professor")
        } else if (contem(usuario, secretarios)) {
            setTabela("secretario")
        }
        DeleteData(id, tabela)
    } 

    useEffect(() => {
        setDados();
    }, [10000]);

    return (
        <RotaPrivada id={id}>
            <Header></Header>


            <section className="w-full h-[93vh] flex flex-col justify-center items-center">

                <div className="w-[650px] h-[650px] bg-green shadow-10b ronded-[5px] flex flex-col justify-center items-center gap-6 relative z-[997]">
                    <div className="bg-verde w-[100px] h-[100px] absolute z-[999] shadow-10b rounded-full top-[-50px] flex justify-center items-center">
                        <img src="../user-icon.png" className="w-[100px] h-[100px] border-verde border-96 invert" alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-6">
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Senha" />
                        <input type="text" placeholder="Idade" />
                        <input type="text" placeholder="Endereco" />
                    </div>
                    <button className="bg-verde w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]">Continuar</button>
                    <button className="bg-red-700 w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]" onClick={() => { deletar() }}>Deletar Conta</button>
                </div>
            </section>
        </RotaPrivada>
    )
}