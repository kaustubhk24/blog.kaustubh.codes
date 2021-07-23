---
id: 977
title: Write a program Thread creation by implementing Runnable Interface
date: 2020-11-27T18:18:10+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=922
permalink: /write-a-program-thread-creation-by-implementing-runnable-interface/
rank_math_seo_score:
  - "68"
rank_math_primary_category:
  - "27"
rank_math_description:
  - Write a program Thread creation by implementing Runnable Interface
rank_math_focus_keyword:
  - Write a program Thread creation by implementing Runnable Interface
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "71"
categories:
  - Java
---
 

Write a program Thread creation by implementing Runnable Interface

<pre class="wp-block-code"><code>package com.practical;
public class runnable implements Runnable{
public static void main(String&#91;] args) {
Thread tr=new Thread();
Thread t1 = new Thread(tr,"Mumbai");
Thread t2 = new Thread(tr,"Nagpur");
Thread t3 = new Thread(tr,"Pune");
t1.setPriority(6);
t2.setPriority(8);
t3.setPriority(4);
t1.start();
t2.start();
t3.start();
}
public void run(){
System.out.println("Thread ID is " + Thread.currentThread().getId() + " & Thread Name is " +
Thread.currentThread().getName());
}
}</code></pre>

Output:<figure class="wp-block-image size-large">

<img src="http://blog.kaustubh.codes/wp-content/uploads/2020/11/image-25.png" alt="" class="wp-image-923" /> </figure>