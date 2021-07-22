---
slug: /jquery-find-and-highlight-child/
title: Jquery Find and Highlight Child
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [JQuery, HTML, JavaScript]
---
```html title="index.html"
<!DOCTYPE html>
<html>
<head>
	<title>find children and highlight</title>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<style>
    .highlight{
        background: yellow;
    }        
</style>
</head>
<body>
<div>
	<h1>We will trace children of ul element here</h1>
	<ul>
		<li>I am the eldest</li>
		<li>I am the youngest</li>

	</ul>
</div>
<script>
$(document).ready(function(){
    $("ul").children().addClass("highlight");
});
</script>

</body>
</html>

```