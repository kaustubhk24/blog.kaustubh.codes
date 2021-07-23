---
id: 530
title: Write a Vb.net program to accept a character from keyboard and check whether it is vowel or not. Also display the case of that character.
date: 2020-08-28T15:14:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-accept-a-character-from-keyboard-and-check-whether-it-is-vowel-or-not-also-display-the-case-of-that-character/
permalink: /write-a-vb-net-program-to-accept-a-character-from-keyboard-and-check-whether-it-is-vowel-or-not-also-display-the-case-of-that-character/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-accept-character.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7301328013340907953
rank_math_analytic_object_id:
  - "135"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />Dim c AsString<br />Dim asc1 AsInteger<br /> c = TextBox1.Text<br /> asc1 = Asc(c)<br />' MsgBox(asc1)<br /><br />If c = "a"Or c = "A"Or c = "e"Or c = "E"Or c = "i"Or c = "I"Or c = "o"Or c =<br />"O"Or c = "u"Or c = "U"Then<br />If asc1 &lt;= 122 And asc1 >= 97 Then<br /> MsgBox("vowel in Lowercase")<br />Else<br /> MsgBox("vowel in Uppercase")<br />EndIf<br />ElseIf asc1 &lt;= 122 And asc1 >= 97 Then<br /> MsgBox("Not Vowel in Lowercase")<br />Else<br /> MsgBox("Not Vowel in Uppercase")<br />EndIf<br />EndSub<br />EndClass<br /><br /><br /></pre>