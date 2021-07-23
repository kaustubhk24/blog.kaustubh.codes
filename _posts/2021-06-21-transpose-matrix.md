---
id: 1848
title: Transpose Matrix
date: 2021-06-21T15:18:31+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1834
permalink: /transpose-matrix/
rank_math_seo_score:
  - "53"
rank_math_primary_category:
  - "13"
rank_math_focus_keyword:
  - Transpose matrix
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
  - "276"
categories:
  - Uncategorized
---
Given a matrix, find the&nbsp;<a>transpose</a>&nbsp;of a matrix.&nbsp;

<pre class="wp-block-preformatted">Input&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;1 2 3 4&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;2 9 -1 2&nbsp;</pre>

&nbsp;&nbsp;&nbsp;&nbsp;Where,&nbsp;

  * First-line represents the number of rows as M. 
  * Second-line represents the number of columns as N. 
  * The third line contains matrix elements of 1<sup>st</sup> row and so on. 

<pre class="wp-block-preformatted">Output <br />    1 2 <br />    2 9 <br />    3 -1 <br />    4 2 </pre>

<hr class="wp-block-separator" />

Program >

<pre class="wp-block-code"><code>// DriverMain.java
import java.util.*;
public class DriverMain {
    public static void main(String&#91;] args) {
        Scanner s = new Scanner(System.in);
        int r = s.nextInt();
        int c = s.nextInt();
        int first&#91;]&#91;] = new int&#91;r]&#91;c];
        for (int i = 0; i &lt; r; i++){
            for (int j = 0; j &lt; c; j++){
                    first&#91;i]&#91;j] = s.nextInt();
            }}
  for(int i = 0; i &lt; c; i++)
        {
            for(int j = 0; j &lt; r; j++)
            {
            System.out.print(first&#91;j]&#91;i]+" ");
            }
            System.out.println(" ");
        }
    }
}</code></pre>

Output >

Input

<pre class="wp-block-preformatted">2
4
1 2 3 4
2 9 -1 2</pre>

Output     

<pre class="wp-block-preformatted">1 2
2 9
3 -1
4 2  </pre>

Expected Output

<pre class="wp-block-preformatted">1 2
2 9
3 -1
4 2</pre>