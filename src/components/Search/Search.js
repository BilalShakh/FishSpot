import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, Select, RadioGroup, Radio, HStack } from "@chakra-ui/react"
import './Search.css'
import { Link } from "@chakra-ui/react"

export class Search extends React.Component {

    state={
        searchName: true,
        searchRating: false,
        SearchText: "",
        SearchRatingVal: "All",
        longitude: null,
        latitude: null
    };

    handleRadioClick = (event) => {
        if (this.state.searchName) {
            this.setState({searchName: false});
            this.setState({searchRating: true});
        } else {
            this.setState({searchRating: false});
            this.setState({searchName: true});
        }
    }

    //changes the various states that hold important submission info
    generalChangeHandler = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    getLocation = () => {
        if (!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser');
        } else {
            console.log('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({longitude: position.coords.latitude, latitude: position.coords.longitude});
          }, () => {
            console.log('Unable to retrieve your location');
          });
        }
    }

    render() {
        return (
            <div class="search-background">
                <VStack spacing="85px">
                    <Header />
                    <Spacer />
                    <Box p="6" w="850px"  borderWidth="0px" borderRadius="lg" bg="#444242">
                        <VStack spacing="50px" alignItems="flex-start">
                            <Text alignSelf="flex-start" fontSize="3xl" color="white" fontWeight="thin">Search</Text>
                            <form>
                                <VStack spacing="50px" alignSelf="flex-start">
                                    <FormControl w="100%" id="search-term" isRequired isDisabled={!this.state.searchName}>
                                        <FormLabel color="white">Search Term</FormLabel>
                                        <Input bg="gray.600" borderWidth="0px" placeholder="Search Term" textColor="white" id="SearchText" value={this.state.SearchText} onChange={this.generalChangeHandler}/>
                                    </FormControl>
                                    <FormControl w="100%" id="search-cat" isRequired isDisabled={!this.state.searchRating}>
                                        <FormLabel color="white">Rating</FormLabel>
                                        <Select bg="gray.600" color="white" borderWidth="0px" id="SearchRatingVal" value={this.state.SearchRatingVal} onChange={this.generalChangeHandler}>
                                            <option class="option-select">All</option>
                                            <option class="option-select">1 Star</option>
                                            <option class="option-select">2 Star</option>
                                            <option class="option-select">3 Star</option>
                                            <option class="option-select">4 Star</option>
                                            <option class="option-select">5 Star</option>
                                        </Select>
                                    </FormControl>

                                    <HStack alignSelf="flex-start">
                                        <Button
                                            colorScheme="pink"
                                            alignSelf="flex-start"
                                            onClick={this.getLocation}
                                        >
                                            Search by location
                                        </Button>
                                        <Text color="white">Longitude: {this.state.longitude ? this.state.longitude : "Not Found"},  Latitude: {this.state.latitude ? this.state.longitude : "Not Found"}</Text>
                                    </HStack>

                                    <RadioGroup defaultValue="name" alignSelf="flex-start" color="white" >
                                        <VStack>
                                            <Radio value="name" onChange={this.handleRadioClick} isChecked={this.state.searchName}>Search by Name</Radio>
                                            <Radio value="rating" onChange={this.handleRadioClick} isChecked={this.state.searchRating}>Search by Rating</Radio>
                                        </VStack>
                                    </RadioGroup>
                                   
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
