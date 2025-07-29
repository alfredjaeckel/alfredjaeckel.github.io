function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeModalMedia(modalId, newSrc, description, clickedThumbnail, mediaType) {
    const modal = document.getElementById(modalId);
    
    // Remove existing video or image
    const existingVideo = document.getElementById(modalId + '-video');
    const existingImage = document.getElementById(modalId + '-image');
    
    if (existingVideo) existingVideo.remove();
    if (existingImage) existingImage.remove();
    
    // Update description
    document.getElementById(modalId + '-description').textContent = description;
    
    // Create new media element
    const mediaContainer = modal.querySelector('.modal-image-gallery');
    const descriptionElement = document.getElementById(modalId + '-description');
    
    if (mediaType === 'video') {
        const iframe = document.createElement('iframe');
        iframe.id = modalId + '-video';
        iframe.className = 'modal-video';
        iframe.src = newSrc;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        mediaContainer.insertBefore(iframe, descriptionElement);
    } else {
        const img = document.createElement('img');
        img.id = modalId + '-image';
        img.className = 'modal-video';
        img.src = newSrc;
        img.style.aspectRatio = '4/3';
        img.style.objectFit = 'cover';
        mediaContainer.insertBefore(img, descriptionElement);
    }
    
    // Update thumbnail active state
    const thumbnails = modal.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    clickedThumbnail.classList.add('active');
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].style.display === 'block') {
                modals[i].style.display = 'none';
                document.body.style.overflow = 'auto';
                break;
            }
        }
    }
});