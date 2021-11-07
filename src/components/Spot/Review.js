import React from 'react'
import { VStack, Text, HStack, Avatar, Flex, Spacer } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

{/* function to generate a review given the name, rating, and user's description of the fishspot*/}
function Review(props) {
    return (
        <HStack justifyItems="baseline" alignSelf="baseline" w="100%">
            <Avatar name={props.name} />
            <VStack alignItems="baseline" spacing="1px" >
                <Flex w="25%">
                    <Text fontSize="130%" color="white">{props.name}</Text>
                    <Spacer />
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < props.rating ? "gray.300" : "gray.500"}
                            alignSelf="center"
                        />
                    ))}
                </Flex>
                <Text fontSize="100%" fontWeight="thin" noOfLines={[1,2,3]} color="white">{props.description}</Text>
            </VStack>
        </HStack>
    )
}

export default Review
