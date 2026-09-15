import fs from "node:fs"
import path from "node:path"

const outputPath = path.resolve("public/resume.pdf")

// Helvetica / Helvetica-Bold AFM advance widths (per 1000 em) for ASCII 32-126.
const HELV = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584]
const HELB = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584]

function charWidth(ch, bold) {
  const code = ch.charCodeAt(0)
  if (code < 32 || code > 126) return 556
  return (bold ? HELB : HELV)[code - 32]
}

function measure(text, size, bold) {
  let w = 0
  for (const ch of text) w += charWidth(ch, bold)
  return (w * size) / 1000
}

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
}

const pageWidth = 595.28
const pageHeight = 841.89
const marginX = 44
const marginTop = 34
const marginBottom = 34
const contentRight = pageWidth - marginX

const LINK_COLOR = "0.09 0.30 0.80"
const RULE_COLOR = "0.70 0.74 0.80"
const MUTED_COLOR = "0.28 0.33 0.40"
const BODY_COLOR = "0.15 0.18 0.24"

const pages = [{ ops: [], annots: [] }]
let page = pages[0]
let cursorY = pageHeight - marginTop

function newPage() {
  pages.push({ ops: [], annots: [] })
  page = pages[pages.length - 1]
  cursorY = pageHeight - marginTop
}

function ensureSpace(height) {
  if (cursorY - height < marginBottom) newPage()
}

function drawText(text, x, y, size, bold, color = "0 0 0") {
  const font = bold ? "F2" : "F1"
  page.ops.push(
    `BT ${color} rg /${font} ${size} Tf 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${escapePdf(text)}) Tj ET`
  )
}

function drawRule(y) {
  page.ops.push(`0.6 w ${RULE_COLOR} RG ${marginX} ${y.toFixed(2)} m ${contentRight} ${y.toFixed(2)} l S`)
}

function addLink(x, y, width, size, url) {
  page.annots.push({ rect: [x, y - 2, x + width, y + size + 1], url })
}

function drawRow(segments, size, align, gapAfter) {
  ensureSpace(size + 4 + gapAfter)
  const y = cursorY - size
  const total = segments.reduce((sum, s) => sum + measure(s.text, size, s.bold), 0)
  let x = align === "center" ? (pageWidth - total) / 2 : marginX
  for (const seg of segments) {
    const w = measure(seg.text, size, seg.bold)
    const color = seg.url ? LINK_COLOR : seg.color || "0 0 0"
    drawText(seg.text, x, y, size, seg.bold, color)
    if (seg.url) addLink(x, y, w, size, seg.url)
    x += w
  }
  cursorY = y - 4 - gapAfter
}

function drawTitleWithDate(title, date, size, gapAfter) {
  ensureSpace(size + 4 + gapAfter)
  const y = cursorY - size
  drawText(title, marginX, y, size, true)
  const dateWidth = measure(date, size, true)
  drawText(date, contentRight - dateWidth, y, size, true)
  cursorY = y - 4 - gapAfter
}

function drawParagraph(text, size, bold, color, indent, gapAfter, bulletX) {
  const maxWidth = contentRight - (marginX + indent)
  const words = text.split(" ")
  let line = ""
  const lines = []
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (measure(next, size, bold) <= maxWidth) {
      line = next
    } else {
      if (line) lines.push(line)
      line = word
    }
  }
  if (line) lines.push(line)

  lines.forEach((ln, i) => {
    ensureSpace(size + 3)
    const y = cursorY - size
    if (i === 0 && bulletX !== undefined) {
      drawText("\u2022", bulletX, y, size, false, color)
    }
    drawText(ln, marginX + indent, y, size, bold, color)
    cursorY = y - 2
  })
  cursorY -= gapAfter
}

function sectionHeader(title) {
  ensureSpace(18)
  drawText(title, marginX, cursorY - 11, 11.5, true)
  cursorY -= 13
  drawRule(cursorY + 1)
  cursorY -= 6
}

// ---------- Content ----------

const GITHUB = "https://github.com/Hrishabhshah006"
const LINKEDIN = "https://linkedin.com/in/hrishabhshah"
const LEETCODE = "https://leetcode.com/u/Hrishabhshah006/"
const HACKERRANK = "https://www.hackerrank.com/profile/hrishabhshah006"
const REPO_PORTFOLIO = "https://github.com/Hrishabhshah006/Portfolio"
const REPO_ATTEND = "https://github.com/Hrishabhshah006/attendease"
const REPO_LIBRARY = "https://github.com/Hrishabhshah006/Library-Management-Backend-using-Spring-Boot"

