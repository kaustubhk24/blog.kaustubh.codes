---
id: 1849
title: Program to print Given Highest position element from the array
date: 2021-06-22T16:27:23+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1836
permalink: /program-to-print-given-highest-position-element-from-the-array/
rank_math_seo_score:
  - "50"
rank_math_focus_keyword:
  - Program To Print Given Highest Position Element From The Array
rank_math_primary_category:
  - "13"
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
  - "277"
categories:
  - Java
  - PHP
  - Python
---
Statement >  
Suppose you have an array of numbers and you have to create a function that will accept 2 parameters an array and rank, you have to print the highest rank number from the array to know more read the example below.

Example :

<pre class="wp-block-code"><code>Input
arr=array(10,25,55,66,48,33,22,13,98,95,96)
rank=2
Then Output should be 2&lt;sup>nd&lt;/sup> highest element of array i.e. 96</code></pre>

Example 2>

<pre class="wp-block-code"><code>Input
arr=array(10,25,55,66,48,33,22,13,98,95,96)
rank=3
Then Output should be 3&lt;sup>rd&lt;/sup> highest element of array i.e. 96</code></pre>

<div class="wp-block-coblocks-alert is-style-info" style="background-color:;color:">
  <p class="wp-block-coblocks-alert__title">
    Important
  </p>
  
  <p class="wp-block-coblocks-alert__text">
    First, we request you to try your own logic & then see answers, if you think you have better logic than the article please drop a comment, we will publish your code
  </p>
</div>

Logic >

Basically, we have to find the n<sup>th</sup> highest element from the given array, We will use a simple method, Just sort the array in descending order and call print n-1<sup>th</sup> element (as array starts from index 0)

If you get similar question with another logic like find n<sup>th</sup> smallest element from the given array, then just sort array in ascending order

please read programs below for reference.

PHP >

<pre class="wp-block-code"><code>// code in php
&lt;?php
function getByRank($arr,$place)
{
  rsort($arr);
  echo $arr&#91;$place-1];
}
$arr = array(1,2,5,97,9,55,78,55,93,98);
getByRank($arr,2);
?&gt;</code></pre>

Code in Python >

<pre class="wp-block-code"><code>// Python code
def getByRank(arr,pos):
  arr.sort(reverse=True)
  print(arr&#91;pos-1])
arr=&#91;12,15,96,98,55,65,33,22]
getByRank(arr,3)</code></pre>

Java Code >

<pre class="wp-block-code"><code>import java.util.Collections;
import java.util.Arrays;
public class HelloWorld{
     public static void main(String &#91;]args){
         int arr&#91;]={33,3,4,5};
         int pos=2;
         Arrays.sort(arr, Collections.reverseOrder());
        System.out.println(arr&#91;pos-1]);
     }
}</code></pre>