import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"

const SectionAts: React.FC = () => {
  const data = [
    {
      title: 'ATS-friendly professionally designed resumes',
      icon: '/images/check.svg'
    },
    {
      title: 'Change the font, color and background combinations',
      icon: '/images/night-mode.svg'
    },
    {
      title: 'Two column, single column, and multi-page layouts',
      icon: '/images/columns.svg'
    }
  ]
  return (
    <>
      <section className="pt-28 small:pb-0 mt-12 relative">
        <div className="container">
          <div className="mx-auto">
            <h2 className="heading">
              Resumes optimized for applicant <br /> tracking systems (ATS)
            </h2>
            <p className="text-center text-xl tracking-[-0.144px]">
              Do you want to give it a try? You can build your resume in 10 minutes!
            </p>
          </div>
          <div className="md:grid md:grid-cols-3 gap-10 py-12 max-w-[1030px] mx-auto mt-20 small:space-y-16">
            {data.map((item, index) => (
              <div key={index} className="text-center">
                <Image src={item.icon
                } alt="" width={54} height={54} className="mx-auto mb-5" />
                <h4 className="text-xl font-bold tracking-[-0.144px] leading-[2.6rem] max-w-[30rem] small:mx-auto">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <Image src="/images/dots2.svg" alt="" width={96} height={187} className="absolute left-0 bottom-64 small:max-w-24" />   
        <Image src="/images/wave.svg" alt="" width={129} height={80} className="absolute -right-5 top-0 small:max-w-24" />  

      </section>
    </>
  )
}

export default SectionAts
