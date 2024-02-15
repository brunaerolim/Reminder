import { useState } from "react";
import { useRouter } from "next/router";

import Input from "../components/input";
import List from "../components/list";
import { convertBrazilianDateFormatToGlobal } from "../utils/date";
import { v4 as uuidv4 } from 'uuid';

export default function Container({ remaiders }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  async function createRemaider() {
    await fetch("http://localhost:5247/api/reminder", {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: name,
        date: new Date(convertBrazilianDateFormatToGlobal(date)).toISOString(),
        isDeleted: false,
      }),
    })
      .then(() => {
        router.reload();
      })
      .catch((error) => console.log(error));
  }

  async function deleteRemaider(id) {
    await fetch(`http://localhost:5247/api/reminder/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(() => {
        router.reload();
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <p className="fs-4">Novo lembrete</p>
      <Input
        name="Nome"
        value={name}
        onChange={setName}
        placeholder="Nome do lembrete"
      />
      <Input
        name="Data"
        value={date}
        onChange={setDate}
        placeholder="Data do lembrete"
        mask="99/99/9999"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={createRemaider}
        disabled={!name || !date}
      >
        Criar
      </button>

      <div className="mt-4">
        <p className="fs-5">Lista de lembretes</p>
        {Object.keys(remaiders).map((remaiderDate) => {
          return (
            <List
              key={remaiderDate}
              date={remaiderDate}
              itens={[...remaiders[remaiderDate].remaiders]}
              onRemove={deleteRemaider}
            />
          );
        })}
      </div>
    </>
  );
}
