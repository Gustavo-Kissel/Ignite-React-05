import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea } from '@gustavokissel-ignite-ui/react'

export default {
  tags: ['autodocs'],
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story: () => any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<typeof TextArea>

export const Primary: StoryObj<typeof TextArea> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<typeof TextArea> = {
  args: {
    disabled: true,
  },
}
