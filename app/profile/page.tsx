import { auth } from '@/auth'
import SignIn from '@/components/sign-in'
import { SignOut } from '@/components/sign-out'
import Image from 'next/image'

export default async function Home() {
  const session = await auth()
  if (!session) return (<div>Not signed in</div>)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
          <>
            <p>
              Signed in as {session.user?.name}
            </p>
            <Image 
              src={session.user?.image ?? ""}
              alt={session.user?.name ?? ""}
              width={100}
              height={100}
            />
            <SignOut />
          </>
      }
    </main>
  )
}
