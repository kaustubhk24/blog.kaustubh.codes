---
id: 1396
title: Get List as Input And Print Odd Numbers from List
date: 2021-03-08T06:36:19+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1396
permalink: /print-odd-numbers-from-list/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "66"
rank_math_focus_keyword:
  - Print Odd Numbers from List
rank_math_description:
  - In this Tutorial We will Write Various Programs to Print Odd Numbers from List | Program is In Python | Let us see how to Print Odd Numbers from List
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "16"
categories:
  - Python
tags:
  - Get List as Input And Print Odd Numbers from List
  - Input And Print Odd Numbers from List
---
In this program we have to take list as input from user and we will print Odd Numbers from list.

<pre class="wp-block-code"><code>#Expected Input
Enter Number of Elements in List : 3
Enter Element 1 :7
Enter Element 2 :2
Enter Element 3 :6
Output :
Following are the Odd Numbers From List Given
7
</code></pre>



<p id="block-47990e0a-ccb9-4a6f-ac97-4727095e07bd">
  In this program we have to take list as input from user and we will print Odd Numbers from list.
</p>

<pre id="block-105bb593-1fd0-4ca0-8f25-97d4761d6f81" class="wp-block-code"><code>#Expected Input
Enter Number of Elements in List : 3
Enter Element 1 :7
Enter Element 2 :2
Enter Element 3 :6
Output :
Following are the Odd Numbers From List Given
7</code></pre>

Answer :

<pre class="wp-block-code"><code># Function to Get Number and print if it is odd
def printOdd():
    print("Following are the Odd Numbers from Given List")
    for num in nums:
        if not num%2==0:
            print(num)
nums=&#91;] # declaring list
# Input Number of Elements
n=int(input("Enter Number of Elements :"))
# iterating throgh nums list to get elements run time
for i in range(1,n+1):
    nums.append(int(input("Enter Element {} :".format(i))))
    #Appending numbers in num array taken from user input
    #calling function to print output
printOdd()
</code></pre>

Output: 1

<pre class="wp-block-code"><code>Enter Number of Elements in List : 3
Enter Element 1 :7
Enter Element 2 :2
Enter Element 3 :6
Following are the Odd Numbers From List Given
7</code></pre>

Output 2:

<pre class="wp-block-code"><code>Enter Number of Elements :7
Enter Element 1 :7
Enter Element 2 :6
Enter Element 3 :5
Enter Element 4 :4
Enter Element 5 :3
Enter Element 6 :2
Enter Element 7 :1
Following are the Odd Numbers from Given List
7
5
3
1</code></pre>