import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from './index'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    empresa: {
      name: 'empresa',
      type: { name: 'string', required: true },
      defaultValue: 'Datafort',
      description: 'Nome da empresa',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Datafort' }
      },
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Exemplo = Template.bind({})
