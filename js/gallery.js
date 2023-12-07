function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    document.getElementById('header_img').innerHTML = previewPic.alt;
    document.getElementById('header_img').style.backgroundImage = "url(" + previewPic.src + ")";
    console.log("done");
}

function unDo() {
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    document.getElementById('header_img').style.backgroundImage = "url('')"
    document.getElementById('header_img').innerHTML = 'Hover over an image below to display here.';
    console.log("UNdone");
}
/*function pickImage(){
    options = ["car1.jpg", "car2.jpeg", "car3.jpeg", "car4.jpeg", "car5.jpeg", "car6.jpeg"]
    for (var i = 0; i < options; i++) {
        console.log("image "+ i)
    }
    randomImg = "img/" + options[Math.floor(Math.random() * options.length)];
        img = document.querySelector("#header_img")
        img.setAttribute("src", randomImg)
        img.setAttribute("alt", "")
        img.setAttribute("tabindex", "0")
    console.log("updated");

}*/