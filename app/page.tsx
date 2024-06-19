"use client"
import { Metadata } from "next"
import { useEffect } from "react"
import HomePage from "components/HomePage"
import { useSettings, useRequestCall } from "queries/global/global-query"
import { useCounterStore } from "stores"

// export const metadata: Metadata = {
//   title: "Appening Next.js Headstart",
// }

export default function Web() {
  // const { count, decrementCount, incrementCount } = useCounterStore((state) => state)
  // const { isLoading: settingLoading, data: settingData } = useSettings()
  // const { mutate: mutateRequestCall, isPending: requestCallLoading } = useRequestCall()
  
  return <HomePage />
}
