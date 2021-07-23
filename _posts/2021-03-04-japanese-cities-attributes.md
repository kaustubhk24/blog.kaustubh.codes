---
id: 1313
title: 'Japanese Cities&#8217; Attributes'
date: 2021-03-04T07:47:51+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1313
permalink: /japanese-cities-attributes/
rank_math_primary_category:
  - "86"
rank_math_seo_score:
  - "4"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "23"
categories:
  - SQL
---
Query all attributes of every Japanese city in the&nbsp;**CITY**&nbsp;table. The&nbsp;**COUNTRYCODE**&nbsp;for Japan is&nbsp;`JPN`.

The **CITY** table is described as follows:  
![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg) 

Answer :

<pre class="wp-block-code"><code>select * from CITY where COUNTRYCODE='JPN';</code></pre>