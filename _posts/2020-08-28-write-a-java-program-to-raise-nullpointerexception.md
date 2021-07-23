---
id: 509
title: Write a Java Program to raise NullPointerException
date: 2020-08-28T15:59:00+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/write-a-java-program-to-raise-nullpointerexception/
permalink: /write-a-java-program-to-raise-nullpointerexception/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-java-program-to-raise.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7222019498826324227
rank_math_analytic_object_id:
  - "113"
categories:
  - Java
---
<pre><br /><br />public class nullPointer {<br />    public static void main(String[] args) {<br />       Object ref = null;<br />       ref.toString(); <br />    }<br /> }<br /><br /></pre>

Output: 

<pre><br />LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1<br />$ java null_pointer.java<br />Exception in thread "main" java.lang.NullPointerException<br />        at nullPointer.main(null_pointer.java:11)  <br /><br /><br /><br /></pre>