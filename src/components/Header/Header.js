import React, { useContext, useEffect } from 'react'
import { Flex, Heading, HStack, Text, Spacer, Button, Box, Menu, MenuList,MenuItem, MenuButton, IconButton, useToast } from "@chakra-ui/react"
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import './Header.css';
import { AuthContext } from "../AuthContext";
import axios from 'axios';

function Header() {
    const { authState, setAuthState } = useContext(AuthContext);
    const toast = useToast();

    const Logout = () => {
        setAuthState({
            username: "",
            id: 0,
            status: false,
        })
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        toast({
            title: `Successfully signed out of your account!`,
            status: "success",
            isClosable: true,
        });
    }
    

    useEffect(() => {
        if (localStorage.getItem("accessToken")){
            const headers = { 'accessToken' : localStorage.getItem("accessToken") }
            axios.get(process.env.REACT_APP_API_LINK+"/auth/verify", { headers }).then((response, err) => {
                if (response.data.isValid){
                    setAuthState({
                        username: localStorage.getItem("username"),
                        id: localStorage.getItem("id"),
                        status: true
                    })
                }else {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("username");
                    localStorage.removeItem("id");
                    toast({
                        title: `Log in has timed out, please sign in again.`,
                        status: "warning",
                        isClosable: true,
                    });
                }
            });
        }
    }, []);

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
                        {
                            !authState.status ? (
                                <Heading size="sm" color="white" _hover={{textDecoration : "underline", cursor: "Pointer"}}>
                                    <Link to="/signin">
                                        Sign In
                                    </Link>
                                </Heading>    
                            ) : (
                                <Heading size="sm" color="white">
                                    Signed in as: {authState.username}
                                </Heading>  
                            )
                        }
                        {
                            !authState.status ? (
                                <Button colorScheme="purple" borderRadius="25px">
                                    <Link to="/signup">
                                        Sign up
                                    </Link>
                                </Button>       
                            ) : (
                                <Button colorScheme="purple" borderRadius="25px" onClick={Logout}>
                                    Sign out
                                </Button>  
                            )
                        }
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
