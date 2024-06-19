import Image from "next/image"
import React from "react"

const SectionFeatures: React.FC = () => {
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
    },
    {
      icon: "linkedin.svg",
      title: "LinkedIn to Resume Transformation",
      description:
        "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
    },
    {
      icon: "multi-resume.svg",
      title: "Multi-Resume Management",
      description:
        "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
    },
    {
      icon: "money.svg",
      title: "Maximum Value for Money",
      description:
        "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
    },
    {
      icon: "referral.svg",
      title: "LinkedIn to Resume Transformation",
      description:
        "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
    },
    {
      icon: "free-use.svg",
      title: "Multi-Resume Management",
      description:
        "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
    },
    {
      icon: "safe-secure.svg",
      title: "Maximum Value for Money",
      description:
        "Our resume-building software will cut out the work for you. Instead of starting with an empty slate, you’ll have all of the sections and bullet points neatly lined up and formatted. You can adjust everything to fit your needs and then add your own information.",
    },
  ]
  return (
    <>
      <section className="py-32">
        <div className="container mb-20">
          <div className="mx-auto max-w-[730px]">
            <h2 className="heading">Feature Guide & What’s New</h2>
            <p className="text-center text-xl leading-[2.6rem]">
              Resumod is working tirelessly to provide you with features that make your job search truly competitive,
              and your CV stand-out in the hiring process.
            </p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-30 mt-20">
              {feature.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="max-w-[34rem] mb-10 lg:mb-28">
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

export default SectionFeatures
