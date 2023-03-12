
let time=5*3600*1000;
let lo='http://172.15.15.1:1000/logout?';
let li='http://172.15.15.1:1000/login?';

setTimeout(open,1000);
setInterval(open, time);

function open(){
    chrome.tabs.create({ url: lo, active: true});
    chrome.tabs.query({ active: true }, function(tabs1) { 
        setTimeout(close1,1000); 
        function close1(){
            chrome.tabs.remove(tabs1[0].id);
        } 
    });   
    chrome.tabs.create({ url: li, active: true});
    chrome.tabs.query({ active: true }, function(tabs2) { 
        setTimeout(close2,1000); 
        function close2(){
            chrome.tabs.remove(tabs2[0].id);
        } 
    });
}



