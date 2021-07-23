---
id: 1302
title: Revising the Select Query II
date: 2021-03-04T07:42:23+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1302
permalink: /revising-the-select-query-ii/
rank_math_seo_score:
  - "8"
rank_math_primary_category:
  - "86"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "26"
categories:
  - SQL
---
Query the&nbsp;**NAME**&nbsp;field for all American cities in the&nbsp;**CITY**&nbsp;table with populations larger than&nbsp;`120000`. The&nbsp;_CountryCode_&nbsp;for America is&nbsp;`USA`.

The&nbsp;**CITY**&nbsp;table is described as follows:<figure class="wp-block-image size-large">

<img loading="lazy" width="365" height="300" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-1.jpg" alt="" class="wp-image-1303" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-1.jpg 365w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-1-300x247.jpg 300w" sizes="(max-width: 365px) 100vw, 365px" /> </figure> 

Answer :

<pre class="wp-block-code"><code>select NAME as cities from CITY where POPULATION &gt; 120000 and COUNTRYCODE='USA' ;</code></pre>