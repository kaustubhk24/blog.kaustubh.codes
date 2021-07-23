---
id: 1166
title: How To Make Setup File in VB.NET?
date: 2021-01-07T06:50:47+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1166
permalink: /how-to-make-setup-file-in-vb-net/
rank_math_primary_category:
  - "8"
rank_math_seo_score:
  - "71"
rank_math_focus_keyword:
  - How To Make Setup File
rank_math_internal_links_processed:
  - "1"
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - ""
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
rank_math_description:
  - 'How To Make Setup File in VB.NET | If you have created Project and Now you want to distribute project to your customer or friends, you need to Create setup.msi '
rank_math_analytic_object_id:
  - "52"
image: http://blog.kaustubh.codes/wp-content/uploads/2021/01/Copy-of-Copy-of-mini-pro-vb-denomination-1200x675.png
categories:
  - VB.NET
---
If you have created Project and Now you want to distribute project to your customer or friends, you need to Create **setup.msi** or **setup.exe** file, So they can install it on there Windows computer and use same.

Now in this tutorial , we are making setup file of our recent Project <a aria-label="Tic Tac Toe (opens in a new tab)" href="https://www.swayalgo.com/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/" target="_blank" rel="noreferrer noopener" class="rank-math-link">Tic Tac Toe</a>, If you don&#8217;t have your project and Just want to follow this tutorial , you can download this project for free, <a rel="noreferrer noopener" href="https://www.swayalgo.com/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/" target="_blank" class="rank-math-link">Download Now</a>.

## Installing Required Extension

Open Visual Studio ( We are using 2019 for this tutorial ) , Click on **Extension** and in **Search Box** type **Installer**, You will see option **Microsoft Visual Studio Installer Projects** , click on **Download** button Next to it.<figure class="wp-block-image size-large">

<img loading="lazy" width="762" height="404" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-10.png" alt="How To Make Setup File in VB.NET" class="wp-image-1169" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-10.png 762w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-10-300x159.png 300w" sizes="(max-width: 762px) 100vw, 762px" /> </figure> 

You need to Close All Visual Studio windows to start installtion. Once installation is completed you can Open Visual Studio Again.

## Creating Installer 

Click on **View** tab and Select **Solution explorer**, In **Solution Explorer** right **click** on solution name , Click on **Add -> New Projec**t from Next window select **Setup Project**,<figure class="wp-block-image size-large">

<img loading="lazy" width="764" height="246" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-12.png" alt="How To Make Setup File in VB.NET" class="wp-image-1170" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-12.png 764w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-12-300x97.png 300w" sizes="(max-width: 764px) 100vw, 764px" /> </figure> 

Now Click on **Next** Button, Enter Setup Project Name and Click on **Create** Button.

You will see file System, as below<figure class="wp-block-image size-large">

<img loading="lazy" width="640" height="194" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-13.png" alt="How To Make Setup File in VB.NET" class="wp-image-1171" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-13.png 640w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-13-300x91.png 300w" sizes="(max-width: 640px) 100vw, 640px" /> </figure> 

You need Open Application Folder First and and right Click on Right window, select **Add -> Project Output** and select Option **Primary Output**.

Now click **ok** button, next you need to you right click on **primary output** option we just added and select **create shortcut to primary output and project name now**, by right clicking on shortcut you can change name of shortcut. we need to create **two** shortcuts one for user&#8217;s desktop and another for user&#8217;s program menu,<figure class="wp-block-image size-large">

<img loading="lazy" width="655" height="140" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-14.png" alt="How To Make Setup File in VB.NET" class="wp-image-1173" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-14.png 655w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-14-300x64.png 300w" sizes="(max-width: 655px) 100vw, 655px" /> </figure> 

When we create shortcut we can right click on shortcut select **properties** select **icon** and set .ico as icon file. now move that shortcuts to user&#8217;s desktop and user&#8217;s programs menu.

Download image .ico file for icon

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="http://blog.kaustubh.codes/wp-content/uploads/2021/01/tic-tac-toe-1.png" target="_blank" rel="noreferrer noopener">Download Free </a>
  </div>
</div>

Right click on solution name and select option **rebuild** it will start rebuilding you may see 

<pre class="wp-block-preformatted">1.
rebuild all 1 success 1 failed or 0 skipped
or
2.
rebuild all 1 success 0 failed or 1 skipped
or
3.
rebuild all 2 success 0 failed or 0 skipped</pre>

If you see option **3 rebuild all 2 success 0 failed or 0 skipped**, then your setup.msi and setup.exe is ready,

but if not , then must be **error ,message**or **warning**, here we have warning, see image below,<figure class="wp-block-image size-large">

<img loading="lazy" width="762" height="158" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-15.png" alt="How To Make Setup File in VB.NET" class="wp-image-1174" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-15.png 762w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-15-300x62.png 300w" sizes="(max-width: 762px) 100vw, 762px" /> </figure> 

After fixing this message / warning, click rebuild again. & Done , You just created **Setup.msi** and **Setup.exe**

## Locating Setup Files

To locate the file Open **Solution Explorer** -> Right click on **Setup Project** -> and See **Open in Explorer** , Check debug folder there you can see your setup files.<figure class="wp-block-image size-large">

<img loading="lazy" width="530" height="138" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-16.png" alt="How To Make Setup File in VB.NET" class="wp-image-1176" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-16.png 530w, https://blog.kaustubh.codes/wp-content/uploads/2021/01/image-16-300x78.png 300w" sizes="(max-width: 530px) 100vw, 530px" /> </figure> 

If you are NOT able to access this option , Open **Windows File Explorer** and Open Path below.

<pre class="wp-block-code"><code>C:\Users\&lt;span class="has-inline-color has-vivid-red-color">username&lt;/span>\source\repos\&lt;span class="has-inline-color has-vivid-red-color">Tic Tac Toe&lt;/span>\Setup1\Debug
{select your username and project name correctly.}</code></pre>

## Installing Setup File

Installing setup is very easy , Double click on **setup.msi** or **setup.exe** and just click next,next and done.<figure class="wp-block-image size-large">

<img loading="lazy" width="282" height="229" src="http://blog.kaustubh.codes/wp-content/uploads/2021/01/image-17.png" alt="How To Make Setup File in VB.NET" class="wp-image-1178" /> </figure> 

or You can install easily by Right Clicking Setup in solution explorer and select install button, that&#8217;s it.

Congrats! You just created setup. If you have any issues just comment here, we will reply asap.

## Video Guide<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">

<div class="wp-block-embed__wrapper">
</div></figure>