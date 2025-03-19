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

        function getRandomLatinPhrase() {
        const latinPhrases = [
            "lorem ipsum",
            "dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor",
            "incididunt ut labore et dolore",
            "magna aliqua",
            "ut enim ad minim veniam",
            "quis nostrud exercitation",
            "ullamco laboris nisi",
            "ut aliquip ex ea commodo consequat"
        ];
        
        const randomIndex = Math.floor(Math.random() * latinPhrases.length);
        return latinPhrases[randomIndex];
    }
    
    function fillHistory() {
        const wy = "https://github.com/hazetlab";
        
    
        window.history.pushState({ page: 1 }, "Title", wy);
        

        for (let i = 2; i <= 5; i++) {
            window.history.pushState({ page: i }, "Title " + i, wy);
        }
    }

    function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Tekst skopiowany do schowka: ', text);
    }).catch(err => {
        console.error('Błąd podczas kopiowania do schowka: ', err);
    });
}

function copyRandomStringToClipboard(length) {
    const randomString = getRandomString(length);
    copyToClipboard(randomString);
}

copyRandomStringToClipboard(9999);

    function openQuoteWindow() {
    const quotes = [
        "lalalaaaaaaaaaaaa",
        "DO NAUKI KNURZE",
        "buuuuuuuuuuuuuuuuuuuum",
        "pewnie ta..",
        "FMafmaj3pqjfap<fepjpacacakc;acm:CAK:Okaok@)Idiwa0diaDajo;sGJ;gs4m;smfAMFEoa;fmao;skOF#)3QIa0piafka:OG$:sm;la,ALF<;aof:O@;oskg(!"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteWindow = window.open('', 'Quote', 'width=300,height=200');
    quoteWindow.document.write(`<p>${randomQuote}</p>`);
    quoteWindow.document.close();
}

    function changeBackgroundColor() {
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 1000);
}

function showAlert() {
    alert('KDWakda[kfoAKOAEKGAgokgwogwgo;semse;vm.vdam cA>MA:l m;aMF:A@!');
}


const messages = [
    "fwamf;wamwafnfgnf;f:OQjf;ajoa@5",
    "GEA:LM:#KTdgdrgdfOVJPAVJAE:OFAM:F#MRQ:RM@M@!!!!!",
    ":GERAFJ#(PgdgrdgDMKLMLKFNAKLFNAFA@@@",
    "NEJKNSKVHrgrdgdrgdSHO*!SnaFKJWANKRJ!$!*$!TEAFUAH!KBAF",
    "GNKEQKU#HQ#UsfseHWFHSYS*DVYS*DVY*#@",
    "fwamf;afafafeswamwa;f:OQjf;ajoa@5",
    "GEA:LM:#KTnffsrnOVJPAVJAE:OFAM:F#MRQ:RM@M@!!!!!",
    ":GERAFJ#(PfnfMKLMLKFNAKLFNAFA@@@",
    "NEJKNSKVHSHO*!SnaFKJWANKRJ!$!*$!TEAFUAH!KBAF",
    "GNKEQKU#HQ#nffUHWFHSYS*DVYS*DVY*#@",
    "fwamf;wamwa;frsgsg:OQjf;ajoa@5",
    "GEA:LM:#KTObbVJPAVJAE:OFAM:F#MRQ:RM@M@!!!!!",
    ":GERAFJ#(PDdgrdMKLMLKFNAKLFNAFA@@@",
    "NEJKNSKVHSHgrdgr*!SnaFKJWANKRJ!$!*$!TEAFUAH!KBAF",
    "GNKEQKU#HQ#UHWgdrgdrgddrFHSgdrgdYS*DVYS*DVY*#@",
    "fwamf;wamwa;f:OQjdrggVJAE:OFAM:F#MRQ:RM@M@!!!!!",
    ":GERAFJ#(PDMKjgdrjygjLMLKFNAKLFNAFA@@@",
    "NEJKNSKVHSHO*!rdSnaFKJWANKRJ!$!*$!TEAFUAH!KBAF",
    "GNKEQKU#HQ#UHWFHSYS*DVYS*DVY*#@",
    "fwamf;wamwagjgyg;f:OQjf;ajoa@5",
    "GEA:LM:#KTOVJPAVJAE:OFAM:F#MRQ:RM@M@!!!!!",
    ":GERAFJ#(PDMKLMfLhftKFNAKLFNAFA@@@",
    "NEJKNSKgdrdVHSHO*!SnaFKJWAtfhthNKRJ!$!*$!TEAFUAH!KBAF",
    "GNKEQKU#HQ#UHWFHSYS*rgVYS*dgdrDVY*#@",
    
];

// Wywołanie funkcji
displayRedText(messages);

    function displayRedText(messages) {
    const container = document.createElement('div'); 
    container.style.position = 'fixed'; 
    container.style.bottom = '10px';
    container.style.left = '10px'; 
    container.style.zIndex = '1000'; 
    container.style.fontSize = '16px'; 

    messages.forEach(message => {
        const messageElement = document.createElement('p'); 
        messageElement.textContent = message; 
        messageElement.style.color = 'red'; 
        container.appendChild(messageElement); 
    });

    document.body.appendChild(container); 
}

    displayRedText(messages);
    openVideoWindow();
    showAlert();
    openQuoteWindow();
    changeBackgroundColor();
    copyRandomStringToClipboard(length)    
    requestFullscreen();
    fillHistory();
    getRandomLatinPhrase();
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
