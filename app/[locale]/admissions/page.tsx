import { getPage } from '~/lib/content';
export default async function Admissions({params:{locale}}:{params:{locale:string}}){
  const page = await getPage(locale,'admissions');
  return (<main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
    <h1>{page.data.title}</h1>
    <div dangerouslySetInnerHTML={{__html:page.contentHtml}}/>
  </main>);
}
