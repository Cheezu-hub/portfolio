import { Building2, Calendar, Code2, ChevronRight, CheckCircle2 } from "lucide-react";

const experience = {
  company: "Tech Mahindra",
  role: "Technology Intern",
  duration: "May 2026 – Present",
  techStack: ["Selenium WebDriver", "Python", "Veeva CRM", "Test Automation", "QA Workflows"],
  description: "Working on enterprise automation testing workflows using Selenium WebDriver and Python within the Veeva CRM ecosystem. Gaining hands-on exposure to browser automation, QA processes, debugging, dynamic element handling, waits, frames, workflow validations, and real-world enterprise testing practices in the healthcare and life sciences domain.",
  responsibilities: [
    "Automating browser interactions and workflow validations using Selenium WebDriver and Python.",
    "Working with dynamic web elements, XPath locators, waits, frames, and iFrames in enterprise applications.",
    "Learning software testing lifecycle concepts including debugging, test execution, validation, and automation reliability.",
    "Exploring healthcare and life sciences CRM workflows through practical exposure to the Veeva CRM platform.",
    "Improving automation understanding through hands-on work with enterprise QA practices and browser testing workflows."
  ],
  exploring: [
    "Advanced Selenium Automation",
    "Playwright Automation",
    "API Testing",
    "Automation Framework Design",
    "Enterprise QA Workflows"
  ]
};

export function WorkExperience() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full group/experience">
        <h2 className="text-3xl md:text-4xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10">
          Work Experience
        </h2>
    </section>
  );
}
