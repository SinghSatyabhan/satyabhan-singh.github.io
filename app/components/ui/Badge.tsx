interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-[#1E3A8A] px-4 py-2 text-sm font-medium border border-blue-100">
      {children}
    </span>
  );
}