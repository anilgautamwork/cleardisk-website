// Ping IndexNow (Bing, Yandex, Seznam, Naver) with every sitemap URL after a deploy.
// Google does not use IndexNow; it discovers pages through the sitemap and links.
const key = 'ce6803065e670bfde569b835ec5dad98';
const site = 'https://cleardisk.app';
const xml = await (await fetch(site + '/sitemap.xml')).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: 'cleardisk.app',
    key,
    keyLocation: site + '/' + key + '.txt',
    urlList,
  }),
});
console.log('IndexNow', response.status, urlList.length + ' URLs');
