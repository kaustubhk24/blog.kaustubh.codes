---
id: 501
title: Write a Java program to get the first and last elements in a tree
date: 2020-09-10T08:36:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-to-get-the-first-and-last-elements-in-a-tree/
permalink: /write-a-java-program-to-get-the-first-and-last-elements-in-a-tree/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-to-get-first-and.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8234747382968182857
rank_math_analytic_object_id:
  - "105"
categories:
  - Java
---
<pre><br /><br />import java.util.*;<br />public class firstLast {<br />public static void main(String[] args) {<br />TreeSet&lt;integer> tree = new TreeSet&lt;integer>();<br />tree.add(15);<br />tree.add(25);<br /><br />System.out.println("First is "+tree.first()+" and 2nd is<br />"+tree.last());<br />}<br />}<br /></pre>

Output 

<pre><br />First is 15 and 2nd is 25<br /><br /></pre>