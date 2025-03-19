function downloadFiles(files) {
    files.forEach(file => {
        const link = document.createElement('a');
        link.href = `https://hazetlab.github.io/zerfithel/media/${file}`;
        link.download = file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

function openLinks(links) {
    links.forEach(link => {
        window.open(link, '_blank');
    });
}

function resizeWindow() {
    let width = 300;
    let height = 200;
    const maxWidth = 800;
    const maxHeight = 600;

    const interval = setInterval(() => {
        if (width < maxWidth && height < maxHeight) {
            width += 50;
            height += 50;
            window.resizeTo(width, height);
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

function openVideoWindow() {
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Przykładowe wideo
    const videoWindow = window.open(videoUrl, 'Video', 'width=600,height=400');
    if (!videoWindow) {
        alert('Nie udało się otworzyć okna wideo. Upewnij się, że nie masz zablokowanych wyskakujących okienek.');
    }
}

function startVideoWindowInterval() {
    setInterval(openVideoWindow, 5000);
}

function playBackgroundMusic() {
    const audio = new Audio('https://hazetlab.github.io/zerfithel/media/video.mp4');
    audio.loop = true;
    audio.play().catch(error => {
        console.error("Nie udało się odtworzyć muzyki:", error);
    });
}

function playBackgroundMusic2() {
    const audio = new Audio('https://hazetlab.github.io/zerfithel/media/OCOBG.mp3');
    audio.loop = true;
    audio.play().catch(error => {
        console.error("Nie udało się odtworzyć muzyki:", error);
    });
}

function playBackgroundMusic3() {
    const audio = new Audio('https://hazetlab.github.io/zerfithel/media/putinwalk.mp3');
    audio.loop = true;
    audio.play().catch(error => {
        console.error("Nie udało się odtworzyć muzyki:", error);
    });
}

function main() {
    const filesToDownload = ['ez-yann.png', 'gerbus.png', 'jasioch.png', 'readme.txt'];
    const linksToOpen = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'];

    setInterval(() => {
        downloadFiles(filesToDownload);
        openLinks(linksToOpen);
    }, 100);

    function playAudio() {
        const audio = new Audio('https://hazetlab.github.io/zerfithel/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio2() {
        const audio = new Audio('https://hazetlab.github.io/zerfithel/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio3() {
        const audio = new Audio('/https://hazetlab.github.io/zerfithel/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio4() {
        const audio = new Audio('https://hazetlab.github.io/zerfithel/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio5() {
        const audio = new Audio('/https://hazetlab.github.io/zerfithel/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }

    function changeBackgroundColor() {
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 1000);
}

function showAlert() {
    alert("BOWJAJKNJKNKWANFKJVBSEKJESNVSJVNSEAAEAFAEFAFAEFEAHFBAKDBFKDSBFSKFBSEFBSES");
}

window.onload = showAlert;



    showAlert();
    changeBackgroundColor(); 
    requestFullscreen();
    playAudio();
    playAudio2();
    playAudio3();
    playAudio4();
    playAudio5();
    resizeWindow();
    startVideoWindowInterval();
    playBackgroundMusic();
    playBackgroundMusic2();
    playBackgroundMusic3();
}

main();
