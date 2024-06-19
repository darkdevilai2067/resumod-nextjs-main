import Image from "next/image"
import React, { useState, useEffect } from "react"

interface Item {
  iconSrc: string
  title: string
  description: string
}

interface Props {
  data: Item[]
}

const WhyResumod: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const data = [
    {
      title: "Modern Professional CV Templates",
      iconSrc: "/images/task-square.svg",
      iconSrcActive: "/images/task-square-active.svg",
      description:
        "Resumod’s gives you 10 visually appealing templates in millions of colour combinations to get that interview call you’ve been waiting for. Just fill in your details and see the magic!",
    },
    {
      title: "Content & Skill Suggestions",
      iconSrc: "/images/skill-suggestions.svg",
      iconSrcActive: "/images/skill-suggestions-active.svg",
      description:
        "We have curated more than 150,000 bullet points and more than 5000 skill suggestions for you to use in your resume creation. Just enter your role and use any of our pre-written phrases.",
    },
    {
      title: "LinkedIn Profile to Resume Conversion",
      iconSrc: "/images/linkedin-square.svg",
      iconSrcActive: "/images/linkedin-square-active.svg",
      description:
        "Don’t have a resume? No worry. Just download your LinkedIn PDF and upload it to our builder to transform it into a brand new, visually interactive Resume. Save time, save money!",
    },
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === null || prevIndex === data.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [data.length])

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      <section className="bg-[#e9effd] py-24">
        <div className="container">
          <h2 className="heading">
            Why is Resumod the best online <br /> Resumod Builder
          </h2>
          <div className="md:flex items-center justify-between">
            <div>
              <Image src="/images/why-resumod-1.png" alt="" width={580} height={603} className="" />
            </div>
            <div className="w-full max-w-[441px] rounded-[12px] bg-white py-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-full rounded-[1.4rem] p-8 ${
                    index === activeIndex ? "-left-12 sm:w-[495px] bg-primary text-white" : "mx-auto max-w-[38rem]"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div className="mx-auto max-w-[38rem]">
                    <div
                      className={`icon absolute left-0 top-6 flex size-[34px]  items-center justify-center rounded-full ${
                        index === activeIndex ? "left-16 bg-white" : "bg-primary"
                      }`}
                    >
                      <Image
                        src={index === activeIndex ? item.iconSrcActive : item.iconSrc}
                        alt=""
                        width={22}
                        height={22}
                      />
                    </div>
                    <div className="pl-14">
                      <h4 className="mb-4 text-xl font-bold tracking-[-0.144px]">{item.title}</h4>
                      <p className="leading-[2.6rem] tracking-[-0.128px]">{item.description}</p>
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

export default WhyResumod
