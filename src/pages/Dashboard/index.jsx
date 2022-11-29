import React, { useEffect, useState } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProdList";
import { api } from "../../services/api";
import { Dashboard } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DashBoard() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  const [render, setRender] = useState([]);
  const [toaster, setToaster] = useState(false);

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

  useEffect(() => {
    toaster ? toast("Item já está no carrinho!") : "";
    setTimeout(() => {
      setToaster(false)
    }, 2000);
  }, [toaster]);

  return (
    <Dashboard>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header list={list} setRender={setRender} />
      <main>
        <List dataList={render} setCart={setCart} cart={cart} setToaster={setToaster} />
        <Cart dataCart={cart} setCart={setCart} cart={cart} />
      </main>
    </Dashboard>
  );
}
