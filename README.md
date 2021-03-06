# Generic Metalsmith Build

#### Create a simple Metalsmith Scaffold for a Static Blog Site

Simply clone repository and create markdown files in the pages and posts folder.
Pages will automatically populate the main navigation bar.

No default styles are included although the scaffold does use [normalize.css](https://necolas.github.io/normalize.css/).

The Metalsmith scaffold includes:

* metalsmith
* metalsmith-layouts
* metalsmith-markdown
* metalsmith-collections
* metalsmith-permalinks
* metalsmith-sass
* metalsmith-snippet
* metalsmith-twig

It also includes the following dev-dependancies:

* express - for development server
* metalsmith-debug
* metalsmith-watch - live reloading

Includes [Normalize CSS](https://necolas.github.io/normalize.css/)

`mkdir My-Static-Site`

`git clone https://github.com/forbesg/metalsmith-blog-scaffold.git My-Static-Site`

`cd My-Static-Site`

`npm install`

Build Site and Start Server - `npm start`

Build folder will be created '/build' and static files served.

Images - [Unsplash](https://unsplash.com/)
