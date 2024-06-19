import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"

const BuilderFeatures: React.FC = () => {
  const clickResumeFeatures = [
    'Automated renewal tracking and reminders',
    'Powerful filters and search to access information quickly',
    'Folder structure to stay organized',
    'Oro allows you to extract data automatically using AI'
  ]

  return (
    <>
      <section className="py-28 bg-[#e8f7f2]">
        <div className="container">
          <h2 className="heading">Our Features</h2>
          <Tabs defaultValue="clickResumes">
            <TabsList className="flex bg-secondary max-w-[934px] mx-auto mb-20 mt-12 overflow-x-auto">
              <TabsTrigger value="clickResumes">Click Resumes</TabsTrigger>
              <TabsTrigger value="aiSuggestions">AI Suggestions</TabsTrigger>
              <TabsTrigger value="enchancedResumes">Enhanced Resumes </TabsTrigger>
              <TabsTrigger value="atsScore">ATS Score</TabsTrigger>
              <TabsTrigger value="interview">Personalised Interview Q&A</TabsTrigger>
              <TabsTrigger value="jobMatch">Job Match </TabsTrigger>
            </TabsList>
            <TabsContent value="clickResumes">
              <div className="md:grid md:grid-cols-2 small:flex small:flex-wrap-reverse	 items-center">
                <div>
                  <h2 className="text-5xl font-recoleta font-medium mb-6">Why is Resumod the best online Resume Builder?</h2>
                  <p className="text-xl font-medium mb-5">
                    Centralize all your contracts on a secure platform and improve <br /> your follow-up with our automatic
                    reminders.
                  </p>
                  <ul className="space-y-8 my-12">
                    {clickResumeFeatures.map((feature, index) => (
                      <li key={index} className="text-lg font-medium">
                        <span className="dot mt-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="dark">Build My Resume</Button>
                </div>
                <div>
                  <Image src="/images/feature1.png" alt="hero-image" width={562} height={514} className="small:mb-12" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default BuilderFeatures
