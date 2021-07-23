---
id: 544
title: 'Write a VB a program to accept a string from user if the string contain any integer number that get replaced by *.'
date: 2020-08-28T14:49:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-a-program-to-accept-a-string-from-user-if-the-string-contain-any-integer-number-that-get-replaced-by/
permalink: /write-a-vb-a-program-to-accept-a-string-from-user-if-the-string-contain-any-integer-number-that-get-replaced-by/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-string-from.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6013565787372503666
rank_math_analytic_object_id:
  - "148"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br /><br />                Dim str As String<br />                Dim str1 As String<br />                str = Text1.Text<br />                str1 = Replace(str, "9", "*")<br />                str1 = Replace(str1, "8", "*")<br />                str1 = Replace(str1, "7", "*")<br />                str1 = Replace(str1, "6", "*")<br />                str1 = Replace(str1, "5", "*")<br />                str1 = Replace(str1, "4", "*")<br />                str1 = Replace(str1, "3", "*")<br />                str1 = Replace(str1, "2", "*")<br />                str1 = Replace(str1, "1", "*")<br />                str1 = Replace(str1, "0", "*")<br />                Text1.Text = str1<br />End Sub<br />  <br />          <br /><br /><br /></pre>