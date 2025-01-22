
import { auth } from "@/auth";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default async function AppSidebar() {
  const session = await auth()
  const menuAuthorized = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "My Account",
      url: "/profile",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    }
  ]

  const menuUnauthorized = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Sign In",
      url: "/login",
    }
  ]
  let items = session?.user ? menuAuthorized : menuUnauthorized

  return (
    <Sidebar>
      <SidebarHeader>
        <a href={session?.user ? "/profile" : "/login"}>
          <Card>
          <CardHeader>
            <CardTitle>{session?.user ? session.user.name : "Not signed in"}</CardTitle>
            <CardDescription>{session?.user ? session.user.email : "Click to sign in"}</CardDescription>
          </CardHeader>
        </Card>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}