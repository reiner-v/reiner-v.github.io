// Your existing projects data
const projects = {
     "project-7":{
        title: "iNeed Parking Application",
        description:"This Project's objective is to monitor and track the air quality within the cabuyao using a device and web application. It contains various sensors like DHT, MQ Series and gps module.",
        tools:[ "Android Studio", "Visual Studio Code","MongoDB"],
        images:["assets/Image/Project-Image/project-7/1.png","assets/Image/Project-Image/project-7/2.png","assets/Image/Project-Image/project-7/3.png","assets/Image/Project-Image/project-7/5-1.png","assets/Image/Project-Image/project-7/5-2.png","assets/Image/Project-Image/project-7/5-3.png"]
    },
    "project-6":{
        title: "IOT BASED AIR QUALIT MONITORING SYSTEM",
        description:"This Project's objective is to monitor and track the air quality within the cabuyao using a device and web application. It contains various sensors like DHT, MQ Series and gps module.",
        tools:[ "Arduino IDE", "Visual Studio Code", ],
        images:["assets/Image/Project-Image/project-6/0.png","assets/Image/Project-Image/project-6/1.png","assets/Image/Project-Image/project-6/2.png","assets/Image/Project-Image/project-6/3.png","assets/Image/Project-Image/project-6/4.png","assets/Image/Project-Image/project-6/5.png","assets/Image/Project-Image/project-6/6.png"]
    },
    "project-5":{
        title: "SMART ACCESS CONTROL AND MONITORING SYSTEM",
        description:"This project incorporates an RFID sensor and key to authenticate authorized persons within an establishment. When an authorized UID is scanned by the RFID, a green light will turn on. If the sensor detects an unauthorized attempt, a red light will turn on, and the alarm system will engage.",
        tools:["Visual Studio Community","xampp","PhpMyAdmin","ArduinoIDE"],
        images:["assets/Image/Project-Image/project-5/0.png","assets/Image/Project-Image/project-5/1.png","assets/Image/Project-Image/project-5/2.png","assets/Image/Project-Image/project-5/3.png","assets/Image/Project-Image/project-5/4.png","assets/Image/Project-Image/project-5/5.png"]
    },
    "project-4":{
        title: "LIGHT MOTION SENSOR WITH MANUAL OVERRIDE",
        description:"This project aims to assist in illuminating areas automatically or manually based on the user's preference and records data each time the LDR detects a change in light levels.",
        tools:["Visual Studio Community","xampp","PhpMyAdmin","ArduinoIDE"],
        images:["assets/Image/Project-Image/project-4/1.png","assets/Image/Project-Image/project-4/2.png"]
    },
    "project-3":{
        title: "LEHITIMO: Get that Salary",
        description:"This Project will allow the admin to create and update the employees information including name, roles, salary and such. They will be also to search for a specific employee also delete an employee.",
        tools:["Visual Studio Community","xampp","PhpMyAdmin"],
        images:["assets/Image/Project-Image/project-3/1.png","assets/Image/Project-Image/project-3/2.png","assets/Image/Project-Image/project-3/3.png","assets/Image/Project-Image/project-3/4.png","assets/Image/Project-Image/project-3/5.png","assets/Image/Project-Image/project-3/6.png","assets/Image/Project-Image/project-3/7.png","assets/Image/Project-Image/project-3/8.png","assets/Image/Project-Image/project-3/9.png"]
    },
    "project-2":{
        title: "RENTALIGHT: ONLINE RESERVATION",
        description:"This Online Application and Reservation System simplifies finding and booking properties. Clients can easily register, find properties, make reservations, manage cancellations, and track their booking status.",
        tools:["Visual Studio Community","SQL Database"],
        images:["assets/Image/Project-Image/project-2/1.png","assets/Image/Project-Image/project-2/2.png","assets/Image/Project-Image/project-2/3.png"]
    },
    "project-1":{
        title: "ABC COMPANY: MANAGE EMPLOYEE",
        description:"This system offers streamlined employee management, covering everything from adding and updating employee details, managing payroll and positions, to organizing departments.",
        tools:["PyCharm"],
        images:["assets/Image/Project-Image/project-1/1.png","assets/Image/Project-Image/project-1/2.png","assets/Image/Project-Image/project-1/3.png","assets/Image/Project-Image/project-1/4.png","assets/Image/Project-Image/project-1/5.png","assets/Image/Project-Image/project-1/6.png"]
    },
     "project-0":{
        title: "Jumble Word Game: A Happy Place",
        description:"This Game Project is developed on the platform of windows form. It has a leaderboard and creation of player by inputting a name to continue to play. Each level will increase the difficulty as the word gets longer.",
        tools:["Visual Studio Community"],
        images:["assets/Image/Project-Image/project-0/0.png","assets/Image/Project-Image/project-0/1.png","assets/Image/Project-Image/project-0/2.png"]
    },
};


