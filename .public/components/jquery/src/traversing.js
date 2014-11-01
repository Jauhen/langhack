function sibling(e,t){while((e=e[t])&&e.nodeType!==1);return e}function winnow(e,t,n){if(jQuery.isFunction(t))return jQuery.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return jQuery.grep(e,function(e){return e===t!==n});if(typeof t=="string"){if(isSimple.test(t))return jQuery.filter(t,e,n);t=jQuery.filter(t,e)}return jQuery.grep(e,function(e){return core_indexOf.call(t,e)>=0!==n})}var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};jQuery.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if(typeof e!="string")return this.pushStack(jQuery(e).filter(function(){for(t=0;t<i;t++)if(jQuery.contains(r[t],this))return!0}));for(t=0;t<i;t++)jQuery.find(e,r[t],n);return n=this.pushStack(i>1?jQuery.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=jQuery(e,this),n=t.length;return this.filter(function(){var e=0;for(;e<n;e++)if(jQuery.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(winnow(this,e||[],!0))},filter:function(e){return this.pushStack(winnow(this,e||[],!1))},is:function(e){return!!winnow(this,typeof e=="string"&&rneedsContext.test(e)?jQuery(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,s=[],o=rneedsContext.test(e)||typeof e!="string"?jQuery(e,t||this.context):0;for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:n.nodeType===1&&jQuery.find.matchesSelector(n,e))){n=s.push(n);break}return this.pushStack(s.length>1?jQuery.unique(s):s)},index:function(e){return e?typeof e=="string"?core_indexOf.call(jQuery(e),this[0]):core_indexOf.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?jQuery(e,t):jQuery.makeArray(e&&e.nodeType?[e]:e),r=jQuery.merge(this.get(),n);return this.pushStack(jQuery.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),jQuery.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return jQuery.dir(e,"parentNode")},parentsUntil:function(e,t,n){return jQuery.dir(e,"parentNode",n)},next:function(e){return sibling(e,"nextSibling")},prev:function(e){return sibling(e,"previousSibling")},nextAll:function(e){return jQuery.dir(e,"nextSibling")},prevAll:function(e){return jQuery.dir(e,"previousSibling")},nextUntil:function(e,t,n){return jQuery.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return jQuery.dir(e,"previousSibling",n)},siblings:function(e){return jQuery.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return jQuery.sibling(e.firstChild)},contents:function(e){return e.contentDocument||jQuery.merge([],e.childNodes)}},function(e,t){jQuery.fn[e]=function(n,r){var i=jQuery.map(this,t,n);return e.slice(-5)!=="Until"&&(r=n),r&&typeof r=="string"&&(i=jQuery.filter(r,i)),this.length>1&&(guaranteedUnique[e]||jQuery.unique(i),rparentsprev.test(e)&&i.reverse()),this.pushStack(i)}}),jQuery.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),t.length===1&&r.nodeType===1?jQuery.find.matchesSelector(r,e)?[r]:[]:jQuery.find.matches(e,jQuery.grep(t,function(e){return e.nodeType===1}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&e.nodeType!==9)if(e.nodeType===1){if(i&&jQuery(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});