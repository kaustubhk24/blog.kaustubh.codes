---
id: 507
title: Write a Java program which shows how to get the name of a running thread?
date: 2020-09-01T08:41:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/
permalink: /write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-which-shows-how-to.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7589869738218275805
rank_math_analytic_object_id:
  - "111"
categories:
  - Java
---
<pre><br />/**<br /> *   Q1 Write a Java program which shows how to get the name of a running thread?<br /> */<br /><br />class getThreadName extends Thread{  <br />      public static void main(String args[]){  <br /><br /><br />    getThreadName t=new getThreadName();  <br />    t.start(); <br />    System.out.println("Name of Thread :"+t.getName());  <br />    t.setName("TEST_NAME");  <br />    System.out.println("After changing name of t:"+t.getName()); <br />    <br />    <br />   }  <br />  }  <br /></pre>

Output: 

<pre><br />LENOVO@DESKTOP-U7S0D\assignment no2_8be11fb<br />Name of Thread :Thread-0<br />After changing name of t:TEST_NAME<br /></pre>