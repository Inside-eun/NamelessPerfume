export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-serif text-xl">관리자 대시보드</h1>
      <p className="text-sm text-muted">
        로그인되었습니다. DB 연결이 완료되면 이 자리에 Hero / Commercial /
        Custom Works 편집 기능이 추가됩니다.
      </p>
    </div>
  );
}
