function adjustUI() {
	if (window.innerWidth < 801) {
		desktop.style.display = 'none';
		desktop2.style.display = 'none';
		desktop3.style.display = 'none';
		desktop4.style.display = 'none';
		mobile.style.display = 'block';
		mobile2.style.display = 'block';
		mobile3.style.display = 'block';
		mobile4.style.display = 'block';
	}
	else {
		if (window.innerWidth < 1024) {
			crowdshow.style.display = 'none'
			nocrowd.style.display = 'block';
			previewww.style.display = 'none';
			previeww1.style.display = 'none';
			previeww2.style.display = 'inline-block';
		}
		else {
			crowdshow.style.display = 'block'
			nocrowd.style.display = 'none';
			previewww.style.display = 'inline-block';
			previeww1.style.display = 'inline-block';
			previeww2.style.display = 'none';
		}
		desktop.style.display = 'block';
		desktop2.style.display = 'block';
		desktop3.style.display = 'block';
		desktop4.style.display = 'block';
		mobile.style.display = 'none';
		mobile2.style.display = 'none';
		mobile3.style.display = 'none';
		mobile4.style.display = 'none';
	}
}

window.onresize = adjustUI;
adjustUI();

let curImg = 76;
let cyclable = [76,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];

previewImg1.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
previewImg2.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';

function nextImg() {
	clearInterval(timer);
	curImg++;
	if (curImg > cyclable.length-1) { curImg = 0; }
	previewImg1.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
	previewImg2.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
}

function prevImg() {
	clearInterval(timer);
	curImg--;
	if (curImg < 0) { curImg = cyclable.length-1; }
	previewImg1.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
	previewImg2.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
}

let timer = setInterval(function() {
	curImg++;
	if (curImg > cyclable.length-1) { curImg = 0; }
	console.log('/img/previewable/#' + cyclable[curImg] + '.png');
	previewImg1.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
	previewImg2.src = '/img/previewable/' + cyclable[curImg] + '.png?v=2';
},500);

let curMap = 37;

function nextMap() {
	curMap++;
	if (curMap > 44) { curMap = 37; }
	previewImg3.src = '/img/previewable/1' + curMap + '.png?v=2';
	previewImg4.src = '/img/previewable/1' + curMap + '.png?v=2';
}

function prevMap() {
	curMap--;
	if (curMap < 37) { curMap = 44; }
	previewImg3.src = '/img/previewable/1' + curMap + '.png?v=2';
	previewImg4.src = '/img/previewable/1' + curMap + '.png?v=2';
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

twitter1.onclick = function() {
	window.open('https://twitter.com/ROTYBASEdETH');
}

twitter1.onmouseover = function() {
	twitter1.style.backgroundColor = 'rgba(255,255,255,0.2)';
}

twitter1.onmouseout = function() {
	twitter1.style.backgroundColor = 'transparent';
}

twitter2.onclick = function() {
	window.open('https://twitter.com/ROTYBASEdETH');
}

twitter3.onclick = function() {
	window.open('https://twitter.com/ROTYBASEdETH');
}

discord1.onclick = function() {
	window.open('https://discord.gg/5KrsT6MbFm');
}

discord1.onmouseover = function() {
	discord1.style.backgroundColor = 'rgba(255,255,255,0.2)';
}

discord1.onmouseout = function() {
	discord1.style.backgroundColor = 'transparent';
}

discord2.onclick = function() {
	window.open('https://discord.gg/5KrsT6MbFm');
}

discord3.onclick = function() {
	window.open('https://discord.gg/5KrsT6MbFm');
}

let logoIndex = 0;

setInterval(function() {
	logoIndex++;
	if (logoIndex > 5) { logoIndex = 0; }
	logo1.src = '/img/trb-logo-' + logoIndex + '.png?v=2';
	logo2.src = '/img/trb-logo-' + logoIndex + '.png?v=2';
},500);


let imgOpen = false;

function makeClickable(img) {
	img.onclick = function() {
		imgOpen = true;
		imgDisplay.style.display = 'block';
		innerImg.src = img.src;
		let comps = img.src.split('/');
		let name = comps[comps.length-1].split('.')[0];
		let text = "";
		for (key in allData[name]) {
            const newLocal = 'name';
			if (key != newLocal && key != 'LINK') {
				text += key + ": " + allData[name][key] + '<br />'
			}
		}
		innerText.innerHTML = text;
	}
}

let previewable = document.querySelectorAll('.previewable');
for (let i = 0; i < previewable.length; i++) {
	previewable[i].style.cursor = 'pointer';
	makeClickable(previewable[i]);
}

function closeImg() {
	imgOpen = false;
	imgDisplay.style.display = 'none';
}
