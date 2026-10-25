/**
 * 가상 시연 데이터 (Clean House Kitchen 템플릿)
 * 실제 업체 정보나 고객 개인정보가 없는 공개용 가상 콘텐츠입니다.
 * 사용자는 추후 실제 운영에 필요한 사업자 정보, 연락처, 서비스 목록,
 * API 엔드포인트 등을 이 파일이나 환경 변수로 손쉽게 교체할 수 있습니다.
 */

export const brand = {
  name: 'Clean House 클린하우스',
  enName: 'Clean House',
  krName: '클린하우스',
  slogan: '싱크대 교체·리폼·맞춤가구 전문',
  subSlogan: '전체를 바꾸지 않아도 주방의 가치가 살아납니다',
  category: 'KITCHEN & CUSTOM FURNITURE',
  region: '부산 · 울산 · 양산 · 김해 · 창원 · 대구 · 경주 등 영남 전역 방문 시공',
  phone: '000-0000-0000',
  telHref: '/contact/#demo-contact',
  smsHref: '/inquiry/new/',
  kakaoUrl: '#',
  instagramUrl: '/contact/#demo-contact',
  blogUrl: '#',
  businessNumber: '000-00-00000 (예시)',
  representative: '홍길동 (예시)',
  address: '가상시 예시구 예시로 000 (예시 주소)',
  schedule: '상담 가능 시간: 연중무휴 08:00 – 20:00 (시공 중에는 문자 남겨주시면 확인 후 연락)',
  warranty: '시공 후 1년 무상 품질보증 A/S',
  notice: '사진 없이는 대략적인 금액도 안내드리지 않으니, 가까이 1장·멀리 1장 사진을 꼭 준비해 주세요.',
};

export const stats = [
  { value: '10년 이상', label: '싱크대·맞춤가구 시공 경력' },
  { value: '6,200건+', label: '누적 시공 및 부분 리모델링' },
  { value: '100%', label: '상담·실측·시공 대표 직접 수행' },
  { value: '1년', label: '시공 후 무상 사후 A/S 보증' },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  category: 'sink' | 'furniture' | 'repair' | 'all';
  description: string;
  problem: string;
  steps: string[];
  outcome: string;
  icon: 'countertop' | 'cabinet' | 'furniture' | 'sink' | 'all' | 'repair' | 'grid' | 'air' | 'washer' | 'fabric';
  badge?: string;
};

