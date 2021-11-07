import React from 'react'
import { Flex, Heading, HStack, Text, Spacer, Button, Box, Menu, MenuList,MenuItem, MenuButton, IconButton } from "@chakra-ui/react"
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div class="background-header">
            <Flex>
                <Box py="7" px="5" display={{ base: "none",  md: "flex" }}>
                    <HStack spacing="50px">
                        <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>
                            <Link to="/">
                                Home
                            </Link>
                        </Heading>
                        <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>
                            <Link to="/submission">
                                Add New Spot
                            </Link>
                        </Heading>
                    </HStack>
                </Box>
                <Spacer display={{ base: "none",  md: "block" }}/>
                <Box p="3">
                    <Text fontSize={{ base: "2xl",  md: "4xl" }} color="white">FISH SPOT</Text>
                </Box>
                <Spacer />
                <Box p="5">
                    <HStack spacing="50px" display={{ base: "none",  md: "flex" }}>
                        <Link to="/search">
                            <SearchIcon w={6} h={6} color="white" _hover={{cursor: "Pointer"}}/> 
                        </Link>
                        <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>
                            <Link to="/signin">
                                Sign In
                            </Link>
                        </Heading>
                        <Button colorScheme="purple" borderRadius="25px">
                            <Link to="/signup">
                                Sign up
                            </Link>
                        </Button>
                    </HStack>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                            display={{ base: "inline-flex",  md: "none" }}
                            bg="white"
                        />
                        <MenuList>
                            <Link to="/">
                                <MenuItem>
                                    Home
                                </MenuItem>
                            </Link>
                            <Link to="/submission">
                                <MenuItem>
                                    Add New Spot
                                </MenuItem>
                            </Link>
                            <Link to="/signin">
                                <MenuItem >
                                    Sign in
                                </MenuItem>
                            </Link>
                            <Link to="/signup">
                                <MenuItem>
                                    Sign up
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </div>
    )
}

export default Header
