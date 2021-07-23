---
id: 1674
title: Calculate and Add the Surface Area of Two Cubes. Use Nested Functions
date: 2021-05-22T01:38:23+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1674
permalink: /calculate-and-add-the-surface-area-of-two-cubes-use-nested-functions/
rank_math_seo_score:
  - "55"
rank_math_focus_keyword:
  - Calculate And Add The Surface Area Of Two Cubes. Use Nested Functions
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
  - "248"
categories:
  - Python
---
Que > Calculate And Add The Surface Area Of Two Cubes. Use Nested Functions

<pre class="wp-block-code"><code>def SurfaceAreaOf2Cubes(a1,a2):
  A1=6*a1*a1
  print("Surface Area of First Cube is ",A1)
  def SAO2C(a2):
    A2=6*a2*a2
    print("Surface Area of Second Cube is ",A2)
    def Total(A1,A2):
      print("After adding ",A1+A2)
    Total(A1,A2)
  SAO2C(a2)
SurfaceAreaOf2Cubes(int(input("Enter Edge of First Cube :")),int(input("Enter Edge of First Cube :")))</code></pre>

<pre class="wp-block-code"><code>Enter Edge of First Cube :15
Enter Edge of First Cube :12
Surface Area of First Cube is  1350
Surface Area of Second Cube is  864
After adding  2214</code></pre>