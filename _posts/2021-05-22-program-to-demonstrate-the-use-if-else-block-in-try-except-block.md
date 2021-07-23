---
id: 1698
title: Program to demonstrate the use if else block in Try Except block
date: 2021-05-22T01:52:11+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1698
permalink: /program-to-demonstrate-the-use-if-else-block-in-try-except-block/
rank_math_seo_score:
  - "53"
rank_math_focus_keyword:
  - Program to demonstrate the use if else block in Try Except block
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
  - "258"
categories:
  - Python
---
Que > Program to demonstrate the use if else block in Try Except block

<pre class="wp-block-code"><code>def divider(x, y):
    try:
        result = x // y
    except ZeroDivisionError:
        print("Error: dividing by zero ")
    else:
        print("Answer is :", result)
    finally:
        print('Program Terminated')
divider(3, 2)</code></pre>

<pre class="wp-block-code"><code>Answer is : 1
Program Terminated</code></pre>