import '.'
module.exports = {
    env: {
      rawJsFromFile: fs.readFileSync('./entry_script.js').toString()
    }
  }