---
id: 1792
title: Program to calculate the sum of the diagonal elements of a NumPy array
date: 2021-05-31T07:40:01+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1792
permalink: /program-to-calculate-the-sum-of-the-diagonal-elements-of-a-numpy-array/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "44"
rank_math_focus_keyword:
  - Program to calculate the sum of the diagonal elements of a NumPy array
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
  - "267"
categories:
  - Python
---
Code >

<pre class="wp-block-code"><code>import numpy as np
n_array = np.array(&#91;&#91;95, 25, 15],
                    &#91;30, 24, 2],
                    &#91;14, 25, 47]])
print("Numpy Matrix is:")
print(n_array)
trace = np.trace(n_array)
print("Trace of given matrix:")
print(trace)</code></pre>

Output>

<pre class="wp-block-code"><code>Numpy Matrix is:
&#91;&#91;95 25 15]
 &#91;30 24  2]
 &#91;14 25 47]]
Trace of given matrix:
166</code></pre>