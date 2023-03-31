# The repository for DanDeb.tech

This website was designed as part of a project for the January 2023 cohort of Code Louisville.  I have attempted to integrate multiple design elements such as responsive manu with CSS.  Hover animations, accordion boxes, and utilizing javascript for information gathering and display.

## Project Design

This ius intended to be a personal site to showcase some of my work and to put random things on.

The website uses the [Dracula theme](https://draculatheme.com/).  The navigation is used via the hamburger button.  The home page is just a summary and doesn't include much.  The About page give a bit more detail.  The Stuff page incorporates accordion boxes for each of the "fun" things that I added giving more information.  THe Contact page uses javascript to accept input and display it back to the user.  This isn't functional.  I plan to add that feature in the future.

### CSS

Using CSS I made a responsive menu that was created mobile first.  I used flexbox way too much but am rather happy with how the site turned out when changing the size.  When the page is wide enough the navigation expands into buttons that were made larger for fingers.  I also use another media query to display a little welcome on the header when the screen is wide enough.  I had it there originally when I was in the early stages of the site.  Rather quickly I changed to a mobile first mentality and made that my first media query since it looked bad on a small screen.

As the screen getrs larger there are hover over effects as well.  I decided to add these at the at tablet size due to how I have seen devices being used recently.  I know multiple people that use a keyboard and mouse for their tablets.

The site is set to center on larger screens and extent the paragraph size to 65 characters for optimal reading.


### Javascript

THere are 33 seperate javascript code sets for the different parts of the site.  The first is to show an hide the hamburger menu.  There is also a set for the accordion boxes.  The last is for the contact form.  THis took me quite the amount of work to figure out and a lot of help.  Especially when I had it working and in my testing I decided to add thousands of characters to the message box.

The "contact" form takes data into an array and then displays the information back to the user with a little message.

I attempted to make the site as acessable as possible.  

### Acessability