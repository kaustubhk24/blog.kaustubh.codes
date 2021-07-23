---
id: 1798
title: Program toCreating Pandas dataframe using list of lists
date: 2021-05-31T07:45:08+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1798
permalink: /program-tocreating-pandas-dataframe-using-list-of-lists/
rank_math_seo_score:
  - "44"
rank_math_focus_keyword:
  - Program toCreating Pandas dataframe using list of lists
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
  - "270"
categories:
  - Python
---
Code >

<pre class="wp-block-code"><code>import pandas as pd
data = &#91;&#91;'Python','Basics',5], &#91;'Python', 'OOPs',6], &#91;'Python','Exception Handling',2] ,
        &#91;'Python', 'Database',4],
        &#91;'Python', 'REgular Expressions',3],
        &#91;'Python', 'Data Analysis',6] ]
df = pd.DataFrame(data, columns = &#91;'Category', 'Name','No of lecture'])
print(df )</code></pre>

Output >

<pre class="wp-block-code"><code>  Category                 Name  No of lecture
0   Python               Basics              5
1   Python                 OOPs              6
2   Python   Exception Handling              2
3   Python             Database              4
4   Python  REgular Expressions              3
5   Python        Data Analysis              6</code></pre>