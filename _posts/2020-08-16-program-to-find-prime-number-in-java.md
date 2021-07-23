---
id: 591
title: Program to Find Prime Number in Java
date: 2020-08-16T12:32:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-to-find-prime-number-in-java/
permalink: /program-to-find-prime-number-in-java/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-find-prime-number-in-java.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7633028710058455987
rank_math_analytic_object_id:
  - "195"
categories:
  - Java
---
<pre><br /><br />import java.util.Scanner;<br />class prime<br />{<br />    public static void main(String args[])<br />    {<br />        Scanner sc = new Scanner(System.in); <br />        System.out.println("Please enter number ");<br />        int num = sc.nextInt();<br />        //int num = 29;<br />        boolean flag = false;<br />        for(int i = 2; i &lt;= num/2; ++i)<br />        {<br />            if(num % i == 0)<br />            {<br />                flag = true;<br />                break;<br />            }<br />        }<br /><br />        if (!flag)<br />            System.out.println(num + " is a prime number.");<br />        else<br />            System.out.println(num + " is not a prime number.");<br /><br />    }<br />}<br /><br /></pre>