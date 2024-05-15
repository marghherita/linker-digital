"use client";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Nav() {
  const routes = [
    { to: "/courses", label: "Courses" },
    { to: "/books", label: "Books" },
  ];
  return (
    <div>
      <nav className="flex justify-center h-10 items-center space-x-1 rounded-md border bg-background p-10">
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
      </nav>
    </div>
  );
}

export default Nav;
