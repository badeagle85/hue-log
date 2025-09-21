# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드라인입니다.

## 📌 필수 명령어

- **개발 서버**: `npm run dev` - localhost:3000에서 개발 서버 시작
- **빌드**: `npm run build` - 프로덕션 빌드를 ./dist/로 생성
- **미리보기**: `npm run preview` - 빌드된 사이트 로컬 미리보기
- **타입 체크**: `npm run astro check` - TypeScript 타입 체크

## 🏗️ 아키텍처 개요

### 핵심 설정
- **배포 환경**: GitHub Pages (`https://badeagle85.github.io/hue-log`)
- **베이스 경로**: `/hue-log` (astro.config.mjs에 설정됨)
- **통합 기능**: MDX, Tailwind CSS, Sitemap, RSS 피드

### 콘텐츠 시스템
Astro의 컬렉션을 사용한 3가지 콘텐츠 타입:

1. **Blog** (`src/content/blog/`): 메인 블로그 포스트
   - 필수 필드: title, description, createdAt
   - draft 플래그로 포스트 숨김 처리
   - category와 tags로 분류
   - author 기본값: '유상훈'

2. **Notes** (`src/content/notes/`): 짧은 메모
3. **Daily** (`src/content/daily/`): 일일 기록 (날짜, 기분 추적)

### 검색 시스템
- Fuse.js 라이브러리를 사용한 커스텀 검색
- 검색 인덱스 생성: `src/utils/search-index.ts`
- 콘텐츠 첫 500자 포함
- 검색 모달: `src/components/SearchModal.astro`
- JSON 엔드포인트: `src/pages/search-index.json.ts`

## 💡 코딩 컨벤션

### 파일 작성 규칙
1. 컴포넌트는 PascalCase 사용 (예: `SearchModal.astro`)
2. 유틸리티는 kebab-case 사용 (예: `search-index.ts`)
3. 콘텐츠 파일은 kebab-case 사용 (예: `first-post.md`)

### Astro 컴포넌트
```astro
---
// 프론트매터: TypeScript 로직
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---

<!-- 템플릿: HTML + Astro 문법 -->
<div class="container">
  {posts.map(post => <article>{post.data.title}</article>)}
</div>
```

### 스타일링
- Tailwind CSS 클래스 우선 사용
- 다크모드는 `dark:` 프리픽스 사용
- 커스텀 CSS는 `src/styles/`에 작성

## ⚠️ 주의사항

### URL 처리
- **중요**: 모든 내부 링크는 `/hue-log` 베이스 경로 포함 필수
- 예시: `/blog/post-1` ❌ → `/hue-log/blog/post-1` ✅

### 콘텐츠 필터링
- draft: true인 포스트는 검색 인덱스에서 제외됨
- 빌드 시에도 draft 포스트는 제외됨

### 성능 최적화
- 이미지는 `public/` 폴더에 저장
- 큰 이미지는 Sharp를 통해 자동 최적화됨
- 검색 인덱스는 빌드 시 생성됨

## 🚀 배포 프로세스

### GitHub Actions 자동 배포
1. main 브랜치에 푸시 시 자동 트리거
2. `.github/workflows/deploy.yml` 실행
3. dist/ 폴더 내용을 gh-pages 브랜치로 배포

### 배포 전 체크리스트
- [ ] `npm run build` 성공 확인
- [ ] `npm run preview`로 로컬 테스트
- [ ] draft: false 확인 (공개할 포스트)
- [ ] astro.config.mjs의 site/base 경로 확인

## 🐛 자주 발생하는 이슈

### 1. 링크 404 오류
- 원인: 베이스 경로 누락
- 해결: 모든 링크에 `/hue-log` 프리픽스 추가

### 2. 검색이 작동하지 않음
- 원인: 검색 인덱스 생성 실패
- 해결: `npm run build` 후 `dist/search-index.json` 확인

### 3. 다크모드 깜빡임
- 원인: localStorage 접근 타이밍
- 해결: `<script is:inline>`으로 즉시 실행

## 📝 새 기능 추가 시

1. **새 컬렉션 추가**: `src/content.config.ts` 수정
2. **새 페이지 추가**: `src/pages/` 에 `.astro` 파일 생성
3. **새 컴포넌트**: `src/components/` 에 추가 후 필요한 곳에서 import
4. **새 유틸리티**: `src/utils/` 에 추가

## 🔍 디버깅 팁

```bash
# Astro 디버그 모드
DEBUG=* npm run dev

# TypeScript 타입 체크
npm run astro check

# 빌드 오류 상세 확인
npm run build -- --verbose
```