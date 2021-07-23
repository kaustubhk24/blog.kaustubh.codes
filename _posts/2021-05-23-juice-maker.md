---
id: 1720
title: Juice Maker
date: 2021-05-23T06:03:19+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1720
permalink: /juice-maker/
rank_math_seo_score:
  - "48"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Juice Maker
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
  - "263"
categories:
  - Python
---
 

You are given a **Juice** class, which has **name** and **capacity** properties.  
You need to complete the code to enable and adding of two **Juice** objects, resulting in a new **Juice** object with the combined capacity and names of the two juices being added.  
  
For example, if you add an Orange juice with 1.0 capacity and an Apple juice with 2.5 capacity, the resulting juice should have:  
name: **Orange&Apple**  
capacity: **3.5**  
  
The names have been combined using an **&** symbol.

<div class="wp-block-coblocks-alert">
  <p class="wp-block-coblocks-alert__title">
    Use the <strong>__add__</strong> method to define a custom behavior for the + operator and return the resulting object.
  </p>
</div>

Program Answer >

<pre class="wp-block-code"><code>class Juice:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
    def __add__(self, other):
        return self.name + "&" + other.name + " (" + str(self.capacity + other.capacity) + "L)"
a = Juice('Orange', 1.5)
b = Juice('Apple', 2.0)
result = a + b
print(result)</code></pre>

<pre class="wp-block-code"><code>Input
No Input
Your Output
Orange&Apple (3.5L)
Expected Output
Orange&Apple (3.5L)</code></pre>