// Header
drawRow([{ text: "HRISHABH SHAH", bold: true }], 20, "center", 2)
drawRow([{ text: "SOFTWARE ENGINEER  |  DEVOPS", color: MUTED_COLOR }], 10.5, "center", 4)

const sep = () => ({ text: "  |  ", color: MUTED_COLOR })
drawRow(
  [
    { text: "GitHub", url: GITHUB },
    sep(),
    { text: "LinkedIn", url: LINKEDIN },
    sep(),
    { text: "LeetCode", url: LEETCODE },
    sep(),
    { text: "HackerRank", url: HACKERRANK },
  ],
  9.5,
  "center",
  2
)
drawRow(
  [
    { text: "hrishabhshah006@gmail.com", url: "mailto:hrishabhshah006@gmail.com" },
    sep(),
    { text: "+91-60009-16848", color: MUTED_COLOR },
    sep(),
    { text: "+91-93655-51406", color: MUTED_COLOR },
  ],
  9.5,
  "center",
  6
)

drawParagraph(
  "Software Engineer at Siemens STSPL specializing in backend systems, DevOps automation, CI/CD, GitOps, and Kubernetes.",
  9.8,
  false,
  MUTED_COLOR,
  0,
  6
)

// Experience
sectionHeader("EXPERIENCE")

const experiences = [
  {
    title: "Software Engineer",
    company: "Siemens STSPL",
    date: "Aug 2025 - Present",
    bullets: [
      "Build and improve enterprise backend and platform engineering workflows with a focus on automation, reliability, and developer experience.",
      "Work with Kubernetes, GitOps, CI/CD, Helm, Docker, and cloud-native tooling to streamline software delivery and environment provisioning.",
      "Maintain and extend developer-portal/scaffolder automation and reusable delivery templates.",
    ],
  },
  {
    title: "Apprentice Technical",
    company: "Siemens STSPL",
    date: "Aug 2024 - Aug 2025",
    bullets: [
      "Built backend solutions during technical training and contributed to the SiLC demonstration project.",
      "Developed practical foundations in backend engineering, containerization, Kubernetes, GitOps, and CI/CD.",
    ],
  },
  {
    title: "Backend Development Intern",
    company: "Xopun Tech",
    date: "Jul 2023 - Sep 2023",
    bullets: [
      "Developed RESTful backend services with Spring Boot, implementing CRUD operations, authentication, and database integration.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "NIELIT",
    date: "Aug 2022 - Sep 2022",
    bullets: ["Worked with Python-based machine-learning algorithms and data-analysis techniques."],
  },
]

for (const exp of experiences) {
  drawTitleWithDate(exp.title, exp.date, 10.8, 1)
  drawParagraph(exp.company, 9.8, false, MUTED_COLOR, 0, 2)
  for (const bullet of exp.bullets) {
    drawParagraph(bullet, 9.6, false, BODY_COLOR, 14, 1, marginX + 4)
  }
  cursorY -= 1
}

// Education
sectionHeader("EDUCATION")
drawTitleWithDate("Assam Engineering College", "2020 - 2024", 10.8, 1)
drawParagraph("B.Tech, Computer Science & Engineering", 9.8, false, MUTED_COLOR, 0, 6)

// Projects
sectionHeader("PROJECTS")

const projects = [
  {
    title: "Cloud-Native Portfolio",
    stack: "React, TypeScript, Docker, Kubernetes, Helm, ArgoCD, FluxCD",
    description:
      "Production-style portfolio with GitHub Actions CI/CD, Trivy image scanning, GHCR publishing, Kubernetes manifests, Helm packaging, and GitOps delivery.",
    url: REPO_PORTFOLIO,
  },
  {
    title: "Attendance Management System",
    stack: "Angular, Spring Boot, TypeScript, Java, PostgreSQL",
    description:
      "Full-stack attendance tracking application with backend APIs, responsive UI, real-time updates, and reporting.",
    url: REPO_ATTEND,
  },
  {
    title: "Library Management System",
    stack: "Spring Boot, Java, MySQL, Spring Security",
    description:
      "Backend application for library operations with authentication, catalog management, secure CRUD APIs, and database integration.",
    url: REPO_LIBRARY,
  },
]

for (const project of projects) {
  drawRow(
    [
      { text: project.title, bold: true },
      { text: "   " },
      { text: "View on GitHub", url: project.url },
    ],
    10.4,
    "left",
    1
  )
  drawParagraph(project.stack, 9.4, false, MUTED_COLOR, 0, 1)
  drawParagraph(project.description, 9.6, false, BODY_COLOR, 0, 4)
}

// Skills (missing skills added: HTML, CSS, Git, Nginx, Trivy)
sectionHeader("SKILLS")

const skills = [
  ["Programming", "Python, JavaScript, TypeScript, Java, C/C++, SQL/MySQL"],
  ["Backend/Web", "Node.js, React.js, Angular, Spring Boot, REST APIs, HTML, CSS"],
  ["DevOps/Cloud", "Docker, Kubernetes, Helm, GitHub Actions, CI/CD, GitOps, ArgoCD, FluxCD, KubeVela, Nginx, Trivy"],
  ["Automation", "Ansible, Chef, Linux CLI, Git, SDLC"],
  ["Core", "DSA, OOP, System Design, Database Design, Testing"],
]

for (const [label, list] of skills) {
  ensureSpace(13)
  const yTop = cursorY - 9.6
  drawText("\u2022", marginX, yTop, 9.6, false, "0 0 0")
  const labelText = `${label}: `
  drawText(labelText, marginX + 10, yTop, 9.6, true)
  const labelWidth = measure(labelText, 9.6, true)
  const startX = marginX + 10 + labelWidth
  const hangX = marginX + 10
  const words = list.split(" ")
  let line = ""
  let firstLine = true
  const emit = (text, x) => drawText(text, x, cursorY - 9.6, 9.6, false, BODY_COLOR)
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    const max = (firstLine ? contentRight - startX : contentRight - hangX)
    if (measure(next, 9.6, false) <= max) {
      line = next
    } else {
      emit(line, firstLine ? startX : hangX)
      cursorY -= 11
      ensureSpace(12)
      firstLine = false
      line = word
    }
  }
  emit(line, firstLine ? startX : hangX)
  cursorY -= 12
}
cursorY -= 2

