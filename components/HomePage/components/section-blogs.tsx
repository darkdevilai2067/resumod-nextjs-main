import * as React from "react";
import { Card, CardContent } from "components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/ui/carousel";
import Image from "next/image";

export function SectionBlogs() {
  const blogs = [
    {
      title: "250+ Most In-Demand Skills to Put on a Resume [Examples & Tips]",
      image: "blog1.png",
      description:
        "The skills section is one of the most important parts of your resume, showing recruiters whether you are a good fit for the job.",
      date: 'October 8, 2024',
      read: '5 min read'  
    },
    {
      title: "250+ Most In-Demand Skills to Put on a Resume [Examples & Tips]",
      image: "blog2.png",
      description:
        "The skills section is one of the most important parts of your resume, showing recruiters whether you are a good fit for the job.",
      date: 'October 8, 2024',
      read: '5 min read'
    },
    {
      title: "250+ Most In-Demand Skills to Put on a Resume [Examples & Tips]",
      image: "blog3.png",
      description:
        "The skills section is one of the most important parts of your resume, showing recruiters whether you are a good fit for the job.",
      date: 'October 8, 2024',
      read: '5 min read'
    },
  ];

  return (
    <section>
      <div className="container py-32">
        <h2 className="heading">Our Blogs</h2>
        <Carousel className="w-full mt-24">
          <CarouselContent className="-ml-1">
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="max-w-[39rem] rounded-[2rem] relative p-0">
                  <CardContent className="p-0">
                    <Image src={`/images/${blog.image}`} alt={blog.title} width={390} height={250} className="max-h-[25rem] object-cover " />
                    <div className="py-5 px-8">
                       <h4 className="text-3xl py-4 font-recoleta max-w-[31rem]">{blog.title}</h4>
                    <p className="text-lg">{blog.description}</p>
                    <div className="flex text-sm items-center mt-12">
                      <div>
                        <div className="flex items-center mr-12">
                           <Image src="/images/calender-icon.svg" alt="" width={19} height={19} className="mr-2" />
                           {blog.date}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                           <Image src="/images/timer-icon.svg" alt="" width={19} height={19} className="mr-2" />
                            {blog.read}
                        </div>
                     </div>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
   
        </Carousel>
      </div>
    </section>
  );
}
