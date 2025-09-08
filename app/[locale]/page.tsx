import { LatestNotices } from '~/components/LatestNotices';
import { UpcomingEvents } from '~/components/UpcomingEvents';

export default async function Home({params:{locale}}:{params:{locale:string}}){
  return (
    <main>
      <section className="bg-gradient-to-b from-brand/10 to-transparent">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">United Adarsha School & College, Marishya</h1>
          <p className="mt-3 text-slate-700">Inspiring excellence in education and character</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <LatestNotices locale={locale} />
        <UpcomingEvents locale={locale} />
      </section>
    </main>
  );
}
