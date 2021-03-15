import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../strore/rootReducer";
import { CartItem } from "../strore//cart/types";
import ProductRep from "../components/CartItem";
import { modifyAmount } from "../strore/cart/actions";
import { Flex, Divider, Button, Text } from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51IVC4ZL3D9qy8FEJZVTYlicB8ZUqNLhI2sZvwt9QWnba6EpnKRBITI7wlJRpQfcVd52b6faB1Fng532EyfS2gxkg00jfitkyP7");
const Checkout = () => {
  const dispatch = useDispatch();
  const cart: CartItem[] = useSelector((state: RootState) => state.cart.cart);
  const changeAmount = (changeToValue: number, itemId: number) => {
    dispatch(modifyAmount(itemId, changeToValue));
  };
  const getFullPrize = () => {
    let total = 0;
    cart.map((item: CartItem) => (total += item.item.prize * item.amount));
    return Math.round(total * 100) / 100;
  };
  const handleClick = async (event: any) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("http://127.0.0.1:4242/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }
    }
  };
  return (
    <Flex
      w="80vw"
      direction="column"
      align="center"
      justify="center"
      m="0 auto"
    >
      {cart.map((item: CartItem) => (
        <Flex direction="column" w="100%" m="1.3rem">
          <ProductRep
            key={item.id}
            item={item.item}
            id={item.id}
            amount={item.amount}
            changeAmount={changeAmount}
          />
          <Divider />
        </Flex>
      ))}
      <Text>${getFullPrize()}</Text>
      <Button m="1rem" onClick={handleClick}>
        Pay
      </Button>
    </Flex>
  );
};

export default Checkout;
