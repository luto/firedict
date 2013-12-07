# FireDict
A simple dictionary webapp built on top of the glorious [firebase](http://firebase.com). This repo includes everything needed to set up a firebase for use with the webapp. A public version can be found at http://dict.luto.at/.

## Setup

### Firebase
* Login or register at http://firebase.com/
* Create a new firebase with a nice name like `myAwesomeFireDictInstance`
* Remember the name, you'll need it later
* Put the rules from the `firebase`-directory into the rules-tab of your firebase-forge and save them

### HTML
* Upload the content of the `html`-directory to your favourite httpd-provider. I recommend http://uberspace.de/
* Set the URL of your firebase in `settings.js`
* Visit your own instance of firedict and learn some new vocabulary!

