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
import { useSelector } from "react-redux";
import {CartItem} from "../strore/cart/types"

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart: CartItem[] = useSelector((state: any) => state.cart.cart);
  useEffect(() => {
console.log(cart);      

  }, [cart])
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
          <DrawerContent fontSize="1.4rem">
            <DrawerCloseButton />
            <DrawerHeader>REVIEW YOUR CART</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" align="center" w="80%" h = "80%">
                  {/* {cart.item.map()} */}
              </Flex>
            </DrawerBody>
            <DrawerFooter>

            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Cart;
