---
id: 1541
title: Write a program to implement to show the use of an access specifier.
date: 2021-04-24T06:25:49+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1541
permalink: /write-a-program-to-implement-to-show-the-use-of-an-access-specifier/
rank_math_seo_score:
  - "46"
rank_math_primary_category:
  - "85"
gnpub_modified_count:
  - "3"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "239"
rank_math_focus_keyword:
  - access specifier.
categories:
  - Python
---
<pre class="wp-block-code"><code>class User:
    def __init__(self, name, age):
        self.usrName = name
        self.usrAge = age
    def displayAge(self):
        print("Age: ", self.usrAge)
obj = User("ABC", 20)
print("Name: ", obj.usrName)
obj.displayAge()</code></pre>

output:

<pre class="wp-block-code"><code>Name:  ABC
Age:  20</code></pre>