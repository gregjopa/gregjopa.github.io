---
layout: post
title: Flickr Feed with Fancybox
date: 2010-12-13 19:09:00
comments: true
categories:
- JavaScript
---

{% asset_img flickr_fancybox_screenshot.jpg "Flickr with Fancybox" %}

Using jQuery I combined Flickr's public photo feed with FancyBox to provide an interactive way to browse the latest Flickr pictures. My code pulls pictures from Flickr and formats them into a lightbox-style image gallery.

<!--more-->


By using Flickr's JSON feed I was able to implement this without any server-side code.


{% raw %}
<div class="button-container">
  <a href="http://gregjopa.me/code/javascript/flickr_fancybox/jquery_flickr_fancybox_mashup.zip" class="btn btn--primary">Download</a>
  <a href="http://gregjopa.me/code/javascript/flickr_fancybox/" class="btn btn--primary">Demo</a>
</div>
{% endraw %}


FancyBox is a great jQuery plugin for floating content on top of web pages. It works with images, videos, html, and ajax content. Read more about FancyBox here: [http://www.fancybox.net/](http://www.fancybox.net/)

Flickr provides an easy to use feed service for retrieving pictures. Their public feed has six optional parameters that can be defined in the url. You can click on the following url to access the feed with the default options: [http://api.flickr.com/services/feeds/photos_public.gne](http://api.flickr.com/services/feeds/photos_public.gne)

In the url the questionmark (?) is used to specify parameter values and the amperstamp (&amp;) separates the parameters. For example, the following url specifies the tag "beach" and the format "json": [http://api.flickr.com/services/feeds/photos_public.gne?tags=beach&amp;format=json]
(http://api.flickr.com/services/feeds/photos_public.gne?tags=beach&amp;format=json)

I am using the image path and title from Flickr's JSON feed and formatting it into html so it can be used with fancybox. jQuery has a .getJSON() method that makes it very easy to parse through a JSON feed.

Note that in the JSON flickr feed you only get a link to the medium size image. To get the thumbnail and large image you need to change the end of the url to specify the image size:

* Thumbnail - imagename_t.jpg
* Medium - imagename_m.jpg
* Large - imagename_b.jpg
