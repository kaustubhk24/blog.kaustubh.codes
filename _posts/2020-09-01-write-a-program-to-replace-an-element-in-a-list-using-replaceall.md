---
id: 505
title: Write a program to replace an element in a list using replaceAll()
date: 2020-09-01T08:59:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-program-to-replace-an-element-in-a-list-using-replaceall/
permalink: /write-a-program-to-replace-an-element-in-a-list-using-replaceall/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-program-to-replace-element-in.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7553311002500577808
rank_math_analytic_object_id:
  - "109"
categories:
  - Java
---
<pre>/**<br /> *  Write a program to replace an element in a list using replaceAll()<br /> */<br /><br />import java.util.*; <br /><br />public class replaceAllAnElementArrayList {<br /><br />    public static void main(String[] args) {<br /><br />        List list = Arrays.asList("Apple","Ball","Apple","Cat","Apple","Dog","Egg");<br />        System.out.println("List Before Replace :"+list);<br /><br />        Collections.replaceAll(list, "Apple", "REPLACED");<br /><br />        System.out.println("List After replaceAll: " + list);<br /><br />        <br />    }<br /><br />    <br />}<br /></pre>

Output: 

<pre><br />List Before Replace :[Apple, Ball, Apple, Cat, Apple, Dog, Egg]<br />List After replaceAll: [REPLACED, Ball, REPLACED, Cat, REPLACED, Dog, Egg]<br /><br /></pre>