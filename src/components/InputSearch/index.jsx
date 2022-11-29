import { useState } from "react";
import { toast } from "react-toastify";
import { InputSearchContainer } from "./styles";

export function InputSearch({ list, setRender }) {
  const [search, setSearch] = useState("");

  const filter = [...list].filter((value) => {
    if (
      value.name.toLowerCase().includes(search.toLowerCase()) ||
      value.category.toLowerCase().includes(search.toLowerCase())
    ) {
      return value;
    }
  });

  if (search == "") {
    setRender(list);
  }

  return (
    <InputSearchContainer>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => {
          filter.length != 0
            ? setRender(filter)
            : toast("Nenhum resultado encontrado");
        }}
      >
        Pesquisar
      </button>
    </InputSearchContainer>
  );
}
