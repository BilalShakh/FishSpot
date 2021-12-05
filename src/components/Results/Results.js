import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { VStack, Box, SimpleGrid, Heading } from "@chakra-ui/react"
import { useParams, useHistory, Link } from "react-router-dom";
import Card from './Card'
import Map from './Map' 
import "./Results.css"
import axios from 'axios'

//example of an output from backend api
const locations = {
    "first": {
        text: 'Credit River, Mississauga, ON', 
        lat: 43.5557682874319, 
        lng: -79.60028572660218
    },
    "1": {
        text: 'Cooksville Creek',
        lat: 43.56416169111711, 
        lng: -79.56491222843655
    },
    "2": {
        text: 'Mimico Creek',
        lat: 43.623089818162995, 
        lng: -79.48015828092811
    } 
}

export default function Results() {
    const { query } = useParams();
    const history = useHistory();
    const queryString = require('query-string');
    const [CardData, setCardData] = useState([]);
    const [dataFound, setDataFound] = useState(false);
    const [mapLocations, setMapLocations] = useState(locations);
    const colors = ["pink", "teal.100", "orange.200", "purple.200"];
    
    useEffect(()=>{
        const queryObject = queryString.parse(query);
        if (!query){
            history.push("/");
        }
        if (!queryObject.type || !queryObject.q){
            history.push("/");
        }
        let headers = {}
        if (queryObject.useLocation){
            headers = { location: queryObject.useLocation === 'true', lng: queryObject.lng, lat: queryObject.lat };
        }
        //console.log(headers)
        //REMOVE THE LOCAL STORAGE LATER
        if (queryObject.type === "Rating"){
            const finalQuery = queryObject.q === "All" ? queryObject.q: queryObject.q.substring(0,1);
            axios.get(process.env.REACT_APP_API_LINK+"/search/Rating/"+finalQuery, { headers }).then((response, err) => {
                //console.log(response.data);
                if (response.data.found === true){
                    setDataFound(true);
                    setCardData(response.data.cardData);
                    //console.log(CardData);
                }else {
                    setDataFound(false);
                }
            });
        } else {
            axios.get(process.env.REACT_APP_API_LINK+"/search/name/"+queryObject.q, { headers }).then((response, err) => {
                //console.log(response.data);
                if (response.data.found === true){
                    setDataFound(true);
                    setCardData(response.data.cardData);
                    //console.log(CardData);
                }else {
                    setDataFound(false);
                }
            });
        }
    },[query]);

    useEffect(()=>{
        //console.log(1);
        let mapLoc = {}
        for (let i=0; i < CardData.length; i++){
            if (i===0){
                mapLoc = {
                    "first": {
                        text: CardData[i].Name, 
                        lat: CardData[i].Longitude, 
                        lng: CardData[i].Latitude
                    }
                };
            }else {
                const temp = {
                    [i.toString()] : {
                        text: CardData[i].Name, 
                        lat: CardData[i].Longitude, 
                        lng: CardData[i].Latitude
                    }
                }
                mapLoc = Object.assign(mapLoc, temp);
            }
        }
        // console.log(mapLoc);
        // console.log(locations);
        if (Object.keys(mapLoc).length !== 0){
            //console.log(mapLoc);
            setMapLocations(mapLoc);
        }
    }, [CardData]);


    
    return (
        <div class = "result-background">
            <VStack spacing="85px">
                <Header></Header>
                {dataFound === false ? (
                    <Box height="80vh" width="90vw" >
                        <Heading color="white" alignSelf="flex-start" fontSize="3xl">No results found.</Heading>
                    </Box>
                ) : (
                    <VStack spacing="40px">
                        <Box borderWidth="0px" borderRadius="lg" overflow="hidden" width="65vw" height="60vh">
                            {/* <Image src={spot_map} alt="IMAGE NOT FOUND"/> */}
                            <Map locations={mapLocations} zoomLevel={12}></Map>
                        </Box>
                        <SimpleGrid columns={4} spacingX='20px' spacingY='20px' flexWrap="wrap">
                            {dataFound && CardData.map(item => 
                                    <Link to={"/spot/"+item.ObjectID}>
                                        <Card
                                            color = {colors[Math.floor(Math.random()*colors.length)]}
                                            Image = {process.env.REACT_APP_API_LINK+"/spot/images/"+item.Image_key}
                                            featureLine = {item.Feature+" fishing spot"}
                                            title = {item.Name}
                                            description = {item.Description}
                                            rating = {item.Rating}
                                            reviewCount = {item.NumReviews}
                                        />
                                    </Link>
                                )
                            }
                        </SimpleGrid>
                    </VStack>
                )}
                <Footer></Footer>
            </VStack>
            
        </div>
    )
    
}
