// @flow
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import '../client/style/styles.scss';
import css from '../client/style/custom.scss';

type Props = {
  statusCode: numbe,
  remoteData: object,
}

class IndexPage extends React.Component<Props> {
  componentDidMount() {
    console.log(this.props.statusCode, this.props.remoteData);
  }

  // { statusCode, remoteData: json }
  static getInitialProps({ res, err }) {
    return new Promise(async (resolve, reject) => {
      const success = true;
      const isErr = err ? err.statusCode : null;
      const statusCode = res ? res.statusCode : isErr;
      const result = await fetch('https://api.github.com/repos/zeit/next.js');
      const json = await result.json();
      return success ? resolve({ statusCode, remoteData: json }) : reject();
    });
  }


  render() {
    return (
      <div className={css.exmpls}>
        <h1>Index page</h1>
        <p><Link href="/auth"><a>Navigat to User component</a></Link></p>
        <button type="button" onClick={() => Router.push('/auth')}>AUth</button>
      </div>
    );
  }
}

export default IndexPage;
