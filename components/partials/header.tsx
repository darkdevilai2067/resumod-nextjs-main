import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "components/ui/button"

const Header: React.FC = () => {
  const menuItems = [
    {
      name: 'Resume Builder',
      url:"/"
    },
    {
      name: "Solutions",
      url: "/",
    },
    {
      name: "Interview Preparation",
      url: "/contact",
    },
    {
      name: "Sample Resume",
      url: "/about",
    },
  ]
  return (
    <>
      <header className="py-6 container">
        <div className="flex justify-between">
          <div>
            <Image src="/images/logo.svg" alt="logo" width={165} height={31} />
          </div>
          <div className="lg:flex hidden items-center">
            <nav>
              <ul className="flex space-x-10">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="font-recoleta font-medium">{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button variant="default" className="ml-8">
              <Link href="/contact" className="font-recoleta">Build My Resume</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
