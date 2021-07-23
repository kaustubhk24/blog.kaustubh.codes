---
id: 1278
title: Python If-Else
date: 2021-02-27T02:44:09+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1278
permalink: /python-if-else/
rank_math_seo_score:
  - "9"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "32"
categories:
  - Python
---
**Task**  
Given an integer, n, perform the following conditional actions:

  * If  n is odd, print `Weird`
  * If  n is even and in the inclusive range of 2 to 5, print `Not Weird`
  * If n is even and in the inclusive range of  6 to 20 , print `Weird`
  * If n is even and greater than 20, print `Not Weird`

**Input Format**

A single line containing a positive integer, n .

**Constraints**

  * 1<=n<=100

**Output Format**

Print&nbsp;`Weird`&nbsp;if the number is weird. Otherwise, print&nbsp;`Not Weird`.

**Sample Input 0**

<pre class="wp-block-preformatted">3
</pre>

**Sample Output 0**

<pre class="wp-block-preformatted">Weird
</pre>

**Explanation 0**

n=3  
 n is odd and odd numbers are weird, so print `Weird`.

**Sample Input 1**

<pre class="wp-block-preformatted">24
</pre>

**Sample Output 1**

<pre class="wp-block-preformatted">Not Weird
</pre>

**Explanation 1**

n=24  
 n>20 and n is even, so it is not weird.



<pre class="wp-block-code"><code># Answer
#!/bin/python3
import math
import os
import random
import re
import sys
if __name__ == '__main__':
    N = int(input().strip())
if N % 2 != 0:
    print ("Weird")
else:
    if N >= 2 and N &lt;= 5:
        print ("Not Weird")
    elif N >= 6 and N &lt;= 20:
        print ("Weird")
    elif N > 20:
        print ("Not Weird")</code></pre>

<pre class="wp-block-code"><code>Output:
3
Weird</code></pre>