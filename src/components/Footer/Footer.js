import { StackDivider, Flex, Text, Spacer, Box, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div class="background-footer">
            <VStack
                divider={<StackDivider borderColor="gray.500" width="80%" alignSelf="center"/>}
                spacing="0"
            >
                <Box></Box>
                <Box width="75%" mt="15px">
                    <Flex>
                        <Box>
                            <VStack spacing="0" alignItems="baseline">
                                <Text fontSize="2xl" color="white">FISH SPOT</Text>
                                <Text fontSize="l" color="white" width="200px">Premium Service for finding your fishing spot</Text>
                                <Text fontSize="sm" color="white" width="200px">Contact Number: 123-456-7891</Text>
                            </VStack>
                        </Box>
                        <Spacer/>
                        <Box>
                            <VStack spacing="0" alignItems="baseline">
                                <Text fontSize="xl" color="white">Quick Navigation</Text>
                                <Text fontSize="sm" color="white" width="160px">Home</Text>
                                <Text fontSize="sm" color="white" width="160px">Add new spot</Text>
                                <Text fontSize="sm" color="white" width="160px">Search</Text>
                            </VStack>
                        </Box>
                    </Flex>
                </Box>
            </VStack>
        </div>
    )
}

export default Footer
