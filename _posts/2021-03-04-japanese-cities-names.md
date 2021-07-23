---
id: 1315
title: Japanese Cities Names
date: 2021-03-04T07:48:57+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1315
permalink: /japanese-cities-names/
rank_math_seo_score:
  - "4"
rank_math_primary_category:
  - "86"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "22"
categories:
  - SQL
---
Query the names of all the Japanese cities in the&nbsp;**CITY**&nbsp;table. The&nbsp;**COUNTRYCODE**&nbsp;for Japan is&nbsp;`JPN`.  
The&nbsp;**CITY**&nbsp;table is described as follows:<figure class="wp-block-image">

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg "CITY.jpg") 

Answer :

<pre class="wp-block-code"><code>select NAME from CITY where COUNTRYCODE='JPN';</code></pre>