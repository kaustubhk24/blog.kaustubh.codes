---
id: 908
title: Write A Servlet Application To Print The Current Date And Time.
date: 2020-11-24T10:51:35+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=908
permalink: /write-a-servlet-application-to-print-the-current-date-and-time/
rank_math_primary_category:
  - "27"
rank_math_seo_score:
  - "56"
rank_math_focus_keyword:
  - Servlet Application To Print The Current Date And Time.
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "74"
categories:
  - Java
---
Create New <a aria-label="Dynamic Web Project (opens in a new tab)" href="https://en.wikipedia.org/wiki/Dynamic_web_page" target="_blank" rel="noreferrer noopener" class="rank-math-link">Dynamic Web Project</a>, Create below files and copy paste this content.

Make sure your file structure looks like image below.<figure class="wp-block-image size-large">

<img loading="lazy" width="337" height="380" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-22.png" alt="" class="wp-image-909" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/11/image-22.png 337w, https://blog.kaustubh.codes/wp-content/uploads/2020/11/image-22-266x300.png 266w" sizes="(max-width: 337px) 100vw, 337px" /> </figure> 

**index.html**

<pre class="wp-block-code"><code>&lt;!DOCTYPE html>
&lt;html>
&lt;head>
&lt;meta charset="ISO-8859-1">
&lt;title>Current Date and Time&lt;/title>
&lt;/head>
&lt;body>
&lt;form action="Date" method="get">
&lt;input type="submit" value="Click Here">
&lt;/form>
&lt;/body>
&lt;/html></code></pre>

**Date1.java**

<pre class="wp-block-code"><code>package com.practical;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class Date1 extends HttpServlet{
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException
	{
		Date today=new Date();
		PrintWriter out =res.getWriter();
		out.println("Today is :"+today.toString());
	}
}
</code></pre>

**web.xml**

<pre class="wp-block-code"><code>&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" id="WebApp_ID" version="4.0">
&lt;servlet>
&lt;servlet-name>abc&lt;/servlet-name>
&lt;servlet-class>com.practical.Date1&lt;/servlet-class>
&lt;/servlet>
&lt;servlet-mapping>
&lt;servlet-name>abc&lt;/servlet-name>
&lt;url-pattern>/Date&lt;/url-pattern>
&lt;/servlet-mapping>
&lt;/web-app>
</code></pre>

Output:<figure class="wp-block-image size-large">

<img loading="lazy" width="440" height="137" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-23.png" alt="" class="wp-image-910" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/11/image-23.png 440w, https://blog.kaustubh.codes/wp-content/uploads/2020/11/image-23-300x93.png 300w" sizes="(max-width: 440px) 100vw, 440px" /> </figure>