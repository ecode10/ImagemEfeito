//
// ----- DISPLAY CODE -----
//

function insertZoomHTML() {

  // All of this junk creates the three <div>'s used to hold the closebox, image, and zoom shadow.
  // It's a lot of Javascript for a little HTML. But, hey, this must be the "right way", though, yeah?
  // I'd also like to ask forgiveness for the large amounts of tables in use. Sometimes, CSS just doesn't cut it... I think.

  var inBody = document.getElementsByTagName("body").item(0);

  // WAIT SPINNER
  
  var inSpinbox = document.createElement("div");
  inSpinbox.setAttribute('id', 'ZoomSpin');
  inSpinbox.style.position = 'absolute';
  inSpinbox.style.left = '10px';
  inSpinbox.style.top = '10px';
  inSpinbox.style.visibility = 'hidden';
  inSpinbox.style.zIndex = '5000';
  inBody.insertBefore(inSpinbox, inBody.firstChild);
  
  var inSpinImage = document.createElement("img");
  inSpinImage.setAttribute('id', 'SpinImage');
  inSpinImage.setAttribute('src', zoomImageURI+'zoom-spin-1.png');
  inSpinbox.appendChild(inSpinImage);

  // ZOOM IMAGE
  //
  // <div id="ZoomBox">
  //   <a href="javascript:zoomOut();"><img src="/images/spacer.gif" id="ZoomImage" border="0"></a> <!-- THE IMAGE -->
  //   <div id="ZoomClose">
  //     <a href="javascript:zoomOut();"><img src="/images/closebox.png" width="30" height="30" border="0"></a>
  //   </div>
  // </div>

  var inZoombox = document.createElement("div");
  inZoombox.setAttribute('id', 'ZoomBox');
  inZoombox.style.position = 'absolute'; 
  inZoombox.style.left = '10px';
  inZoombox.style.top = '10px';
  inZoombox.style.visibility = 'hidden';
  inZoombox.style.zIndex = '499';
  // inZoombox.style.background = 'white';           // DEBUG
  inBody.insertBefore(inZoombox, inSpinbox.nextSibling);

  var inLink1 = document.createElement("a");
  inLink1.setAttribute('href','javascript:zoomOut();');
  inZoombox.appendChild(inLink1);
  
  var inImage1 = document.createElement("img");
  inImage1.setAttribute('src',zoomImageURI+'spacer.gif');
  inImage1.setAttribute('id','ZoomImage');
  inImage1.setAttribute('border', '0');
  inImage1.setAttribute('onMouseOver', 'zoomMouseOver();')
  inImage1.setAttribute('onMouseOut', 'zoomMouseOut();')
  inImage1.style.display = 'block';
  inImage1.style.width = '10px';
  inImage1.style.height = '10px';
  inLink1.appendChild(inImage1);

  var inClosebox = document.createElement("div");
  inClosebox.setAttribute('id', 'ZoomClose');
  inClosebox.style.position = 'absolute';
  inClosebox.style.left = '-15px';
  inClosebox.style.top = '-15px';
  inClosebox.style.filter = 'alpha(opacity=0)';
  inClosebox.style.MozOpacity = '0';
  inClosebox.style.opacity = '0';
  inClosebox.style.visibility = 'hidden';
  inZoombox.appendChild(inClosebox);
  
  var inLink2 = document.createElement("a");
  inLink2.setAttribute('href','javascript:zoomOut(1);');
  inClosebox.appendChild(inLink2);
  var inImage2 = document.createElement("img");
  inImage2.setAttribute('src',zoomImageURI+'closebox.png');
  inImage2.setAttribute('width','60');
  inImage2.setAttribute('height','60');
  inImage2.setAttribute('border','0');
  inLink2.appendChild(inImage2);
  
  // SHADOW
  // Now, the.. shudder.. shadow table.
  
  // <div id="ShadowBox"><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> X
  //   <tr height="25">
  //   <td width="27"><img src="/images/zoom-shadow1.png" width="27" height="25"></td>
  //   <td background="/images/zoom-shadow2.png">&nbsp;</td>
  //   <td width="27"><img src="/images/zoom-shadow3.png" width="27" height="25"></td>
  //   </tr>

  var inShadowbox = document.createElement("div");
  inShadowbox.setAttribute('id', 'ShadowBox');
  inShadowbox.style.position = 'absolute'; 
  inShadowbox.style.left = '50px';
  inShadowbox.style.top = '50px';
  inShadowbox.style.width = '100px';
  inShadowbox.style.height = '100px';
  inShadowbox.style.visibility = 'hidden';
  inShadowbox.style.zIndex = '45';
  inBody.insertBefore(inShadowbox, inZoombox.nextSibling);
 
  var inTable = document.createElement("table");
  inTable.setAttribute('border', '0');
  inTable.setAttribute('width', '100%');
  inTable.setAttribute('height', '100%');
  inTable.setAttribute('cellpadding', '0');
  inTable.setAttribute('cellspacing', '0');
  inShadowbox.appendChild(inTable);
  
  var inRow1 = document.createElement("tr");
  inRow1.style.height = '25px';
  inTable.appendChild(inRow1);
  
  var inCol1 = document.createElement("td");
  inCol1.style.width = '27px';
  inRow1.appendChild(inCol1);  
  /*var inShadowImg1 = document.createElement("img");
  inShadowImg1.setAttribute('src', zoomImageURI+'zoom-shadow1.png');
  inShadowImg1.setAttribute('width', '27');
  inShadowImg1.setAttribute('height', '25');
  inShadowImg1.style.display = 'block';
  inCol1.appendChild(inShadowImg1);*/

  var inCol2 = document.createElement("td");
//  inCol2.setAttribute('background', zoomImageURI+'zoom-shadow2.png');
//  inRow1.appendChild(inCol2);
//  // inCol2.innerHTML = '<img src=';
//  var inSpacer1 = document.createElement("img");
//  inSpacer1.setAttribute('src',zoomImageURI+'spacer.gif');
//  inSpacer1.setAttribute('height', '1');
//  inSpacer1.setAttribute('width', '1');
//  inSpacer1.style.display = 'block';
//  inCol2.appendChild(inSpacer1);

  var inCol3 = document.createElement("td");
//  inCol3.style.width = '27px';
//  inRow1.appendChild(inCol3);  
//  var inShadowImg3 = document.createElement("img");
//  inShadowImg3.setAttribute('src', zoomImageURI+'zoom-shadow3.png');
//  inShadowImg3.setAttribute('width', '27');
//  inShadowImg3.setAttribute('height', '25');
//  inShadowImg3.style.display = 'block';
//  inCol3.appendChild(inShadowImg3);

  //   <tr>
  //   <td background="/images/zoom-shadow4.png">&nbsp;</td>
  //   <td bgcolor="#ffffff">&nbsp;</td>
  //   <td background="/images/zoom-shadow5.png">&nbsp;</td>
  //   </tr>

  inRow2 = document.createElement("tr");
  inTable.appendChild(inRow2);
  
  var inCol4 = document.createElement("td");
//  inCol4.setAttribute('background', zoomImageURI+'zoom-shadow4.png');
//  inRow2.appendChild(inCol4);
//  // inCol4.innerHTML = '&nbsp;';
//  var inSpacer2 = document.createElement("img");
//  inSpacer2.setAttribute('src',zoomImageURI+'spacer.gif');
//  inSpacer2.setAttribute('height', '1');
//  inSpacer2.setAttribute('width', '1');
//  inSpacer2.style.display = 'block';
//  inCol4.appendChild(inSpacer2);
  
  var inCol5 = document.createElement("td");
  inCol5.setAttribute('bgcolor', '#ffffff');
  inRow2.appendChild(inCol5);
  // inCol5.innerHTML = '&nbsp;';
  var inSpacer3 = document.createElement("img");
  inSpacer3.setAttribute('src',zoomImageURI+'spacer.gif');
  inSpacer3.setAttribute('height', '1');
  inSpacer3.setAttribute('width', '1');
  inSpacer3.style.display = 'block';
  inCol5.appendChild(inSpacer3);
  
  var inCol6 = document.createElement("td");
//  inCol6.setAttribute('background', zoomImageURI+'zoom-shadow5.png');
//  inRow2.appendChild(inCol6);
//  // inCol6.innerHTML = '&nbsp;';
//  var inSpacer4 = document.createElement("img");
//  inSpacer4.setAttribute('src',zoomImageURI+'spacer.gif');
//  inSpacer4.setAttribute('height', '1');
//  inSpacer4.setAttribute('width', '1');
//  inSpacer4.style.display = 'block';
//  inCol6.appendChild(inSpacer4);

  //   <tr height="26">
  //   <td width="27"><img src="/images/zoom-shadow6.png" width="27" height="26"</td>
  //   <td background="/images/zoom-shadow7.png">&nbsp;</td>
  //   <td width="27"><img src="/images/zoom-shadow8.png" width="27" height="26"></td>
  //   </tr>  
  // </table>

  var inRow3 = document.createElement("tr");
  inRow3.style.height = '26px';
  inTable.appendChild(inRow3);
  
  var inCol7 = document.createElement("td");
  inCol7.style.width = '27px';
  inRow3.appendChild(inCol7);
//  var inShadowImg7 = document.createElement("img");
//  inShadowImg7.setAttribute('src', zoomImageURI+'zoom-shadow6.png');
//  inShadowImg7.setAttribute('width', '27');
//  inShadowImg7.setAttribute('height', '26');
//  inShadowImg7.style.display = 'block';
//  inCol7.appendChild(inShadowImg7);

  var inCol8 = document.createElement("td");
//  inCol8.setAttribute('background', zoomImageURI+'zoom-shadow7.png');
//  inRow3.appendChild(inCol8);  
//  // inCol8.innerHTML = '&nbsp;';
//  var inSpacer5 = document.createElement("img");
//  inSpacer5.setAttribute('src',zoomImageURI+'spacer.gif');
//  inSpacer5.setAttribute('height', '1');
//  inSpacer5.setAttribute('width', '1');
//  inSpacer5.style.display = 'block';
//  inCol8.appendChild(inSpacer5);

  var inCol9 = document.createElement("td");
//  inCol9.style.width = '27px';
//  inRow3.appendChild(inCol9);  
//  var inShadowImg9 = document.createElement("img");
//  inShadowImg9.setAttribute('src', zoomImageURI+'zoom-shadow8.png');
//  inShadowImg9.setAttribute('width', '27');
//  inShadowImg9.setAttribute('height', '26');
//  inShadowImg9.style.display = 'block';
//  inCol9.appendChild(inShadowImg9);

  if (includeCaption == 1) {

    // CAPTION
    //
    // <table border="1" cellpadding="0" cellspacing="0">
    // <tr height="26">
    // <td><img src="zoom-caption-l.png" width="13" height="26"></td>
    // <td rowspan="3" background="zoom-caption-fill.png"><div id="ZoomCaption"></div></td>
    // <td><img src="zoom-caption-r.png" width="13" height="26"></td>
    // </tr>
    // </table>
    
    var inCapDiv = document.createElement("div");
    inCapDiv.setAttribute('id', 'ZoomCapDiv');
    inCapDiv.style.display = 'none';
    inCapDiv.style.marginLeft = '13px';
    inCapDiv.style.marginRight = '13px';
    inShadowbox.appendChild(inCapDiv);
    
    var inCapTable = document.createElement("table");
    inCapTable.setAttribute('border', '0');
    inCapTable.setAttribute('cellpadding', '0');
    inCapTable.setAttribute('cellspacing', '0');
    inCapTable.setAttribute('align', 'center');
    inCapDiv.appendChild(inCapTable);
    
    var inCapRow1 = document.createElement("tr");
    inCapTable.appendChild(inCapRow1);
  
    var inCapCol1 = document.createElement("td");
    inCapRow1.appendChild(inCapCol1);
    var inCapImg1 = document.createElement("img");
    inCapImg1.setAttribute('src', zoomImageURI+'zoom-caption-l.png');
    inCapImg1.setAttribute('width', '13');
    inCapImg1.setAttribute('height', '26');
    inCapImg1.style.display = 'block';
    inCapCol1.appendChild(inCapImg1);
  
    var inCapCol2 = document.createElement("td");
    inCapCol2.setAttribute('background', zoomImageURI+'zoom-caption-fill.png');
    inCapCol2.setAttribute('id', 'ZoomCaption');
    inCapCol2.setAttribute('valign', 'middle');
    
    inCapCol2.style.fontSize = '14px';
    inCapCol2.style.fontFamily = 'Helvetica';
    inCapCol2.style.fontWeight = 'bold';
    inCapCol2.style.color = '#ffffff';
    inCapCol2.style.textShadow = '0px 2px 4px #000000';
    inCapCol2.style.whiteSpace = 'nowrap';
    
    inCapRow1.appendChild(inCapCol2);
  
    var inCapCol3 = document.createElement("td");
    inCapRow1.appendChild(inCapCol3);
    var inCapImg2 = document.createElement("img");
    inCapImg2.setAttribute('src', zoomImageURI+'zoom-caption-r.png');
    inCapImg2.setAttribute('width', '13');
    inCapImg2.setAttribute('height', '26');
    inCapImg2.style.display = 'block';
    inCapCol3.appendChild(inCapImg2);

  }
}