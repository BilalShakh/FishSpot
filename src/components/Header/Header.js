import React from 'react'
import { Flex, Heading, HStack, Text, Spacer, Button, Box, Menu, MenuList,MenuItem, MenuButton, IconButton } from "@chakra-ui/react"
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import './Header.css';

function Header() {
    return (
        <div class="background-header">
            <Flex>
                <Box py="7" px="5" display={{ base: "none",  md: "flex" }}>
                    <HStack spacing="50px">
                        <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>Home</Heading>
                        <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>Add New Spot</Heading>
                    </HStack>
                </Box>
                <Spacer display={{ base: "none",  md: "block" }}/>
                <Box p="3">
                    <Text fontSize={{ base: "2xl",  md: "4xl" }} color="white">FISH SPOT</Text>
                </Box>
                <Spacer />
                <Box p="5">
                    <HStack spacing="50px" display={{ base: "none",  md: "flex" }}>
                        <SearchIcon w={6} h={6} color="white" _hover={{cursor: "Pointer"}}/>
                        <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>Sign in</Heading>
                        <Button colorScheme="purple" borderRadius="25px">Sign up</Button>
                    </HStack>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                            display={{ base: "inline-flex",  md: "none" }}
                        />
                        <MenuList>
                            <MenuItem>
                            Home
                            </MenuItem>
                            <MenuItem>
                            Add New Spot
                            </MenuItem>
                            <MenuItem >
                            Sign in
                            </MenuItem>
                            <MenuItem>
                            Sign up
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </div>
    )
}

export default Header
