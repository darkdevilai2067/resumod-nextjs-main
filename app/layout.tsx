'use client'
import { Karla } from 'next/font/google'
import Head from "next/head"
import React from "react"
import Header from "components/partials/header";
import Footer from "components/partials/footer";
import { ReactQueryClientProvider, ReactQueryDevtools } from "providers/react-query-provider"
import { CounterStoreProvider } from "stores/home/home-store-provider"
import "styles/tailwind.css"
 
// If loading a variable font, you don't need to specify the font weight
const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={karla.className}>
    
      <body>
        <CounterStoreProvider>
          <ReactQueryClientProvider>
          {/* {process.env.NODE_ENV !== "test" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )} */}
          <main>
              <Header />
              {children}
          </main>
          <Footer /> 
          
         
          </ReactQueryClientProvider>
        </CounterStoreProvider>
      </body>
    </html>
  )
}
