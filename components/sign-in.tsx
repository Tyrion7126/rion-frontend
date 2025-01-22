import { signIn } from "@/auth"
import { Button } from "@radix-ui/themes"
 
export default function SignIn(props: { provider: string, children?: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(props.provider)
      }}
    >
      <Button type="submit">{props.children ?? `Sign in with ${props.provider}`}</Button>
    </form>
  )
} 