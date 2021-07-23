---
id: 1688
title: Program to demonstrate lambda functions using filter() and map() function
date: 2021-05-22T01:46:06+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1688
permalink: /program-to-demonstrate-lambda-functions-using-filter-and-map-function/
rank_math_seo_score:
  - "49"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Program to demonstrate lambda functions using filter() and map() function
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
  - "254"
categories:
  - Python
---
Que > Program to demonstrate lambda functions using filter() and map() function

<pre class="wp-block-code"><code>tup= (5, 7, 22, 97, 54, 62, 77, 23, 73, 61)
print(tuple(map(lambda x: x+1 , tup)))
y = filter(lambda x: (x>=10), tup)
print(list(y))</code></pre>

<pre class="wp-block-code"><code>(6, 8, 23, 98, 55, 63, 78, 24, 74, 62)
&#91;22, 97, 54, 62, 77, 23, 73, 61]</code></pre>