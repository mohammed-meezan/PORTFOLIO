const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function generateResumePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter", // 612 x 792 pt
  });

  const leftMargin = 45;
  const rightMargin = 567; // 612 - 45
  const contentWidth = rightMargin - leftMargin;
  let y = 45;

  // Set line width
  doc.setLineWidth(0.75);
  doc.setDrawColor(50, 50, 50);

  // Header - Name
  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.setTextColor(20, 20, 20);
  doc.text("Mohammed Meezan Afzal", 306, y, { align: "center" });

  y += 16;
  doc.setFont("times", "normal");
  doc.setFontSize(11);
  doc.text("MERN Stack Developer", 306, y, { align: "center" });

  y += 14;
  doc.setFontSize(9.5);
  doc.text("Mysore, India  |  8095138674  |  mohammedmeezanafzal@gmail.com", 306, y, { align: "center" });

  y += 13;
  doc.setTextColor(0, 70, 150);
  doc.text("GitHub  |  LinkedIn", 306, y, { align: "center" });

  y += 18;

  // Helper function for Section Headers
  function drawSectionHeader(title) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0, 51, 102); // Deep navy blue
    doc.text(title.toUpperCase(), leftMargin, y);
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.line(leftMargin, y, rightMargin, y);
    y += 12;
  }

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(30, 30, 30);
  const summaryText = "Motivated BCA graduate and MERN Stack Developer with internship experience in full-stack web development. Skilled in React.js, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM, REST APIs, Tailwind CSS, Docker and Git. Experienced in developing responsive user interfaces, secure backend services, database-driven applications and API integrations. Passionate about building scalable, maintainable and user-focused web applications.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, leftMargin, y);
  y += splitSummary.length * 11.5 + 8;

  // 2. TECHNICAL SKILLS
  drawSectionHeader("Technical Skills");
  const skillsData = [
    { label: "Languages & Frontend", val: "JavaScript, HTML5, CSS3, React.js, Tailwind CSS" },
    { label: "Backend & APIs", val: "Node.js, Express.js, REST APIs" },
    { label: "Databases & ORM", val: "MongoDB, PostgreSQL, Prisma ORM" },
    { label: "Tools & Platforms", val: "Git, GitHub, Docker, Clerk Authentication, Cloudinary, Twilio API" },
  ];

  skillsData.forEach(item => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    doc.text(`${item.label} :`, leftMargin, y);

    doc.setFont("times", "normal");
    doc.setFontSize(9.5);
    doc.text(item.val, leftMargin + 130, y);
    y += 12;
  });
  y += 6;

  // 3. EXPERIENCE
  drawSectionHeader("Experience");
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("Intern, Full-Stack Web Development", leftMargin, y);
  doc.text("Ethnotech Academy", rightMargin, y, { align: "right" });
  y += 12;

  const expBullets = [
    "Developed and maintained REST APIs and responsive user interfaces as part of full-stack web development tasks.",
    "Collaborated using Git version control workflows in a team-based software development environment.",
    "Worked on full-stack web development using modern frontend and backend technologies.",
    "Developed responsive user interfaces using React.js, JavaScript, HTML5, CSS3 and Tailwind CSS.",
    "Built and integrated REST APIs using Node.js and Express.js.",
    "Worked with databases and backend services for data-driven web applications.",
    "Used Git and GitHub for version control, source code management and collaborative development workflows.",
    "Gained practical experience in software development, debugging, API integration and responsive application development."
  ];

  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  expBullets.forEach(bullet => {
    doc.text("•", leftMargin + 6, y);
    const splitBullet = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(splitBullet, leftMargin + 16, y);
    y += splitBullet.length * 10.5;
  });
  y += 6;

  // 4. PROJECTS
  drawSectionHeader("Projects");
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("MediLite \u2014 Healthcare Record Management System", leftMargin, y);
  y += 11;

  const projectBullets = [
    "Developed a full-stack healthcare record management platform using React.js, Node.js, Express.js, PostgreSQL and Prisma ORM.",
    "Implemented role-based authentication and authorization using Clerk for Patients, Doctors and Administrators.",
    "Built centralized medical record management functionality for secure digital storage and retrieval of healthcare information.",
    "Integrated Cloudinary for secure medical document and media storage.",
    "Implemented QR-based temporary profile access to provide controlled access to patient information.",
    "Integrated Twilio SMS API to automate medicine reminders and improve patient engagement.",
    "Designed responsive dashboards using Tailwind CSS for different user roles and workflows.",
    "Developed modular REST APIs and optimized database queries using Prisma ORM.",
    "Containerized the application using Docker to simplify development, testing and deployment."
  ];

  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  projectBullets.forEach(bullet => {
    doc.text("•", leftMargin + 6, y);
    const splitBullet = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(splitBullet, leftMargin + 16, y);
    y += splitBullet.length * 10.5;
  });

  y += 3;
  doc.setFont("times", "bold");
  doc.setFontSize(9);
  doc.text("Impact", leftMargin + 6, y);
  y += 10;

  const impactBullets = [
    "Improved medical record accessibility through centralized digital storage.",
    "Enhanced healthcare data security through authentication, authorization, and temporary QR-based access.",
    "Increased patient engagement using automated medicine reminder notifications.",
    "Built a scalable backend architecture with modular services and optimized database queries."
  ];

  doc.setFont("times", "normal");
  doc.setFontSize(8.5);
  impactBullets.forEach(bullet => {
    doc.text("•", leftMargin + 12, y);
    const splitBullet = doc.splitTextToSize(bullet, contentWidth - 24);
    doc.text(splitBullet, leftMargin + 20, y);
    y += splitBullet.length * 10;
  });
  y += 6;

  // 5. EDUCATION
  drawSectionHeader("Education");
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Bachelor of Computer Applications (BCA)", leftMargin, y);
  doc.text("MIT Degree College, Mysore", rightMargin, y, { align: "right" });
  y += 10;

  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("CGPA: 7.9", leftMargin, y);
  y += 11;

  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.text("Pre-University Education (PUC)", leftMargin, y);
  doc.text("Sarada Vilas College", rightMargin, y, { align: "right" });
  y += 10;

  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("Percentage: 76%", leftMargin, y);
  y += 12;

  // 6. CERTIFICATION
  drawSectionHeader("Certification");
  const certList = [
    "Internship Completion Certificate \u2013 Ethnotech Academy",
    "Meta Frontend Development Certificate \u2013 Coursera",
    "Git & GitHub Certificate \u2013 Coursera",
    "Typescript Certificate \u2013 Coursera"
  ];

  certList.forEach(cert => {
    doc.setFont("times", "bold");
    doc.setFontSize(9);
    doc.setTextColor(20, 20, 20);
    doc.text(cert, leftMargin, y);
    y += 9;

    doc.setFont("times", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(0, 70, 150);
    doc.text("View Certificate", leftMargin, y);
    y += 11;
  });

  const outputPath = path.join(__dirname, "..", "public", "resume", "Mohammed_Meezan_Afzal_Resume.pdf");
  const buffer = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outputPath, buffer);
  console.log("Successfully created exact resume at:", outputPath);
}

generateResumePDF();
