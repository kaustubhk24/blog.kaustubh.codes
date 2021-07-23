---
id: 592
title: Jquery Find and Highlight Child
date: 2020-08-16T12:31:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/jquery-find-and-highlight-child/
permalink: /jquery-find-and-highlight-child/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/jquery-find-and-highlight-child.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3782618500163961123
rank_math_analytic_object_id:
  - "196"
categories:
  - JQuery
---
<pre><br />&lt;!DOCTYPE html><br />&lt;html><br />&lt;head><br />	&lt;title>find children and highlight&lt;/title><br />	&lt;script src="https://code.jquery.com/jquery-3.4.1.js">&lt;/script><br />	&lt;style><br />    .highlight{<br />        background: yellow;<br />    }        <br />&lt;/style><br />&lt;/head><br />&lt;body><br />&lt;div><br />	&lt;h1>We will trace children of ul element here&lt;/h1><br />	&lt;ul><br />		&lt;li>I am the eldest&lt;/li><br />		&lt;li>I am the youngest&lt;/li><br /><br />	&lt;/ul><br />&lt;/div><br />&lt;script><br />$(document).ready(function(){<br />    $("ul").children().addClass("highlight");<br />});<br />&lt;/script><br /><br />&lt;/body><br />&lt;/html><br /></pre>