export const services: Service[] = [
  {
    slug: 'sink-countertop',
    title: '싱크대 상판 교체',
    shortTitle: '상판 교체',
    tag: 'SERVICE 01',
    category: 'sink',
    badge: '인기 1위',
    description: '가장 많이 하는 작업. 보이는 면적이 넓어 색상과 질감만 바꿔도 주방 전체를 리모델링한 효과를 냅니다.',
    problem: '누렇게 변색된 상판, 갈라진 대리석 틈새, 찌든 때와 스크래치가 고민이신가요?',
    steps: ['사진 확인 후 사전 가견적 안내', '대표 방문 정밀 실측 및 색상표 확인', '공장 맞춤 재단 및 싱크볼 타공', '무먼지 집진기 샌딩 및 완벽 안착'],
    outcome: '국산 정품 인조대리석 사용, 사각싱크볼 무료 타공, 시공 후 1년 무상 A/S',
    icon: 'countertop',
  },
  {
    slug: 'sink-cabinet',
    title: '하부장·문짝 교체',
    shortTitle: '하부장 교체',
    tag: 'SERVICE 02',
    category: 'sink',
    badge: '비용 50% 절감',
    description: '누수로 썩고 주저앉은 하부장 밑판과 곰팡이 골조를 철거하고 튼튼한 친환경 합판으로 새로 맞춥니다.',
    problem: '싱크대 밑에서 악취가 나거나 누수로 바닥판이 주저앉았나요?',
    steps: ['누수 원인 및 곰팡이 상태 점검', '상부장과 타일을 살린 안전 철거', '방수 E0 친환경 자재 맞춤 제작', '고급 댐퍼 경첩 체결 및 수평 조절'],
    outcome: '상부장은 그대로 살려 비용은 대폭 낮추고 주방 하부는 새것처럼 튼튼해집니다.',
    icon: 'cabinet',
  },
  {
    slug: 'custom-furniture',
    title: '맞춤가구 (냉장고장·홈바·펜트리)',
    shortTitle: '맞춤가구',
    tag: 'SERVICE 03',
    category: 'furniture',
    badge: '공간 최적화',
    description: '비스포크·오브제 냉장고 핏, 홈카페 홈바장, 펜트리장, 붙박이장, 신발장을 공간 규격에 정확히 맞춤 제작합니다.',
    problem: '신축 입주 가전 크기가 안 맞거나 죽는 공간(데드스페이스)이 아쉬우신가요?',
    steps: ['공간 실측 및 보유 가전 규격 확인', '1:1 맞춤 구조 설계 및 도면 협의', '자체 공장 E0 친환경 보드 가공', '단차 없는 일체형 빌트인 시공'],
    outcome: '가전과 가구가 하나처럼 딱 맞아떨어지는 품격 있는 수납 공간 완성',
    icon: 'furniture',
  },
  {
    slug: 'sink-repair',
    title: '사각싱크볼 & 주방후드 교체',
    shortTitle: '싱크볼·후드',
    tag: 'SERVICE 04',
    category: 'repair',
    badge: '원스톱 업그레이드',
    description: '좁고 낡은 원형 싱크볼을 와이드 프리미엄 사각싱크볼로, 기름때 찌든 후드를 고풍량 저소음 후드로 교체합니다.',
    problem: '싱크볼 틈새 누수, 악취 나는 배수구, 모터 소리만 크고 환기 안 되는 후드가 불편하신가요?',
    steps: ['기존 기기 안전 탈거 및 배수구 점검', '상판 규격 정밀 가공 및 타공', '백조 깜포르테 사각볼 & 거위목 수전 결합', '악취 차단 방수 트랩 체결 및 흡입 테스트'],
    outcome: '물 튐이 적고 청소가 쉬운 프리미엄 사각 싱크볼과 쾌적한 주방 환경',
    icon: 'sink',
  },
  {
    slug: 'kitchen-all',
    title: '싱크대 전체 교체 & 리폼',
    shortTitle: '싱크대 전체',
    tag: 'SERVICE 05',
    category: 'all',
    badge: '공장 직영 단가',
    description: '상부장, 하부장, 상판, 수전, 타일까지 노후된 주방 전체를 대표가 원스톱으로 새롭게 만듭니다.',
    problem: '노후 주방 전체를 교체하고 싶지만 인테리어 업체의 높은 마진이 부담스러우신가요?',
    steps: ['라이프스타일 맞춤 구조 상담', '철거 및 배관 점검', '친환경 가구 및 대리석 시공', '정밀 마감 및 1년 A/S 보증서 발급'],
    outcome: '중간 유통 거품을 뺀 공장 직영 단가로 시공하는 고품격 주방',
    icon: 'all',
  },
  {
    slug: 'repair-etc',
    title: '상판 크랙 보수 & 기타 집수리',
    shortTitle: '크랙보수·집수리',
    tag: 'SERVICE 06',
    category: 'repair',
    badge: '정밀 복원',
    description: '갈라진 인조대리석 크랙 접합 보수, 연마 광택, 상가 세면대 설치, 아일랜드 식탁 축소 등 부분 수리.',
    problem: '대리석 상판에 금이 가서 물이 새거나, 작은 집수리라 부를 곳이 마땅치 않으신가요?',
    steps: ['갈라짐 깊이 및 하부 보강 확인', '대리석 전용 접착제 주입 및 압착', '단계별 샌딩 연마로 이음매 제거', '표면 보호 코팅 및 수평 보강'],
    outcome: '이음매 흔적 없이 매끈하게 복원되어 교체 비용을 아낄 수 있습니다.',
    icon: 'repair',
  },
];

export type Case = {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  details: string[];
  date: string;
  before: string;
  after: string;
};

