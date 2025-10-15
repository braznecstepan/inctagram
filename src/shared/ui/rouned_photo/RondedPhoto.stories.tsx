import { RoundedPhoto } from './RoundedPhoto'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'RoundedPhoto',
  component: RoundedPhoto,
} satisfies Meta<typeof RoundedPhoto>

export default meta

type Story = StoryObj<typeof RoundedPhoto>

export const Circle: Story = {
  args: {
    src: 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png',
    alt: 'User Photo',
    fallback: 'TM',
  },
}
export const BorderShadow: Story = {
  args: {
    src: 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png',
    alt: 'User Photo',
    fallback: 'TM',
    wrapperStyle: {
      border: '2px solid #24e212ff',
      boxShadow: '0 4px 8px rgba(233, 19, 19, 0.88)',
    },
  },
}

export const Rounded: Story = {
  args: {
    src: 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png',
    alt: 'User Photo',
    fallback: 'TM',
    borderRadius: '20%',
    wrapperStyle: {
      border: '2px solid #24e212ff',
      boxShadow: '0 4px 8px rgba(233, 19, 19, 0.88)',
    },
  },
}

export const Rectangle: Story = {
  args: {
    src: 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png',
    alt: 'User Photo',
    fallback: 'TM',
    borderRadius: 0,
    wrapperStyle: {
      width: 50,
      height: 100,
      border: '2px solid #24e212ff',
      boxShadow: '0 4px 8px rgba(233, 19, 19, 0.88)',
    },
  },
}
