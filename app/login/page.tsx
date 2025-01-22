import SignIn from '@/components/sign-in'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

export default async function LoginPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card>
        <Flex m='4' direction='column' gap='4'>
          <div>
            <Heading>Login</Heading>
            <Text my='4' color='gray'>You must be logged in to access full features.</Text>
          </div>
          <SignIn provider='discord'>
            <DiscordLogoIcon height={20} width={20} /> Sign in with Discord
          </SignIn>
        </Flex>
      </Card>
    </div>
  )
}