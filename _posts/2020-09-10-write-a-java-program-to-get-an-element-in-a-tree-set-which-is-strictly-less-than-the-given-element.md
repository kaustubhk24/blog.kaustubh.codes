---
id: 500
title: Write a Java program to get an element in a tree set which is strictly less than the given element
date: 2020-09-10T08:37:00+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element/
permalink: /write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-to-get-element-in.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7046611430056673907
rank_math_analytic_object_id:
  - "104"
categories:
  - Java
---
<pre><br />import java.util.*;<br />public class lessThan {<br />public static void main(String[] args) {<br />TreeSet&lt;integer> tree = new TreeSet&lt;integer>();<br />tree.add(15);<br />tree.add(22);<br />tree.add(13);<br /><br />System.out.println(tree.lower(16)+ " is strictly less than 16");<br />}<br />}<br /></pre>

Output: 

<pre><br />15 is strictly less than 16<br /></pre>