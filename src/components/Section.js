import React, { Suspense, lazy, useState } from 'react';
import Content from 'contents/Content';
import { Loading, Logger } from '.';
import { Provider } from 'kind-of-redux';
import store from 'store';

const components = [
  'Counter',
  'ThemeChanger',
  'CustomRedux',
  'MouseWatcher',
  'Memoization',
];
const makeLazy = component => ({
  [component]: lazy(() => import(`contents/${component}`)),
});
const lazyComponent = components.reduce((acc, cur) => {
  return { ...acc, ...makeLazy(cur) };
}, {});

const Section = () => {
  const [content, changeContent] = useState('Counter');
  const Component = lazyComponent[content];
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Content title={`src/contents/${content}`} content={<Component />} />
      </Suspense>
      <div>
        <span>Examples:</span>
        {components.map(component => (
          <button key={component} onClick={() => changeContent(component)}>
            {component}
          </button>
        ))}
      </div>
      <Logger />
    </Provider>
  );
};

export default Section;
