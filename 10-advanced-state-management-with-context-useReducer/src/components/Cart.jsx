// import { use } from "react"; Uma opção de useContext para React >= 19, é até melhor pois da pra usar dentro de uma condicional
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function Cart({ onUpdateItemQuantity }) {
  //Aqui poderia ser usado apena use, se o import fosse use
  //é melhor, porem não funciona em react < 19
  const { items } = useContext(CartContext)
  // só para lembrar aqui foi usado a Destructuring

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    // uma forma diferente de usar contexto, não é o recomendado mas pode acontecer de ver em outros projetos
    // <CartContext.Consumer>
    //   {(cartCtx) => {
    //     -----> funções
    //     return
    //     (
    //       -----> todo o codigo abaixo
    //     )
    //   }}
    // </CartContext.Consumer> // só feixa depois de todoo o codigo abaixo, aqui é so demonstrando estrutura
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
