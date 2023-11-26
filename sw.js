function resetapp() {
  lol = localStorage.getItem("permaname");
  localStorage.clear();
  localStorage.setItem("permaname", lol);
};

function showNotification(movie) {
    //If/when time hh input time
        chrome.notifications.create('1', {
            title: 'Appointment in 5 minutes',
            message: movie,
            type: 'basic',
            iconUrl: "./images/note48.png",
        });
}


function setNotification(timee, movie) {
    //Calculate difference between current time and appointment time add 5 minutes
    var now = new Date();
    var time = timee;
    var c = time.split(":");
    c[0] = parseInt(c[0])
    c[1] = parseInt(c[1])

    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), c[0], c[1], 0, 0) - now - 300000;
    //If time hasn't already gone by
    if (millisTill10 > 0) {
        setTimeout(function(){showNotification(movie)}, millisTill10);
    }
}

self.addEventListener('message', (event) => {
  if (event.data == "mandemgotdasucc") {
    setTimeout(function(){resetapp}, 3000);
    return;
  }

    var b = event.data;
    b = b.split("+");
    //b[0] is the time and b[1] is the "movie"
    setNotification(b[0], b[1])
});



//Keep the service worker alive
let lifeline;
keepAlive();
chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'keepAlive') {
    lifeline = port;
    setTimeout(keepAliveForced, 295e3); // 5 minutes minus 5 seconds
    port.onDisconnect.addListener(keepAliveForced);
  }
});

function keepAliveForced() {
  lifeline?.disconnect();
  lifeline = null;
  keepAlive();
}

async function keepAlive() {
  if (lifeline) return;
  for (const tab of await chrome.tabs.query({ url: '*://*/*' })) {
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => chrome.runtime.connect({ name: 'keepAlive' }),
        // `function` will become `func` in Chrome 93+
      });
      chrome.tabs.onUpdated.removeListener(retryOnTabUpdate);
      return;
    } catch (e) {}
  }
  chrome.tabs.onUpdated.addListener(retryOnTabUpdate);
}

async function retryOnTabUpdate(tabId, info, tab) {
  if (info.url && /^(file|https?):/.test(info.url)) {
    keepAlive();
  }
}
chrome.runtime.onConnect.addListener(port => {
    if (port.name !== 'foo') return;
    port.onMessage.addListener(onMessage);
    port.onDisconnect.addListener(deleteTimer);
    port._timer = setTimeout(forceReconnect, 250e3, port);
  });
  function onMessage(msg, port) {
    console.log('received', msg, 'from', port.sender);
  }
  function forceReconnect(port) {
    deleteTimer(port);
    port.disconnect();
  }
  function deleteTimer(port) {
    if (port._timer) {
      clearTimeout(port._timer);
      delete port._timer;
    }
  }
  let port;
function connect() {
  port = chrome.runtime.connect({name: 'foo'});
  port.onDisconnect.addListener(connect);
  port.onMessage.addListener(msg => {
    console.log('received', msg, 'from bg');
  });
}
connect();