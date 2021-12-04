import React, { useEffect, useState, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Review from './Review'
import { VStack, HStack, Box, Text, Spacer, Image, Flex, StackDivider, FormLabel, FormControl, Textarea, Select, Button, useToast } from "@chakra-ui/react"
import './Spot.css'
import fishing_6 from '../../Assets/fishing_6.jpg'
import Map from '../Results/Map' 
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import axios from 'axios'

// location of the sample individual object
const InitialLocation = {
    "first": {
        text: 'Credit River, Mississauga, ON', 
        lat: 43.5557682874319, 
        lng: -79.60028572660218
    }
}
export default function Spot() {
    const { authState, setAuthState } = useContext(AuthContext);
    const { id } = useParams();
    const history = useHistory();
    const toast = useToast();
    const [SpotName, setSpotName] = useState("Credit River");
    const [Description, setDescription] = useState("");
    const [Location, setLocation] = useState(InitialLocation);
    const [SpotImage, setSpotImage] = useState(fishing_6);
    const [writingReview, setWritingReview] = useState(false);
    const [reviewDescription, setReviewDescription] = useState("");
    const [reviewRating, setReviewRating] = useState("");
    const [reviewsArr, setReviewsArr] = useState([]);

    

    const Logout = () => {
        setAuthState({
            username: "",
            id: 0,
            status: false,
        })
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("id");
    }

    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_LINK+"/spot/info/"+id).then((response, err) => {
            if (response.data.isValid){
                setSpotName(response.data.SpotName);
                setLocation({
                    "first": {
                        text: response.data.SpotName, 
                        lat: response.data.LocLatitude, 
                        lng: response.data.LocLongitude
                    }
                });
                setDescription(response.data.Description);
                setSpotImage(process.env.REACT_APP_API_LINK+"/spot/images/"+response.data.ImageKey);
                //getImage(response.data.ImageKey);
            }else {
                history.push("/");
            }
        });
        axios.get(process.env.REACT_APP_API_LINK+"/spot/reviews/"+id).then((response, err) => {
            if (response.data.foundReview) {
                setReviewsArr(response.data.reviews);
            }
        });
    }, [id, history])

    const handleWriteReviewClick = (event) => {
        if (!writingReview){
            if (localStorage.getItem("accessToken")){
                const headers = { 'accessToken' : localStorage.getItem("accessToken") }
                axios.get(process.env.REACT_APP_API_LINK+"/auth/verify", { headers }).then((response, err) => {
                    if (response.data.isValid){
                        setWritingReview(true);
                    }else {
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("username");
                        localStorage.removeItem("id");
                        toast({
                            title: `Log in has timed out, please sign in again to write a review.`,
                            status: "warning",
                            isClosable: true,
                        });
                    }
                });
            } else {
                toast({
                    title: `Please login or sign up to write a review`,
                    status: "warning",
                    isClosable: true,
                });
            }
        } else {
            toast({
                title: `Error: A review is in progress`,
                status: "warning",
                isClosable: true,
            });
        }
    }

    const writeReview = () => {        
        const data = { ObjectID: id, UserID: authState.id, Rating: reviewRating.substring(0,1), Description: reviewDescription };
        const headers = { 'accessToken' : localStorage.getItem("accessToken") }
        
        axios.post(process.env.REACT_APP_API_LINK+"/spot/reviews/create", data, { headers: headers }).then((response, err) => {
            //console.log(err, response);
            if (!response.data.valid) {
                if (!response.data.reason){
                    toast({
                        title: `Your session has expired, please login again`,
                        status: "error",
                        isClosable: true,
                    });
                    Logout();
                    setWritingReview(false);
                } else {
                    toast({
                        title: "You already posted a review on this spot.",
                        status: "error",
                        isClosable: true,
                    });
                    setWritingReview(false);
                }
            } else {
                toast({
                    title: `Your review has been successfully posted!`,
                    status: "success",
                    isClosable: true,
                });
                axios.get(process.env.REACT_APP_API_LINK+"/spot/reviews/"+id).then((response, err) => {
                    if (response.data.foundReview) {
                        setReviewsArr(response.data.reviews);
                    }
                });
                setWritingReview(false);
            }
        });
    }

    const handleReviewSubmit = () => {
        var outputStr = "";

        if (Description === ""){
            outputStr += "A Spot's Description is required.";
        }

        if (reviewRating === ""){
            outputStr += "Please re-select your rating or enter a new rating."
        }

        if (!localStorage.getItem("accessToken")){
            outputStr += "Your session has expired, please re-login to your account."
            setWritingReview(false);
        }

        if (outputStr.length > 0){
            //alert(outputStr);
            toast({
                title: `Invalid review details given`,
                description: outputStr,
                status: "error",
                isClosable: true,
            });
        } else{
            //alert("Account Successfully created");
            writeReview()
        }
    }

    const handleCancel = () => {
        setWritingReview(false);
        setReviewDescription("");
        setReviewRating("");
    }

    //changes the various states that hold important submission info
    const generalChangeHandler = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        switch (nam){
            case "Description":
                setReviewDescription(val);
                console.log(reviewDescription);
                break;
            default:
                setReviewRating(val);
                console.log(reviewRating);
                break;
        }
    }
    
    return (
        <div class="object-background">
            <VStack spacing="80px">
                <Header />
                <HStack maxW="50%" >
                    {/* image for fish spot*/}
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                        <Image src={SpotImage} alt="IMAGE NOT FOUND"/>
                    </Box>
                    <Spacer />
                    {/* name and description for the fishspot*/}
                    <VStack p="2" alignSelf="flex-start" maxW="40%">
                        <Text fontSize="180%" color="white" fontWeight="bold" alignSelf="flex-start">{SpotName}</Text>
                        <Text fontSize="100%"  color="white" noOfLines={[1,2,3,4,11,12]}  mt="20px">
                            {Description}
                        </Text>
                    </VStack>
                </HStack>
                <VStack>
                    <Text fontSize="130%" color="white" fontWeight="thin" alignSelf="flex-start">Find the location of the spot on the map below.</Text>
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden" width="85vw">
                        {/* inserting map for object*/}
                        <Map locations={Location} zoomLevel={17}></Map>
                    </Box>
                </VStack>
                {/* section for user reviews*/}
                <VStack
                    divider={<StackDivider borderColor="gray.500" width="80%" alignSelf="center"/>}
                    w="80%"
                >
                    <Flex w="80%">
                        <Box>
                            <Text fontSize="180%" color="white">
                                Reviews
                            </Text>
                        </Box>
                        <Spacer />
                        <Box mt="3">
                            <Text fontSize="125%" color="white" fontWeight="thin" _hover={{textDecoration : "underline", cursor: "Pointer"}} onClick={handleWriteReviewClick}>
                                Write a new Review
                            </Text>
                        </Box>
                    </Flex>
                    <VStack
                        w="80%"
                        divider={<StackDivider borderColor="gray.500" width="80%" alignSelf="baseline"/>}
                    >
                        {
                            writingReview && 
                            <Box w="100%">
                                <form>
                                    <VStack spacing="15px" alignSelf="flex-start">
                                        <FormControl w="100%" id="spot-name" isRequired >
                                            <FormLabel color="white" alignSelf="baseline">Review Description</FormLabel>
                                            <Textarea bg="gray.600" borderWidth="0px" placeholder="Description" textColor="white"  id="Description" value={reviewDescription} onChange={generalChangeHandler}/>
                                        </FormControl>
                                        <FormControl w="100%" id="search-cat" isRequired>
                                            <FormLabel color="white">What is your Rating?</FormLabel>
                                            {/*value={this.state.ReviewRatingVal} onChange={this.generalChangeHandler}*/}
                                            <Select bg="gray.600" color="white" borderWidth="0px" id="ReviewRating" value={reviewRating} onChange={generalChangeHandler}>
                                                <option class="option-select">1 Star</option>
                                                <option class="option-select">2 Star</option>
                                                <option class="option-select">3 Star</option>
                                                <option class="option-select">4 Star</option>
                                                <option class="option-select">5 Star</option>
                                            </Select>
                                        </FormControl>
                                        <HStack alignSelf="flex-start">
                                            <Button
                                                colorScheme="purple"
                                                alignSelf="flex-start"
                                                onClick={handleReviewSubmit}
                                            >
                                                Submit
                                            </Button>
                                            <Button
                                                colorScheme="red"
                                                alignSelf="flex-start"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </form> 
                            </Box>
                        }
                        {reviewsArr.map(item => 
                                <Review
                                    name={item.Name}
                                    rating={item.Rating}
                                    description={item.Description}
                                />
                            )
                        }
                        
                    </VStack>
                </VStack>
                <Footer />
            </VStack>
        </div>
    )
    
}
