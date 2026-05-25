"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cva } from "class-variance-authority"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {

  const links = [
    {
      href:'/about',
      title:'Who We Are?'
    },
    {
      href:'/programs',
      title:'Our Programs'
    },
    {
      href:'/story',
      title:'Our Story'
    },
    {
      href:'/team',
      title:'Our Team'
    },
  ]

  const myStyle = cva("hover:bg-white/20")
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
    
  return (
    <header className={cn( 
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 lg:px-12 text-gray-50 font-sans",
        isScrolled
          ? "bg-gray-400/30 backdrop-blur-sm py-1 shadow-sm"
          : "bg-transparent"
      )}>
      <div className="w-full flex items-center justify-between lg:justify-center lg:gap-32 xl:gap-48">
        
        {/* Section 1: Logo */}
        <div className="flex items-center gap-2 max-w-32 lg:max-w-none">
          <Link href="/" className="w-fit">
            <Image
              src={'/ycc-logo1.png'}
              alt="logo"
              width={2}
              height={7}
              className="w-14 lg:w-16 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Section 2: Desktop Nav Bar (Hidden on Mobile) */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-3">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={`${navigationMenuTriggerStyle()} hover:bg-white/20`}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Dropdown */}
              <NavigationMenuItem className="">
                <NavigationMenuTrigger className="data-open:hover:bg-white/20 hover:bg-white/20">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-40 gap-1 p-2">
                    {
                      links.map((l, i)=> <li key={l.href}>
                        <NavigationMenuLink key={l.href} href={l.href} className="block rounded-md p-1">
                          {l.title}
                        </NavigationMenuLink>
                      </li>
                      )
                    } 
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources & Blogs */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/resources" className={myStyle()}>Resources</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={myStyle()}>Contact Us</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Section 3: Desktop Action Buttons (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/friends" className="text-sm font-bold text-gray-100 rounded-full px-5 py-2.5 border-2
           border-gray-200 hover:bg-linear-to-r from-green-700 to-green-950 hover:border-green-900">
            Become a Friend of YCC
          </Link>
          <Link href="/donation" className="text-sm font-bold text-gray-900 rounded-full px-5 py-2.5 bg-gray-100
           hover:bg-linear-to-r from-green-700 to-green-950 hover:text-gray-100">
            Donate Now
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-80 border-gray-500 bg-gray-600/40 backdrop-blur-2xl text-gray-200">
              <SheetHeader>
                <SheetTitle className="text-left text-gray-100">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 px-4">
                <Link href="/" className="text-sm font-medium">Home</Link>
                
                <NavDrawer links={links}/>

                <Link href="/resources" className="text-sm font-medium">Resources</Link>
                <Link href="/contact" className="text-sm font-medium">Contact Us</Link>
                
                <div className="flex flex-col gap-3 mt-4">
                  <Link href="/getinvolved" className="w-full text-center font-bold text-gray-100 rounded-full py-2.5 border-2 border-gray-100">
                    Become a friend of YCC
                  </Link>
                  <Link href="/donation" className="w-full text-center font-bold text-white rounded-full py-3 bg-green-800">
                    Donate Now
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}


function NavDrawer({links}:{links:any[]}) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 ">

      <div className="flex flex-col">
        <button
          onClick={() => setIsAboutOpen(!isAboutOpen)}
          className="flex items-center justify-between w-full text-sm text-gray-100 font-medium"
        >
          <span>About Us</span>
          <ChevronDown 
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isAboutOpen ? "rotate-180" : "rotate-0"
            )} 
          />
        </button>

        <div 
          className={cn(
            "grid transition-all duration-300 ease-in-out overflow-hidden",
            isAboutOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="flex flex-col gap-2 min-h-0">
            {links.map((l,i) => (
              <Link 
                key={i}
                href={l.href} 
                className="pl-4 text-sm font-medium text-gray-100"
              >
                {l.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}