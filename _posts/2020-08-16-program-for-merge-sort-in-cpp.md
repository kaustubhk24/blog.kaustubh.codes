---
id: 607
title: Program for Merge Sort in CPP
date: 2020-08-16T12:06:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-merge-sort-in-cpp/
permalink: /program-for-merge-sort-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-merge-sort-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8527973563616441349
rank_math_analytic_object_id:
  - "211"
categories:
  - CPP
---
<pre><br /><br /><br />#include&lt;iostream><br />using namespace std;<br />void swapping(int &a, int &b) <br />{ <br /><br />   int temp;<br />   temp = a;<br />   a = b;<br />   b = temp;<br />}<br />void display(int *array, int size) {<br />   for(int i = 0; i&lt;size; i++)<br />      cout &lt;&lt array[i] &lt;&lt; " ";<br />   cout &lt;&lt; endl;<br />}<br />void merge(int *array, int l, int m, int r) {<br />   int i, j, k, nl, nr;<br />  <br />   nl = m-l+1; nr = r-m;<br />   int larr[nl], rarr[nr];<br /> <br />   for(i = 0; i&lt;nl; i++)<br />      larr[i] = array[l+i];<br />   for(j = 0; j&lt;nr; j++)<br />      rarr[j] = array[m+1+j];<br />   i = 0; j = 0; k = l;<br />   <br />   while(i &lt; nl && j&lt;nr) {<br />      if(larr[i] &lt;= rarr[j]) {<br />         array[k] = larr[i];<br />         i++;<br />      }else{<br />         array[k] = rarr[j];<br />         j++;<br />      }<br />      k++;<br />   }<br />   while(i&lt;nl) {      <br />      array[k] = larr[i];<br />      i++; k++;<br />   }<br />   while(j&lt;nr) {     <br />      array[k] = rarr[j];<br />      j++; k++;<br />   }<br />}<br />void mergeSort(int *array, int l, int r) {<br />   int m;<br />   if(l &lt; r) {<br />      int m = l+(r-l)/2;<br />    <br />      mergeSort(array, l, m);<br />      mergeSort(array, m+1, r);<br />      merge(array, l, m, r);<br />   }<br />}<br />int main() {<br />   int n;<br />   cout &lt;&lt; "Enter the number of elements: ";<br />   cin >> n;<br />   int arr[n];     <br />   cout &lt;&lt; "Enter elements:" &lt;&lt; endl;<br />   for(int i = 0; i&lt;n; i++) {<br />      cin >> arr[i];<br />   }<br />   cout &lt;&lt; "Array before Sorting: ";<br />   display(arr, n);<br />   mergeSort(arr, 0, n-1);    <br />   cout &lt;&lt; "Array after Sorting: ";<br />   display(arr, n);<br />}<br /><br /><br /></pre>