export const cases: Case[] = [
  {
    id: 'case-dongrae',
    title: '동래구 싱크대 하부장 교체 누수로 망가진 주방 부분 리모델링',
    category: '하부장 교체',
    location: '부산 동래구',
    summary: '싱크대 누수로 바닥판이 주저앉고 곰팡이가 심했던 현장. 상부장과 상판은 그대로 보존하고 하부장만 당일 교체했습니다.',
    details: ['상부장 손상 없이 하부장만 깔끔하게 분리 철거', 'E0 친환경 방수 합판 맞춤 제작 및 수평 정밀 조정', '악취 차단 방수 배수구 및 고급 댐퍼 경첩 체결'],
    date: '2026.10',
    before: '누수로 바닥판이 주저앉고 악취가 나던 노후 하부장',
    after: '견고한 E0 방수 자재로 재시공된 무광 화이트 하부장',
  },
  {
    id: 'case-saha',
    title: '사하구 씽크대 상판 교체 다대동 현대아파트 처짐 수리',
    category: '상판 교체',
    location: '부산 사하구 다대동',
    summary: '갈라지고 기름때에 찌든 인조대리석 상판을 걷어내고, 내구성이 뛰어난 국산 화이트 상판과 사각볼로 전면 교체했습니다.',
    details: ['노후 상판 철거 및 하부 보강목 수평 보강', '국산 12T 인조대리석 정밀 재단 및 이음매 무먼지 샌딩', '백조 사각싱크볼 및 거위목 폭포수전 일체형 장착'],
    date: '2026.10',
    before: '변색되고 스크래치와 처짐이 심했던 기존 누런 상판',
    after: '오로라 광택의 산뜻한 국산 인조대리석 상판 & 사각볼',
  },
  {
    id: 'case-gimhae',
    title: '김해 두산위브더제니스 냉장고장 홈바장 맞춤 리모델링',
    category: '맞춤가구',
    location: '경남 김해시',
    summary: '기존 규격이 맞지 않던 냉장고 수납장을 철거하고, 비스포크 핏 수납장과 우드 템바보드 홈카페 홈바장을 제작했습니다.',
    details: ['오브제 4도어 냉장고 규격에 맞춘 틈새 제로 설계', '중앙 홈바 공간 LED 간접 조명 및 매립 콘센트 설치', '상부 플랩 도어 쇼바 장착으로 부드러운 개폐'],
    date: '2026.09',
    before: '남는 공간이 많고 어수선했던 기존 빌트인 장',
    after: '가전과 일체감을 주는 럭셔리 홈바형 맞춤 냉장고장',
  },
  {
    id: 'case-yangsan',
    title: '양산 싱크대 상판 크랙 보수 갈라진 인조대리석 부분 복원',
    category: '크랙 보수',
    location: '경남 양산시',
    summary: '가스레인지 옆 뜨거운 냄비로 인해 길게 갈라진 상판 크랙을 전용 수지와 인조대리석 조각으로 흔적 없이 접합했습니다.',
    details: ['크랙 부위 V홈 가공 및 이물질 완벽 제거', '동일 색상 인조대리석 편 주입 및 고강도 화학 접합', '3단계 다이아몬드 패드 연마 광택으로 평탄화 마감'],
    date: '2026.09',
    before: '가스대 옆으로 30cm 가량 길게 갈라져 틈새 누수 발생',
    after: '육안으로 이음매를 찾기 어려울 만큼 매끈하게 복원',
  },
];

export const reels = [
  {
    id: 'reel-01',
    title: '상판 교체 전 딱 3가지만 보세요',
    subtitle: '실측하러 가면 무엇부터 재는지 1분 요약',
    duration: '0:58',
    category: '실측 가이드',
    views: '1.2만',
    instagramUrl: '/contact/#demo-contact',
    thumbnailBg: 'from-amber-900 to-stone-900',
  },
  {
    id: 'reel-02',
    title: '상판 갈라졌다고 싱크대 전부 바꾸지 마세요',
    subtitle: '인조대리석 크랙 접합 보수 시공 과정',
    duration: '1:12',
    category: '크랙 복원',
    views: '2.5만',
    instagramUrl: '/contact/#demo-contact',
    thumbnailBg: 'from-stone-800 to-amber-950',
  },
  {
    id: 'reel-03',
    title: '누수로 썩은 싱크대 하부장 살려내기',
    subtitle: '상부장·타일 손상 없이 하부장만 당일 교체',
    duration: '0:45',
    category: '하부장 리폼',
    views: '3.1만',
    instagramUrl: '/contact/#demo-contact',
    thumbnailBg: 'from-zinc-900 to-stone-800',
  },
  {
    id: 'reel-04',
    title: '와이드 백조 깜포르테 사각싱크볼 타공 현장',
    subtitle: '원형 볼에서 프리미엄 사각볼로 바꾸는 현장',
    duration: '1:05',
    category: '싱크볼 교체',
    views: '1.8만',
    instagramUrl: '/contact/#demo-contact',
    thumbnailBg: 'from-amber-950 to-stone-900',
  },
];

export const serviceAreas = [
  { name: '부산 전지역', count: '227건', note: '해운대·수영·동래·강서·사하·남구 등' },
  { name: '양산시', count: '119건', note: '물금·동면·북정·덕계·평산' },
  { name: '울산광역시', count: '113건', note: '남구·중구·북구·울주군' },
  { name: '김해시', count: '40건', note: '율하·장유·내외동·진영' },
  { name: '창원특례시', count: '28건', note: '의창·성산·마산·진해' },
  { name: '대구광역시', count: '29건', note: '수성구·달서구·중구·동구' },
  { name: '경주시', count: '18건', note: '황성·동천·용강·안강' },
  { name: '밀양·포항·기타', count: '15건', note: '영남권 사전 협의 시공 가능' },
];

