/** Entirely fictional admin records. Never connect to real users, storage or payment systems. */
export type AdminService={id:string;title:string;problem:string;outcome:string};
export type AdminCase={id:string;location:string;title:string;service:string;date:string;status:'draft'|'published';summary:string};
export type AdminFaq={id:string;category:string;q:string;a:string};
export type AdminQna={id:string;service:string;author:string;title:string;question:string;answer:string;private:boolean};
export type AdminInquiry={id:string;customer:string;contact:string;service:string;area:string;date:string;details:string;status:string};
export type AdminReservation={id:string;customer:string;contact:string;service:string;area:string;date:string;time:string;status:string};
export type AdminAsset={id:string;name:string;kind:string;size:string;title:string;approved:boolean};
export const adminServices:AdminService[]=[
 {id:'grout',title:'욕실·타일 케어',problem:'타일 마감과 표면 상태가 궁금하신가요?',outcome:'상세 진행 단계를 소개하는 샘플입니다.'},
 {id:'aircon-cleaning',title:'에어컨 관리',problem:'계절 가전의 관리 방법이 궁금하신가요?',outcome:'서비스 소개 화면 디자인 예시입니다.'},
 {id:'washer-cleaning',title:'세탁기 관리',problem:'가전 내부 관리 순서를 확인하고 싶으신가요?',outcome:'실제 성능을 주장하지 않는 예시입니다.'},
 {id:'fabric-care',title:'패브릭 케어',problem:'소재별 관리 정보가 필요하신가요?',outcome:'패브릭 가구 서비스의 샘플 콘텐츠입니다.'}
];
export const adminCases:AdminCase[]=[
 {id:'CASE-01',location:'가상 지역 A',title:'욕실 관리 예시',service:'욕실·타일 케어',date:'2026-10-05',status:'published',summary:'비교 전후 화면을 보여주는 디자인 예시'},
 {id:'CASE-02',location:'가상 지역 B',title:'가전 점검 화면 예시',service:'에어컨 관리',date:'2026-10-07',status:'draft',summary:'점검 과정 정보 카드 예시'},
 {id:'CASE-03',location:'가상 지역 C',title:'패브릭 관리 예시',service:'패브릭 케어',date:'2026-10-09',status:'published',summary:'사례 갤러리 시연 데이터'}
];
export const adminFaqs:AdminFaq[]=[
 {id:'FAQ-01',category:'서비스',q:'어떤 서비스를 선택하면 되나요?',a:'서비스별 범위를 비교할 수 있는 질문 예시입니다.'},
 {id:'FAQ-02',category:'예약',q:'희망 일정이 곧 확정되나요?',a:'이 프로젝트는 예약 시스템을 제공하지 않습니다.'},
 {id:'FAQ-03',category:'준비',q:'작업 전 무엇을 준비하나요?',a:'서비스별 안내 문구를 넣는 영역입니다.'}
];
export const adminInquiries:AdminInquiry[]=[
 {id:'INQ-001',customer:'샘플 고객 A',contact:'000-0000-0000 (예시)',service:'욕실 케어',area:'가상 지역 A',date:'2026-10-09',details:'작업 범위 문의',status:'접수'},
 {id:'INQ-002',customer:'샘플 고객 B',contact:'000-0000-0000 (예시)',service:'에어컨',area:'가상 지역 B',date:'2026-10-11',details:'사전 준비사항 문의',status:'확인중'},
 {id:'INQ-003',customer:'샘플 고객 C',contact:'000-0000-0000 (예시)',service:'패브릭',area:'가상 지역 C',date:'2026-10-12',details:'관리 단계 문의',status:'답변완료'}
];
export const adminReservations:AdminReservation[]=[
 {id:'RES-001',customer:'샘플 예약 A',contact:'000-0000-0000 (예시)',service:'세탁기',area:'가상 지역 A',date:'2026-10-22',time:'오전',status:'접수'},
 {id:'RES-002',customer:'샘플 예약 B',contact:'000-0000-0000 (예시)',service:'욕실',area:'가상 지역 C',date:'2026-10-23',time:'오후',status:'확인중'},
 {id:'RES-003',customer:'샘플 예약 C',contact:'000-0000-0000 (예시)',service:'에어컨',area:'가상 지역 B',date:'2026-10-25',time:'오후',status:'예약확정'}
];
export const adminQna:AdminQna[]=[
 {id:'QA-01',service:'서비스',author:'예시 방문자 A',title:'서비스 범위는 어떻게 확인하나요?',question:'서비스에 포함되는 작업 항목을 알고 싶습니다.',answer:'',private:false},
 {id:'QA-02',service:'예약',author:'예시 방문자 B',title:'희망일 조율이 가능한가요?',question:'일정 변경 화면이 궁금합니다.',answer:'상담 후 일정 조율 UI를 보여주는 예시입니다.',private:true}
];
export const adminAssets:AdminAsset[]=[
 {id:'AS-01',name:'home-scene.svg',kind:'SVG · Illustration',size:'1200 × 800',title:'홈 화면 샘플 그래픽',approved:true},
 {id:'AS-02',name:'bath.svg',kind:'SVG · Illustration',size:'640 × 640',title:'욕실 관리 추상 시각 자료',approved:true},
 {id:'AS-03',name:'air.svg',kind:'SVG · Illustration',size:'640 × 640',title:'가전 관리 시각 자료',approved:true},
 {id:'AS-04',name:'fabric.svg',kind:'SVG · Illustration',size:'640 × 640',title:'패브릭 디자인 에셋',approved:false}
];
