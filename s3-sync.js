var s3sync = require('s3-sync-aws')
  , readdirp = require('readdirp')

var files = readdirp({
    root: __dirname + '/../dist'
  // , directoryFilter: ['!.git', '!cache']
})

// Takes the same options arguments as `knox`,
// plus some additional options listed above
var uploader = s3sync({
    key: process.env.AWS_ACCESS_KEY_ID
  , secret: process.env.AWS_SECRET_ACCESS_KEY
  , bucket: 'dev-blog.penseo.de'
}).on('data', function(file) {
  console.log(file.fullPath + ' -> ' + file.url)
})

files.pipe(uploader)
