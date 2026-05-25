// src/components/Header.tsx
"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation" // Added to detect active routing
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent
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
  const pathname = usePathname()
  
  // Detect if the user is on /blog or a sub-route like /blog/[slug]
  const isBlogRoute = pathname?.startsWith('/blog')

  const links = [
    { href: '/about', title: 'Who We Are?' },
    { href: '/programs', title: 'Our Programs' },
    { href: '/story', title: 'Our Story' },
    { href: '/team', title: 'Our Team' },
  ]

  const myStyle = cva("hover:bg-black/5 dark:hover:bg-white/20 px-3 py-2 rounded-md transition-colors")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn( 
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 lg:px-12 font-sans",
        isBlogRoute ? "text-slate-900" : "text-gray-50",
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
              width={64} // Fixed semantic layout values
              height={64}
              className="w-14 lg:w-16 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Section 2: Desktop Nav Bar */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "hover:bg-black/5 dark:hover:bg-white/20 bg-transparent text-current")}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="data-open:hover:bg-white/20 hover:bg-white/20">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-40 gap-1 p-2">
                    {links.map((l) => (
                      <li key={l.href}>
                        <NavigationMenuLink href={l.href} className="block rounded-md p-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                          {l.title}
                        </NavigationMenuLink>
                      </li>
                    ))} 
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/resources" className={cn("text-sm font-medium", myStyle())}>
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Blog Link Added Here */}
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/blog" 
                  className={cn(
                    "text-sm font-medium", 
                    myStyle(),
                    isBlogRoute && "text-brand-emerald font-bold"
                  )}
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={cn("text-sm font-medium", myStyle())}>
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Section 3: Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/friends" className={cn(
            "text-sm font-bold rounded-full px-5 py-2.5 border-2 transition-all",
            isBlogRoute 
              ? "border-slate-300 text-slate-800 hover:bg-slate-50" 
              : "border-gray-200 text-gray-100 hover:bg-emerald-800 hover:border-emerald-900"
          )}>
            Become a Friend of YCC
          </Link>
          <Link href="/donation" className="text-sm font-bold text-gray-100 rounded-full px-5 py-2.5 bg-brand-emerald hover:bg-[#047857] transition-colors">
            Donate Now
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-current">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-80 border-gray-500 bg-gray-600/40 backdrop-blur-2xl text-gray-200">
              <SheetHeader>
                <SheetTitle className="text-left text-gray-100">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 px-4">
                <Link href="/" className="text-base font-medium hover:text-brand-emerald">Home</Link>
                
                <NavDrawer links={links}/>

                <Link href="/resources" className="text-base font-medium hover:text-brand-emerald">Resources</Link>
                
                {/* Mobile Blog Link */}
                <Link href="/blog" className={cn("text-base font-medium hover:text-brand-emerald", isBlogRoute && "text-brand-emerald font-bold")}>
                  Blog
                </Link>
                
                <Link href="/contact" className="text-base font-medium hover:text-brand-emerald">Contact Us</Link>
                
                <div className="flex flex-col gap-3 mt-8">
                  <Link href="/friends" className="w-full text-center text-sm font-bold text-slate-100 rounded-full py-2.5 border border-slate-300 hover:text-slate-900 hover:bg-slate-50">
                    Become a friend of YCC
                  </Link>
                  <Link href="/donation" className="w-full text-center text-sm font-bold text-white rounded-full py-2.5
                   bg-brand-emerald hover:bg-[#047857]">
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
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setIsAboutOpen(!isAboutOpen)}
        className="flex items-center justify-between w-full text-base font-medium text-current hover:text-brand-emerald"
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
          isAboutOpen ? "grid-rows-[1fr] opacity-100 my-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="flex flex-col gap-3 min-h-0 pl-4 border-l border-slate-200">
          {links.map((l, i) => (
            <Link 
              key={i}
              href={l.href} 
              className="text-sm font-medium text-gray-100 hover:text-brand-emerald"
            >
              {l.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}