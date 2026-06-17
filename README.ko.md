# Tempus

**디스플레이, TV 월, 사무실 화면을 위한 커스터마이즈 시계.**
원하는 디자인으로 설정하고 짧은 링크로 공유하세요. 앱 설치도, 계정도 필요 없습니다.

[![Vercel로 배포](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZIERA-io/clock_web)

---

## 소개

Tempus는 브라우저에서 동작하는 시계입니다. 색상, 페이스 스타일, 로고, 타임존을 1분 안에 설정하고 URL로 공유할 수 있습니다. 모든 설정이 링크 안에 담겨 있어서 열면 그대로 복원됩니다.

Supabase를 연결하면 업로드한 로고가 서버에 저장되고, 링크가 `https://tableclock.io/스튜디오` 처럼 짧아집니다.

---

## 기능

**시계**
- 아날로그 / 디지털 모드
- 아날로그 페이스 5종 — 클래식, 미니멀, 모던, 레트로, 스포츠
- 시계 크기 조정 (40–130%)
- 타임존, 24시간제, 초침·날짜 표시

**디자인**
- 12가지 테마 프리셋
- 배경·시계판·눈금·바늘·강조색·텍스트 6가지 색상 개별 조정
- 중앙 로고 — 텍스트/이모지, 이미지 URL, 파일 업로드
- 디지털 폰트 9종

**공유**
- 모든 설정이 URL 해시에 인코딩 — 백엔드 없이 공유 가능
- Supabase 연결 시 `tableclock.io/이름` 형태 단축 링크
- 업로드 이미지는 Supabase Storage에 저장되어 URL로 서빙

**UI / 언어**
- 한국어, 영어, 일본어, 중국어 지원
- 3초 무조작 시 컨트롤 자동 페이드

**디스플레이·TV용 기능**
- Wake Lock API로 화면 꺼짐 방지
- 전체화면 모드 (네이티브 Fullscreen API)
- 로비·회의실 화면에 바로 사용 가능

---

## 시작하기

```bash
git clone https://github.com/ZIERA-io/clock_web.git
cd clock_web
npm install
npm run dev
```

http://localhost:5173 에서 확인. 시계 화면을 클릭하면 설정 패널이 열립니다.

## 빌드

```bash
npm run build
```

결과물은 `dist/` 폴더에 생성됩니다.

---

## 단축 링크 설정 (선택)

Supabase 없이도 URL 해시 방식으로 공유할 수 있습니다. 이미지를 업로드하면 링크가 길어지는데, 단축 링크와 서버 이미지 저장을 원한다면 Supabase를 연결하세요.

**1. Supabase 프로젝트 생성** — https://supabase.com

**2. `.env` 파일 작성:**

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**3. SQL 스키마 실행** — `.env.example` 참고

**4. `logos` 스토리지 버킷 생성** (공개 버킷, INSERT 정책 `true`)

설정 완료 후:
- 설정 패널 **링크 이름** 입력란에 원하는 이름 입력 (예: `studio`)
- **저장** 클릭 → `https://tableclock.io/studio` 생성
- 중복 이름은 오류 메시지로 거부됨
- 로그인 없이 만든 링크는 이후 수정 불가

---

## 배포

`vercel.json`에 단축 링크 라우팅이 포함되어 있습니다.

```bash
npx vercel --prod
```

단축 링크 사용 시 Vercel 프로젝트 환경 변수에 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`를 추가하세요.

---

## 기술 스택

| 레이어 | 기술 |
|---|---|
| 프론트엔드 | Vite · React 18 · TypeScript |
| 시계 렌더링 | SVG + `requestAnimationFrame` (60fps, React 재렌더 없음) |
| 백엔드 (선택) | Supabase (Postgres + Storage) |
| 호스팅 | Vercel |
| 애널리틱스 | Vercel Analytics |

---

[English](README.md) · [日本語](README.ja.md)
