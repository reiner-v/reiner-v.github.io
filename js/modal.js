export function openModal(){
    const modal = document.getElementById('modal-project');
    const modalBody = modal.querySelector('.modal__body');

    // modalBody.innerHTML=content;
    modal.showModal();
    
}
const closeBtns = document.querySelectorAll(".modal__close");
closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = btn.closest('dialog'); 
        if (modal) {
            modal.close();
        }
    });
});



// Function to initialize swiper functionality
export function initializeSwiper(totalImages) {
    let currentIndex = 0;

    const showImage = (index) => {
        const images = document.querySelectorAll(".swiper__image");
        const dots = document.querySelectorAll(".swiper__dot");
        
        // Hide all images
        images.forEach(img => img.style.display = "none");
           console.warn(images);
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
    const prevBtn = document.querySelector(".swiper__prev");
    const nextBtn = document.querySelector(".swiper__next");
    const dots = document.querySelectorAll(".swiper__dot");
    
    if (prevBtn) prevBtn.addEventListener("click", prevImage);
    if (nextBtn) nextBtn.addEventListener("click", nextImage);
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showImage(index));
    });
    
    // // Keyboard navigation
    // const handleKeyDown = (e) => {
    //     if (document.querySelector("modal").style.display === "flex") {
    //         if (e.key === "ArrowLeft") prevImage();
    //         if (e.key === "ArrowRight") nextImage();
    //     }
    // };
    
    // document.addEventListener("keydown", handleKeyDown);
    
    // // Touch/swipe support for mobile
    // let startX = 0;
    // let endX = 0;
    
    // const imageContainer = document.querySelector(".swiper__images");
    
    // if (imageContainer) {
    //     imageContainer.addEventListener("touchstart", (e) => {
    //         startX = e.touches[0].clientX;
    //     });
        
    //     imageContainer.addEventListener("touchend", (e) => {
    //         endX = e.changedTouches[0].clientX;
    //         const diff = startX - endX;
            
    //         if (Math.abs(diff) > 50) { // Minimum swipe distance
    //             if (diff > 0) {
    //                 nextImage();
    //             } else {
    //                 prevImage();
    //             }
    //         }
    //     });
    // }
}

function enlargeModal(){
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("enlarge-image")) {
            const zoomModal = document.querySelector("#modal-zoom");
            const zoomImg = zoomModal.querySelector("img");

            zoomImg.src = e.target.src;
            zoomImg.alt = e.target.alt;


            zoomModal.showModal();
        }
    });
}
document.addEventListener('DOMContentLoaded', enlargeModal);





