import s from './Tooltip.module.scss'
import { motionProps, Tooltip } from './Tooltip'
import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Scrollbar } from '@/shared/ui/scrollbar/Scrollbar'
import OutlineBell from '@/shared/ui/icons/OutlineBell'
import { useState } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { AnimatePresence, motion } from 'framer-motion'

const meta = {
  component: Tooltip,
  title: 'Tooltip',
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof Tooltip>

export const BaseTooltip: Story = {
  args: {
    children: (
      <Scrollbar maxHeight={200} maxWidth={'auto'}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium at autem beatae, consectetur enim eum impedit inventore iure magnam maiores molestiae nostrum obcaecati praesentium quibusdam, repellendus reprehenderit repudiandae rerum sequi soluta, temporibus unde voluptas. Alias autem culpa, delectus dicta dolorem in incidunt maxime nostrum obcaecati odio, perferendis quisquam quos ratione rerum tempora temporibus veritatis. Corporis eveniet molestiae obcaecati possimus. Asperiores aut cum debitis delectus dolor dolores eligendi enim est ex excepturi harum id impedit itaque laborum libero, nemo nobis nulla omnis perferendis perspiciatis porro praesentium quam ratione rem reprehenderit sed temporibus ullam, unde vero voluptas! Doloremque et eveniet soluta!'
        }
      </Scrollbar>
    ),
    icon: <OutlineBell />,
    side: 'bottom',
    disableHoverableContent: false,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)
    const DELAY_DURATION = 200
    const tooltipTrigger = (
      <span style={{ color: 'var(--color-light-100)', cursor: 'pointer' }}>Point it</span>
    )
    const classNames = {
      arrow: s.arrow,
      arrowBox: s.arrowBox,
      content: s.content,
      iconButton: s.iconButton,
      infoIcon: s.infoIcon,
    }

    return (
      <div style={{ margin: '0 auto' }}>
        <TooltipRadix.Provider delayDuration={DELAY_DURATION}>
          <TooltipRadix.Root
            disableHoverableContent={args.disableHoverableContent}
            onOpenChange={setIsOpen}
            open={isOpen}
          >
            <TooltipRadix.Trigger asChild>{tooltipTrigger}</TooltipRadix.Trigger>
            <AnimatePresence>
              {isOpen && (
                <TooltipRadix.Portal forceMount>
                  <TooltipRadix.Content
                    className={classNames.content}
                    asChild
                    side={args.side}
                    sideOffset={4}
                  >
                    <motion.div {...motionProps}>
                      {args.children}
                      <TooltipRadix.Arrow asChild className={classNames.arrowBox}>
                        <div className={classNames.arrow} />
                      </TooltipRadix.Arrow>
                    </motion.div>
                  </TooltipRadix.Content>
                </TooltipRadix.Portal>
              )}
            </AnimatePresence>
          </TooltipRadix.Root>
        </TooltipRadix.Provider>
      </div>
    )
  },
}
