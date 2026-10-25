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
chart="\n".join(f'''            <div class="wp-group" id="{gid}" data-group="{h}">
                <p class="wp-print-head" aria-hidden="true"><span>Welding positions · ISO 6947 and ASME IX / AWS</span><span>delteris.com/resources/welding-positions/</span></p>
                <h3 class="wp-group-h">{h}<span>{sub}</span></h3>
                <div class="wp-grid">
{chr(10).join(card(*c) for c in cards)}
                </div>
            </div>''' for gid,h,sub,cards in groups)
rows="\n".join(f'''                    <tr><th scope="row"><span class="fm-name">{h.split(" · ")[0]}, {h.split(" · ")[1].lower()}</span><span class="fm-sub">{c[3]}</span></th><td><strong>{c[1]}</strong></td><td>{c[2]}</td></tr>''' for gid,h,sub,cards in groups for c in cards)
page=open('./page.tpl').read().replace('{{CHART}}',chart).replace('{{ROWS}}',rows)
open('../../docs/resources/welding-positions.html','w').write(page)
print(len(page))
