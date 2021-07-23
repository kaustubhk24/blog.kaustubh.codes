---
id: 1112
title: Mini Project in VB.NET Denomination With Source Code
date: 2021-01-02T14:46:37+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1112
permalink: /mini-project-in-vb-net-denomination/
rank_math_seo_score:
  - "63"
rank_math_primary_category:
  - "8"
rank_math_description:
  - Mini Project in VB.NET Denomination, In this tutorial we will make Mini Project VB.NET for denomination. User will enter data and we will show the total to user.
rank_math_focus_keyword:
  - Mini Project in VB.NET Denomination
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "59"
image: http://blog.kaustubh.codes/wp-content/uploads/2021/01/mini-pro-vb-denomination-1200x675.png
categories:
  - VB.NET
tags:
  - denomination app for download
  - denomination app for windows
  - download for windows mini project
  - Mini Project in VB.NET Denomination With Source Code
  - mini project with source code
  - vb.net Mini project with source code
---
In this tutorial we will make Mini Project VB.NET for denomination. User will enter data and we will show the total to user.

## Making UI

First you need to make UI, Now make UI like below, name textbox like t2000,t500,t200 upto t1.<figure class="wp-block-image size-large">

<img loading="lazy" width="735" height="625" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-4.png" alt="Mini Project in VB.NET Denomination" class="wp-image-1113" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-4.png 735w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-4-300x255.png 300w" sizes="(max-width: 735px) 100vw, 735px" /> </figure> 

## Code

Write Code below in Code of the file

<pre class="wp-block-code"><code>Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    End Sub
    Public Function calculate()
        Dim n2000 As Integer = Integer.Parse(t2000.Text.ToString())
        Dim n500 As Integer = Integer.Parse(t500.Text.ToString())
        Dim n200 As Integer = Integer.Parse(t200.Text.ToString())
        Dim n100 As Integer = Integer.Parse(t100.Text.ToString())
        Dim n50 As Integer = Integer.Parse(t50.Text.ToString())
        Dim n20 As Integer = Integer.Parse(t20.Text.ToString())
        Dim n10 As Integer = Integer.Parse(t10.Text.ToString())
        Dim n5 As Integer = Integer.Parse(t5.Text.ToString())
        Dim n2 As Integer = Integer.Parse(t2.Text.ToString())
        Dim n1 As Integer = Integer.Parse(t1.Text.ToString())
        Dim answer As Integer
        answer = n2000 * 2000 +
            n500 * 500 +
            n200 * 200 +
            n100 * 100 +
            n50 * 50 +
            n20 * 20 +
            n10 * 10 +
            n5 * 5 +
            n2 * 2 +
            n1 * 1
        ' MsgBox(answer.ToString)
        amt.Text = answer.ToString
    End Function
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        calculate()
    End Sub
End Class
</code></pre>

## Video Guide<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">

<div class="wp-block-embed__wrapper">
</div></figure> 

## Download

Download Project Source Code for FREE from here,

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="https://www.swayalgo.com/product/mini-project-in-vb-net-denomination-with-source-code/" target="_blank" rel="noreferrer noopener">Download Source Code</a>
  </div>
</div>