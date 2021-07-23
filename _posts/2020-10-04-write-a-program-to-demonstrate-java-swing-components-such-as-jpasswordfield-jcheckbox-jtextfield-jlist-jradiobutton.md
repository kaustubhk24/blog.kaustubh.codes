---
id: 496
title: 'Write a program to demonstrate Java Swing components such as  JPasswordField,  JCheckbox, JTextField,  JList JRadioButton.'
date: 2020-10-04T12:46:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-program-to-demonstrate-java-swing-components-such-as-jpasswordfield-jcheckbox-jtextfield-jlist-jradiobutton/
permalink: /write-a-program-to-demonstrate-java-swing-components-such-as-jpasswordfield-jcheckbox-jtextfield-jlist-jradiobutton/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/10/write-program-to-demonstrate-java-swing.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/720314746038059737
rank_math_analytic_object_id:
  - "100"
image: http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/a.png
categories:
  - Java
---
<pre><br />/**<br />* Q 1) Write a program to demonstrate Java Swing components such as<br />* JPasswordField,<br />* JCheckbox,<br />* JTextField,<br />* JList<br />* JRadioButton.<br />*<br />*/<br />import javax.swing.*;<br />public class javaSwing{<br />public static void main(String[] args) {<br />JFrame f=new JFrame("javaSwing");<br />JPasswordField passwordField = new JPasswordField();<br />JLabel labelPassword=new JLabel("Password:");<br />JLabel labelUsername=new JLabel("Username:");<br />JTextField usernameField=new JTextField();<br />JCheckBox checkBox=new JCheckBox("Check Box");<br />JRadioButton radioButton=new JRadioButton("Radio Button");<br />String week[]= { "Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"};<br />JList list=new JList(week);<br />labelUsername.setBounds(20,60,80,30);<br />usernameField.setBounds(100,60,100,30);<br />labelPassword.setBounds(20,100, 80,30);<br />passwordField.setBounds(100,100,100,30);<br />checkBox.setBounds(30,140,100,30);<br />radioButton.setBounds(30,180,120,30);<br />list.setBounds(30,240,400,150);<br />f.add(labelUsername); f.add(usernameField);<br />f.add(passwordField); f.add(labelPassword);<br />f.add(checkBox);<br />f.add(radioButton);f.add(list);<br />f.setSize(500,500);<br />f.setLayout(null);<br />f.setVisible(true);<br />}<br />}<br /></pre>

Output: 

<div style="clear: both;">
  <a href="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/a.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="320" data-original-height="768" data-original-width="1366" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/a-300x169.png" /></a>
</div>

