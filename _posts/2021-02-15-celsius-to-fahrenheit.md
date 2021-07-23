---
id: 1248
title: Celsius to Fahrenheit
date: 2021-02-15T07:37:58+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1248
permalink: /celsius-to-fahrenheit/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "44"
categories:
  - Python
---
You are making a Celsius to Fahrenheit converter.  
Write a function to take the Celsius value as an argument and return the corresponding Fahrenheit value.  
  
**Sample Input**  
36  
  
**Sample Output**  
96.8



Program

<pre class="wp-block-code"><code>celsius = int(input())
def conv(c):
    return c*(9/5)+32
fahrenheit = conv(celsius)
print(fahrenheit)</code></pre>