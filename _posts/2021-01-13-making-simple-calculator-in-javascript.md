---
id: 1220
title: Making Simple Calculator in JavaScript
date: 2021-01-13T15:40:53+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1220
permalink: /making-simple-calculator-in-javascript/
rank_math_seo_score:
  - "63"
rank_math_primary_category:
  - "38"
rank_math_focus_keyword:
  - Simple Calculator in JavaScript
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "49"
image: http://blog.kaustubh.codes/wp-content/uploads/2021/01/Screenshot-from-2021-01-13-21-04-36.png
categories:
  - Javascript
---
In this tutorial we will create imple Calculator in JavaScript 

**index.html**

<pre class="wp-block-code"><code>&lt;html&gt;
	&lt;head&gt;
		&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
		&lt;link href="https://fonts.googleapis.com/css?family=Open+Sans:600,700" rel="stylesheet"&gt;
        &lt;title&gt;Calculator&lt;/title&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;div id="container"&gt;
			&lt;div id="calculator"&gt;
				&lt;div id="result"&gt;
					&lt;div id="history"&gt;
						&lt;p id="history-value"&gt;&lt;/p&gt;
					&lt;/div&gt;
					&lt;div id="output"&gt;
						&lt;p id="output-value"&gt;&lt;/p&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;div id="keyboard"&gt;
					&lt;button class="operator" id="clear"&gt;C&lt;/button&gt;
					&lt;button class="operator" id="backspace"&gt;CE&lt;/button&gt;
					&lt;button class="operator" id="%"&gt;%&lt;/button&gt;
					&lt;button class="operator" id="/"&gt;&#247;&lt;/button&gt;
					&lt;button class="number" id="7"&gt;7&lt;/button&gt;
					&lt;button class="number" id="8"&gt;8&lt;/button&gt;
					&lt;button class="number" id="9"&gt;9&lt;/button&gt;
					&lt;button class="operator" id="*"&gt;&times;&lt;/button&gt;
					&lt;button class="number" id="4"&gt;4&lt;/button&gt;
					&lt;button class="number" id="5"&gt;5&lt;/button&gt;
					&lt;button class="number" id="6"&gt;6&lt;/button&gt;
					&lt;button class="operator" id="-"&gt;-&lt;/button&gt;
					&lt;button class="number" id="1"&gt;1&lt;/button&gt;
					&lt;button class="number" id="2"&gt;2&lt;/button&gt;
					&lt;button class="number" id="3"&gt;3&lt;/button&gt;
					&lt;button class="operator" id="+"&gt;+&lt;/button&gt;
					&lt;button class="empty" id="empty"&gt;&lt;/button&gt;
					&lt;button class="number" id="0"&gt;0&lt;/button&gt;
					&lt;button class="empty" id="empty"&gt;&lt;/button&gt;
					&lt;button class="operator" id="="&gt;=&lt;/button&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;script src="script.js"&gt;&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;</code></pre>

**script.js**

<pre class="wp-block-code"><code>function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i&lt;operator.length;i++){
	operator&#91;i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history&#91;history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i&lt;number.length;i++){
	number&#91;i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}</code></pre>

**style.css**

<pre class="wp-block-code"><code>body{
	font-family: 'Open Sans',sans-serif;
	background-color: black;
}
#container{
	width: 1000px;
	height: 550px;
	background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(bgImg.jpg);
	margin: 20px auto;
}
#calculator{
	width: 320px;
	height: 520px;
	background-color: #eaedef;
	margin: 0 auto;
	top: 20px;
	position: relative;
	border-radius: 5px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#result{
	height: 120px;
}
#history{
	text-align: right;
	height: 20px;
	margin: 0 20px;
	padding-top: 20px;
	font-size: 15px;
	color: #919191;
}
#output{
	text-align: right;
	height: 60px;
	margin: 10px 20px;
	font-size: 30px;
}
#keyboard{
	height: 400px;
}
.operator, .number, .empty{
	width: 50px;
	height: 50px;
	margin: 15px;
	float: left;
	border-radius: 50%;
	border-width: 0;
	font-weight: bold;
	font-size: 15px;
}
.number, .empty{
	background-color: #eaedef;
}
.number, .operator{
	cursor: pointer;
}
.operator:active, .number:active{
	font-size: 13px;
}
.operator:focus, .number:focus, .empty:focus{
	outline: 0;
}
button:nth-child(4){
	font-size: 20px;
	background-color: #20b2aa;
}
button:nth-child(8){
	font-size: 20px;
	background-color: #ffa500;
}
button:nth-child(12){
	font-size: 20px;
	background-color: #f08080;
}
button:nth-child(16){
	font-size: 20px;
	background-color: #7d93e0;
}
button:nth-child(20){
	font-size: 20px;
	background-color: #9477af;
}</code></pre>

**Background Image**

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="https://raw.githubusercontent.com/kaustubhk24/simple-calculator/master/bgImg.jpg" target="_blank" rel="noreferrer noopener">Download Background Image </a>
  </div>
</div>