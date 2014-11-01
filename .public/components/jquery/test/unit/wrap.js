(function(){function e(e){return e}function t(e){return function(){return e}}function n(e){expect(19);var t,n,r,i,s;t="Try them out:",n=jQuery("#first").wrap(e("<div class='red'><span></span></div>")).text(),equal(t,n,"Check for wrapping of on-the-fly html"),ok(jQuery("#first").parent().parent().is(".red"),"Check if wrapper has class 'red'"),QUnit.reset(),n=jQuery("#first").wrap(e(document.getElementById("empty"))).parent(),ok(n.is("ol"),"Check for element wrapping"),equal(n.text(),t,"Check for element wrapping"),QUnit.reset(),jQuery("#check1").on("click",function(){var t=this;ok(t.checked,"Checkbox's state is erased after wrap() action, see #769"),jQuery(t).wrap(e("<div id='c1' style='display:none;'></div>")),ok(t.checked,"Checkbox's state is erased after wrap() action, see #769")}).prop("checked",!1)[0].click(),r=jQuery("#nonnodes").contents(),r.wrap(e("<i></i>")),equal(jQuery("#nonnodes > i").length,jQuery("#nonnodes")[0].childNodes.length,"Check node,textnode,comment wraps ok"),equal(jQuery("#nonnodes > i").text(),r.text(),"Check node,textnode,comment wraps doesn't hurt text"),s=0;for(i in jQuery.cache)s++;r=jQuery("<label/>").wrap(e("<li/>")),equal(r[0].nodeName.toUpperCase(),"LABEL","Element is a label"),equal(r[0].parentNode.nodeName.toUpperCase(),"LI","Element has been wrapped");for(i in jQuery.cache)s--;equal(s,0,"No memory leak in jQuery.cache (bug #7165)"),r=jQuery("<span/>").wrap("<div>test</div>"),equal(r[0].previousSibling.nodeType,3,"Make sure the previous node is a text element"),equal(r[0].parentNode.nodeName.toUpperCase(),"DIV","And that we're in the div element."),r=jQuery("<div><span></span></div>").children().wrap("<p></p><div></div>"),equal(r[0].parentNode.parentNode.childNodes.length,1,"There should only be one element wrapping."),equal(r.length,1,"There should only be one element (no cloning)."),equal(r[0].parentNode.nodeName.toUpperCase(),"P","The span should be in the paragraph."),r=jQuery("<span/>").wrap(jQuery("<div></div>")),equal(r[0].parentNode.nodeName.toLowerCase(),"div","Wrapping works."),n=jQuery("<div></div>").on("click",function(){ok(!0,"Event triggered."),n.off(),jQuery(this).off()}),r=jQuery("<span/>").wrap(n),equal(r[0].parentNode.nodeName.toLowerCase(),"div","Wrapping works."),r.parent().trigger("click"),QUnit.reset()}function r(e){expect(8);var t,n,r;t=jQuery("#firstp")[0].previousSibling,n=jQuery("#firstp,#first")[0].parentNode,r=jQuery("#firstp,#first").wrapAll(e("<div class='red'><div class='tmp'></div></div>")),equal(r.parent().length,1,"Check for wrapping of on-the-fly html"),ok(jQuery("#first").parent().parent().is(".red"),"Check if wrapper has class 'red'"),ok(jQuery("#firstp").parent().parent().is(".red"),"Check if wrapper has class 'red'"),equal(jQuery("#first").parent().parent()[0].previousSibling,t,"Correct Previous Sibling"),equal(jQuery("#first").parent().parent()[0].parentNode,n,"Correct Parent"),QUnit.reset(),t=jQuery("#firstp")[0].previousSibling,n=jQuery("#first")[0].parentNode,jQuery("#firstp,#first").wrapAll(e(document.getElementById("empty"))),equal(jQuery("#first").parent()[0],jQuery("#firstp").parent()[0],"Same Parent"),equal(jQuery("#first").parent()[0].previousSibling,t,"Correct Previous Sibling"),equal(jQuery("#first").parent()[0].parentNode,n,"Correct Parent")}function i(e){expect(11);var t,n=jQuery("<div/>");t=jQuery("#first").children().length,jQuery("#first").wrapInner(e("<div class='red'><div id='tmp'></div></div>")),equal(jQuery("#first").children().length,1,"Only one child"),ok(jQuery("#first").children().is(".red"),"Verify Right Element"),equal(jQuery("#first").children().children().children().length,t,"Verify Elements Intact"),QUnit.reset(),t=jQuery("#first").html("foo<div>test</div><div>test2</div>").children().length,jQuery("#first").wrapInner(e("<div class='red'><div id='tmp'></div></div>")),equal(jQuery("#first").children().length,1,"Only one child"),ok(jQuery("#first").children().is(".red"),"Verify Right Element"),equal(jQuery("#first").children().children().children().length,t,"Verify Elements Intact"),QUnit.reset(),t=jQuery("#first").children().length,jQuery("#first").wrapInner(e(document.getElementById("empty"))),equal(jQuery("#first").children().length,1,"Only one child"),ok(jQuery("#first").children().is("#empty"),"Verify Right Element"),equal(jQuery("#first").children().children().length,t,"Verify Elements Intact"),n.wrapInner(e("<span></span>")),equal(n.children().length,1,"The contents were wrapped."),equal(n.children()[0].nodeName.toLowerCase(),"span","A span was inserted.")}if(!jQuery.fn.wrap)return;module("wrap",{teardown:moduleTeardown}),test("wrap(String|Element)",function(){n(e)}),test("wrap(Function)",function(){n(t)}),test("wrap(Function) with index (#10177)",function(){var e=0,t=jQuery("#qunit-fixture p");expect(t.length),t.wrap(function(t){return equal(t,e,"Check if the provided index ("+t+") is as expected ("+e+")"),e++,"<div id='wrap_index_'"+t+"'></div>"})}),test("wrap(String) consecutive elements (#10177)",function(){var e=jQuery("#qunit-fixture p");expect(e.length*2),e.wrap("<div class='wrapper'></div>"),e.each(function(){var e=jQuery(this);ok(e.parent().is(".wrapper"),"Check each elements parent is correct (.wrapper)"),equal(e.siblings().length,0,"Each element should be wrapped individually")})}),test("wrapAll(String|Element)",function(){r(e)}),test("wrapInner(String|Element)",function(){i(e)}),test("wrapInner(Function)",function(){i(t)}),test("unwrap()",function(){expect(9),jQuery("body").append("  <div id='unwrap' style='display: none;'> <div id='unwrap1'> <span class='unwrap'>a</span> <span class='unwrap'>b</span> </div> <div id='unwrap2'> <span class='unwrap'>c</span> <span class='unwrap'>d</span> </div> <div id='unwrap3'> <b><span class='unwrap unwrap3'>e</span></b> <b><span class='unwrap unwrap3'>f</span></b> </div> </div>");var e=jQuery("#unwrap1 > span, #unwrap2 > span").get(),t=jQuery("#unwrap span").get();equal(jQuery("#unwrap1 span").add("#unwrap2 span:first-child").unwrap().length,3,"make #unwrap1 and #unwrap2 go away"),deepEqual(jQuery("#unwrap > span").get(),e,"all four spans should still exist"),deepEqual(jQuery("#unwrap3 span").unwrap().get(),jQuery("#unwrap3 > span").get(),"make all b in #unwrap3 go away"),deepEqual(jQuery("#unwrap3 span").unwrap().get(),jQuery("#unwrap > span.unwrap3").get(),"make #unwrap3 go away"),deepEqual(jQuery("#unwrap").children().get(),t,"#unwrap only contains 6 child spans"),deepEqual(jQuery("#unwrap > span").unwrap().get(),jQuery("body > span.unwrap").get(),"make the 6 spans become children of body"),deepEqual(jQuery("body > span.unwrap").unwrap().get(),jQuery("body > span.unwrap").get(),"can't unwrap children of body"),deepEqual(jQuery("body > span.unwrap").unwrap().get(),t,"can't unwrap children of body"),deepEqual(jQuery("body > span.unwrap").get(),t,"body contains 6 .unwrap child spans"),jQuery("body > span.unwrap").remove()}),test("jQuery(<tag>) & wrap[Inner/All]() handle unknown elems (#10667)",function(){expect(2);var e=jQuery("<div id='wrap-target'>Target</div>").appendTo("#qunit-fixture"),t=jQuery("<section>").appendTo("#qunit-fixture");e.wrapAll("<aside style='background-color:green'></aside>"),notEqual(e.parent("aside").get(0).style.backgroundColor,"transparent","HTML5 elements created with wrapAll inherit styles"),notEqual(t.get(0).style.backgroundColor,"transparent","HTML5 elements create with jQuery( string ) inherit styles")}),test("wrapping scripts (#10470)",function(){expect(2);var e=document.createElement("script");e.text=e.textContent="ok( !document.eval10470, 'script evaluated once' ); document.eval10470 = true;",document.eval10470=!1,jQuery("#qunit-fixture").empty()[0].appendChild(e),jQuery("#qunit-fixture script").wrap("<b></b>"),strictEqual(e.parentNode,jQuery("#qunit-fixture > b")[0],"correctly wrapped"),jQuery(e).remove()})})();