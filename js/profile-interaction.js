
//About Me Layer Project
function aboutSectionControl(){
    const profile_card   = document.getElementsByClassName("about__card")[0];
    const goal_card = document.getElementsByClassName("about__card")[1];
    const interest_card = document.getElementsByClassName("about__card")[2];

    const initial_layer =  document.querySelectorAll(".about__profile-layer.visible");
    const hidden_layer = document.querySelectorAll(".about__profile-layer.hidden");

    const tablet_layer3 = document.getElementsByClassName("about__profile-layer")[6];
    const laptop_layer4 = document.getElementsByClassName("about__profile-layer")[7];

    const interest_layer5 = document.getElementsByClassName("about__profile-layer")[8];

    /*Initial layer -- hide*/
    profile_card.addEventListener("mouseenter",function(){
        initial_layer.forEach(element => {
            element.classList.remove("visible");
            element.classList.add("hidden");
        });
        hidden_layer.forEach(element => 
        {
            element.classList.remove("hidden");
            element.classList.add("visible");
        });

    });

    /*Initial layer -- visible*/
    profile_card.addEventListener("mouseleave",function(){
        initial_layer.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("visible");
        });
        hidden_layer.forEach(element => 
        {
            element.classList.remove("visible");
            element.classList.add("hidden");
        });
    });

    goal_card.addEventListener("mouseenter",function(){
        tablet_layer3.classList.add("transform-scale");
        laptop_layer4.classList.add("transform-scale");
    });
    goal_card.addEventListener("mouseleave",function(){
        tablet_layer3.classList.remove("transform-scale");
        laptop_layer4.classList.remove("transform-scale");
    });

    interest_card.addEventListener("mouseenter",function(){
        interest_layer5.classList.add("transform-scale");
    });
    interest_card.addEventListener("mouseleave",function(){
        interest_layer5.classList.remove("transform-scale");
    });
}

aboutSectionControl();