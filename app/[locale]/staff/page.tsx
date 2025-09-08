import { listContent } from '~/lib/content';

export default async function Staff({params:{locale}}:{params:{locale:string}}){
  const members = await listContent(locale,'staff');
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Staff</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {members.map((m:any)=>(
          <div key={m.slug} className="rounded-xl border p-4 bg-white">
            {m.data.photo && <img src={m.data.photo} alt={m.data.name} className="w-full h-40 object-cover rounded mb-3"/>}
            <h3 className="font-semibold">{m.data.name}</h3>
            <p className="text-sm text-slate-600">{m.data.designation}</p>
            {m.data.phone && <p className="text-sm text-slate-600">📞 {m.data.phone}</p>}
            {m.data.email && <p className="text-sm text-slate-600">✉️ {m.data.email}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
