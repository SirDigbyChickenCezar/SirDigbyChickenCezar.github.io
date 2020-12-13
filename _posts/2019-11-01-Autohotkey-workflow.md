---
layout: post
title: "The magic of AutoHotkey's AlwaysOnTop script"
---

---
layout: post
title: "Getting a Jekyll Image Gallery set up"
---

Originally, I wanted sandroid.dev to be a catch-all, CV, porfolio, blog, project listing site. I looked into mangling the minimal jekyll theme into 
supporting gallery plugins, and there was some promising stuff, but none of them really fit the site's feel. Plus, I was vary of adding bloat to
the simple CV site. People who are interested in seeing my photography wouldn't care about my programming escapades either, so I just 
decided to create a separate site for it. 

I went off to find some new themes, and none of them *quite* fit what I wanted it to look like. But that's fine, I've wanted to set up 
a Ruby environment for a while, so I just picked up the *[Starving Artist](https://chrisanthropic.github.io/starving-artist-jekyll-theme/illustration/)* theme 
with an eye for modifying it for my own needs. It had the basics I needed - a slick sidebar with a menu, and a simple yet elegant gallery function. 

There's a few things I didn't like: 

* The hover animation on the menu is too aggressive and not very pretty. 
* How the placement of the buttons in the gallery changes as you open different sized photos in lightbox  mode. 
* The design of the next/previous buttons in the gallery. 

So yeah, with that in mind I went off and installed Ruby and Jekyll. I'm running it on the Windows Linux Subsystem, because you know, Windows is a bit faffy, 
and Linux is often annoying as it can get into weird states and often stuff doesn't *just work*, so I'm seeing if some sort of amalgation of the two can 
balance me out. Yes, many people will tell you Linux is great and if a folder's permissions get mangled somehow and logging breaks somwhere in the background
you've just had bad devops, and *actually the GUI is quite good now for everything*, but that's not my experience. Anyhow. 

Ruby looks nice. It seems very much like Python in it's simplicity. Not a mangle of brackets and ampersands, it's 
great. Good times so far. You just define a function and tell it to do a thing. 

```ruby
def hi(name)
    puts "Hello #{name}!"
end
```

Installing gems isn't so much fun so far. After an hour, I've faffed with permissions (as always), and some failures
of gathering packages when installing the gem bundle. Now http_parser.rb isn't installing, and it seems to be because
my paths have a space in them [https://github.com/tmm1/http_parser.rb/issues/47](https://github.com/tmm1/http_parser.rb/issues/47). Grand. 

After being unsuccessful in solving it, I ended up just renaming my Google Drive folder to Google_Drive, Which I'm sure will break other things later on, 
but to be honest I never liked having spaces in folder names. 

After some faffing, I got the Starving Artist template to run locally and on github pages. After swapping out the more obvious links and swapping in my own 
images and colour pallettes, I found that the lightbox feature doesn't work properly for panoramic photos. The maximum width it shows is 684 pixels, which 
is wholly inadequate. 

![Sad Panorama](small_panorama.jpg)


I'm not a fan of the whole border and box anyway, including the navigation buttons which I've wanted to change from the start, so it all needs an update anyway.

