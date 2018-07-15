// @flow
import React from 'react';
import withMethods from '../hoc/withMethods';

type Props = {
  data: Array,
  someMethod: () => void
}

const TestComponent = ({ data, someMethod }: Props) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button type="button" onClick={someMethod}>Clicke me</button>
    </div>
  );
};

export default withMethods(TestComponent);
