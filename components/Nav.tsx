import Image from "next/image";
import Logo from "@/app/asset/logo-linker-digital.svg";

function Nav() {
  const routes = [
    { to: "/courses", label: "Courses" },
    { to: "/books", label: "Books" },
  ];
  return (
    <div className="flex justify-center px-[2rem] pt-[2rem] items-center">
      {/* <nav className="flex justify-center h-10 items-center space-x-1 rounded-md border bg-background p-10">
        {routes.map((route) => (
          <NavigationMenu key={route.to}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} href={route.to}>
                  {route.label}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </nav> */}
      <Image src={Logo} alt="logo-linker-digital" width={100} />
    </div>
  );
}

export default Nav;
