console.log('🦅WHAT THE FUCK IS A KILOMETER??');

const video = document.getElementById('video');

// Close the tab when the video ends
video.addEventListener('ended', () => {
    window.close();
});

// In case autoplay fails
video.addEventListener('click', () => {
    video.play();
})

// Fallback: Close the tab after 6 seconds if the video doesn't end
setTimeout(() => {
    if (!video.ended) {
        window.close();
    }
}, 600);