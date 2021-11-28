import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, HStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, useToast } from "@chakra-ui/react"
import './Registration.css'


export default function Registration() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Username, setUsername] = useState("");
    const [PasswordI, setPasswordI] = useState("");
    const [PasswordC, setPasswordC] = useState("");
    
    const toast = useToast();

    //changes the various states that hold important submission info
    function generalChangeHandler (event) {
        let nam = event.target.id;
        let val = event.target.value;
        //setState({ [nam]: val });
        switch (nam){
            case "FirstName":
                setFirstName(val);
                break;
            case "LastName":
                setLastName(val);
                break;
            case "Email":
                setEmail(val);
                break;
            case "Username":
                setUsername(val);
                break;
            case "PasswordI":
                setPasswordI(val);
                break;
            default:
                setPasswordC(val);
                break;
        }
    }

    //Validates the inputs
    function handleSubmit(event) {
        var outputStr = "";

        if (!(/^[a-zA-Z]+$/.test(FirstName))){
            outputStr += "First name is invalid, please include only letters in your Firstname.";
        }

        if (!(/^[a-zA-Z]+$/.test(LastName))){
            outputStr += "Last name is invalid, please include only letters in your lastname.";
        }

        if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(Email))){
            outputStr += "Email is invalid, please enter a valid email. ";
        }

        if (PasswordI !== PasswordC || !(/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(PasswordC))){
            outputStr += "Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "
        }

        if (outputStr.length > 0){
            //alert(outputStr);
            toast({
                title: `Invalid Details entered`,
                description: outputStr,
                status: "error",
                isClosable: true,
            });
        } else{
            //alert("Account Successfully created");
            toast({
                title: `Account Successfully Created`,
                status: "success",
                isClosable: true,
            });
        }
    }

    
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
                                    <FormControl w="320px" id="FirstNameFC" isRequired>
                                        <FormLabel color="white">First name</FormLabel>
                                        <Input 
                                            id="FirstName"
                                            bg="gray.600" 
                                            borderWidth="0px" 
                                            placeholder="First name" 
                                            textColor="white"
                                            value={FirstName}
                                            onChange={generalChangeHandler} 
                                        />
                                    </FormControl>
                                    <FormControl w="320px" id="LastNameFC" isRequired>
                                        <FormLabel color="white">Last name</FormLabel>
                                        <Input 
                                            id="LastName"
                                            bg="gray.600" 
                                            borderWidth="0px" 
                                            placeholder="Last name" 
                                            textColor="white"
                                            value={LastName}
                                            onChange={generalChangeHandler} 
                                        />
                                    </FormControl>
                                </HStack>
                                <FormControl w="655px" id="EmailFC" isRequired>
                                    <FormLabel color="white">Email</FormLabel>
                                    <Input 
                                        id="Email"
                                        type="email" 
                                        bg="gray.600" 
                                        borderWidth="0px" 
                                        placeholder="Email" 
                                        textColor="white"
                                        value={Email}
                                        onChange={generalChangeHandler} 
                                    />
                                </FormControl>
                                <FormControl w="655px" id="UsernameFC" isRequired>
                                    <FormLabel color="white">Username</FormLabel>
                                    <Input 
                                        id="Username"
                                        bg="gray.600" 
                                        borderWidth="0px" 
                                        placeholder="Username" 
                                        textColor="white"
                                        value={Username}
                                        onChange={generalChangeHandler} 
                                    />
                                </FormControl>
                                <HStack spacing="15px" >
                                    <FormControl w="320px" id="passwordInitial" isRequired>
                                        <FormLabel color="white">Password</FormLabel>
                                        <Input 
                                            id="PasswordI"
                                            type="password" 
                                            bg="gray.600" 
                                            borderWidth="0px" 
                                            placeholder="Password" 
                                            textColor="white"
                                            value={PasswordI}
                                            onChange={generalChangeHandler} 
                                        />
                                    </FormControl>
                                    <FormControl w="320px" id="passwordConfirm" isRequired>
                                        <FormLabel color="white"></FormLabel>
                                        <Input 
                                            id="PasswordC"
                                            type="password" 
                                            bg="gray.600" 
                                            borderWidth="0px" 
                                            placeholder="Confrim Password" 
                                            textColor="white"
                                            value={PasswordC}
                                            onChange={generalChangeHandler} 
                                        />
                                    </FormControl>
                                </HStack>
                                <Button
                                    colorScheme="purple"
                                    type="submit"
                                    alignSelf="flex-start"
                                    onClick={handleSubmit}
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
    );
    
}
