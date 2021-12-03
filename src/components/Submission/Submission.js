import React, { useState, useEffect, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import fishing_pic from '../../Assets/fishing_6.jpg'
import { VStack, HStack, Box, Text, FormControl, FormLabel, Input, Button, Spacer, Textarea, FormHelperText, Image, useToast } from "@chakra-ui/react"
import './Submission.css'
import { AuthContext } from "../AuthContext"
import axios from 'axios'
import { useHistory } from 'react-router-dom'



export default function Submission() {
    const { authState, setAuthState } = useContext(AuthContext);
    const [SpotImage, setSpotImage] = useState(fishing_pic);
    const [RawImage, setImage] = useState(fishing_pic);
    const [Feature, setFeature] = useState("");
    const [Name, setName] = useState("");
    const [Description, setDesription] = useState("");
    const [LocLongitude, setLocLongitude] = useState("");
    const [LocLatitude, setLocLatitude] = useState("");
    const [UserLongitude, setUserLongitude] = useState("");
    const [UserLatitude, setUserLatitude] = useState("");
    let history = useHistory();
    const toast = useToast();
    
    useEffect(() => {
        // find the location of the user
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                setUserLatitude(latitude);
                const longitude = position.coords.longitude;
                setUserLongitude(longitude);
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    

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

    const createSpot = () => {
        const data = new FormData();
        data.append("Image", RawImage);
        data.append("SpotName", Name);
        data.append("Feature", Feature);
        data.append("Description", Description);
        data.append("LocLongitude", LocLongitude);
        data.append("LocLatitude", LocLatitude);
        data.append("UserLongitude", UserLongitude);
        data.append("UserLatitude", UserLatitude);
        data.append("UserID", authState.id);
        const headers = { 'accessToken' : localStorage.getItem("accessToken"), 'Content-Type': 'multipart/form-data' }
        
        axios.post(process.env.REACT_APP_API_LINK+"/spot/create", data, { headers: headers }).then((response, err) => {
            //console.log(err, response);
            if (!response.data.valid) {
                toast({
                    title: `Your session has expired, please login again`,
                    status: "error",
                    isClosable: true,
                });
                Logout();
            } else {
                toast({
                    title: `Your spot has been successfully posted!`,
                    status: "success",
                    isClosable: true,
                });
                history.push('/');
            }
        });
    }

    //changes the various states that hold important submission info
    function generalChangeHandler (event) {
        let nam = event.target.id;
        let val = event.target.value;
        //setState({ [nam]: val });
        switch (nam){
            case "Image":
                setSpotImage(URL.createObjectURL(event.target.files[0]));
                setImage(event.target.files[0]);
                console.log(SpotImage);
                break;
            case "Feature":
                setFeature(val);
                break;
            case "Name":
                setName(val);
                break;
            case "Description":
                setDesription(val);
                break;
            case "LocLongitude":
                setLocLongitude(val);
                break;
            default:
                setLocLatitude(val);
                break;
        }
    }

    //Validates the inputs
    function handleSubmit(event) {
        var outputStr = "";

        if (SpotImage === fishing_pic){
            outputStr += "Please upload a picture of your spot. ";
        }

        if (Name === ""){
            outputStr += "Spot name is required. ";
        }

        if (Description === ""){
            outputStr += "A description is required for the spot. ";
        }

        if (LocLatitude === "" || LocLongitude === ""){
            outputStr += "You need to enter the location with both longitude and latitude of the location. "
        }

        if (UserLatitude === "" || UserLongitude === ""){
            outputStr += "Please give your location permission. "
        }

        if (!localStorage.getItem("accessToken")) {
            outputStr += "Please login or create an account."
        }

        if (Description.length >= 5000){
            outputStr += "Please write a description that is under 5000 characters."
        }

        if (outputStr.length > 0){
            //alert(outputStr);
            toast({
                title: `Invalid Spot Details entered`,
                description: outputStr,
                status: "error",
                isClosable: true,
            });
        } else{
            //alert("Account Successfully created");
            createSpot();
        }
    }
    
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
                                <Box w="58%" borderWidth="0px" borderRadius="lg" overflow="hidden" alignSelf="center">
                                    <Image src={SpotImage} alt="IMAGE NOT FOUND"/>
                                </Box>
                                <VStack spacing="15px">
                                    <FormControl w="100%" id="spot-name" isRequired>
                                        <FormLabel color="white">Fishing Spot Name</FormLabel>
                                        <Input type="text" bg="gray.600" borderWidth="0px" placeholder="Name" textColor="white" id="Name" value={Name} onChange={generalChangeHandler}/>
                                    </FormControl>
                                    <FormControl w="100%" id="spot-name" isRequired>
                                        <FormLabel color="white">Main Feature</FormLabel>
                                        <Input type="text" bg="gray.600" borderWidth="0px" placeholder="One Word Descriptor" textColor="white" id="Feature" value={Feature} onChange={generalChangeHandler}/>
                                    </FormControl>
                                    <FormControl w="100%" id="description" isRequired>
                                        <FormLabel color="white">Description</FormLabel>
                                        <Textarea bg="gray.600" borderWidth="0px" placeholder="Description" textColor="white"  id="Description" value={Description} onChange={generalChangeHandler}></Textarea>
                                    </FormControl>
                                    <HStack spacing="15px" >
                                        <FormControl w="50%" id="location-longitude" isRequired>
                                            <FormLabel color="white">Location</FormLabel>
                                            <Input type="number" required bg="gray.600" borderWidth="0px" placeholder="Longitude" textColor="white"  id="LocLongitude" value={LocLongitude} onChange={generalChangeHandler}/>
                                        </FormControl>
                                        <FormControl w="50%" id="location-latitude" isRequired>
                                            <FormLabel color="white"></FormLabel>
                                            <Input type="number" required bg="gray.600" borderWidth="0px" placeholder="Latitude" textColor="white" id="LocLatitude" value={LocLatitude} onChange={generalChangeHandler}/>                  
                                        </FormControl>
                                    </HStack>

                                    <Text color="white" > Your Location:</Text>

                                    <Text color="white" > Latitude: {UserLatitude}  Longitude: {UserLongitude}</Text>

                                    <FormControl w="100%" id="spot-image" alignSelf="baseline" isRequired>
                                        <FormLabel color="white">Image</FormLabel>
                                        <Input id="Image" type="file" bg="#444242" borderWidth="0px" color="white" onChange={generalChangeHandler}/>
                                        <FormHelperText>Please upload your Spot's Image</FormHelperText>
                                    </FormControl>
                                </VStack>
                            </HStack>
                            
                            <Button
                                colorScheme="purple"
                                alignSelf="flex-start"
                                onClick={handleSubmit}
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
    );
    
}
