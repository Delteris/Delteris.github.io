import math, json
C30 = math.cos(math.radians(30))
V = (1/3**.5,)*3                        # towards the viewer
BELOW = False                           # view from underneath (overhead positions)
def setview(below):
    global V, BELOW
    BELOW = below; V = (1/3**.5, -1/3**.5 if below else 1/3**.5, 1/3**.5)
def P(p):
    x,y,z=p
    return ((x-z)*C30, (-(x+z)*0.5 if BELOW else (x+z)*0.5)-y)
def add(a,b): return tuple(i+j for i,j in zip(a,b))
def sub(a,b): return tuple(i-j for i,j in zip(a,b))
def mul(a,k): return tuple(i*k for i in a)
def dot(a,b): return sum(i*j for i,j in zip(a,b))
def cross(a,b): return (a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0])
def norm(a): l=dot(a,a)**.5; return mul(a,1/l)
def depth(p): return dot(p,V)
def rot(v, axis, deg):            # Rodrigues
    k=norm(axis); t=math.radians(deg); c,s=math.cos(t),math.sin(t)
    return add(add(mul(v,c), mul(cross(k,v),s)), mul(k,dot(k,v)*(1-c)))
LIGHT = norm((0.35,1,0.55))
def shade(n):
    b = 0.55 + 0.45*max(0,dot(norm(n),LIGHT))
    return b
def pts(ps): return " ".join(f"{x:.1f},{y:.1f}" for x,y in ps)
def steel(b):                        # brightness -> steel grey-blue
    r,g,bb = 70+b*120, 82+b*125, 100+b*130
    return f"rgb({int(r)},{int(g)},{int(bb)})"

