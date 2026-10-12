/* ==========================================================================
   Jose Quispe Pino - Portfolio
   JavaScript vanilla (sin dependencias).
   - Tema oscuro/claro + idioma ES/EN (con ?lang= en la URL)
   - Barra de progreso de scroll y header compacto
   - Boton volver arriba, copiar email y exportar a PDF
   - Menu movil, enlace activo y animaciones de aparicion
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "jqp-theme";
  var LANG_KEY = "jqp-lang";
  var EMAIL = "joseqp92@gmail.com";
  var currentLang = "es";

  /* ========================================================================
     Traducciones
     ======================================================================== */
  var I18N = {
    es: {
      "doc.title": "Jose Quispe Pino | Senior QA Automation Engineer",
      "skip": "Saltar al contenido",
      "nav.summary": "Resumen",
      "nav.skills": "Skills",
      "nav.experience": "Experiencia",
      "nav.recognition": "Reconocimientos",
      "nav.education": "Educación",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",

      "hero.badge": "Disponible para oportunidades",
      "hero.greeting": "Hola, soy",
      "hero.lead": "QA Automation Engineer con más de 9 años de experiencia en testing y automatización de pruebas en entornos web, mobile y servicios. Especializado en diseño de frameworks de automatización, API testing y Continuous Testing.",
      "hero.cta": "Contacto",
      "hero.print": "Imprimir / Guardar PDF",
      "hero.meta1": "+9 años de experiencia",

      "summary.eyebrow": "Professional Summary",
      "summary.title": "Resumen profesional",
      "summary.p1": "QA Automation Engineer con más de 9 años de experiencia en testing y automatización de pruebas en entornos web, mobile y servicios. Especializado en el diseño de frameworks de automatización, API testing y prácticas de Continuous Testing en entornos Agile.",
      "summary.p2": "Enfocado en mejorar la calidad del software mediante la detección temprana de defectos y la optimización de los procesos de testing, trabajando con Java, JavaScript y TypeScript e integrando pruebas automatizadas en pipelines de CI/CD.",

      "skills.eyebrow": "Technical Skills",
      "skills.title": "Technical Skills",

      "exp.eyebrow": "Trayectoria",
      "exp.title": "Experiencia profesional",
      "exp.role.qaAutomationEngineer": "QA Automation Engineer",
      "exp.role.qaAutomationEngineer.2": "QA Automation Engineer",
      "exp.role.qaAutomationSr": "QA Automation Sr",
      "exp.role.qaAutomationSr.2": "QA Automation Sr",
      "exp.role.qaAutomationSenior": "QA Automation Senior",
      "exp.role.qaTechnicalAnalyst": "QA Technical Analyst",
      "exp.badge.inetum": "Inetum · Cliente: Pacífico",
      "exp.badge.softtek": "Softtek · Cliente: Pacífico",
      "exp.inetum.period": "Jun 2024 – Set 2026",
      "exp.inetum.b1": "Diseñé e implementé suites de automatización de pruebas para APIs utilizando Karate DSL, fortaleciendo la confiabilidad de integraciones críticas del negocio.",
      "exp.inetum.b2": "Implementé validaciones end-to-end para flujos core del sector seguros.",
      "exp.inetum.b3": "Participé en la validación del flujo de Trunk-Based Development (TBD), integrando pruebas automatizadas dentro del flujo de desarrollo y CI/CD.",
      "exp.inetum.b4": "Participé en proyectos de seguros como Efectivo Protegido, Tu Plata Segura y Portal de Siniestros, entre otras soluciones del negocio.",
      "exp.inetum.b5": "Realicé análisis de logs y trazabilidad de aplicaciones utilizando Dynatrace para la identificación y seguimiento de incidencias.",
      "exp.inetum.b6": "Brindé soporte al equipo en aspectos técnicos de QA, automatización de pruebas y aseguramiento de la calidad desde etapas tempranas del desarrollo.",
      "exp.softtek.period": "Ene 2023 – May 2024",
      "exp.softtek.b1": "Lideré la automatización de pruebas para aplicaciones web y servicios, incrementando la cobertura de testing automatizado.",
      "exp.softtek.b2": "Utilicé GitHub para la gestión de código y ejecución de automatizaciones dentro del flujo de CI/CD.",
      "exp.softtek.b3": "Validé aplicaciones, integraciones y flujos de datos utilizando AcselX, Azure Logic Apps, Azure Data Factory y Azure Functions, con validaciones complementarias sobre bases de datos SQL.",
      "exp.softtek.b4": "Utilicé Dynatrace para el monitoreo y análisis de aplicaciones, y Jira para la gestión y seguimiento de incidencias.",
      "exp.softtek.b5": "Impulsé buenas prácticas de QA y automatización dentro del equipo, promoviendo la calidad desde etapas tempranas del desarrollo.",
      "exp.bcp.period": "Nov 2021 – Ene 2023",
      "exp.bcp.b1": "Automatización de pruebas para plataformas de canales digitales empresariales.",
      "exp.bcp.b2": "Validé APIs y servicios backend de alta criticidad.",
      "exp.bcp.b3": "Aseguré calidad continua en entornos Agile.",
      "exp.bcp.b4": "Contribuí a la reducción de incidentes en producción.",
      "exp.baufest.period": "Mar 2020 – Oct 2021",
      "exp.baufest.b1": "Lideré iniciativas de automatización a nivel organizacional.",
      "exp.baufest.b2": "Diseñé frameworks reutilizables para múltiples proyectos.",
      "exp.baufest.b3": "Ejecuté pruebas de performance con JMeter.",
      "exp.baufest.b4": "Capacité equipos en automatización.",
      "exp.practia.period": "Ene 2019 – Feb 2020",
      "exp.practia.b1": "Desarrollé automatización para web, mobile, desktop y APIs.",
      "exp.practia.b2": "Incrementé la cobertura de pruebas automatizadas.",
      "exp.practia.b3": "Optimicé procesos de testing reduciendo esfuerzo manual.",
      "exp.trans.period": "Mar 2017 – Nov 2018",
      "exp.trans.b1": "Diseñé e implementé un framework de automatización desde cero.",
      "exp.trans.b2": "Implementé prácticas de Continuous Testing.",
      "exp.trans.b3": "Lideré equipo QA enfocado en automatización.",
      "exp.trans.b4": "Definí pruebas funcionales y no funcionales.",

      "rec.eyebrow": "Reconocimientos",
      "rec.title": "Logros destacados",
      "rec.crack.text": "Reconocimiento al desempeño destacado durante el trimestre.",
      "rec.embedex.text": "Reconocimiento al desempeño destacado en el equipo.",

      "edu.eyebrow": "Formación",
      "edu.title": "Educación y certificaciones",
      "edu.tecsup1": "Networks and Data Communications.",
      "edu.tecsup2": "Oracle Database 11g: SQL Fundamentals I.",
      "edu.purdue": "UML & Mobile Application Development.",
      "edu.certiprof": "SCRUM Foundation Professional Certificate.",

      "proj.eyebrow": "Proyectos",
      "proj.title": "Proyectos y demos",
      "proj.bpuzzle.tag": "App móvil · Personal",
      "proj.bpuzzle.text": "Proyecto personal: una aplicación móvil de rompecabezas desarrollada con React Native, Expo y TypeScript.",
      "proj.e2e.title": "Framework de automatización E2E",
      "proj.e2e.text": "Proyecto demostrativo de automatización end-to-end: estructura de proyecto, page objects y ejecución de pruebas sobre un sitio de ejemplo.",
      "proj.api.title": "Automatización de APIs",
      "proj.api.text": "Proyecto demostrativo de pruebas de API con Karate DSL y Postman: validación de contratos, códigos de estado y flujos de negocio sobre un servicio de ejemplo.",
      "proj.mobile.title": "Automatización móvil",
      "proj.mobile.text": "Proyecto demostrativo de pruebas automatizadas para aplicaciones móviles con Appium, cubriendo los flujos principales sobre una app de ejemplo.",
      "proj.performance.title": "Pruebas de performance",
      "proj.performance.text": "Proyecto demostrativo de pruebas de carga y rendimiento con JMeter sobre un servicio de ejemplo, midiendo tiempos de respuesta y estabilidad.",
      "proj.soon": "Próximamente",

      "contact.eyebrow": "Contacto",
      "contact.title": "Hablemos",
      "contact.sub": "Disponible para oportunidades como Senior QA Automation Engineer.",
      "contact.whatsapp": "WhatsApp",
      "contact.copy": "Copiar email",
      "contact.copied": "¡Email copiado!",

      "footer.top": "Volver arriba ↑"
    },

    en: {
      "doc.title": "Jose Quispe Pino | Senior QA Automation Engineer",
      "skip": "Skip to content",
      "nav.summary": "Summary",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.recognition": "Recognition",
      "nav.education": "Education",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.badge": "Available for opportunities",
      "hero.greeting": "Hi, I'm",
      "hero.lead": "QA Automation Engineer with over 9 years of experience in testing and test automation across web, mobile and service environments. Specialized in automation framework design, API testing and Continuous Testing.",
      "hero.cta": "Contact",
      "hero.print": "Print / Save as PDF",
      "hero.meta1": "+9 years of experience",

      "summary.eyebrow": "Professional Summary",
      "summary.title": "Professional Summary",
      "summary.p1": "QA Automation Engineer with over 9 years of experience in testing and test automation across web, mobile and service environments. Specialized in the design of automation frameworks, API testing and Continuous Testing practices in Agile environments.",
      "summary.p2": "Focused on improving software quality through early defect detection and the optimization of testing processes, working with Java, JavaScript and TypeScript, and integrating automated tests into CI/CD pipelines.",

      "skills.eyebrow": "Technical Skills",
      "skills.title": "Technical Skills",

      "exp.eyebrow": "Career",
      "exp.title": "Professional Experience",
      "exp.role.qaAutomationEngineer": "QA Automation Engineer",
      "exp.role.qaAutomationEngineer.2": "QA Automation Engineer",
      "exp.role.qaAutomationSr": "QA Automation Sr",
      "exp.role.qaAutomationSr.2": "QA Automation Sr",
      "exp.role.qaAutomationSenior": "Senior QA Automation Engineer",
      "exp.role.qaTechnicalAnalyst": "QA Technical Analyst",
      "exp.badge.inetum": "Inetum · Client: Pacífico",
      "exp.badge.softtek": "Softtek · Client: Pacífico",
      "exp.inetum.period": "Jun 2024 – Sep 2026",
      "exp.inetum.b1": "Designed and implemented API test automation suites using Karate DSL, strengthening the reliability of critical business integrations.",
      "exp.inetum.b2": "Implemented end-to-end validations for core insurance business flows.",
      "exp.inetum.b3": "Contributed to validating the Trunk-Based Development (TBD) flow, integrating automated tests into the development and CI/CD pipeline.",
      "exp.inetum.b4": "Worked on insurance projects such as Efectivo Protegido, Tu Plata Segura and Portal de Siniestros, among other business solutions.",
      "exp.inetum.b5": "Performed log analysis and application tracing using Dynatrace to identify and track incidents.",
      "exp.inetum.b6": "Supported the team on technical QA topics, test automation and quality assurance from the early stages of development.",
      "exp.softtek.period": "Jan 2023 – May 2024",
      "exp.softtek.b1": "Led test automation for web applications and services, increasing automated testing coverage.",
      "exp.softtek.b2": "Used GitHub for code management and running automations within the CI/CD pipeline.",
      "exp.softtek.b3": "Validated applications, integrations and data flows using AcselX, Azure Logic Apps, Azure Data Factory and Azure Functions, with complementary validations on SQL databases.",
      "exp.softtek.b4": "Used Dynatrace for application monitoring and analysis, and Jira for incident management and tracking.",
      "exp.softtek.b5": "Promoted QA and automation best practices within the team, driving quality from the early stages of development.",
      "exp.bcp.period": "Nov 2021 – Jan 2023",
      "exp.bcp.b1": "Test automation for enterprise digital channel platforms.",
      "exp.bcp.b2": "Validated highly critical backend APIs and services.",
      "exp.bcp.b3": "Ensured continuous quality in Agile environments.",
      "exp.bcp.b4": "Contributed to reducing production incidents.",
      "exp.baufest.period": "Mar 2020 – Oct 2021",
      "exp.baufest.b1": "Led automation initiatives at the organizational level.",
      "exp.baufest.b2": "Designed reusable frameworks for multiple projects.",
      "exp.baufest.b3": "Ran performance tests with JMeter.",
      "exp.baufest.b4": "Trained teams on test automation.",
      "exp.practia.period": "Jan 2019 – Feb 2020",
      "exp.practia.b1": "Developed automation for web, mobile, desktop and APIs.",
      "exp.practia.b2": "Increased automated test coverage.",
      "exp.practia.b3": "Optimized testing processes, reducing manual effort.",
      "exp.trans.period": "Mar 2017 – Nov 2018",
      "exp.trans.b1": "Designed and implemented an automation framework from scratch.",
      "exp.trans.b2": "Implemented Continuous Testing practices.",
      "exp.trans.b3": "Led a QA team focused on automation.",
      "exp.trans.b4": "Defined functional and non-functional tests.",

      "rec.eyebrow": "Recognition",
      "rec.title": "Highlights",
      "rec.crack.text": "Recognition for outstanding performance during the quarter.",
      "rec.embedex.text": "Recognition for outstanding performance within the team.",

      "edu.eyebrow": "Education",
      "edu.title": "Education & Certifications",
      "edu.tecsup1": "Networks and Data Communications.",
      "edu.tecsup2": "Oracle Database 11g: SQL Fundamentals I.",
      "edu.purdue": "UML & Mobile Application Development.",
      "edu.certiprof": "SCRUM Foundation Professional Certificate.",

      "proj.eyebrow": "Projects",
      "proj.title": "Projects & Demos",
      "proj.bpuzzle.tag": "Mobile app · Personal",
      "proj.bpuzzle.text": "Personal project: a mobile puzzle application built with React Native, Expo and TypeScript.",
      "proj.e2e.title": "E2E Automation Framework",
      "proj.e2e.text": "Demonstration end-to-end automation project: project structure, page objects and test execution against a sample site.",
      "proj.api.title": "API Automation",
      "proj.api.text": "Demonstration API testing project with Karate DSL and Postman: contract validation, status codes and business flows against a sample service.",
      "proj.mobile.title": "Mobile Automation",
      "proj.mobile.text": "Demonstration automated testing project for mobile applications with Appium, covering the main flows of a sample app.",
      "proj.performance.title": "Performance Testing",
      "proj.performance.text": "Demonstration load and performance testing project with JMeter against a sample service, measuring response times and stability.",
      "proj.soon": "Coming soon",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk",
      "contact.sub": "Available for opportunities as a Senior QA Automation Engineer.",
      "contact.whatsapp": "WhatsApp",
      "contact.copy": "Copy email",
      "contact.copied": "Email copied!",

      "footer.top": "Back to top ↑"
    }
  };

  function t(key) {
    var dict = I18N[currentLang] || I18N.es;
    return dict[key] || key;
  }

  /* ========================================================================
     Idioma
     ======================================================================== */
  function getUrlLang() {
    try {
      var param = new URLSearchParams(window.location.search).get("lang");
      if (param) {
        param = param.toLowerCase().slice(0, 2);
        if (param === "es" || param === "en") return param;
      }
    } catch (e) { /* noop */ }
    return null;
  }

  function getPreferredLang() {
    var fromUrl = getUrlLang();
    if (fromUrl) return fromUrl;
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { saved = null; }
    if (saved === "es" || saved === "en") return saved;
    return (navigator.language || "es").toLowerCase().indexOf("en") === 0 ? "en" : "es";
  }

  function updateUrlLang(lang) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) { /* noop */ }
  }

  function applyLang(lang, persist) {
    currentLang = I18N[lang] ? lang : "es";
    var dict = I18N[currentLang];
    root.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (typeof value === "string") el.textContent = value;
    });

    if (dict["doc.title"]) document.title = dict["doc.title"];

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    var toTop = document.getElementById("toTop");
    if (toTop) toTop.setAttribute("aria-label", currentLang === "en" ? "Back to top" : "Volver arriba");

    if (persist) {
      try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) { /* noop */ }
      updateUrlLang(currentLang);
    }
    updateThemeLabel();
  }

  applyLang(getPreferredLang(), false);

  document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang"), true); });
  });

  /* ========================================================================
     Tema
     ======================================================================== */
  function getPreferredTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { saved = null; }
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function updateThemeLabel() {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;
    var isDark = root.getAttribute("data-theme") === "dark";
    var isEn = currentLang === "en";
    var label = isDark
      ? (isEn ? "Switch to light mode" : "Cambiar a modo claro")
      : (isEn ? "Switch to dark mode" : "Cambiar a modo oscuro");
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  }

  function setTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (persist) { try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* noop */ } }
    updateThemeLabel();
  }

  setTheme(getPreferredTheme(), false);

  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
    });
  }

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function (e) {
      var saved = null;
      try { saved = localStorage.getItem(THEME_KEY); } catch (err) { saved = null; }
      if (!saved) setTheme(e.matches ? "light" : "dark", false);
    });
  }

  /* ========================================================================
     Menu movil
     ======================================================================== */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", currentLang === "en" ? "Open menu" : "Abrir menú");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      var isEn = currentLang === "en";
      navToggle.setAttribute("aria-label", open ? (isEn ? "Close menu" : "Cerrar menú") : (isEn ? "Open menu" : "Abrir menú"));
    });
    navMenu.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  /* ========================================================================
     Scroll: progreso, header compacto, enlace activo, volver arriba
     ======================================================================== */
  var header = document.querySelector(".site-header");
  var progressBar = document.getElementById("progressBar");
  var toTop = document.getElementById("toTop");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__menu a[href^="#"]'));

  function updateActiveLink() {
    var pos = window.scrollY + 130;
    var currentId = "";
    sections.forEach(function (sec) { if (sec.offsetTop <= pos) currentId = sec.id; });
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + currentId);
    });
  }

  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + "%";

    if (header) header.classList.toggle("is-scrolled", scrollTop > 8);
    if (toTop) toTop.classList.toggle("is-visible", scrollTop > 500);

    updateActiveLink();
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ========================================================================
     Imprimir / Guardar PDF
     ======================================================================== */
  ["printBtn", "printBtn2"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", function () { window.print(); });
  });

  /* ========================================================================
     Copiar email + toast
     ======================================================================== */
  var copyBtn = document.getElementById("copyEmail");
  var toast = document.getElementById("toast");
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2200);
  }

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (e) { /* noop */ }
    document.body.removeChild(area);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      function done() {
        showToast(t("contact.copied"));
        var label = copyBtn.querySelector("span[data-i18n]");
        if (label) {
          var original = t("contact.copy");
          label.textContent = t("contact.copied");
          setTimeout(function () { if (label) label.textContent = original; }, 2200);
        }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(EMAIL).then(done, function () { fallbackCopy(EMAIL); done(); });
      } else {
        fallbackCopy(EMAIL);
        done();
      }
    });
  }

  /* ========================================================================
     Reveal on scroll
     ======================================================================== */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ========================================================================
     Ano en el footer
     ======================================================================== */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
