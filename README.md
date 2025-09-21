# Hue's Tech Blog

Astro 기반의 개인 기술 블로그 프로젝트입니다.

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 18.20.0 이상
- npm 9.0 이상

### 설치 및 실행

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 시작 (http://localhost:3000)
npm run dev

# 3. 프로덕션 빌드
npm run build

# 4. 빌드 결과물 미리보기
npm run preview
```


## ⚙️ 환경 설정

### 1. 사이트 URL 변경
`astro.config.mjs` 파일에서 배포 URL을 수정하세요:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',  // 여기를 변경
  base: '/your-repo-name',                  // 여기를 변경
  // ...
});
```

### 2. 블로그 포스트 작성

`src/content/blog/` 디렉토리에 `.md` 또는 `.mdx` 파일을 생성합니다:

```markdown
---
title: '포스트 제목'
description: '포스트 설명'
createdAt: 2024-01-20
tags: ['astro', 'blog']
category: 'web'
draft: false  # true로 설정하면 숨김
---

포스트 내용...
```

### 3. 검색 기능 설정

검색 인덱스는 자동으로 생성됩니다. `src/utils/search-index.ts`에서 검색 설정을 수정할 수 있습니다.



## 📝 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 (localhost:3000) |
| `npm run build` | 프로덕션 빌드 (./dist/) |
| `npm run preview` | 빌드 미리보기 |
| `npm run astro add` | Astro 통합 추가 |
| `npm run astro check` | TypeScript 체크 |

## 🔧 기술 스택

- **Framework**: [Astro](https://astro.build) v5.13
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: Markdown/MDX
- **Search**: [Fuse.js](https://fusejs.io)
- **TypeScript**: 타입 안정성


## 📁 프로젝트 구조

```
├── public/          # 정적 파일 (이미지, 폰트 등)
├── src/
│   ├── components/  # Astro 컴포넌트
│   ├── content/     # 콘텐츠 컬렉션
│   │   ├── blog/   # 블로그 포스트 (.md, .mdx)
│   │   ├── notes/  # 짧은 메모
│   │   └── daily/  # 일일 기록
│   ├── layouts/     # 레이아웃 컴포넌트
│   ├── pages/       # 라우트 페이지
│   ├── styles/      # 전역 스타일
│   └── utils/       # 유틸리티 함수
├── astro.config.mjs # Astro 설정
├── package.json     # 프로젝트 의존성
└── tsconfig.json    # TypeScript 설정
```
