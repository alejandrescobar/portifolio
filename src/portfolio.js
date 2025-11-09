/* Personal Portfolio — Alejandro Mateus Escobar Cavalcante */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ---------- Tela inicial ----------
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// ---------- Saudação ----------
const illustration = { animated: true };

const greeting = {
  username: "Alejandro Mateus Escobar Cavalcante",
  title: "Olá, eu sou o Alejandro 👋",
  subTitle:
    "Estudante da Universidade Federal de Viçosa (UFV), atualmente no segundo período. Apaixonado por tecnologia, desenvolvimento e aprendizado contínuo.",
  resumeLink: "",
  displayGreeting: true
};

// ---------- Redes sociais ----------
const socialMediaLinks = {
  github: "https://github.com/alejandrescobar",
  instagram: "https://instagram.com/alee_ec",
  gmail: "alemateu123542@gmail.com",
  display: true
};

// ---------- Habilidades ----------
const skillsSection = {
  title: "Habilidades",
  subTitle: "Desenvolvimento full stack com foco em Python, C e tecnologias web.",
  skills: [
    emoji("⚡ Criação de aplicações web com HTML, CSS e JavaScript"),
    emoji("⚡ Desenvolvimento de sistemas desktop com Python (CustomTkinter)"),
    emoji("⚡ Experiência com banco de dados SQLite"),
    emoji("⚡ Programação estruturada e lógica com C")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C", fontAwesomeClassname: "fas fa-code" },
    { skillName: "SQLite", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// ---------- Formação ----------
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidade Federal de Viçosa (UFV)",
      logo: require("./assets/images/ufv.png"), // coloque um logo real depois
      subHeader: "Bacharelado em Sistemas de Informação",
      duration: "2025 - 2029",
      desc: "Atualmente no segundo período, com foco em desenvolvimento, programação e fundamentos de sistemas de informação."
    }
  ]
};

// ---------- Experiência / Projetos ----------
const bigProjects = {
  title: "Projetos em Destaque",
  subtitle: "Meus principais projetos pessoais e acadêmicos",
  projects: [
    {
      image: require("./assets/images/tech.png"),
      projectName: "Sistema de Agendamento",
      projectDesc:
        "Sistema desktop completo em Python + CustomTkinter com banco SQLite e integração via WhatsApp para envio automático de mensagens.",
      footerLink: [
        {
          name: "Ver no GitHub",
          url: "https://github.com/alejandrescobar/sistema-agendamento"
        }
      ]
    },
    {
      image: require("./assets/images/tech.png"),
      projectName: "Sistema de Biblioteca",
      projectDesc:
        "Aplicação para gerenciamento de livros e empréstimos, desenvolvida com HTML, CSS, JavaScript, Python e C.",
      footerLink: [
        {
          name: "Ver no GitHub",
          url: "https://github.com/alejandrescobar/sistema-biblioteca"
        }
      ]
    }
  ],
  display: true
};

// ---------- Conquistas ----------
const achievementSection = {
  title: emoji("Certificações e Conquistas 🏆"),
  subtitle: "Certificados e formações concluídas.",
  achievementsCards: [
    {
      title: "Técnico em TI",
      subtitle:
        "Formação técnica com foco em redes, manutenção e desenvolvimento de sistemas.",
      image: require("./assets/images/tech.png"),
      imageAlt: "Logo TI",
      footerLink: []
    },
    {
      title: "Técnico em Logística",
      subtitle: "Formação técnica voltada à gestão de processos e estoque.",
      image: require("./assets/images/tech.png"),
      imageAlt: "Logo Logística",
      footerLink: []
    }
  ],
  display: true
};

// ---------- Contato ----------
const contactInfo = {
  title: emoji("Entre em contato ☎️"),
  subtitle:
    "Aberto a colaborações e oportunidades! Pode me chamar pelo e-mail abaixo 👇",
  number: "",
  email_address: "alemateu123542@gmail.com"
};

// ---------- Outras seções (ocultas por enquanto) ----------
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const resumeSection = { display: false };
const twitterDetails = { userName: "", display: false };
const openSource = { showGithubProfile: "true", display: true };
const workExperiences = { display: false };
const techStack = { viewSkillBars: true, experience: [], displayCodersrank: false };
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

