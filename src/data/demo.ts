/** Completely fictional UI samples. No copied customer/brand/operational content. */
export const brand = {
  name: '샘플 홈케어',
  slogan: '공간을 위한 섬세한 관리',
  category: 'HOME CARE DESIGN DEMO',
  region: '예시 지역 · 서비스 지역 설정',
  phone: '문의 정보는 등록되어 있지 않습니다',
  address: '샘플 주소 (실제 사업장 아님)',
  schedule: '운영 시간 예시: 월~금 09:00–18:00',
};
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  description: string;
  problem: string;
  steps: string[];
  outcome: string;
  icon: 'grid' | 'air' | 'washer' | 'fabric';
};
export const services: Service[] = [
  {slug:'grout',title:'타일·욕실 케어',shortTitle:'욕실 케어',tag:'SERVICE 01',description:'공간의 마감 상태를 살펴보고 적합한 관리 방법을 안내하는 서비스 예시입니다.',problem:'타일 틈새와 표면 상태가 신경 쓰이시나요?',steps:['현장 상태 확인','관리 범위 안내','작업 과정 설명','사후 관리 방법 전달'],outcome:'관리 항목과 진행 과정을 쉽게 확인할 수 있도록 구성했습니다.',icon:'grid'},
  {slug:'aircon-cleaning',title:'에어컨 관리',shortTitle:'에어컨',tag:'SERVICE 02',description:'생활 가전의 청결 상태를 체계적으로 점검하는 서비스 소개 예시입니다.',problem:'계절이 바뀔 때 가전 관리가 필요하신가요?',steps:['외관 및 주변 확인','관리 범위 안내','부품별 점검 예시','관리 가이드 안내'],outcome:'서비스 소개 UI를 위한 샘플 설명입니다.',icon:'air'},
  {slug:'washer-cleaning',title:'세탁기 관리',shortTitle:'세탁기',tag:'SERVICE 03',description:'가전 관리 서비스의 구성과 안내 방식을 보여주는 예시 콘텐츠입니다.',problem:'자주 사용하는 가전의 관리 순서가 궁금하신가요?',steps:['사용 환경 확인','서비스 옵션 안내','단계별 관리 예시','점검 항목 정리'],outcome:'실제 서비스의 품질 또는 효과를 주장하지 않습니다.',icon:'washer'},
  {slug:'fabric-care',title:'패브릭 케어',shortTitle:'패브릭',tag:'SERVICE 04',description:'매트리스·소파 같은 패브릭 가구를 소개하는 카드 UI 샘플입니다.',problem:'소재별 관리 정보를 한눈에 보고 싶으신가요?',steps:['소재 확인','옵션 비교','관리 방식 안내','주의사항 제공'],outcome:'디자인 시연을 위한 가상 항목입니다.',icon:'fabric'},
];
export type Case = { id: string; title: string; category: string; location: string; summary: string; details: string[]; date: string; before: string; after: string; };
export const cases: Case[] = [
  {id:'sample-01',title:'밝은 욕실 공간의 관리 예시',category:'욕실 케어',location:'가상 지역 A',summary:'개선 전후를 비교하는 카드 구조와 이미지 슬라이더를 확인하는 시연입니다.',details:['현장 정보 입력 자리','작업 과정 텍스트 자리','마무리 점검 내용 자리'],date:'샘플 사례',before:'관리 전 예시',after:'관리 후 예시'},
  {id:'sample-02',title:'생활 가전 점검 화면 예시',category:'에어컨',location:'가상 지역 B',summary:'현장 기록을 카드와 상세 화면으로 연결하는 레이아웃입니다.',details:['점검 항목 1','점검 항목 2','작업 기록 예시'],date:'샘플 사례',before:'점검 전',after:'점검 후'},
  {id:'sample-03',title:'패브릭 관리 갤러리 예시',category:'패브릭',location:'가상 지역 C',summary:'사진, 장소, 요약, 진행 단계가 표시되는 사례 컴포넌트입니다.',details:['사진 영역 예시','주의사항 예시','마무리 안내 예시'],date:'샘플 사례',before:'이전 상태',after:'이후 상태'},
];
export const faqs = [
  {id:'faq-1',category:'서비스',q:'어떤 서비스를 선택하면 되나요?',a:'이 영역에는 서비스별 차이, 상담 절차, 준비사항 등 실제 운영자가 작성한 설명을 넣을 수 있습니다.'},
  {id:'faq-2',category:'예약',q:'일정을 선택하면 바로 확정되나요?',a:'현재 프로젝트는 공개용 UI 데모이며 실제 예약 기능과 외부 시스템 연동이 없습니다.'},
  {id:'faq-3',category:'안내',q:'서비스 진행 과정은 어떻게 표시되나요?',a:'접수, 상담, 방문, 진행, 완료의 단계를 타임라인 컴포넌트로 보여주는 예시입니다.'},
  {id:'faq-4',category:'자료',q:'전후 사진은 실제 작업 사진인가요?',a:'아니요. 모든 비교 이미지는 의미만 보여주는 추상적인 도형과 샘플 그래픽입니다.'},
  {id:'faq-5',category:'기타',q:'문의 입력 내용이 저장되나요?',a:'저장되지 않습니다. 입력한 내용은 서버로 전송하지 않으며 브라우저 화면에서만 예시 메시지를 표시합니다.'},
];
export const journal = [
  {id:1,title:'공간 관리 과정 기록 예시',category:'가이드',description:'실제 블로그가 아닌 콘텐츠 카드 디자인을 위한 안내 문장입니다.',day:'SAMPLE 01'},
  {id:2,title:'도구와 작업 흐름 소개 예시',category:'작업 노트',description:'외부 사이트나 실제 고객 사례로 연결되지 않는 더미 자료입니다.',day:'SAMPLE 02'},
  {id:3,title:'서비스 선택 체크리스트',category:'팁',description:'샘플 사용자에게 정보를 제공하는 카드 UI를 확인해 보세요.',day:'SAMPLE 03'},
];
export const process = [
  {num:'01',title:'서비스 선택',body:'관심 있는 항목을 선택합니다.'},
  {num:'02',title:'문의 작성',body:'폼 구성과 유효성 검사를 확인합니다.'},
  {num:'03',title:'일정 확인',body:'달력과 옵션 입력 방식을 살펴봅니다.'},
  {num:'04',title:'진행 단계',body:'타임라인 형태의 안내 화면입니다.'},
  {num:'05',title:'결과 안내',body:'샘플 자료와 관리 안내를 보여줍니다.'},
];
export const trust = [
  {label:'명확한 작업 단계',description:'프로세스를 예시 단계로 공개합니다.'},
  {label:'선택형 서비스 구성',description:'사용자가 항목을 비교할 수 있습니다.'},
  {label:'전후 비교 UI',description:'샘플 그래픽으로 변화를 설명합니다.'},
  {label:'모바일 중심 동선',description:'작은 화면에서도 탐색할 수 있습니다.'},
];
export const adminSamples: Record<string,{title:string;columns:string[];rows:string[][]}> = {
  services: {title:'서비스 관리',columns:['항목','분류','상태'],rows:[['욕실 케어','SERVICE 01','샘플'],['에어컨 관리','SERVICE 02','샘플'],['패브릭 케어','SERVICE 04','샘플']]},
  cases: {title:'작업 사례 관리',columns:['제목','분류','게시 상태'],rows:[['샘플 작업 사례 A','욕실','데모'],['샘플 작업 사례 B','가전','데모']]},
  faqs: {title:'FAQ 관리',columns:['질문','구분','상태'],rows:[['서비스를 선택하는 방법','서비스','데모'],['예약 절차 안내','예약','데모']]},
  inquiries: {title:'견적 문의 관리',columns:['번호','서비스','상태'],rows:[['DEMO-001','에어컨','예시'],['DEMO-002','욕실','예시']]},
  reservations: {title:'예약 관리',columns:['번호','날짜','상태'],rows:[['DEMO-001','날짜 예시','미연동'],['DEMO-002','날짜 예시','미연동']]},
  qna: {title:'Q&A 관리',columns:['번호','제목','상태'],rows:[['DEMO-001','서비스 관련 질문','예시'],['DEMO-002','방문 일정 문의','예시']]},
  assets: {title:'에셋 관리',columns:['이름','형식','상태'],rows:[['sample-home.svg','SVG','포함'],['sample-bath.svg','SVG','포함']]},
  settings: {title:'운영 설정',columns:['항목','설정값','상태'],rows:[['사이트 이름','샘플 홈케어','읽기 전용'],['문의 채널','미설정','읽기 전용']]},
};
