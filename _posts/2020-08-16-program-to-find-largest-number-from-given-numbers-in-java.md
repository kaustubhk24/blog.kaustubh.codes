---
id: 593
title: Program to Find Largest Number from Given Numbers in Java
date: 2020-08-16T12:30:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-to-find-largest-number-from-given-numbers-in-java/
permalink: /program-to-find-largest-number-from-given-numbers-in-java/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-find-largest-number-from.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7302115556672888313
rank_math_analytic_object_id:
  - "197"
categories:
  - Java
---
<pre><br /><br />import java.util.Scanner;<br /><br />class large<br />{<br />    public static void main(String args[]) {<br />        Scanner sc = new Scanner(System.in); <br />        System.out.println("Please First Number ");<br />        int a = sc.nextInt();<br />        System.out.println("Please Second Number ");<br />        int b = sc.nextInt();<br />        System.out.println("Please Third Number ");<br />        int c = sc.nextInt();<br /><br />        int ans;<br /><br />      <br /><br /><br /><br />        if(a>b && a>c)<br />        {<br />            ans=a;<br />        }<br />        else if(b>c && b>a)<br />        {<br />            ans=b;<br />        }<br />        else<br />        {<br />            ans=c;<br />        }<br />        System.out.print("Largest Number is " + ans);<br />    }<br />}<br /></pre>