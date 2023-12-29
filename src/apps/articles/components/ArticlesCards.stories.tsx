import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ArticlesCards from './ArticlesCards';

const stories: Meta = {
  title: 'Widgets/Articles Cards/Components',
  component: ArticlesCards,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Please choose the Backgroud color.',
      table: {
        defaultValue: { summary: '5a7c55' },
      },
    },
    imgPath: {
      control: 'select',
      options: ['hello.jpg', 'logo.png'],
      description: 'Please Update the Title Text.',
      table: {
        defaultValue: { summary: 'No Image' },
      },
    },
    textColor: {
      control: 'color',
      description: 'Please choose the Text color.',
      table: {
        defaultValue: { summary: '333333' },
      },
    },
    title: {
      control: 'text',
      description: 'Please choose the Title color.',
      table: {
        defaultValue: { summary: '333333' },
      },
    },
  },
  args: {
    backgroundColor: '#5a7c55',
    textColor: '#333',
  },
};

const Template: StoryFn = (args) => <ArticlesCards {...args} />;
export const Articles = Template.bind({});
Articles.args = {
  title: 'Title',
  heading: 'Heading',
};

export default stories;
