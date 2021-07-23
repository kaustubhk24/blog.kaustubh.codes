---
id: 1489
title: Lists In Python Interview Question
date: 2021-04-17T04:22:04+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1489
permalink: /lists-in-python-interview-question/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "53"
rank_math_focus_keyword:
  - Lists In Python
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "229"
categories:
  - Python
---
Consider a list (`list = []`). You can perform the following commands:

  1. `insert i e`: Insert integer e  at position i.
  2. `print`: Print the list.
  3. `remove e`: Delete the first occurrence of integer e.
  4. `append e`: Insert integer e at the end of the list.
  5. `sort`: Sort the list.
  6. `pop`: Pop the last element from the list.
  7. `reverse`: Reverse the list.

Initialize your list and read in the value of n followed by n lines of commands where each command will be of the 7 types listed above. Iterate through each command in order and perform the corresponding operation on your list.

**Example**  
N=4

append 1

append 2

insert 3 1

print  


<pre class="wp-block-preformatted">[1, 3, 2]
</pre>

**Input Format**

The first line contains an integer,&nbsp;, denoting the number of commands.  
Each line&nbsp;&nbsp;of the&nbsp;&nbsp;subsequent lines contains one of the commands described above.

**Constraints**

  * The elements added to the list must be&nbsp;_integers_.

**Output Format**

For each command of type&nbsp;`print`, print the list on a new line.

**Sample Input 0**

<pre class="wp-block-preformatted">12
insert 0 5
insert 1 10
insert 0 6
print
remove 6
append 9
append 1
sort
print
pop
reverse
print
</pre>

**Sample Output 0**

<pre class="wp-block-preformatted">[6, 5, 10]
[1, 5, 9, 10]
[9, 5, 1]</pre>

## Answer

<pre class="wp-block-code"><code>if __name__ == '__main__':
    N = int(input())
    commands = {
        "insert": lambda x, y, z: x.insert(y, z),
        "print": lambda x: print(x),
        "remove": lambda x, y: x.remove(y),
        "append": lambda x, y: x.append(y),
        "sort": lambda x: x.sort(),
        "pop": lambda x: x.pop(),
        "reverse": lambda x: x.reverse(),
    }
    out = &#91;]
    for i in range(N):
        a = input()
        split_a = a.split(' ')
        command = split_a&#91;0]
        try:
            commands&#91;command](out, int(split_a&#91;1]), int(split_a&#91;2]))
        except IndexError:
            try:
                commands&#91;command](out, int(split_a&#91;1]))
            except IndexError:
                commands&#91;command](out)
</code></pre>

<div class="wp-block-coblocks-alert is-style-error" style="background-color:;color:">
  <p class="wp-block-coblocks-alert__title">
    Copyrights
  </p>
  
  <p class="wp-block-coblocks-alert__text">
    If you have any copyrights issues/complaints related to this article, you may send us mail at <a href="mailto:support@swayalgo.com" class="rank-math-link">support@swayalgo.com</a>, Also please refer to <a href="https://blog.kaustubh.codes/terms-conditions/" class="rank-math-link">Terms and Conditions</a> and <a href="https://blog.kaustubh.codes/privacy-policy/" class="rank-math-link">Privacy Policy.</a>
  </p>
</div>