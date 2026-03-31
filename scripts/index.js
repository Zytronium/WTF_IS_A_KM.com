console.log('🦅WHAT THE FUCK IS A KILOMETER??');

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('meme');
    const audio = document.getElementById('audio');
    const video = document.getElementById('roll');

    const playVideo = async () => {
        video.style.display = 'block';
        try {
            await video.play();
            // Try to enter fullscreen if possible
            if (video.requestFullscreen) {
                video.requestFullscreen().catch(() => {});
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen().catch(() => {});
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen().catch(() => {});
            }
        } catch (err) {
            console.error("Video play failed:", err);
            video.style.display = 'none';
        }
    };

    // Try to autoplay the audio
    audio.play().then(() => {
        playVideo();
    }).catch(err => {
        // Instruct user to click to play because autoplay was blocked
        alert("Your browser blocked autoplay. Please click to play.");
    });

    // Play/replay on click
    image.addEventListener("click", () => {
        // audio.play();
        playVideo();
    });

    // Close the tab when the video ends
    video.addEventListener('ended', () => {
        window.close();
    });

    // audio.addEventListener('ended', () => {
    //     window.close();
    // });
});
