import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import React from "react"
import { Card, CardContent } from "components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/ui/carousel"

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      title: "Great",
      review:
        "I'm really careful with my commits, I use to make it atomic and try to make in independent. With a good git knowledge I'm able to squash the commits that are related and keep branches with atomic changes, like legos bricks, but you need to do magic with git. Love this tool!",
      name: "Chiraj Gupta",
      date: "July 6, 2021",
    },
    {
      id: 2,
      title: "Great",
      review:
        "I'm really careful with my commits, I use to make it atomic and try to make in independent. With a good git knowledge I'm able to squash the commits that are related and keep branches with atomic changes, like legos bricks, but you need to do magic with git. Love this tool!",
      name: "Chiraj Gupta",
      date: "July 6, 2021",
    },
  ]
  const reviews2 = [
    {
      id: 1,
      title: "Great",
      review:
        "I'm really careful with my commits, I use to make it atomic and try to make in independent. With a good git knowledge I'm able to squash the commits that are related and keep branches with atomic changes, like legos bricks, but you need to do magic with git. Love this tool!",
      name: "Chiraj Gupta",
      date: "July 6, 2021",
    },
    {
      id: 2,
      title: "Great",
      review:
        "I'm really careful with my commits, I use to make it atomic and try to make in independent. With a good git knowledge I'm able to squash the commits that are related and keep branches with atomic changes, like legos bricks, but you need to do magic with git. Love this tool!",
      name: "Chiraj Gupta",
      date: "July 6, 2021",
    },
  ]
  return (
    <>
      <section className="mt-12">
        <div className="container max-w-[1360px] rounded-[3rem] bg-gray">
          <div className="flex small:flex-wrap">
            <div className="mt-20 w-full lg:w-[400px] xl:w-[500px]">
              <h2 className="heading md:text-left">Reviewed by the community. Trusted by professionals.</h2>
              <div className="mb-6 mt-12 text-3xl font-bold small:text-center">4.7 out of 5</div>
              <Image src="/images/stars.svg" alt="" width={170} height={32} className="small:mx-auto" />
              <Image
                src="/images/trustpilot-logo.svg"
                alt=""
                width={180}
                height={51}
                className="mt-8 small:mx-auto small:max-w-40 small:mb-10"
              />
            </div>
            <div className="hidden w-full md:block lg:w-[calc(100%-400px)] xl:w-[calc(100%-500px)]">
              <div className="reviews-container grid-cols-1 gap-10 overflow-hidden md:grid lg:grid-cols-2">
                <div className="review-slide hidden lg:block">
                  {reviews.map((review) => (
                    <div className="mb-10 rounded-[2rem] bg-white p-8" key={review.id}>
                      <div>
                        <div className="text-xl font-medium">{review.title}</div>
                        <div>
                          <Image src="/images/star-5.svg" alt="" width={145} height={26} className="mb-5 mt-4" />
                        </div>
                        <div className="text-lg">{review.review}</div>
                        <div className="mt-8 flex justify-between">
                          <div className="text-lg font-bold leading-[2.2rem]">{review.name}</div>
                          <div className="text-[13px] text-slate-400">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="review-slide2">
                  {reviews2.map((review) => (
                    <div className=" mb-10 rounded-[2rem] bg-white p-8" key={review.id}>
                      <div>
                        <div className="text-xl font-medium">{review.title}</div>
                        <div>
                          <Image src="/images/star-5.svg" alt="" width={145} height={26} className="mb-5 mt-4" />
                        </div>
                        <div className="text-lg">{review.review}</div>
                        <div className="mt-8 flex justify-between">
                          <div className="text-lg font-bold leading-[2.2rem]">{review.name}</div>
                          <div className="text-[13px] text-slate-400">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Carousel
              className="hidden w-full small:block"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="-ml-1">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className=" mb-10 rounded-[2rem] bg-white p-8" key={review.id}>
                        <div>
                          <div className="text-xl font-medium">{review.title}</div>
                          <div>
                            <Image src="/images/star-5.svg" alt="" width={145} height={26} className="mb-5 mt-4" />
                          </div>
                          <div className="text-lg">{review.review}</div>
                          <div className="mt-8 flex justify-between">
                            <div className="text-lg font-bold leading-[2.2rem]">{review.name}</div>
                            <div className="text-[13px] text-slate-400">{review.date}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
