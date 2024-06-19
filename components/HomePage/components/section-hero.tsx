import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"

const Hero: React.FC = () => {
  const firstImages = ["/images/resume1.png"]

  const secondImages = ["/images/resume2.png", "/images/resume1.png", "/images/resume2.png"]
  return (
    <>
      <section className="relative">
        <div className="container relative">
          <div className="relative flex items-center gap-5">
            <div className="w-full max-w-[58.2rem]">
              <div className="mb-5 inline-flex rounded-full bg-secondary p-2 pr-5 text-sm text-white">
                <span className="leading-2 mr-2 flex items-center rounded-full bg-white px-4 py-0 font-medium text-secondary">
                  Top #1
                </span>
                <span className="tracking-[-0.04px]">Best free online resume builder</span>
              </div>
              <h1 className="my-5 font-recoleta text-4xl font-semibold sm:text-5xl  md:text-6xl  lg:text-7xl xl:text-8xl">
                Create a Modern Job <br />
                Ready resume on
                <br />
                <span>
                  resumod.co
                  <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="211"
                    height="10"
                    viewBox="0 0 211 10"
                    fill="none"
                  >
                    <path
                      d="M2 8C32.0909 3.47226 115.618 -2.86658 209 8"
                      stroke="#2563EB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <h4 className="mt-4 max-w-4xl text-xl font-medium leading-[2.6rem] tracking-[-0.80px]">
                Use professional templates admired by HR Managers that result in interview callbacks.{" "}
              </h4>
              <div className="mt-14 flex items-center space-x-12">
                <Button className="py-5 text-lg">Build My Resume</Button>
                <div className="flex items-center font-bold">
                  <Image src="/images/play-icon.svg" alt="play-icon" width={34} height={34} />
                  Watch Demo
                </div>
              </div>
              <div className="mb-5 mt-24 flex items-center space-x-3 text-3xl font-bold">
                <span>Excellent</span>
                <Image src="/images/stars.svg" alt="star" width={170} height={32} />
                <span>4.8</span>
              </div>
              <div className="flex items-center text-xl font-bold tracking-[0.144px]">
                Based on 611 reviews
                <Image src="/images/trustpilot-star.svg" alt="arrow-right" width={31} height={31} className="mx-2" />
                Trustpilot
              </div>
            </div>

            <div className="templates relative flex h-screen min-h-[57rem] w-full justify-between">
              <div className="first hidden lg:block">
                <div className="max-w-[31.4rem]">
                  {firstImages.map((image, index) => (
                    <div key={index} className="template-item">
                      <Image
                        src={image}
                        alt={`hero-image-${index}`}
                        width={1240}
                        height={1755}
                        className="relative z-10 rounded-md shadow-custom"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="second relative right-0 ml-auto max-w-[314px]">
                {secondImages.map((image, index) => (
                  <div key={index} className="template-item flex justify-end text-right">
                    <Image
                      src={image}
                      alt={`hero-image-${index}`}
                      width={314}
                      height={357}
                      className="relative z-10 rounded-md object-cover shadow-custom"
                    />
                  </div>
                ))}
              </div>

              <Image
                src="/images/dots.svg"
                alt=""
                width={162}
                height={167}
                className="absolute bottom-40 left-[40%] z-[-1]"
              />
            </div>
            <svg
              className="absolute -right-20 top-0"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M11.2985 5.59206e-05L11.2985 11.2972L0.00136124 11.2972L0.00136135 13.8969L11.2985 13.8969L11.2985 25.1924L13.8982 25.1924L13.8982 13.8969L25.1953 13.8968L25.1953 11.2972L13.8982 11.2972L13.8982 5.58069e-05L11.2985 5.59206e-05Z"
                fill="#2563EB"
              />
            </svg>
          </div>
          <div className="absolute bottom-10 left-[40%] flex items-center justify-center text-center text-xl font-medium tracking-[-0.8px]">
            <span className="mr-3 flex h-2.5 w-2.5 items-center rounded-full bg-secondary"></span>
            20,000 Resumes Created Today
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
