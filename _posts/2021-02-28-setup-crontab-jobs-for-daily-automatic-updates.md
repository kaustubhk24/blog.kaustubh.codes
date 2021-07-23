---
id: 1287
title: Setup Crontab Jobs for Daily Automatic Updates
date: 2021-02-28T02:08:14+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1287
permalink: /setup-crontab-jobs-for-daily-automatic-updates/
rank_math_seo_score:
  - "60"
rank_math_primary_category:
  - "2"
rank_math_focus_keyword:
  - Setup Crontab Jobs for Daily Automatic Updates
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "28"
categories:
  - Cloud
  - Linux
---
One of our reader Aksed us, How to add cronjob , So That it will automatically update , System daily and reboot system.

**Question Posted :**



I want to execute some commands daily on my ubuntu 20.04 server , at 11.25pm. & also if we can add logs in any file

What I tried?

I did steps as below. But I dont know why its not working.<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="498" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/02/image-1024x498.png" alt="" class="wp-image-1288" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/02/image-1024x498.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2021/02/image-300x146.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/02/image-768x373.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2021/02/image.png 1160w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 

**Answer**



You correctly mentioned crontab. You can configure this as a script to run every day at 11:55pm.

Let’s first start with creating the script. SSH to your droplet and start executing the following commands

<pre class="wp-block-code"><code>touch ~/updateScript
</code></pre>

The above will create the file for you. Now it’s time to edit it.

<pre class="wp-block-code"><code>nano ~/updateScript
</code></pre>

Inside of it, you can type in the following

<pre class="wp-block-code"><code>&lt;strong>#!/bin/bash&lt;/strong>
sudo service apache2 restart
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
sudo reboot</code></pre>

&nbsp;

Save the file and exit. Now time to make sure your script is executable

<pre class="wp-block-code"><code>sudo chmod +x ~/updateScript</code></pre>



Now the last bit, add it to your crontab. To do that, type in

<pre class="wp-block-code"><code>crontab -e</code></pre>



When the file opens at the bottom of it, add the following line

<pre class="wp-block-code"><code>55 23 * * * bash ~/updateScript</code></pre>

<div class="wp-block-coblocks-alert">
  <p class="wp-block-coblocks-alert__title">
    <strong>How it Works?</strong>
  </p>
</div>

<pre class="wp-block-code"><code># ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                   7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * * &lt;command to execute&gt;</code></pre>

Save the file and exit from it. To make sure you’ve added the cron, type in

<pre class="wp-block-code"><code>crontab -l</code></pre>

You should see the command you added at the bottom.

Dear users you can use this for your linux systems, To daily update & reboot systems. You can change time depending on your requirements.

Updating to latest version provides you security patches & restarting server also helps in site performance. So do this for your Server too. Your opionions & suggestions are always welcome. Please let us know if it works for you.



# Common Questions on This Topic

## How do I schedule a crontab script?

As mentioned above its very easy, We also made a tool, to help you in making command for that. Please visit this <a aria-label="tool. (opens in a new tab)" href="https://tools.swayalgo.com/crontab-jobs-schedule-maker/" target="_blank" rel="noreferrer noopener" class="rank-math-link">tool.</a>

## What does \* \* \* \* * mean in cron?

When you use \* for any field that means, it will be for each. Suppose you use this at the place of minute then task will execute on each minute. if you use for hour then will execute on each hour. So \* \* \* \* \* means every minute of every hour of every day of every month and every day of the week

## Is there any tool to help? 

Yes we made this tool specially for crontab, Its completely free to use.

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="https://tools.swayalgo.com/crontab-jobs-schedule-maker/">Crontab Scheduling Tool</a>
  </div>
</div>