// Function to populate project cards
function populateProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Check if the projects grid exists
    if (!projectsGrid) {
        console.error('Projects grid container not found. Make sure you have an element with class "projects-grid" in your HTML.');
        return;
    }
    
    projectsGrid.innerHTML = ''; // Clear existing content

    const currentPage = window.location.pathname;
    let limit;
    const projectsArray = Object.entries(projects);

    const projectPad = document.getElementById("projects");
    const mediaQuery = window.matchMedia('(max-width: 480px)')
    //determine the limit of the card display
    if (!currentPage.includes("projects.html")){
        limit = 6;
        projectPad.style.padding = "5rem 2rem";
        if(mediaQuery.matches){
            projectPad.style.padding = "0";
        }
    }else if(currentPage.includes("projects.html")){
        limit = projects.length;
        projectPad.style.padding = "1rem";
    }

    const displayProjects = projectsArray.slice(0, limit);
    // Loop through projects and create cards
    displayProjects.forEach(([projectKey,project]) => {
                // Create project card HTML
                const projectCard = document.createElement('article');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="${project.images[0]}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="project-image-placeholder" style="display: none;"></div>
                    </div>
                    <div class="project-description">
                        <h3>${project.title}</h3>
                        <p>${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
                        <hr>
                        <p><b>SOFTWARE TOOLS:</b></p>
                        <ul>${project.tools.map(tool => `<li>${tool}</li>`).join('')}</ul>
                    </div>
                    <button id="${projectKey}" class="project-button">View Project</button>
                `;
                
                projectsGrid.appendChild(projectCard);
            });
   
    // Re-attach event listeners after creating new buttons
    attachProjectButtonListeners();
}

// Function to attach event listeners to view project buttons
function attachProjectButtonListeners() {
    const projectButtons = document.querySelectorAll(".project-button");
    
    projectButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectIndex = button.id;
            const project = projects[projectIndex];
            
            // Update modal content
            document.getElementById("project-title").textContent = project.title;
            document.getElementById("project-desc").textContent = project.description;
            
            // Update tools list
            const project_tools = document.getElementById("project-tools");
            project_tools.innerHTML = "";
            project.tools.forEach(tool => {
                const li = document.createElement("li");
                li.textContent = tool;
                project_tools.appendChild(li);
            });
            
            // Update images in modal with swiper
            const project_images = document.getElementById("project-images");
            project_images.innerHTML = "";
            
            if (project.images.length > 0) {
                // Create swiper container
                const swiperContainer = document.createElement("div");
                swiperContainer.className = "image-swiper";
                
                // Create image container
                const imageContainer = document.createElement("div");
                imageContainer.className = "swiper-images";
                
                // Add all images
                project.images.forEach((imageSrc, index) => {
                    const img = document.createElement("img");
                    img.src = imageSrc;
                    img.alt = project.title;
                    img.className = "swiper-image";
                    img.style.display = index === 0 ? "block" : "none";
                    
                    // Add error handling for broken images
                    img.onerror = function() {
                        this.style.display = "none";
                    };
                    
                    imageContainer.appendChild(img);
                });
                
                // Create navigation buttons
                const prevBtn = document.createElement("button");
                prevBtn.className = "swiper-btn swiper-prev";
                prevBtn.innerHTML = "&#8249;"; // Left arrow
                
                const nextBtn = document.createElement("button");
                nextBtn.className = "swiper-btn swiper-next";
                nextBtn.innerHTML = "&#8250;"; // Right arrow
                
                // Create dots indicator
                const dotsContainer = document.createElement("div");
                dotsContainer.className = "swiper-dots";
                
                project.images.forEach((_, index) => {
                    const dot = document.createElement("span");
                    dot.className = `swiper-dot ${index === 0 ? "active" : ""}`;
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
                
                project_images.appendChild(swiperContainer);
                
                // Initialize swiper functionality
                initializeSwiper(project.images.length);
            }
            
            // Show modal
            document.getElementById("project-modal").style.display = "flex";
        });
    });
}


// Function to initialize swiper functionality
function initializeSwiper(totalImages) {
    let currentIndex = 0;
    
    const showImage = (index) => {
        const images = document.querySelectorAll(".swiper-image");
        const dots = document.querySelectorAll(".swiper-dot");
        
        // Hide all images
        images.forEach(img => img.style.display = "none");
        
        // Show current image
        if (images[index]) {
            images[index].style.display = "block";
        }
        
        // Update dots
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) {
            dots[index].classList.add("active");
        }
        
        currentIndex = index;
    };
    
    const nextImage = () => {
        const newIndex = (currentIndex + 1) % totalImages;
        showImage(newIndex);
    };
    
    const prevImage = () => {
        const newIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(newIndex);
    };
    
    // Attach event listeners
    const prevBtn = document.querySelector(".swiper-prev");
    const nextBtn = document.querySelector(".swiper-next");
    const dots = document.querySelectorAll(".swiper-dot");
    
    if (prevBtn) prevBtn.addEventListener("click", prevImage);
    if (nextBtn) nextBtn.addEventListener("click", nextImage);
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showImage(index));
    });
    
    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (document.getElementById("project-modal").style.display === "flex") {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    const imageContainer = document.querySelector(".swiper-images");
    
    if (imageContainer) {
        imageContainer.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
        
        imageContainer.addEventListener("touchend", (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    nextImage();
                } else {
                    prevImage();
                }
            }
        });
    }
}

//About Me Layer Project
function profileImageControl(){
    const profile_card = document.getElementsByClassName("card-float")[0];
    const goal_card = document.getElementsByClassName("card-float")[1];
    const interest_card = document.getElementsByClassName("card-float")[2];

    const inital_image =  document.querySelectorAll(".display-block");
    const hidden_image = document.querySelectorAll(".display-none");

    const goal_img_1 = document.getElementsByClassName("img-layer")[6];
    const goal_img_2 = document.getElementsByClassName("img-layer")[7];

    const interest_img = document.getElementsByClassName("img-layer")[8];

    profile_card.addEventListener("mouseenter",function(){
        inital_image.forEach(element => {
            element.classList.remove("display-block");
            element.classList.add("display-none");
        });
        hidden_image.forEach(element => 
        {
            element.classList.remove("display-none");
            element.classList.add("display-block");
        });

    });

    profile_card.addEventListener("mouseleave",function(){
        inital_image.forEach(element => {
            element.classList.remove("display-none");
            element.classList.add("display-block");
        });
        hidden_image.forEach(element => 
        {
            element.classList.remove("display-block");
            element.classList.add("display-none");
        });
    });

    goal_card.addEventListener("mouseenter",function(){
        goal_img_1.classList.add("transform-scale");
        goal_img_2.classList.add("transform-scale");
    });
    goal_card.addEventListener("mouseleave",function(){
        goal_img_1.classList.remove("transform-scale");
        goal_img_2.classList.remove("transform-scale");
    });

    interest_card.addEventListener("mouseenter",function(){
        interest_img.classList.add("transform-scale");
    });
    interest_card.addEventListener("mouseleave",function(){
        interest_img.classList.remove("transform-scale");
    });
}

//Skill & Certi
function enlargeImgModal(){
    const certificateList = document.getElementsByClassName('certificates-list')[0];
    const certificateItems = certificateList.querySelectorAll('li');
    const enlargeImg = document.getElementById("enlarge-img" );

    certificateItems.forEach(item => {
        item.addEventListener('click',()=>{
            enlargeModal.style.display='block';
            enlargeImg.src= item.querySelector('img').src;
        });
    });
}

 
// Modal close functionality
const span = document.querySelectorAll(".close");
const projectModal = document.getElementById("project-modal");
const enlargeModal = document.getElementById('enlarge-modal');


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close')) {
        projectModal.style.display = "none";
        enlargeModal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == projectModal) {
        projectModal.style.display = "none";
    }
    else if(event.target == enlargeModal){
         enlargeModal.style.display = "none";
    }
}



// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateProjectCards();
    profileImageControl();
    enlargeImgModal();
});

