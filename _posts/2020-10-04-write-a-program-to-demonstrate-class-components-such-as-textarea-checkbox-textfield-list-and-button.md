---
id: 494
title: Write a program to demonstrate class components such as TextArea, Checkbox, TextField, List and Button.
date: 2020-10-04T12:52:00+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/write-a-program-to-demonstrate-class-components-such-as-textarea-checkbox-textfield-list-and-button/
permalink: /write-a-program-to-demonstrate-class-components-such-as-textarea-checkbox-textfield-list-and-button/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/10/write-program-to-demonstrate-class.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2820536580713017719
rank_math_analytic_object_id:
  - "98"
image: http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/l.png
categories:
  - Java
---
/*\* \* \* Q) Write a program to demonstrate class components such as TextArea, \* Checkbox, TextField, List and Button. \* \*/ 

<pre><br />import java.awt.*;<br /><br />public class demonstrate {<br /><br />public static void main(String[] args) {<br /><br />Frame f=new Frame("My Demo Form"); <br /><br />Label l=new Label("Enter Name ");<br />Label l2=new Label("Gender ");<br /><br />Checkbox c1=new Checkbox("Male",true);<br />Checkbox c2=new Checkbox("Female");<br /><br />TextArea a=new TextArea();<br /><br />List li=new List(2);<br />li.add("a");<br />li.add("b");<br /><br /><br />TextField t1=new TextField(10);<br /><br />Button b=new Button("Save");<br /><br /><br />f.add(l);<br />f.add(t1);<br />f.add(l2);<br />f.add(c1);<br />f.add(c2);<br />f.add(b);<br />f.add(li);<br />f.add(a);<br /><br />f.setLayout(new FlowLayout());<br />f.setSize(300,300);<br />f.setVisible(true);<br /><br /><br /><br />}<br />}<br /><br /></pre>

Output: 

<div style="clear: both;">
  <a href="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/l.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="600" data-original-height="768" data-original-width="1366" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/l-300x169.png" /></a>
</div>

