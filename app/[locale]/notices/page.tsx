import { listContent } from '~/lib/content'; import Link from 'next/link';
export default async function Notices({params:{locale}}:{params:{locale:string}}){
  const items = await listContent(locale,'notices');
  return (<main className="max-w-5xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-6">Notices</h1>
    <ul className="space-y-3">{items.map(n=>(
      <li key={n.slug} className="p-4 rounded-xl border bg-white hover:shadow">
        <Link href={`/${locale}/notices/${n.slug}`} className="font-semibold">{n.data.title}</Link>
        <div className="text-sm text-slate-600">{new Date(n.data.date).toLocaleDateString()}</div>
      </li>))}
    </ul>
  </main>);
}
