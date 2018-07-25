// @flow

import React from 'react';

type Props = {
  statusCode: number,
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res, err }) {
    const isErr = err ? err.statusCode : null;
    const statusCode = res ? res.statusCode : isErr;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.statusCode, null, 2)}</pre>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </div>
    );
  }
}
