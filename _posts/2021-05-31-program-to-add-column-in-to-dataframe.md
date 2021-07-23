---
id: 1800
title: Program to add column in to Dataframe
date: 2021-05-31T07:47:07+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1800
permalink: /program-to-add-column-in-to-dataframe/
rank_math_seo_score:
  - "48"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Program to add column in to Dataframe
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
  - "271"
categories:
  - Python
---
Code >

<pre class="wp-block-code"><code>import pandas as pd
data = {'Name': &#91;'Snake', 'Prince', 'Gangsta', 'Wolf'],
        'City':&#91;'Pune','Nasik','Kolhapur','Bangalore'],
        'Qualification': &#91;'Msc', 'MA', 'Msc', 'Msc']}
df = pd.DataFrame(data)
print("Old:\n",df)
df.insert(1, "Age", &#91;21, 23, 24, 21], True)</code></pre>

Output > (OLD)

<pre class="wp-block-code"><code>
Old:
       Name       City Qualification
0    Snake       Pune           Msc
1   Prince      Nasik            MA
2  Gangsta   Kolhapur           Msc
3     Wolf  Bangalore           Msc</code></pre>

New Output >  
<figure class="wp-block-table">

<table>
  <tr>
    <th>
    </th>
    
    <th>
      Name
    </th>
    
    <th>
      Age
    </th>
    
    <th>
      City
    </th>
    
    <th>
      Qualification
    </th>
  </tr>
  
  <tr>
    <th>
    </th>
    
    <td>
      Snake
    </td>
    
    <td>
      21
    </td>
    
    <td>
      Pune
    </td>
    
    <td>
      Msc
    </td>
  </tr>
  
  <tr>
    <th>
      1
    </th>
    
    <td>
      Prince
    </td>
    
    <td>
      23
    </td>
    
    <td>
      Nasik
    </td>
    
    <td>
      MA
    </td>
  </tr>
  
  <tr>
    <th>
      2
    </th>
    
    <td>
      Gangsta
    </td>
    
    <td>
      24
    </td>
    
    <td>
      Kolhapur
    </td>
    
    <td>
      Msc
    </td>
  </tr>
  
  <tr>
    <th>
      3
    </th>
    
    <td>
      Wolf
    </td>
    
    <td>
      21
    </td>
    
    <td>
      Bangalore
    </td>
    
    <td>
      Msc
    </td>
  </tr>
</table></figure>