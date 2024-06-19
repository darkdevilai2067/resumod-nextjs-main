import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "components/ui/button"

const SectionBuilderCTA: React.FC = () => {
  return (
    <>
      <section className="my-12 text-center px-12">
        <div className="container bg-primary rounded-[3rem] py-24">
          <h3 className="heading !text-white ">Ready to Create Your resume?</h3>
          <Button variant="white">
            <Link href="#">Create Resume</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default SectionBuilderCTA;
