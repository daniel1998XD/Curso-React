
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CartContextProvider, { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  
  return (
    // usando o contexto que abraça tudo onde vai poder ser usado 
    // o .Provider é do React, para usar como um componente em aplicações 
    // com versão menor que REACT 19, se for maior só usa como componente msm

    
    // esse value é extremamente importante, se você tem um valor
    // voce precisa dele para não quebrar a aplicação

    // <CartContext value{valueCtx}>
    //   todo o codigo que agora esta em shopping-cart-context.jsx
    // </CartContext>

    // para o App.js não ficar com muita coisa escrita, ele foi migrado para o shopping-cart-context.jsx
    // deixando mais organizado, sendo uma boa pratica e como geralmente se ve
    <CartContextProvider>
      <Header />
      {/* <Shop onAddItemToCart={handleAddItemToCart} /> */}
      <Shop >
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
