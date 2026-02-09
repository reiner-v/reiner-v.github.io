import { openModal } from './modal.js';
import { initializeSwiper } from './modal.js';


const projects = {
    "project-5":{
        title: "PERSONAL WEB PORTFOLIO V2 (ONGOING)",
        description:"A clean modern and responsive portfolio added with creative graphic design. Built  using HTML, CSS and JavaScript.",
        tools:["Visual Studio Code", "HTML", "CSS", "Javascript"],
        images:["assets/projects/project-5/0.webp","assets/projects/project-5/1.webp","assets/projects/project-5/2.webp","assets/projects/project-5/3.webp","assets/projects/project-5/4.webp","assets/projects/project-5/5.webp"],
        github:"https://github.com/reiner-v/reiner-v.github.io.git",
        website:"https://reiner-v.github.io/"
    },
     "project-4":{
        title: "INEED PARKING APPLICATION",
        description:"Developed a full-stack parking management suite utilizing a RESTful API architecture to synchronize data across a Flutter mobile app and a C# web dashboard. Implemented automated user session control and secure payment workflows, while integrating SignalR for real-time chat communication. Leveraged MVC patterns and MongoDB to ensure a scalable, data-driven experience for both users and administrators.",
        tools:[ "Android Studio", "Visual Studio Code","MVC","SignalR","Flutter","Dart","C#","MongoDB"],
        images:["assets/projects/project-4/0.webp","assets/projects/project-4/1.webp","assets/projects/project-4/2.webp","assets/projects/project-4/3-1.webp","assets/projects/project-4/3-2.webp","assets/projects/project-4/3-3.webp"],
        github:"",
        website:""
    },
    "project-3":{
        title: "IOT BASED AIR QUALIT MONITORING SYSTEM",
        description:"Developed an interactive IoT web application to monitor real-time air quality across Cabuyao. Integrated data from hardware sensors (DHT, MQ Series, GPS) into a dynamic map interface, allowing users to track environmental metrics based on precise device locations. Built using a RESTful architecture and hosted on Hostinger, the system synchronizes C++ sensor data with a JavaScript frontend to provide instant, location-based insights.",
        tools:[ "Visual Studio Code","Arduino IDE","HTML","CSS","Javascript","C++","Php","SQL" ],
        images:["assets/projects/project-3/0.webp","assets/projects/project-3/1.webp","assets/projects/project-3/2.webp","assets/projects/project-3/3.webp","assets/projects/project-3/4.webp","assets/projects/project-3/5.webp","assets/projects/project-3/6.webp"],
        github:"",
        website:""
    },
    "project-2":{
        title: "SMART ACCESS CONTROL AND MONITORING SYSTEM",
        description:"Developed a mobile-integrated security system that authenticates personnel via RFID technology. Engineered a C# mobile application that interfaces with a MySQL database through a PHP API to validate credentials in real-time. The system features an automated hardware response for access control (LED/Alarm) and provides administrators with a mobile interface to monitor entry logs and manage authorized UIDs.",
        tools:["Visual Studio Community","XAMPP","Arduino IDE","C#","Xamarin","Php","MySQL"],
        images:["assets/projects/project-2/0.webp","assets/projects/project-2/1.webp","assets/projects/project-2/2.webp","assets/projects/project-2/3.webp","assets/projects/project-2/4.webp","assets/projects/project-2/5.webp"],
         github:"https://github.com/reiner-v/mobile-control-monitoring-system.git",
         website:""
    },
    "project-1":{
        title: "LEHITIMO: Get that Salary",
        description:"Developed a centralized administrative system for workforce management, featuring full CRUD functionality. Engineered a RESTful API using PHP to bridge the C# (Xamarin) interface with a MySQL database, allowing for secure real-time updates of employee profiles, roles, and salary data. This project highlights my ability to build scalable data structures and efficient search algorithms for business applications.",
        tools:["Visual Studio Community","XAMPP","Arduino IDE","C#","Xamarin","Php","MySQL"],
        images:["assets/projects/project-1/0.webp","assets/projects/project-1/1.webp","assets/projects/project-1/2.webp","assets/projects/project-1/3.webp","assets/projects/project-1/4.webp","assets/projects/project-1/5.webp","assets/projects/project-1/6.webp","assets/projects/project-1/7.webp","assets/projects/project-1/8.webp"],
         github:"https://github.com/reiner-v/simple-mobile-employee-management-system.git",
         website:""
    },
    "project-0":{
        title: "RENTALIGHT: ONLINE RESERVATION",
        description:"Developed a comprehensive web-based platform designed to streamline the property booking and reservation process. I engineered a robust backend using ASP.NET and C#, implementing full user lifecycle features—from secure registration and property filtering to reservation management and real-time status tracking. Utilizing a MySQL database, the system ensures data integrity for bookings, cancellations, and client information.",
        tools:["Visual Studio Community","C#","MySQL","ASP.NET"],
        images:["assets/projects/project-0/0.webp","assets/projects/project-0/1.webp","assets/projects/project-0/2.webp"],
         github:"",
         website:""
    }
};
// Function to populate project cards
function populateProjectCards() {
    const projectsGrid = document.querySelector('.projects__grid');
    
    if (!projectsGrid) {
        console.error('Projects grid container not found. Make sure you have an element with class "projects-grid" in your HTML.');
        return;
    }
    
    const projectsArray = Object.entries(projects);


    const displayProjects = projectsArray.slice(0, 6);
    displayProjects.forEach(([projectKey,project]) => {
                const projectCard = document.createElement('article');
                projectCard.className = 'projects__card';
                projectCard.innerHTML = `
                    <div class="projects__header">
                        <img class="projects__img" src="${project.images[0]}" alt="${project.title}">
                        <div class="projects__thumbnail hidden"></div>
                    </div>
                    <div class="projects__infos">
                        <h4 class="projects__title">${project.title}</h4>
                        <p class="projects__text">${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
                        <hr>
                        <p><strong>SOFTWARE TOOLS:</strong></p>
                        <ul class="projects__list">${project.tools.map(tool => `<li class="projects__item">${tool}</li>`).join('')}</ul>
                    </div>
                    <button id="${projectKey}" class="projects__view-btn">View Project</button>
                `;
                
                projectsGrid.appendChild(projectCard);
            });
   
    attachProjectDetails();
}

