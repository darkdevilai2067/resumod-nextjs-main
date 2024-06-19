import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"

const MeetResumeBuilder: React.FC = () => {
    const feature = [
        {
          icon: "easy-fast.svg",
          title: "Easy & Fast Resume Builder",
          description:
            "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
        },
        {
          icon: "approved.svg",
          title: "HR Approved Templates",
          description:
            "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
        },
        {
          icon: "download.svg",
          title: "Multi-format Download & Share",
          description:
            "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. ",
        }
      ]
  return (
    <>
      <section className="mt-12 py-28 bg-gray">
        <div className="container">
          <div className="md:grid md:grid-cols-2 gap-20">
            <div className="relative max-w-[50rem]">
              <h2 className="heading !text-left">
                Meet our AI
                <br />
                resume builder
              </h2>
              <p className="max-w-[43rem] text-17">
                Creating a job-winning resume can be a daunting task. Our resume builder makes it as easy as filling in
                the blanks. AI takes it a step further and fills in the blanks for you.
              </p>
              <Button className="mt-12">Build my resume with AI</Button>
              <Image src='/images/line.svg' alt='' width={145} height={157} className="absolute right-0 top-0" />
            </div>
            <div>
              <Image src="/images/ai-builder.svg" alt="AI Builder" width={547} height={310} />
            </div>
          </div>

          <div className="mt-20">
            <div className="md:grid md:grid-cols-3 gap-20 lg:gap-40">
              {feature.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="mb-5">
                      <Image src={`/images/${item.icon}`} alt="icon" width={66} height={66} className="mb-5" />
                      <div className="mb-5 font-recoleta text-3xl font-medium">{item.title}</div>
                      <div className="text-lg">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MeetResumeBuilder
