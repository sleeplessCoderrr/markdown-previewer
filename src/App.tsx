import React, { useState } from 'react';
import { marked } from 'marked';
import './assets/scss/App.scss'

const MarkdownPreviewer: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(initialMarkdown);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = (): { __html: string } => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div className="markdown-previewer">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="editor-preview-container">
        <div className="editor-section">
          <textarea
            id="editor"
            className="editor"
            value={markdown}
            onChange={handleChange}
            rows={10}
          />
        </div>
        <div className="preview-section">
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={getMarkdownText()}
          />
        </div>
      </div>
    </div>
  );
};

const initialMarkdown: string = `
# 🌃 sleeplessCoderrr
I'm constantly diving into the fascinating world of algorithms, data structures, and programming languages. My mind acts like a sophisticated compiler, breaking down complex problems into manageable parts and translating them into elegant lines of code. With each line I write, I'm laying the groundwork for digital innovation, blending logic and creativity to craft solutions that push the boundaries of what's possible.

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/@vincent_devin_) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/vincentius-oktara) 

<h3 align="left">Languages:</h3>
<hr />
<p align="left">
  <a
    href="https://www.cprogramming.com/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="c"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
      width="40" />
  </a>
  <a
    href="https://www.w3schools.com/cpp/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="cplusplus"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
      width="40" />
  </a>
  <a
    href="https://www.java.com"
    rel="noreferrer"
    target="_blank">
    <img
      alt="java"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
      width="40" />
  </a>
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    rel="noreferrer"
    target="_blank">
    <img
      alt="javascript"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      width="40" />
  </a>
  <a
    href="https://www.typescriptlang.org/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="typescript"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      width="40" />
  </a>
  <a
    href="https://www.python.org"
    rel="noreferrer"
    target="_blank">
    <img
      alt="python"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      width="40" />
  </a>
</p>

<h3 align="left">Tools and Frameworks:</h3>
<hr />
<p align="left">
   <a
    href="https://www.docker.com/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="docker"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
      width="40" />
  </a>
  <a
    href="https://nodejs.org"
    rel="noreferrer"
    target="_blank">
    <img
      alt="nodejs"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      width="40" />
  </a>
  <a
    href="https://laravel.com/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="laravel"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg"
      width="40" />
  </a>
   <a
    href="https://reactjs.org/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="react"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      width="40" />
  </a>
   <a
    href="https://www.microsoft.com/en-us/sql-server"
    rel="noreferrer"
    target="_blank">
    <img
      alt="mssql"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
      width="40" />
  </a>
  <a
    href="https://www.mysql.com/"
    rel="noreferrer"
    target="_blank">
    <img
      alt="mysql"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
      width="40" />
  </a>
   <a
    href="https://sass-lang.com"
    rel="noreferrer"
    target="_blank">
    <img
      alt="sass"
      height="40"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
      width="40" />
  </a>
  </p>

<p>
  <img
    align="left"
    alt="sleeplesscoderrr"
    src="https://github-readme-stats.vercel.app/api/top-langs?username=sleeplessCoderrr&locale=en&theme=merko&layout=compact" />
</p>
`;

export default MarkdownPreviewer;

