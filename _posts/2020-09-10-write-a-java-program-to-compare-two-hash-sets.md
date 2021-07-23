---
id: 502
title: Write a Java program to compare two hash sets.
date: 2020-09-10T08:35:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-to-compare-two-hash-sets/
permalink: /write-a-java-program-to-compare-two-hash-sets/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-to-compare-two-hash.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3431053115012000799
rank_math_analytic_object_id:
  - "106"
categories:
  - Java
---
<pre><br />import java.util.*;<br />public class compareHash {<br />public static void main(String[] args) {<br />HashSet&lt;string> hash1 = new HashSet&lt;string>();<br />HashSet&lt;string> hash2 = new HashSet&lt;string>();<br />hash1.add("A");<br />hash1.add("B");<br />hash1.add("C");<br />hash2.add("A");<br />hash2.add("B");<br />if(hash1.equals(hash2))<br />{<br />System.out.println("Both hash are equal ");<br />}<br />else<br />{<br />System.out.println("Not Equal ");<br />}<br />hash2.add("C");<br />if(hash1.equals(hash2))<br />{<br /><br />System.out.println("Both hash are equal ");<br />}<br />else<br />{<br />System.out.println("Not Equal ");<br />}<br /><br />}<br />}<br /></pre>

Output

<pre><br />Not Equal<br />Both hash are equal<br /></pre>