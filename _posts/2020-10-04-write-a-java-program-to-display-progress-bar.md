---
id: 495
title: Write a java program to display Progress Bar.
date: 2020-10-04T12:48:00+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/write-a-java-program-to-display-progress-bar/
permalink: /write-a-java-program-to-display-progress-bar/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/10/write-java-program-to-display-progress.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8203014584189738430
rank_math_analytic_object_id:
  - "99"
image: http://blog.kaustubh.codes/wp-content/uploads/2020/10/v.png
categories:
  - Java
---
<pre><br />import javax.swing.*;<br />public class progressbar {<br />public static void main(String[] args) {<br />JFrame f = new JFrame("ProgressBar ");<br />JPanel panel = new JPanel();<br />JProgressBar progressBar = new JProgressBar(0, 20);<br />progressBar.setValue(0);<br />progressBar.setStringPainted(true);<br />panel.add(progressBar);<br />f.add(panel);<br />f.setSize(500, 500);<br />f.setVisible(true);<br />try {<br />Thread.sleep(2000);<br />} catch (InterruptedException e) {<br />// TODO Auto-generated catch block<br />e.printStackTrace();<br />}<br />progressBar.setValue(100);<br />}<br />}<br /><br /></pre>

Output 

<div style="clear: both;">
  <a href="https://swayalgo.com/wp-content/uploads/2020/10/v.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="600" data-original-height="768" data-original-width="1366" src="https://swayalgo.com/wp-content/uploads/2020/10/v-300x169.png" /></a>
</div>

Read on Your Phone