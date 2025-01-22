import { auth } from '@/auth'
import SignIn from '@/components/sign-in'
import { SignOut } from '@/components/sign-out'
import { Heading, Section } from '@radix-ui/themes'
import Image from 'next/image'

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section>
        <Heading>Try RION bot!</Heading>
      </Section>
    </main>
  )
}
