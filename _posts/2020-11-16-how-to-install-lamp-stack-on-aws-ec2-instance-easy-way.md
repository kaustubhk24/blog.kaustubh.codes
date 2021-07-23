---
id: 673
title: How to Install LAMP Stack on AWS EC2 Instance Easy Way?
date: 2020-11-16T08:31:23+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=673
permalink: /how-to-install-lamp-stack-on-aws-ec2-instance-easy-way/
rank_math_seo_score:
  - "84"
rank_math_primary_category:
  - "10"
rank_math_internal_links_processed:
  - "1"
rank_math_description:
  - |
    How to Install LAMP Stack on AWS EC2 Instance?
    The easiest way to install  LAMP ( Linux, Apache , MySql, Php)  Stack& Host website.
rank_math_focus_keyword:
  - How to Install LAMP Stack on AWS EC2 Instance
rank_math_analytic_object_id:
  - "89"
image: http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/how-to-create-aws-ec2-instance.png
categories:
  - AWS
---
In this tutorial we will see, How to Install LAMP Stack on AWS EC2 Instance?

# Pre-requisites:

## Create AWS Account

If you don't have AWS account previously, You can create your aws <a href="https://blog.kaustubh.codes/how-to-create-aws-account/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">account here</a>.

## Creating Instance

We are going to create Ubuntu 20.04 EC2 instance . To <a href="https://blog.kaustubh.codes/how-to-create-an-aws-ubuntu-instance-in-5-minutes/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">create EC2 instance click here.</a>

## Accessing Instance from your PC

If you don't know how to access VPS ( Virtual Private Server). Then please follow <a href="https://blog.kaustubh.codes/how-to-access-digital-ocean-droplet-the-best-way/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">this guide. </a>

_This is written for digital ocean, but it will work on ec2 too. Except method #1 [from console]_

# Installing LAMP Stack

