---
id: 1151
title: 'Mini Project : Tic Tac Toe Game in VB.NET With FREE Source Code'
date: 2021-01-06T13:09:12+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1151
permalink: /mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/
rank_math_primary_category:
  - "8"
rank_math_seo_score:
  - "61"
rank_math_internal_links_processed:
  - "1"
rank_math_focus_keyword:
  - Tic Tac Toe Game in VB.NET
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - ""
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
rank_math_analytic_object_id:
  - "53"
image: http://blog.kaustubh.codes/wp-content/uploads/2021/01/Copy-of-mini-pro-vb-denomination-1200x675.png
categories:
  - VB.NET
tags:
  - How do you make a tic tac toe game in VB net?
  - 'Mini Project : Tic Tac Toe Game in VB.NET With FREE Source Code'
  - Tic Tac Toe Game
  - Tic Tac Toe Game in VB.NET
  - Tic Tac Toe Game in VB.NET With FREE Source Code
---
 

## How do you make a tic tac toe game in VB net? 

In this tutorial we are going to make complete mini project VB.NET game named tic tac toe,

### **Making UI**

Now Let&#8217;s get started, first open your Visual Studio and drag 10 Buttons and 1 label and 1 image view and arrange all of them like design below. You can download image assets from here.<figure class="wp-block-image size-large">

<img loading="lazy" width="736" height="484" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/tic-tac-toe.png" alt="Tic Tac Toe Game in VB.NET" class="wp-image-1152" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/tic-tac-toe.png 736w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/tic-tac-toe-300x197.png 300w" sizes="(max-width: 736px) 100vw, 736px" /> </figure> 

### **Code**

We will rename buttons as b1,b2,b3,b4,b5,b6,b8,b9 and label as lblnext and copy paste code as below.

First writing function to **restart** game 

<pre class="wp-block-code"><code> Public Function restart()
        b1.Text = ""
        b2.Text = ""
        b3.Text = ""
        b4.Text = ""
        b5.Text = ""
        b6.Text = ""
        b7.Text = ""
        b8.Text = ""
        b9.Text = ""
        Return True
    End Function</code></pre>

Now Let&#8217;s define next function to **shownext ,**

<pre class="wp-block-code"><code> Public Function showNext()
        If (nextPlayer = "X") Then
            nextPlayer = "O"
        ElseIf (nextPlayer = "O") Then
            nextPlayer = "X"
        End If
        lblnext.Text = "Next is :" + nextPlayer
        Return nextPlayer
    End Function</code></pre>

Next will be for Printing Correct value i.e **X** or **O**

<pre class="wp-block-code"><code>    Public Function PrintButtonText(ByVal btn As Button)
        If btn.Text = "" Then
            btn.Text = nextPlayer
            checkWinner()
            showNext()
        End If
        Return True
    End Function</code></pre>

Below function will be used to check **winner** of game

<pre class="wp-block-code"><code>    Public Function checkWinner()
        If b1.Text = b2.Text And b2.Text = b3.Text Then
            winner(b1, b2, b3)
        ElseIf b1.Text = b5.Text And b5.Text = b9.Text Then
            winner(b1, b5, b9)
        ElseIf b4.Text = b5.Text And b5.Text = b6.Text Then
            winner(b4, b5, b6)
        ElseIf b7.Text = b8.Text And b8.Text = b9.Text Then
            winner(b7, b8, b9)
        ElseIf b1.Text = b4.Text And b4.Text = b7.Text Then
            winner(b1, b4, b7)
        ElseIf b2.Text = b5.Text And b5.Text = b8.Text Then
            winner(b2, b5, b8)
        ElseIf b3.Text = b6.Text And b6.Text = b9.Text Then
            winner(b3, b6, b9)
        ElseIf b3.Text = b5.Text And b5.Text = b9.Text Then
            winner(b3, b5, b9)
        End If
    End Function</code></pre>

This last function will be used to Print winner that we found in Previous function.

<pre class="wp-block-code"><code>    Public Function winner(ByVal btn1 As Button, ByVal btn2 As Button, ByVal btn3 As Button)
        If btn1.Text = "" Or btn2.Text = "" Or btn3.Text = "" Then
        Else
            MsgBox(btn1.Text.ToString + " is Winner")
        End If
    End Function</code></pre>

