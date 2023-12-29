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
      options: ['No Image', 'hello.jpg', 'articles_bg.jpg'],
      description: 'Please Choose the Background Image.',
      table: {
        defaultValue: { summary: 'No Image' },
      },
    },
    textColor: {
      control: 'color',
      description: 'Please choose the Text color.',
      table: {
        defaultValue: { summary: 'fff' },
      },
    },
    title: {
      description: 'Please Update the Descriptions Text. ',
      table: {
        defaultValue: { summary: 'Descriptions' },
      },
    },
    heading: {
      description: 'Please Update the Heading Text.',
      table: {
        defaultValue: { summary: 'Heading' },
      },
    },
  },
  args: {
    backgroundColor: '#5a7c55',
    textColor: '#fff',
  },
};

const Template: StoryFn = (args) => <ArticlesCards {...args} />;
export const Articles = Template.bind({});
Articles.args = {
  title: 'Articles descritions',
  heading: 'Article Heading',
};

export default stories;
