'use client';

import { useState, useRef, ChangeEvent } from 'react';
import {
  Camera,
  Upload,
  X,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
  Info,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { brand, services } from '@/data/demo';

export interface PhotoQuotePayload {
  photos: File[];
  serviceSlug: string;
  region: string;
  contact: string;
  notes: string;
}

/**
 * 💡 개발자 커스텀 가이드 (Backend / Webhook 교체 방법):
 * 실제 백엔드 연동이 필요할 때 아래 onSubmitQuote 함수를 자신의 API 엔드포인트
 * (예: Next.js Route Handler `/api/inquiry`, AWS S3 업로드, 카카오 알림톡, 슬랙 웹훅)로
 * 교체하거나 프롭스로 전달받을 수 있도록 설계되었습니다.
 */
async function defaultQuoteApiHandler(payload: PhotoQuotePayload): Promise<{ success: boolean; id?: string }> {
  // 실제 서버 전송 시뮬레이션 (네트워크 딜레이 600ms)
  void payload;
  await new Promise((res) => setTimeout(res, 600));

  // 예:
  // const formData = new FormData();
  // payload.photos.forEach((file) => formData.append('images', file));
  // formData.append('service', payload.serviceSlug);
  // formData.append('region', payload.region);
  // formData.append('contact', payload.contact);
  // formData.append('notes', payload.notes);
  // const res = await fetch('/api/quote', { method: 'POST', body: formData });
  // return res.json();

  return { success: true, id: `QUOTE-${Date.now().toString().slice(-6)}` };
}

export default function QuickPhotoQuoteForm({
  customApiHandler,
  title = '사진 세 장이면 10분 내 견적 안내',
  subtitle = '작업할 곳 사진(가까이 1장, 멀리 1장)과 지역을 보내 주시면 대표가 직접 확인 후 안내해 드립니다.',
}: {
  customApiHandler?: (payload: PhotoQuotePayload) => Promise<{ success: boolean; id?: string }>;
  title?: string;
  subtitle?: string;
}) {
  const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([]);
  const [serviceSlug, setServiceSlug] = useState<string>(services[0].slug);
  const [region, setRegion] = useState<string>('부산');
  const [contact, setContact] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const regions = [
    '부산 전지역',
    '울산광역시',
    '경남 양산시',
    '경남 김해시',
    '경남 창원시',
    '대구광역시',
    '경북 경주시',
    '기타 영남/인근 지역',
  ];

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...newItems].slice(0, 5));
    setErrorMsg(null);
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const copy = [...prev];
      URL.revokeObjectURL(copy[index].preview);
      copy.splice(index, 1);
      return copy;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (photos.length === 0) {
      setErrorMsg('정확한 견적을 위해 최소 1장 이상의 사진을 첨부해 주세요. (가까이 1장, 멀리 1장 권장)');
      return;
    }
    if (!contact.trim()) {
      setErrorMsg('견적 결과를 수신할 연락처를 입력해 주세요.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const handler = customApiHandler || defaultQuoteApiHandler;
      const res = await handler({
        photos: photos.map((p) => p.file),
        serviceSlug,
        region,
        contact,
        notes,
      });

      if (res.success) {
        setSubmittedId(res.id || 'QUOTE-SUCCESS');
      } else {
        setErrorMsg('견적 전송 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } catch {
      setErrorMsg('전송 실패: 네트워크 상태를 확인하시거나 대표 번호로 직접 문자 주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    photos.forEach((p) => URL.revokeObjectURL(p.preview));
    setPhotos([]);
    setContact('');
    setNotes('');
    setSubmittedId(null);
    setErrorMsg(null);
  };

  return (
    <div className="rounded-3xl border border-brand-800 bg-brand-900 p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-brand-700/20 blur-3xl" />

      {/* Header Info */}
      <div className="relative z-10 mb-8 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3.5 py-1 text-xs font-bold text-gold-300 mb-3">
          <Sparkles className="size-3.5 text-gold-400" />
          간편 사진 정찰 견적
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75">
          {subtitle}
        </p>
      </div>

      {submittedId ? (
        <div className="relative z-10 py-12 text-center bg-white/5 rounded-2xl border border-white/10 p-8">
          <CheckCircle2 className="mx-auto mb-4 size-14 text-gold-400 animate-bounce" />
          <h4 className="text-2xl font-bold text-white">사진 견적 제출 시연이 완료되었습니다</h4>
          <p className="mt-2 text-sm text-gold-300 font-semibold">접수 번호: {submittedId}</p>
          <p className="mt-3 text-xs sm:text-sm max-w-lg mx-auto text-white/80 leading-relaxed">
            사진과 입력 정보는 서버로 전송되지 않았습니다.
            실제 견적 접수나 연락은 진행되지 않습니다.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={brand.smsHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-xs font-bold text-white shadow hover:bg-gold-600 transition"
            >
              <MessageSquare className="size-4" />
              문자로 추가 사진 보내기
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 transition"
            >
              새로운 견적 문의 작성
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          {/* Photos Upload Area */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-white mb-2">
              작업할 곳 사진 첨부 <span className="text-gold-400 font-normal">(가까이 1장, 멀리 1장 권장 · 최대 5장)</span>
            </label>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              multiple
              accept="image/*"
              className="hidden"
            />

            {/* Photo Preview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-3">
              {photos.map((item, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/20 bg-black/40 group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.preview}
                    alt={`업로드 미리보기 ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(idx)}
                    className="absolute top-1.5 right-1.5 size-6 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
                    aria-label="사진 삭제"
                  >
                    <X className="size-3.5" />
                  </button>
                  <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
                    사진 0{idx + 1}
                  </span>
                </div>
              ))}

              {photos.length < 5 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-square flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-gold-400 transition-all text-white/70 hover:text-white"
                >
                  <Upload className="size-6 text-gold-400 mb-1.5" />
                  <span className="text-xs font-semibold">사진 추가</span>
                  <span className="text-[10px] text-white/50">{photos.length}/5장</span>
                </button>
              )}
            </div>

            <p className="text-[11px] text-white/60 flex items-center gap-1.5">
              <Camera className="size-3.5 text-gold-400 shrink-0" />
              사진이 선명할수록 방문 전 더욱 정확한 정찰 견적이 가능합니다.
            </p>
          </div>

          {/* Service & Region Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-white mb-2">
                시공 희망 서비스
              </label>
              <select
                value={serviceSlug}
                onChange={(e) => setServiceSlug(e.target.value)}
                className="h-12 w-full rounded-2xl border border-white/15 bg-brand-800/90 px-4 text-xs sm:text-sm text-white focus:border-gold-400"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug} className="bg-brand-900 text-white">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-white mb-2">
                시공 지역 선택
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="h-12 w-full rounded-2xl border border-white/15 bg-brand-800/90 px-4 text-xs sm:text-sm text-white focus:border-gold-400"
              >
                {regions.map((r) => (
                  <option key={r} value={r} className="bg-brand-900 text-white">
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact Input */}
          <div>
            <label className="block text-xs font-bold text-white mb-2">
              답변받으실 연락처 (전화번호)
            </label>
            <input
              type="tel"
              required
              placeholder="예: 000-0000-0000"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="h-12 w-full rounded-2xl border border-white/15 bg-brand-800/90 px-4 text-xs sm:text-sm text-white focus:border-gold-400 placeholder:text-white/40"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-white mb-2">
              요청사항 및 현재 상태 메모 <span className="text-white/50 font-normal">(선택)</span>
            </label>
            <textarea
              rows={3}
              placeholder="예: 싱크대 하부장 누수로 냄새가 나요 / 사각싱크볼 교체도 같이 원해요"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-brand-800/90 p-4 text-xs sm:text-sm text-white focus:border-gold-400 placeholder:text-white/40 resize-none"
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="rounded-xl border border-red-500/40 bg-red-900/30 p-3 text-xs text-red-200 flex items-center gap-2">
              <Info className="size-4 shrink-0 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Trust points */}
          <div className="rounded-2xl bg-white/5 p-4 border border-white/10 text-xs text-white/70 space-y-1.5">
            <p className="flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-gold-400" />
              <span>데모 양식입니다. 실제 개인정보 대신 예시 값을 입력해 주세요.</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-3.5 text-gold-400" />
              <span>사진과 입력 정보는 서버로 전송되지 않으며 실제 상담은 진행되지 않습니다.</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gold-500 py-4 text-sm font-bold text-white shadow-xl hover:bg-gold-600 active:scale-[0.99] transition disabled:opacity-50"
          >
            {submitting ? (
              <span>사진 확인 및 견적 산출 중...</span>
            ) : (
              <>
                <span>사진 견적 신청하기 (무료)</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
