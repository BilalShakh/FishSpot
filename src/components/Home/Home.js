import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import fishing_1 from '../../Assets/fishing_1.png'
import { VStack, Box, Image, HStack } from "@chakra-ui/react"
import "./Home.css"

export default class Home extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div class = "home-background">                
                <Header></Header>
                <VStack>
                    <HStack>
                        <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Image src={fishing_1} alt="IMAGE NOT FOUND"/>

                        </Box>
                    </HStack>
                </VStack>
                <Footer></Footer>
            </div>
        )
    }
}
