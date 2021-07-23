---
id: 1790
title: Program to find the sum of values in a matrix
date: 2021-05-31T07:38:56+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1790
permalink: /program-to-find-the-sum-of-values-in-a-matrix/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "44"
rank_math_focus_keyword:
  - Program to find the sum of values in a matrix
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
  - "266"
categories:
  - Python
---
Code >

<pre class="wp-block-code"><code>import numpy as np
arr = &#91;&#91;114, 117, 19, 33, 44],
       &#91;15, 6, 27, 8, 19],
       &#91;23, 2, 54, 1, 24,]]
print("Sum of array : ", np.sum(arr))
print("Sum of arr(float32) : ", np.sum(arr, dtype = np.float32))</code></pre>

Output >

<pre class="wp-block-code"><code>Sum of array :  506
Sum of arr(float32) :  506.0</code></pre>