Now we are going to install <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank" aria-label="LAMP  (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">LAMP </a>Stack on EC2 instance, First you will need to login your aws account & copy the instance IP address. 

## Accessing Server from Putty

To connect , first we will need to generate Private Key (.ppk) from PuttyGen. _(PuttyGen Comes with Putty App)_. Open PuttyGen & Click on **Load** after clicking , from file select window , click **All Files** and select valid key file , we downloaded from aws console , while creating EC2 instance.

Now click on **Save private key** . save it as (.ppk) file.<figure class="wp-block-image size-large">

<img loading="lazy" width="465" height="455" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-2.png" alt="How to Install LAMP Stack on AWS EC2 Instance?
" class="wp-image-684" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-2.png 465w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-2-300x294.png 300w" sizes="(max-width: 465px) 100vw, 465px" /> 

Now open **Putty** App, fill below fields as per instructions.

Host Name (IP Address)

<pre class="wp-block-code"><code>ubuntu@your_instance_ip_address</code></pre>

Port

keep port **22** as it is.

Now from left menu , select Connection -> SSH -> Auth

Check for option **Private Key for file authentication** & select the file we generated in last step & Click on Open Button.<figure class="wp-block-image size-large">

<img loading="lazy" width="434" height="423" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-3.png" alt="How to Install LAMP Stack on AWS EC2 Instance?" class="wp-image-685" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-3.png 434w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-3-300x292.png 300w" sizes="(max-width: 434px) 100vw, 434px" /> 

Once everything added , Go to session windows again & in saved session add this session, So next time, you will not require do this stuff again. Now Click on **Open** button.

SSH will go you warning click on **Allow** / **OK**.<figure class="wp-block-image size-large">

<img loading="lazy" width="445" height="428" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-4.png" alt="How to Install LAMP Stack on AWS EC2 Instance?" class="wp-image-686" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-4.png 445w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-4-300x289.png 300w" sizes="(max-width: 445px) 100vw, 445px" /> 

Now you have access to your SSH.

## Initial Server Setup

First thing we have to do once logged in is, switching user to **root** from **ubuntu**. To do that paste below command in terminal.

### Updates

<pre class="wp-block-code"><code>$   sudo -i</code></pre>

(You can just copy paste commmands, Just change them according to your requirements. While exectuing commands below if asked click "**y** " and hit enter)

<pre class="wp-block-code"><code>$    apt update
$    apt upgrade</code></pre>

Above 2 commands will update all the apps in our EC2 Ubuntu instance.

<pre class="wp-block-code"><code>$    apt autoremove</code></pre>

It will remove all the non-required packages.

### Setting Up Sudo - User

<pre class="wp-block-code"><code>$    adduser enter_username_here</code></pre>

Now fill complete details of user and once asked for confirmation type **y** and hit enter.<figure class="wp-block-image size-large">

<img loading="lazy" width="840" height="369" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-5.png" alt="How to Install LAMP Stack on AWS EC2 Instance?" class="wp-image-687" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-5.png 840w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-5-300x132.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-5-768x337.png 768w" sizes="(max-width: 840px) 100vw, 840px" /> 

Now we're going to add sudo / root privileges to this user , So the user can do tasks by using word sudo. To do that

<pre class="wp-block-code"><code>$    usermod -aG sudo enter_username_here</code></pre>



### Configuring Firewall 

We need to configure firewall to prevent unauthorised access to our instance. By default the firewall is turned off .

<pre class="wp-block-code"><code>$ ufw status</code></pre>

This command will tell you status for firewall.

<pre class="wp-block-code"><code>$ ufw app list</code></pre>

It will show apps needs access to firewall. for example **OpenSSH**.

<pre class="wp-block-code"><code>$ ufw allow OpenSSH
$ ufw enable</code></pre>

**IMPORTANT NOTE : DO NOT ENABLE FIREWALL WITHOUT ALLOWING OpenSSH, ELSE YOU WILL NOT BE ABLE TO ACCESS INSTANCE AGAIN.**

## Installing Apache

<a aria-label="Apache  (opens in a new tab)" href="https://en.wikipedia.org/wiki/Apache" target="_blank" rel="noreferrer noopener" class="rank-math-link">Apache </a>is web server we are going to use for serving our sites. To install Apache paste below commands and enter **y** when asked.

<pre class="wp-block-code"><code>$ apt install apache2
$ service apache2 restart</code></pre>

We need to update firewall rules again & need to add **"Apache"** to allowed list. To allow execute below commands.

<pre class="wp-block-code"><code>$ ufw allow "Apache Full"</code></pre>

Once done visit your **EC2 IP address**, You will see success apache configuration success page. as shown below,<figure class="wp-block-image size-large">

<img loading="lazy" width="896" height="486" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/image-17.png" alt="How to Install LAMP Stack on AWS EC2 Instance?" class="wp-image-462" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/image-17.png 896w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/image-17-300x163.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/image-17-768x417.png 768w" sizes="(max-width: 896px) 100vw, 896px" /> 

If you are unable to view above page, then that's not issue, We can update some setting and you will be able to see this page. To do that,

visit <a href="http://console.aws.amazon.com" target="_blank" aria-label="console.aws.amazon.com (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">console.aws.amazon.com</a>

Click on the **services** in top corner -> **EC2**, after click on **Security Groups** & select the security group associated with our instance. After selecting Click on **Edit Inboud rules**,

Now make all the settings as shown in this image.<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="307" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-6-1024x307.png" alt="How to Install LAMP Stack on AWS EC2 Instance?" class="wp-image-694" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-6-1024x307.png 1024w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-6-300x90.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-6-768x230.png 768w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-6.png 1050w" sizes="(max-width: 1024px) 100vw, 1024px" /> 

Once rules updated you can visit your IP address and you can see that confirmation page.

## Installing MySQL

To install Mysql use below commands.

<pre class="wp-block-code"><code>$ apt install mysql-server</code></pre>

You can also install phpMyAdmin , if you need , but it's not required. To install PhpMyAdmin use below commands,

<pre class="wp-block-code"><code>$ apt install phpmyadmin</code></pre>

You can access PhpMyAdmin at _your\_instance\_ip_address/phpmyadmin_. View Video Version of this tutorial for more details.

## Installing PHP

Installing PHP is the last step, Let's complete that too,

<pre class="wp-block-code"><code>$ apt install libapache2-mod-php php-mysql</code></pre>

enter **y** when asked, That's it. You just completed installation of LAMP Stack on your aws EC2 Ubuntu instance.



# Video Version of Above Tutorial
<iframe width="560" height="315" src="https://www.youtube.com/embed/60cdSuxpzkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Looking for Alternative of EC2? 


Get the $100 free credits by Digital Ocean for free. You can get $100 by clicking below button.

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link has-vivid-cyan-blue-to-vivid-purple-gradient-background has-background" href="https://m.do.co/c/253fdc8807b5" target="_blank" rel="noreferrer noopener">Try DigitalOcean & Get $100 Credits for FREE</a>
  </div>
</div>