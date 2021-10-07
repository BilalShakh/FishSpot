import React from 'react'
import { Flex, Heading, HStack, Text, Spacer, Button, Box } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import './Header.css';

function Header() {
    return (
        <div class="background-header">
            <Flex>
                <Box py="7" px="5">
                    <HStack spacing="50px">
                        <Heading size="sm" color="white">Home</Heading>
                        <Heading size="sm" color="white">Add New Spot</Heading>
                    </HStack>
                </Box>
                <Spacer />
                <Box p="3">
                    <Text fontSize="4xl" color="white">FISH SPOT</Text>
                </Box>
                <Spacer />
                <Box p="5">
                    <HStack spacing="50px">
                        <SearchIcon w={6} h={6} color="white"/>
                        <Heading size="sm" color="white">Sign in</Heading>
                        <Button colorScheme="purple" borderRadius="25px">Sign up</Button>
                    </HStack>
                </Box>
            </Flex>
        </div>
    )
}

export default Header
