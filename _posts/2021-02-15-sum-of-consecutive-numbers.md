---
id: 1244
title: Sum of Consecutive Numbers
date: 2021-02-15T06:40:29+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1244
permalink: /sum-of-consecutive-numbers/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "46"
categories:
  - Python
---
Problem

<pre class="wp-block-code"><code>No one likes homework, but your math teacher has given you an assignment to find the sum of the first N numbers.
Let’s save some time by creating a program to do the calculation for you!
Take a number N as input and output the sum of all numbers from 1 to N (including N).
Sample Input
100
Sample Output
5050
Explanation: The sum of all numbers from 1 to 100 is equal to 5050.
</code></pre>

<pre class="wp-block-code"><code>Program
N = int(input())
sum=0
x=range(1,N+1)
#your code goes here
for i in x:
    sum=sum+i
print(sum)</code></pre>