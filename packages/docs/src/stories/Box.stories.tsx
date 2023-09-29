import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@gustavokissel-ignite-ui/react'

export default {
  tags: ['autodocs'],
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof Box>

export const Primary: StoryObj<typeof Box> = {}
