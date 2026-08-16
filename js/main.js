// CERTIFICATES RENDER
const certificatesContainer = document.getElementById("certificatesContainer");
let certificatesHTML = "";
certificates.forEach((cert) => {
  // SKILLS
  let certSkillsHTML = "";
  cert.skills.forEach((skill) => {
    certSkillsHTML += `
      <span>${skill}</span>
    `;
  });

  // CARD

  certificatesHTML += `
  
    <div class="cert-card">

      <div class="cert-mini">

        <i class="${cert.icon}"></i>

        <div>
          <h3>${cert.shortTitle}</h3>
          <p>${cert.shortText}</p>
        </div>

      </div>

      <div class="cert-content">

        <span class="cert-tag">
          ${cert.tag}
        </span>

        <h2>
          ${cert.title}
        </h2>

        <p>
          ${cert.description}
        </p>

        <div class="cert-skills">
          ${certSkillsHTML}
        </div>

        <div class="cert-actions">

          <a
            href="${cert.link}"
            target="_blank"
          >
            View Certificate
          </a>

        </div>

      </div>

    </div>

  `;
});
// FINAL RENDER
certificatesContainer.innerHTML = certificatesHTML;



// EXPERIENCE RENDER
const experienceContainer = document.getElementById("experienceContainer");
let experienceHTML = "";
experiences.forEach((exp) => {
  // SKILLS

  let expSkillsHTML = "";

  exp.skills.forEach((skill) => {
    expSkillsHTML += `
      <span>${skill}</span>
    `;
  });

  // PROJECTS

  let expProjectsHTML = "";

  exp.projects.forEach((project) => {
    expProjectsHTML += `
    
      <a href="#projects">
        ${project}
      </a>

    `;
  });

  // CARD

  experienceHTML += `
  
    <div class="experience-card">

      <div class="exp-mini">

        <i class="${exp.icon}"></i>

        <div>
          <h3>${exp.shortTitle}</h3>
          <p>${exp.shortText}</p>
        </div>

      </div>

      <div class="exp-content">

        <span class="exp-tag">
          ${exp.tag}
        </span>

        <h2>
          ${exp.title}
        </h2>

        <p>
          ${exp.description}
        </p>

        <div class="exp-skills">
          ${expSkillsHTML}
        </div>

        <div class="exp-projects">
          ${expProjectsHTML}
        </div>

      </div>

    </div>

  `;
});
// FINAL RENDER
experienceContainer.innerHTML = experienceHTML;



// EDUCATION RENDER
const educationContainer = document.getElementById("educationContainer");
let educationHTML = "";
education.forEach((edu, index) => {
  // CARD

  educationHTML += `
  
    <div class="edu-box">

      <div class="edu-top">

        <i class="${edu.icon}"></i>

        <span class="edu-mini">
          ${edu.shortTitle}
        </span>

      </div>

      <div class="edu-expand">

        <h2>
          ${edu.title}
        </h2>

        <h3>
          ${edu.institute}
        </h3>

        <h4>
          ${edu.board}
        </h4>

        <p>
          ${edu.description}
        </p>

        <span class="edu-duration">
          ${edu.duration}
        </span>

      </div>

    </div>

  `;

  // ARROW

  if (index !== education.length - 1) {
    educationHTML += `
    
      <div class="edu-arrow">

        <i class="ri-arrow-right-line"></i>

      </div>

    `;
  }
});
// FINAL RENDER
educationContainer.innerHTML = educationHTML;



// PROJECT ELEMENTS
const projectTitle = document.getElementById("projectTitle");
const projectType = document.getElementById("projectType");
const projectDescription = document.getElementById("projectDescription");
const projectRole = document.getElementById("projectRole");
const projectStatus = document.getElementById("projectStatus");
const projectPlatform = document.getElementById("projectPlatform");
const projectYear = document.getElementById("projectYear");
const projectTech = document.getElementById("projectTech");
const projectFeatures = document.getElementById("projectFeatures");

function updateProject(index) {
  const project = projects[index];

  // BASIC INFO
  projectTitle.textContent = project.title;
  projectType.textContent = project.type;
  projectDescription.textContent = project.description;
  projectRole.textContent = project.role;
  projectStatus.textContent = project.status;
  projectPlatform.textContent = project.platform;
  projectYear.textContent = project.year;

  // TECH STACK
  let techHTML = "";
  project.tech.forEach((tech) => {
    techHTML += `
      <span>${tech}</span>
    `;
  });
  projectTech.innerHTML = techHTML;

  // FEATURES
  let featuresHTML = "";
  project.features.forEach((feature) => {
    featuresHTML += `
        <li>${feature}</li>
      `;
  });
  projectFeatures.innerHTML = featuresHTML;
}
updateProject(0);
