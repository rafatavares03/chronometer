<h1 align="center">Chronometer</h1>
<p align="center">This is a chronometer website made with pure HTML, CSS and JavaScript</p>

Summary
===========
<!--ts-->
  * [About](#about)
  * [Screenshot](#screenshot)
  * [How to use](#how-to-use)
  * [Status](#status)
  * [Features](#features)
  * [Bugs](#bugs)
  * [Technologies](#technologies)
  * [Author](#author)
<!--te-->

About
-----
I builded this project to improve my JavaScript skills, and challenger myself to learn more how to manipulate time with JavaScript.

Screenshot
----------
<img alt="screenshot" title="screenshot" src="assets/screenshot/screenshot.png"><img>

How to use
----------
<p>To run this chronometer you will only need to open the HTML in a browser.</p>
<p>You can start the chronometer clicking the start button, for start to counting the time.</p>
<p>You can stop the chronometer clicking the pause button, for stop counting time. If you click in start again, the chronometer will countinue to count from when it stopped.</p>
<p>You can restart the chronometer to zero clicking the restart button.For start to count again you need to click on the start button.</p>
<p>The chronometer count minutes, seconds and milliseconds.</p>

Status
------
Concluded :heavy_check_mark:

Features
--------
- [x] Count minutes, seconds and milliseconds
- [x] Pause the counting
- [x] Restart the chronometer
- [ ] Count hours

Bugs
----
I had to solve a bug that when the start button was click more then once consecutively, the chronometer stay faster and unstoppable. When the chronometer was reseted, it went back to zero but didn't stop counting.
To solve this problem I had to track when the chronometer was counting and when it was not. So, everytime the start is clicked the program will check if the chronometer is counting. If it isn't counting, it will start counting and if it is already counting, it won't count faster.

Technologies
------------
- [HTML](https://html.com/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [JavaScript](https://www.javascript.com/)

Author
------
<h3 align="center">Rafael Tavares</h3>
<p align="center">
 <a href="https://www.facebook.com/rafael.tavares.39904/"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></img></a>
 <a href="https://www.instagram.com/rafatavares03/"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white"></img></a>
</p>
