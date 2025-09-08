import { listContent } from '~/lib/content'; import Link from 'next/link';
export default async function Events({params:{locale}}:{params:{locale:string}}){
  const items = await listContent(locale,'events');
  return (<main className="max-w-5xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-6">Events</h1>
    <ul className="space-y-3">{items.map(e=>(
      <li key={e.slug} className="p-4 rounded-xl border bg-white hover:shadow">
        <Link href={`/${locale}/events/${e.slug}`} className="font-semibold">{e.data.title}</Link>
        <div className="text-sm text-slate-600">{new Date(e.data.date).toLocaleDateString()}</div>
      </li>))}
    </ul>
  </main>);
}
