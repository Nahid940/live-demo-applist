(this.webpackJsonpitemlist=this.webpackJsonpitemlist||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),m=a.n(i),l=(a(14),a(15),a(16),a(6)),c=a(4),s=a(5),o=a(1),u=a(8),h=a(7),d=(a(17),a(18),function(e){var t=e.items,a=e.removeItem;return r.a.createElement("div",{className:"item-list"},"Item List",r.a.createElement("span",{className:"right-span total-item"},t.length," Item(s)"),r.a.createElement("table",{className:"item-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sl"),r.a.createElement("th",null,"Item Name"),r.a.createElement("th",null,"Action"))),r.a.createElement("thead",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("a",{onClick:function(){return a(t)},className:"cancle-btn"},"X")))})))))}),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={items:[],error:""},e.itemName=Object(n.createRef)(),e.handleSubmit=e.handleSubmit.bind(Object(o.a)(e)),e.removeItem=e.removeItem.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){if(e.preventDefault(),""!=this.itemName.current.value){var t={id:Date.now(),name:this.itemName.current.value};this.checkDuplicate(this.state.items,this.itemName.current.value)?(this.setState({items:[].concat(Object(l.a)(this.state.items),[t])}),this.itemName.current.value="",this.setState({error:""})):this.setState({error:"Item already added !!"})}else this.setState({error:"Write an item name !!"})}},{key:"checkDuplicate",value:function(e,t){return!e.find((function(e){return e.name==t}))}},{key:"removeItem",value:function(e){var t=this.state.items.filter((function(t,a){return a!=e}));this.setState({items:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"add-item-form"},r.a.createElement("form",{action:"",method:"post",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:""},"Add New Item "),r.a.createElement("span",{className:"error-text"},this.state.error),r.a.createElement("div",{className:"form-items"},r.a.createElement("input",{type:"text",ref:this.itemName,placeholder:"Item Name",name:"item"}),r.a.createElement("button",{type:"submit",className:"submit-btn"},"Add"))),r.a.createElement(d,{items:this.state.items,removeItem:this.removeItem}))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.77eb38bd.chunk.js.map