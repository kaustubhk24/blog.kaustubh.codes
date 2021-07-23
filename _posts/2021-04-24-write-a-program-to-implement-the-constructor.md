---
id: 1527
title: Write a program to implement the constructor.
date: 2021-04-24T06:18:23+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1527
permalink: /write-a-program-to-implement-the-constructor/
rank_math_seo_score:
  - "44"
rank_math_focus_keyword:
  - Write a program to implement the constructor
rank_math_primary_category:
  - "85"
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "232"
categories:
  - Python
tags:
  - Write a program to implement the constructor
---
<pre class="wp-block-code"><code>import operator
from operator import eq, add, sub,mul
class calculator:
    first, second = 0, 0
    def __init__(self, f, s):
        self.first = f
        self.second = s
    def calculate(self):
        print("Answer is ",self.first+self.second)
n1=int(input("Enter No one : "))
n2=int(input("Enter No two : "))
obj = calculator(n1,n2)
obj.calculate()</code></pre>

Output:

<pre class="wp-block-code"><code>
Enter No one : 4
Enter No two : 5
Answer is  9</code></pre>