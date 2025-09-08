import fs from 'node:fs'; import path from 'node:path'; import matter from 'gray-matter';

function mdToHtml(md:string){return md.split('\n').map(p=>`<p>${p}</p>`).join('\n')}

export async function listContent(locale:string, collection:string){
  const dir = path.join(process.cwd(),'content',locale,collection);
  if(!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.md'));
  return files.map(f=>{
    const slug = f.replace(/\.md$/,'');
    const { data } = matter(fs.readFileSync(path.join(dir,f),'utf-8'));
    return { slug, data } as any;
  }).sort((a:any,b:any)=> new Date(b.data.date||0).getTime() - new Date(a.data.date||0).getTime());
}

export async function getContentBySlug(locale:string, collection:string, slug:string){
  const file = path.join(process.cwd(),'content',locale,collection,`${slug}.md`);
  const { content, data } = matter(fs.readFileSync(file,'utf-8'));
  return { contentHtml: mdToHtml(content), data };
}

export async function getPage(locale:string, page:string){
  const file = path.join(process.cwd(),'content',locale,'pages',`${page}.md`);
  const { content, data } = matter(fs.readFileSync(file,'utf-8'));
  return { contentHtml: mdToHtml(content), data };
}
