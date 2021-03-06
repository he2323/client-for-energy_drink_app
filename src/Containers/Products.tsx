import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../strore/items/types";
import {CartItem} from "../strore/cart/types"
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { addRating } from "../strore/items/actions";
import { addItem } from "../strore/cart/actions";
import {RootState} from "../strore/rootReducer"
interface Rating {
  avgRating: number;
  integers: number;
}
const Products = () => {
  const compareObjects = (item1: Item, item2: Item) => {
    let comparison = item1.id > item2.id ? 1 : -1;
    return comparison;
  };

  const dispatch = useDispatch();

  const products: Item[] = useSelector((state: RootState) => state.items.items);
  const cart: CartItem[]  = useSelector((state: RootState) => state.cart.cart)
  const cartItems: Item[] = cart.map((cartItem: CartItem) => cartItem.item)

  products.sort(compareObjects);

  const possibleRatings: number[] = [1, 2, 3, 4, 5];
  const calculateRating = (rating: number[]): Rating => {
    const avgRating =
      rating.reduce((acc: number, rate: number) => acc + rate) / rating.length;
    return {
      avgRating: avgRating - (avgRating % 0.01),
      integers: Math.round(avgRating),
    };
  };
  const addRatingToItem = (rating: number, id: number): void => {
    console.log(`new rating: ${rating}, id of item: ${id}`);
    dispatch(addRating(rating, id));
  };
  const addItemToCart = (item: Item, amount = 1) => {
    dispatch(
      addItem({
        amount: amount,
        item: item,
        id: products[products.length - 1].id + 1,
      })
    );
  };

  return (
    <Flex direction="column" align="center" w="100vw" wrap="wrap">
      {products.map((item: Item) => (
        <Flex
          direction="column"
          m="1rem"
          p="3rem"
          wrap="nowrap"
          borderWidth="3px"
          borderStyle="solid"
          borderColor=" products.borderColor"
          key={item.id}
          w="sm"
        >
          <Image src={item.img} alt={item.name} p="0.2rem" m="0.8rem" />
          <Text m="0.4rem" fontWeight="bold" fontSize="1.3rem">
            {item.name}
          </Text>
          <Text fontSize="1.1rem" m="0.5rem">${item.prize}</Text>
          <Flex direction="row" m="0.4rem">
            {possibleRatings
              .slice(0, calculateRating(item.rating).integers)
              .map((value: number) => (
                <StarIcon
                  key={value}
                  onClick={() => addRatingToItem(value, item.id)}
                  color="products.iconMarkedColor"
                  _hover={{ cursor: "pointer" }}
                />
              ))}
            {possibleRatings
              .slice(calculateRating(item.rating).integers)
              .map((value: number) => (
                <StarIcon
                  key={value}
                  onClick={() => addRatingToItem(value, item.id)}
                  color="products.iconUnmarkedColor"
                  _hover={{ cursor: "pointer" }}
                />
              ))}
            <Text m="0.2rem" mt="-0.2rem">
              {calculateRating(item.rating).avgRating}
            </Text>
          </Flex>
          <Flex justify="space-between" w="90%" direction="row" m="0.5rem">
            <div />
            {!cartItems.includes(item) ? <Button onClick={() => addItemToCart(item)}>Add To Cart</Button> : <Text>Product already in the cart!</Text>}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Products;
