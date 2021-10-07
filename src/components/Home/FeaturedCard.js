import React from 'react'

import { Box, Image, Badge } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

function FeaturedCard(props) {
    return (
        <div>
            <Box maxW="300px" borderWidth="0px" borderRadius="lg" overflow="hidden" backgroundColor={props.color}>
                        <Image  height="345px" width="350px" src={props.Image} alt="IMAGE NOT FOUND" />

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="gray">
                                {props.badge}
                            </Badge>
                            <Box
                                color="gray.700"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {props.featureLine}
                            </Box>
                            </Box>

                            <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            >
                                {props.title}
                            </Box>

                            <Box isTruncated>
                                {props.description}
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                            {Array(5)
                                .fill("")
                                .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < props.rating ? "gray.500" : "gray.300"}
                                />
                                ))}
                            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                {props.reviewCount} reviews
                            </Box>
                            </Box>
                        </Box>
                        </Box>
        </div>
    )
}

export default FeaturedCard
