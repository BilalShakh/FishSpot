import React, { Component  } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import fishing_pic from '../../Assets/fishing_6.jpg'
import { VStack, HStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, Textarea, FormHelperText, Image } from "@chakra-ui/react"
import './Submission.css'

export class Submission extends Component {
    state = {
        image: fishing_pic
    };

    render() {
        return (
            <div class="submission-background">
                <VStack spacing="85px">
                    <Header />
                    <Spacer />
                    <Box p="6" maxW="850px"  borderWidth="0px" borderRadius="lg" bg="#444242">
                        <VStack>
                            <Text alignSelf="flex-start" fontSize="3xl" color="white" fontWeight="thin">Add a New Fishing Spot</Text>
                            <form>
                                <HStack spacing="20px">
                                    <Box maxW="50%" borderWidth="0px" borderRadius="lg" overflow="hidden" alignSelf="center">
                                        <Image src={this.state.image} alt="IMAGE NOT FOUND"/>
                                    </Box>
                                    <VStack spacing="15px">
                                        <FormControl w="100%" id="spot-name" isRequired>
                                            <FormLabel color="white">Fishing Spot Name</FormLabel>
                                            <Input type="text" bg="gray.600" borderWidth="0px" placeholder="Name" textColor="white"/>
                                        </FormControl>
                                        <FormControl w="100%" id="description" isRequired>
                                            <FormLabel color="white">Description</FormLabel>
                                            <Textarea bg="gray.600" borderWidth="0px" placeholder="Description" textColor="white"></Textarea>
                                        </FormControl>
                                        <HStack spacing="15px" >
                                            <FormControl w="50%" id="location-longitude" isRequired>
                                                <FormLabel color="white">Location</FormLabel>
                                                <Input type="number" bg="gray.600" borderWidth="0px" placeholder="Longitude" textColor="white"/>
                                            </FormControl>
                                            <FormControl w="50%" id="location-latitude" isRequired>
                                                <FormLabel color="white"></FormLabel>
                                                <Input type="number" bg="gray.600" borderWidth="0px" placeholder="Latitude" textColor="white"/>
                                            </FormControl>
                                        </HStack>
                                        <FormControl w="50%" id="spot-image" alignSelf="baseline" isRequired>
                                            <FormLabel color="white">Image</FormLabel>
                                            <Input type="file" bg="#444242" borderWidth="0px" color="white"/>
                                            <FormHelperText>Please upload your Spot's Image</FormHelperText>
                                        </FormControl>
                                    </VStack>
                                </HStack>
                                
                                <Button
                                    colorScheme="purple"
                                    type="submit"
                                    alignSelf="flex-start"
                                >
                                    Submit
                                </Button>
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

export default Submission
