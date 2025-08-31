import type { Preview } from '@storybook/nextjs-vite'
import '../src/shared/ui/styles/root_variables/colors.css'
import '../src/shared/ui/styles/_boilerplate.scss'
import '../src/shared/ui/styles/_typography.scss'
import '../src/shared/ui/styles/root_variables/typography.css'
import '../src/shared/ui/styles/root_variables/tokens.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      options: {
        dark: { name: 'dark', value: 'var(--color-dark-900)' },
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
    default: { value: 'dark' },
  },
}

export default preview
