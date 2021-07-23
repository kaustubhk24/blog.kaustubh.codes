---
id: 510
title: Write a Java program to use the try and catch and finally block.
date: 2020-08-28T15:58:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-to-use-the-try-and-catch-and-finally-block/
permalink: /write-a-java-program-to-use-the-try-and-catch-and-finally-block/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-java-program-to-use-try-and-catch.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7981978462188332839
rank_math_analytic_object_id:
  - "114"
categories:
  - Java
---
<pre><br />public class ExceptionHandling {<br />    public static void main(String[] args) {<br />       try {<br />          int i = 10/0; <br />       }<br />       <br />       catch(Exception ex){<br />          System.out.println("Catch Block Called");<br />       }<br />      <br />       finally {<br />          System.out.println("Finally Block");<br />       }<br />    }<br /> }<br /></pre>

Output: 

<pre><br />LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1<br />$ java try_catch_finally.java<br />Catch Block Called<br />Finally Block<br /><br /></pre>