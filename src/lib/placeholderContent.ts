import type { CommercialItem } from "@/components/sections/CommercialList";
import type { CustomWorksItem } from "@/components/sections/CustomWorksGrid";

export const placeholderHero = {
  headline: "여기 뭘 넣어야 좋을지\n계속 고민중입니다",
  subcopy: "관리자 페이지에서 이 문구와 사진을 직접 바꿀 수 있어요.",
  imageUrl: null as string | null,
};

export const placeholderCommercialItems: CommercialItem[] = [
  { id: "1", imageUrl: null, caption: "[웹툰] 비비드 스토링" },
  { id: "2", imageUrl: null, caption: "[Vtuber] 오션 블룸" },
  { id: "3", imageUrl: null, caption: "[Youtuber] 선릿 알프" },
];

export const placeholderCustomWorksItems: CustomWorksItem[] = Array.from(
  { length: 11 },
  (_, index) => ({ id: String(index + 1), imageUrl: null })
);
