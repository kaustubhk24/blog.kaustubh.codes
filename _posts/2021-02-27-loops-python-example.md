---
id: 1280
title: Loops Python Example
date: 2021-02-27T02:53:08+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1280
permalink: /loops-python-example/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "9"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "31"
categories:
  - Python
---
**Task**  
The provided code stub reads and integer, n, from STDIN. For all non-negative integers i<n , print i<sup>2</sup>.

**Example**

n=3

The list of non-negative integers that are less than n=3  is [0,1,2] . Print the square of each number on a separate line.

<pre class="wp-block-preformatted">0
1
4
</pre>

**Input Format**

The first and only line contains the integer, n .

**Constraints**

1<=n<=20

**Output Format**

Print n lines, one corresponding to each i.

**Sample Input 0**

<pre class="wp-block-preformatted">5
</pre>

**Sample Output 0**

<pre class="wp-block-preformatted">0
1
4
9
16
</pre>

<pre class="wp-block-code"><code># Answer
if __name__ == '__main__':
    n = int(input())
if 1&lt;=n and n&lt;=20:
    for i in range(0,n):
        print(i**2)</code></pre>

<pre class="wp-block-code"><code># Output
5
1
4
9
16</code></pre>