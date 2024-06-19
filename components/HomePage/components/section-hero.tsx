import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"

const Hero: React.FC = () => {
  
  return (
    <>
      <section className="relative overflow-hidden small:py-20">  
        <div className="container relative">
          <div className="relative flex flex-wrap items-center  gap-5 md:flex-nowrap">
            <div className="w-full max-w-[58.2rem] small:text-center">
              <div className="mb-5 inline-flex rounded-full bg-secondary p-2 pr-5 text-sm text-white">
                <span className="leading-2 mr-2 flex items-center rounded-full bg-white px-4 py-0 font-medium text-secondary">
                  Top #1
                </span>
                <span className="tracking-[-0.04px]">Best free online resume builder</span>
              </div>
              <h1 className="my-5 font-recoleta font-semibold text-5xl  md:text-6xl  lg:text-7xl xl:text-8xl">
                Create a Modern Job <br />
                Ready resume on
                <br />
                <span>
                  resumod.co
                  <svg
                    className="arrow small:mx-auto"
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
              <div className="mt-14 flex small:flex-wrap-reverse small:justify-center items-center space-x-12">
                <Button className="py-5 text-lg">Build My Resume</Button>
                <div className="flex items-center font-bold small:mb-10">
                  <Image src="/images/play-icon.svg" alt="play-icon" width={34} height={34} />
                  Watch Demo
                </div>
              </div>
              <div className="mb-5 mt-24 small:mt-4 small:justify-center flex items-center  space-x-3 font-bold md:text-2xl lg:text-3xl">
                <span>Excellent</span>
                <Image src="/images/stars.svg" alt="star" width={170} height={32} />
                <span>4.8</span>
              </div>
              <div className="flex items-center small:justify-center font-bold tracking-[0.144px] md:text-lg lg:text-xl">
                Based on 611 reviews
                <Image src="/images/trustpilot-star.svg" alt="arrow-right" width={31} height={31} className="mx-2" />
                Trustpilot
              </div>
            </div>

            <div className="templates relative flex h-screen small:h-auto w-full items-center justify-between gap-10 min-h-auto lg:min-h-[57rem] small:mt-20">
              <div>
                <div className="max-w-[31.4rem]">
                  <div className="first-slide">
                    <Image
                      src="/images/resume1.png"
                      alt="resume1"
                      width={1240}
                      height={1755}
                      className="relative z-10 rounded-md shadow-custom"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="second-slide mb-16 max-w-[314px]">
                  <Image
                    src="/images/resume2.png"
                    alt="resume2"
                    width={314}
                    height={357}
                    className="relative z-10 rounded-md object-cover shadow-custom"
                  />
                </div>

                <div className="third-slide">
                  <Image
                    src="/images/resume3.png"
                    alt="resume2"
                    width={314}
                    height={357}
                    className="relative z-10 rounded-md object-cover shadow-custom"
                  />
                </div>
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
          <div className="absolute bottom-10 md:left-1/2 lg:left-[40%]  flex whitespace-nowrap items-center	small:-bottom-14 justify-center text-center text-lg font-medium tracking-[-0.8px] lg:text-xl small:left-2/4 small:-translate-x-2/4">
            <span className="mr-3 flex size-2.5 items-center rounded-full bg-secondary"></span>
            20,000 Resumes Created Today
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
