---
id: 1523
title: Create a Python class named Circle constructed by a radius and two methods that will compute the area and the perimeter of a circle.
date: 2021-04-24T06:15:33+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1523
permalink: /create-a-python-class-named-circle-constructed-by-a-radius-and-two-methods-that-will-compute-the-area-and-the-perimeter-of-a-circle/
rank_math_seo_score:
  - "45"
rank_math_focus_keyword:
  - Create a Python class named Circle constructed by a radius and two methods that will compute the area and the perimeter of a circle.
rank_math_primary_category:
  - "85"
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "230"
categories:
  - Python
tags:
  - Create a Python class named Circle constructed by a radius and two methods that will compute the area and the perimeter of a circle.
  - Python
---
<pre class="wp-block-code"><code>class Circle():
 def __init__(self, r):
    self.radius = r
 def area(self):
    return self.radius ** 2 * 3.14
 def perimeter(self):
        return 2 * self.radius * 3.14
NewCircle = Circle(float(input("Please Enter Radius of Circle : ")))
print("Area of Circle is :{} ".format(NewCircle.area()))
print("Perimeter of Circle is :{} ".format(NewCircle.perimeter()))</code></pre>

Output:

<pre class="wp-block-code"><code>
Please Enter Radius of Circle : 5
Area of Circle is :78.5
Perimeter of Circle is :31.400000000000002 </code></pre>