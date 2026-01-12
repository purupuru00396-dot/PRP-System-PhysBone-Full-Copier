import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
    // 첫 접속(/) → 원하는 문서로 자동 이동
    return <Redirect to="/cfi/getting-started" />;
}
