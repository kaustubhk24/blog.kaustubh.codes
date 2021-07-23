---
id: 506
title: Write a program to traverse (or iterate) ArrayList?
date: 2020-09-01T08:57:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-program-to-traverse-or-iterate-arraylist/
permalink: /write-a-program-to-traverse-or-iterate-arraylist/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-program-to-traverse-or-iterate.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/618984096937664976
rank_math_analytic_object_id:
  - "110"
categories:
  - Java
---
<pre><br /><br />/**<br /> *  Write a program to traverse (or iterate) ArrayList?<br /> */<br /><br /> import java.util.*;<br /><br />public class iterateAarrayList {<br /><br />    public static void main(String[] args) {<br /><br />    List&lt;integer> NumberList =  Arrays.asList(25,13,15,25,88,15);<br /><br />    for(int i=0;i&lt;NumberList.size();i++)<br />    {<br />        System.out.print(NumberList.get(i) + " ");         <br />    }<br />        <br />    }<br /><br />    <br />    <br />}<br /><br /></pre>

Output: 

<pre><br />LENOVO@DESKTOP-U7S0D\assignment no2_8be11fb<br />25 13 15 25 88 15 <br /></pre>