// Achievements
sectionHeader("ACHIEVEMENTS")
const achievements = [
  "Technical Head - Coding Club, Assam Engineering College.",
  "5-star HackerRank (Problem Solving) | 200+ LeetCode.",
  "2nd - Algosmash, Royal Global University | 3rd - Codewar, Assam Engineering College.",
  "GATE: 472 | Rank 3784 | CEE Rank 192.",
]
for (const item of achievements) {
  drawParagraph(item, 9.6, false, BODY_COLOR, 14, 1, marginX + 4)
}

// ---------- Assemble PDF ----------

const objects = []
const addObject = (content) => {
  objects.push(content)
  return objects.length
}

const fontRegular = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
const fontBold = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

const pagesObjId = objects.length + 1
addObject("__PAGES__")

const pageObjIds = []
for (const p of pages) {
  const stream = p.ops.join("\n")
  const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`)

  const annotIds = p.annots.map((a) =>
    addObject(
      `<< /Type /Annot /Subtype /Link /Rect [${a.rect.map((n) => n.toFixed(2)).join(" ")}] /Border [0 0 0] /H /N /A << /Type /Action /S /URI /URI (${escapePdf(a.url)}) >> >>`
    )
  )

  const annotsEntry = annotIds.length ? ` /Annots [${annotIds.map((id) => `${id} 0 R`).join(" ")}]` : ""
  const pageId = addObject(
    `<< /Type /Page /Parent ${pagesObjId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentId} 0 R${annotsEntry} >>`
  )
  pageObjIds.push(pageId)
}

objects[pagesObjId - 1] = `<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>`

const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesObjId} 0 R >>`)

let pdf = "%PDF-1.4\n"
const offsets = []
for (let i = 0; i < objects.length; i += 1) {
  offsets.push(Buffer.byteLength(pdf, "utf8"))
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`
}

const xrefOffset = Buffer.byteLength(pdf, "utf8")
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
for (const offset of offsets) {
  pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`

fs.writeFileSync(outputPath, Buffer.from(pdf, "utf8"))
console.log(`Generated ${outputPath} with ${pages.length} page(s) and clickable links.`)
