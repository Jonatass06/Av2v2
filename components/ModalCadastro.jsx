import { useState } from "react"
import { DeleteData } from "@/pages/api/hello"
export default ({post}) => {
    const[nome, setNome] = useState("")
    const[senha, setSenha] = useState("")
    const[idade, setIdade] = useState("")
    const[endereco, setEndereco] = useState("");


    return (
        <div className="w-[700px] h-[650px] bg-white shadow-10b ronded-[5px] flex flex-col justify-center items-center gap-6 relative z-[997]">
            <img src="./logoAv2.svg" className="w-[100px] h-[100px] absolute z-[999] shadow-10b rounded-full top-[-50px]" alt="" />
            <h2 className="text-verde font-alata text-[48px] ">Cadastrar</h2>
            <div className="flex flex-col justify-center items-center gap-6">
                <input type="text" placeholder="Nome" onChange={e => {setNome(e.target.value)}}/>
                <input type="password" placeholder="Senha" onChange={e => {setSenha(e.target.value)}}/>
                <input type="number" placeholder="Idade" onChange={e => {setIdade(e.target.value)}}/>
                <input type="text" placeholder="Endereco" onChange={e => {setEndereco(e.target.value)}}/>
            </div>
            <button className="bg-verde w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]" onClick={() => {
                post({
                    "nome": nome,
                    "senha": senha, 
                    "idade": idade == "" ? 0 : parseInt(idade),
                    "endereco": endereco
                });
            }}>Continuar</button>
            <button onClick={() => {
                DeleteData(55, "aluno")
            }}>asdsa</button>
        </div>
    )
}