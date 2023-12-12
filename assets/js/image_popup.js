
function image_popup(img) {
    // Get the modal
    let modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// This function is for activating image enlarge on the zoom in icon
function enlarge_icon_trigger(icon) {
    let parent = icon.parentNode;
    let img = parent.children[0];
    image_popup(img);
}

