import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, HStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer } from "@chakra-ui/react"
import './Registration.css'


export class Registration extends React.Component {
    state={
        FirstName:"",
        LastName:"",
        Email:"",
        Username:"",
        PasswordI:"",
        PasswordC:""
    };

    //changes the various states that hold important submission info
    generalChangeHandler = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    //Validates the inputs
    handleSubmit = (event) => {
        var outputStr = "";

        if (!(/^[a-zA-Z]+$/.test(this.state.FirstName))){
            outputStr += "First name is invalid, please include only letters in your Firstname.";
        }

        if (!(/^[a-zA-Z]+$/.test(this.state.LastName))){
            outputStr += "Last name is invalid, please include only letters in your lastname.";
        }

        if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(this.state.Email))){
            outputStr += "Email is invalid, please enter a valid email. ";
        }

        if (this.state.PasswordI !== this.state.PasswordC || !(/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(this.state.PasswordC))){
            outputStr += "Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "
        }

        if (outputStr.length > 0){
            alert(outputStr);
        } else{
            alert("Account Successfully created");
        }
    }

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
                                        <FormControl w="320px" id="FirstNameFC" isRequired>
                                            <FormLabel color="white">First name</FormLabel>
                                            <Input 
                                                id="FirstName"
                                                bg="gray.600" 
                                                borderWidth="0px" 
                                                placeholder="First name" 
                                                textColor="white"
                                                value={this.state.FirstName}
                                                onChange={this.generalChangeHandler} 
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
                                                value={this.state.LastName}
                                                onChange={this.generalChangeHandler} 
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
                                            value={this.state.Email}
                                            onChange={this.generalChangeHandler} 
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
                                            value={this.state.Username}
                                            onChange={this.generalChangeHandler} 
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
                                                value={this.state.PasswordI}
                                                onChange={this.generalChangeHandler} 
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
                                                value={this.state.PasswordC}
                                                onChange={this.generalChangeHandler} 
                                            />
                                        </FormControl>
                                    </HStack>
                                    <Button
                                        colorScheme="purple"
                                        type="submit"
                                        alignSelf="flex-start"
                                        onClick={this.handleSubmit}
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