class Scene:
    def __init__(s): s.solids=[]; s.over=[]; s.allpts=[]
    def box(s, o, u, v, w):
        c=[add(add(add(o,mul(u,i)),mul(v,j)),mul(w,k)) for i in (0,1) for j in (0,1) for k in (0,1)]
        idx=lambda i,j,k: c[i*4+j*2+k]
        faces=[([idx(0,0,0),idx(0,1,0),idx(0,1,1),idx(0,0,1)], mul(u,-1)),
               ([idx(1,0,0),idx(1,1,0),idx(1,1,1),idx(1,0,1)], u),
               ([idx(0,0,0),idx(1,0,0),idx(1,0,1),idx(0,0,1)], mul(v,-1)),
               ([idx(0,1,0),idx(1,1,0),idx(1,1,1),idx(0,1,1)], v),
               ([idx(0,0,0),idx(1,0,0),idx(1,1,0),idx(0,1,0)], mul(w,-1)),
               ([idx(0,0,1),idx(1,0,1),idx(1,1,1),idx(0,1,1)], w)]
        cen=mul(add(add(o,mul(add(add(u,v),w),0.5)),(0,0,0)),1)
        out=[]
        for q,n in faces:
            if dot(n,V)<=1e-6: continue
            out.append(f'<polygon points="{pts(map(P,q))}" fill="{steel(shade(n))}" stroke="#0b1324" stroke-width="0.8" stroke-linejoin="round"/>')
        s.allpts+= [P(p) for p in c]
        s.solids.append((depth(cen), "".join(out)))
    def pipe(s, c0, axis, r, L, rid=None):
        a=norm(axis); e1=norm(cross(a,(0.3,0.5,0.81) if abs(dot(a,(0.3,0.5,0.81)))<0.95 else (1,0,0))); e2=cross(a,e1)
        circ=lambda c,rr:[add(c,add(mul(e1,rr*math.cos(t)),mul(e2,rr*math.sin(t)))) for t in [i*math.pi/36 for i in range(72)]]
        c1=add(c0,mul(a,L)); A=circ(c0,r); B=circ(c1,r)
        hull=convex([P(p) for p in A+B]); s.allpts+=hull
        # gradient across the silhouette, perpendicular to the projected axis
        p0,p1=P(c0),P(c1); dx,dy=p1[0]-p0[0],p1[1]-p0[1]; l=(dx*dx+dy*dy)**.5 or 1; nx,ny=-dy/l,dx/l
        mid=P(mul(add(c0,c1),0.5)); gid=f"g{len(s.solids)}{abs(hash((c0,axis)))%9999}"
        g=f'<linearGradient id="{gid}" gradientUnits="userSpaceOnUse" x1="{mid[0]-nx*r*1.2:.1f}" y1="{mid[1]-ny*r*1.2:.1f}" x2="{mid[0]+nx*r*1.2:.1f}" y2="{mid[1]+ny*r*1.2:.1f}"><stop offset="0" stop-color="{steel(0.45)}"/><stop offset="0.35" stop-color="{steel(1.0)}"/><stop offset="1" stop-color="{steel(0.35)}"/></linearGradient>'
        body=f'<defs>{g}</defs><polygon points="{pts(hull)}" fill="url(#{gid})" stroke="#0b1324" stroke-width="0.8" stroke-linejoin="round"/>'
        cap_c, cap = (c1,B) if dot(a,V)>0 else (c0,A)
        inner=circ(cap_c, r*0.78)
        body+=f'<polygon points="{pts(map(P,cap))}" fill="{steel(0.9)}" stroke="#0b1324" stroke-width="0.8"/><polygon points="{pts(map(P,inner))}" fill="#0b1324" opacity="0.85"/>'
        s.solids.append((depth(mul(add(c0,c1),0.5)), body))
        return (a,e1,e2)
    def ring(s, c, a, r, hidden=False):
        a=norm(a); e1=norm(cross(a,(0.3,0.5,0.81) if abs(dot(a,(0.3,0.5,0.81)))<0.95 else (1,0,0))); e2=cross(a,e1)
        ps=[add(c,add(mul(e1,r*math.cos(t)),mul(e2,r*math.sin(t)))) for t in [i*math.pi/48 for i in range(97)]]
        # front half: points whose radial direction faces the viewer
        seg=[];segs=[]
        for p in ps:
            if dot(sub(p,c),V)>-0.05*r: seg.append(P(p))
            elif seg: segs.append(seg); seg=[]
        if seg: segs.append(seg)
        if hidden: s.weld_path([P(p) for p in ps], True); return
        for sg in segs: s.weld_path(sg)
    def weld(s, a, b, hidden=False):
        s.weld_path([P(a),P(b)], hidden)
    def weld_path(s, ps, hidden=False):
        d="M"+" L".join(f"{x:.1f},{y:.1f}" for x,y in ps)
        if hidden:
            s.over.append(f'<path d="{d}" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round" opacity="0.9"/>')
        else:
            s.over.append(f'<path d="{d}" fill="none" stroke="#b45309" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="{d}" fill="none" stroke="#fbbf24" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="{d}" fill="none" stroke="#fff3c4" stroke-width="1.2" stroke-dasharray="1.5 3" stroke-linecap="round" opacity="0.8"/>')
        s.allpts+=ps
    def torch(s, at, direction, L=38):
        # Torch / electrode holder: rose body and nozzle with a dark outline (reads on the
        # dark card and on white paper, and against the grey steel), a short white wire
        # and a glowing arc at the tip. Colour used by nothing else in the drawings.
        d=norm(direction); q=lambda k: P(add(at,mul(d,k)))
        tip=q(0); w1=q(5); n0=q(5.5); n1=q(14); b1=q(L)
        dx,dy=b1[0]-tip[0],b1[1]-tip[1]; l=(dx*dx+dy*dy)**.5 or 1; nx,ny=-dy/l,dx/l
        def quad(a,b,ha,hb): return [(a[0]+nx*ha,a[1]+ny*ha),(b[0]+nx*hb,b[1]+ny*hb),(b[0]-nx*hb,b[1]-ny*hb),(a[0]-nx*ha,a[1]-ny*ha)]
        body=quad(n1,b1,4.2,4.2); noz=quad(n0,n1,2.4,4.6)
        o='#0b1324'
        s.over.append(
            f'<g class="wp-torch">'
            f'<circle cx="{tip[0]:.1f}" cy="{tip[1]:.1f}" r="7" fill="#fde68a" opacity="0.35"/>'
            f'<line x1="{tip[0]:.1f}" y1="{tip[1]:.1f}" x2="{w1[0]:.1f}" y2="{w1[1]:.1f}" stroke="{o}" stroke-width="3.6" stroke-linecap="round"/>'
            f'<line x1="{tip[0]:.1f}" y1="{tip[1]:.1f}" x2="{w1[0]:.1f}" y2="{w1[1]:.1f}" stroke="#f8fafc" stroke-width="1.6" stroke-linecap="round"/>'
            f'<polygon points="{pts(body)}" fill="#e11d48" stroke="{o}" stroke-width="1.3" stroke-linejoin="round"/>'
            f'<polygon points="{pts(noz)}" fill="#fb7185" stroke="{o}" stroke-width="1.3" stroke-linejoin="round"/>'
            f'<circle cx="{tip[0]:.1f}" cy="{tip[1]:.1f}" r="2.8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>'
            f'</g>')
        s.allpts+=[tip,b1]
    def arrow(s, ps3):
        ps=[P(p) for p in ps3]; s.allpts+=ps
        d="M"+" L".join(f"{x:.1f},{y:.1f}" for x,y in ps)
        (x0,y0),(x1,y1)=ps[-2],ps[-1]; ang=math.atan2(y1-y0,x1-x0)
        h=[(x1,y1),(x1-9*math.cos(ang-0.45),y1-9*math.sin(ang-0.45)),(x1-9*math.cos(ang+0.45),y1-9*math.sin(ang+0.45))]
        s.over.append(f'<path d="{d}" fill="none" stroke="#0b1324" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><polygon points="{pts(h)}" fill="#0b1324" stroke="#0b1324" stroke-width="3" stroke-linejoin="round"/><path d="{d}" fill="none" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><polygon points="{pts(h)}" fill="#38bdf8"/>')
    def arc_arrow(s, c, a, r, t0, t1):
        a=norm(a); e1=norm(cross(a,(0.3,0.5,0.81) if abs(dot(a,(0.3,0.5,0.81)))<0.95 else (1,0,0))); e2=cross(a,e1)
        n=24; ps=[add(c,add(mul(e1,r*math.cos(t0+(t1-t0)*i/n)),mul(e2,r*math.sin(t0+(t1-t0)*i/n)))) for i in range(n+1)]
        s.arrow(ps)
    def guide45(s):
        o=(-PL-6,-PL-6,0); h=P(add(o,(60,0,0))); a=P(add(o,mul(norm((1,1,0)),60))); o2=P(o)
        s.over.append(f'<line x1="{o2[0]:.1f}" y1="{o2[1]:.1f}" x2="{h[0]:.1f}" y2="{h[1]:.1f}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/><line x1="{o2[0]:.1f}" y1="{o2[1]:.1f}" x2="{a[0]:.1f}" y2="{a[1]:.1f}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/><text x="{o2[0]+26:.1f}" y="{o2[1]-2:.1f}" fill="#94a3b8" font-size="10" font-family="Inter,sans-serif">45°</text>')
        s.allpts+=[o2,h,a]
    def svg(s, title, W=200, H=158):
        xs=[p[0] for p in s.allpts]; ys=[p[1] for p in s.allpts]
        cx=(min(xs)+max(xs))/2; cy=(min(ys)+max(ys))/2
        body="".join(b for _,b in sorted(s.solids,key=lambda t:t[0]))+"".join(s.over)
        ext=(max(xs)-min(xs), max(ys)-min(ys))
        pad=12; sw=max(W, ext[0]+2*pad); sh=max(H, ext[1]+2*pad)
        if sw/sh > W/H: sh=sw*H/W
        else: sw=sh*W/H
        return ext, f'<svg viewBox="{cx-sw/2:.1f} {cy-sh/2:.1f} {sw:.1f} {sh:.1f}" role="img" aria-label="{title}" class="wp-svg">{body}</svg>'

