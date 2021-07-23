---
id: 1284
title: Print Function
date: 2021-02-27T03:16:06+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1284
permalink: /print-function/
rank_math_seo_score:
  - "9"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "29"
categories:
  - Python
---
The included code stub will read an integer, n, from STDIN.

Without using any string methods, try to print the following:

123..

Note that &#8220;..&#8221; represents the consecutive values in between.

**Example**

n=5

Print the string 12345.

**Input Format**

The first line contains an integer n .

**Constraints**

1<=n<=150

**Output Format**

Print the list of integers from 1 through  n as a string, without spaces.

**Sample Input 0**

<pre class="wp-block-preformatted">3
</pre>

**Sample Output 0**

<pre class="wp-block-preformatted">123</pre>

<pre class="wp-block-code"><code>#Answer
if __name__ == '__main__':
    n = int(input())
str1=""
if 1&lt;=n and n&lt;=150:
    for i in range(1,n+1):
        str1=str1+str(i)
    print(str1)
    </code></pre>

<pre class="wp-block-code"><code>Output:
3
123</code></pre>