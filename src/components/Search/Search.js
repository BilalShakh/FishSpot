import React, { Component,  } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, Select } from "@chakra-ui/react"
import './Search.css'
import { Link } from "@chakra-ui/react"

export class Search extends Component {
    render() {
        return (
            <div class="search-background">
                <VStack spacing="85px">
                    <Header />
                    <Spacer />
                    <Box p="6" w="850px"  borderWidth="0px" borderRadius="lg" bg="#444242">
                        <VStack spacing="60px" alignItems="flex-start">
                            <Text alignSelf="flex-start" fontSize="3xl" color="white" fontWeight="thin">Search</Text>
                            <form>
                                <VStack spacing="50px" alignSelf="flex-start">
                                    <FormControl w="100%" id="search-term" isRequired>
                                        <FormLabel color="white">Search Term</FormLabel>
                                        <Input bg="gray.600" borderWidth="0px" placeholder="Search Term" textColor="white"/>
                                    </FormControl>
                                    <FormControl w="100%" id="search-cat" isRequired>
                                        <FormLabel color="white">Search Category</FormLabel>
                                        <Select bg="gray.600" color="white" borderWidth="0px" >
                                            <option class="option-select">All</option>
                                            <option class="option-select">1 Star</option>
                                            <option class="option-select">2 Star</option>
                                            <option class="option-select">3 Star</option>
                                            <option class="option-select">4 Star</option>
                                            <option class="option-select">5 Star</option>
                                            
                                        </Select>
                                    </FormControl>
                                   
                                    <Button
                                        colorScheme="purple"
                                        type="submit"
                                        alignSelf="flex-start"
                                    >
                                        <Link  href="/Results">
                                                Submit
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

export default Search
