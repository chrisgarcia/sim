// Menu G5.6.1 (non-frame/IE5)
// Last Modified: Jun. 15, 2005
// Web Site: yxScripts.com
// Email: m_yangxin@hotmail.com

// Copyright 2003, 2004  Xin Yang   All Rights Reserved.

var yx_eh=!yx_isMac&&(document.doctype?(document.doctype.name.indexOf(".dtd")!=-1):false)||(document.compatMode?(document.compatMode=="CSS1Compat"):false);var yx_ec=-1,yx_ow=0,yx_oh=0;var yx_fq=yx_fr=yx_ft=yx_ic;var yx_hu=/TR|TBODY|THEAD|TFOOT|TABLE/i;function yx_br(){return yx_eh?document.documentElement:document.body};function yx_ds(){return(yx_br()).offsetWidth};function yx_dr(){return(yx_br()).offsetHeight};function yx_di(){return(yx_br()).scrollLeft};function yx_dj(){return(yx_br()).scrollTop};function yx_db(l,cj){if(yx_isMac){if(yx_hu.test(l.tagName)){cj=1};var x=l.offsetLeft;if(l.tagName=="TD"&&typeof(cj)=="undefined"){x+=yx_db(l.parentElement,1)}else if(l.offsetParent){x+=yx_db(l.offsetParent,cj)}else{x+=isNaN(parseInt(document.body.style.marginLeft))?parseInt(document.body.leftMargin):parseInt(document.body.style.marginLeft)};return x}else{return l.offsetLeft+(l.offsetParent?yx_db(l.offsetParent):0)}};function yx_dq(l,cj){if(yx_isMac){if(yx_hu.test(l.tagName)){cj=1};var y=l.offsetTop;if(l.tagName=="TD"&&typeof(cj)=="undefined"){y+=yx_dq(l.parentElement,1)}else if(l.offsetParent){y+=yx_dq(l.offsetParent,cj)}else{y+=isNaN(parseInt(document.body.style.marginTop))?parseInt(document.body.topMargin):parseInt(document.body.style.marginTop)};return y}else{return l.offsetTop+(l.offsetParent?yx_dq(l.offsetParent):0)}};function yx_fk(x,y,h,gh,cu){var l=yx_fh(x,y,gh,cu),ac=h||document.body;return(h||yx_isMac)?ac.appendChild(l):ac.insertBefore(l,ac.firstChild)};function yx_gr(){return event.shiftKey};function yx_gy(){event.cancelBubble=true};function yx_er(){var dg=this.dg,cl=dg.cl,au=this.au,gg=au.gg,x=this.item;if(!yx_isIE55up&&gg!=yx_I&&!yx_isMac){this.av=yx_fj(yx_ga.src,this.width,this.height,"top");with(this.av.style){position="absolute";left=this.x+"px";top=this.y+"px";zIndex=yx_be};dg.holder.appendChild(this.av);x=this.av;if(gg!=yx_S&&gg!=yx_I){if(this.fm.fb.cursor!=""){x.className=this.fm.fb.cursor}else{x.style.cursor="default"}}}else{this.av=this.item};if(gg!=yx_S&&gg!=yx_I){if(yx_isIE55up){x.onmouseenter=yx_fw;x.onmouseleave=yx_fu}else{x.onmouseover=yx_fw;x.onmouseout=yx_fu};x.onmousedown=yx_by;x.onclick=yx_ax;if(this.au.du!=""&&showToolTip==1){x.title=this.au.du};x.dm=yx_eu;x.item=this}else{if(yx_isIE55up){x.onmouseenter=yx_fx;x.onmouseleave=yx_fv}else{x.onmouseover=yx_fx;x.onmouseout=yx_fv};x.onclick=yx_av};x.sticky=cl.sticky;x=null;var ee=yx_cj(au.ci);if(ee!=null){this.as=ee.as;this.at=ee.at};if(gg==yx_M){this.menu=new yx_ev(cl,this,au)}};function yx_es(){var dg=this.dg,au=this.au,dp=au.eg,gg=au.gg,si=this.fm=yx_da(this);if(si.fb.actual&&gg!=yx_S){dg.actual=true};this.item=yx_fk(0,0,dg.holder,"inherit",yx_en);this.gi=0;if(gg==yx_M||gg==yx_L||gg==yx_C){this.item.className=si.fb.be[dp];if(si.fa!=null){if(si.fa.bc!=""){this.cs=yx_fi("SPAN");this.cs.className=si.fa.be[dp];this.gi+=3;if(si.fa.text!=""){this.cs.innerHTML=si.fa.text}else if(!yx_isMac){this.cs.appendChild(yx_fj(yx_ga.src,1,1,"top"))};this.item.appendChild(this.cs)};if(si.fa.bd!=""){this.ct=yx_fi("SPAN");this.ct.className=si.fa.bf[dp];this.gi+=3;if(si.fa.text2!=""){this.ct.innerHTML=si.fa.text2}else if(!yx_isMac){this.ct.appendChild(yx_fj(yx_ga.src,1,1,"top"))};this.item.appendChild(this.ct)}};if(gg==yx_M&&si.fe!=null&&si.fe.bc!=""){this.fu=yx_fi("SPAN");this.fu.className=si.fe.be[dp];this.gi+=3;if(si.fe.text!=""){this.fu.innerHTML=si.fe.text}else if(!yx_isMac){this.fu.appendChild(yx_fj(yx_ga.src,1,1,"top"))};this.item.appendChild(this.fu)};this.bl=yx_fi(si.fb.actual?"NOBR":"SPAN");this.bl.className=si.ez.be[dp];this.bl.innerHTML=au.bl;this.item.appendChild(this.bl)}else if(gg==yx_I){this.item.className=si.fb.bc;this.bl=yx_fi(si.fb.actual?"NOBR":"SPAN");this.bl.className=si.ez.bc;this.bl.innerHTML=au.bl;this.item.appendChild(this.bl)}else if(gg==yx_S){this.fh=yx_fi("DIV");this.fh.className=si.fd.bi;this.fh.appendChild(yx_fj(yx_ga.src,1,1,"top"));this.item.appendChild(this.fh);if(si.fd.ax!=""){this.fg=yx_fi("DIV");this.fg.className=si.fd.ax;this.fg.appendChild(yx_fj(yx_ga.src,1,1,"top"));this.item.appendChild(this.fg);if(dg.bar){this.fh.style.styleFloat="left";this.fg.style.styleFloat="left"}}};this.sw=0;this.sh=0;if(!yx_isMac&&!yx_eh&&gg!=yx_S&&si.fb.bc!=""){var po=yx_bg(si.fb.bc);this.sw=po.x;this.sh=po.y};this.aw=0;this.ah=0;if(gg!=yx_S){this.aw=Math.max(minimumWidth,yx_em(this))+this.sw+(yx_isMac?0:this.gi);this.ah=Math.max(Math.max(Math.max(this.bl.offsetHeight,this.fu!=null?(this.fu.offsetHeight):0),this.cs!=null?(this.cs.offsetHeight):0),this.ct!=null?(this.ct.offsetHeight):0)+this.sh}};function yx_et(){var cl=this.cl;this.style=yx_dd(this);var fc=this.style.fc;this.bar=(this.dg==cl&&cl.bar||this.dg!=cl&&fc.bar)?true:false;this.holder=yx_fk(0,0,null,"hidden",cl.z);this.holder.cz=cl.name;if(fc.ck!=""){this.holder.className=fc.ck};if(!yx_isMac){this.holder.appendChild(yx_fj(yx_ga.src,1,1,"top"))};this.cv=null;this.pad=yx_fk(0,0,this.holder,"inherit",yx_fy);var x=this.pad;if(fc.bc!=""){x.className=fc.bc};if(!yx_isMac){x.appendChild(yx_fj(yx_ga.src,1,1,"top"))};x.sw=0;x.sh=0;if(!yx_isMac&&!yx_eh&&fc.bc!=""){var po=yx_bg(fc.bc);x.sw=po.x;x.sh=po.y};if(yx_isIE55up){x.onmouseenter=yx_fx;x.onmouseleave=yx_fv}else{x.onmouseover=yx_fx;x.onmouseout=yx_fv};x.onclick=yx_ay;x.sticky=cl.sticky;var df=this.df;for(var i=0;i<this.dd;i++){df[i]=new yx_ek(this,this.au.df[i]);df[i].dk()};if(this.actual){for(var i=0;i<this.dd;i++){if(df[i].au.gg!=yx_S){df[i].item.style.width=df[i].aw+"px"}}}else if(!yx_isMac&&!yx_eh){for(var i=0;i<this.dd;i++){if(df[i].au.gg!=yx_S){df[i].item.style.width=(df[i].item.offsetWidth+df[i].sw)+"px"}}};var mw=new Array(),mh=new Array();var cc=0,rc=0,tw=0,th=0,col=0,row=0;if(this.bar){col=fc.col>0?fc.col:fc.row>0?Math.ceil(this.dd/fc.row):this.dd;row=Math.ceil(this.dd/col);for(var i=0;i<row;i++){mw[i]=0;mh[i]=0};for(var i=0;i<this.dd;i++){if(df[i].au.gg!=yx_S&&mh[rc]<df[i].item.offsetHeight){mh[rc]=df[i].item.offsetHeight};if(++cc==col){cc=0;rc++}};cc=rc=0;for(var i=0;i<this.dd;i++){if(df[i].au.gg!=yx_S){if(df[i].item.offsetHeight<mh[rc]){df[i].item.style.height=(df[i].ah+mh[rc]-df[i].item.offsetHeight)+"px"};mw[rc]+=df[i].item.offsetWidth};if(++cc==col){cc=0;rc++}};cc=rc=0;for(var i=0;i<this.dd;i++){var cw=0;if(df[i].au.gg==yx_S){for(var j=0;j<df[i].item.childNodes.length;j++){var cn=df[i].item.childNodes[j];cn.style.height=mh[rc]+"px";cw+=cn.offsetWidth};df[i].item.style.width=cw+"px";mw[rc]+=cw};if(++cc==col){cc=0;rc++}};for(var i=0;i<row;i++){th+=mh[i];tw=Math.max(tw,mw[i])}}else{row=fc.row>0?fc.row:fc.col>0?Math.ceil(this.dd/fc.col):this.dd;col=Math.ceil(this.dd/row);for(var i=0;i<col;i++){mw[i]=0;mh[i]=0};for(var i=0;i<this.dd;i++){if(df[i].au.gg!=yx_S&&mw[cc]<df[i].item.offsetWidth){mw[cc]=df[i].item.offsetWidth};if(++rc==row){rc=0;cc++}};cc=rc=0;for(var i=0;i<this.dd;i++){if(df[i].au.gg!=yx_S){if(df[i].item.offsetWidth<mw[cc]){df[i].item.style.width=(df[i].aw+mw[cc]-df[i].item.offsetWidth)+"px"};mh[cc]+=df[i].item.offsetHeight};if(++rc==row){rc=0;cc++}};cc=rc=0;for(var i=0;i<this.dd;i++){if(df[i].au.gg==yx_S){for(var j=0;j<df[i].item.childNodes.length;j++){df[i].item.childNodes[j].style.width=mw[cc]+"px"};df[i].item.style.width=mw[cc]+"px";mh[cc]+=df[i].item.offsetHeight};if(++rc==row){rc=0;cc++}};for(var i=0;i<col;i++){th=Math.max(th,mh[i]);tw+=mw[i]}};var aw=tw+(col-1)*fc.cq,ah=th+(row-1)*fc.cr;x.style.width=(aw+x.sw)+"px";x.style.height=(ah+x.sh)+"px";this.width=x.offsetWidth;this.height=x.offsetHeight;this.sW=(this.width-aw)/2;this.sH=(this.height-ah)/2;x=null;if(fc.fz>0||fc.fy>0){this.fw=yx_fk(0,0,this.holder,"inherit",yx_hv);this.fw.style.width=this.width+"px";this.fw.style.height=this.height+"px";this.fw.innerHTML=yx_do(fc,this.width,this.height);if(yx_isIE55up){this.fw.onmouseenter=yx_fx;this.fw.onmouseleave=yx_fv}else{this.fw.onmouseover=yx_fx;this.fw.onmouseout=yx_fv};this.fw.onclick=yx_ay};this.holder.style.width=this.width+"px";this.holder.style.height=this.height+"px";cc=rc=0;var dx=this.sW,dy=this.sH;for(var i=0;i<this.dd;i++){df[i].x=dx;df[i].y=dy;df[i].ox=dx;df[i].oy=dy;df[i].width=df[i].item.offsetWidth;df[i].height=df[i].item.offsetHeight;df[i].ow=df[i].width;df[i].oh=df[i].height;yx_fc(df[i].item,dx,dy);if(this.bar){dx+=df[i].width+fc.cq;if(++cc==col){dx=this.sW;dy+=mh[rc]+fc.cr;cc=0;rc++}}else{dy+=df[i].height+fc.cr;if(++rc==row){dy=this.sH;dx+=mw[cc]+fc.cq;rc=0;cc++}};df[i].dj()};if(yx_isIE55up&&yx_dx()){var cv=yx_fi("IFRAME");cv.src="javascript:false";with(cv.style){position="absolute";left="-1000px";top="0px";visibility="inherit";width=this.holder.offsetWidth+"px";height=this.holder.offsetHeight+"px";zIndex=cl.z-1;filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"};document.body.appendChild(cv);this.cv=cv;this.cv.cz=cl.name};var ee=yx_cn(this.au.name);if(ee!=null){this.as=ee.as;this.at=ee.at};this.ew=true;this.cb=false;if(this.go){this.fj()}};function yx_gm(item,cp,fr,dz,ea,bv,dp,gp,gt,bn){if(item.item.className!=cp){if(dp&&bn){yx_bq(item.item,0)}else{yx_bq(item.item,2)};item.item.className=cp;if(dp&&bn){yx_bq(item.item,1)}};if(item.cs!=null&&item.cs.className!=dz){item.cs.className=dz};if(item.ct!=null&&item.ct.className!=ea){item.ct.className=ea};if(item.fu!=null&&item.fu.className!=fr){item.fu.className=fr};if(item.bl.className!=bv){item.bl.className=bv};var nw=item.item.offsetWidth,nh=item.item.offsetHeight,dw=item.ow-nw,dh=item.oh-nh;if(nw!=item.width||nh!=item.height){var dx=gp=="left"?0:gp=="center"?Math.round(dw/2):dw,dy=gt=="top"?0:gt=="middle"?Math.round(dh/2):dh;item.x=item.ox+dx;item.y=item.oy+dy;item.width=nw;item.height=nh;item.av.width=nw;item.av.height=nh;yx_fc(item.item,item.x,item.y);yx_fc(item.av,item.x,item.y)}};function yx_gu(){this.go=true;if(this.ew){if(this.style.fc.ca){yx_bq(this.holder,0)};this.ch(true);if(this.style.fc.ca){yx_bq(this.holder,1)};if(this.cv!=null){yx_gt(this.cv)}}else{if(!this.cb){this.cb=true;yx_ak(this,"dl","()",0)}}};function yx_ea(dp){this.go=false;if(this.fl){this.ao();if(this.dg!=this.cl||(dp&&!this.cl.gh)){if(this.style.fc.bx){yx_bq(this.holder,0)};yx_dz(this.holder);if(this.style.fc.bx){yx_bq(this.holder,1)};this.fl=false;if(this.cv!=null){yx_dz(this.cv)};if(this.at!=""){eval(this.at)}};if(this.dg!=this.cl){this.dg.ec()}}};function yx_aw(){if(!yx_ei){yx_az(null);yx_fq()};yx_ei=false};function yx_ar(){if(!yx_ep&&document.readyState=="complete"){yx_ep=true;yx_fq=document.onclick?document.onclick:yx_ic;document.onclick=yx_aw;yx_fr=window.onresize?window.onresize:yx_ic;window.onresize=yx_gf;yx_ft=window.onunload?window.onunload:yx_ic;window.onunload=yx_as;if(yx_ow==0){yx_ow=yx_ds();yx_oh=yx_dr()}}};function yx_bq(eb,dp){if(eb&&typeof(eb.filters)!="undefined"&&typeof(eb.filters)!="unknown"&&eb.filters.length>0){for(var i=0;i<eb.filters.length;i++){if(dp==0){try{eb.filters[i].Apply()}catch(err){}}else if(dp==1){try{eb.filters[i].Play()}catch(err){}}else{try{eb.filters[i].Stop()}catch(err){}}}}};function yx_gf(){var nw=yx_ds(),nh=yx_dr();if(nw!=yx_ow||nh!=yx_oh){yx_ow=nw;yx_oh=nh;yx_gg()}};function yx_dx(){if(yx_ec<0){yx_ec=document.getElementsByTagName("SELECT").length+document.getElementsByTagName("APPLET").length+document.getElementsByTagName("OBJECT").length+document.getElementsByTagName("EMBED").length};return(yx_ec>0)};var yx_bo=null,yx_bf=new Array();function yx_bh(n,p){this.name=n;this.offset=p};function yx_bg(cn){var fu=yx_co(yx_bf,cn);if(fu==null){if(yx_bo==null){yx_bo=yx_fi("DIV");yx_bo.cx=yx_fi("DIV");yx_bo.cx.appendChild(yx_fj(yx_ga.src,1,1,"top"));yx_bo.appendChild(yx_bo.cx);with(yx_bo.style){position="absolute";visibility="hidden";left="0px";top="0px"};document.body.appendChild(yx_bo)};yx_bo.className=cn;yx_bo.cx.className=cn;fu=new yx_bh(cn,new yx_il(yx_bo.offsetWidth-yx_bo.cx.offsetWidth,yx_bo.offsetHeight-yx_bo.cx.offsetHeight));yx_bf.push(fu)};return fu.offset};function yx_au(menu){for(var i=0;i<menu.df.length;i++){var x=menu.df[i];if(x.menu&&x.menu.ew){yx_au(x.menu);x.menu=null};x.cs=x.ct=x.fu=x.fh=x.fg=null;x.item.item=null;x.bl=null;x.item=null;x.av=null;x=null;menu.df[i]=null};menu.df=[];menu.cv=menu.fw=null;menu.pad=null;menu.holder=null};function yx_as(){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].menu.ew){if(yx_ee[i].gc>0){yx_gz(yx_ee[i].gc)};yx_at(yx_ee[i].menu);yx_au(yx_ee[i].menu);yx_ee[i].menu=null};yx_ee[i]=null};yx_ee=[];if(yx_bo){yx_bo.cx=null;yx_bo=null};yx_ft()};function yx_bz(i){if(yx_ee[i].menu.ew){if(yx_ee[i].gc>0){yx_gz(yx_ee[i].gc)};yx_at(yx_ee[i].menu);yx_au(yx_ee[i].menu);yx_ee[i].menu=null};yx_ee[i]={name:"",menu:{ew:false,fl:false}}};function yx_fe(x,y){yx_fc(this.holder,x,y);this.x=x;this.y=y;if(this.cv!=null){yx_fc(this.cv,x,y)}};function yx_fd(x,y){yx_fb(this.holder,x,y);this.x+=x;this.y+=y;if(this.cv!=null){yx_fb(this.cv,x,y)}};
