---
id: 587
title: Write a VB Program for Dental Payment Form. Calculate total on selected options from check boxes.
date: 2020-08-28T14:09:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-for-dental-payment-form-calculate-total-on-selected-options-from-check-boxes/
permalink: /write-a-vb-program-for-dental-payment-form-calculate-total-on-selected-options-from-check-boxes/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-for-dental-payment.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1296083623110418008
rank_math_analytic_object_id:
  - "191"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-9tOY8WBDRFc/X0kP6uZf5LI/AAAAAAAAffw/m5k1N-KmDsAs9bO0cPmTPRbvt7Etf1gUgCLcBGAsYHQ/s499/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" height="320" data-original-height="499" data-original-width="288" src="https://1.bp.blogspot.com/-9tOY8WBDRFc/X0kP6uZf5LI/AAAAAAAAffw/m5k1N-KmDsAs9bO0cPmTPRbvt7Etf1gUgCLcBGAsYHQ/s320/1.png" /></a>
</div>

<pre><br />Private Sub Command1_Click()<br />	Dim sum As Integer<br />	If Check1.Value = 1 Then<br />		sum = sum + 35<br />	End If<br />	If Check2.Value = 1 Then<br />		sum = sum + 150<br />	End If<br />	If Check3.Value = 1 Then<br />		sum = sum + 800<br />	End If<br />	If Check5.Value = 1 Then<br />		sum = sum + 50<br />	End If<br />	If Check6.Value = 1 Then<br />		sum = sum + 85<br />	End If<br />	If Check4.Value = 1 Then<br />		sum = sum + Val(Text1.Text)<br />	End If<br />	<br />	Label5.Caption = sum<br />End Sub<br /><br /><br /><br /><br /><br /></pre>