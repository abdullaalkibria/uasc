'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function LanguageSwitcher({ locale }: { locale: string }){
  const pathname = usePathname() || `/${locale}`;
  const other = locale === 'en' ? 'bn' : 'en';
  const newPath = pathname.replace(`/${locale}`, `/${other}`);
  return <Link href={newPath} className="text-sm px-3 py-1 rounded-full border hover:bg-slate-100">{other.toUpperCase()}</Link>;
}
