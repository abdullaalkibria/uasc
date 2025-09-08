import Link from 'next/link'; import { listContent } from '~/lib/content';
export async function LatestNotices({locale}:{locale:string}){
  const items = (await listContent(locale,'notices')).slice(0,5);
  return (<div className="rounded-2xl border p-6 bg-white">
    <h2 className="font-semibold text-lg mb-4">Latest Notices</h2>
    <ul className="space-y-2">{items.map(i=>(
      <li key={i.slug}><Link href={`/${locale}/notices/${i.slug}`} className="hover:underline">{i.data.title}</Link>
      <div className="text-xs text-slate-500">{new Date(i.data.date).toLocaleDateString()}</div></li>))}
    </ul>
  </div>);
}
