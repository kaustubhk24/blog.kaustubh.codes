---
id: 1131
title: Data Types in VB.NET
date: 2021-01-04T05:06:46+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1131
permalink: /data-types-in-vb-net/
rank_math_primary_category:
  - "8"
rank_math_seo_score:
  - "69"
rank_math_focus_keyword:
  - Data Types in VB.NET
rank_math_description:
  - Data Types in VB.NET, Let us see the data types in VB.NET , All data types covered with example , syntax also included.
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "56"
categories:
  - VB.NET
---
## Declaration of Data type

To declare Datatype, we use following syntax, For example

<pre class="wp-block-code"><code>Dim str As String</code></pre>

Now let us see Data types in VB.NET

## Data Types in VB.NET

What are the data types available in VB?

### **String** 

String Data types used to Save words in varible Like &#8216;abc&#8217;, Its size depends on platform implementation. example

<pre class="wp-block-code"><code>Dim str As String= "PQR"</code></pre>

### **Boolean**

Boolean is used to store values like **true** or **false**, You can also use 1 for true and 0 for false.

<pre class="wp-block-code"><code>Dim flag As Boolean= false</code></pre>

### **Integer** 

Integer data type is used to store numbers between -2,147,483,648 and 2,147,483,647 (signed), Size of Integer variable is 4 bytes

<pre class="wp-block-code"><code>Dim a As Integer=55</code></pre>

### **Byte**

Byte data type is used for 0 to 255 (unsigned), it takes 1 byte of storage.

<pre class="wp-block-code"><code>Dim a As Byte=0</code></pre>

### **Char**

Char is used for defining single character

<pre class="wp-block-code"><code>Dim c As Char = "a"
</code></pre>

### **Date**

As name suggest date is used to save Date values , it&#8217;s size is 8 bytes.

<pre class="wp-block-code"><code>Dim dt As Date = Today
</code></pre>

### **Single**

single data type size is 4 bytes. 1.401298E-45 to 3.4028235E+38 for positive values and -3.4028235E+38 to -1.401298E-45 for negative values

<pre class="wp-block-code"><code>Dim r As Single = 2</code></pre>

### **Long**

Long data type is used to store 8 bytes data types

<pre class="wp-block-code"><code>Dim d as Long = 2</code></pre>

### **Double**

Double used to store decimal values, size is 8 bytes

<pre class="wp-block-code"><code>Dim dbl as Double =3.22</code></pre>

These are most commonly used data types in Visual Basic .NET 

### **How do you declare in VB?**

<figure class="wp-block-image size-large">

<img loading="lazy" width="787" height="234" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-6.png" alt="Data Types in VB.NET" class="wp-image-1135" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-6.png 787w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-6-300x89.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-6-768x228.png 768w" sizes="(max-width: 787px) 100vw, 787px" /> 



<pre class="wp-block-code"><code>Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Dim str As String = "PQR"
        Dim flag As Boolean = False
        Dim a As Integer = 55
        Dim b As Byte = 0
        Dim c As Char = "a"
        Dim dt As Date = Today
        Dim r As Single = 2
    End Sub
End Class</code></pre>



<a href="https://blog.kaustubh.codes/index-complete-visual-basic-net-series/" target="_blank" aria-label="Visit Index  (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Visit Index </a>