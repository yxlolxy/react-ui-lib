import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Comp1 from '../../src/components/Comp1'

export default {
    component: Comp1
} as ComponentMeta<typeof Comp1>

const Template: ComponentStory<typeof Comp1> = () => {
    return <Comp1 />
}

export const Demo = Template.bind(null)
