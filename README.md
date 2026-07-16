# hae-portfolio

Personal brand site for **Haorui (Rae) Wang** — *I build intelligent AI systems.*

## Edit the site

**Copy lives in `src/content/`** — see **[EDIT.md](EDIT.md)**.

| File | Controls |
| --- | --- |
| `src/content/site.ts` | Name, hero, contact, links, resume |
| `src/content/mission.ts` | Focus: statement + Current / Where / Previously |
| `src/content/featuredSystem.ts` | Alfred featured pipeline |
| `src/content/projects.ts` | Case studies (Alfred first) |
| `src/content/research.ts` | Research timeline |
| `src/content/about.ts` | Philosophy |
| `public/Haorui_Wang_Resume_DS.pdf` | Resume download |

## Run locally

```bash
cd ~/Projects/hae-portfolio
npm install
npm run dev
```

Open http://localhost:5173.

## Deploy

https://haorui-wang-rae-portfolio.com — see [deploy/DEPLOY.md](deploy/DEPLOY.md).

```bash
./deploy/ship.sh
```
