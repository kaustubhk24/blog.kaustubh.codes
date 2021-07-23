---
id: 545
title: Create an application in VB to display 4 X 4 squares on the screen. One of the blocks will be active with black color all other block will be fill with blue color. Provide a command button as follows to move the active cell the active cell should be change only if it is within the boundary.
date: 2020-08-28T14:48:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/create-an-application-in-vb-to-display-4-x-4-squares-on-the-screen-one-of-the-blocks-will-be-active-with-black-color-all-other-block-will-be-fill-with-blue-color-provide-a-command-button-as-follows/
permalink: /create-an-application-in-vb-to-display-4-x-4-squares-on-the-screen-one-of-the-blocks-will-be-active-with-black-color-all-other-block-will-be-fill-with-blue-color-provide-a-command-button-as-follows/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/create-application-in-vb-to-display-4-x.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7254873055392441612
rank_math_analytic_object_id:
  - "149"
categories:
  - VB.NET
---
Create an application in VB to display 4 X 4 squares on the screen. One of the blocks will be active with black color all other block will be fill with blue color. Provide a command button as follows to move the active cell the active cell should be change only if it is within the boundary. 

<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-vcdvsYodu4Y/X0kZKEqq_qI/AAAAAAAAfg8/H3cLG-S6zfkMY3pcJV7wOIYzwYqOcY4PACLcBGAsYHQ/s557/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="109" data-original-width="557" src="https://1.bp.blogspot.com/-vcdvsYodu4Y/X0kZKEqq_qI/AAAAAAAAfg8/H3cLG-S6zfkMY3pcJV7wOIYzwYqOcY4PACLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br /><br />Dim i As Integer<br />Private Sub cmdDown_Click()<br />                If Text1(i).BackColor = vbDesktop And i &lt;> 12 And Text1(i).BackColor = vbDesktop And i &lt;> 13 And Text1(i).BackColor = vbDesktop And i &lt;> 14 And Text1(i).BackColor = vbDesktop And i &lt;> 15 Then<br />                                Text1(i).BackColor = vbActiveTitleBar<br />                                Text1(i + 4).BackColor = vbDesktop<br />                                i = i + 4<br />                Else<br />                                MsgBox ("Out of Bounds")<br />                End If<br />End Sub<br />Private Sub cmdLeft_Click()<br />                If Text1(i).BackColor = vbDesktop And i &lt;> 0 And Text1(i).BackColor = vbDesktop And i &lt;> 4 And Text1(i).BackColor = vbDesktop And i &lt;> 8 And Text1(i).BackColor = vbDesktop And i &lt;> 12 Then<br />                                Text1(i).BackColor = vbActiveTitleBar<br />                                Text1(i - 1).BackColor = vbDesktop<br />                                i = i - 1<br />                Else<br />                                MsgBox ("Out of Bounds")<br />                End If<br />End Sub<br /><br />Private Sub cmdRight_Click()<br />                If Text1(i).BackColor = vbDesktop And i &lt;> 3 And Text1(i).BackColor = vbDesktop And i &lt;> 7 And Text1(i).BackColor = vbDesktop And i &lt;> 11 And Text1(i).BackColor = vbDesktop And i &lt;> 15 Then<br />                                Text1(i).BackColor = vbActiveTitleBar<br />                                Text1(i + 1).BackColor = vbDesktop<br />                                i = i + 1<br />                Else<br />                                MsgBox ("Out of Bounds")<br />                End If<br />End Sub<br /><br />Private Sub cmdUp_Click()<br />                If Text1(i).BackColor = vbDesktop And i &lt;> 0 And Text1(i).BackColor = vbDesktop And i &lt;> 1 And Text1(i).BackColor = vbDesktop And i &lt;> 2 And Text1(i).BackColor = vbDesktop And i &lt;> 3 Then<br />                                Text1(i).BackColor = vbActiveTitleBar<br />                                Text1(i - 4).BackColor = vbDesktop<br />                                i = i - 4<br />                Else<br />                                MsgBox ("Out of Bounds")<br />                End If<br />End Sub										<br /></pre>