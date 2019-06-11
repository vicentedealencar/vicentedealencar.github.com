#!/usr/bin/env node
'use strict'
const path = require('path')
const meow = require('meow')
const termImg = require('term-img')
const terminalImage = require('terminal-image')
const importJsx = require('import-jsx')
const React = require('react')
const { render } = require('ink')

const ui = importJsx('./ui')

meow(`
	Usage
	  $ vicentedealencar
`)

const fallback = async () => {
  const imgPath = path.join(__dirname, 'avatar-fallback.png')
  // const imgPath = path.join(__dirname, 'avatar.png')
  // const imgPath = 'http://gravatar.com/avatar/6805968f8f0beb313a804c2c6133e5ba.png?s=200'
  const image = await terminalImage.file(imgPath)
  console.log(image)
}

const imgPath = path.join(__dirname, 'avatar.png')
// const imgPath = 'http://gravatar.com/avatar/6805968f8f0beb313a804c2c6133e5ba.png?s=200'
termImg(imgPath, { fallback })

render(React.createElement(ui))
