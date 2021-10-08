import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import fishing_1 from '../../Assets/fishing_1.jpg'
import fishing_2 from '../../Assets/fishing_2.jpeg'
import fishing_3 from '../../Assets/fishing_3.jpg'
import fishing_4 from '../../Assets/fishing_4.jpg'
import fishing_5 from '../../Assets/fishing_5.jpg'
import { VStack, HStack, Spacer, Box, Image, Text } from "@chakra-ui/react"
import FeaturedCard from './FeaturedCard'
import "./Home.css"

export default class Home extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div class = "home-background">
                <VStack spacing="85px">
                    <Header></Header>
                    {/* <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer /> */}
                    <HStack spacing="20px">
                        <FeaturedCard
                            color = "pink"
                            Image = {fishing_1}
                            badge = "trending"
                            featureLine = "Best fishing spot"
                            title = "Montana Mountain"
                            description = "Trouts roam free in the rivers"
                            rating = {4}
                            reviewCount = {40}
                        />
                        <FeaturedCard
                            color = "teal.100"
                            Image = {fishing_2}
                            badge = "trending"
                            featureLine = "Camping fishing spot"
                            title = "Kawartha Lakes"
                            description = "Bass and trout that exist in the deep"
                            rating = {2}
                            reviewCount = {30}
                        />
                        <FeaturedCard
                            color = "orange.200"
                            Image = {fishing_3}
                            badge = "trending"
                            featureLine = "Seasonal fishing spot"
                            title = "Port Hope"
                            description = "Salmon run seasonally and in great numbers"
                            rating = {1}
                            reviewCount = {10}
                        />
                        
                        <FeaturedCard
                            color = "purple.200"
                            Image = {fishing_4}
                            badge = "trending"
                            featureLine = "Pike fishing spot"
                            title = "Rainy River"
                            description = "Predatory pike's roam the river bed looking for fish to feed upon."
                            rating = {5}
                            reviewCount = {70}
                        />
                    </HStack>
                    <HStack>
                        <Box maxH="400px" borderWidth="0px" borderRadius="lg" overflow="hidden">
                            <Image src={fishing_5} alt="IMAGE NOT FOUND"/>
                        </Box>
                        <Spacer />
                        <Box p="2" width="400px" >
                            <Text fontSize="3xl" color="white" fontWeight="bold">Ice fishing at Devils Lake</Text>
                            <Spacer />
                            <Text fontSize="l"  color="white" noOfLines={[1,2,3,4,5,6,7,8,9,11,12]}  mt="20px">
                                The state of North Dakota sure knows how to sell this lake. Touting it as “a fishing destination unlike anywhere else,” the tourism board brags 
                                that its fish are large and healthy, its winter season is long, and the “huge” size of the 
                                lake means you can avoid tangling your lines with any other overeager anglers. Grab a 3 or 
                                10-day license to search for jumbo perch, walleye and big pike.
                            </Text>
                            <Text fontSize="s" color="white" mt="20px">North Dakota, USA</Text>
                        </Box>
                    </HStack>
                    <Footer></Footer>
                </VStack>
            </div>
        )
    }
}
