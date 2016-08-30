<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ImagemEfeito._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
        <script src="js/Effects.js" type="text/javascript"></script>
        <script src="js/EffectsHTML.js" type="text/javascript"></script>    
</head>
<body onload="setupZoom();">
    <form id="form1" runat="server">
		<div>
		        <!-- no a href fica a imagem maior -->
			    <a href="/img/cb-screenshot_1.jpg" rel="zoom:" title="meu teste de imagem">
			        <!-- img src fica a imagem menor -->
			        <img src="/img/cb-screenshot-lil_01.png" title="meu teste de imagem" alt="meu teste de imagem" width="138" height="141" />
			    </a>
				<a href="/img/cb-screenshot_2.jpg" rel="zoom:" title="#">
				    <img src="/img/cb-screenshot-lil_02.png" title="Screenshot 2" alt="Screenshot 2" width="138" height="141" />
				</a>
				<a href="/img/cb-screenshot_3.jpg" rel="zoom:" title="#">
				    <img src="/img/cb-screenshot-lil_03.png" title="Screenshot 3" alt="Screenshot 3" width="138" height="141" />
				</a>
				<a href="/img/cb-screenshot_4.jpg" rel="zoom:" title="#">
				    <img src="/img/cb-screenshot-lil_04.png" title="Screenshot 4" alt="Screenshot 4" width="138" height="141" />
				</a>
		</div>
    </form>
</body>
</html>
