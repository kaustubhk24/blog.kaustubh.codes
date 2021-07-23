---
id: 1804
title: Program to reads an image, display image and then represents the image in array
date: 2021-05-31T07:51:21+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1804
permalink: /program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/
rank_math_seo_score:
  - "50"
rank_math_focus_keyword:
  - Program to reads an image,display image and then represents the image in array
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
  - "273"
categories:
  - Python
---
 

Code >

<pre class="wp-block-code"><code>import matplotlib.pyplot as plt
import matplotlib.image as img
testImage = img.imread('http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/05/python-programming-language-1.png')
plt.imshow(testImage)
print(testImage)</code></pre>

Output >

<pre class="wp-block-code"><code>&#91;&#91;&#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  ...
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]]
 &#91;&#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  ...
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]]
 &#91;&#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  ...
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]]
 ...
 &#91;&#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  ...
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]]
 &#91;&#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  ...
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]]
 &#91;&#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  ...
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]
  &#91;1. 1. 1.]]]
</code></pre><figure class="wp-block-image size-large">

![Python](imgs/img/blog/python.png "Python")
