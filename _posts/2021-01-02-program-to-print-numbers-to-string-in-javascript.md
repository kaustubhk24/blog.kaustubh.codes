---
id: 1078
title: Program to Print Numbers to String in Javascript
date: 2021-01-02T08:33:56+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1078
permalink: /program-to-print-numbers-to-string-in-javascript/
rank_math_seo_score:
  - "64"
rank_math_focus_keyword:
  - Program to Print Numbers to String in Javascript
rank_math_description:
  - Program to Print Numbers to String in Javascript
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "38"
rank_math_analytic_object_id:
  - "61"
categories:
  - Javascript
---
 

Javascript Program to Print Numbers to String .

<pre class="wp-block-code"><code>function convertNumberToWords(amount) {
    var words = new Array();
    words&#91;0] = '';
    words&#91;1] = 'One';
    words&#91;2] = 'Two';
    words&#91;3] = 'Three';
    words&#91;4] = 'Four';
    words&#91;5] = 'Five';
    words&#91;6] = 'Six';
    words&#91;7] = 'Seven';
    words&#91;8] = 'Eight';
    words&#91;9] = 'Nine';
    words&#91;10] = 'Ten';
    words&#91;11] = 'Eleven';
    words&#91;12] = 'Twelve';
    words&#91;13] = 'Thirteen';
    words&#91;14] = 'Fourteen';
    words&#91;15] = 'Fifteen';
    words&#91;16] = 'Sixteen';
    words&#91;17] = 'Seventeen';
    words&#91;18] = 'Eighteen';
    words&#91;19] = 'Nineteen';
    words&#91;20] = 'Twenty';
    words&#91;30] = 'Thirty';
    words&#91;40] = 'Forty';
    words&#91;50] = 'Fifty';
    words&#91;60] = 'Sixty';
    words&#91;70] = 'Seventy';
    words&#91;80] = 'Eighty';
    words&#91;90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp&#91;0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length &lt;= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i &lt; n_length; i++) {
            received_n_array&#91;i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i &lt; 9; i++, j++) {
            n_array&#91;i] = received_n_array&#91;j];
        }
        for (var i = 0, j = 1; i &lt; 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array&#91;i] == 1) {
                    n_array&#91;j] = 10 + parseInt(n_array&#91;j]);
                    n_array&#91;i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i &lt; 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array&#91;i] * 10;
            } else {
                value = n_array&#91;i];
            }
            if (value != 0) {
                words_string += words&#91;value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array&#91;i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array&#91;i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array&#91;i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array&#91;i + 1] != 0 && n_array&#91;i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}
</code></pre>

Looking solution to use in Android ? <a aria-label="Checkout here (opens in a new tab)" href="https://github.com/kaustubhk24/NumberToWords-Library" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Checkout here</a>

Same Program in Java <a aria-label=" (opens in a new tab)" href="https://www.swayalgo.com/program-to-print-numbers-to-string/" target="_blank" rel="noreferrer noopener" class="rank-math-link">Checkout here</a>