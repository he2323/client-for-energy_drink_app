import React, { useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../strore/cart/types";
import CartItemRep from "../components/CartItem";
import {modifyAmount} from "../strore/cart/actions"
const Cart = () => {
  const compareObjects = (item1: CartItem, item2: CartItem) => {
    let comparison = item1.id > item2.id ? 1 : -1;
    return comparison;
  };
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart: CartItem[] = useSelector((state: any) => state.cart.cart);
  cart.sort(compareObjects);
  
  const changeAmount = (changeToValue: number, itemId: number) => {
    console.log(itemId);
    dispatch(modifyAmount(itemId, changeToValue))
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <>
      <Button
        colorScheme="nav.buttonNormal"
        fontSize="1.4rem"
        onClick={onOpen}
        _hover={{ bg: "nav.buttonHover" }}
        mr="2rem"
      >
        Cart
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent fontSize="1.3rem">
            <DrawerCloseButton />
            <Text align="center" fontWeight="bold" m="1rem" h="5rem">
              REVIEW YOUR CART
            </Text>

            <DrawerBody>
              <Flex direction="column" align="center">
                {cart.map((cartItem: CartItem) => (
                  <CartItemRep
                    item={cartItem.item}
                    amount={cartItem.amount}
                    changeAmount={changeAmount}
                  />
                ))}
              </Flex>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Cart;
