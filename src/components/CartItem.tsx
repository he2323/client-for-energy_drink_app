import React from "react";
import { Flex, Input, Button, Text, Image, Box } from "@chakra-ui/react";
import { Item } from "../strore/items/types";
interface ItemI {
  item: Item;
  amount: number;
  changeAmount: (value: number, id: number) => void;
  id: number;
}
const CartItemRep = ({ item, amount, changeAmount, id }: ItemI) => {
  return (
    <Flex direction="row" w="100%" h="auto" justify="space-between">
      <Image src={item.img} alt={item.name} h="3.4rem" m="0.2rem" />
      <Flex direction="column">
        <Text fontSize="1.1rem" fontWeight="bold">
          {item.name}
        </Text>
        <Text fontSize="1.1rem">${item.prize}</Text>
        <Flex direction="row" w="11rem">
          <Button
          size="sm"
            onClick={() => changeAmount(amount !== 0 ? amount - 1 : 0, id)}
          >
            -
          </Button>
          <Input type="number" value={amount} readOnly w="3.2rem" />
          <Button size="sm" onClick={() => changeAmount(amount + 1, id)}>+</Button>
        </Flex>
      </Flex>
      <Flex align="center" justify="center">
        <Text w="9rem" >
          ${Math.round(item.prize * amount * 100) / 100}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CartItemRep;
