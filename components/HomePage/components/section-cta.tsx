import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"

const SectionCTA: React.FC = () => {
  return (
    <>
      <section className="py-28">
        <div className="container">
          <div className="md:grid md:grid-cols-2 gap-10 items-center">
            <div>
                <Image src="/images/resumes.png" alt="" width={453} height={426} />
            </div>
            <div>
              <h2 className="heading !text-left">
                Try our Professional Resume <br /> Builder today!
              </h2>
              <p className="text-xl">
                Save time by using bullet-point and skill suggestions based on your target job. Manage multiple resumes
                for different jobs. Convert your LinkedIn profile into a brand-new modern resume.
              </p>
              <div className="flex items-center space-x-5 mt-12">
                <Button>Create Your Resume</Button>
                <Button variant="outline">Resume Examples</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionCTA
