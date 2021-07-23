---
id: 1273
title: Program To Perform Various Operatios Of String in Python
date: 2021-02-21T06:50:35+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1273
permalink: /program-to-perform-various-operatios-of-string-in-python/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "9"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "34"
categories:
  - Python
---
<pre class="wp-block-code"><code># Write a program to perform various operatios of string
str1=str(input("Enter String : "))
# Length of string
print(len(str1))
# checking if substring present or not
print("abc "  in str1)
# reversing string
print(str1&#91;::-1])
# trimming string
print(str1.strip())
# Encoding String
print(str1.encode())
#Lowercase
print(str1.lower())
# Uppercase
print(str1.upper())</code></pre>

<pre class="wp-block-code"><code>Output:
Enter String : Kaustubh K..com Blogs
Kaustubh K..com Blogs
18
False
Kaustubh K..com Blogs
b'Kaustubh K..com Blogs'
Kaustubh K..com blogs
Kaustubh K..COM BLOGS</code></pre>