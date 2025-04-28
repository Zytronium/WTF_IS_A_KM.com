console.log('🦅WHAT THE FUCK IS A KILOMETER??');

const image = document.getElementById('meme');
const audio = document.getElementById('audio');

audio.play();

// Close the tab when the audio ends
audio.addEventListener('ended', () => {
    window.close();
});

// In case autoplay fails
image.addEventListener('click', () => {
    audio.play();
})
