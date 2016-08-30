//
// CBEffects.js - (C) 2007 Panic, Inc.
//
// Display our download popup, and display the giant dialog.
// Requires: Effects.js
//
// Not for redistribution.

//
// LARGE POPUP: Full-Screen Pop-up Functions
//

function showLargePopup(elem) {

    var popFullscreen = document.getElementById('fullscreen');
    var popLarge = document.getElementById('largepopup');

	// Put the correct content in the pop-up

	//if (navigator.platform.indexOf('Mac') != -1) {
	//	document.getElementById('start-download').className = 'show';
	//	document.getElementById('wrong-os').className = 'hide';
	//} else {
	//	document.getElementById('start-download').className = 'hide';
	//	document.getElementById('wrong-os').className = 'show';
	//}
 
 	document.getElementById('start-download').className = 'show';
	// document.getElementById('wrong-os').className = 'hide';
    
    // Make fullscreen thing really full screen, and show it
    getSize();
    popFullscreen.style.height = myScrollHeight + 'px';
    popFullscreen.style.display = 'block';
	
    // Position pop-up
    popLarge.style.left = ((myWidth - popLarge.offsetWidth) / 2) + 'px';
    popLarge.style.top = (((myHeight - popLarge.offsetHeight) / 2) + myScroll) + 'px';
    popLarge.style.visibility = 'visible';
    
    refreshTimer = setTimeout("setLocation('"+elem.getAttribute("href")+"')", 1500);

}

function setLocation(loc) {
	window.location = loc;
}

function hideLargePopup() {
    var popFullscreen = document.getElementById('fullscreen');
    var popLarge = document.getElementById('largepopup');
    
    popLarge.style.visibility = 'hidden';
    popFullscreen.style.display = 'none';
}

//
// DOWNLOAD SMALL POPUP: Download Hint Pop-up Functions
//
// An advantage of using a timer to do a hide is that we can ignore
// any spurious mouseOut events that have bubbled up, into <td>'s, etc.

var dpopTimer = "";

function showDownloadPopup(e) {

	var popDownload = document.getElementById('dpop');
	var btnDownload = document.getElementById('download');

	if (moveanim.timer != null) {
		clearInterval(moveanim.timer);
		moveanim.timer = null;
	}

	// Determine where we should pop up in relation to the download button

	position = findElementPos(btnDownload);
	popDownload.style.top = (position[1] - (popDownload.offsetHeight - 40)) +"px";
	popDownload.style.left = "25" + "px";

	// If already trigger a rollover, cancel it because we're back in

	if (dpopTimer != "")
	{
		clearTimeout(dpopTimer);
		dpopTimer = "";
	} else {
		setOpacity(0, 'dpop');
		popDownload.style.visibility = 'visible';
		moveStart(popDownload, parseInt(popDownload.style.left), parseInt(popDownload.style.left), parseInt(popDownload.style.top) + 10, parseInt(popDownload.style.top), 15);
		fadeElementSetup('dpop', 0, 100, 13);
	}
}

function hideDownloadPopup() {
	// Start timer to hide the pop-up and the overlay
	dpopTimer = setTimeout("actuallyHide()", 500);
}

function actuallyHide() {
	var popDownload = document.getElementById('dpop');
	if (dpopTimer != "")
	{
		dpopTimer = "";
		moveStart(popDownload, parseInt(popDownload.style.left), parseInt(popDownload.style.left), parseInt(popDownload.style.top), parseInt(popDownload.style.top) - 10, 15);		
		fadeElementSetup('dpop', 100, 0, 13, 1);
	}
}

//
// MOVE: Animate the move of an element.
//
// Move is also synchronous. One at a time, please.
//

var moveanim = {time:0, beginX:0, changeX:0.0, beginY:0, changeY:0, duration:0.0, element:null, timer:null};

function moveStart(elem, startX, endX, startY, endY, duration)
{
	if (moveanim.timer != null) {
		clearInterval(moveanim.timer);
		moveanim.timer = null;
	}
	moveanim.time = 0;
	moveanim.beginX = startX;
	moveanim.changeX = endX - startX;
	moveanim.beginY = startY;
	moveanim.changeY = endY - startY;
	moveanim.duration = duration;
	moveanim.element = elem;

	moveanim.timer = setInterval("moveAnimDo();", 15);
}

function moveAnimDo()
{
	if (moveanim.time > moveanim.duration) {
		clearInterval(moveanim.timer);
		moveanim.timer = null;
	}
	else {
		moveX = cubicOut(moveanim.time, moveanim.beginX, moveanim.changeX, moveanim.duration);
		moveY = cubicOut(moveanim.time, moveanim.beginY, moveanim.changeY, moveanim.duration);
		moveanim.element.style.left = moveX + "px";
		moveanim.element.style.top = moveY + "px";
		moveanim.time++;
	}
}


//console.log("Initialized");