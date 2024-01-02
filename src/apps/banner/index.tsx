import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import BannerCards from './components/BannerCards';
import widgetDefinition from './EmojiCards.widget';

import { RenderFn } from '../../types/widgets';
import BannerCards from './components/BannerCards';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages } = await normalizeWidgetInput(
    instanceId,
    langCode,
    widgetDefinition,
  );
  if (!element || !locale) {
    return;
  }
  ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
      <BannerCards />
    </IntlProvider>,
    element,
    () => cb(element),
  );
};

export default render;