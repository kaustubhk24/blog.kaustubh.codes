---
id: 596
title: User Audio Playlist using HTML
date: 2020-08-16T12:24:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/user-audio-playlist-using-html/
permalink: /user-audio-playlist-using-html/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/user-audio-playlist-using-html.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/9026129289086262435
rank_math_seo_score:
  - "12"
enclosure:
  - |
    https://static-cdn.swayalgo.com/assets/audios/sample-audios/Breatha%20-%20josh%20pan.mp3
    7350894
    audio/mpeg
    
  - |
    https://static-cdn.swayalgo.com/assets/audios/sample-audios/Spring%20In%20My%20Step%20-%20Silent%20Partner.mp3
    4751360
    audio/mpeg
    
  - |
    https://static-cdn.swayalgo.com/assets/audios/sample-audios/Calvin%20Harris%20-%20josh%20pan.mp3
    6251661
    audio/mpeg
    
  - |
    https://static-cdn.swayalgo.com/assets/audios/sample-audios/Muriel%20-%20Bobby%20Richards.mp3
    4193212
    audio/mpeg
    
  - |
    https://static-cdn.swayalgo.com/assets/audios/sample-audios/Phrase%20Prant%20-%20josh%20pan.mp3
    7897375
    audio/mpeg
    
  - |
    https://static-cdn.swayalgo.com/assets/audios/sample-audios/Voices%20-%20Patrick%20Patrikios.mp3
    6084478
    audio/mpeg
    
rank_math_analytic_object_id:
  - "200"
categories:
  - HTML
---
<pre class="wp-block-code"><code>&lt;!DOCTYPE html>
&lt;html>
    &lt;head>
        &lt;title>Songs Lists&lt;/title>
    &lt;/head>
    &lt;body>
      &lt;center>
       &lt;div>
      &lt;audio id="myAd" controls>
         &lt;source id="firstAd" src="file.mp3" type="audio/mpeg">
      &lt;/audio>&lt;br>&lt;/div>
           &lt;/center>
            &lt;H3>Music Play-list!&lt;/H3>
              &lt;ol>
                    &lt;li onClick="chgAudio('1.mp3)">1.mp3&lt;/li>
                    &lt;li onClick="chgAudio('2.mp3')">2.mp3&lt;/li>
                    &lt;li onclick="chgAudio('3.mp3')">3.mp3&lt;/li>
                    &lt;li onclick="chgAudio('4.mp3')">4.mp3&lt;/li>
                    &lt;li onclick="chgAudio('5.mp3')">5.mp3&lt;/li>
             &lt;/ol>
             	&lt;script type="text/javascript">
                  var ad = document.getElementById("myAd");
                   function chgAudio(path)
                  {
                      document.getElementById("firstAd").src=path;
                      document.getElementById("myAd").load();
                      document.getElementById("myAd").currentTime=0;
                      document.getElementById("myAd").play();
                  }
               &lt;/script>
        &lt;/body>
&lt;/html> </code></pre>

