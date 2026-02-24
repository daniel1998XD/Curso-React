import { createContext } from "react";

//Criação do CONTEXTO
export const CartContext = createContext({
  // o valor default serve para autocompletar, facilitando a programação
  items: [],
//   uma função sem nada apenas para ajudar no auto complete 
  addItemToCart: () => {}
});
