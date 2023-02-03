import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Comp2 from '../../src/components/Comp2'

export default {
    component: Comp2
} as ComponentMeta<typeof Comp2>

const Template: ComponentStory<typeof Comp2> = () => {
    return <Comp2 />
}

export const Demo = Template.bind(null)
