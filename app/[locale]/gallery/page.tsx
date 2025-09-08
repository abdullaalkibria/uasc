import { listContent } from '~/lib/content';

export default async function Gallery({params:{locale}}:{params:{locale:string}}){
  const albums = await listContent(locale,'gallery');
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {albums.map((a:any)=> (
          <div key={a.slug} className="rounded-xl border p-4 bg-white">
            <h3 className="font-semibold mb-2">{a.data.title}</h3>
            <div className="grid grid-cols-3 gap-2">
              {(a.data.images || []).slice(0,6).map((src:string, i:number)=>(
                <img key={i} src={src} alt="" className="w-full h-24 object-cover rounded"/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
