import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/globalStore";
import ProductCard from '../components/ProductCard'

const HomePage = () => {

  const { getProducts, products} = useProductStore()

  useEffect(() => {
    getProducts()
  },[getProducts])
  
  return (
    <Container maxW={"container.xl"}>
      <VStack spacing={7}>
        <Text
          fontWeight={"bold"}
          fontSize={30}
          fontFamily={"cursive"}
          bgGradient={"linear(to-r, cyan, greenyellow)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>

        <SimpleGrid
                   columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                   }}
                   spacing={10}
                   w={'full'}>

                   { products.map((product) => (
                    <ProductCard key = {product._id} product= {product}/>
                   )) }

        </SimpleGrid>

       {products.length === 0 && 
        <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
        No products found 😢 {''}
        <Link to={"/create"}>
          <Text
            as={"span"}
            color={"aqua"}
            fontSize={"md"}
            fontFamily={"cursive"}
            fontWeight={"light"}
            _hover={{'textDecoration': 'underline'}}
          >
            Create New Product
          </Text>
        </Link>
      </Text>
      }

       
      </VStack>
    </Container>
  );
};

export default HomePage;
