# Clean House Kitchen UI Template

싱크대 교체·상판 리폼·맞춤가구 서비스를 위한 한국어 Next.js UI 템플릿입니다. 고객용 페이지와 관리자 대시보드를 함께 제공합니다.

이 README와 Sites 데모는 `feature/cleanhouse-kitchen-public` 브랜치를 기준으로 합니다.

공개 브랜치는 예시 정보로 정리한 소스의 단일 초기 커밋에서 시작하며, 이전 테마 브랜치의 커밋 이력을 포함하지 않습니다.

## 데모

- [Sites 데모](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site)
- [관리자 화면](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/admin/)
- [사진 견적 양식](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/inquiry/new/)
- [브랜치 소스](https://github.com/kutaelee/homecare-ui-template/tree/feature/cleanhouse-kitchen-public)

데모는 로그인 없이 누구나 접속할 수 있도록 공개합니다.

### 시연 범위

서비스 필터, 시공 전후 슬라이더, FAQ 펼치기, 사진 선택·미리보기, 양식 제출 상태와 관리자 UI를 확인할 수 있습니다.

- 견적·예약·Q&A·회원가입·로그인·결제 양식은 화면 시연용입니다. 실제 접수, 인증, 결제, 알림 전송이나 서버 저장을 수행하지 않습니다.
- 관리자 페이지는 별도 로그인 없이 열리는 샘플 화면입니다. 변경 내용은 서버에 저장되지 않습니다.
- 릴스 모달은 영상 UI 예시입니다. SNS 버튼은 데모 연락처 안내로 이동합니다.
- 전화번호는 `000-0000-0000`, 사업자번호는 `000-00-00000`, 이메일은 `example.com`을 사용하는 예시입니다. 대표자와 주소도 가상 정보이며, 전화·문자·SNS 버튼은 실제 업체 대신 내부 안내나 시연 양식으로 이동합니다.
- 시공 실적, 후기, 가격과 보증 문구는 템플릿 콘텐츠입니다. 실제 서비스 정보로 사용하기 전에 확인해야 합니다.

## 로컬 실행

Node.js 20.9 이상과 npm이 필요합니다.

```bash
git clone --branch feature/cleanhouse-kitchen-public --single-branch https://github.com/kutaelee/homecare-ui-template.git
cd homecare-ui-template
npm ci
npm run dev -- --hostname 127.0.0.1
```

[http://127.0.0.1:3000](http://127.0.0.1:3000)에서 확인하고 `Ctrl+C`로 종료합니다.

```bash
npm run public-check    # 금지 문자열·비밀키 패턴·필수 경로 검사
npm run structure-check # TS/TSX 구문·내부 import·일러스트 경로 검사
npm run typecheck       # TypeScript 검사
npm test                # 위 검사와 ESLint 실행
npm run build           # 일반 Next.js 서버용 빌드
npm run start -- --hostname 127.0.0.1
```

검사 스크립트는 전체 보안 감사나 브라우저 E2E 테스트를 대신하지 않습니다.

## Sites 배포

Sites에는 정적 내보내기 결과인 `out/`을 배포합니다. API 키나 데이터베이스 설정은 필요하지 않습니다.

```bash
npm ci
npm run build:sites
```

`build:sites`는 해당 빌드에서만 `SITES_STATIC_EXPORT=1`을 설정합니다. `next.config.ts`는 이 값이 있을 때 정적 내보내기, 디렉터리형 URL과 이미지 최적화 해제를 적용합니다. 샘플 상세 경로는 `generateStaticParams()`로 미리 생성하며 `robots.txt`도 정적 파일로 출력합니다.

`.openai/hosting.json`에는 이 데모의 Site ID와 정적 배포 디렉터리 `out`이 기록되어 있습니다. 인증 정보는 넣지 않습니다.

소스 수정 후에는 정적 빌드를 확인하고, Sites에 연결된 소스 저장소에 같은 상태를 동기화한 뒤 해당 커밋과 빌드 결과로 버전을 저장·배포해야 합니다. GitHub 브랜치에 push하는 것만으로 Sites가 자동 갱신되지는 않습니다. 다른 데모를 만들 때는 새 Site를 등록하고 그 Site가 반환한 ID를 사용하세요.

`out/`은 정적 웹 서버로 확인해야 합니다. `npm run start`는 `npm run build`로 만든 일반 서버 빌드용입니다. 빌드 방식을 전환할 때는 필요한 명령으로 다시 빌드하세요.

## 화면과 경로

| 영역 | 경로 | 내용 |
| --- | --- | --- |
| 메인 | `/` | 히어로, 서비스 필터, 시공 전후 비교, 사진 견적, 릴스 모달, FAQ |
| 서비스 | `/services/`, `/services/[slug]/` | 6개 서비스 목록과 상세 |
| 시공 사례 | `/cases/`, `/cases/[id]/` | 사례 목록과 상세 |
| 안내 | `/faq/`, `/blog/`, `/contact/` | FAQ, 작업 일지, 상담 안내 |
| 상담·예약 | `/inquiry/`, `/inquiry/new/`, `/reservation/` | 상담 안내, 사진 견적, 방문 실측 시연 양식 |
| Q&A | `/qna/`, `/qna/[id]/`, `/qna/new/` | 질문 목록, 샘플 답변, 작성 양식 |
| 사용자 | `/login/`, `/signup/`, `/mypage/` | 로그인·가입 양식과 고객 화면 |
| 관리자 | `/admin/`, `/admin/[section]/` | 대시보드와 서비스·사례·FAQ·문의·예약·Q&A·미디어·설정 메뉴 |
| 결제 | `/payment/mock-bank-transfer/` | 입금 안내 시연 화면 |
| 약관 | `/terms/`, `/privacy/` | 이용약관과 개인정보 안내 예시 |

대괄호 경로는 샘플 데이터에 등록된 값만 정적 생성합니다. 데이터에 없는 상세 주소는 제공하지 않습니다.

## 수정할 곳

| 파일 | 수정 내용 |
| --- | --- |
| `src/data/demo.ts` | 브랜드, 연락처, 서비스, 사례, FAQ, 지역, 릴스 데이터 |
| `src/data/adminDemo.ts` | 관리자 샘플 데이터 |
| `src/app/globals.css` | 차콜·아이보리·코퍼 색상과 공통 스타일 |
| `src/app/layout.tsx` | 사이트 제목, 설명, 공통 레이아웃 |
| `src/components/QuickPhotoQuoteForm.tsx` | 사진 견적 UI와 `customApiHandler` 연동 지점 |
| `src/components/DemoForm.tsx` | 예약·Q&A·인증·결제 양식의 제출 처리 |
| `src/components/AdminWorkspace.tsx` | 관리자 화면과 상태 처리 |
| `src/components/ReelsModal.tsx` | 릴스 모달과 외부 영상 링크 |
| `public/illustrations/` | 서비스 SVG 일러스트 |

레이아웃의 최대 너비는 1440px이며, 작은 화면에서는 메뉴와 카드 배치가 바뀝니다. Pretendard는 jsDelivr에서 불러오므로 외부 네트워크 접근이 필요합니다.

`src/`와 `public/`이 화면 소스이고 `.next/`·`out/`은 다시 생성할 수 있는 빌드 결과입니다. 의존성 버전은 `package-lock.json`으로 고정하며, `.env*`와 빌드 결과는 Git에서 제외합니다. 현재 데모는 영속 데이터나 데이터베이스를 사용하지 않습니다.

## 실제 서비스로 전환할 때

회사 정보와 연락처, 이미지 사용 권한, 실적·보증 문구를 확인한 뒤 교체하세요. 인증과 관리자 접근 제어, 서버 입력 검증, 파일 업로드 제한, 저장·삭제 처리, 알림·결제 API는 별도로 구현해야 합니다. 정적 데모에 서버 처리를 추가하려면 별도 API를 연결하거나 서버 실행을 지원하는 배포 구성을 사용하세요.

현재 템플릿은 검색 노출을 막도록 메타데이터와 `robots.txt`를 설정합니다. 이 설정은 접근 제어가 아닙니다.

## 라이선스

코드의 라이선스는 [MIT](LICENSE)입니다. 외부 브랜드·연락처·콘텐츠의 이용 권한은 별도로 확인해야 합니다.
