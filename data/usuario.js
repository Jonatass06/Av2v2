import { GetDataId } from "@/pages/api/hello"

export default (id) => {
    return getUsuario(id)
}

async function getUsuario(id){
    let user  = await GetDataId(id, "usuario")
    return user
}