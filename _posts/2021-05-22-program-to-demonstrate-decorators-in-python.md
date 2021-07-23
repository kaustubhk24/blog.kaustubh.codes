---
id: 1681
title: Program to demonstrate Decorators in Python
date: 2021-05-22T01:42:32+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1681
permalink: /program-to-demonstrate-decorators-in-python/
rank_math_seo_score:
  - "61"
rank_math_focus_keyword:
  - Program to demonstrate Decorators in Python
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
  - "251"
rank_math_primary_category:
  - "85"
categories:
  - Python
---
Que > Program to demonstrate Decorators in Python

<pre class="wp-block-code"><code>def first(msg):
    print(msg)
def second(func, msg):
    func(msg)
second(first, "Hello!")</code></pre>

<pre class="wp-block-code"><code>Hello!
</code></pre>