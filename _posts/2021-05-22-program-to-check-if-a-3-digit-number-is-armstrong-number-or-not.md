---
id: 1670
title: Program to Check If a 3 Digit Number Is Armstrong Number or Not
date: 2021-05-22T01:36:19+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1670
permalink: /program-to-check-if-a-3-digit-number-is-armstrong-number-or-not/
rank_math_seo_score:
  - "59"
rank_math_focus_keyword:
  - Program to Check If a 3 Digit Number Is Armstrong Number or Not
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
ocean_gallery_link_images:
  - 'off'
ocean_sidebar:
  - "0"
ocean_second_sidebar:
  - "0"
ocean_disable_margins:
  - enable
ocean_display_top_bar:
  - default
ocean_display_header:
  - default
ocean_center_header_left_menu:
  - "0"
ocean_custom_header_template:
  - "0"
ocean_header_custom_menu:
  - "0"
ocean_menu_typo_font_family:
  - "0"
ocean_disable_title:
  - default
ocean_disable_heading:
  - default
ocean_disable_breadcrumbs:
  - default
ocean_display_footer_widgets:
  - default
ocean_display_footer_bottom:
  - default
ocean_custom_footer_template:
  - "0"
ocean_link_format_target:
  - self
ocean_quote_format_link:
  - post
rank_math_analytic_object_id:
  - "246"
categories:
  - Python
---
Que > Program to Check If a 3 Digit Number Is Armstrong Number or Not

<pre class="wp-block-code"><code>from math import *
def armstrong(number):
  result = 0
  n = 0
  temp = number
  while (temp != 0):
    temp =int(temp / 10)
    n = n + 1
  temp = number
  while (temp != 0):
    remainder = temp % 10
    result = result + pow(remainder, n)
    temp = int(temp/10)
  if(result == number):
    print("Armstrong number")
  else:
    print("Not an Armstrong number")
number = int(input("Enter the number : "))
if(len(str(number))==3):
  armstrong(number)
else:
  print("Enter 3 digit number")</code></pre>

## 

<pre class="wp-block-code"><code>Enter the number : 371
Armstrong number</code></pre>