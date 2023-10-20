
import { NextResponse } from "next/server";

export async function GetDataId(id, tabela) {
  const result = await fetch( "http://10.4.96.8:8082/"+ tabela +"/"+ id);
  const dados = await result.json();
  return dados
}

export async function GetUserByPasswordUsername(username, password) {
  const result = await fetch("http://10.4.96.8:8082/usuario",{method:"GET"});
  const dados = await result.json();
  for(let dado of dados){
    if(dado.nome == username && dado.senha == password){
      return dado;
    }
  }
  return null;
}

export default async function GetAllData(tabela) {
  const result = await fetch("http://10.4.96.8:8082/"+ tabela);
  const dados = await result.json();
  return dados
}
// 
export async function PostData(object, tabela) {
  const res = await fetch("https://10.4.96.8:8082/"+ tabela , {
    method: "POST",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(object),
  });

  const data = await res.json()
  return NextResponse.json(data)
}

export async function DeleteData(id, tabela) {
  const result = await fetch("http://10.4.96.8:8082/" + tabela +"/"+ id,{method:"DELETE"});
  const dados = await result.json();

  return dados;

}

export async function PutData(object, tabela) {
  const res = await fetch("http://10.4.96.8:8082/"+tabela, {
    method: "PUT",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(object),
  });
  const data = await res.json()

  return NextResponse.json(data)

}
