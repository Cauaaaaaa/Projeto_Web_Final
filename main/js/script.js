/* Exemplo de um video do yt*/

document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video_card');
    const popup = document.getElementById('video_popup');
    const videoFrame = document.getElementById('video_frame');
    const closeBtn = document.querySelector('.close');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data_video_id');
            const videoUrl = `https://www.youtube.com/embed/${videoId}`;
            videoFrame.src = videoUrl;
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        videoFrame.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
            videoFrame.src = '';
        }
    });
});