//Scrolling script

let scrollButton = document.getElementById('contact-arrow');

function scrollToForm(){
    let contactScroll = document.getElementById('contact-form');
    contactScroll.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"});
};

scrollButton.addEventListener("click", scrollToForm);