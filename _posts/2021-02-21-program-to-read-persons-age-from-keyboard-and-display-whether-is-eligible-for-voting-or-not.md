---
id: 1271
title: 'Program To Read Person&#8217;s Age From Keyboard And Display Whether Is Eligible For Voting Or Not'
date: 2021-02-21T06:38:45+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1271
permalink: /program-to-read-persons-age-from-keyboard-and-display-whether-is-eligible-for-voting-or-not/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "35"
categories:
  - Python
---
<pre class="wp-block-code"><code># Write a program to read person's age from keyboard and display whether is eligible for voting or not
def isEligible(age):
    if age>18:
        print("Eligible for voting")
    else:
        print("Not eligible for voting")
isEligible(int(input("Enter Age : ")))</code></pre>

<pre class="wp-block-code"><code>Output:
Enter Age : 19
Eligible for voting
Enter Age : 13
Not eligible for voting</code></pre>