def convex(points):
    pts_=sorted(set((round(x,2),round(y,2)) for x,y in points))
    if len(pts_)<3: return pts_
    def cr(o,a,b): return (a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0])
    lo=[];up=[]
    for p in pts_:
        while len(lo)>=2 and cr(lo[-2],lo[-1],p)<=0: lo.pop()
        lo.append(p)
    for p in reversed(pts_):
        while len(up)>=2 and cr(up[-2],up[-1],p)<=0: up.pop()
        up.append(p)
    return lo[:-1]+up[:-1]

X,Y,Z=(1,0,0),(0,1,0),(0,0,1)
T=6; Wd=48; Ln=90
S={}
# ---------- plate, butt ----------
def butt_flat(overhead=False):
    s=Scene()
    s.box((-Wd-1.5,0,-Ln/2),(Wd,0,0),(0,T,0),(0,0,Ln))
    s.box((1.5,0,-Ln/2),(Wd,0,0),(0,T,0),(0,0,Ln))
    if overhead:
        s.weld((0,0,-Ln/2+4),(0,0,Ln/2-4)); s.torch((0,-1,8),(0.25,-1,0.3))
    else:
        s.weld((0,T,-Ln/2+4),(0,T,Ln/2-4)); s.torch((0,T+1,8),(0.25,1,0.3))
    return s
