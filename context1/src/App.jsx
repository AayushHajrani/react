import { useState } from "react";
// import Counter from "./components/Counter";
// import { count } from "./context/Count";
import { useContext } from "react";
import Shop from "./components/Shop";
import { cartcontext } from "./context/Cart";
import MainCart from "./components/MainCart";

function App() {
  // const countedcontext = useContext(count);
  // console.log(countedcontext);

//   const cartedcontext = useContext(cartcontext)
// console.log(cartedcontext);

  return (
    <>
    <Shop name="Macbook" price={700}/>
    <Shop name="pendrive" price={100}/>
    <Shop name="playstation" price={1100}/>
    <MainCart/>
      {/* <Counter text={countedcontext.county} /> */}
    </>
  );
}

export default App;
