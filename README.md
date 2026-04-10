# Bizmong Design Preview (비즈몽 디자인 프리뷰) 실행 가이드

> 이 문서는 비개발자 및 AI 에이전트를 위해 작성된 아주 간단한 프로젝트 실행 안내서입니다.

이 프로젝트는 React + Vite 형식으로 만들어진 프론트엔드 어플리케이션입니다.

## 1. 패키지 설치 (Install Packages)
처음 프로젝트를 시작할 때 의존성 도구들을 설치해야 합니다. 터미널(Terminal)에서 아래 명령어를 실행해 주세요.

```bash
npm install
```

## 2. 프로젝트 실행 (Start Development Server)
설치가 완료되었다면 아래 명령어로 서버를 띄울 수 있습니다.

```bash
npm run dev
```

명령어를 실행하면 터미널에 로컬 웹 브라우저 주소(예: `http://localhost:5173/`)가 나타납니다. 
해당 링크를 클릭(mac은 `Cmd/Command + 클릭`)하거나 브라우저의 주소창에 복사하여 붙여넣으면 만들어진 디자인 컴포넌트들을 확인할 수 있습니다.

코드를 수정하고 저장하면 브라우저에 바로 변경사항이 반영됩니다!

---

## 🤖 For AI Agents
- **Environment**: React 19 + Vite + Tailwind CSS v4
- **Installation**: Run `npm install` to install dependencies. (A `package-lock.json` is present).
- **Execution**: Run `npm run dev` to start the local Vite development server.
- **Port**: Typically runs on port `5173` unless otherwise specified.