setview(False); S['butt-PA']=butt_flat(); setview(True); S['butt-PE']=butt_flat(True); setview(False)
def butt_vert(direction):          # plates in XY plane, joint vertical along y, face +z
    s=Scene()
    s.box((-Wd-1.5,-Ln/2,-T),(Wd,0,0),(0,Ln,0),(0,0,T))
    s.box((1.5,-Ln/2,-T),(Wd,0,0),(0,Ln,0),(0,0,T))
    s.weld((0,-Ln/2+4,0),(0,Ln/2-4,0))
    if direction=='up': s.torch((0,-6,1),(0.3,-0.35,1)); s.arrow([(10,-Ln/2+12,4),(10,Ln/2-12,4)])
    else: s.torch((0,6,1),(0.3,0.35,1)); s.arrow([(10,Ln/2-12,4),(10,-Ln/2+12,4)])
    return s
S['butt-PF']=butt_vert('up'); S['butt-PG']=butt_vert('down')
def butt_horiz():                  # plates stacked, joint horizontal along x, face +z
    s=Scene()
    s.box((-Ln/2,-Wd-1.5,-T),(Ln,0,0),(0,Wd,0),(0,0,T))
    s.box((-Ln/2,1.5,-T),(Ln,0,0),(0,Wd,0),(0,0,T))
    s.weld((-Ln/2+4,0,0),(Ln/2-4,0,0)); s.torch((8,0,1),(0.2,0.25,1))
    return s
S['butt-PC']=butt_horiz()
# ---------- plate, fillet ----------
def t_joint(kind):
    s=Scene()
    if kind=='PB':
        s.box((-Wd,0,-Ln/2),(2*Wd,0,0),(0,T,0),(0,0,Ln)); s.box((-T/2,T,-Ln/2),(T,0,0),(0,Wd,0),(0,0,Ln))
        s.weld((T/2,T,-Ln/2+4),(T/2,T,Ln/2-4)); s.torch((T/2+1,T+1,6),(1,1,0.35))
    elif kind=='PD':
        s.box((-Wd,Wd,-Ln/2),(2*Wd,0,0),(0,T,0),(0,0,Ln)); s.box((-T/2,0,-Ln/2),(T,0,0),(0,Wd,0),(0,0,Ln))
        s.weld((T/2,Wd,-Ln/2+4),(T/2,Wd,Ln/2-4)); s.torch((T/2+1,Wd-1,6),(1,-1,0.35))
    elif kind in ('PF','PG'):
        s.box((-Wd,-Ln/2,-T),(2*Wd,0,0),(0,Ln,0),(0,0,T)); s.box((-T/2,-Ln/2,0),(T,0,0),(0,Ln,0),(0,0,Wd))
        s.weld((T/2,-Ln/2+4,0),(T/2,Ln/2-4,0))
        if kind=='PF': s.torch((T/2+1,-6,1),(1,-0.45,1)); s.arrow([(T/2+12,-Ln/2+12,3),(T/2+12,Ln/2-12,3)])
        else: s.torch((T/2+1,6,1),(1,0.45,1)); s.arrow([(T/2+12,Ln/2-12,3),(T/2+12,-Ln/2+12,3)])
    elif kind=='PA':                  # trough: the T-joint turned 45 degrees, weld facing up
        aa=math.radians(115); h=(math.cos(aa),0,math.sin(aa)); j=norm(cross(Y,h)); r2=0.5**.5
        d1=add(mul(h,r2),mul(Y,r2)); d2=add(mul(h,-r2),mul(Y,r2))
        n1=add(mul(h,r2),mul(Y,-r2)); n2=add(mul(h,-r2),mul(Y,-r2))
        o=mul(j,-Ln/2)
        s.box(o,mul(d2,Wd),mul(n2,T),mul(j,Ln))
        s.box(o,mul(d1,Wd),mul(n1,T),mul(j,Ln))
        s.weld(add(o,add(mul(j,4),(0,2.5,0))),add(o,add(mul(j,Ln-4),(0,2.5,0)))); s.torch(add((0,3.5,0),mul(j,8)),(0.1,1,0.1))
    return s
for k in ('PA','PB','PD','PF','PG'):
    setview(k=='PD'); S['fillet-'+k]=t_joint(k)
