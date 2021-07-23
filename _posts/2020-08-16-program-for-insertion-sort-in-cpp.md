---
id: 612
title: Program for Insertion Sort in CPP
date: 2020-08-16T11:54:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-for-insertion-sort-in-cpp/
permalink: /program-for-insertion-sort-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-insertion-sort-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4902508351736905119
rank_math_analytic_object_id:
  - "216"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br /> <br />using namespace std;<br /> <br />int main()<br />{<br />    int i,j,n,temp;<br />    cout&lt;&lt;"Enter the number of elements:";<br />    cin>>n;<br />    int a[n];<br />    cout&lt;&lt;"nEnter the elementsn";<br /> <br />    for(i=0;i&lt;n;i++)<br />    {<br />        cin>>a[i];<br />    }<br /> <br />    for(i=1;i&lt;=n-1;i++)<br />    {<br />        temp=a[i];<br />        j=i-1;<br /> <br />        while((temp&lt;a[j])&&(j>=0))<br />        {<br />            a[j+1]=a[j];    <br />            j=j-1;<br />        }<br /> <br />        a[j+1]=temp;   <br />    }<br /> <br />    cout&lt;&lt;"nSorted list is as followsn";<br />    for(i=0;i&lt;n;i++)<br />    {<br />        cout&lt;&lt;a[i]&lt;&lt;" ";<br />    }<br /> <br />    return 0;<br />}<br /><br /><br /></pre>