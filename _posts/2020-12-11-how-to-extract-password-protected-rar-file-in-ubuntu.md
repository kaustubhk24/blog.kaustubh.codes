---
id: 978
title: How To Extract Password Protected rar file in Ubuntu?
date: 2020-12-11T14:08:15+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=959
permalink: /how-to-extract-password-protected-rar-file-in-ubuntu/
rank_math_focus_keyword:
  - How To Extract Password Protected rar file in Ubuntu?
rank_math_primary_category:
  - "60"
rank_math_seo_score:
  - "59"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "67"
categories:
  - Linux
---
Let us see How To Extract Password Protected rar file in Ubuntu?

To extract file with password or without password you have to install rar Command Line utility.

<pre class="wp-block-code"><code>$ sudo apt-get install rar
</code></pre>

Now enter the below command in terminal.

<pre class="wp-block-code"><code>$ sudo rar e file_name.rar
</code></pre>

for example, if your file name is **file.rar** then run below command in terminal

<pre class="wp-block-code"><code>$ sudo rar e file.rar</code></pre>

IF your file is password protected it will prompt for password. if file is not protected then it will automatically start extracting rar file. Output when password is required.

<pre class="wp-block-code"><code>Enter password (will not be echoed) for file.zip</code></pre>

That's it , I carried out this practical on Ubuntu 20.04 on 11/12/2020. If you are facing issues with your OS then just comment with os version. will help you in setup.