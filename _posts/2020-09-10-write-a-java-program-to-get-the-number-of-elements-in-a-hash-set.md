---
id: 499
title: Write a Java program to get the number of elements in a hash set.
date: 2020-09-10T08:38:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-to-get-the-number-of-elements-in-a-hash-set/
permalink: /write-a-java-program-to-get-the-number-of-elements-in-a-hash-set/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-to-get-number-of.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5380669803278765154
rank_math_analytic_object_id:
  - "103"
categories:
  - Java
---
<pre>import java.util.*;<br />public class numberofElements {<br />public static void main(String[] args) {<br />HashSet&lt;string> hashSet = new HashSet&lt;string>();<br />hashSet.add("A");<br />hashSet.add("B");<br />System.out.println("Hashset size is "+hashSet.size());<br />hashSet.add("C");<br />System.out.println("Hashset size is "+hashSet.size());<br />}<br />}</pre>

Output: 

<pre><br /><br />Hashset size is 2<br />Hashset size is 3<br /></pre>

View on Your Phone