---
id: 1347
title: '[Updated] Submit HTML Form To Google Sheet in 5 Steps'
date: 2021-03-06T09:20:10+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1347
permalink: /submit-html-form-to-google-sheet-in-5-steps/
rank_math_seo_score:
  - "83"
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "12"
rank_math_focus_keyword:
  - Submit HTML Form To Google Sheet
rank_math_description:
  - Submit HTML Form To Google Sheet In 5 Steps Update 2021 Latest. 2020 Method No Longer Works, Click This Link For Latest Method And Download Free Example
rank_math_schema_BlogPosting:
  - 'a:8:{s:5:"@type";s:11:"BlogPosting";s:8:"metadata";a:3:{s:5:"title";s:7:"Article";s:4:"type";s:8:"template";s:9:"isPrimary";b:1;}s:8:"headline";s:11:"%seo_title%";s:11:"description";s:17:"%seo_description%";s:13:"datePublished";s:20:"%date(Y-m-dTH:i:sP)%";s:12:"dateModified";s:24:"%modified(Y-m-dTH:i:sP)%";s:5:"image";a:2:{s:5:"@type";s:11:"ImageObject";s:3:"url";s:16:"%post_thumbnail%";}s:6:"author";a:2:{s:5:"@type";s:6:"Person";s:4:"name";s:6:"%name%";}}'
rank_math_schema_VideoObject:
  - 'a:12:{s:5:"@type";s:11:"VideoObject";s:8:"metadata";a:8:{s:5:"title";s:5:"Video";s:4:"type";s:8:"template";s:9:"shortcode";s:15:"s-60434827e5ff4";s:9:"isPrimary";b:0;s:23:"reviewLocationShortcode";s:24:"[rank_math_rich_snippet]";s:8:"category";s:12:"%categories%";s:4:"tags";s:6:"%tags%";s:15:"isAutoGenerated";b:1;}s:4:"name";s:11:"%seo_title%";s:11:"description";s:17:"%seo_description%";s:10:"uploadDate";s:10:"2020-07-03";s:12:"thumbnailUrl";s:16:"%post_thumbnail%";s:8:"embedUrl";s:56:"https://www.youtube.com/embed/ZldOKPSqZUM?feature=oembed";s:10:"contentUrl";s:0:"";s:8:"duration";s:7:"PT0M29S";s:5:"width";s:4:"1280";s:6:"height";s:3:"720";s:16:"isFamilyFriendly";b:1;}'
rank_math_analytic_object_id:
  - "19"
image: http://blog.kaustubh.codes/wp-content/uploads/2021/03/html-form-submit-to-Google-1-1200x675.png
categories:
  - HTML
tags:
  - form html submit
  - form submit sheet
  - google sheet html form
  - google sheet link html form
  - html form submit to google forms
  - html submit
  - link google form to sheet
  - sheets forms
  - submit html
  - Submit html form google sheet
  - submit html form to google sheets
  - submit html to google form
---
Many times while working on static sites we need HTML forms to embeded on our site, We found several articles submitting HTML form to Google Sheets, but in 2021 all of them are out of date, this is latest method you should follow to Submit HTML Form To Google Sheet.

## Making Your HTML Form

Firstly you should have HTML form with you, if you don&#8217;t have any form now, then for example you can freely copy paste our form, see example **Registration-file.html** form.

Registration-file.html

<pre class="wp-block-code"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt; Registration Form&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 align="center"&gt;  Registration form&lt;/h1&gt;
    &lt;form target="_blank" action="save-on-drive.html" method="GET"&gt;
        &lt;table align="center" title="User Registration form"&gt;
            &lt;tr&gt;
                &lt;td&gt;
                      First Name
                &lt;/td&gt;
                &lt;td&gt;
                    &lt;input type="text" name="FirstName" style="width: 200px" pattern="&#91;A-Za-z]{3,10}"&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
             &lt;tr&gt;
                &lt;td&gt;
                     Last Name
                &lt;/td&gt;
                &lt;td&gt;
                    &lt;input type="text" name="LastName" style="width: 200px" pattern="&#91;A-Za-z]{3,10}"&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
             &lt;tr&gt;
                &lt;td&gt;
                     Email
                &lt;/td&gt;
                &lt;td&gt;
                    &lt;input type="Email" name="Email" style="width: 200px"&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
             &lt;tr&gt;
                &lt;td&gt;
                    Mobile Number
                &lt;/td&gt;
                &lt;td&gt;
                    &lt;input type="tel" name="MobileNo" style="width: 200px"  required &gt;
                &lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;&lt;/tr&gt;
            &lt;tr&gt;
                &lt;td  colspan="2"&gt;
                    &lt;input type="Submit" name="Submit" style="width: 200px"&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
        &lt;/table&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

While You create and complete form to Submit in Google Sheets, 

Make sure you have 

  * Used **GET** Method 
  * In **Action** you must have the exact path of save-on-drive.html file
  * Use Target blank , if you want to submit form in another new tab, if not just remove the target attribute.

## Setting Up Google Sheet To Submit HTML

First create <a aria-label="Google Sheet  (opens in a new tab)" href="https://sheets.google.com" target="_blank" rel="noreferrer noopener" class="rank-math-link">Google Sheet </a>, if you don&#8217;t have one.

Now let&#8217;s link google form to sheet, So that we can submit HTML Form To Google Sheet.

