import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "components/ui/button"
import { Separator } from "components/ui/separator"
import { ChevronRight } from "lucide-react"

const Footer: React.FC = () => {
  const blogs = [
    {
      title: "E-Books on Resume Writing",
      desc: "E-books on Resume Writing for job seekers. 1 is for Graduates and Freshers, 2 for women who are on Career Break, and 3 is for Product Managers.",
      link: "https://resumod.co/blog/e-books-on-resume-writing/",
    },
    {
      title: "How to Quantify Your Resume Bullets (with Examples)",
      desc: "Using bullets is a great way to organize and present large chunks of information in a readable manner.",
      link: "https://resumod.co/blog/how-to-quantify-your-resume-bullets-with-examples/",
    },
    {
      title: "10 + Data Science Resume Examples",
      desc: "If you are keen to make your career in data science but don’t know how to build an attention-drawing data-science resume, you have come to the right place.",
      link: "https://resumod.co/blog/10-data-science-resume-examples-for-2023-guide-template-and-trending-skills/",
    },
  ]

  const readTopics = [
    {
      title: "Career Advice",
      issues: "39",
      link: "https://resumod.co/blog/tag/career-advice/",
    },
    {
      title: "Job Search",
      issues: "26",
      link: "https://resumod.co/blog/tag/job-search/",
    },
    {
      title: "Resume Tips",
      issues: "28",
      link: "https://resumod.co/blog/tag/resume-tips/",
    },
  ]

  const sampleResumesMenu = [
    {
      label: "Academic",
      link: "/sample-resumes/academic",
    },
    {
      label: "Accounting & Bookkeeping",
      link: "/sample-resumes/accounting-and-bookkeeping",
    },
    {
      label: "BA MA",
      link: "/sample-resumes/ba-ma",
    },
    {
      label: "BEd MEd",
      link: "/sample-resumes/bed-med",
    },
    {
      label: "BPO",
      link: "/sample-resumes/bpo",
    },
    {
      label: "BSc MSc",
      link: "/sample-resumes/bsc-msc",
    },
    {
      label: "BTech MTech",
      link: "/sample-resumes/btech-mtech",
    },
    {
      label: "Banking & BFSI",
      link: "sample-resumes/banking-and-bfsi",
    },
    {
      label: "Biology",
      link: "/sample-resumes/biology",
    },
    {
      label: "Biotechnology",
      link: "/sample-resumes/biotechnology",
    },
    {
      label: "Career Break",
      link: "/sample-resumes/career-break",
    },
    {
      label: "Construction & Civil Engineering",
      link: "/sample-resumes/construction-and-civil-engineering",
    },
    {
      label: "Data Science",
      link: "/sample-resumes/data-science",
    },
    {
      label: "Finance",
      link: "/sample-resumes/finance",
    },
    {
      label: "Fresher",
      link: "/sample-resumes/fresher",
    },
    {
      label: "Human Resource HR",
      link: "/sample-resumes/human-resource-hr",
    },
    {
      label: "Journalism",
      link: "/sample-resumes/journalism",
    },
    {
      label: "KPO",
      link: "/sample-resumes/kpo",
    },
    {
      label: "MBBS Doctor",
      link: "/sample-resumes/mbbs-doctor",
    },
    {
      label: "More >>",
      link: "/sample-resumes?sortBy=latest#scrollForCategory/",
    },
  ]

  const quickLinksMenu = [
    {
      label: "Resume Templates",
      link: "/resume-templates",
    },
    {
      label: "Resume Samples",
      link: "/sample-resumes",
    },
    {
      label: "LinkedIn to Resume",
      link: "https://app.resumod.co/",
    },
    {
      label: "FAQs",
      link: "https://resumod.freshdesk.com/support/home",
    },
    {
      label: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      link: "/terms-of-use",
    },
  ]

  const resourcesLinksMenu = [
    {
      label: "What's New",
      link: "https://resumod.co/blog/resumod-feature-guide-whats-new/",
    },
    {
      label: "Career Blog",
      link: "https://resumod.co/blog/tag/career-advice/",
    },
    {
      label: "Resume Writing Tips",
      link: "https://resumod.co/blog/tag/resume-writing/",
    },
    {
      label: "Job Search",
      link: "https://resumod.co/blog/tag/job-search/",
    },
    {
      label: "Career Advice",
      link: "https://resumod.co/blog/tag/career-advice/",
    },
    {
      label: "Skill Development",
      link: "https://resumod.co/blog/tag/skill-development/",
    },
    {
      label: "Resume Examples",
      link: "https://resumod.co/blog/tag/resume-examples/",
    },
  ]

  const connectsMenu = [
    {
      label: "Partnerships",
      link: "",
    },
    {
      label: "Referral Program",
      link: "",
    },
    {
      label: "Campus Ambassador Program",
      link: "",
    },
  ]

  const aboutUsMenu = [
    {
      label: "Resumod",
      link: "/about-us",
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
  ]

  const otherLink = [
    {
      label: "Resume Builder",
      link: "https://app.resumod.co/",
    },
    {
      label: "Interview Preparation",
      link: "",
    },
    {
      label: "Univeristy",
      link: "",
    },
    {
      label: "Enterprise",
      link: "",
    },
  ]

  const social = [
    {
      label: "Instagram",
      icon: "instagram.svg",
      link: "",
    },
    {
      label: "Facebook",
      icon: "facebook.svg",
      link: "",
    },
    {
      label: "YouTube",
      icon: "youtube.svg",
      link: "",
    },
    {
      label: "Twitter",
      icon: "twitter.svg",
      link: "",
    },
    {
      label: "LinkedIn",
      icon: "linkedin1.svg",
      link: "",
    },
  ]

  return (
    <>
      <footer className="container py-6">
        <div>
          <div className="mb-12 max-w-[437px] space-y-10">
            <Image src="/images/logo.svg" alt="logo" width={165} height={31} />
            <p className="text-lg">
              Resumod.co - the world’s easiest and fastest resume builder. Create your free resume within minutes.
            </p>
            <Image src="images/g2-trust-razor.svg" alt="" width={417} height={50} className="grayscale"></Image>
          </div>
          <Separator />
          <div className="mt-10 md:grid md:grid-cols-4 gap-20">
            <div>
              <div>
                <h3 className="mb-4 font-recoleta text-xl font-semibold uppercase text-black">Our Blogs</h3>
                <div className="space-y-10">
                  {blogs.map((blog, index) => (
                    <div key={index}>
                      <h4 className="widget-heading text-lg">
                        <Link href={blog.link}>{blog.title}</Link>
                      </h4>
                      <p className="text-base">{blog.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="" className="my-12 flex text-primary">
                View All <ChevronRight className="-mt-1 w-8" />
              </Link>

              <div className="mt-5">
                <h3 className="widget-heading">Read Topics</h3>
                {readTopics.map((topic, index) => (
                  <ul key={index}>
                    <li className="mb-3">
                      <Link href="" className="text-lg">
                        {topic.title} ({topic.issues}) issues )
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
              <Link href="" className="my-12 flex text-primary">
                View All <ChevronRight className="-mt-1 w-8" />
              </Link>
            </div>

            <div>
              <h3 className="widget-heading">Sample Resumes</h3>
              <ul className="space-y-5">
                {sampleResumesMenu.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="text-base">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="space-y-10">
                <div>
                  <h3 className="widget-heading">Quick Links</h3>
                  <ul className="space-y-5">
                    {quickLinksMenu.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} className="text-base">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="widget-heading">Resources</h3>
                  <ul className="space-y-5">
                    {resourcesLinksMenu.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} className="text-base">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="widget-heading">Connect</h3>
                  <ul className="space-y-5">
                    {connectsMenu.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} className="text-base">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="widget-heading">About Us</h3>
              <ul className="space-y-5">
                {aboutUsMenu.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="text-base">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-12 pb-6">
          <ul className="sm:flex list-none justify-center">
            {otherLink.map((item, index) => (
              <li key={index} className="mr-12 last:mr-0">
                <Link href={item.link} className="text-black">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="bg-[#18181b] text-white py-8">
      <div className="container justify-center xl:flex xl:justify-between  items-center ">
          <div className="flex justify-center xl:justify-start text-lg small:text-xs">
            <div className="flex">
              <Image src="/images/copyright.svg" alt="" width={14} height={14} className="mr-2" />
              Copyright Resumod</div>
            <div className="w-px h-5 mx-5 mt-3 bg-white"></div>
            <div className="flex items-center">Made with 
              <span>
                <Image src="/images/heart.svg" alt="" width={15} height={14} className="mx-2" />
              </span>
               in India for the world</div>
          </div>
          <div>
            <ul className="flex justify-center mt-12 xl:justify-start xl:mt-0 list-none">
              {social.map((item, index) => (
                <li key={index} className="mr-5 last:mr-0">
                  <Link href={item.link} className="text-white border border-[#626264] border-solid rounded-2xl small:rounded-full small:size-20 flex items-center px-6 py-5">
                    <Image src={`/images/${item.icon}`} alt={item.label} width={20} height={20} className="mr-3" />
                    <span className="small:hidden">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
