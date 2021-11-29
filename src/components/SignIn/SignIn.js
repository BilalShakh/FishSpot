import React, { useState, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, useToast } from "@chakra-ui/react"
import './SignIn.css'
import { Link } from "@chakra-ui/react"
//import { useHistory } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import axios from "axios";

export default function SignIn() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    //let history = useHistory();
    const { setAuthState } = useContext(AuthContext);
    const toast = useToast();

    //changes the various states that hold important submission info
    const generalChangeHandler = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        switch (nam){
            case "Email":
                setEmail(val);
                break;
            default:
                setPassword(val);
                break;
        }
    }

    const login = () => {
        const data = { Email: Email, Password: Password };
        axios.post(process.env.API_LINK+"/auth/login", data).then((response) => {
          if (!response.data.valid) {
            toast({
                title: `Invalid Email or Password Entered`,
                status: "error",
                isClosable: true,
            });
          } else {
            localStorage.setItem("accessToken", response.data.token);
            setAuthState({
              username: response.data.username,
              id: response.data.id,
              status: true,
            });
            toast({
                title: `Account successfully logged in!`,
                status: "success",
                isClosable: true,
            });
          }
        });
    };

    //Validates the inputs
    function handleSubmit(event) {
        var outputStr = "";

        if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(Email))){
            outputStr += "Email is invalid, please enter a valid email. ";
        }

        if (!(/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(Password))){
            outputStr += "Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "
        }

        if (outputStr.length > 0){
            //alert(outputStr);
            toast({
                title: `Invalid Login Details entered`,
                description: outputStr,
                status: "error",
                isClosable: true,
            });
        } else{
            //alert("Account Successfully created");
            login();
        }
    }

    
    return (
        <div class="signin-background">
            <VStack spacing="85px">
                <Header />
                <Spacer />
                <Box p="6" w="850px"  borderWidth="0px" borderRadius="lg" bg="#444242">
                    <VStack spacing="50px" alignItems="flex-start">
                        <Text alignSelf="flex-start" fontSize="3xl" color="white" fontWeight="thin">Sign In</Text>
                        <form>
                            <VStack spacing="70px" alignSelf="flex-start">
                                <FormControl w="100%" isRequired>
                                    <FormLabel color="white">Email</FormLabel>
                                    <Input bg="gray.600" borderWidth="0px" placeholder="Email" type="email" textColor="white" id="Email" value={Email} onChange={generalChangeHandler}/>
                                </FormControl>
                                
                                <FormControl w="100%" isRequired>
                                    <FormLabel color="white">Password</FormLabel>
                                    <Input bg="gray.600" borderWidth="0px" placeholder="Password" type="password" textColor="white" id="Password" value={Password} onChange={generalChangeHandler}/>
                                </FormControl>


                                
                                <Button
                                    colorScheme="purple"
                                    type="submit"
                                    alignSelf="flex-start"
                                    onClick={handleSubmit}
                                >
                                    <Link>
                                            Sign In
                                    </Link>
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
