---
id: 1525
title: Create a Python class named Rectangle constructed by a length and width and a method that will compute the area of a rectangle.
date: 2021-04-24T06:17:04+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1525
permalink: /create-a-python-class-named-rectangle-constructed-by-a-length-and-width-and-a-method-that-will-compute-the-area-of-a-rectangle/
rank_math_seo_score:
  - "50"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Create a Python class named Rectangle constructed by a length and width and a method that will compute the area of a rectangle.
gnpub_modified_count:
  - "3"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "231"
categories:
  - Python
tags:
  - 'Please Enter Length of Rectangle : 4 Please Enter width of Rectangle : 5 Area of Rectangle is :20.0'
---
# 

<pre class="wp-block-code"><code>class Rectangle:
 def __init__(self, length, width):
    self.length = length
    self.width = width
 def area(self):
    return self.length * self.width
l=float(input("Please Enter Length of Rectangle : "))
w=float(input("Please Enter width of Rectangle : "))
r = Rectangle(l, w)
print("Area of Rectangle is :{} ".format(r.area()))</code></pre>

## Output:

<pre class="wp-block-code"><code>Please Enter Length of Rectangle : 4
Please Enter width of Rectangle : 5
Area of Rectangle is :20.0 </code></pre>