Now Let&#8217;s Combine all code and it will look like below

<pre class="wp-block-code"><code>Public Class Form1
    Dim nextPlayer As Char = "X"
    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        restart()
        showNext()
    End Sub
    Public Function restart()
        b1.Text = ""
        b2.Text = ""
        b3.Text = ""
        b4.Text = ""
        b5.Text = ""
        b6.Text = ""
        b7.Text = ""
        b8.Text = ""
        b9.Text = ""
        Return True
    End Function
    Public Function showNext()
        If (nextPlayer = "X") Then
            nextPlayer = "O"
        ElseIf (nextPlayer = "O") Then
            nextPlayer = "X"
        End If
        lblnext.Text = "Next is :" + nextPlayer
        Return nextPlayer
    End Function
    Private Sub b1_Click(sender As Object, e As EventArgs) Handles b1.Click
        PrintButtonText(b1)
    End Sub
    Public Function PrintButtonText(ByVal btn As Button)
        If btn.Text = "" Then
            btn.Text = nextPlayer
            checkWinner()
            showNext()
        End If
        Return True
    End Function
    Private Sub b2_Click(sender As Object, e As EventArgs) Handles b2.Click
        PrintButtonText(b2)
    End Sub
    Private Sub b3_Click(sender As Object, e As EventArgs) Handles b3.Click
        PrintButtonText(b3)
    End Sub
    Private Sub b4_Click(sender As Object, e As EventArgs) Handles b4.Click
        PrintButtonText(b4)
    End Sub
    Private Sub b5_Click(sender As Object, e As EventArgs) Handles b5.Click
        PrintButtonText(b5)
    End Sub
    Private Sub b6_Click(sender As Object, e As EventArgs) Handles b6.Click
        PrintButtonText(b6)
    End Sub
    Private Sub b7_Click(sender As Object, e As EventArgs) Handles b7.Click
        PrintButtonText(b7)
    End Sub
    Private Sub b8_Click(sender As Object, e As EventArgs) Handles b8.Click
        PrintButtonText(b8)
    End Sub
    Private Sub b9_Click(sender As Object, e As EventArgs) Handles b9.Click
        PrintButtonText(b9)
    End Sub
    Public Function checkWinner()
        If b1.Text = b2.Text And b2.Text = b3.Text Then
            winner(b1, b2, b3)
        ElseIf b1.Text = b5.Text And b5.Text = b9.Text Then
            winner(b1, b5, b9)
        ElseIf b4.Text = b5.Text And b5.Text = b6.Text Then
            winner(b4, b5, b6)
        ElseIf b7.Text = b8.Text And b8.Text = b9.Text Then
            winner(b7, b8, b9)
        ElseIf b1.Text = b4.Text And b4.Text = b7.Text Then
            winner(b1, b4, b7)
        ElseIf b2.Text = b5.Text And b5.Text = b8.Text Then
            winner(b2, b5, b8)
        ElseIf b3.Text = b6.Text And b6.Text = b9.Text Then
            winner(b3, b6, b9)
        ElseIf b3.Text = b5.Text And b5.Text = b9.Text Then
            winner(b3, b5, b9)
        End If
    End Function
    Public Function winner(ByVal btn1 As Button, ByVal btn2 As Button, ByVal btn3 As Button)
        If btn1.Text = "" Or btn2.Text = "" Or btn3.Text = "" Then
        Else
            MsgBox(btn1.Text.ToString + " is Winner")
        End If
    End Function
End Class
</code></pre>

### **Video Guide**<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">

<div class="wp-block-embed__wrapper">
</div></figure> 

### **Download** 

if you want to Download complete Project with source code or want to download assets , Click Link Below, 

**Its FREE**

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="https://www.swayalgo.com/product/source-code-mini-project-tic-tac-toe-game-in-vb-net/" target="_blank" rel="noreferrer noopener">Download Now FREE</a>
  </div>
</div>

want to send Game to friends? Family ? Read <a href="https://www.swayalgo.com/how-to-make-setup-file-in-vb-net/" target="_blank" aria-label="Making Setup File here. (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Making Setup File here.</a>