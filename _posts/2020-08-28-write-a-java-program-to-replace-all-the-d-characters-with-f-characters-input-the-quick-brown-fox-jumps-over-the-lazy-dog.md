---
id: 512
title: 'Write a Java program to replace all the "d" characters with "f" characters. Input : “The quick brown fox jumps over the lazy dog”'
date: 2020-08-28T15:57:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/
permalink: /write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-java-program-to-replace-all-d.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/9028560830615824235
rank_math_analytic_object_id:
  - "116"
categories:
  - Java
---
<pre><br /> public class replace {<br />    <br />   public static void main(String[] args)<br />    {<br />        String str = "The quick brown fox jumps over the lazy dog.";<br /><br />        String new_str = str.replaceAll("d", "f");<br />       <br />        System.out.println("Original string: " + str);<br />        System.out.println("New String: " + new_str);<br />    }<br />}<br /><br /></pre>

Output: 

<pre><br />LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1<br />$ java replace_chars.java<br />Original string: The quick brown fox jumps over the lazy dog.<br />New String: The quick brown fox jumps over the lazy fog.<br /><br /><br /></pre>