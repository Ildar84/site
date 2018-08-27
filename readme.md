My self trainee project:
========================
http://photocentric.herokuapp.co

This site contains information about Photocentric group's products and has order features. There's only products section is working and Cart functionality.

Motivation:
-----------

This site I built for self experience. To improve skills in making dynamic HTML pages based on server built with Node.js and understand such technologies like: Node.js and Expess.js, Webpack bundle system, page templating on a server side, storing and querying data from MongoDB database, deploying site on the network.

Getting started:
----------------

To launch site after cloning, download all dependencies
  $ npm install
and run local server
  $ npm run start
To make changes start webpack build -
  $ npm run build

Technologies and frameworks used:
---------------------------------

- Webpack 4
- jQuery
- Node.js & Express
- EJS templating
- Mongoose
- Jquery plugins

Short map:
==========

All frontend content stands in 'src' folder.
--------------------------------------------

> /src
>> /css (third-party styles)
>> /fonts (font files)
>> /img (images)
>> /sass (my styles)
>> /script
>>> common.js (Webpack entry file which contains dependencies of styles and JS modules)
>>> /modules (my js modules)
>>> /vendor (vendor js modules)
>> /views (ejs templates of all pages)

The server built in site folder:
--------------------------------

  > server.js (main js script which handles all server side scripts)
  > addingToDatabase.js (script which adds data to database from objects folder)
  >> /config (options)
  >> /model (contains products schemas for database and cart logic)
  >> /objects (products data to add to database)
  >> /public (bundled frontend files)
  >> /views (ejs templates of all pages)
