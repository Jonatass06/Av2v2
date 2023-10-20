import Header from "@/components/Header"
import ModalCadastro from "@/components/ModalCadastro"

export default () => {
    return (
        <>
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
                </div>
            </section>
        </>
    )
}