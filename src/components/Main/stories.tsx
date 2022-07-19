import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Teste Título',
    description: 'Teste Descrição'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
