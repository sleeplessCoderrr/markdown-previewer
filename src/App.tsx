import React, { useState } from 'react';
import { marked } from 'marked';
import './assets/scss/App.scss';

const MarkdownPreviewer: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(initialMarkdown);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = (): { __html: string } => {
    return { __html: marked(markdown, { breaks: true }) as string };
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

###  📪 Socials
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vincentius-oktara-0984a428a/)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/vincent_devin_)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vincentiusoktara@gmail.com)

### 💻 Stacks
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaFX](https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Cisco](https://img.shields.io/badge/cisco-%23049fd9.svg?style=for-the-badge&logo=cisco&logoColor=black)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

### 📊 Stats
![](https://raw.githubusercontent.com/sleeplessCoderrr/github-stats/master/generated/overview.svg#gh-dark-mode-only)
![](https://raw.githubusercontent.com/sleeplessCoderrr/github-stats/master/generated/languages.svg#gh-dark-mode-only)
`;

export default MarkdownPreviewer;
