import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import React from "react"
import { Button } from "components/ui/button"
import { Card, CardContent } from "components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/ui/carousel"
import SectionAts from "./section-ats"


const ResumesSlider: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden rounded-[5rem] py-28 shadow-custom-2">
        <section>
          <div className="container mb-20">
            <div className="mx-auto max-w-[784px]">
              <h2 className="heading">Professional Resume Templates</h2>
              <p className="text-center text-xl tracking-[-0.144px] leading-[2.6rem]">
                Choose from 10+ tailormade templates that have helped thousands of people land interview calls. Download
                to PDF or Word or share a permanent link
              </p>
            </div>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className={`mb-5 md:basis-1/3 lg:basis-1/5 ${index === 4 ? 'lg:mr-1/2' : ''}`}
                >
                  <div className="p-1">
                    <Card className="mx-auto max-w-[353px] border-none bg-white">
                      <CardContent className="bg-gray flex aspect-square items-center justify-center rounded-[2.2rem] p-6">
                        <Image src={`/images/slider-resume${index + 1}.png`} alt="resume" width={301} height={426} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-5 text-center">
            <Button className="text-center">Select Templates</Button>
          </div>
        </section>

        <SectionAts />
      </div>
    </>
  )
}

export default ResumesSlider
