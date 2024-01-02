import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BannerCards from './BannerCards';

const stories: Meta = {
  title: 'Widgets/Banner Cards/Components',
  component: BannerCards,
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

const Template: StoryFn = (args) => <BannerCards {...args} />;
export const Banner = Template.bind({});
Banner.args = {
  title: 'Banner descritions',
  heading: 'Banner Heading',
};

export default stories;
