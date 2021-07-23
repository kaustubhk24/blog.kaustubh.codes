---
id: 1298
title: Revising the Select Query I
date: 2021-03-04T07:39:52+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1298
permalink: /revising-the-select-query-i/
rank_math_seo_score:
  - "8"
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "86"
rank_math_analytic_object_id:
  - "27"
categories:
  - SQL
---
Query all columns for all American cities in the&nbsp;**CITY**&nbsp;table with populations larger than&nbsp;`100000`. The&nbsp;**CountryCode**&nbsp;for America is&nbsp;`USA`.

The **CITY** table is described as follows:<figure class="wp-block-image size-large">

<img loading="lazy" width="365" height="300" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY.jpg" alt="" class="wp-image-1299" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY.jpg 365w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-300x247.jpg 300w" sizes="(max-width: 365px) 100vw, 365px" /> </figure> 



Answer :

<pre class="wp-block-code"><code>select * from CITY where COUNTRYCODE='USA' and POPULATION > 100000;</code></pre>