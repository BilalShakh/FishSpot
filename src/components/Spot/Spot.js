import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Review from './Review'
import { VStack, HStack, Box, Text, Spacer, Image, Flex, StackDivider } from "@chakra-ui/react"
import './Spot.css'
import fishing_6 from '../../Assets/fishing_6.jpg'
import Map from '../Results/Map' 

// location of the sample individual object
const location = {
    "first": {
        text: 'Credit River, Mississauga, ON', 
        lat: 43.5557682874319, 
        lng: -79.60028572660218
    }
}
export default class Spot extends Component {
    render() {
        return (
            <div class="object-background">
                <VStack spacing="80px">
                    <Header />
                    <HStack maxW="50%" >
                        {/* image for fish spot*/}
                        <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                            <Image src={fishing_6} alt="IMAGE NOT FOUND"/>
                            
                            
                        </Box>
                        <Spacer />
                        {/* name and discription for the fishspot*/}
                        <VStack p="2" alignSelf="flex-start" maxW="40%">
                            <Text fontSize="180%" color="white" fontWeight="bold" alignSelf="flex-start">Credit River</Text>
                            <Text fontSize="100%"  color="white" noOfLines={[1,2,3,4,11,12]}  mt="20px">
                                This is flat and slow water like fishing in a lake. The fishing can be good in the 
                                spring for steelhead and in September for huge salmon. Anglers casting lures can do 
                                very well here if they hit the runs of salmon just as they start. A favorite lure for 
                                this area is spoons like the Little Cleos which can be cast far out into the river and lake. 
                                Large crankbaits and inline spinners can be very good too. 
                                This is flat and slow water like fishing in a lake. The fishing can be good in the 
                                spring for steelhead and in September for huge salmon. Anglers casting lures can do 
                                very well here if they hit the runs of salmon just as they start. A favorite lure for 
                                this area is spoons like the Little Cleos which can be cast far out into the river and lake. 
                                Large crankbaits and inline spinners can be very good too. 
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack>
                        <Text fontSize="130%" color="white" fontWeight="thin" alignSelf="flex-start">Mississauga, Ontario</Text>
                        <Box borderWidth="0px" borderRadius="lg" overflow="hidden" width="85vw">
                            {/* inserting map for object*/}
                            <Map locations={location} zoomLevel={17}></Map>
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
                                <Text fontSize="125%" color="white" fontWeight="thin" as="u">
                                    Write a new Review
                                </Text>
                            </Box>
                        </Flex>
                        <VStack
                            w="80%"
                            divider={<StackDivider borderColor="gray.500" width="80%" alignSelf="baseline"/>}
                        >
                            <Review 
                                name="Apple John"
                                rating={3}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan"
                            />
                            <Review 
                                name="Kayle Sand"
                                rating={4}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan"
                            />
                            <Review 
                                name="Bobby John"
                                rating={1}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Erat ut facilisis rutrum donec tristique mauris 
                                            est ac nunc. Eget nec, lorem mi libero accumsan 
                                            est ac nunc. Eget nec, lorem mi libero accumsan 
                                            est ac nunc. Eget nec, lorem mi libero accumsan 
                                            est ac nunc. Eget nec, lorem mi libero accumsan 
                                            est ac nunc. Eget nec, lorem mi libero accumsan 
                                            est ac nunc. Eget nec, lorem mi libero accumsan"
                            />
                        </VStack>
                        
                    </VStack>
                    <Footer />
                </VStack>
            </div>
        )
    }
}
