const React = require('react')

module.exports = ({
  items,
  handleSelect,
  components: { Box, Gradient, BigText, Text, SelectInput },
}) => (
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
)
