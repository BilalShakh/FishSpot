import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, Select, RadioGroup, Radio, HStack, useToast } from "@chakra-ui/react"
import './Search.css'
import { useHistory } from 'react-router'

export default function Search() {
    const [searchName, setSearchName] = useState(true);
    const [searchRating, setSearchRating] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchRatingVal, setSearchRatingVal] = useState("All");
    const [useLocation, setUseLocation] = useState(false);
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const toast = useToast();
    const history = useHistory();

    //Handles the changes in radio buttons to allow the user to search what they want to.
    const handleRadioClick = (event) => {
        if (searchName) {
            setSearchName(false);
            setSearchRating(true);
        } else {
            setSearchName(true);
            setSearchRating(false);
        }
    }

    //changes the various states that hold important submission info
    const generalChangeHandler = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        switch (nam){
            case "searchText":
                setSearchText(val);
                break;
            default:
                setSearchRatingVal(val);
                break;
        }
    }

    //Gets location with the built in geolocation api
    const getLocation = () => {
        if (!navigator.geolocation) {
            toast({
                title: `Geolocation is not supported by your browser`,
                status: "error",
                isClosable: true,
            });
        } else {
            //console.log('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setLongitude(position.coords.latitude);
                setLatitude(position.coords.longitude);
                setUseLocation(true);
          }, () => {
              toast({
                    title: `Unable to retrieve your location`,
                    status: "error",
                    isClosable: true,
              });
          });
        }
    }

    const handleSubmit = () => {
        var outputStr = "";

        if (searchName === true && (searchText === "")){
            outputStr += "You need to enter a value to search.";
        }

        if (searchRating === true && (searchRatingVal === "")){
            outputStr += "Please re-select or select a rating to search for.";
        }

        if (outputStr.length > 0){
            //alert(outputStr);
            toast({
                title: `Invalid search query`,
                description: outputStr,
                status: "error",
                isClosable: true,
            });
        } else{
            const type = searchName ? "Name" : "Rating";
            const query = searchName ? searchText : searchRatingVal;
            //alert("Account Successfully created");
            if (useLocation === true){
                //console.log("/results/type="+type+"&q="+query+"&useLocation=true&longitude="+longitude+"&latitude="+latitude);
                history.push("/results/type="+type+"&q="+query+"&useLocation=true&lng="+longitude+"&lat="+latitude);
            } else {
                //console.log("/results/type="+type+"&q="+query);
                history.push("/results/type="+type+"&q="+query);
            }
        }
    }

    
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
                                <FormControl w="100%" id="search-term" isRequired isDisabled={!searchName}>
                                    <FormLabel color="white">Search Term</FormLabel>
                                    <Input bg="gray.600" borderWidth="0px" placeholder="Search Term" textColor="white" id="searchText" value={searchText} onChange={generalChangeHandler}/>
                                </FormControl>
                                <FormControl w="100%" id="search-cat" isRequired isDisabled={!searchRating}>
                                    <FormLabel color="white">Rating</FormLabel>
                                    <Select bg="gray.600" color="white" borderWidth="0px" id="searchRatingVal" value={searchRatingVal} onChange={generalChangeHandler}>
                                        <option class="option-select">All</option>
                                        <option class="option-select">1 Star</option>
                                        <option class="option-select">2 Star</option>
                                        <option class="option-select">3 Star</option>
                                        <option class="option-select">4 Star</option>
                                        <option class="option-select">5 Star</option>
                                    </Select>
                                </FormControl>
                                <VStack>
                                <HStack alignSelf="flex-start">
                                    <Button
                                        colorScheme="pink"
                                        alignSelf="flex-start"
                                        onClick={getLocation}
                                    >
                                        Search by location
                                    </Button>
                                    <Text color="white">Longitude: {longitude ? longitude : "Not Found"},  Latitude: {latitude ? latitude : "Not Found"}</Text>
                                </HStack>
                                <Text color="gray.300" fontSize="sm">Note: Search by location finds spot within 100km of your location only, as such it is not a requirement to search.</Text>
                                </VStack>

                                <RadioGroup defaultValue="name" alignSelf="flex-start" color="white" >
                                    <VStack>
                                        <Radio value="name" onChange={handleRadioClick} isChecked={searchName}>Search by Name</Radio>
                                        <Radio value="rating" onChange={handleRadioClick} isChecked={searchRating}>Search by Rating</Radio>
                                    </VStack>
                                </RadioGroup>
                                
                                <Button
                                    colorScheme="purple"
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
    )
    
}
