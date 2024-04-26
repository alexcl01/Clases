import { useSignal } from "@preact/signals";
import Products from "../components/Products.tsx";
import Menu from "../components/Menu.tsx";
import { CartItem, Pages } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Cart from "../components/Cart.tsx";
import CheckOut from "../components/CheckOut.tsx";

const Shop = () => {
  const cart = useSignal<CartItem[]>([]);
  const page = useSignal<Pages>(Pages.BREAKFAST);

  return (
    <>
      <Menu cart={cart} page={page} />
      {IS_BROWSER && [Pages.BREAKFAST, Pages.LUNCH].includes(page.value) && (
        <Products cart={cart} page={page} />
      )}
      {IS_BROWSER && page.value === Pages.CART && (
        <Cart cart={cart} page={page} />
      )}
      {IS_BROWSER && page.value === Pages.CHECKOUT && (
        <CheckOut cart={cart} page={page} />
      )}
    </>
  );
};

export default Shop;