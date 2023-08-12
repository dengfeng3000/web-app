import React from 'react';
import { Button } from '@blueprintjs/core';
import s from './index.module.scss';
import copyText from '@/utils/copy';

interface CodeSnippetProp {
  code: string;
  lang?: string;
}

export default function CodeSnippet(props: CodeSnippetProp) {
  const { code, lang = 'txt' } = props;

  const copyHandler = () => {
    copyText(code);
  };

  return (
    <div className={s.codeSnippet}>
      <div className={s.codeHeader}>
        <span>{lang}</span>
        <Button intent="success" onClick={copyHandler} small>copy</Button>
      </div>
      <pre className={s.codeWrapper}>
        <code className={s.code}>
          { code }
        </code>
      </pre>
    </div>
  );
}
