import { Button } from './Button'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary button',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary button',
  },
}
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined button',
  },
}
export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text button',
  },
}
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'FullWidth button',
    fullWidth: true,
  },
}

export const Link: Story = {
  args: {
    variant: 'primary',
    children: (
      <a href={'https://pikvio.ru'} target={'_blank'} rel={'noreferrer'}>
        Link
      </a>
    ),
    asChild: true,
  },
}
