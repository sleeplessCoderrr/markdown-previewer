# Markdown Previewer

This is a Markdown Previewer built using **React**, **TypeScript**, and **SCSS**. It dynamically updates a preview as you type GitHub-flavored markdown in the editor. The app uses the `marked` library to parse the markdown and render it as HTML.

## Features

- **Live Preview:** As you type in the editor, the markdown is rendered in real-time.
- **GitHub-Flavored Markdown Support:** Supports headings, links, inline code, code blocks, lists, blockquotes, images, bold text, and more.
- **Default Content:** The editor is pre-loaded with a sample markdown to demonstrate the various features.
- **Responsive Design:** Built with a mobile-first approach and styled using SCSS.
- **Docker Support:** The app can be run inside a Docker container for easy deployment.

- ## Installation

To run this project using Docker, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sleeplessCoderrr/markdown-previewer.git
    ```

2. Build the Docker image:
    ```bash
    docker build -t markdown-previewer .
    ```

3. Run the Docker container:
    ```bash
    docker run -p 80:80 markdown-previewer
    ```

This will start the application, and you can access it in your browser at `http://localhost`.
