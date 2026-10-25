import json, html
S=json.load(open('./svgs.json'))
def card(key, iso, asme, name, note):
    label=html.escape(f"Enlarge {iso}, {asme.replace('↑','up').replace('↓','down')}: {name}")
    return f'''                <figure class="wp-card">
                    <button type="button" class="wp-card-open" aria-label="{label}" aria-haspopup="dialog"></button>
                    {S[key]}
                    <figcaption>
                        <span class="wp-codes"><span class="wp-iso">{iso}</span><span class="wp-asme">{asme}</span></span>
                        <span class="wp-name">{name}</span>
                        <span class="wp-note">{note}</span>
                    </figcaption>
                </figure>'''
groups=[
 ("plate-butt","Plate · Butt Weld","Groove welds on plate", [
  ("butt-PA","PA","1G","Flat","Weld on top, torch pointing down."),
  ("butt-PC","PC","2G","Horizontal","Plates vertical, weld running horizontally."),
  ("butt-PF","PF","3G ↑","Vertical up","Welding from the bottom up."),
  ("butt-PG","PG","3G ↓","Vertical down","Welding from the top down."),
  ("butt-PE","PE","4G","Overhead","Weld on the underside, welder below. Drawn from below."),
 ]),
 ("plate-fillet","Plate · Fillet Weld","Fillet welds on plate (T-joints, lap joints)", [
  ("fillet-PA","PA","1F","Flat","Joint turned 45° so the weld sits in the trough."),
  ("fillet-PB","PB","2F","Horizontal vertical","Weld in the corner, deposited from above."),
  ("fillet-PF","PF","3F ↑","Vertical up","Vertical corner, welding upwards."),
  ("fillet-PG","PG","3F ↓","Vertical down","Vertical corner, welding downwards."),
  ("fillet-PD","PD","4F","Horizontal overhead","Corner on the underside, deposited from below. Drawn from below."),
 ]),
 ("pipe-butt","Pipe · Butt Weld","Groove welds joining pipe to pipe", [
  ("pipe-PA","PA","1G","Rotated, axis horizontal","The pipe turns; the weld stays on top."),
  ("pipe-PC","PC","2G","Axis vertical","Fixed pipe, weld running horizontally round it."),
  ("pipe-PH","PH","5G ↑","Fixed, axis horizontal, up","Welding round the pipe from bottom to top."),
  ("pipe-PJ","PJ","5G ↓","Fixed, axis horizontal, down","Welding round the pipe from top to bottom."),
  ("pipe-H-L045","H-L045","6G ↑","Fixed, axis at 45°, up","Inclined pipe, welding upwards."),
  ("pipe-J-L045","J-L045","6G ↓","Fixed, axis at 45°, down","Inclined pipe, welding downwards."),
 ]),
 ("pipe-fillet","Pipe · Fillet Weld","Fillet welds joining pipe to plate", [
  ("pf-PA","PA","1F","Rotated, axis at 45°","The pipe turns; the weld stays in the flat position."),
  ("pf-PB","PB","2F","Axis vertical","Pipe standing on the plate, weld round its foot."),
  ("pf-PB-rot","PB","2FR","Rotated, axis horizontal","The pipe turns; the weld is made in the horizontal position."),
  ("pf-PD","PD","4F","Axis vertical, overhead","Plate above, pipe hanging below. Drawn from below."),
  ("pf-PH","PH","5F ↑","Fixed, axis horizontal, up","Welding round the pipe from bottom to top."),
  ("pf-PJ","PJ","5F ↓","Fixed, axis horizontal, down","Welding round the pipe from top to bottom."),
 ]),
]
from i18n import FM, BODY, UI, GROUPS, CARDS
import os, re

