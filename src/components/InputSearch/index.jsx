import { useEffect, useState } from "react";
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

  useEffect(() => {
    setRender(filter);
  }, [search]);

  return (
    <InputSearchContainer>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={(e) => console.log(search)}>Pesquisar</button>
    </InputSearchContainer>
  );
}
