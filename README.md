# Clean House Kitchen UI Template

싱크대 교체·상판 리폼·맞춤가구 업체의 홈페이지와 관리자 화면을 체험하고 수정할 수 있는 한국어 UI 템플릿입니다.

**화면만 둘러보려면 설치할 필요가 없습니다. 아래 데모를 열어 주세요.**

[홈페이지 체험](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site) · [관리자 화면 체험](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/admin/) · [ZIP 다운로드](https://github.com/kutaelee/homecare-ui-template/archive/refs/heads/feature/cleanhouse-kitchen-public.zip) · [MIT 라이선스](LICENSE)

> 이 프로젝트는 화면과 사용 흐름을 보여주는 시연용 템플릿입니다. 견적 신청, 예약, 회원가입, 로그인, 결제는 실제로 처리되지 않습니다. 관리자 화면에서 바꾼 내용도 새로고침하면 초기화됩니다. 실제 개인정보 대신 예시 값을 입력해 주세요.

## 원하는 방법으로 시작하기

| 하고 싶은 일 | 시작할 곳 |
| --- | --- |
| 설치 없이 홈페이지와 관리자 화면 보기 | [1. 데모 체험하기](#1-데모-체험하기) |
| 내 컴퓨터에서 실행하기 | [2. ZIP으로 내려받아 실행하기](#2-zip으로-내려받아-실행하기) |
| 문구·연락처·색상 바꾸기 | [3. 내 정보로 수정하기](#3-내-정보로-수정하기) |
| 실행 중 문제가 생겼을 때 | [4. 자주 막히는 부분](#4-자주-막히는-부분) |
| 개발·배포 작업하기 | [개발자용 안내](#개발자용-안내) |

## 1. 데모 체험하기

데모는 로그인 없이 누구나 열 수 있습니다. 컴퓨터와 휴대전화 브라우저에서 확인할 수 있습니다.

| 화면 | 체험할 수 있는 내용 |
| --- | --- |
| [홈페이지](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site) | 서비스 종류 선택, 시공 전후 슬라이더, 자주 묻는 질문 펼치기 |
| [시공 서비스](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/services/) | 서비스 목록과 상세 설명 |
| [시공 사례](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/cases/) | 사례 목록과 상세 화면 |
| [사진 견적](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/inquiry/new/) | 사진 선택·미리보기와 제출 완료 화면 |
| [실측 예약](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/reservation/) | 날짜와 시간을 고르는 양식 |
| [관리자 화면](https://cleanhouse-kitchen-demo.kutaelee0.chatgpt.site/admin/) | 서비스·사례·문의·예약·Q&A·설정 메뉴의 편집 흐름 |

전화번호는 `000-0000-0000`, 사업자번호는 `000-00-00000`, 이메일은 `example.com`을 사용한 예시입니다. 대표자와 주소도 가상 정보입니다. 전화·문자·SNS 버튼은 실제 업체 대신 데모 안내나 시연 양식으로 이동합니다. 릴스 모달도 영상 화면의 예시이며 실제 영상 재생 기능은 없습니다.

시공 실적·후기·가격·보증 문구는 템플릿 콘텐츠입니다. 실제 사업에 사용하기 전에는 본인의 정보로 확인하고 수정하세요.

## 2. ZIP으로 내려받아 실행하기

Git이나 GitHub 계정 없이 시작할 수 있습니다. 처음 한 번은 실행에 필요한 프로그램과 파일을 설치해야 합니다.

### ① Node.js 설치하기

[Node.js 공식 다운로드 페이지](https://nodejs.org/ko/download)에서 운영체제에 맞는 설치 프로그램을 내려받아 설치하세요. Node.js는 이 홈페이지를 내 컴퓨터에서 실행하는 프로그램이며, 필요한 파일을 설치하는 `npm`도 함께 제공합니다. 이 프로젝트에는 **Node.js 20.9 이상**이 필요합니다.

설치가 끝나면 열려 있던 터미널 창을 닫아 주세요. 다음 단계에서 새로 엽니다.

### ② 파일 내려받고 압축 풀기

1. [이 테마의 ZIP 다운로드](https://github.com/kutaelee/homecare-ui-template/archive/refs/heads/feature/cleanhouse-kitchen-public.zip)를 누릅니다.
2. 다운로드한 ZIP 파일의 압축을 풉니다.
3. 압축을 푼 폴더 안에서 **`package.json` 파일이 보이는 폴더**를 엽니다. 폴더가 한 겹 더 들어 있다면 안쪽으로 이동하세요.

GitHub에서 직접 내려받을 때는 브랜치가 `feature/cleanhouse-kitchen-public`인지 확인한 뒤 **Code → Download ZIP**을 선택하세요. 기본 `main` 브랜치는 별도의 홈케어 테마입니다.

### ③ 해당 폴더에서 터미널 열기

터미널은 아래 명령을 입력하는 창입니다.

- **Windows:** 파일 탐색기에서 `package.json`이 있는 폴더를 연 뒤, 위쪽 주소 표시줄에 `powershell`을 입력하고 Enter를 누릅니다.
- **macOS:** 터미널 앱을 열고 `cd `를 입력합니다. 뒤의 공백까지 입력한 상태에서 압축을 푼 폴더를 터미널로 끌어다 놓고 Enter를 누릅니다.

### ④ 필요한 파일 설치하기

아래 한 줄을 복사해 터미널에 붙여 넣고 Enter를 누릅니다.

```bash
npm ci
```

인터넷 연결이 필요합니다. 설치가 끝나서 명령을 다시 입력할 수 있을 때까지 기다리세요. 이 명령은 보통 처음 실행할 때 한 번만 필요합니다.

### ⑤ 홈페이지 실행하기

설치가 끝나면 다음 명령을 입력합니다.

```bash
npm run dev -- --hostname 127.0.0.1
```

터미널에 준비 완료 안내가 나오면 브라우저에서 [http://127.0.0.1:3000](http://127.0.0.1:3000)을 엽니다. 다른 주소가 출력되었다면 터미널에 표시된 주소를 사용하세요.

**실행 중에는 터미널 창을 열어 두세요.** 이 주소는 내 컴퓨터에서 확인하는 주소이며, 다른 사람에게 공유하는 공개 링크가 아닙니다.

### 종료하거나 다음에 다시 실행하기

- 종료하려면 실행 중인 터미널에서 **Ctrl+C**를 누릅니다. 종료 확인이 나오면 `Y`를 입력합니다.
- 다음에 다시 사용할 때는 같은 폴더에서 터미널을 열고 `npm run dev -- --hostname 127.0.0.1`만 실행하면 됩니다.
- 파일을 새로 내려받았거나 의존성 설정이 바뀐 경우에는 `npm ci`를 다시 실행하세요.

## 3. 내 정보로 수정하기

이 템플릿에는 홈페이지를 영구적으로 편집하는 관리 도구가 포함되어 있지 않습니다. **문구와 이미지를 계속 바꾸려면 내려받은 파일을 수정해야 합니다.** 데모 관리자 화면에서 한 수정은 파일에 저장되지 않습니다.

텍스트 편집기나 코드 편집기로 해당 파일을 엽니다. 개발 서버를 실행한 상태에서 파일을 저장하면 브라우저에 변경 내용이 반영됩니다. 아래 파일 경로는 내려받은 폴더를 기준으로 합니다.

| 바꾸고 싶은 내용 | 열어 볼 파일 |
| --- | --- |
| 전화번호·대표자·주소·사업자번호, 서비스·사례·FAQ 데이터 | `src/data/demo.ts` |
| 홈페이지 본문 문구와 섹션 | `src/app/page.tsx` |
| 상단 로고와 메뉴 | `src/components/SiteHeader.tsx` |
| 하단 로고와 안내 문구 | `src/components/Footer.tsx` |
| 브라우저 탭 제목과 사이트 설명 | `src/app/layout.tsx` |
| 배경·글자·강조 색상 | `src/app/globals.css` |
| 서비스 일러스트 | `public/illustrations/` 폴더 |
| 관리자 샘플 데이터 | `src/data/adminDemo.ts` |

예를 들어 화면에 보이는 전화번호를 바꾸려면 `src/data/demo.ts`에서 아래 항목을 찾습니다.

```ts
phone: '000-0000-0000',
```

따옴표 안의 표시 문구를 바꾸고 저장하세요. 쉼표나 따옴표를 지우면 실행 오류가 날 수 있습니다. 잘못 수정했다면 저장 전후 상태를 확인하고 편집기의 실행 취소 기능을 사용하세요.

전화번호 표시를 바꿔도 전화·문자 버튼의 연결 대상은 자동으로 바뀌지 않습니다. 같은 파일의 `telHref`, `smsHref`, `instagramUrl`은 현재 데모 내부 안내로 연결되어 있습니다. 실제 연락처 연결은 별도로 수정해야 합니다. 업체 이름도 상단·하단·메인·탭 제목 등 여러 파일에 들어 있으므로 함께 확인하세요.

내 컴퓨터에서 파일을 고쳐도 위의 공개 데모는 바뀌지 않습니다. 다른 사람에게 수정한 홈페이지를 보여주려면 별도로 배포해야 합니다.

## 4. 자주 막히는 부분

| 증상 | 확인할 내용 |
| --- | --- |
| `npm` 또는 `node`를 찾을 수 없다고 나옵니다 | Node.js 설치를 마친 뒤 터미널을 닫고 다시 여세요. `node --version`으로 20.9 이상인지 확인하세요. |
| Windows에서 `npm.ps1` 실행이 차단됩니다 | 보안 설정을 바꾸지 않고 `npm.cmd ci`, `npm.cmd run dev -- --hostname 127.0.0.1`로 실행할 수 있습니다. |
| `package.json`을 찾을 수 없다고 나옵니다 | 터미널을 연 위치를 확인하세요. 압축을 푼 폴더 안에서 `package.json`이 보이는 폴더여야 합니다. |
| 설치 중 인터넷 연결 오류가 납니다 | 연결을 확인한 뒤 `npm ci`를 다시 실행하세요. 회사 네트워크에서는 npm 다운로드가 허용되는지 확인해야 할 수 있습니다. |
| 3000번 포트를 사용할 수 없다고 나옵니다 | 터미널에 다른 주소가 표시되었는지 확인하거나 `npm run dev -- --hostname 127.0.0.1 --port 3001`로 실행하세요. |
| 브라우저에서 연결할 수 없다고 나옵니다 | 실행 터미널이 열려 있는지, 준비 완료 안내가 나왔는지, 입력한 주소가 터미널의 주소와 같은지 확인하세요. |
| 파일을 수정한 뒤 오류 화면이 나옵니다 | 마지막에 고친 부분의 따옴표·쉼표·괄호를 확인하세요. 수정 내용을 되돌려 정상 실행되는지 확인할 수 있습니다. |
| 관리자 화면에서 바꾼 내용이 사라집니다 | 관리자 화면은 편집 흐름만 보여줍니다. 영구적인 변경은 파일 수정 또는 별도 저장 기능 구현이 필요합니다. |
| `index.html`을 더블클릭해도 실행되지 않습니다 | 이 프로젝트는 Node.js로 실행합니다. 위의 `npm ci`와 개발 서버 실행 단계를 따라 주세요. |

도움을 요청할 때는 오류 문구와 어느 단계에서 발생했는지 알려 주세요. 화면을 공유할 경우 비밀번호나 실제 개인정보가 포함되지 않았는지 확인하세요.

## 실제 홈페이지로 운영하려면

이 템플릿으로 화면을 준비할 수 있습니다. 고객의 문의를 받고 회원·예약·결제를 처리하려면 개발 작업이 추가로 필요합니다.

- 회사 정보, 연락처, 이미지 사용 권한, 시공 실적과 보증 문구를 확인하고 교체합니다.
- 견적·예약 저장, 사진 업로드, 알림 전송, 로그인과 관리자 접근 제어를 연결합니다.
- 결제를 받을 경우 결제 서비스와 실제 결제 처리 기능을 연결합니다.
- 입력 정보의 검증·보관·삭제, 개인정보 안내와 약관을 운영 방식에 맞게 준비합니다.

현재 데모에는 데이터베이스와 실제 접수 기능이 없습니다. API 키나 결제 계정을 등록하지 않아도 시연 화면은 실행할 수 있습니다.

## 개발자용 안내

<details>
<summary>Git으로 내려받기</summary>

```bash
git clone --branch feature/cleanhouse-kitchen-public --single-branch https://github.com/kutaelee/homecare-ui-template.git
cd homecare-ui-template
npm ci
npm run dev -- --hostname 127.0.0.1
```

공개 브랜치는 예시 정보로 정리한 소스의 초기 커밋에서 시작합니다. 이전 테마 브랜치의 커밋 이력을 포함하지 않습니다.

</details>

<details>
<summary>검사와 서버용 빌드</summary>

```bash
npm run public-check    # 금지 문자열·비밀키 패턴·필수 경로 검사
npm run structure-check # TS/TSX 구문·내부 import·일러스트 경로 검사
npm run typecheck       # TypeScript 검사
npm test                # 위 검사와 ESLint 실행
npm run build           # 일반 Next.js 서버용 빌드
npm run start -- --hostname 127.0.0.1
```

검사 스크립트는 전체 보안 감사나 브라우저 E2E 테스트를 대신하지 않습니다. 의존성은 `package-lock.json`을 기준으로 `npm ci`로 설치합니다.

</details>

<details>
<summary>Sites용 정적 빌드와 배포</summary>

```bash
npm ci
npm run build:sites
```

Sites에는 `out/`의 정적 빌드 결과를 배포합니다. `build:sites`는 해당 빌드에서만 `SITES_STATIC_EXPORT=1`을 설정하며, 정적 내보내기·디렉터리형 URL·이미지 최적화 해제를 적용합니다. 샘플 상세 경로는 `generateStaticParams()`로, `robots.txt`는 정적 파일로 생성합니다.

`.openai/hosting.json`에는 현재 데모의 Site ID와 출력 디렉터리 `out`이 기록되어 있습니다. 다른 사람의 데모를 만들 때는 이 ID를 그대로 사용하지 말고 새 Site를 등록해 반환된 ID로 설정하세요. 인증 정보는 이 파일에 넣지 않습니다.

수정한 소스와 빌드 결과를 Sites에 연결된 소스 저장소에 맞춰 동기화하고, 해당 커밋과 빌드 결과로 버전을 저장·배포해야 합니다. GitHub 브랜치에 push하는 것만으로 공개 데모가 자동 갱신되지는 않습니다. 공개 GitHub 브랜치와 Sites 소스 저장소의 Git 이력은 별도로 관리됩니다.

`out/`은 정적 웹 서버로 확인합니다. `npm run start`는 `npm run build`로 만든 서버용 빌드에 사용합니다. 빌드 방식을 바꿀 때는 필요한 명령으로 다시 빌드하세요. 서버 처리를 추가하려면 별도 API를 연결하거나 서버 실행을 지원하는 배포 구성을 사용해야 합니다.

</details>

<details>
<summary>페이지 경로와 연동 파일</summary>

| 영역 | 경로 |
| --- | --- |
| 메인 | `/` |
| 서비스 | `/services/`, `/services/[slug]/` |
| 시공 사례 | `/cases/`, `/cases/[id]/` |
| 안내 | `/faq/`, `/blog/`, `/contact/` |
| 상담·예약 | `/inquiry/`, `/inquiry/new/`, `/reservation/` |
| Q&A | `/qna/`, `/qna/[id]/`, `/qna/new/` |
| 사용자 | `/login/`, `/signup/`, `/mypage/` |
| 관리자 | `/admin/`, `/admin/[section]/` |
| 결제 | `/payment/mock-bank-transfer/` |
| 약관 | `/terms/`, `/privacy/` |

대괄호 경로는 등록된 샘플 값만 정적 생성합니다. 관리자에는 서비스·사례·FAQ·문의·예약·Q&A·미디어·설정 메뉴가 있습니다.

| 연동할 기능 | 파일 |
| --- | --- |
| 사진 견적 처리 | `src/components/QuickPhotoQuoteForm.tsx`의 `customApiHandler` |
| 예약·Q&A·인증·결제 양식 제출 | `src/components/DemoForm.tsx` |
| 관리자 화면과 상태 처리 | `src/components/AdminWorkspace.tsx` |
| 릴스 화면과 연결 주소 | `src/components/ReelsModal.tsx` |

레이아웃의 최대 너비는 1440px입니다. Pretendard는 jsDelivr에서 불러오므로 글꼴 로딩에는 외부 네트워크 접근이 필요합니다.

`src/`·`public/`은 화면 소스이며, `.next/`·`out/`은 다시 생성할 수 있는 빌드 결과입니다. `.env*`와 빌드 결과는 Git에서 제외합니다. 현재 데모는 영속 데이터나 데이터베이스를 사용하지 않습니다.

검색 노출을 막도록 메타데이터와 `robots.txt`를 설정했습니다. 이 설정은 접근 제어가 아닙니다.

</details>

## 라이선스

코드의 라이선스는 [MIT](LICENSE)입니다. 재사용하거나 배포할 때는 라이선스의 저작권·허가 고지를 유지하세요. 외부 브랜드·연락처·콘텐츠의 이용 권한은 별도로 확인해야 합니다.
