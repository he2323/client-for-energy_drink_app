import React from "react";
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
} from "@chakra-ui/react";
import {useSelector} from "react-redux"

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const cart = useSelector((state: any) => state.cart.cart)
  return (
    <>
      <Button colorScheme="nav.buttonNormal" fontSize="1.4rem" onClick={onOpen} _hover={{bg: "nav.buttonHover"}}>
        Cart
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent  fontSize="1.4rem">
            <DrawerCloseButton />
            <DrawerBody>soooome Shit</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Cart;
