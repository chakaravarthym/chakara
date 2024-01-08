import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import SamplesCards from './components/SamplesCards';
import widgetDefinition from './SamplesCards.widget';
import { RenderFn } from '../../types/widgets';

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
      <SamplesCards />
    </IntlProvider>,
    element,
    () => cb(element),
  );
};

export default render;