export const faqs = [
  {
    id: 'faq-1',
    category: '견적 문의',
    q: '견적은 어떻게 받나요?',
    a: '작업할 곳 사진(가까이서 1장, 전체 모습 멀리서 1장), 작업 희망 지역, 원하시는 구성을 문자로 보내 주시면 확인 후 신속하게 사전 안내해 드립니다. 사진 없이는 대략적인 금액도 말씀드리지 않으며, 정직하고 정확한 정찰 견적을 지향합니다.',
  },
  {
    id: 'faq-2',
    category: '시공 환경',
    q: '현재 살고 있는 집인데 시공 시 먼지가 많이 나나요?',
    a: '현장 작업 시 무먼지 전용 집진기 샌딩 장비와 비닐 보양 커버링 작업을 철저히 진행합니다. 거주 중이신 상태에서도 일상생활에 지장 없도록 분진을 95% 이상 흡입하며, 작업 완료 후 깔끔하게 정리해 드립니다.',
  },
  {
    id: 'faq-3',
    category: '부분 시공',
    q: '상판만, 또는 하부장만 부분 교체해도 어색하지 않나요?',
    a: '네, 실제 문의 주시는 고객님의 80% 이상이 부분 교체 고객님입니다. 멀쩡한 상부장이나 타일을 굳이 뜯지 않고 손상된 상판이나 하부장만 교체해도 주방 전체를 새것처럼 바꾼 효과를 보실 수 있으며 비용도 절반 이상 절약됩니다.',
  },
  {
    id: 'faq-4',
    category: 'A/S 보증',
    q: '시공 후 A/S는 어떻게 진행되나요?',
    a: '클린하우스는 시공 후 1년 동안 무상 품질보증 A/S를 제공합니다. 시공을 진행한 대표가 직접 방문하여 점검하므로 책임감 있고 빠른 사후 처리를 약속드립니다.',
  },
  {
    id: 'faq-5',
    category: '상담 안내',
    q: '전화를 걸었는데 바로 안 받으실 때는 어떻게 하나요?',
    a: '현장에서 소음이 발생하는 재단기 작업이나 정밀한 대리석 안착 작업 중일 때는 안전상 즉시 전화를 받기 어렵습니다. 사진과 지역, 요청 내용을 문자로 남겨 주시면 작업을 마치는 대로 가장 먼저 연락드리겠습니다.',
  },
];

export const process = [
  {
    num: '01',
    title: '사진 전송 및 접수',
    body: '작업할 주방 부위(가까이 1장, 멀리 1장)와 지역, 원하시는 구성을 전송합니다.',
  },
  {
    num: '02',
    title: '10분 내 견적 상담',
    body: '사진 확인 후 추가 비용 없는 정직한 예상 견적과 가능 일정을 안내드립니다.',
  },
  {
    num: '03',
    title: '대표 방문 실측',
    body: '대표가 직접 현장을 찾아 레이저로 정밀 실측하고 자재 샘플 색상을 맞춥니다.',
  },
  {
    num: '04',
    title: '당일 시공 & 1년 A/S',
    body: '공장 맞춤 제작 후 현장에서 당일 깔끔 시공 완료하며, 1년 무상 A/S를 보증합니다.',
  },
];

export const trust = [
  {
    label: '상담부터 시공까지 대표 직접',
    description: '외주나 하청 기술자에게 넘기지 않고, 전화 상담부터 실측, 현장 시공을 대표가 직접 처음부터 끝까지 책임집니다.',
  },
  {
    label: '국산 정품 인조대리석 & E0 자재',
    description: '중국산 저가 대리석을 배제하고 내구성과 열탕성이 검증된 국산 정품 자재와 친환경 E0 합판만을 사용합니다.',
  },
  {
    label: '사진 기반 투명한 정찰 견적',
    description: '현장 방문 전 사진 세 장으로 불필요한 거품과 현장 추가 비용 없는 정직한 견적을 투명하게 공개합니다.',
  },
  {
    label: '시공 후 1년 무상 A/S 보증',
    description: '시공 완료 후에도 1년 동안 무상 A/S를 보증하며, 작은 틈새 조정 하나까지 책임지고 사후 관리해 드립니다.',
  },
];

