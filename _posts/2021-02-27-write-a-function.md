---
id: 1282
title: Write a function
date: 2021-02-27T03:06:36+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1282
permalink: /write-a-function/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "15"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "30"
categories:
  - Python
---
An extra day is added to the calendar almost every four years as February 29, and the day is called a&nbsp;_leap day_. It corrects the calendar for the fact that our planet takes approximately 365.25 days to orbit the sun. A leap year contains a leap day.

In the Gregorian calendar, three conditions are used to identify leap years:

  * The year can be evenly divided by 4, is a leap year, unless:
      * The year can be evenly divided by 100, it is NOT a leap year, unless:
          * The year is also evenly divisible by 400. Then it is a leap year.

This means that in the Gregorian calendar, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years.&nbsp;[Source](http://www.timeanddate.com/date/leapyear.html)

**Task**

Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean&nbsp;`True`, otherwise return&nbsp;`False`.

Note that the code stub provided reads from STDIN and passes arguments to the&nbsp;`is_leap`&nbsp;function. It is only necessary to complete the&nbsp;`is_leap`&nbsp;function.

**Input Format**

Read year, the year to test.

**Constraints**

<pre class="wp-block-code"><code>1900 &lt;= year &lt;= 10&lt;sup>5&lt;/sup></code></pre>

**Output Format**

The function must return a Boolean value (True/False). Output is handled by the provided code stub.

**Sample Input 0**

<pre class="wp-block-preformatted">1990
</pre>

**Sample Output 0**

<pre class="wp-block-preformatted">False
</pre>

**Explanation 0**

1990 is not a multiple of 4 hence it&#8217;s not a leap year.



<pre class="wp-block-code"><code># Answer
def is_leap(year):
    leap = False
    if 1900&lt;=year and year&lt;=10**5:
        if year%100==0:
            if year%400==0:
                leap=True
            else:
                leap=False;
        elif year%4==0:
            leap=True
        else:
            leap=False
    else:
        leap=False
    # Write your logic here
    return leap
year = int(input())
print(is_leap(year))</code></pre>

<pre class="wp-block-code"><code>Output:
1990
False</code></pre>