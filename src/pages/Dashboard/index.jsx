import React, { useEffect, useState } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProdList";
import { api } from "../../services/api";
import { Dashboard } from "./styles";

export function DashBoard() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  const [render, setRender] = useState([]);

  useEffect(() => {
    async function hambData() {
      try {
        const request = await api.get();
        setList(request.data);
      } catch (err) {
        console.error(err);
      }
    }
    hambData();
  }, []);

  return (
    <Dashboard>
      <Header list={list} setRender={setRender} />
      <main>
        <List dataList={render} setCart={setCart} cart={cart} />
        <Cart dataCart={cart} setCart={setCart} cart={cart} />
      </main>
    </Dashboard>
  );
}
