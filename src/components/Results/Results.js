import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import fishing_1 from '../../Assets/fishing_1.jpg'
import fishing_2 from '../../Assets/fishing_2.jpeg'
import fishing_3 from '../../Assets/fishing_3.jpg'
import fishing_4 from '../../Assets/fishing_4.jpg'
import spot_map from '../../Assets/spot_map.PNG'
import { VStack, HStack, Box, Image } from "@chakra-ui/react"
import Card from './Card'
import "./Results.css"

export default class Results extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div class = "result-background">
                <VStack spacing="85px">
                    <Header></Header>
                    <VStack spacing="40px">
                        
                        <Box borderWidth="0px" borderRadius="lg" overflow="hidden" maxW="100%">
                            <Image src={spot_map} alt="IMAGE NOT FOUND"/>
                        </Box>
                        <HStack spacing="20px" flexWrap="wrap">
                            <Card
                                color = "pink"
                                Image = {fishing_1}
                                featureLine = "Best fishing spot"
                                title = "Montana Mountain"
                                description = "Trouts roam free in the rivers"
                                rating = {4}
                                reviewCount = {40}
                            />
                            <Card
                                color = "teal.100"
                                Image = {fishing_2}
                                featureLine = "Camping fishing spot"
                                title = "Kawartha Lakes"
                                description = "Bass and trout that exist in the deep"
                                rating = {2}
                                reviewCount = {30}
                            />
                            <Card
                                color = "orange.200"
                                Image = {fishing_3}
                                featureLine = "Seasonal fishing spot"
                                title = "Port Hope"
                                description = "Salmon run seasonally and in great numbers"
                                rating = {1}
                                reviewCount = {10}
                            />
                            
                            <Card
                                color = "purple.200"
                                Image = {fishing_4}
                                featureLine = "Pike fishing spot"
                                title = "Rainy River"
                                description = "Predatory pike's roam the river bed looking for fish to feed upon."
                                rating = {5}
                                reviewCount = {70}
                            />
                        </HStack>
                        <HStack spacing="20px" flexWrap="wrap">
                            <Card
                                color = "pink"
                                Image = {fishing_1}
                                featureLine = "Best fishing spot"
                                title = "Montana Mountain"
                                description = "Trouts roam free in the rivers"
                                rating = {4}
                                reviewCount = {40}
                            />
                            <Card
                                color = "teal.100"
                                Image = {fishing_2}
                                featureLine = "Camping fishing spot"
                                title = "Kawartha Lakes"
                                description = "Bass and trout that exist in the deep"
                                rating = {2}
                                reviewCount = {30}
                            />
                            <Card
                                color = "orange.200"
                                Image = {fishing_3}
                                featureLine = "Seasonal fishing spot"
                                title = "Port Hope"
                                description = "Salmon run seasonally and in great numbers"
                                rating = {1}
                                reviewCount = {10}
                            />
                            
                            <Card
                                color = "purple.200"
                                Image = {fishing_4}
                                featureLine = "Pike fishing spot"
                                title = "Rainy River"
                                description = "Predatory pike's roam the river bed looking for fish to feed upon."
                                rating = {5}
                                reviewCount = {70}
                            />
                    
                    </HStack>
                    </VStack>
                    <Footer></Footer>
                </VStack>
            </div>
        )
    }
}
