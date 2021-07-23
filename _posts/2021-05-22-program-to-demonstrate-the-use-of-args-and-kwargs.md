---
id: 1679
title: 'Program to demonstrate the Use of *args and **kwargs'
date: 2021-05-22T01:40:47+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1679
permalink: /program-to-demonstrate-the-use-of-args-and-kwargs/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "58"
rank_math_focus_keyword:
  - 'Program to demonstrate the Use of *args and **kwargs'
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
  - "250"
categories:
  - Python
---
Que > Program to demonstrate the Use of \*args and \**kwargs

<pre class="wp-block-code"><code>def adder(*num,**data):
    sum = 0
    for n in num:
        sum = sum + n
    print("Sum:",sum)
    for key, value in data.items():
        print("{} is {}".format(key,value))
adder(3,5,Firstname="K", Lastname="K", Age=222, Phone=1234567890)</code></pre>

<pre class="wp-block-code"><code>
Sum: 8
Firstname is K
Lastname is K
Age is 222
Phone is 1234567890</code></pre>