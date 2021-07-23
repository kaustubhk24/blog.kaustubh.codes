---
id: 603
title: Program for Sparse Matrix in CPP
date: 2020-08-16T12:13:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-sparse-matrix-in-cpp/
permalink: /program-for-sparse-matrix-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-sparse-matrix-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/254369581786998278
rank_math_analytic_object_id:
  - "207"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std; <br />int main()<br />{<br />   int sparse1[10][3],sparse2[10][3],sum[10][3];<br />   int m,n,p,q,t1,t2,s,d,element;<br />   int i,j;<br />   cout&lt;&lt;"Enter the number of rows and columns:";<br />   cin>>m>>n;<br />   t1=t2=0;<br />   cout&lt;&lt;"Enter the first matrix:n";<br />   for(i=1;i&lt;=m;i++)<br />   {<br />      for(j=1;j&lt;=n;j++)<br />      {<br />	 cin>>element;<br />	 if(element!=0)<br />	 {<br />	    t1=t1+1;<br />	    sparse1[t1][1]=i;<br />	    sparse1[t1][2]=j;<br />	    sparse1[t1][3]=element;<br />	 }<br />      }<br />   }<br />   sparse1[0][1]=m;<br />   sparse1[0][2]=n;<br />   sparse1[0][3]=t1;<br />   cout&lt;&lt;"Enter the second matrix:n";<br />   for(i=1;i&lt;=m;i++)<br />   {<br />      for(j=1;j&lt;=n;j++)<br />      {<br />	 cin>>element;<br />	 if(element!=0)<br />	 {<br />	    t2=t2+1;<br />	    sparse2[t2][1]=i;<br />	    sparse2[t2][2]=j;<br />	    sparse2[t2][3]=element;<br />	 }<br />      }<br />   }<br />   sparse2[0][1]=m;<br />   sparse2[0][2]=n;<br />   sparse2[0][3]=t2;<br />   cout&lt;&lt;"The first sparse matrix is:";<br />     cout&lt;&lt;"n-----------------------n";<br />   for(i=0;i&lt;=t1;i++)<br />   {<br />      cout&lt;&lt;sparse1[i][1]&lt;&lt;"t"&lt;&lt;sparse1[i][2]&lt;&lt;"t"&lt;&lt;sparse1[i][3]&lt;&lt;"n";<br />   }<br />   cout&lt;&lt;"The second sparse matrix is:";<br />    cout&lt;&lt;"n-----------------------n";<br />   for(i=0;i&lt;=t2;i++)<br />   {<br />      cout&lt;&lt;sparse2[i][1]&lt;&lt;"t"&lt;&lt;sparse2[i][2]&lt;&lt;"t"&lt;&lt;sparse2[i][3]&lt;&lt;"n";<br />   }<br />   i=j=s=d=1;<br />   while((i&lt;=t1)&&(j&lt;=t2))<br />   {<br />      if(sparse1[i][1]==sparse2[j][1])    <br />      {<br />	 if(sparse1[i][2]==sparse2[j][2]) <br />	 {<br />	    sum[s][1]=sparse1[i][1];<br />	    sum[s][2]=sparse1[i][2];<br />	    sum[s][3]=sparse1[i][3]+sparse2[j][3];<br />	    i++;<br />	    j++;<br />	    if(sum[s][3]!=0)<br />	       s++;<br />	 }<br />	 else <br />	 {<br />	    if(sparse1[i][2]&lt;sparse2[j][2])<br />	    {<br />	       sum[s][1]=sparse1[i][1];<br />	       sum[s][2]=sparse1[i][2];<br />	       sum[s][3]=sparse1[i][3];<br />	       i++;<br />	       s++;<br />	       d++;<br />	    }<br />	    else<br />	    {<br />	       sum[s][1]=sparse2[j][1];<br />	       sum[s][2]=sparse2[j][2];<br />	       sum[s][3]=sparse2[j][3];<br />	       j++;<br />	       d++;<br />	       s++;<br />	    }<br />	 }<br />      }<br />      else  <br />      {<br />	 if(sparse1[i][1]&lt;sparse2[j][1])<br />	 {<br />	    sum[s][1]=sparse1[i][1];<br />	    sum[s][2]=sparse1[i][2];<br />	    sum[s][3]=sparse1[i][3];<br />	    i++;<br />	    d++;<br />	    s++;<br />	 }<br />	 else<br />	 {<br />	    sum[s][1]=sparse2[j][1];<br />	    sum[s][2]=sparse2[j][2];<br />	    sum[s][3]=sparse2[j][3];<br />	    j++;<br />	    s++;<br />	    d++;<br />	 }<br />      }<br />   }<br />   if(i&lt;=t1)<br />   {<br />      for(p=i;p&lt;=t1;p++)<br />      {<br />	 sum[s][1]=sparse1[p][1];<br />	 sum[s][2]=sparse1[p][2];<br />	 sum[s][3]=sparse1[p][3];<br />	 s++;<br />	 d++;<br />      }<br />   }<br />   else if(j&lt;=t2)<br />   {<br />      for(p=j;p&lt;=t2;p++)<br />      {<br />	 sum[s][1]=sparse2[p][1];<br />	 sum[s][2]=sparse2[p][2];<br />	 sum[s][3]=sparse2[p][3];<br />	 s++;<br />	 d++;<br />      }<br />   }<br />    sum[0][1]=m,sum[0][2]=n,sum[0][3]=s-1;<br />   cout&lt;&lt;"The sum is :";<br />   cout&lt;&lt;"n-----------------------n";<br />   for(i=0;i&lt;s;i++)<br />   {<br />      cout&lt;&lt;sum[i][1]&lt;&lt;"t"&lt;&lt;sum[i][2]&lt;&lt;"t"&lt;&lt;sum[i][3]&lt;&lt;"n";<br />   }<br />   return 0;<br />}<br /><br /><br /></pre>