---
id: 503
title: Write a Java program to search an element in an array list.
date: 2020-09-10T08:33:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-java-program-to-search-an-element-in-an-array-list/
permalink: /write-a-java-program-to-search-an-element-in-an-array-list/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-java-program-to-search-element-in.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6984837895183525588
rank_math_analytic_object_id:
  - "107"
categories:
  - Java
---
<pre><br />import java.util.*;<br />public class searchElement {<br />public static void main(String[] args) {<br />ArrayList&lt;integer> list = new ArrayList&lt;integer>();<br />list.add(12);<br />list.add(52);<br />list.add(58);<br />check(15,list);<br />check(58,list);<br />}<br />private static void check(int num,ArrayList&lt;integer> ls)<br />{<br />if (ls.contains(num)) {<br />System.out.println(num +" Found n" );<br />} else {<br />System.out.println( num +" Not found n");<br />}<br />}<br />}<br /></pre>

Output: 

<pre><br />15 Not found<br />58 Found<br /><br /></pre>