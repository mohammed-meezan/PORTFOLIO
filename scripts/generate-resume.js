const fs = require('fs');
const path = require('path');

// We can build a clean, valid PDF standard document
function buildPDF() {
  const content = [
    "%PDF-1.4",
    "1 0 obj << /Title (Mohammed Meezan Afzal - Resume) /Author (Mohammed Meezan Afzal) /Creator (MERN Stack Developer Portfolio) >> endobj",
    "2 0 obj << /Type /Catalog /Pages 3 0 R >> endobj",
    "3 0 obj << /Type /Pages /Kids [4 0 R] /Count 1 >> endobj",
    "4 0 obj << /Type /Page /Parent 3 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> /Contents 8 0 R >> endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj",
    "6 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    "7 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >> endobj",
  ];

  // PDF Text stream
  let streamText = `BT
/F1 18 Tf
50 755 Td
(Mohammed Meezan Afzal) Tj
0 -16 Td
/F1 11 Tf
(MERN Stack Developer) Tj
0 -14 Td
/F2 9.5 Tf
(Mysore, India  |  8095138674  |  mohammedmeezanafzal@gmail.com) Tj
0 -13 Td
(GitHub: github.com/meezan-afzal  |  LinkedIn: linkedin.com/in/mohammed-meezan-afzal) Tj

0 -20 Td
/F1 11 Tf
(PROFESSIONAL SUMMARY) Tj
0 -4 Td
0 0 Td
/F2 8.5 Tf
0 -10 Td
(Motivated BCA graduate and MERN Stack Developer with internship experience in full-stack web development.) Tj
0 -11 Td
(Skilled in React.js, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM, REST APIs, Tailwind CSS,) Tj
0 -11 Td
(Docker and Git. Experienced in developing responsive user interfaces, secure backend services, database-driven) Tj
0 -11 Td
(applications and API integrations. Passionate about building scalable, maintainable and user-focused web apps.) Tj

0 -16 Td
/F1 11 Tf
(TECHNICAL SKILLS) Tj
0 -12 Td
/F1 8.5 Tf
(Languages & Frontend: ) Tj
/F2 8.5 Tf
(JavaScript, HTML5, CSS3, React.js, Tailwind CSS) Tj
0 -11 Td
/F1 8.5 Tf
(Backend & APIs: ) Tj
/F2 8.5 Tf
(Node.js, Express.js, REST APIs) Tj
0 -11 Td
/F1 8.5 Tf
(Databases & ORM: ) Tj
/F2 8.5 Tf
(MongoDB, PostgreSQL, Prisma ORM) Tj
0 -11 Td
/F1 8.5 Tf
(Tools & Platforms: ) Tj
/F2 8.5 Tf
(Git, GitHub, Docker, Clerk Authentication, Cloudinary, Twilio API) Tj

0 -16 Td
/F1 11 Tf
(EXPERIENCE) Tj
0 -12 Td
/F1 9 Tf
(Intern, Full-Stack Web Development) Tj
/F2 9 Tf
(  -  Ethnotech Academy) Tj
0 -11 Td
/F2 8 Tf
(\\225 Developed and maintained REST APIs and responsive user interfaces as part of full-stack web development tasks.) Tj
0 -10 Td
(\\225 Collaborated using Git version control workflows in a team-based software development environment.) Tj
0 -10 Td
(\\225 Developed responsive user interfaces using React.js, JavaScript, HTML5, CSS3 and Tailwind CSS.) Tj
0 -10 Td
(\\225 Built and integrated REST APIs using Node.js and Express.js with database backend services.) Tj
0 -10 Td
(\\225 Gained practical experience in software development, debugging, API integration and responsive design.) Tj

0 -15 Td
/F1 11 Tf
(PROJECTS) Tj
0 -12 Td
/F1 9 Tf
(MediLite - Healthcare Record Management System) Tj
0 -11 Td
/F2 8 Tf
(\\225 Developed full-stack healthcare management platform using React.js, Node.js, Express.js, PostgreSQL & Prisma ORM.) Tj
0 -10 Td
(\\225 Implemented role-based authentication and authorization using Clerk for Patients, Doctors and Administrators.) Tj
0 -10 Td
(\\225 Built centralized medical record management functionality with Cloudinary secure document storage.) Tj
0 -10 Td
(\\225 Implemented QR-based temporary profile access to provide controlled emergency access to patient info.) Tj
0 -10 Td
(\\225 Integrated Twilio SMS API to automate medicine reminders and improve patient engagement.) Tj
0 -10 Td
(\\225 Containerized application using Docker to simplify development, testing and deployment.) Tj

0 -15 Td
/F1 11 Tf
(EDUCATION) Tj
0 -12 Td
/F1 8.5 Tf
(Bachelor of Computer Applications (BCA)) Tj
/F2 8.5 Tf
(  -  MIT Degree College, Mysore  |  CGPA: 7.9  (2023 - 2026)) Tj
0 -11 Td
/F1 8.5 Tf
(Pre-University Education (PUC)) Tj
/F2 8.5 Tf
(  -  Sarada Vilas College  |  Percentage: 76%  (2021 - 2023)) Tj

0 -15 Td
/F1 11 Tf
(CERTIFICATIONS) Tj
0 -12 Td
/F2 8 Tf
(\\225 Internship Completion Certificate - Ethnotech Academy) Tj
0 -10 Td
(\\225 Meta Frontend Development Certificate - Coursera) Tj
0 -10 Td
(\\225 Git & GitHub Certificate - Coursera) Tj
0 -10 Td
(\\225 TypeScript Certificate - Coursera) Tj
ET`;

  const streamLength = Buffer.byteLength(streamText, 'utf-8');
  content.push(`8 0 obj << /Length ${streamLength} >> stream\n${streamText}\nendstream endobj`);

  let offset = 0;
  const xref = ["xref", "0 9", "0000000000 65535 f "];
  
  let fullPdf = "";
  for (let i = 0; i < content.length; i++) {
    xref.push((offset.toString().padStart(10, '0')) + " 00000 n ");
    offset += Buffer.byteLength(content[i] + "\n", 'utf-8');
    fullPdf += content[i] + "\n";
  }

  const startxref = Buffer.byteLength(fullPdf, 'utf-8');
  const trailer = `trailer << /Size 9 /Root 2 0 R /Info 1 0 R >>\nstartxref\n${startxref}\n%%EOF`;
  fullPdf += xref.join("\n") + "\n" + trailer;

  return fullPdf;
}

const targetPath = path.join(__dirname, '..', 'public', 'resume', 'Mohammed_Meezan_Afzal_Resume.pdf');
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, buildPDF());
console.log("Generated resume PDF at:", targetPath);
