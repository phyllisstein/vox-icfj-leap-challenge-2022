(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1056:function(e,t,n){"use strict";(function(e){var i,a=n(3),o=n.n(a),s=n(0),r=n.n(s),c=n(1),l=n(13),h=n(5),u=n(1057),d=n(1082),f=n.n(d);function p(e,t,n){return{el:e,rule:t,scroll:n||!1}}r.a.easing.showtarget=function(e){return e<.5?8*e*e*e*e:1-8*(e-=1)*e*e*e};var g=o.a.View.extend({el:document,initialize:function(){var e=this;this.frame=document.createElement("div"),this.frame.id="theme-editor-frame",this.info=document.createElement("div"),this.info.id="theme-editor-info",u.a.load().then((function(){var t=Math.max(r()(document.body).height(),r()(window).width());r()(e.frame).css("box-shadow","0 0 0 "+t+"px rgba(0,0,0,0.4)"),setTimeout((function(){document.body.appendChild(e.frame),document.body.appendChild(e.info),e.listenTo(u.a,"change:selection",e.render),e.delegateEvents({mouseover:"onHover",mousemove:"onMove",scroll:"onScroll","click [data-theme-tree]":"onTree",click:"onClick",keydown:"onKey"})}),0)}))},destroy:function(){this.frame&&(u.a.set({selection:null}),i=null,this.undelegateEvents(),this.stopListening(),this.frame.parentNode.removeChild(this.frame),this.info.parentNode.removeChild(this.info),this.frame=this.info=this.tree=null)},render:c.a.debounce((function(e){var t=this,n=i?i.getBoundingClientRect():null,a=e&&e.scrolling;if(this.info.style.display=n?"block":"none",this.frame.style.display=n?"block":"none",this.frame.className=this.info.className=u.a.hasSelection()?"selection":"",this.tree&&this.tree.length&&!a&&(this.tmpl=this.tmpl||Object(l.a)(f.a),h.a.fetch().done((function(){var e=t.tree[0].rule,n=u.a.getVarsForRule(e);t.info.innerHTML=t.tmpl({isSelection:u.a.hasSelection(),selector:e,tree:t.tree,vars:n.sort(),cols:1+Math.min(Math.floor(n.length/8),2),theme:h.a})}))),n){var o=this.$el.scrollTop(),s=n.top+o;if(this.frame.style.left=n.left+"px",this.frame.style.top=s+"px",this.frame.style.width=n.width+"px",this.frame.style.height=n.height+"px",u.a.hasSelection()){var c=window.innerWidth,d=n.left<c/2;this.info.style.left=d?n.left+"px":"auto",this.info.style.right=d?"auto":c-n.left-n.width+"px",this.info.style.top=Math.max(0,s-r()(this.info).outerHeight())+"px"}}}),1),focusOn:function(e){for(var t=[];e;){if("theme-editor"===e.id){t.length=0;break}e.className&&u.a.classPattern.test(e.className)?t.push(p(e,"."+e.className.match(u.a.classPattern)[1])):e.tagName&&u.a.tagPattern.test(e.tagName.toLowerCase())&&t.push(p(e,e.tagName.toLowerCase())),e=e.parentNode}return t.length&&t[0].el!==i?(i=t[0].el,this.tree=t,this.render()):t.length||u.a.hasSelection()||(i=null,this.tree=null,this.render()),!!t.length},select:function(t){u.a.set({selection:t.rule}),this.focusOn(t.el),t.scroll&&e.requestAnimationFrame((function(){r()("html,body").animate({scrollTop:Math.max(r()(t.el).offset().top-50,0)},{easing:"showtarget",duration:600})}))},onHover:function(e){u.a.hasSelection()||this.focusOn(e.target)},onMove:function(e){if(!u.a.hasSelection()&&i){var t=e.clientX,n=window.innerWidth,a=t>n/2;this.info.style.left=a?"auto":t+10+"px",this.info.style.right=a?n-t+10+"px":"auto",this.info.style.top=e.clientY+this.$el.scrollTop()+10+"px"}},onClick:function(e){this.focusOn(e.target)&&(e.stopPropagation(),e.preventDefault(),this.select(this.tree[0]))},onTree:function(e){e.stopPropagation(),e.preventDefault();var t=r()(e.currentTarget).data("theme-tree");t&&this.tree[t]&&this.select(this.tree[t])},onScroll:function(){this.render({scrolling:!0})},onKey:function(e){83===e.which&&this.tree.length&&this.select(this.tree[0])}}),m=o.a.View.extend({el:document,initialize:function(){this.els=[]},targetEnabled:function(){return!!this._target},target:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="change:target";return e.hilite&&!this._hilite||(this._target&&!e?(this._target.destroy(),this._target=null,this.trigger(t)):!this._target&&e&&(this._target=new g,this.trigger(t)),e.hilite&&this._hilite&&(this._target.select(this._hilite),this.hilite(null))),this.targetEnabled()},hilite:function(e){this.clearHilite();var t=i||document,n=u.a.get("selection"),a=[];if((e=(e||"").split(",").map((function(e){return 0===(e=e.replace(/^(?:@media[^\)]+\))?(.+)/,"$1").replace(/:hover/g,"").trim()).indexOf(n+" ")&&(e=e.slice(n.length+1).trim()),e}))).length)try{r()(t).is(e.join(","))&&a.push(p(t,e[0],!0))}catch(f){}if(e.length&&(e.length>1||!a.length))try{for(var o=t.querySelectorAll(e.join(",")),s=0;s<o.length;s+=1)a.push(p(o[s],e[0],!0))}catch(f){}if(a.length){this._hilite=a[0];for(var c=this.$el.scrollTop(),l=0;l<a.length;l+=1){var h=a[l].el.getBoundingClientRect();if(h){var d=document.createElement("div");d.className="c-theme-editor__hilite",d.style.left=h.left+"px",d.style.top=h.top+c+"px",d.style.width=h.width+"px",d.style.height=h.height+"px",document.body.appendChild(d),this.els.push(d)}}}return!!a.length},clearHilite:function(){for(this._hilite=null;this.els.length;){var e=this.els.pop();e.parentNode.removeChild(e)}}});t.a=new m}).call(this,n(25))},1057:function(e,t,n){"use strict";var i=n(3),a=n.n(i),o=n(0),s=n.n(o),r=(n(5),a.a.Model.extend({defaults:{selection:null},classPattern:/tmp/,tagPattern:/tmp/,load:function(){var e=this;return this._xhr||(this._xhr=s.a.get("/packs/theme_usage.json?t="+Date.now(),(function(t,n,i){t=JSON.parse(i.responseText.replace(/"(font-.*?)-family(?:-loaded)?"/g,'"$1-typeface"')),e.data=t;var a=Object.keys(t.by_rule),o=a.filter((function(e){return"."===e[0]})).map((function(e){return e.slice(1)})),s=a.filter((function(e){return!/[\[\.#@]/.test(e[0])}));e.classPattern=new RegExp("(?:^| )("+o.join("|")+")(?: |$)"),e.tagPattern=new RegExp("^("+s.join("|")+")$")})).fail((function(){alert('No theme usage data available.\nRun "bin/webpack" to generate it.')}))),this._xhr.promise()},hasSelection:function(){return!!this.attributes.selection},getVarsForSelection:function(){return this.getVarsForRule(this.get("selection"))},getRulesForSelection:function(e){var t=this.get("selection");return e=e.replace(/_/g,"-"),this.data&&(this.data.by_rule[t]||{})[e]||[]},getVarsForRule:function(e){var t=[];return this.data&&(t=(t=(t=Object.keys(this.data.by_rule[e]||{})).reduce((function(e,t){if(/-family-loaded$/.test(t)){var n=t.split("-").slice(0,-2).join("-");e.push(n+"-family",n+"-webfont")}else e.push(t);return e}),[])).map((function(e){return e.replace(/-/g,"_")}))),t},getRulesForVar:function(e){var t=[];if(this.data){var n=this.data.by_var;t=n[e.replace(/_/g,"-")]||n[e.replace(/-/g,"_")]||[]}return t},getSelectedRulesForVar:function(e){return this.hasSelection()?this.getRulesForSelection(e):this.getRulesForVar(e).sort()}}));t.a=new r},1078:function(e,t){e.exports='<select class="uri-select">\n  <% for (var i = 0; i<data.group_components.length; i++ ) {%>\n    <% if (data.uri === data.group_components[i].uri) { %>\n      <option value="<%= data.group_components[i].uri %>" selected >\n    <% } else { %>\n      <option value="<%= data.group_components[i].uri %>">\n    <% } %>\n    <%= data.group_components[i].name %></option>\n  <% } %>\n</select>\n'},1079:function(e,t){e.exports="<div>JSON Editor is loading</div>\n"},1080:function(e,t){e.exports='<div class="c-presto-component-editor">\n  <div class="c-presto-component-editor__select-stub"></div>\n  <div class="c-presto-component-editor__editor-stub"></div>\n</div>\n'},1081:function(e,t){e.exports='<div id="theme-editor" class="c-theme-editor">\n  <svg width="0" height="0" style="position:absolute"><symbol viewBox="0 0 17.12 17.12" id="icon-reset"><path d="M8,4.809V2.25c0-0.256-0.098-0.512-0.293-0.708C7.512,1.347,7.256,1.25,7,1.25 S6.488,1.347,6.293,1.542L0,7.75l6.293,6.207C6.488,14.152,6.744,14.25,7,14.25s0.512-0.098,0.707-0.293S8,13.505,8,13.25v-2.489 c2.75,0.068,5.755,0.566,8,3.989v-1C16,9.117,12.5,5.307,8,4.809z"/></symbol></svg>\n  <header>\n    <h1>Edit Theme</h1>\n    <svg id="theme-editor__collapse"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-norgie-down"></use></svg>\n  </header>\n  <div id="theme-editor__utils">\n    <button id="theme-editor__target" class="p-button">\n      <svg viewBox="0 0 296.991 296.991"><path d="M281.991,133.496h-13.445c-6.8-54.74-50.31-98.25-105.05-105.05V15c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v13.446\n  c-54.74,6.8-98.25,50.31-105.05,105.05H15.001c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h13.445\n  c6.8,54.74,50.31,98.25,105.05,105.05v13.445c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-13.445\n  c54.74-6.8,98.25-50.31,105.05-105.05h13.445c8.284,0,15-6.716,15-15C296.991,140.212,290.275,133.496,281.991,133.496z\n   M163.496,238.232V191c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v47.232c-38.172-6.36-68.376-36.564-74.736-74.736h47.231\n  c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15H58.76c6.36-38.172,36.564-68.376,74.736-74.736v47.231c0,8.284,6.716,15,15,15\n  c8.284,0,15-6.716,15-15V58.76c38.172,6.36,68.376,36.564,74.736,74.736h-47.231c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15\n  h47.231C231.872,201.668,201.667,231.872,163.496,238.232z"/></svg>\n    </button>\n    <button id="theme-editor__save" class="p-button">Save</button>\n  </div>\n  <span id="theme-editor__resize"></span>\n</div>\n'},1082:function(e,t){e.exports='<% if (data.isSelection) { %>\n  <ul class="tree">\n  <% data.tree.forEach(function(node, index) { %>\n    <% if (index > 0) { %>\n      <li><a href="#" data-theme-tree="<%= index %>"><%= node.rule %></a></li>\n    <% } else { %>\n      <li><b><%= node.rule %></b></li>\n    <% } %>\n  <% }) %>\n  </ul>\n<% } else { %>\n  <h4><%= data.selector %></h4>\n  <p class="info-message">press "s" to select</p>\n  <ul class="col-<%= data.cols %>">\n  <% data.vars.forEach(function(varName) { %>\n    <% if (!/_loaded$/.test(varName)) { %>\n    <li>\n      <% if (/^color_/.test(varName)) { %>\n        <span class="swatch" style="background:<%= data.theme.getVarValue(varName) %>;"></span>\n      <% } else { %>\n        <span class="swatch"></span>\n      <% } %>\n      <%= varName.replace(/_/g, \'-\') %>\n    </li>\n    <% } %>\n  <% }) %>\n  </ul>\n<% } %>\n'},1083:function(e,t){e.exports='<% if (data.selection) { %>\n  <div class="c-theme-editor__selection"><button data-ui="deselect">\xd7</button>&nbsp;<%= data.selection %></div>\n<% } %>\n<fieldset class="c-theme-editor__scopes">\n  <% data.scopes.forEach(function(scope) { %>\n  <label>\n    <% if (scope.checked) { %>\n      <input type="radio" name="theme-scope" value="<%= scope.index %>" class="level" checked="checked">\n    <% } else { %>\n      <input type="radio" name="theme-scope" value="<%= scope.index %>" class="level">\n    <% } %>\n    <span class="<%= scope.isHost ? \'c-theme-editor__scopes-host\' : \'\' %>"><%= scope.label %></span>\n  </label>\n  <% }) %>\n  <% if (!data.selection) { %>\n    <select class="category">\n      <% data.categories.forEach(function(c) { %>\n        <% if (c.selected) { %>\n          <option value="<%= c.name %>" selected="selected"><%= c.name %></option>\n        <% } else { %>\n          <option value="<%= c.name %>"><%= c.name %></option>\n        <% } %>\n      <% }) %>\n    </select>\n  <% } %>\n</fieldset>\n<% data.vars.forEach(function(v) { %>\n  <fieldset class="c-theme-editor__var">\n    <div class="c-theme-editor__var-row">\n      <span class="c-theme-editor__var-label">\n        <svg class="c-theme-editor__toggle" data-usage="<%= v.name %>"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-norgie-down"></use></svg>\n        <label for="<%= v.name %>" data-usage="<%= v.name %>"><%= v.label %></label>\n      </span>\n      <% if (v.options) { %>\n        <select name="<%= v.name %>" id="<%= v.name %>" class="variable <%= v.overridden ? \'overridden\' : \'\' %>">\n          <% [""].concat(Object.keys(v.options)).forEach(function(option) { %>\n            <% var placeholder = (v.placeholder[0] === \'>\') ? v.placeholder : \'Auto (\'+v.placeholder+\')\' %>\n            <% if (option === v.localValue) { %>\n              <option value="<%= option %>" selected="selected"><%= option || placeholder %></option>\n            <% } else { %>\n              <option value="<%= option %>"><%= option || placeholder %></option>\n            <% } %>\n          <% }) %>\n        </select>\n      <% } else { %>\n        <input type="text" name="<%= v.name %>" id="<%= v.name %>" class="variable <%= v.overridden ? \'overridden\' : \'\' %>" placeholder="<%= v.placeholder %>" value="<%= v.text %>">\n      <% } %>\n      <span class="c-theme-editor__swatch <%= v.changed ? \'changed\' : \'\' %>" id="swatch-<%= v.name %>" data-reset="<%= v.name %>" style="background:<%= /^color_/.test(v.name) ? v.value : \'rgba(0,0,0,0.05)\' %>;">\n        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-reset"></use></svg>\n      </span>\n    </div>\n    <div class="c-theme-editor__usage" data-ui="usage">\n      <p><%= v.help %></p>\n      <ul></ul>\n    </div>\n  </fieldset>\n<% }) %>\n'},185:function(e,t,n){"use strict";var i=n(3),a=n.n(i),o=n(1),s=a.a.Model.extend({defaults:{cellName:null,view:"display",markup:null},reload:function(){this._req=!1,this.collection.load()}}),r=a.a.Collection.extend({model:s,endpoint:"/services/delayed_load_cells?cells=",initialize:function(){this.listenTo(this,"add",this.load)},load:o.a.debounce((function(){for(var e=this,t=this.models.filter((function(e){return!e._req})).map((function(t){return t._req=!0,e.loadTokenForModel(t)})).sort(),n=t.length-1;n>=0;n-=1)t[n]!==t[n-1]&&t[n]||t.splice(n,1);t.length&&(this.url=this.endpoint+encodeURIComponent("["+t.map((function(e){return'"'+e+'"'})).join(",")+"]"),this.fetch())}),250),parse:function(e){return this.models.map((function(t){return e.hasOwnProperty(t.cid)?t.set("markup",e[t.cid]):t}))},loadTokenForModel:function(e){return e.cid+"/"+e.get("cellName")+"/"+e.get("view")},addCell:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n={cellName:e,view:t},i=this.findWhere(n);return i||this.add(n)}});t.a=new r},186:function(e,t,n){"use strict";var i=n(3),a=n.n(i),o=n(1),s=a.a.Model.extend({defaults:{id:null,permitted:null,edit_url:null},reload:function(){this._req=!1,this.collection.load()}}),r=a.a.Collection.extend({model:s,endpoint:"/services/entry_permissions?entry_ids=",initialize:function(){this.listenTo(this,"add",this.load)},load:o.a.debounce((function(){for(var e=this.models.filter((function(e){return!e._req})).map((function(e){return e._req=!0,e.get("id")})).sort(),t=e.length-1;t>=0;t-=1)e[t]!==e[t-1]&&e[t]||e.splice(t,1);e.length&&(this.url=this.endpoint+e.join(":"),this.fetch())}),250),parse:function(e){return this.models.map((function(t){return e.hasOwnProperty(t.id)?t.set(e[t.id]):t}))}});t.a=new r},202:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(185),s=n(2),r=n(22),c=n(26);s.b.readyTask((function(){var e=o.a.addCell("UnisonHubAdminMenu","display");e.on("change",(function(){a()(e.get("markup")).appendTo("body").on("click","[data-emc-admin], [href*=increment_network_cache]",(function(e){e.preventDefault(),e.currentTarget.href.includes("increment_network_cache")?a.a.ajax({method:"POST",url:e.currentTarget.href}).error((function(){alert("error incrementing cache")})).success((function(e){alert("cache updated (version ".concat(e.cache_version," )"))})):r.a.overlay({ajax:a()(e.currentTarget).attr("href")}).ajaxForms().fail((function(){c.a.error("Error updating cell. Please check that all fields are complete.")}))}))}))}));var l=n(3),h=n.n(l),u=n(1),d=h.a.Model.extend({defaults:{slug:null,bucket:null,permitted:null},editUrl:function(){return"/editorially_managed_cells/handle_edit?slug=".concat(this.get("slug"),"&bucket=").concat(this.get("bucket"))},reload:function(){this._req=!1,this.collection.load()}}),f=new(h.a.Collection.extend({model:d,endpoint:"/editorially_managed_cells/check_permissions?slugs=",initialize:function(){this.listenTo(this,"add",this.load)},load:u.a.debounce((function(){for(var e=this.models.filter((function(e){return!e._req})).map((function(e){return e._req=!0,e.get("slug")})).sort(),t=e.length-1;t>=0;t-=1)e[t]!==e[t-1]&&e[t]||e.splice(t,1);e.length&&(this.url=this.endpoint+e.join(":"),this.fetch())}),250),parse:function(e){return this.models.map((function(t){var n=t.get("slug");return e.hasOwnProperty(n)?t.set(e[n]):t}))}})),p=h.a.View.extend({svgInit:!1,initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var e=!!this.$el.children().length;this.model.get("permitted")&&!e?(this.$el.append('<svg><use xlink:href="#icon-settings"></use></svg>Edit EMC Settings'),this.$el.addClass("is-active p-button"),this.$el.attr("href",this.model.editUrl())):!this.model.get("permitted")&&e&&(this.$el.empty(),this.$el.removeAttr("href"))},events:{click:"onClick"},onClick:function(e){e.preventDefault(),r.a.dialog({ajax:this.model.editUrl()})}});s.b.registerComponent("tools/emc_admin_button",(function(e,t){if(/(\?|&)edit[-_]emc/.test(location.search)){var n=f.add(t);new p({el:e,model:n})}}));var g=n(23),m=n(4),v=h.a.Model.extend(g.a.extend({urls:{components_for_group:"/admin/entries/fetch_presto_components_for_group",schema_for_uri:"/admin/entries/fetch_presto_schema"},defaults:{community_id:"",uri:"",schema:null,group:"",group_components:[],component_data:{}},ajaxOptions:{xhrFields:{withCredentials:!0}},setContext:function(e){var t=this;m.f.fetch().then((function(){t.set({community_id:m.a.get("id")}),e()}))},loadGroupData:function(){var e=this,t=a.a.Deferred();return this.setContext((function(){e.ajax("components_for_group",{data:{group:e.get("group"),community_id:e.get("community_id")},dataType:"json",success:function(n){e.set("group_components",n),t.resolve()}})})),t.promise()},loadSchemaData:function(){var e=this,t=a.a.Deferred();return this.setContext((function(){e.ajax("schema_for_uri",{data:{uri:e.get("uri"),community_id:e.get("community_id")},dataType:"json",success:function(n){e.set("schema",n),t.resolve()}})})),t.promise()}})),_=n(1077),b=n(13),y=h.a.View.extend({selectTmpl:Object(b.a)(n(1078)),loadingTmpl:Object(b.a)(n(1079)),mainTmpl:Object(b.a)(n(1080)),events:{"change select.uri-select":"handleURISelect"},handleURISelect:function(e){this.model.set("uri",e.currentTarget.options[e.currentTarget.selectedIndex].value)},handleURIChange:function(){var e=this;this.model.get("uri")&&this.model.loadSchemaData().done((function(){e.createEditor()}))},initialize:function(){var e=this;this.$el.html(this.mainTmpl()),this.model.get("group")&&this.model.loadGroupData().done((function(){e.createSelectFromGroup()})),this.model.get("uri")&&this.handleURIChange(),this.model.on("change:uri",(function(){e.handleURIChange()}))},createSelectFromGroup:function(){this.$el.find(".c-presto-component-editor__select-stub").html(this.selectTmpl({group_components:this.model.get("group_components"),uri:this.model.get("uri")})).find("select").trigger("change")},createEditor:function(){var e=this;this.jsonEditor&&this.jsonEditor.destroy(),this.jsonEditor=new _.JSONEditor(this.$el.find(".c-presto-component-editor__editor-stub")[0],{schema:this.model.get("schema"),startval:this.model.get("component_data"),no_additional_properties:!0,remove_empty_properties:!1}),this.jsonEditor.on("change",(function(){e.model.set("component_data",e.jsonEditor.getValue(),{silent:!0}),e.model.trigger("change:component_data change")}))}});s.b.registerComponent("tools/presto_component_editor",{build:function(e){var t=new v(e);return new y({model:t})}});var w=h.a.Model.extend(g.a.extend({urls:{update:"/editorially_managed_cells/handle_update"},defaults:{bucket:"",slug:"",emcHTML:""},ajaxOptions:{method:"post",dataType:"html"},submit:function(e){return this.ajax("update",{data:e,success:function(e){this.set("emcHTML",e)},error:function(){alert("There was an error updating this cell. Please check your URL and/or that all fields are completed.")}})}})),x=h.a.View.extend({$body:a()("body"),$form:null,updateEMC:function(){r.a.close(),this.$body.find('.chorus-emc__content[data-emc-slug="'+this.model.get("slug")+'"][data-emc-bucket="'+this.model.get("bucket")+'"]').html(this.model.get("emcHTML"))},handleButtonClick:function(e){e.preventDefault();var t={};this.$form.serializeArray().map((function(e){t[e.name]=e.value})),t.button_action=a()(e.currentTarget).data("emc-action"),this.model.submit(t)},events:{"click [data-emc-action]":"handleButtonClick"},initialize:function(){var e=this;this.$form=this.$el.closest("form"),this.model.on("change:emcHTML",(function(){e.updateEMC()}))}});s.b.registerComponent("tools/emc_edit_control",(function(e,t){var n=new w({bucket:t.bucket,slug:t.slug});new x({el:e,model:n})}));var k=h.a.View.extend({$dataInput:null,componentEditor:null,setData:function(e){this.$dataInput.val(JSON.stringify(e))},handleEditorchange:function(e){this.setData(e),this.checkPinnedItems(e)},checkPinnedItems:function(e){var t=0;e.communities_pinned&&(t+=1),e.nav_items.forEach((function(e){e.pinned&&(t+=1)})),3===t?this.$el.find('select[name*="[pinned]"]').each((function(){1!=a()(this).val()&&a()(this).prop("disabled","disabled")})):this.$el.find('select[name*="[pinned]').each((function(){a()(this).removeAttr("disabled")}))},initialize:function(){var e=this;this.$dataInput=this.$el.find('input[name="presto_component_data"]');var t=this.$dataInput.val()||"{}";this.componentEditor=s.b.get("tools/presto_component_editor").build({uri:"site/nav_list",component_data:JSON.parse(t)}),this.$el.append(this.componentEditor.$el),this.componentEditor.model.on("change:component_data",(function(){t=e.componentEditor.model.get("component_data"),e.handleEditorchange(t)}))}});s.b.registerComponent("tools/emc_edit_topics_menu",(function(e,t){new k({el:e})}));var T=h.a.View.extend({swapValues:function(e,t){var n=e.find("input"),i=t.find("input");n.each((function(e){var t=a()(this),n=a()(i[e]),o=n.val();n.val(t.val()),t.val(o)}))},handleUpClick:function(e){var t=a()(e.currentTarget).closest("li"),n=t.prev("li");this.swapValues(t,n)},handleDownClick:function(e){var t=a()(e.currentTarget).closest("li"),n=t.next("li");this.swapValues(t,n)},events:{"click .reorderable-list .up":"handleUpClick","click .reorderable-list .down":"handleDownClick"}});s.b.registerComponent("tools/emc_edit_mma_promo",(function(e,t){new T({el:e})}));var S=n(186),C=h.a.View.extend({svgInit:!1,initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var e=!!this.$el.children().length;this.model.get("permitted")&&!e?(this.$el.append('<svg class="is-active"><use xlink:href="#icon-settings"></use></svg>'),this.$el.attr("href",this.model.get("edit_url"))):!this.model.get("permitted")&&e&&(this.$el.empty(),this.$el.removeAttr("href"))},events:{"click svg.is-active":"onClick"},onClick:function(e){e.preventDefault(),r.a.dialog({ajax:"/services/entry_admin_modal?unison_context=true&entry_id="+this.model.get("id")})}});s.b.registerComponent("tools/entry_admin_button",(function(e,t){m.e.fetch().then((function(){if(m.e.get("can_admin")){var n=S.a.add(t);new C({el:e,model:n})}}))}),{priority:s.b.LOW});var E=h.a.View.extend({handleButtonClick:function(e){e.preventDefault();var t=a()(e.currentTarget),n=t.attr("href"),i=t.data("method").toLowerCase(),o=t.data("confirm");o&&!confirm(o)||("modal"===i?r.a.dialog({ajax:n}):"post"===i?(t.html(t.data("active-text")),a.a.ajax({method:"POST",url:n,dataType:"text",complete:function(){location.reload(!0)}})):location.href=n)},events:{"click [data-method],[data-confirm]":"handleButtonClick"}});s.b.registerComponent("tools/entry_admin_menu",(function(e){new E({el:e})}),{priority:s.b.LOW});var V=n(9),j=n(5),$=new(h.a.Model.extend({users:[],url:null,urls:{1:"/accesses/network_admin:network:",2:"/accesses/network_admin:communities:"},defaults:{version:""},initialize:function(){var e=this;m.f.fetch().then((function(){window.addEventListener("beforeunload",e.exit.bind(e)),e.listenTo(j.a,"change:scope",e.update),e.update()}))},update:function(){var e=this,t=j.a.get("scope");if(clearTimeout(this.tick),this.urls[t]){var n=this.urls[t]+(1===t?m.c:m.a).id;n!==this.url&&this.exit(),this.url=n,this.xhr=a.a.post(this.url).done((function(n){e.xhr=null,e.users=n,e.set("version",[t].concat(n.map((function(e){return e.id})).sort()).join(":")),e.tick=setTimeout(e.update.bind(e),5e3)}))}else this.tick=setTimeout(this.update.bind(this),5e3)},exit:function(){clearTimeout(this.tick),this.xhr&&this.xhr.abort(),this.url&&(a.a.ajax(this.url,{method:"delete"}),this.url=null),this.set("version","",{silent:!0}),this.users=[]},getUsers:function(){return this.users.map((function(e){return e.first_name+" "+e.last_name}))}})),O=n(1081),D=n.n(O),N=n(1056),M=u.a.extend({update:u.a.debounce((function(){for(var e={},t=document.querySelectorAll("[data-chorus-theme]"),n=0;n<t.length;n+=1)e[t[n].getAttribute("data-chorus-theme")]=t[n];j.a.preview(Object.keys(e)).done((function(t){Object.keys(e).forEach((function(n){if(t.hasOwnProperty(n)){var i=document.createElement("style"),a=e[n];i.innerHTML=t[n],i.setAttribute("data-chorus-theme",n),a.parentNode.replaceChild(i,a)}e[n]=null}))})).fail((function(e){alert(e)}))}),10)},h.a.Events);M.listenTo(j.a,"change:variable change:diff change:sync",M.update);var L=n(1057),R=n(1083),P=n.n(R),A=h.a.View.extend({attributes:{id:"theme-editor__form"},initialize:function(){var e=this;j.a.fetch().done((function(){e.listenTo(L.a,"change:selection",e.render),e.listenTo(j.a,"change:scope change:category change:diff",e.render),e.listenTo(j.a,"change:variable",e.renderVars),e.listenTo(j.a,"change:sync",e.renderSync),e.render()})).fail((function(t){e.$el.html(t)}))},render:function(){this.tmpl=this.tmpl||Object(b.a)(P.a);var e=L.a.getVarsForSelection(),t=this.tmpl({vars:j.a.getVarListData(e.length?e.sort():null),scopes:j.a.getScopeListData(),categories:j.a.getCategoriesData(),category:j.a.get("category"),selection:L.a.get("selection")});return this.$el.html(t).scrollTop(0)},renderVars:function(e){var t=this,n=j.a.getVarDependencies(e);j.a.getVarListData(n).forEach((function(e){var n=t.$("#"+e.name),i=t.$("#swatch-"+e.name).toggleClass("changed",e.changed);n.val()!==e.text&&n.val(e.text),/^color_/.test(e.name)&&i.attr("style","background:"+e.value)}))},renderSync:function(){var e=this.$el.scrollTop();this.render().scrollTop(e)},events:{"change input.level":"scope","change .variable":"update","change select.category":"category",'click [data-ui="deselect"]':"deselect","click [data-reset]":"reset","click [data-usage]":"usageTopClick","mouseover label[data-usage]":"usageTopOver","mouseout label[data-usage]":"usageTopOut","click [data-theme-usage]":"usageSubClick","mouseover [data-theme-usage]":"usageSubOver","mouseout [data-theme-usage]":"usageSubOut"},scope:function(e){j.a.set({scope:Number(this.$(e.currentTarget).val())})},update:function(e){var t=this.$(e.target);j.a.setVar(t.attr("name"),t.val())},usageTopClick:function(e){var t=this.$(e.currentTarget),n=t.closest("fieldset"),i=n.hasClass("expanded"),a=t.attr("data-usage");i?(e.preventDefault(),e.stopPropagation()):L.a.load().then((function(){var e=L.a.getSelectedRulesForVar(a),t=L.a.hasSelection()?"detail":"toplevel",i=e.map((function(e){return"<li><span data-theme-usage>"+e+"</span></li>"})).join("");n.find('[data-ui="usage"] ul').addClass(t).html(i)})),n.toggleClass("expanded",!i)},usageTopOver:function(e){var t=this.$(e.currentTarget),n=t.closest("fieldset").hasClass("expanded"),i=t.attr("data-usage");n||L.a.load().then((function(){var t=L.a.getSelectedRulesForVar(i);N.a.hilite(t.join(","))&&(e.currentTarget.className="hilite")}))},usageTopOut:function(e){N.a.hilite(null),e.currentTarget.className=""},usageSubClick:function(e){N.a.target({hilite:!0})},usageSubOver:function(e){N.a.hilite(e.currentTarget.innerText)&&(e.currentTarget.className="hilite")},usageSubOut:function(e){N.a.hilite(null),e.currentTarget.className=""},deselect:function(){L.a.set({selection:null})},reset:function(e){var t=this.$(e.currentTarget);t.hasClass("changed")&&j.a.resetVar(t.attr("data-reset"))},category:function(e){j.a.set("category",e.target.value)}}),F=h.a.View.extend({el:D.a,initialize:function(){this.$el.append((new A).el),this.listenTo(N.a,"change:target",this.render),this.listenTo($,"change",this.renderAccess),this.listenTo(j.a,"warning",this.warning),this.enableLayout()},enableLayout:function(){var e,t="chorus-theme-editor",n=u.a.extend({left:15,top:15,height:300,width:280},V.b.get(t)||{}),i=this.$el;this.$("h1").on("mousedown",(function(o){o.preventDefault(),e={x:o.clientX,y:o.clientY};var s=a()(document).on("mousemove.theme-editor",(function(t){t.preventDefault(),i.css({left:n.left+(t.clientX-e.x),top:n.top+(t.clientY-e.y)})})).on("mouseup.theme-editor",(function(a){a.preventDefault(),n.left=n.left+(a.clientX-e.x),n.top=n.top+(a.clientY-e.y),i.css(n),s.off("mousemove.theme-editor mouseup.theme-editor"),V.b.set(t,n)}))})),this.$("#theme-editor__resize").on("mousedown",(function(o){o.preventDefault(),e={x:o.clientX,y:o.clientY};var s=a()(document).on("mousemove.theme-editor",(function(t){t.preventDefault(),i.css({height:n.height+(t.clientY-e.y),width:Math.max(280,n.width+(t.clientX-e.x))})})).on("mouseup.theme-editor",(function(a){a.preventDefault(),n.height=n.height+(a.clientY-e.y),n.width=Math.max(280,n.width+(a.clientX-e.x)),i.css(n),s.off("mousemove.theme-editor mouseup.theme-editor"),V.b.set(t,n)}))})),i.css(n)},render:function(){this.$("#theme-editor__target").toggleClass("active",N.a.targetEnabled())},renderAccess:function(){this.$access=this.$access||a()('<div id="theme-editor__access"></div>').appendTo("body"),this.$access.html("<b>ALSO EDITING:</b> "+$.getUsers().join(", ")),this.$access.toggle(!!$.getUsers().length)},events:{"click #theme-editor__save":"save","click #theme-editor__target":"target","click #theme-editor__collapse":"collapse"},save:function(e){e.preventDefault();if(confirm(["You are about to save REAL LIVE DATA.","Your changes will be immediately visible to the public.","Are you sure you want to do this?"].join("\n"))&&"SAVE"===prompt(["Seriously, this will change the site.",'Enter "SAVE" (all caps) to confirm.'].join("\n"))){var t=this.$("#theme-editor__save");t.prop("disabled",!0).text("Saving..."),j.a.save().done((function(){setTimeout((function(){t.prop("disabled",!1).text("Save")}),500)})).fail((function(e){t.prop("disabled",!1).text("Save"),alert(e)}))}},target:function(e){e.preventDefault(),N.a.target(!N.a.targetEnabled())},collapse:function(e){e.preventDefault(),this.$el.toggleClass("collapsed")},warning:function(e){e+='<label style="font-size:0.75em;margin-left:15px;"><input type="checkbox"> don\'t warn me again</label>',c.a.warning(e).$el.on("change",'input[type="checkbox"]',(function(e){j.a.set("warnings",!e.target.checked)}))}});s.b.readyTask((function(){if(/(\?|&|#)(theme_editor|edit_theme)$/.test(location.href)){var e=new F;document.body.appendChild(e.el)}}))},5:function(e,t,n){"use strict";var i=n(179),a=n.n(i),o=n(3),s=n.n(o),r=n(0),c=n.n(r),l=n(1),h=n(9),u="chorus-theme-editor-clients",d="chorus-theme-editor-sync",f='Theme data not loaded. Wrap this request in a "fetch" call.';function p(e){return void 0!==e&&null!==e&&""!==e}var g=new(s.a.Model.extend({categories:["colors","fonts","other"],hostScope:2,scopes:null,diff:null,uuid:null,defaults:{scope:null,warnings:!0,category:"colors"},initialize:function(){var e=this,t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};this.uuid=[t()+t(),t(),t(),t(),t()+t()+t()].join("-");var n=h.b.get(u)||[];h.b.set(u,n.concat([this.uuid])),n.length&&this.pullSync(),window.addEventListener("beforeunload",(function(){var t=(h.b.get(u)||[]).filter((function(t){return t!==e.uuid}));h.b.set(u,t),t.length||h.b.remove(d)})),window.addEventListener("storage",l.a.debounce((function(t){t.key===d&&e.pullSync()})),25)},getError:function(e){switch(e.status){case 403:return"Sorry, you're not permitted to access this feature.";default:return"Oops, something went wrong. Check your data input."}},getScope:function(){return this.scopes[this.get("scope")]||null},rootScope:function(){return this.scopes[0]},seed:function(e){var t=this;this.data=e,this.scopes=e.scopes,this.hostScope=e.current_scope,this.set({scope:this.hostScope}),Object.keys(this.data.meta).forEach((function(e){t.categories.indexOf(t.data.meta[e].category)<0&&(t.data.meta[e].category=t.categories[t.categories.length-1])})),this.setDiff()},fetch:function(){var e=this;return this._load||(this._load=c.a.Deferred(),c.a.ajax({url:"/services/theme",method:"get",complete:function(t){e.seed(JSON.parse(t.responseText)),e._load.resolve()},error:function(t){e._load.reject(e.getError(t)),delete e._load}})),this._load.promise()},save:function(){var e=this;return this._save||(this._save=c.a.Deferred(),c.a.ajax({url:"/services/theme",method:"post",data:{scopes:this.getDiff()},complete:function(t){e.setDiff(),e.pushSync(),e._save.resolve(t.responseText),delete e._save},error:function(t){e._save.reject(e.getError(t)),delete e._save}})),this._save.promise()},preview:function(e){var t=this;this._preview&&(this._preview.abort(),delete this._preview);var n=c.a.Deferred();return this._preview=c.a.ajax({url:"/services/theme/preview",method:"post",data:{templates:e,scopes:this.getDiff()},complete:function(e){delete t._preview,n.resolve(JSON.parse(e.responseText))},error:function(e){delete t._preview,n.reject(t.getError(e))}}),n.promise()},isConfigQuery:function(e){return 0===String(e).indexOf("?!")},parseConfigQuery:function(e){return this.isConfigQuery(e)?e.replace("?!","").split("&").reduce((function(e,t){return e[(t=t.split("="))[0]]=t[1]||null,e}),{}):null},fallbackSettingsFor:function(e){var t=this.parseConfigQuery(this.rootScope()[e])||{};return this.rootScope().hasOwnProperty(t.fallback)?t:null},renderTransform:function(e,t){return e&&(t.lighten&&(e=a()(e).lighten(Number(t.lighten)).toString()),t.darken&&(e=a()(e).darken(Number(t.darken)).toString())),e},setDiff:function(){if(!this.scopes)throw f;this.diff=[];for(var e=0;e<this.scopes.length;e+=1)this.diff[e]=l.a.extend({},this.scopes[e]);return this.trigger("change:diff"),this.diff},getDiff:function(){var e=this;if(!this.scopes)throw f;var t=[];return this.diff.forEach((function(n,i){var a=e.scopes[i];t[i]={},Object.keys(a).forEach((function(e){n[e]!==a[e]&&(t[i][e]=a[e])}))})),t},pushSync:function(){h.b.set(d,{diff:this.diff,delta:this.getDiff()})},pullSync:function(){var e=this,t=h.b.get(d);t&&t.diff&&t.delta&&this.fetch().then((function(){var n=[];e.diff.forEach((function(i,a){Object.keys(i).forEach((function(i){e.diff[a][i]!==t.diff[a][i]&&n.push("change:diff")}))})),e.scopes.forEach((function(i,a){Object.keys(i).forEach((function(o){var s=t.delta[a][o],r=e.diff[a][o],c=i[o];(s&&c!==s||!s&&c!==r)&&n.push("change:sync")}))})),e.diff=t.diff,e.diff.forEach((function(t,n){e.scopes[n]=l.a.extend({},e.diff[n])})),t.delta.forEach((function(n,i){Object.keys(n).forEach((function(n){e.scopes[i][n]=t.delta[i][n]}))})),e.trigger(n.join(" "))}))},getDiffRender:function(){var e=this;if(!this.scopes)throw f;var t=this.getDiff().reduce((function(e,t){return l.a.extend(e,t)}),{});return Object.keys(t).forEach((function(n){e.getVarDependencies(n).forEach((function(n){t[n]=e.getVarValue(n,e.scopes.length-1)}))})),t},getCategoriesData:function(){var e=this;return this.categories.map((function(t){return{name:t,selected:e.get("category")===t}}))},getScopeListData:function(){if(!this.scopes)throw f;for(var e=[],t=1;t<this.scopes.length;t+=1)e.push({index:t,label:this.data.scope_names[t],checked:this.get("scope")===t,isHost:this.hostScope===t});return e},getVarNames:function(e){var t=this;if(!this.scopes)throw f;var n=Object.keys(this.rootScope()).sort();return e&&e.category&&(n=n.filter((function(n){return t.data.meta[n].category===e.category}))),n},getVarListData:function(e){var t=this;if(!this.scopes)throw f;var n=Math.max(1,this.get("scope")),i=this.data.meta||{};return(e=e||this.getVarNames({category:this.get("category")})).map((function(e){var a=i[e]||{};return{name:e,label:e.replace(/_/g,"-"),overridden:t.getVarOverrideStatus(e,n),changed:t.getVarChangeStatus(e,n),placeholder:t.getVar(e,n-1),text:t.getVar(e,n,!1)||"",localValue:t.getVarValue(e,n,!1),value:t.getVarValue(e,t.scopes.length-1),options:a.options||null,help:a.help||""}}))},resetVar:function(e,t){if(!this.scopes)throw f;t="number"===typeof t?t:this.get("scope"),this.setVar(e,this.diff[t][e],t)},setVar:function(e,t,n){if(!this.scopes)throw f;if(n="number"===typeof n?n:this.get("scope"),this.scopes[n][e]!==t&&(this.scopes[n][e]=t,this.trigger("change:variable",e),this.pushSync(),this.get("warnings")&&this.hostScope!==n&&this.diff[n][e]!==t)){var i=this.data.scope_names[this.hostScope],a=this.data.scope_names[n];this.trigger("warning","WARNING: you just set a "+a+" variable while editing at the "+i+" scope.")}},getVar:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!this.scopes)throw f;void 0===t&&(t=this.scopes.length-1);for(var i=this.fallbackSettingsFor(e),a=t;a>=0;a-=1){var o=this.scopes[a][e];if(p(o)||!n)return this.isConfigQuery(o)&&i&&(o="> "+i.fallback.replace(/_/g,"-"),i.lighten&&(o+="(+".concat(i.lighten,")")),i.darken&&(o+="(-".concat(i.darken,")"))),String(o||"").replace(/["']/g,"&quot;")}return""},getVarValue:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!this.scopes)throw f;void 0===t&&(t=this.scopes.length-1);for(var i=this,a=function e(t,a){var o=i.scopes[a][t],s=i.fallbackSettingsFor(t);return p(o)&&!i.isConfigQuery(o)||(n&&s?(o=e(s.fallback,a),o=i.renderTransform(o,s)):o=""),o},o=t;o>=0;o-=1){var s=a(e,o);if(p(s)||!n)break}return s},getVarOverrideStatus:function(e,t){if(!this.scopes)throw f;if(t<this.scopes.length-1)for(var n=this.getVarAncestors(e),i=t+1;i<this.scopes.length;i+=1)for(var a=0;a<n.length;a+=1){if(p(this.scopes[i][n[a]]))return!0}return!1},getVarChangeStatus:function(e,t){if(!this.scopes)throw f;return this.scopes[t][e]!==this.diff[t][e]},getDependencyGraph:function(){var e=this;return this.graph=this.graph||this.getVarNames().reduce((function(t,n){var i=e.fallbackSettingsFor(n);return i&&(t[n]=t[n]||{dependents:[]},t[i.fallback]=t[i.fallback]||{dependents:[]},t[n].ancestor=i.fallback,t[i.fallback].dependents.push(n)),t}),{}),this.graph},getVarDependencies:function(e){if(!this.scopes)throw f;var t=this.getDependencyGraph();return Object.keys(function e(n,i){return n[i]=!0,t.hasOwnProperty(i)&&t[i].dependents.forEach((function(t){n.hasOwnProperty(t)||e(n,t)})),n}({},e))},getVarAncestors:function(e){if(!this.scopes)throw f;var t=this.getDependencyGraph();return Object.keys(function e(n,i){return n[i]=!0,t.hasOwnProperty(i)&&t[i].ancestor&&e(n,t[i].ancestor),n}({},e))}}));window.theme=g,t.a=g}}]);
//# sourceMappingURL=77-cca49286eb5c5aba63d4.chunk.js.map