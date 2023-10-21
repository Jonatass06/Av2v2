import Header from "@/components/Header"
import contem from "@/functions/contem";
import { DeleteData, PutData } from "@/pages/api/hello";
import GetAllData, { GetDataId } from "@/pages/api/hello";
import RotaPrivada from "@/components/RotaPrivada"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secretarios from "@/data/secretarios";
import alunos from "@/data/alunos";
import professores from "@/data/professores";
import user from "@/data/usuario";

export default () => {
    const index = useRouter();
    const [usuario, setUsuario] = useState({})
    let [nome, setNome] = useState("");
    let [senha, setSenha] = useState("");
    let [idade, setIdade] = useState("");
    let [endereco, setEndereco] = useState("");

    useEffect(() => {
            console.log(index.query.index)
            setInputs();
    }, [1000]);

    async function setInputs() {
        setUsuario(await GetDataId(index, "usuario"))
        console.log(usuario)
        setNome(usuario.nome)
        setSenha(usuario.senha)
        setIdade(usuario.idade)
        setEndereco(usuario.endereco)
    }

    async function deletar() {
        let tabela = await getTabela(usuario)
        await DeleteData(id, tabela)
    }

    async function atualizar() {
        let tabela = await getTabela(usuario)
        console.log(usuario)
        usuario.nome = nome;
        usuario.idade = idade;
        usuario.endereco = endereco;
        await PutData(usuario, tabela)
    }

    async function getTabela() {
        if (contem(usuario, await alunos)) {
            return "aluno"
        } else if (contem(usuario, await professores)) {
            return "professor"
        } else if (contem(usuario, await secretarios)) {
            return "secretario"
        }
    }

    return (
        <RotaPrivada id={index.query.index}>
            <Header id={index.query.index}></Header>


            <section className="w-full h-[93vh] flex flex-col justify-center items-center">

                <div className="w-[650px] h-[650px] bg-green shadow-10b ronded-[5px] flex flex-col justify-center items-center gap-6 relative z-[997]">
                    <div className="bg-verde w-[100px] h-[100px] absolute z-[999] shadow-10b rounded-full top-[-50px] flex justify-center items-center">
                        <img src="../user-icon.png" className="w-[100px] h-[100px] border-verde border-96 invert" alt="" />
                    </div>

                    <form autoComplete="false" className="flex flex-col justify-center items-center gap-6">
                        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                        <input type="number" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)} />
                        <input type="text" placeholder="Endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
                    </form >
                    <button className="bg-verde w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]" onClick={() => atualizar()}>Continuar</button>
                    <button className="bg-red-700 w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]" onClick={() => deletar()}>Deletar Conta</button>
                </div>
            </section>
        </RotaPrivada>
    )
}