# Each drawing is also a file under docs/static/welding-positions/ (one name for all three
# languages), so search engines can index it; the page loads it with <img>.
OUT='../../docs/static/welding-positions'
os.makedirs(OUT, exist_ok=True)
KIND={'plate-butt':'plate butt weld','plate-fillet':'plate fillet weld','pipe-butt':'pipe butt weld','pipe-fillet':'pipe fillet weld'}
def words(asme): return asme.replace(' ↑',' uphill').replace(' ↓',' downhill')
def slug(t): return re.sub(r'[^a-z0-9]+','-',t.lower()).strip('-')
FILES={}
for gid,h,sub,cards in groups:
    for key,iso,asme,name,note in cards:
        title=f"{iso} ({words(asme)}) welding position: {KIND[gid]}, {name[0].lower()+name[1:]}"
        fn=slug(f"{gid} {iso} {words(asme)} {name}")+'.svg'
        svg=S[key].replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ',1)
        svg=re.sub(r' role="img" aria-label="[^"]*" class="wp-svg">', f'><title>{html.escape(title)}</title>', svg, count=1)
        open(f'{OUT}/{fn}','w').write(svg+'\n')
        FILES[key]=fn

def build(lang):
    ui=UI[lang]
    def label(iso, asme, name):
        return asme.replace('↑', ui['up']).replace('↓', ui['down'])
    def card_l(key, iso, asme, name, note, group_h):
        a=label(iso, asme, name)
        alt=f"{ui['pos']} {iso} / {a}: {name} ({group_h.replace(' · ', ', ').lower()})"
        svg=f'<img src="/static/welding-positions/{FILES[key]}" alt="{html.escape(alt)}" class="wp-svg" width="400" height="316" decoding="async">'
        return f'''                <figure class="wp-card">
                    <button type="button" class="wp-card-open" aria-label="{html.escape(f"{ui['enlarge']} {iso}, {a}: {name}")}" aria-haspopup="dialog"></button>
                    {svg}
                    <figcaption>
                        <span class="wp-codes"><span class="wp-iso">{iso}</span><span class="wp-asme">{asme}</span></span>
                        <span class="wp-name">{name}</span>
                        <span class="wp-note">{note}</span>
                    </figcaption>
                </figure>'''
    gs=[]
    for gid,h,sub,cards in groups:
        if lang=='en':
            row=f'{h.split(" · ")[0]}, {h.split(" · ")[1].lower()}'
            cs=cards
        else:
            h,sub,row=GROUPS[lang][gid]
            cs=[(k,iso,asme)+CARDS[lang][k] for k,iso,asme,_,_ in cards]
        gs.append((gid,h,sub,row,cs))
    chart="\n".join(f'''            <div class="wp-group" id="{gid}" data-group="{h}">
                <p class="wp-print-head" aria-hidden="true"><span>{ui['print_head']}</span><span>{ui['site']}</span></p>
                <h3 class="wp-group-h">{h}<span>{sub}</span></h3>
                <div class="wp-grid">
{chr(10).join(card_l(*c, h) for c in cs)}
                </div>
            </div>''' for gid,h,sub,row,cs in gs)
    rows="\n".join(f'''                    <tr><th scope="row"><span class="fm-name">{row}</span><span class="fm-sub">{c[3]}</span></th><td><strong>{c[1]}</strong></td><td>{c[2]}</td></tr>''' for gid,h,sub,row,cs in gs for c in cs)
    page=open('./page.tpl').read()
    if lang!='en':
        fm,body=page.split('\n---\n',1)
        f=FM[lang]
        for k in ('permalink',):
            fm=fm.replace('permalink: /resources/welding-positions/', f'permalink: {f["permalink"]}')
        for k in ('title','description','og_description','og_image_alt','crumb','guide_pitch','guide_pitch_link'):
            import re
            fm,n=re.subn(rf'^{k}: ".*"$', f'{k}: "{f[k]}"', fm, flags=re.M); assert n==1,(lang,k)
        fm=fm.replace('layout: default', f'layout: default\nlang: {lang}')
        fm=fm.replace('alt_url: "/pt/resources/welding-positions/"', 'alt_url: "/resources/welding-positions/"')
        for a,b in BODY[lang]:
            assert a in body,(lang,a[:60]); body=body.replace(a,b)
        page=fm+'\n---\n'+body
    page=page.replace('{{CHART}}',chart).replace('{{ROWS}}',rows)
    out={'en':'../../docs/resources/welding-positions.html','pt':'../../docs/pt/resources/welding-positions.html','es':'../../docs/es/resources/welding-positions.html'}[lang]
    open(out,'w').write(page)
    print(lang, len(page))

for lang in ('en','pt','es'): build(lang)
