// All of your content lives here. Edit this file and the page updates.
export const P = {
  name: "Lutendo Damuleli",
  photo: "/profile.jpg",
  role: "Software Engineer",
  cv: "/lutendo-damuleli-cv.pdf",
  lead: "I build secure, well-tested Java and React applications. Two and a half years of production banking at Standard Bank, now sharpening my full-stack skills.",
  linkedin: "https://www.linkedin.com/in/lutendo-damuleli-123497282",
  github: "https://github.com/blastza",
  repo: "https://github.com/blastza/shopwise",
  email: "lutendo.damuleli@outlook.com",
    whatsapp: "https://wa.me/27647004871?text=Hi%20Lutendo%2C%20I%20saw%20your%20profile%20and%20would%20like%20to%20chat.",
  about:
    "I’m a software engineer based in Johannesburg. At Standard Bank I built Spring Boot REST APIs behind customer-facing mobile and web apps, working in an Agile team of about 15. In 2025–2026 I completed an NQF Level 6 software engineering programme at WeThinkCode_ to update my skills across Java, Spring Security, Docker and React. I’m available immediately for on-site, hybrid or remote roles.",
  stats: [
    ["2.5 yrs", "production banking experience"],
    ["241/241", "programme credits completed"],
    ["Now", "available for new roles"],
  ],
  skills: [
    ["Languages", ["Java", "TypeScript", "JavaScript", "Python", "SQL"]],
    ["Front end", ["React", "Vite", "Tailwind CSS", "HTML", "CSS"]],
    ["Back end", ["Spring Boot", "Spring Security", "JWT", "JPA / Hibernate", "REST APIs", "Microservices", "Maven"]],
    ["Database", ["PostgreSQL"]],
    ["Testing and tools", ["TDD", "Unit tests", "Integration tests", "Git", "Bitbucket", "Postman", "Kibana", "AppDynamics"]],
    ["Cloud and DevOps", ["Docker", "GitHub Actions", "CI/CD", "AWS EC2", "Linux"]],
  ],
  job: {
    title: "Software Engineer, Standard Bank Group",
    when: "Aug 2019 – Jan 2022 · Johannesburg",
    pts: [
      "Built and maintained Java and Spring Boot REST services behind customer-facing banking apps in production.",
      "Extended core customer-profile services so mobile users could securely view and update details and preferences that were previously web-only.",
      "Shaped JSON responses for mobile clients and connected new endpoints to the existing API gateway and authentication flow.",
      "Practised TDD across controller, service and JPA layers, reducing defects before SIT and production releases.",
      "Used Postman, Kibana and AppDynamics to test APIs, read logs and trace failing requests.",
      "Handled Bitbucket pull requests and CI/CD pipelines, fixing failing tests and builds before release.",
    ],
  },
  proj: {
    name: "ShopWise",
    sub: "Full-stack e-commerce platform · Jan 2026 – present",
    pts: [
      "Spring Boot REST API with PostgreSQL and JPA, plus a React, TypeScript and Tailwind CSS front end.",
      "End-to-end JWT authentication and role-based route protection with Spring Security.",
      "Product browsing, search filtering and shopping cart management across the stack.",
      "Unit and integration tests written alongside each feature.",
      "Dockerised services with a GitHub Actions pipeline that builds and runs tests automatically.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Docker", "GitHub Actions"],
  },
  education: [
    {
      title: "WeThinkCode_ – Software Engineer",
      when: "NQF Level 6, QCTO · Feb 2025 – May 2026",
      text: "All four semesters and the capstone project passed (241/241 credits), covering Python and Java, object-oriented design, relational databases, web development, acceptance testing and build pipelines. Awaiting the scheduled QCTO EISA sitting for certificate issuance.",
    },
    {
      title: "WeThinkCode_ – Software Engineering Programme",
      when: "NQF Level 5 · Completed 17 August 2019",
      text: "Certificate of Completion for the WeThinkCode_ Software Engineering Programme. WeThinkCode_ Holdings is accredited as an Information Technology Training Service Provider with MICT SETA.",
    },
  ],
  tutor: {
    title: "Peer Tutor, WeThinkCode_",
    when: "Oct 2025 – present",
    text: "I help fellow students with programming concepts, code reviews and coding workshops, and coach them to break problems down and debug on their own.",
  },
};

export const codeSnippet = [
  "@RestController",
  '@RequestMapping("/api/engineer")',
  "class EngineerController {",
  "  @GetMapping",
  "  Engineer get() {",
  "    return new Engineer(",
  '      "Lutendo Damuleli",',
  '      List.of("Java", "Spring Boot", "React"),',
  '      "Johannesburg"',
  "    );",
  "  }",
  "}",
];
