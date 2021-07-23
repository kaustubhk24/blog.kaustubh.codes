---
slug: /video-forward-reverse-controls-in-html/
title: Video Forward-Reverse Controls in HTML
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [HTML, JS,CSS,VIDEO]
---

```html title=video.html
<!DOCTYPE html>
<html>
<head>
	<title>Video-Forward,Reverse</title>

</head>
<body>
    <center>
        <video width="100" height="100" id="myVd" controls>
                  <source id="firstVd" src="1.mp4" type="video/mp4"></video>
       <button id="btFwd" type="button" onClick="vdFwd()">Forward</button>
       <button id="btBhd" type="button" onClick="vdRev()">Reverse</button><br>
        </center>
        <script type="text/javascript">
            var vd = document.getElementById("myVd");
           
            function vdFwd()
            {
                vd.currentTime=vd.currentTime+10;
                vd.play();
            }
            function vdRev()
            {
                vd.currentTime=vd.currentTime-10;
                vd.play();
            }</script>
</body>
</html>
```

## Live Preview
   <iframe  src="/preview/video-forward-reverse-controls-in-html.html"  />