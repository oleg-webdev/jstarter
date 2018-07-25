import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '../client/style/styles.scss';
import css from '../client/style/custom.scss';

console.log(css);

export default () => {
  return (
    <div className={css.exmpls}>
      <h1>Hello indexssssss</h1>
      <p><Link href="/auth"><a>Auth</a></Link></p>
      <button type="button" onClick={() => Router.push('/auth')}>AUth</button>
    </div>
  );
};

// export default indexPage;
