---
id: 951
title: VB.NET Program to Distribute Amount in Notes
date: 2020-12-08T15:51:41+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=951
permalink: /vb-net-program-to-distribute-amount-in-notes/
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "32"
rank_math_seo_score:
  - "65"
rank_math_focus_keyword:
  - VB.NET Program to Distribute Amount in Notes
rank_math_analytic_object_id:
  - "68"
categories:
  - VB.NET
tags:
  - VB.NET Program to Distribute Amount in Notes
---
We are going to write VB.NET Program to Distribute Amount in Notes.

Design screen like below<figure class="wp-block-image size-large">

<img loading="lazy" width="782" height="360" src="http://blog.kaustubh.codes/wp-content/uploads/2020/12/image-2.png" alt="VB.NET Program to Distribute Amount in Notes " class="wp-image-952" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-2.png 782w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-2-300x138.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-2-768x354.png 768w" sizes="(max-width: 782px) 100vw, 782px" /> </figure> 

Now double click on screen and Add this code in **form1.vb**

<pre class="wp-block-code"><code>/**
 *    This program will distribute amount in currency notes
 *    In India we have 2000,500,100,50,20,10,5,2,1 Notes for program
 *
 *    For Example if we enter amount 365 Then output will be
 *
 *    200 X 1=200
 *    100 X 1=100
 *    50 X  1=50
 *    10 X  1=10
 *    5  X  1=5
 * ----------------
 *   Total :  365
 *
 *
 */
Public Class Form1
    Dim n2000, n500, n200, n100, n50, n20, n10, n5, n2, n1 As Integer
    Dim Number As Integer
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Number = Integer.Parse(TextBox1.Text)
        start(Number)
        Dim Message As String = Number.ToString + " can be distributed as " + vbNewLine + "2000 X " + n2000.ToString + " = " + (n2000 * 2000).ToString + vbNewLine + "500 X " + n500.ToString + " = " + (n500 * 500).ToString + vbNewLine + "200 X " + n200.ToString + " = " + (n200 * 200).ToString + vbNewLine + "100 X " + n100.ToString + " = " + (n100 * 100).ToString + vbNewLine + "50 X " + n50.ToString + " = " + (n50 * 50).ToString + vbNewLine + "20 X " + n20.ToString + " = " + (n20 * 20).ToString + vbNewLine + "10 X " + n10.ToString + " = " + (n10 * 10).ToString + vbNewLine + "5 X " + n5.ToString + " = " + (n5 * 5).ToString + vbNewLine + "2 X " + n2.ToString + " = " + (n2 * 2).ToString + vbNewLine + "1 X " + n1.ToString + " = " + (n1 * 1).ToString
        MsgBox(Message)
    End Sub
    Public Function start(ByVal amount As Integer)
        If amount &gt;= 2000 Then
            amount = amount - 2000
            n2000 += 1
            start(amount)
        ElseIf amount &gt;= 500 Then
            amount = amount - 500
            n500 += 1
            start(amount)
        ElseIf amount &gt;= 200 Then
            amount = amount - 200
            n200 += 1
            start(amount)
        ElseIf amount &gt;= 100 Then
            amount = amount - 100
            n100 += 1
            start(amount)
        ElseIf amount &gt;= 50 Then
            amount = amount - 50
            n50 += 1
            start(amount)
        ElseIf amount &gt;= 20 Then
            amount = amount - 20
            n20 += 1
            start(amount)
        ElseIf amount &gt;= 5 Then
            amount = amount - 5
            n5 += 1
            start(amount)
        ElseIf amount &gt;= 2 Then
            amount = amount - 2
            n2 += 1
            start(amount)
        ElseIf amount &gt;= 1 Then
            amount = amount - 1
            n1 += 1
            start(amount)
        End If
    End Function
End Class</code></pre>

Output:<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="460" src="http://blog.kaustubh.codes/wp-content/uploads/2020/12/image-3-1024x460.png" alt="VB.NET Program to Distribute Amount in Notes " class="wp-image-953" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-3-1024x460.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-3-300x135.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-3-768x345.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-3.png 1083w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 

Get same program in <a href="https://www.swayalgo.com/distribute-amount-in-notes/" target="_blank" aria-label="Java here. (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Java here.</a>