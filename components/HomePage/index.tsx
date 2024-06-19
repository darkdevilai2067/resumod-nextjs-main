import React from "react"
import MeetResumeBuilder from "./components/section-ai-builder"
import { SectionBlogs } from "./components/section-blogs"
import SectionBuilderCTA from "./components/section-builder-cta"
import BuilderFeatures from "./components/section-builder-features"
import SectionCTA from "./components/section-cta"
import { SectionFaqs } from "./components/section-faqs"
import SectionFeatures from "./components/section-features"
import Hero from "./components/section-hero"
import { JoinCommunity } from "./components/section-join-community"
import ResumesSlider from "./components/section-resumes-slider"
import Reviews from "./components/section-reviews"
import WhyResumod from "./components/section-why-resumod"

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Hero />
        <ResumesSlider />
        <BuilderFeatures  />
        <SectionCTA />
        <Reviews />
        <WhyResumod />
        <SectionFeatures />
        <MeetResumeBuilder />
        <JoinCommunity />
        <SectionBlogs />
        <SectionFaqs />
        <SectionBuilderCTA />
      </div>
    </>
  )
}

export default HomePage
