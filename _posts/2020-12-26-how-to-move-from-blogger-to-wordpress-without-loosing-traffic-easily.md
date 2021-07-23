---
id: 1031
title: How To Move From Blogger To WordPress Without Loosing Traffic Easily?
date: 2020-12-26T13:38:23+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1031
permalink: /how-to-move-from-blogger-to-wordpress-without-loosing-traffic-easily/
rank_math_seo_score:
  - "74"
rank_math_focus_keyword:
  - Move From Blogger To WordPress Without Loosing Traffic
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "9"
enclosure:
  - |
    https://static-cdn.swayalgo.com/assets/videos/Move-From-Blogger-To-WordPress-1.mp4
    7084733
    video/mp4
    
rank_math_analytic_object_id:
  - "64"
image: http://blog.kaustubh.codes/wp-content/uploads/2020/12/yt-vid-1-1200x675.png
categories:
  - wordpress
---
Looking for How To Move From Blogger To WordPress Without Loosing Traffic Easily?

<a aria-label="Blogger (opens in a new tab)" href="https://www.blogger.com" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Blogger</a> is completely FREE to use. But when you need more controls on Blog , then should move to <a aria-label="WordPress (opens in a new tab)" href="http://wordpress.org" rel="noreferrer noopener nofollow" target="_blank" class="rank-math-link">WordPress</a>. 

WordPress is Open Source CMS ( Content Management System) it provides more controls on your blog. Also you can extend functionality by just installing plugins.

# Moving Posts From Blogger to WordPress

Moving / Migrating posts from blogger to WordPress is very easy.

Just Visit <a aria-label=" (opens in a new tab)" href="http://blogger.com" target="_blank" rel="noreferrer noopener" class="rank-math-link">Blogger.com</a>, then Login in your blog, Now Select **Settings** Option from and click on **Back up Content.** <figure class="wp-block-image size-large">

<img loading="lazy" width="998" height="376" src="http://blog.kaustubh.codes/wp-content/uploads/2020/12/image-12.png" alt="Move From Blogger To WordPress Without Loosing Traffic" class="wp-image-1033" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-12.png 998w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-12-300x113.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-12-768x289.png 768w" sizes="(max-width: 998px) 100vw, 998px" /> </figure> 

Now open WordPress Admin and Click on **Tools** and then Click on **Import**. Now Click on **Install** Button of Blogger Importer . After that Click on **Run Importer**, and select File Downloaded from Blogger.com 

Now In next step you will select Appropriate Author & Done. If you found difficult working on it, just watch video below.<figure class="wp-block-video"><video controls src="https://static-cdn.swayalgo.com/assets/videos/Move-From-Blogger-To-WordPress-1.mp4"></video></figure> 

That&#8217;s it , you just completed importing your data from Blogger.com to WordPress.

# Moving Traffic to New Blog

This is very important part, because if you did something wrong you will loose all of your traffic.

Find suitable action for you from below options.

## Using blogspot.com Domain

If you are using ***.blogspot.com** then your blog is currently hosted on Google Server&#8217;s without custom domain name. Then to get your traffic your WordPress site , we will do some little modification in your site theme.

Open **Settings** in Blogger & Select **Theme** Option and Click on **Arrow Near Customize** & Click on **Edit HTML**,<figure class="wp-block-image size-large">

<img loading="lazy" width="805" height="405" src="http://blog.kaustubh.codes/wp-content/uploads/2020/12/image-14.png" alt="Move From Blogger To WordPress Without Loosing Traffic" class="wp-image-1051" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-14.png 805w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-14-300x151.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-14-768x386.png 768w" sizes="(max-width: 805px) 100vw, 805px" /> </figure> 

Now You will see some code. Now we have to add code below there. in between **<head></head>** tag.

You Need to Change SiteURL to Your new WordPress site URL .

<pre class="wp-block-code"><code>&lt;script type='text/javascript'&gt;
  var &lt;strong>SiteURL&lt;/strong>="https://swayalgo.com/"
  var url=window.location.href;
  var url=url.replace(".html","");
  var res = url.split('/');
  window.location.href=&lt;strong>SiteURL&lt;/strong>+res&#91;5];
&lt;/script&gt;</code></pre>

<p id="perma-settings">
  Now Last step is go to <strong>WordPress Admin</strong> , Click on <strong>Settings</strong> then <strong>Permalinks</strong>
</p>

Now from Permalinks Settings Select **Post Name** option & Click On **Save Change**s option below.<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="407" src="http://blog.kaustubh.codes/wp-content/uploads/2020/12/image-15-1024x407.png" alt="Move From Blogger To WordPress Without Loosing Traffic" class="wp-image-1052" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-15-1024x407.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-15-300x119.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-15-768x305.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-15.png 1084w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 

Now All of your traffic will automatically forwarded to your new blog.

## Using Custom Domain Name with Blogger

If you are using custom domain then you must have changed your <a aria-label="nameservers (opens in a new tab)" href="https://en.wikipedia.org/wiki/Name_server" target="_blank" rel="noreferrer noopener" class="rank-math-link">nameservers</a>.

Now we need to move all traffic automatically there

### URL Contains Date and Name Structure

If your current Blogger configuration contains Configuration like below example with Date & Name

<pre class="wp-block-code"><code>https:&#47;&#47;www.example.com/2020/12/post-name</code></pre>

then its covered in WordPress just **update the permalinks structure** from WordPress Admin Dashboard.<figure class="wp-block-image size-large">

<img loading="lazy" width="1002" height="388" src="http://blog.kaustubh.codes/wp-content/uploads/2020/12/image-16.png" alt="Move From Blogger To WordPress Without Loosing Traffic" class="wp-image-1054" srcset="https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-16.png 1002w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-16-300x116.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2020/12/image-16-768x297.png 768w" sizes="(max-width: 1002px) 100vw, 1002px" /> </figure> 

Now traffic will be auto-redirected.

### URL Contain Only Post Name

If your current Blogger configuration contains Configuration like below example with Name only

<pre class="wp-block-code"><code>https:&#47;&#47;www.example.com/post-name</code></pre>

To complete this please [check this point again](#perma-settings){.rank-math-link}.