---
id: 1242
title: BMI Calculator
date: 2021-02-15T06:11:11+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1242
permalink: /bmi-calculator/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "9"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "47"
categories:
  - Python
---
 

<pre class="wp-block-code"><code>Problem
Tracking your BMI is a useful way of checking if you’re maintaining a healthy weight. It’s calculated using a person's weight and height, using this formula: weight / height²
The resulting number indicates one of the following categories:
Underweight = less than 18.5
Normal = more or equal to 18.5 and less than 25
Overweight = more or equal to 25 and less than 30
Obesity = 30 or more
Let’s make finding out your BMI quicker and easier, by creating a program that takes a person's weight and height as input and outputs the corresponding BMI category.
Sample Input
85
1.9
Sample Output
Normal
</code></pre>

Code

<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">#Python code
weight=float(input())
height=float(input())
a=weight/(height**2)
if(a&lt;18.5):
    print("Underweight")
elif(a>=18.5 and a&lt;25):
    print("Normal")
elif(a>=25 and a&lt;30):
    print("Overweight")
elif(a>30):
    print("Obesity")</pre>