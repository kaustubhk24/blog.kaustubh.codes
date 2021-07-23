---
id: 1788
title: Program to select the elements from a given matrix
date: 2021-05-31T07:37:31+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1788
permalink: /program-to-select-the-elements-from-a-given-matrix/
rank_math_seo_score:
  - "44"
rank_math_focus_keyword:
  - Program to select the elements from a given matrix
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
  - "265"
categories:
  - Python
---
Code >

<pre class="wp-block-code"><code>import pandas as pd
import numpy as np
data = np.array(&#91;'Dwayne','John','Steve','Hulk','Orton','Leo','Kofi'])
ser = pd.Series(data)
print(ser&#91;:3])</code></pre>

Output >

<pre class="wp-block-code"><code>0    Dwayne
1      John
2     Steve
dtype: object</code></pre>