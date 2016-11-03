var Metalsmith  = require('metalsmith');
var twig        = require('metalsmith-twig');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var snippet     = require('metalsmith-snippet');
var watch       = require('metalsmith-watch');
var sass        = require('metalsmith-sass');
var debug       = require('metalsmith-debug');
var server      = require('./server');

Metalsmith(__dirname)
  .metadata({
    siteTitle: "Site title",
    description: "Site Description",
    generator: "Metalsmith",
    author: "Author",
    site: "http://site-url.com"
  })
  .use(
    watch({
      paths: {
        "index.js" : "**/*",
        "${source}/**/*": "**/*",
        "${source}/layouts/**/*": "**/*",
        "${source}/css/*.scss": "**/*",
        "${source}/layouts/*.html": "**/*"
      },
      livereload: true, //Add liverload script to enable browser reload
    })
  )
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(collections({
    pages: {
      pattern: 'pages/*.md'
    },
    posts: {
      pattern: 'posts/*.md'
    }
  }))
  .use(markdown())
  .use(snippet({
    maxLength: 200,
    suffix: '...'
  }))
  .use(permalinks({
    linksets: [{
      match: { collection: 'pages' },
      pattern: ':title'
    },
    {
      match: { collection: 'posts' },
      pattern: 'blog/:title'
    }]
  }))
  .use(twig({
    directory: 'layouts',
    global: {
      metadata: this.metadata //Allow Twig Access to Metalsmith metadata
    }
  }))
  .use(sass())
  .use(debug())
  .build(function(err, files) {
    if (err) { throw err; }
  });
