# How to edit this site / 如何修改这个网站

You do **not** need a CMS. Almost everything you see comes from files in `src/content/`. Change a file → save → preview → deploy.

你**不需要**内容管理系统。网站文案几乎都在 `src/content/`。改文件 → 保存 → 本地预览 → 发布。

---

## Where to edit / 改哪里

| What you want to change / 想改什么 | File / 文件 |
| --- | --- |
| Name, hero identity/lede/thesis, CTAs, email, GitHub, LinkedIn, resume path, nav | `src/content/site.ts` |
| Focus section (lede + Current / Where / Previously) | `src/content/mission.ts` |
| Featured product pipeline stages (Alfred) | `src/content/featuredSystem.ts` |
| Project case studies (attribution + Problem / Approach / …) | `src/content/projects.ts` |
| Research timeline milestones | `src/content/research.ts` |
| About bio & philosophy paragraphs | `src/content/about.ts` |
| Resume PDF | `public/Haorui_Wang_Resume_DS.pdf` (or new name + update `resumeHref`) |
| Browser tab title / meta | `index.html` |

Do **not** edit React components just to change words — they only render content.  
改文字时**不用**动组件文件。

---

## Page structure / 页面结构

1. Hero (name + identity)  
2. Focus (statement + Current Alfred / Where / Previously)  
3. Work / Projects (Alfred first)  
4. Featured System (Alfred animated loop)  
5. Timeline  
6. About  
7. Contact  

---

## Preview locally / 本地预览

```bash
cd ~/Projects/haorui-wang-rae-portfolio
npm install          # first time only
npm run dev
```

Open http://localhost:5173 — refresh after saving content files.

---

## Example: edit the featured pipeline / 示例：改精选流水线

Open `src/content/featuredSystem.ts` and edit `stages` (Alfred’s loop by default):

```ts
{
  id: "commitments",
  label: "Commitment Extraction",
  detail: "Your stage description…",
},
```

Add / remove / reorder objects in the `stages` array. The animation follows array order.

---

## Example: edit a project / 示例：改项目

Open `src/content/projects.ts`. Each project has:

- optional `subtitle` (tagline under the title)
- `problem` / `approach` / `architecture` / `impact` / `lessons`
- `stack`, `metrics`, optional `repoHref`, optional `footnote`

**Add:** copy a `{ ... }` block, give it a new `id`, rewrite.  
**Remove:** delete the whole object.  
**Reorder:** cut/paste in the array (top = first on page).

---

## Swap the resume PDF / 更换简历

**Option A:** Overwrite `public/Haorui_Wang_Resume_DS.pdf` (same name).  
**Option B:** Add a new PDF and set `resumeHref` in `src/content/site.ts`.

---

## Publish / 发布

```bash
./deploy/ship.sh
```

Builds and syncs to https://haorui-wang-rae-portfolio.com (needs SSH). Details: `deploy/DEPLOY.md`.

---

## Quick checklist

1. Edit `src/content/*.ts` (and/or PDF in `public/`)
2. `npm run dev` → check locally
3. `./deploy/ship.sh` → go live
