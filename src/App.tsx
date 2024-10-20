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
# Welcome to Markdown Previewer!

## This is a sub-heading

[This is a link](https://www.example.com)

Here is some inline code: \`<div></div>\`

\`\`\`
// This is a code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- Here is a list item

> This is a blockquote

**This is bold text**

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

export default MarkdownPreviewer;

