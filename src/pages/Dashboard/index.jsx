import React, { useEffect, useState } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProdList";
import { api } from "../../services/api";
import { Dashboard } from "./styles";

export function DashBoard() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([7]);

  useEffect(() => {
    async function hambData() {
      try {
        const request = await api.get();
        setList(request.data);
        setCart(request.data)
      } catch (err) {
        console.error(err);
      }
    }
    hambData();
  }, []);

  return (
    <Dashboard>
      <Header />
      <main>
        <List dataList={list} />
        <Cart dataCart={cart} />
      </main>
    </Dashboard>
  );
}
