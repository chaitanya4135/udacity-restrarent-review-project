# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.


----------------------------




# Restaurant Reviews
The goal of this poject is to  Make this web application Responsive  Have to increase the accessibility in HTML and CSS along with javascript  Make this application Offline first by using serviceWorker.

## Running the Application
- Cloned the repository which was provided by udacity to my personal computer by using git clone command.
- Installed Python in my local system by using sudo apt-get install python3 command. Changed the directory to my downloaded project
- Run the python http server by using python -m SimpleHTTPServer command it took 8000 as port.
- FInally opened localhost:8000 url in my browser to check the output.
## I did the following steps to complete my Project
- For loading map I copied the JavaScript Token which was provided by MapBox.
- And pasted the token in index.html
- Modified code in main.js committed google map code and uncommitted mapBox code. And then edited dbhelper.js for loading neighborhood map markers.
## Changes in index.html
- Added flex properties to the home page to display cards in proper arrangement. For making this responsive and included <meta> tag with viewport.
- Removed height property from filter-options and added padding property for it in style.css
- Checked accebility by using audit extension, shows some accessibility issues such as color-contrast and lable fields for form-controls.
- Similarly changed some colors in footer section.
## Changes in restaurant.html
- Changed width properties for map and restaurant container and alignment also.
- added flex properties to the restaurant-conteiner, And also create two classes such as - restaurant-leftChild and - restaurant-rightChild.
- Added <meta> tag along with viewport.
- Changed background and fore ground colors and also added little more styles to the table and and its data.
- Modified styles of reviews container section.
- Registered Service-worker in index.html by using <script> tags and given path of serviceWorker ( sw.js ).

Created sw.js and developed events like install, fetch.



I manipulated the code in dbhelper.js to work with any server. Committed the url with port and assigned direct path.

