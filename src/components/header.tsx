'use client';

import Link from "next/link"
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function NavBar() {
  return (
    <div className="max-w-full mx-auto p-8 sm:px-6 bg-background">
        <div className="flex h-16 items-center justify-between xl:justify-around">
            <div className="md:flex md:items-center md:gap-12">
                <Link className="block text-primary " href="/">
                    <h1 className="font-semibold text-2xl">Logo</h1>
                </Link>
            </div>

            <nav className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <Link className="text-primary transition hover:text-primary/75" href="/page">Page 1</Link>
                    </li>
                    <li>
                        <Link className="text-primary transition hover:text-primary/75" href="/page">Page 2</Link>
                    </li>
                    <li>
                        <Link className="text-primary transition hover:text-primary/75" href="/page">Page 3</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4 md:gap-4 xl:gap-4 ">
                <Button variant={"default"}
                    size={"default"}
                >
                    Sign In
                </Button>
                <HoverBorderGradient>
                    Sign Up
                </HoverBorderGradient>
                <span className="hidden sm:block"> 
                    <ModeToggle/>
                </span>
            </div>
        </div>
    </div>
  )
}
