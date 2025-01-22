import { auth } from "@/auth";
import { Avatar, Box, Card, Flex, Heading, SegmentedControl, Text } from "@radix-ui/themes";

export default async function Dashboard() {
  const session = await auth();
  const id = session?.user?.image?.split('/')[4]?.split('.')[0]
  const coins = await fetch("http://127.0.0.1:8000/balance?userid=" + id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  ).then((res) => res.json()).catch((err) => console.log(err))

  if (!session) return <div>Not signed in</div>;

  return (
    <div className="max-w-[40%] flex flex-col justify-center mx-auto h-screen">
      <Flex direction="column" gap="4">
        <Heading className="text-gray-700 tracking-wide" >Dashboard</Heading>
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src={session.user?.image ?? ""}
              radius="full"
              fallback="T"
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                {session.user?.name}
              </Text>
              <Text as="div" size="2" color="gray">
                {session.user?.email}
              </Text>
            </Box>
            <Text>{coins?.balance} coins</Text>
          </Flex>
        </Card>
        <SegmentedControl.Root defaultValue="myserver">
          <SegmentedControl.Item value="myserver">My Server</SegmentedControl.Item>
          <SegmentedControl.Item value="shop">Shop</SegmentedControl.Item>
        </SegmentedControl.Root>
      </Flex>
    </div>
  );
}
