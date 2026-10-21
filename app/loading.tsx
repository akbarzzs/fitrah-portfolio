export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner elegan */}
        <div className="w-10 h-10 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium animate-pulse">Menyiapkan halaman...</p>
      </div>
    </div>
  );
}