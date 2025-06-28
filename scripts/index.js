console.log('🦅WHAT THE FUCK IS A KILOMETER??');

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('meme');
    const audio = document.getElementById('audio');
    
    // Play it
    audio.play().catch(err => {
        meme.addEventListener("click", async () => {
            audio.play();
        })
        alert("Your browser blocked autoplay. Please click to play.");
    });
    
    // Close the tab when the audio ends
    audio.addEventListener('ended', () => {
        window.close();
    });
});
