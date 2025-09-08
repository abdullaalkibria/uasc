import { getContentBySlug } from '~/lib/content';
export default async function Event({params:{locale,slug}}:{params:{locale:string, slug:string}}){
  const item = await getContentBySlug(locale,'events',slug);
  return (<article className="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
    <h1>{item.data.title}</h1>
    <p className="text-sm text-slate-500">{new Date(item.data.date).toLocaleDateString()}</p>
    <div dangerouslySetInnerHTML={{__html:item.contentHtml}}/>
  </article>);
}
