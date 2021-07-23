---
id: 1796
title: Program toCreate a Pandas DataFrame from List of Dicts
date: 2021-05-31T07:43:43+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1796
permalink: /program-tocreate-a-pandas-dataframe-from-list-of-dicts/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "9"
rank_math_focus_keyword:
  - "import pandas as pd data = [{'401': 'Python','402': 'ISSA','403': 'OT','404':'EAF','405':'KRAI'},{'401':'Programming','402':'Security','403':'Maths','404':'Architecture','405':'AI'}] dbs= pd.DataFrame(data,index =['subject',n)"
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
  - "269"
categories:
  - Python
---
Code >

<pre class="wp-block-code"><code>import pandas as pd
data = &#91;{'401': 'Python', '402': 'ISSA', '403': 'OT','404':'EAF','405':'KRAI'},
        {'401':'Programming','402':'Security','403':'Maths','404':'Architecture','405':'AI'}]
dbs= pd.DataFrame(data, index =&#91;'subject','Description'])
print (dbs, "\n")</code></pre>

Output>  


<pre class="wp-block-code"><code>                     401       402    403           404   405
subject           Python      ISSA     OT           EAF  KRAI
Description  Programming  Security  Maths  Architecture    AI
</code></pre>