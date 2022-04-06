var request = require('request');
const xml = require("xml-js");


var bold = '\x1b[1m';
var normal = '\x1b[0m';
var red = '\x1b[31m';
var green = '\x1b[32m';
var white = '\x1b[37m';

request('https://www.hamqsl.com/solarxml.php', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  //parse response as xml then as json
  var result = JSON.parse(xml.xml2json(body, {compact: true, spaces: 4}))
  //aliases
  var space = " "
  var updated = result.solar.solardata.updated["_text"]
  var kindex = result.solar.solardata.kindex["_text"]
  var aindex = result.solar.solardata.aindex["_text"]
  var xray = result.solar.solardata.xray["_text"]
  var sunspots = result.solar.solardata.sunspots["_text"]
  var protonflux = result.solar.solardata.protonflux["_text"]
  var sfi = result.solar.solardata.solarflux["_text"]
  // 40 + 2 terminal units
  console.log("┌────────────────────────────────────────┐")
  console.log("│" + green + "Updated: " + white + updated + space.repeat(10) + "│")
  console.log("│" + green + "Solar Flux Index: " + white + sfi+ space.repeat(19) + "│" )
  console.log("│" + green + "K-Index: " + white + kindex + space.repeat(29) + "│")
  console.log("│" + green + "A-Index: " + white + aindex + space.repeat(29) + "│")
  console.log("│" + green + "X-Ray: " + white + xray + space.repeat(29) + "│")
  console.log("│" + green + "Sunspots: " + white + sunspots + space.repeat(28) + "│")
  console.log("│" + green + "Proton Flux: " + white + protonflux + space.repeat(24) + "│")
  console.log("└────────────────────────────────────────┘")
  }
  else {
    console.log("┌──────────┐")
    console.log("│" + bold + red + "Error: " + normal + white + response.statusCode + "│")
    console.log("└──────────┘")
  }
})