export const journal = [
  {
    id: 1,
    title: '인조대리석 상판 교체 시 국산과 중국산 구분하는 핵심 방법',
    category: '자재 가이드',
    description: '겉모습은 비슷해 보여도 열탕 테스트와 크랙 저항력에서 큰 차이가 나는 인조대리석 선택법.',
    day: 'TIP 01',
  },
  {
    id: 2,
    title: '싱크대 누수 발생 시 하부장 교체 타이밍과 자재 선택',
    category: '시공 꿀팁',
    description: '곰팡이 번식과 악취를 막고 상부장은 살리는 합리적인 부분 리모델링 프로세스.',
    day: 'TIP 02',
  },
  {
    id: 3,
    title: '비스포크·오브제 냉장고장 맞춤 리폼 체크리스트',
    category: '맞춤가구',
    description: '가전 환기 틈새와 라인 일체감을 동시에 잡는 도면 실측 노하우.',
    day: 'TIP 03',
  },
];

export const adminSamples: Record<string, { title: string; columns: string[]; rows: string[][] }> = {
  services: {
    title: '시공 서비스 관리',
    columns: ['서비스명', '카테고리', '상태'],
    rows: [
      ['싱크대 상판 교체', '싱크대 리폼', '정상 운영'],
      ['하부장·문짝 교체', '싱크대 리폼', '정상 운영'],
      ['맞춤가구(냉장고장·홈바)', '맞춤가구', '정상 운영'],
      ['사각싱크볼 & 주방후드', '부품 교체', '정상 운영'],
      ['상판 크랙 보수', '부분 수리', '정상 운영'],
    ],
  },
  cases: {
    title: '시공 사례 포트폴리오 관리',
    columns: ['제목', '지역', '공정 상태'],
    rows: [
      ['동래구 하부장 교체 현장', '부산 동래구', '발행 완료'],
      ['사하구 다대동 현대 상판 시공', '부산 사하구', '발행 완료'],
      ['김해 두산위브 냉장고장 홈바', '경남 김해시', '발행 완료'],
      ['양산 상판 크랙 접합 보수', '경남 양산시', '발행 완료'],
    ],
  },
  faqs: {
    title: '자주 묻는 질문 관리',
    columns: ['질문', '분류', '노출 상태'],
    rows: [
      ['견적은 어떻게 받나요?', '견적 안내', '메인 노출'],
      ['거주 중 먼지가 많이 나나요?', '시공 환경', '메인 노출'],
      ['상판만 부분 교체가 가능한가요?', '시공 범위', '메인 노출'],
      ['시공 후 A/S 보증 기간은?', '사후 관리', '메인 노출'],
    ],
  },
  inquiries: {
    title: '사진 견적 신청 접수함',
    columns: ['접수번호', '시공 부위', '지역', '상태'],
    rows: [
      ['REQ-202610-01', '상판 교체 + 사각볼', '부산 해운대구', '상담 완료'],
      ['REQ-202610-02', '하부장 썩음 교체', '울산 남구', '실측 예정'],
      ['REQ-202610-03', '냉장고장 홈바 제작', '경남 김해시', '견적 안내'],
    ],
  },
  reservations: {
    title: '방문 실측 및 시공 일정',
    columns: ['예약 번호', '고객 희망일', '시공 항목', '상태'],
    rows: [
      ['RES-1025', '2026-10-28 10:00', '상판 당일 시공', '일정 확정'],
      ['RES-1026', '2026-10-29 14:00', '냉장고장 실측', '방문 예정'],
    ],
  },
  qna: {
    title: '고객 질문과 답변',
    columns: ['번호', '제목', '작성자', '답변 상태'],
    rows: [
      ['Q-101', '부산 기장군도 출장 실측 가능한가요?', '가상 고객 A', '답변 완료'],
      ['Q-102', '상판 갈라짐 사진 보냈습니다', '가상 고객 B', '확인 중'],
    ],
  },
  assets: {
    title: '카탈로그 및 자재 에셋',
    columns: ['에셋명', '구분', '상태'],
    rows: [
      ['countertop.svg', '벡터 일러스트', '활성'],
      ['cabinet.svg', '벡터 일러스트', '활성'],
      ['furniture.svg', '벡터 일러스트', '활성'],
      ['sink.svg', '벡터 일러스트', '활성'],
    ],
  },
  settings: {
    title: '운영 및 알림톡 연동 설정',
    columns: ['항목', '설정값', '연동 방식'],
    rows: [
      ['대표 전화번호', '000-0000-0000', '다이렉트 통화 연결'],
      ['SMS 사진 수신', '000-0000-0000', '문자 자동 팝업'],
      ['견적 Webhook 엔드포인트', '/api/quote (Mock)', '백엔드/알림톡 교체 가능'],
      ['A/S 보증 규정', '시공 후 1년 무상', '품질 보증서 등록'],
    ],
  },
};
