---
id: 606
title: Program for Quick Sort in CPP
date: 2020-08-16T12:07:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-for-quick-sort-in-cpp/
permalink: /program-for-quick-sort-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-quick-sort-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7176961760367893603
rank_math_analytic_object_id:
  - "210"
categories:
  - CPP
---
<pre><br /><br />#include &lt;iostream> <br />using namespace std; <br />void swap(int* a, int* b) <br />{ <br />	int t = *a; <br />	*a = *b; <br />	*b = t; <br />} <br /><br />int partition (int arr[], int low, int high) <br />{ <br />	int pivot = arr[high]; <br />	int i = (low - 1); <br /><br />	for (int j = low; j &lt;= high - 1; j++) <br />	{ <br />	<br />		if (arr[j] &lt; pivot) <br />		{ <br />			i++; <br />			swap(&arr[i], &arr[j]); <br />		} <br />	} <br />	swap(&arr[i + 1], &arr[high]); <br />	return (i + 1); <br />} <br /><br /><br />void quickSort(int arr[], int low, int high) <br />{ <br />	if (low &lt; high) <br />	{ <br /><br />		int pi = partition(arr, low, high); <br /><br />	<br />		quickSort(arr, low, pi - 1); <br />		quickSort(arr, pi + 1, high); <br />	} <br />} <br /><br /><br />void printArray(int arr[], int size) <br />{ <br />	int i; <br />	for (i = 0; i &lt; size; i++) <br />		cout &lt;&lt; arr[i] &lt;&lt; " "; <br />	cout &lt;&lt; endl; <br />} <br /><br />int main() <br />{ <br />	int n;<br />	cout&lt;&lt;"How many elements :";<br />	cin>>n;<br />	cout&lt;&lt;"Enter elements :";<br />	int arr[n];<br />	for(int i=0;i&lt;n;i++)<br />	{<br />		cin>>arr[i];<br />	}<br />	quickSort(arr, 0, n - 1); <br />	cout &lt;&lt; "Sorted array: n"; <br />	printArray(arr, n); <br />	return 0; <br />} <br /><br /><br /><br /><br /></pre>