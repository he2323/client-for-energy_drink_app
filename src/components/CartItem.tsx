import React from "react";
import { Flex, Input, Button, Text, Image } from "@chakra-ui/react";
import { Item } from "../strore/items/types";
interface ItemI {
  item: Item;
  amount: number;
  changeAmount: (value: number, id: number) => void;
}
const CartItemRep = ({ item, amount, changeAmount }: ItemI) => {
  return (
    <Flex wrap="wrap" w="100%" h="xs">
      <Image src={item.img} alt={item.name} />
      <Flex direction="column">
        <Text fontSize="1.1rem" fontWeight="bold">
          {item.name}
        </Text>
        <Text fontSize="1.1rem">{item.prize}</Text>
        <Flex direction="row">
          <Button onClick={() => changeAmount(amount!=0 ? amount - 1: 0, item.id - 1)}>
            -
          </Button>
          <Input type="number" value={amount} readOnly />
          <Button onClick={() => changeAmount(amount + 1, item.id - 1)}>
            +
          </Button>
        </Flex>
        <Text>${Math.round(item.prize * amount*100)/100}</Text>
      </Flex>
    </Flex>
  );
};

export default CartItemRep;
