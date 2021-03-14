import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Item } from "../strore/items/types";
import { Flex, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
interface Rating {
  avgRating: number;
  integers: number;
}
const Products = () => {
  const products: Item[] = useSelector((state: any) => state.items.items);
  useEffect(() => {
    console.log(products);
  }, [products]);
  const calculateRating = (rating: number[]): Rating => {
    const avgRating =
      rating.reduce((acc: number, rate: number) => acc + rate) / rating.length;
    return {
      avgRating: avgRating - (avgRating % 0.01),
      integers: Math.round(avgRating),
    };
  };
  return (
    <Flex direction="column" align="center" w="100vw" wrap="wrap">
      {products.map((item: Item) => (
        <Flex
          direction="column"
          m="1rem"
          p="5rem"
          borderWidth="3px"
          borderStyle="solid"
          borderColor=" products.borderColor"
          key={item.id}
        >
          <Image src={item.img} alt={item.name} p="0.2rem" m="0.8rem" />
          <Text m="0.4rem" fontWeight="bold" fontSize="1.3rem">
            {item.name}
          </Text>
          <Text fontSize="1.1rem">${item.prize}</Text>
          <Flex direction="row">
            {new Array(calculateRating(item.rating).integers)
              .fill(0)
              .map((_) => (
                <StarIcon color="products.iconMarkedColor" />
              ))}
            {new Array(5 - calculateRating(item.rating).integers)
              .fill(0)
              .map((_) => (
                <StarIcon color="products.iconUnmarkedColor" />
              ))}
            <Text m="0.2rem" mt="-0.2rem">{calculateRating(item.rating).avgRating}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Products;