Click on **Script Editor**, Now it will open editor in next screen,<figure class="wp-block-image size-large">

<img loading="lazy" width="747" height="308" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image.png" alt="Submit HTML Form To Google Sheet" class="wp-image-1354" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image.png 747w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-300x124.png 300w" sizes="(max-width: 747px) 100vw, 747px" /> </figure> 



Now we will rename Our project , To rename just click on Untitled Project & in popup enter new project name and click **rename.**<figure class="wp-block-image size-large">

<img loading="lazy" width="435" height="304" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-1.png" alt="Submit HTML Form To Google Sheet" class="wp-image-1355" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-1.png 435w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-1-300x210.png 300w" sizes="(max-width: 435px) 100vw, 435px" /> </figure> 

Now remove firstly written function from there and copy paste code below there, and click on **save button icon** , Once saved we will move forward for **initial setup**, For initial setup,

<pre class="wp-block-code"><code>function doGet(e){
  return handleResponse(e);
}
//  Enter sheet name where data is to be written below
        var SHEET_NAME = "Sheet1";
var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
function handleResponse(e) {
  // shortly after my original solution Google announced the LockService&#91;1]
  // this prevents concurrent access overwritting data
  // &#91;1] http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
  // we want a public lock, one that locks for all invocations
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
  try {
    // next set where we write the data - you could write to multiple/alternate destinations
    var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet = doc.getSheetByName(SHEET_NAME);
    // we'll assume header is in row 1 but you can override with header_row in GET/POST data
    var headRow = e.parameter.header_row || 1;
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()&#91;0];
    var nextRow = sheet.getLastRow()+1; // get next row
    var row = &#91;];
    // loop through the header columns
    for (i in headers){
      if (headers&#91;i] == "Timestamp"){ // special case if you include a 'Timestamp' column
        row.push(new Date());
      } else { // else use header name to get data
        row.push(e.parameter&#91;headers&#91;i]]);
      }
    }
    // more efficient to set values as &#91;]&#91;] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues(&#91;row]);
    // return json success results
    return ContentService
          .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(e){
    // if error return this
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}
function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}</code></pre>



<figure class="wp-block-image size-large">

<img loading="lazy" width="985" height="417" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-3.png" alt="" class="wp-image-1357" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-3.png 985w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-3-300x127.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-3-768x325.png 768w" sizes="(max-width: 985px) 100vw, 985px" /> </figure> 

Click on Setup Button to start setup

Once you start setup it will show you message that **Authorization Required**, Now let&#8217;s authorize it,

It will ask you for some permissions , So simply **allow** all the permission , So that we can submit html form to google sheets,

Next step will be deployment, <figure class="wp-block-image size-large">

<img loading="lazy" width="968" height="409" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-4.png" alt="Submit HTML Form To Google Sheet" class="wp-image-1358" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-4.png 968w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-4-300x127.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-4-768x324.png 768w" sizes="(max-width: 968px) 100vw, 968px" /> </figure> 

Click on **Deploy** button and Select option **New deployment**

In Select Type select option **Web app** from list, this is last step on Google sheet site,<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="731" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-6-1024x731.png" alt="Submit HTML Form To Google Sheet" class="wp-image-1360" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-6-1024x731.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-6-300x214.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-6-768x548.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-6.png 1141w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 

In **configuration** in **Description**, enter description of project ( Not required ) , this is not compulsory

In next box in **Execute** as box you will see **your email** , keep as it is,

In last **Who has access** select option **Anyone**, & Click on Deploy <figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="730" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-7-1024x730.png" alt="Submit HTML Form To Google Sheet" class="wp-image-1361" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-7-1024x730.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-7-300x214.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-7-768x548.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-7.png 1146w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 

From this window copy URL & keep it safe,

## Creating File To Submit Data

In last step create file save-on-drive.html and just update url you copied from Google site, that&#8217;s it, Your app is ready, You can use,

save-on-drive.html

<pre class="wp-block-preformatted">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Your Information has been Saved&lt;/title&gt;
&lt;/head&gt;
&lt;script type="text/javascript"&gt;
var url_string = window.location.href;
var url = new URL(url_string);
var FirstName = url.searchParams.get("FirstName");
var LastName = url.searchParams.get("LastName");
var Email = url.searchParams.get("Email");
var MobileNo = url.searchParams.get("MobileNo");
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
var final_url=<span class="has-inline-color has-luminous-vivid-amber-color">"https://script.google.com/macros/s/<strong>your-script-id</strong>/exec</span>?FirstName=";
final_url=final_url+FirstName+"&LastName="+LastName+"&Email="+Email+"&MobileNo="+MobileNo;
request.open('GET', final_url);
request.send();
&lt;/script&gt;
&lt;body&gt;
 &lt;h1 id="confirmation"&gt; Your Information has been saved&lt;/h1&gt;
&lt;script type="text/javascript"&gt;
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

## Live Preview ( How it Works )

Registration form

## Video <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">

<div class="wp-block-embed__wrapper">
</div></figure> 

## Download Complete Project

This project example is now available for free, Get it while it&#8217;s free.

Downlaod complete source code from link below

<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="https://www.swayalgo.com/product/html-form-submit-google-sheet-example/" target="_blank" rel="noreferrer noopener">Download Source Code</a>
  </div>
</div>