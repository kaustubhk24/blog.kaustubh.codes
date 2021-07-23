---
id: 504
title: Write a Java program to set the priority of a thread.
date: 2020-09-01T09:00:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-to-set-the-priority-of-a-thread/
permalink: /write-a-java-program-to-set-the-priority-of-a-thread/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-to-set-priority-of.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7822306185822739945
rank_math_analytic_object_id:
  - "108"
categories:
  - Java
---
<pre><br />/**<br /> * Q2 Write a Java program to set the priority of a thread.<br /> */<br /><br /><br />public class setPriorityOfThread extends Thread{<br /><br />    public static void main(String[] args) {<br /><br />        setPriorityOfThread thread=new setPriorityOfThread();<br />        System.out.println("Default Priority :"+thread.getPriority());<br />        thread.setPriority(7); // value 0 to 10<br />        System.out.println("Changed Priority :"+thread.getPriority());<br /><br /><br />        <br /><br />    } <br />}<br /></pre>

Output: 

<pre><br />Default Priority :5<br />Changed Priority :7<br /></pre>