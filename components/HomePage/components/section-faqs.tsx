import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "components/ui/accordion"

export function SectionFaqs() {
  const faqs = [
    {
      question: "Why is Resumod the best online resume builder for a job application?",
      answer:
        "Resumod is the best online resume builder for a job application because it is easy to use, has a clean and professional design, and offers a variety of templates to choose from. Resumod also offers a range of features that make it easy to create a resume that stands out, such as the ability to add custom sections, import data from LinkedIn, and export your resume in multiple formats. Resumod also offers a range of tools to help you improve your resume, such as a resume analyzer that provides feedback on your resume and suggestions for improvement.",
    },
    {
      question: "How do I make the best use of Resumod Resume Builder?",
      answer:
        "To make the best use of Resumod Resume Builder, start by choosing a template that best suits your needs. Next, add your personal information, work experience, education, skills, and any other relevant information. You can also add custom sections to highlight your achievements, projects, or other relevant information. Once you have added all the necessary information, you can preview your resume to make sure it looks good. Finally, you can download your resume in multiple formats and start applying for jobs.",
    },
    {
      question: "Which is the best resume format for 2022?",
      answer:
        "The best resume format for 2022 is the reverse-chronological format, which lists your most recent work experience first. This format is preferred by most employers because it makes it easy to see your career progression and relevant experience. However, the best resume format for you will depend on your individual circumstances and the type of job you are applying for. Resumod offers a variety of templates in different formats, so you can choose the one that best suits your needs.",
    },
    {
      question: "Does Resumod offer ATS-friendly resumes?",
      answer:
        "Yes, Resumod offers ATS-friendly resumes. Our templates are designed to be compatible with Applicant Tracking Systems (ATS), which are used by many employers to screen resumes. This means that your resume is more likely to be read by a human recruiter if it is formatted correctly. Resumod also offers a range of tools to help you optimize your resume for ATS, such as a resume analyzer that provides feedback on your resume and suggestions for improvement.",
    },
    {
      question: "Can Resumod help me review my resume?",
      answer:
        "Yes, Resumod can help you review your resume. Our resume analyzer tool provides feedback on your resume and suggestions for improvement. The resume analyzer checks your resume for common mistakes, such as spelling and grammar errors, formatting issues, and missing information. It also provides tips on how to improve your resume and make it more effective. You can use the resume analyzer to get personalized feedback on your resume and make sure it is ready to impress employers.",
    },
  ]

  return (
    <section className="py-32 small:pt-0 small:pb-10">
      <div className="container">
       <div>
        <h3 className="heading">
          Frequently Asked Questions about Resumod&apos;s <br />
          Website and Builder
        </h3>
        <Accordion type="single" collapsible className="w-full mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="space-y-4">
              <AccordionTrigger className="md:text-2xl !text-left  lg:text-[2.2rem]  md:text py-10">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-xl  leading-[2.6rem] -mt-3 small:text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </div>  
    </section>
  )
}
