import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer } from "@chakra-ui/react"
import './SignIn.css'
import { Link } from "@chakra-ui/react"

export class SignIn extends React.Component {
    state={
        Email: "",
        Password: ""
    };

    //changes the various states that hold important submission info
    generalChangeHandler = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {
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
                                        <Input bg="gray.600" borderWidth="0px" placeholder="Email" type="email" textColor="white" id="Email" value={this.state.Email} onChange={this.generalChangeHandler}/>
                                    </FormControl>
                                    
                                    <FormControl w="100%" isRequired>
                                        <FormLabel color="white">Password</FormLabel>
                                        <Input bg="gray.600" borderWidth="0px" placeholder="Password" type="password" textColor="white" id="Password" value={this.state.SearchText} onChange={this.generalChangeHandler}/>
                                    </FormControl>


                                   
                                    <Button
                                        colorScheme="purple"
                                        type="submit"
                                        alignSelf="flex-start"
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
}

export default SignIn
