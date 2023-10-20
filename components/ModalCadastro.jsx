export default () => {

    return (
        <div className="w-[700px] h-[650px] bg-white shadow-10b ronded-[5px] flex flex-col justify-center items-center gap-6 relative z-[997]">
            <img src="./logoAv2.svg" className="w-[100px] h-[100px] absolute z-[999] shadow-10b rounded-full top-[-50px]" alt="" />
            <h2 className="text-verde font-alata text-[48px] ">Cadastrar</h2>
            <div className="flex flex-col justify-center items-center gap-6">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Idade" />
                <input type="text" placeholder="Endereco" />
            </div>
            <button className="bg-verde w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]">Continuar</button>
        </div>
    )
}