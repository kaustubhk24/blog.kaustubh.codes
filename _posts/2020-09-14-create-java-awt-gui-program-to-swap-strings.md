---
id: 498
title: Create Java AWT GUI Program to Swap strings
date: 2020-09-14T05:06:00+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/create-java-awt-gui-program-to-swap-strings/
permalink: /create-java-awt-gui-program-to-swap-strings/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/create-java-awt-gui-program-to-swap.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5213327710712219741
rank_math_analytic_object_id:
  - "102"
image: http://blog.kaustubh.codes/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44.png
categories:
  - Java
---
<pre><br />import java.awt.*;<br />import java.awt.event.*;<br /><br /><br /><br /><br />public class me {<br /><br />    public static void main(String[] args) {<br /><br />        Frame f=new Frame("Swap");<br /><br />        Label l=new Label("Enter First Number");<br />        Label l1=new Label("Enter Second Number");<br /><br />        TextField t1=new TextField(10);<br />        TextField t2=new TextField(10);<br /><br />        Button b=new Button("Swap");<br /><br /><br />        b.addActionListener(new ActionListener()<br />        {<br /><br /><br />            public void actionPerformed(ActionEvent ae)<br />            {<br />                String tmp=t1.getText();<br />                t1.setText(t2.getText());<br />                t2.setText(tmp);<br /><br /><br />            }<br /><br />        }        );<br /><br /><br />        f.add(l);<br />        f.add(l1);<br /><br />           f.add(t2);<br />           f.add(t1);<br /><br />           f.add(b);<br /><br /><br />   f.setLayout(new FlowLayout());<br />   f.setSize(300,300);<br />   f.setVisible(true);<br /><br />        <br /><br /><br /><br />    }<br />}<br /><br /><br /></pre>

Output: 

<div style="clear: both;">
  <a href="https://swayalgo.com/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44.png" style="display: block; padding: 1em 0px; text-align: center;"><img loading="lazy" alt="" border="0" data-original-height="768" data-original-width="1366" height="351" src="https://swayalgo.com/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44-300x169.png" width="625" /></a>
</div>

</script>