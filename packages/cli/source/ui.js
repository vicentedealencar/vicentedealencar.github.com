"use strict";
// const path = require('path');
const React = require("react");
const { Box, Text } = require("ink");
const SelectInput = require("ink-select-input").default;
const BigText = require("ink-big-text");
const Gradient = require("ink-gradient");
const open = require("open");
// const terminalImage = require('terminal-image');

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const items = createItems([
  {
    label: "Website",
    url: "http://vicentedealencar.com.br"
  },
  {
    label: "Twitter",
    url: "https://twitter.com/vicentealencar"
  },
  {
    label: "GitHub",
    url: "https://github.com/vicentedealencar"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vicentedealencar"
  },
  // {
  // 	label: 'Blog',
  // 	url: 'https://blog.vicentedealencar.com'
  // },
  // {
  // 	label: 'Unicorns!',
  // 	async action() {
  // 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
  // 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
  // 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
  // 	}
  // },
  // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
  {
    label: "---------"
  },
  {
    label: "Quit",
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    }
  }
]);

module.exports = () => (
  <Box flexDirection="column">
    <Gradient name="mind">
      <BigText text="Vicente|de|Alencar" align="center" font="chrome" />
    </Gradient>
    <Box marginBottom={1}>
      <Text>
        I’m a full-stack javascript developer making things like apps, CLI
        tools, and modules.
      </Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
  </Box>
);
