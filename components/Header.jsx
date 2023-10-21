import { useRouter } from "next/router"

export default ({id}) => {

    const router = useRouter();

    return (
        <>

            <header className="w-full bg-verde h-[60px] flex justify-between items-center">
                <div className="w-[88%] h-full flex ml-5 justify-start gap-5 items-center">
                    <img className="w-12 h-12" src="../logoAv2.svg" />
                    <h2 className="text-branco font-chivo font-bold">Arnaldo Vieira II</h2>
                </div>
                <img className="w-12 h-12 flex justify-end mr-5 invert" src="../user-icon.png"  onClick={()=>router.push("/usuario/configs/"+id)}/>
            </header>
        </>
    )

}