function attachProjectDetails(){
    const projectsBtn = document.querySelectorAll(".projects__view-btn");

    projectsBtn.forEach(button => {
            button.addEventListener("click", () => {
                const projectIndex = button.id;
                const project = projects[projectIndex];
                
                // Update modal content
                document.querySelector(".modal__title").textContent = project.title;
                document.querySelector(".modal__text").textContent = project.description;
                
                // Update tools list
                const projectTools = document.querySelector(".modal__list");
                projectTools.innerHTML = "";
                project.tools.forEach(tool => {
                    const li = document.createElement("li");
                    li.classList.add("projects__item");
                    li.textContent = tool;
                    projectTools.appendChild(li);
                });

                // const linkBtn = document.querySelector(".modal__links");
                const githubLink = document.querySelector(".link__github");
                const webLink = document.querySelector(".link__website");


                if (project.github == ""){
                    githubLink.classList.add("hidden");
                    githubLink.setAttribute('aria-disabled','true');
                }
                else{
                    githubLink.classList.remove("hidden");
                    githubLink.href=project.github;
                }

                if (project.website == ""){
                    webLink.classList.add("hidden");
                    webLink.setAttribute('aria-disabled','true');
                }
                else{
                    webLink.classList.remove("hidden");
                    webLink.href=project.website;
                }
                
                const projectImages = document.querySelector(".modal__media");
                projectImages.innerHTML = "";


                // Create swiper container
                const swiperContainer = document.createElement("div");
                swiperContainer.className = "image-swiper";
                
                // Create image container
                const imageContainer = document.createElement("div");
                imageContainer.className = "swiper__images";   
                            

                if (project.images.length > 0) {
                    project.images.forEach((imageSrc, index) => {
                        const img = document.createElement("img");
                        img.src = imageSrc;
                        img.alt = project.title;
                        img.className = "swiper__image modal__image enlarge-image";
                        img.style.display = index === 0 ? "block" : "none";

                        // Add error handling for broken images
                        img.onerror = function() {
                            this.style.display = "none";
                        };
                        
                        imageContainer.appendChild(img);
                    });
                // Create navigation buttons
                const prevBtn = document.createElement("button");
                prevBtn.className = "swiper__btn swiper__prev";
                prevBtn.innerHTML = "&#8249;"; // Left arrow
                
                const nextBtn = document.createElement("button");
                nextBtn.className = "swiper__btn swiper__next";
                nextBtn.innerHTML = "&#8250;"; // Right arrow
                
                // Create dots indicator
                const dotsContainer = document.createElement("div");
                dotsContainer.className = "swiper__dots";
                
                project.images.forEach((_, index) => {
                    const dot = document.createElement("span");
                    dot.className = `swiper__dot ${index === 0 ? "active" : ""}`;
                    dot.addEventListener("click", () => showImage(index));
                    dotsContainer.appendChild(dot);
                });
                
                // Assemble swiper
                swiperContainer.appendChild(imageContainer);
                if (project.images.length > 1) {
                    swiperContainer.appendChild(prevBtn);
                    swiperContainer.appendChild(nextBtn);
                    swiperContainer.appendChild(dotsContainer);
                }
                
                projectImages.appendChild(swiperContainer);
                
                // Initialize swiper functionality
                initializeSwiper(project.images.length);
                }
  

                openModal();
            });

        });
}




// populateProjectCards();
document.addEventListener('DOMContentLoaded', populateProjectCards);
