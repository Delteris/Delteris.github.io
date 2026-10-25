# Share image (og:image) for the welding positions chart: 1200x630 PNG.
# Needs: pip install cairosvg pillow; Space Grotesk and Inter variable TTFs in ~/fonts (Google Fonts repo).
import io, os, cairosvg
from PIL import Image, ImageDraw, ImageFont, ImageFilter
D='../../docs/static/welding-positions'
SG=os.path.expanduser('~/fonts/SpaceGrotesk.ttf'); IN=os.path.expanduser('~/fonts/Inter.ttf')
W,H=1200,630
im=Image.new('RGB',(W,H),'#050a14')
glow=Image.new('L',(W,H),0); ImageDraw.Draw(glow).ellipse((-300,-350,700,450),fill=60)
im=Image.composite(Image.new('RGB',(W,H),'#1d3a7a'),im,glow.filter(ImageFilter.GaussianBlur(120)))
d=ImageDraw.Draw(im)
def F(path,size,w):
    f=ImageFont.truetype(path,size)
    f.set_variation_by_axes([w] if path==SG else [14 if size<30 else 32, w])
    return f
d.text((64,70),"RESOURCES · FREE CHART",font=F(IN,20,600),fill='#60a5fa')
t=F(SG,68,700)
for i,w in enumerate(("Welding","Positions","Chart")): d.text((64,110+75*i),w,font=t,fill='#f8fafc')
s=F(IN,27,600)
d.text((64,370),"1G–6G · 1F–5F",font=s,fill='#fbbf24')
d.text((64,408),"ISO 6947 PA to J-L045",font=s,fill='#fbbf24')
d.text((64,462),"Plate and pipe, butt and fillet,\nuphill and downhill. Free to print.",font=F(IN,21,400),fill='#cbd5e1',spacing=8)
d.text((64,560),"delteris.com",font=F(IN,20,600),fill='#94a3b8')
picks=[("plate-butt-pa-1g-flat.svg","PA","1G"),("plate-butt-pf-3g-uphill-vertical-up.svg","PF","3G ↑"),("plate-butt-pe-4g-overhead.svg","PE","4G"),
       ("plate-fillet-pb-2f-horizontal-vertical.svg","PB","2F"),("pipe-butt-ph-5g-uphill-fixed-axis-horizontal-up.svg","PH","5G ↑"),("pipe-butt-h-l045-6g-uphill-fixed-axis-at-45-up.svg","H-L045","6G ↑")]
cw,ch,gap=222,250,14
x0=W-40-(3*cw+2*gap); y0=(H-(2*ch+gap))//2
code=F(SG,28,700); tag=F(IN,17,700)
for i,(fn,iso,asme) in enumerate(picks):
    x=x0+(i%3)*(cw+gap); y=y0+(i//3)*(ch+gap)
    d.rounded_rectangle((x,y,x+cw,y+ch),18,fill='#0d1729',outline='#22345a',width=2)
    p=Image.open(io.BytesIO(cairosvg.svg2png(bytestring=open(f'{D}/{fn}','rb').read(),output_width=cw-20))).convert('RGBA')
    if p.height>ch-64: p=p.resize((int(p.width*(ch-64)/p.height),ch-64))
    im.paste(p,(x+(cw-p.width)//2,y+8),p)
    d.text((x+16,y+ch-48),iso,font=code,fill='#f8fafc')
    lx=x+16+d.textlength(iso,font=code)+10; lw=d.textlength(asme,font=tag)+16
    d.rounded_rectangle((lx,y+ch-44,lx+lw,y+ch-16),7,fill='#2a1f08',outline='#d97706',width=2)
    d.text((lx+8,y+ch-41),asme,font=tag,fill='#fbbf24')
im.save(f'{D}/welding-positions-chart.png',optimize=True)
