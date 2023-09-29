import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

export default {
  tags: ['autodocs'],
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
}
