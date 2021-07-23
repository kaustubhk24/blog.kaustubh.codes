---
id: 1786
title: Program to get the maximum value from given matrix
date: 2021-05-31T07:36:11+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1786
permalink: /program-to-get-the-maximum-value-from-given-matrix/
rank_math_seo_score:
  - "49"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Program to get the maximum value from given matrix
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
  - "264"
categories:
  - Uncategorized
---
Code >

<pre class="wp-block-code"><code>import numpy as np
import pandas as pd
matrix = &#91;(100, 63, 47),
          (11, 103, 117),
          (49, 36, 55),
          (75,24, 34),
          (89, 21, 44)
          ]
panda_max = pd.DataFrame(matrix, index = list('symca'), columns = list('psk'))
maxValues = panda_max.max()
print(maxValues)</code></pre>

Output >

<pre class="wp-block-code"><code>p    100
s    103
k    117
dtype: int64</code></pre>