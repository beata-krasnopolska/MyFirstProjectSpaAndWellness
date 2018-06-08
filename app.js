/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, JSLINT, brackets */
document.addEventListener("DOMContentLoaded", function() {
    
   const nestedMenu = document.querySelector(".nested-menu");
    
    const menuTriggerEl = document.querySelector(".trigger-el");
    
    menuTriggerEl.addEventListener("mouseover", function() {
        nestedMenu.style.display = "block";        
    });
    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";        
    });
    
// Read More - Less
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");
       
    function showHideText() {
        const siblingText = this.previousElementSibling;
        if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        }
    }
   
    for(let i = 0; i < readMoreLessBtns.length; i++){
        readMoreLessBtns[i].addEventListener("click", showHideText);
    }
    
// Newsletter
    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".newsletter-info");
    
    newsletterBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formInfo.style.display = "block";
        
        if (input.value !== ""){
            formInfo.textContent = "Zapisano do newslettera";
            input.value = "";
        } else {
            formInfo.textContent = "Pole nie może być puste";
        }
    });
    
    
    
});