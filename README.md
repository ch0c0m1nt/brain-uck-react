# 🧠 brain-uck-react
A Brainfuck interpreter playground built with React.

> I use Archvile Linux BTW 😈

## ✨ What is this?
**brain-uck-react** is a small web-based **Brainfuck interpreter and playground**.
It allows you to write, run, and experiment with Brainfuck code directly in the browser.

This project is a **prototype**, focusing on simplicity, clarity, and hackability,
while using **modern React tooling**.

## 🧩 Design Note
This playground intentionally **does not implement Brainfuck input (`,`)**.
It focuses on **deterministic execution and visualization**, which is also reflected
in the project name — *brain-uck*.

## 🛠️ Tech Stack
- **React (latest)**
- **Vite**
- **pnpm**
- TypeScript
- styled-components

## 🎨 Styling (Rationale)
- **styled-components** for co-located styles and rapid UI iteration
- optimized for experimentation and refactoring in a prototype codebase

## 🔥 Features
- 🧪 Brainfuck code editor
- ▶️ Run / Reset execution
- 🧠 Memory tape visualization
- 🧾 Output view (stdout)
- ⚡ Fast feedback loop for experimentation

## 🚀 Quick Start
```bash
pnpm install
pnpm dev