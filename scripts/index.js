console.log('🦅WHAT THE FUCK IS A KILOMETER??');

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('meme');
    const audio = document.getElementById('audio');

    // Try to autoplay the audio
    audio.play().catch(err => {
        // Instruct user to click to play because autoplay was blocked
        alert("Your browser blocked autoplay. Please click to play.");
    });

    // Play/replay audio on click
    image.addEventListener("click", async () => {
        audio.play();
    })

    // Close the tab when the audio ends
    audio.addEventListener('ended', () => {
        window.close();
    });
});
