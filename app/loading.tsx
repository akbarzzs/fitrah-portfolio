export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/90 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div role="status" aria-label="Loading" className="w-9 h-9 border-[3px] border-slate-200 border-t-blue-700 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}