---
id: 1230
title: Error Operation Must Use an Updateable Query
date: 2021-01-26T01:48:52+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1230
permalink: /error-operation-must-use-an-updateable-query/
rank_math_seo_score:
  - "78"
rank_math_internal_links_processed:
  - "1"
rank_math_focus_keyword:
  - error operation must use an updateable query
rank_math_primary_category:
  - "8"
rank_math_schema_BlogPosting:
  - 'a:8:{s:5:"@type";s:11:"BlogPosting";s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:4:"type";s:8:"template";s:9:"isPrimary";b:1;}s:8:"headline";s:11:"%seo_title%";s:11:"description";s:17:"%seo_description%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:5:"image";a:2:{s:5:"@type";s:11:"ImageObject";s:3:"url";s:16:"%post_thumbnail%";}s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:6:"%name%";}}'
rank_math_schema_VideoObject:
  - 'a:12:{s:5:"@type";s:11:"VideoObject";s:8:"metadata";a:8:{s:5:"title";s:5:"Video";s:4:"type";s:8:"template";s:9:"shortcode";s:15:"s-600f77d593129";s:9:"isPrimary";b:0;s:23:"reviewLocationShortcode";s:24:"[rank_math_rich_snippet]";s:8:"category";s:12:"%categories%";s:4:"tags";s:6:"%tags%";s:15:"isAutoGenerated";b:1;}s:4:"name";s:11:"%seo_title%";s:11:"description";s:17:"%seo_description%";s:10:"uploadDate";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"thumbnailUrl";s:16:"%post_thumbnail%";s:8:"embedUrl";s:56:"https://www.youtube.com/embed/HTi93cg_Z_k?feature=oembed";s:10:"contentUrl";s:0:"";s:8:"duration";s:0:"";s:5:"width";s:0:"";s:6:"height";s:0:"";s:16:"isFamilyFriendly";b:1;}'
rank_math_analytic_object_id:
  - "48"
image: http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query-1.png
categories:
  - VB.NET
---
Almost everyone face Error Operation Must Use an Updateable Query , when they make first <a aria-label="setup (opens in a new tab)" href="https://blog.kaustubh.codes/how-to-make-setup-file-in-vb-net/" target="_blank" rel="noreferrer noopener" class="rank-math-link">setup</a> of there .NET project.

## Error Images<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="683" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query-1024x683.png" alt="" class="wp-image-1233" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query-1024x683.png 1024w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query-300x200.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query-768x512.png 768w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query.png 1080w" sizes="(max-width: 1024px) 100vw, 1024px" /> 

If you have use try catch block and printed exception then you will get error from image 1 else you will get image 2 error.

## Reason

This error mostly happen when our database is placed in <code data-enlighter-language="generic" class="EnlighterJSRAW">C:/Program Files/</code> or <code data-enlighter-language="generic" class="EnlighterJSRAW">C:/Program Files(x86)</code> without required privileges. Database needs to be inside our C drive but not program files to avoid this issue. We have some solutions for you. Please find suitable solution for you. 

## Fixes

### Way 1:

Mostly when you are developing app. You are developing for specific client , then you can lock access database with password and place inside <code data-enlighter-language="generic" class="EnlighterJSRAW">C:/App-Name/database.mdb</code> , this is easiest way , in this you will not required to any privileges fixing. It will sort your issue. If it doesn't , Then you may follow Way 2.

### Way 2 :

Firstly find your username ( if you don't know).

To find Open command Prompt and type

<code data-enlighter-language="generic" class="EnlighterJSRAW">C:\Users\Kaustubh K.\ > whoami</code>

This command will print your username like.

<code data-enlighter-language="generic" class="EnlighterJSRAW">desktop-s-2sjjj\Kaustubh K.</code>

You need to remember that username.

Then right click on Database and **View Properties** & then click on **Security Tab** & Click on **Edit** Button refer screenshot below.<figure class="wp-block-image size-large">

<img loading="lazy" width="874" height="444" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-27.png" alt="error operation must use an updateable query" class="wp-image-1235" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-27.png 874w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-27-300x152.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-27-768x390.png 768w" sizes="(max-width: 874px) 100vw, 874px" /> 

Select your name and allow all the rights, click **apply** and **ok**. That's it. You can use your database now.

If you still face any issue , you may view video Guide below. Let us know , if it works for you.<figure class="wp-block-image size-large">

<img loading="lazy" width="820" height="427" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-28.png" alt="error operation must use an updateable query" class="wp-image-1236" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-28.png 820w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-28-300x156.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-28-768x400.png 768w" sizes="(max-width: 820px) 100vw, 820px" /> 

## Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/HTi93cg_Z_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>