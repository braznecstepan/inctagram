import { PopUp } from '@/shared/ui/popUp/PopUp'
import { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as Toast from '@radix-ui/react-toast'
import styles from '@/shared/ui/popUp/PopUp.module.scss'
import Close from '@/shared/ui/icons/Close'
import { useState } from 'react'
import { Button } from '@/shared/ui'

const meta = {
  component: PopUp,
  title: 'PopUp',
} satisfies Meta<typeof PopUp>

export default meta

type Story = StoryObj<typeof PopUp>

export const BasePopUp: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const error = 'Error!!!'
    const isOpenHandler = () => {
      setIsOpen(true)
    }

    return (
      <>
        <Button onClick={isOpenHandler}>ShowPopUp</Button>
        <Toast.Provider duration={2000} swipeDirection={'right'}>
          <Toast.Root className={styles.Root} open={isOpen} onOpenChange={setIsOpen}>
            <Toast.Description>{error}</Toast.Description>
            <Toast.Close className={styles.Action} asChild>
              <Close />
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className={styles.Viewport} />
        </Toast.Provider>
      </>
    )
  },
}