setview(False)
# ---------- pipe, butt ----------
R=22; PL=56
def pipe_butt(kind):
    s=Scene()
    if kind=='PA':      # axis horizontal along x, rotated
        s.pipe((-PL-1,0,0),X,R,PL); s.pipe((1,0,0),X,R,PL); s.ring((0,0,0),X,R*1.04)
        s.torch((0,R+1,0),(0.15,1,0.25)); s.arc_arrow((PL+4,0,0),X,R*1.25,-0.6,2.2)
    elif kind=='PC':    # axis vertical
        s.pipe((0,-PL-1,0),Y,R,PL); s.pipe((0,1,0),Y,R,PL); s.ring((0,0,0),Y,R*1.04)
        s.torch(add((0,0,0),mul(norm((1,0,1)),R+1)),(1,0.25,1))
    elif kind in ('PH','PJ'):   # axis horizontal along x? use z for better view of ring face
        s.pipe((-PL-1,0,0),X,R,PL); s.pipe((1,0,0),X,R,PL); s.ring((0,0,0),X,R*1.04)
        up = kind=='PH'
        # progression on the near side: from bottom to top (PH) or top to bottom (PJ)
        ps=[(0, R*1.5*math.sin(t), R*1.5*math.cos(t)) for t in ([-1.2+i*2.4/16 for i in range(17)])]
        s.arrow(ps if up else list(reversed(ps)))
        s.torch((0,0,R+1),(0.1,0.15,1))
    elif kind in ('H-L045','J-L045'):
        a=norm((1,1,0)); c=(0,0,0)
        s.pipe(sub(c,mul(a,PL+1)),a,R,PL); s.pipe(add(c,mul(a,1)),a,R,PL); s.ring(c,a,R*1.04)
        e=(0,0,1); f=norm(cross(a,e))   # f lies in the vertical plane, perpendicular to the axis
        if dot(f,(0,1,0))<0: f=mul(f,-1)
        ts=[-1.2+i*2.4/16 for i in range(17)]
        ps=[add(c,add(mul(e,R*1.5*math.cos(t)),mul(f,R*1.5*math.sin(t)))) for t in ts]
        s.arrow(ps if kind=='H-L045' else list(reversed(ps)))
        s.torch(mul(e,R+1),(0.1,0.1,1))
    return s
for k in ('PA','PC','PH','PJ','H-L045','J-L045'): S['pipe-'+k]=pipe_butt(k)
# ---------- pipe to plate, fillet ----------
def pipe_fillet(kind):
    s=Scene(); PW=44
    if kind=='PB':        # plate horizontal, pipe standing up
        s.box((-PW,-T,-PW),(2*PW,0,0),(0,T,0),(0,0,2*PW)); s.pipe((0,0,0),Y,R,PL+6); s.ring((0,1.5,0),Y,R*1.08)
        s.torch(add((0,2,0),mul(norm((1,0,1)),R+2)),(1,0.9,1))
    elif kind=='PD':      # plate horizontal overhead, pipe hanging down
        s.box((-PW,0,-PW),(2*PW,0,0),(0,T,0),(0,0,2*PW)); s.pipe((0,-PL-6,0),Y,R,PL+6); s.ring((0,-1.5,0),Y,R*1.08)
        s.torch(add((0,-2,0),mul(norm((1,0,1)),R+2)),(1,-0.9,1))
    elif kind in ('PB-rot','PH','PJ'):   # plate vertical (XY), pipe horizontal along z towards viewer
        s.box((-PW,-PW,-T),(2*PW,0,0),(0,2*PW,0),(0,0,T)); s.pipe((0,0,0),Z,R,PL+6); s.ring((0,0,1.5),Z,R*1.08)
        if kind=='PB-rot':
            s.torch((0,R+2,2),(0.3,1,0.6)); s.arc_arrow((0,0,PL+12),Z,R*1.25,-0.4,2.4)
        else:
            ps=[(R*1.5*math.cos(t),R*1.5*math.sin(t),3) for t in [-1.25+i*2.5/16 for i in range(17)]]
            s.arrow(ps if kind=='PH' else list(reversed(ps)))
            s.torch((R+2,0,2),(1,0.1,0.5))
    elif kind=='PA':      # axis inclined 45 degrees, rotated, weld in the trough
        n=norm((1,1,0)); u=norm((1,-1,0))
        s.box(add(add((0,0,0),mul(u,-PW)),add(mul(n,-T),(0,0,-PW))),mul(u,2*PW),mul(n,T),(0,0,2*PW))
        s.pipe((0,0,0),n,R,PL+6); s.ring(mul(n,1.5),n,R*1.08)
        s.torch(add(mul(n,2),mul(norm(add(u,mul(n,0))), -0.0)) if False else add(mul(n,2),(0,R+2,0)),(0.2,1,0.3))
        s.arc_arrow(mul(n,PL+12),n,R*1.25,0.3,2.9)
    return s
for k in ('PA','PB','PB-rot','PD','PH','PJ'):
    setview(k=='PD'); S['pf-'+k]=pipe_fillet(k)
setview(False)

out={}
for k,s in S.items():
    ext,svg=s.svg(k); out[k]=svg; print(k, [round(e) for e in ext])
json.dump(out, open('./svgs.json','w'))
