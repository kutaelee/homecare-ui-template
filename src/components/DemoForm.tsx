'use client';

import { useState } from 'react';
import { CheckCircle2, Info, SendHorizonal } from 'lucide-react';
import { services } from '@/data/demo';

type Mode = 'inquiry' | 'reservation' | 'qna' | 'login' | 'signup' | 'payment';

const fields: {
  [K in Mode]: Array<{
    label: string;
    name: string;
    kind?: 'select' | 'textarea' | 'date' | 'time' | 'email' | 'password';
    optional?: boolean;
    placeholder?: string;
  }>;
} = {
  inquiry: [
    { label: '고객명', name: 'name', placeholder: '홍길동' },
    { label: '연락처', name: 'contact', placeholder: '000-0000-0000' },
    { label: '희망 시공 서비스', name: 'service', kind: 'select' },
    { label: '시공 희망 지역', name: 'area', placeholder: '부산 해운대구 / 울산 남구 등' },
    { label: '희망 시공 일정', name: 'date', kind: 'date', optional: true },
    { label: '상세 요청사항', name: 'details', kind: 'textarea', placeholder: '작업 희망 부위, 현재 싱크대 상태 및 특이사항을 적어주세요.' },
  ],
  reservation: [
    { label: '고객명', name: 'name', placeholder: '홍길동' },
    { label: '연락처', name: 'contact', placeholder: '000-0000-0000' },
    { label: '실측 서비스 항목', name: 'service', kind: 'select' },
    { label: '방문 희망 날짜', name: 'date', kind: 'date' },
    { label: '선호 시간대', name: 'time', kind: 'time' },
    { label: '주소 및 참고사항', name: 'details', kind: 'textarea', optional: true, placeholder: '상세 주소와 방문 시 유의사항을 적어주세요.' },
  ],
  qna: [
    { label: '작성자 닉네임', name: 'name', placeholder: '작성자' },
    { label: '질문 제목', name: 'title', placeholder: '예: 인조대리석 상판 크랙 보수 비용 문의드립니다' },
    { label: '관련 서비스', name: 'service', kind: 'select' },
    { label: '질문 내용', name: 'details', kind: 'textarea', placeholder: '궁금하신 내용을 구체적으로 작성해 주시면 답변드립니다.' },
  ],
  login: [
    { label: '이메일 계정', name: 'email', kind: 'email', placeholder: 'admin@example.com' },
    { label: '비밀번호', name: 'password', kind: 'password', placeholder: '••••••••' },
  ],
  signup: [
    { label: '이름/상호', name: 'name', placeholder: '가상 고객' },
    { label: '이메일', name: 'email', kind: 'email', placeholder: 'user@example.com' },
    { label: '비밀번호 설정', name: 'password', kind: 'password', placeholder: '••••••••' },
  ],
  payment: [
    { label: '시공/예약 번호', name: 'reservation', placeholder: 'RES-202610-01' },
    { label: '입금자명', name: 'name', placeholder: '홍길동' },
    { label: '결제/입금 금액', name: 'amount', placeholder: '350,000' },
  ],
};

/**
 * 💡 개발자 안내:
 * 실제 백엔드 연동(API / Database / Email / Kakao) 시,
 * form의 onSubmit 핸들러 내부에서 fetch('/api/submit', { method: 'POST', body: ... })
 * 또는 Next.js Server Action으로 즉시 교체하여 사용하실 수 있습니다.
 */
export default function DemoForm({ mode }: { mode: Mode }) {
  const [done, setDone] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <div className="rounded-3xl border border-brand-200 bg-white p-6 shadow-xl md:p-10">
      <div className="mb-8 flex gap-3.5 rounded-2xl border border-gold-200 bg-gold-50 p-4 text-xs leading-relaxed text-brand-800">
        <Info className="mt-0.5 size-5 shrink-0 text-gold-600" />
        <span>
          <b>클린하우스 UI 컴포넌트 안내</b>
          <br />
          화면 시연용 양식입니다. 실제 운영 서비스로 전환 시 개발자 주석에 따라 API 또는 백엔드
          엔드포인트로 즉시 교체할 수 있습니다.
        </span>
      </div>

      {done ? (
        <div aria-live="polite" className="py-12 text-center space-y-4">
          <CheckCircle2 className="mx-auto size-14 text-gold-500 animate-bounce" />
          <h2 className="text-2xl font-bold text-brand-900">시연 접수가 완료되었습니다</h2>
          <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-brand-600">
            제출 동작을 정상적으로 시뮬레이션했습니다.
            추후 실제 서버 연동 코드를 연결하면 실제 알림톡 및 데이터베이스로 데이터가 저장됩니다.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setDone(false);
                setAgree(false);
              }}
              className="rounded-full bg-brand-900 px-7 py-3.5 text-xs font-bold text-white shadow hover:bg-gold-500 transition"
            >
              입력 양식 다시 보기
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // 💡 여기서 실제 API 전송 (예: fetch('/api/...')) 로 교체 가능
            setDone(true);
          }}
          className="space-y-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields[mode].map((f) => (
              <label
                key={f.name}
                className={`block ${f.kind === 'textarea' ? 'sm:col-span-2' : ''}`}
              >
                <span className="mb-2 block text-xs font-bold text-brand-900">
                  {f.label}
                  {f.optional && <span className="ml-1 text-brand-400 font-normal">(선택)</span>}
                </span>

                {f.kind === 'select' ? (
                  <select
                    required
                    className="h-12 w-full rounded-2xl border border-brand-200 bg-brand-50/50 px-4 text-xs sm:text-sm text-brand-900 focus:border-gold-500 focus:bg-white transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      시공 항목 선택
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                ) : f.kind === 'textarea' ? (
                  <textarea
                    required={!f.optional}
                    rows={4}
                    className="w-full rounded-2xl border border-brand-200 bg-brand-50/50 p-4 text-xs sm:text-sm text-brand-900 focus:border-gold-500 focus:bg-white transition resize-none"
                    placeholder={f.placeholder || '내용을 입력하세요.'}
                  />
                ) : (
                  <input
                    required={!f.optional}
                    type={f.kind || 'text'}
                    autoComplete="off"
                    className="h-12 w-full rounded-2xl border border-brand-200 bg-brand-50/50 px-4 text-xs sm:text-sm text-brand-900 focus:border-gold-500 focus:bg-white transition"
                    placeholder={f.placeholder || '값을 입력하세요'}
                  />
                )}
              </label>
            ))}
          </div>

          <label className="flex items-center gap-3 rounded-2xl bg-brand-50 p-4 text-xs text-brand-700 border border-brand-200/60 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="size-4 accent-gold-500"
            />
            <span>
              개인정보 수집 및 상담 목적 이용에 동의하며, 가상 템플릿 시연 양식임을 확인합니다.
            </span>
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 py-4 text-sm font-bold text-white shadow-xl hover:bg-gold-500 active:scale-[0.99] transition"
          >
            <SendHorizonal className="size-4" />
            <span>신청 내용 접수하기</span>
          </button>
        </form>
      )}
    </div>
  );
}
