---
id: 1267
title: 'Program To  Display Reversal Of Number'
date: 2021-02-21T06:25:31+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1267
permalink: /program-to-display-reversal-of-number/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "37"
categories:
  - Python
---
<pre class="wp-block-code"><code># Write a program to  display reversal of number
num=int(input("Enter a number : "))
reverse=0
while num>0:
    rem=num%10
    reverse=(reverse*10)+rem
    num=num//10
print("Reversed Number is : " +str(reverse))</code></pre>

<pre class="wp-block-code"><code>output:
Enter a number : 1569
Reversed Number is : 9651</code></pre>