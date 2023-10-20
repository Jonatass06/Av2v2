
import axios from "axios";
import { NextResponse } from "next/server";

export async function GetDataId(id, tabela) {
  try {
    const response = await axios.get("http://10.4.96.35:8082/"+tabela+"/"+id);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}


export async function GetUserByPasswordUsername(username, password) {
  let a = await GetAllData("usuario");
  for(let dado of a){
    if(dado.nome == username && dado.senha == password){
      return dado;
    }
  }
  return null;
}

export default async function GetAllData(tabela) {
  try {
    const response = await axios.get("http://10.4.96.35:8082/"+tabela);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}
// 
export async function PostData(object, tabela) {
  const res = await axios.post("https://10.4.9635.:8082/"+ tabela , {data:object});
  const data = await res.data;
  return NextResponse.json(data)
}

export async function DeleteData(id, tabela) {
  const result = await axios.delete("http://10.4.96.35:8082/" + tabela +"/"+ id);
  const dados = await result.data;
  return dados;
}

export async function PutData(object, tabela) {
  const res = await axios.put("http://10.4.96.35:8082/"+tabela, {data:object});
  const data = await res.data
  return NextResponse.json(data)
}
