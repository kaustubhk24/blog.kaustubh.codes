---
id: 895
title: 'Creating Tic  Tac Toe VB.NET With Source Code'
date: 2020-11-24T05:05:33+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=895
permalink: /tic-tac-toe-vb-net-with-source-code/
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "8"
rank_math_seo_score:
  - "19"
rank_math_focus_keyword:
  - Tic  Tac Toe VB.NET With Source Code
rank_math_analytic_object_id:
  - "75"
image: http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-21.png
categories:
  - VB.NET
---
 

Let's see How to make Tic Tac Toe VB.NET With Source Code?



# Creating Project

First Create a Project and make design like below<figure class="wp-block-image size-large">

<img loading="lazy" width="315" height="183" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-21.png" alt="Tic  Tac Toe VB.NET With Source Code" class="wp-image-896" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-21.png 315w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-21-300x174.png 300w" sizes="(max-width: 315px) 100vw, 315px" /> 

Enter code below 

<pre class="wp-block-code"><code>Public Class Form1
    Dim player As Integer = 0
    Dim isGameStarted As Boolean = False
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If Button1.Text = "" Then
            If player = 0 Then
                Button1.Text = "X"
                player = 1
            Else
                Button1.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        If Button2.Text = "" Then
            If player = 0 Then
                Button2.Text = "X"
                player = 1
            Else
                Button2.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        If Button3.Text = "" Then
            If player = 0 Then
                Button3.Text = "X"
                player = 1
            Else
                Button3.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
        If Button4.Text = "" Then
            If player = 0 Then
                Button4.Text = "X"
                player = 1
            Else
                Button4.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        If Button5.Text = "" Then
            If player = 0 Then
                Button5.Text = "X"
                player = 1
            Else
                Button5.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button6_Click(sender As Object, e As EventArgs) Handles Button6.Click
        If Button6.Text = "" Then
            If player = 0 Then
                Button6.Text = "X"
                player = 1
            Else
                Button6.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button7_Click(sender As Object, e As EventArgs) Handles Button7.Click
        If Button7.Text = "" Then
            If player = 0 Then
                Button7.Text = "X"
                player = 1
            Else
                Button7.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button8_Click(sender As Object, e As EventArgs) Handles Button8.Click
        If Button8.Text = "" Then
            If player = 0 Then
                Button8.Text = "X"
                player = 1
            Else
                Button8.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button9_Click(sender As Object, e As EventArgs) Handles Button9.Click
        If Button9.Text = "" Then
            If player = 0 Then
                Button9.Text = "X"
                player = 1
            Else
                Button9.Text = "0"
                player = 0
            End If
        End If
        isGameStarted = True
        printCurrentPlayer()
        Call win()
    End Sub
    Private Sub Button11_Click(sender As Object, e As EventArgs) Handles Button11.Click
        Button1.Text = ""
        Button2.Text = ""
        Button3.Text = ""
        Button4.Text = ""
        Button5.Text = ""
        Button6.Text = ""
        Button7.Text = ""
        Button8.Text = ""
        Button9.Text = ""
        printCurrentPlayer()
        isGameStarted = False
    End Sub
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        printCurrentPlayer()
    End Sub
    Public Function printCurrentPlayer()
        If player = 0 Then
            Label3.Text = "X"
        Else
            Label3.Text = "0"
        End If
    End Function
    Private Sub Button12_Click(sender As Object, e As EventArgs)
        printCurrentPlayer()
    End Sub
    Private Sub Button13_Click(sender As Object, e As EventArgs)
        printCurrentPlayer()
    End Sub
    Private Sub win()
        'Possible wins
        'horizontal 123 465 789
        'vertical 147 258 369
        'Diagonal 159 357
        If Button1.Text = "X" And Button2.Text = "X" And Button3.Text = "X" Or Button4.Text = "X" And Button6.Text = "X" And Button5.Text = "X" Or Button7.Text = "X" And Button8.Text = "X" And Button9.Text = "X" Then
            MsgBox("X Wins!")
        End If
        If Button1.Text = "X" And Button4.Text = "X" And Button7.Text = "X" Or Button2.Text = "X" And Button5.Text = "X" And Button8.Text = "X" Or Button3.Text = "X" And Button6.Text = "X" And Button9.Text = "X" Then
            MsgBox("Congratulations! X", vbInformation + MsgBoxStyle.OkOnly, "X won the Match")
        End If
        If Button1.Text = "X" And Button5.Text = "X" And Button9.Text = "X" Or Button3.Text = "X" And Button5.Text = "X" And Button7.Text = "X" Then
            MsgBox("Congratulations! X", vbInformation + MsgBoxStyle.OkOnly, "X won the Match")
        End If
        If Button1.Text = "0" And Button2.Text = "0" And Button3.Text = "0" Or Button4.Text = "0" And Button6.Text = "0" And Button5.Text = "0" Or Button7.Text = "0" And Button8.Text = "0" And Button9.Text = "0" Then
            MsgBox("Congratulations! 0", vbInformation + MsgBoxStyle.OkOnly, "0 won the Match")
        End If
        If Button1.Text = "0" And Button4.Text = "0" And Button7.Text = "0" Or Button2.Text = "0" And Button5.Text = "0" And Button8.Text = "0" Or Button3.Text = "0" And Button6.Text = "0" And Button9.Text = "0" Then
            MsgBox("Congratulations! 0", vbInformation + MsgBoxStyle.OkOnly, "0 won the Match")
        End If
        If Button1.Text = "0" And Button5.Text = "0" And Button9.Text = "0" Or Button3.Text = "0" And Button5.Text = "0" And Button7.Text = "0" Then
            MsgBox("Congratulations! 0", vbInformation + MsgBoxStyle.OkOnly, "0 won the Match")
        End If
    End Sub
    Private Sub LinkLabel1_LinkClicked(sender As Object, e As LinkLabelLinkClickedEventArgs) Handles LinkLabel1.LinkClicked
        Process.Start("https://blog.kaustubh.codes")
    End Sub
End Class
</code></pre>

# Output:
<iframe width="560" height="315" src="https://www.youtube.com/embed/HuHevUAhmQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Download Source

Download complete source code from below link

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link has-white-color has-text-color" href="https://github.com/JustInClicks-com/static-cdn/raw/main/Downloads/Desktop/Tic%20Tac%20Toe.rar" target="_blank" rel="noreferrer noopener">Download Now </a>
  </div>
</div>