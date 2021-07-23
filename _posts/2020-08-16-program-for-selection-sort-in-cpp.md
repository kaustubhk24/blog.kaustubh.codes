---
id: 613
title: Program for Selection Sort in CPP
date: 2020-08-16T11:51:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-selection-sort-in-cpp/
permalink: /program-for-selection-sort-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-selection-sort-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5786506420622182111
rank_math_analytic_object_id:
  - "217"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br /> <br />using namespace std;<br /> <br />int main()<br />{<br />    int i,j,n,loc,temp,min;<br />    cout&lt;&lt;"Enter the number of elements:";<br />    cin>>n;<br />    cout&lt;&lt;"nEnter the elementsn";<br />     int a[n];<br />    for(i=0;i&lt;n;i++)<br />    {<br />        cin>>a[i];<br />    }<br /> <br />    for(i=0;i&lt;n-1;i++)<br />    {<br />        min=a[i];<br />        loc=i;<br />        for(j=i+1;j&lt;n;j++)<br />        {<br />            if(min>a[j])<br />            {<br />                min=a[j];<br />                loc=j;<br />            }<br />        }<br /> <br />        temp=a[i];<br />        a[i]=a[loc];<br />        a[loc]=temp;<br />    }<br /> <br />    cout&lt;&lt;"nSorted list is as followsn";<br />    for(i=0;i&lt;n;i++)<br />    {<br />        cout&lt;&lt;a[i]&lt;&lt;" ";<br />    }<br /> <br />    return 0;<br />}<br /><br /></pre>