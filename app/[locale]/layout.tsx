import '../globals.css';
import Link from 'next/link';
import { getMessages } from 'next-intl/server';
import { LanguageSwitcher } from '~/components/LanguageSwitcher';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'bn' }
  ];
}

export default async function RootLayout({children, params}:{children:React.ReactNode, params:{locale:string}}){
  await getMessages();
  return (
    <html lang={params.locale}>
      <body className="min-h-screen flex flex-col">
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href={`/${params.locale}`} className="font-bold text-xl text-brand">UASC</Link>
            <nav className="hidden md:flex gap-5 text-sm">
              <Link href={`/${params.locale}`}>Home</Link>
              <Link href={`/${params.locale}/notices`}>Notices</Link>
              <Link href={`/${params.locale}/events`}>Events</Link>
              <Link href={`/${params.locale}/gallery`}>Gallery</Link>
              <Link href={`/${params.locale}/staff`}>Staff</Link>
              <Link href={`/${params.locale}/admissions`}>Admissions</Link>
              <Link href={`/${params.locale}/academics`}>Academics</Link>
              <Link href={`/${params.locale}/contact`}>Contact</Link>
            </nav>
            <LanguageSwitcher locale={params.locale} />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t text-sm text-slate-600">
          <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between">
            <div>© {new Date().getFullYear()} UASC</div>
            <div>Made with Next.js + Decap CMS</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
