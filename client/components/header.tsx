"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-[#f3f3f3]">
      <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tighter">PEAK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 lg:flex">
          <Link href="/about" className="text-sm font-medium hover:text-red-600">
            About Us
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-red-600">
            Shop
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-red-600">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden flex-1 mx-8 max-w-xs lg:flex">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="pr-10 rounded-full border-gray-400 bg-white"
              aria-label="Search products"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Mobile Search */}
          <button className="lg:hidden" aria-label="Search">
            <Search size={20} />
          </button>

          {/* Cart */}
          <button className="relative" aria-label="Shopping cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-red-600 p-0 text-xs flex items-center justify-center">
                {cartCount}
              </Badge>
            )}
          </button>

          {/* Desktop Auth Links */}
          <div className="hidden gap-2 sm:flex">
            <Link href="/signin">
              <Button variant="ghost" size="sm" className="text-xs">
                Sign In
              </Button>
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/register">
              <Button variant="ghost" size="sm" className="text-xs">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/about" className="text-sm font-medium">
                  About Us
                </Link>
                <Link href="/shop" className="text-sm font-medium">
                  Shop
                </Link>
                <Link href="/contact" className="text-sm font-medium">
                  Contact
                </Link>
                <div className="pt-4 border-t">
                  <Link href="/signin" className="block text-sm font-medium mb-2">
                    Sign In
                  </Link>
                  <Link href="/register" className="block text-sm font-medium">
                    Register
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
