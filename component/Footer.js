import { Box, Container, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from './ui/Logo'

function Footer() {
  return (
    <Box
    bg={'#7e43c7'}
    color={'white'}>
    <Container as={Stack} maxW={'6xl'} py={'50px'}>
      <SimpleGrid
        templateColumns={{ base: '1fr 1fr 1fr 1fr 1fr ', md: '2fr 1fr 1fr 1fr 1fr' }}
        spacing={8}
        >
        <VStack spacing={'6px'} display={{base:"none", md:"inline-block"}} mx={"auto"}>
          <Box >
            <Logo src="/assets/Leon.webp" alt="Leon Logo" width={'120px'} ml={"14px"} />
          </Box>
          <Text fontSize={'sm'} >
            © 2022 Leon Classroom
          </Text>
        </VStack>
        <Stack align={'flex-start'}>
          <Text>Product</Text>
          <Link href={'#'}>Overview</Link>
          <Link href={'#'}>Features</Link>
          <Link href={'#'}>Tutorials</Link>
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Releases</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <Text>Company</Text>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Press</Link>
          <Link href={'#'}>Careers</Link>
          <Link href={'#'}>Contact</Link>
          <Link href={'#'}>Partners</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <Text>Support</Text>
          <Link href={'#'}>Help</Link>
          <Link href={'#'}>Terms</Link>
          <Link href={'#'}>Legal</Link>
          <Link href={'#'}>Policy</Link>
          <Link href={'#'}>Status</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <Text>Follow Us</Text>
          <Link href={'#'}>Facebook</Link>
          <Link href={'#'}>Twitter</Link>
          <Link href={'#'}>Dribbble</Link>
          <Link href={'#'}>Instagram</Link>
          <Link href={'#'}>LinkedIn</Link>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>
  )
}

export default Footer
