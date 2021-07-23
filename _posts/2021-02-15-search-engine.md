---
id: 1246
title: Search Engine
date: 2021-02-15T07:02:46+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1246
permalink: /search-engine/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "45"
categories:
  - Python
---
Problem

<pre class="wp-block-code"><code>You’re working on a search engine. Watch your back Google!
The given code takes a text and a word as input and passes them to a function called search().
The search() function should return "Word found" if the word is present in the text, or "Word not found", if it’s not.
Sample Input
"This is awesome"
"awesome"
Sample Output
Word found</code></pre>

Program:

<pre class="wp-block-code"><code>
text = input()
word = input()
def search(text,word):
    if(word in text):
        return "Word found"
    else:
        return "Word not found"
print(search(text, word))</code></pre>