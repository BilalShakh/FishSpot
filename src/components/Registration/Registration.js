import React, { Component,  } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, HStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer } from "@chakra-ui/react"
import './Registration.css'

export class Registration extends Component {
    render() {
        return (
            <div class="registration-background">
                <VStack spacing="85px">
                    <Header />
                    <Spacer />
                    <Box p="6" maxW="850px" maxH="550px" borderWidth="0px" borderRadius="lg" bg="#444242">
                        <VStack>
                            <Text alignSelf="flex-start" fontSize="3xl" color="white">Sign up</Text>
                            <form>
                                <VStack spacing="15px">
                                    <HStack spacing="15px" >
                                        <FormControl w="320px" id="first-name" isRequired>
                                            <FormLabel color="white">First name</FormLabel>
                                            <Input bg="gray.600" borderWidth="0px" placeholder="First name" textColor="white"/>
                                        </FormControl>
                                        <FormControl w="320px" id="last-name" isRequired>
                                            <FormLabel color="white">Last name</FormLabel>
                                            <Input bg="gray.600" borderWidth="0px" placeholder="Last name" textColor="white"/>
                                        </FormControl>
                                    </HStack>
                                    <FormControl w="655px" id="email" isRequired>
                                        <FormLabel color="white">Email</FormLabel>
                                        <Input type="email" bg="gray.600" borderWidth="0px" placeholder="Email" textColor="white"/>
                                    </FormControl>
                                    <FormControl w="655px" id="username" isRequired>
                                        <FormLabel color="white">Username</FormLabel>
                                        <Input bg="gray.600" borderWidth="0px" placeholder="Username" textColor="white"/>
                                    </FormControl>
                                    <HStack spacing="15px" >
                                        <FormControl w="320px" id="passwordInitial" isRequired>
                                            <FormLabel color="white">Password</FormLabel>
                                            <Input type="password" bg="gray.600" borderWidth="0px" placeholder="Password" textColor="white"/>
                                        </FormControl>
                                        <FormControl w="320px" id="passwordConfirm" isRequired>
                                            <FormLabel color="white"></FormLabel>
                                            <Input type="password" bg="gray.600" borderWidth="0px" placeholder="Confrim Password" textColor="white"/>
                                        </FormControl>
                                    </HStack>
                                    <Button
                                        colorScheme="purple"
                                        type="submit"
                                        alignSelf="flex-start"
                                    >
                                        Submit
                                    </Button>
                                </VStack>
                            </form>
                        </VStack>
                    </Box>
                    
                    <Spacer />
                    <Footer />
                </VStack>
            </div>
        )
    }
}

export default Registration
