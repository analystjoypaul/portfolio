function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectOne = document.querySelector(".project-one");
const projectTwo = document.querySelector(".secondProject");
const projectThird = document.querySelector(".project-third");
const projectFour = document.querySelector(".fourProject");

projectOne.addEventListener("click", () => {
  location.href = "./pages/firstProject.html"
});
projectTwo.addEventListener("click", () => {
  location.href="./pages/secondProject.html"
});
projectThird.addEventListener("click", () => {
  location.href = "./pages/thirdProject.html"
});

projectFour.addEventListener("click", () => {
  location.href ="./pages/fourProject.html"
});

// Certificate carousel implementation
let certificateData = {
  certificate1: `<div class="details-container color-container w-[75%] certificate1">
    <div class="article-container ">
      <img style="width: 100%;" src="./assets/dataAnalystCertificate.jpeg" alt="Certificate 1" class="certificate-img" />
    </div>
    <h2 class="experience-sub-title project-title">IBM Proffessional Data Analyst Certificate</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn certificate-one">View Certificate</button>
    </div>
  </div>`,
  certificate2: `<div class="details-container color-container w-[75%] certificate1">
    <div class="article-container">
      <img style="width: 70%;" src="./assets/certificate2.jpg" alt="Certificate 2" class="certificate-img" />
    </div>
    <h2 class="experience-sub-title project-title">Machine Learning &  Nural Network Certificate</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn certificate-two" onclick="window.open('https://www.udemy.com/certificate/UC-f61f32f1-9383-4041-9fa5-cf8631874153/', '_blank')" >View Certificate</button>
    </div>
  </div>`,
  certificate3: `<div class="details-container color-container w-[70%] certificate1">
    <div class="article-container">
      <img style="width: 70%;" src="./assets/certificate3.png" alt="Certificate 3" class="certificate-img" />
    </div>
    <h2 class="experience-sub-title project-title">SQL(Basic) Certificate</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn certificate-three" onclick="window.open('https://www.hackerrank.com/certificates/ecf2f7c96680', '_blank')">View Certificate</button>
    </div>
  </div>`,

  certificate4: `<div class="details-container color-container w-[70%] certificate1">
    <div class="article-container">
      <img style="width: 70%;" src="./assets/dataAnalysisWithPython.png" alt="Certificate 3" class="certificate-img" />
    </div>
    <h2 class="experience-sub-title project-title">Data Analysis With Python</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn certificate-four" onclick="window.open('./assets/dataPython.pdf')">View Certificate</button>
    </div>
  </div>`,
  certificate5:`<div class="details-container color-container w-[70%] certificate1">
    <div class="article-container">
      <img style="width: 70%;" src="./assets/DatabaseCertificate.png" alt="Certificate 3" class="certificate-img" />
    </div>
    <h2 class="experience-sub-title project-title">Database and SQL for Data Science with Python</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn certificate-five"
      onclick="window.open('./assets/Databases and SQL for Data Science with Python.pdf')" 
      >View Certificate</button>
    </div>
  </div>`,
  certificate6:`<div class="details-container color-container w-[70%] certificate1">
  <div class="article-container">
    <img style="width: 70%;" src="./assets/excelCertificaate.png" alt="Certificate 3" class="certificate-img" />
  </div>
  <h2 class="experience-sub-title project-title">Excel Basics For Data Analysis</h2>
  <div class="btn-container">
    <button class="btn btn-color-2 project-btn certificate-six"  onclick="window.open('./assets/Excel Basics for Data Analysis.pdf')">View Certificate</button>
  </div>
</div>`,
};

const certificateContainer = document.querySelector(".certificateContainer");
const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");

// Convert certificateData object to array for easier cycling
const certificatesArray = Object.values(certificateData);
let currentIndex = 0;

// Function to update certificate display with animation
function updateCertificateDisplay(direction) {
  // Prepare the new certificate
  const newIndex = direction === 'right' 
    ? (currentIndex + 1) % certificatesArray.length 
    : (currentIndex - 1 + certificatesArray.length) % certificatesArray.length;

  // Create animation with GSAP
  const timeline = gsap.timeline();

  // Slide current certificate out
  timeline.to(certificateContainer, {
    opacity: 0,
    x: direction === 'right' ? -100 : 100,
    duration: 0.3,
    onComplete: () => {
      // Update content
      certificateContainer.innerHTML = certificatesArray[newIndex];
      // Update current index
      currentIndex = newIndex;
      
      // Reset position and fade in
      gsap.set(certificateContainer, { x: direction === 'right' ? 100 : -100 });
      gsap.to(certificateContainer, {
        opacity: 1,
        x: 0,
        duration: 0.3
      });
    }
  });
}

// Initialize first certificate
certificateContainer.innerHTML = certificatesArray[currentIndex];

// Add click event listeners
rightArrow.addEventListener("click", () => {
  updateCertificateDisplay('right');
});

leftArrow.addEventListener("click", () => {
  updateCertificateDisplay('left');
});

//certificate button event listeners
const certificateOne = document.querySelector(".certificate-one");




certificateOne.addEventListener("click", () => {
  window.open("https://www.coursera.org/account/accomplishments/specialization/FBLJW73Z4A9E", '_blank');  
});


// SERVICES SECTION
function showDetails(card) {
  card.querySelector(".service-overlay").style.top = "0";
  card.querySelector(".service-overlay").style.opacity = "1";
}

function hideDetails(card) {
  card.querySelector(".service-overlay").style.top = "100%";
  card.querySelector(".service-overlay").style.opacity = "0";
}

function contactMe() {
  window.location.href = "#contact";
}



// Get the screen width
var screenWidth = window.innerWidth;