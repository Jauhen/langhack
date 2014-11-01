module("traversing",{teardown:moduleTeardown}),test("find(String)",function(){expect(1),equal(jQuery("#foo").find(".blogTest").text(),"Yahoo","Basic selector")}),test("find(String) under non-elements",function(){expect(2);var e=jQuery("#nonnodes").contents();equal(e.find("div").length,0,"Check node,textnode,comment to find zero divs"),equal(e.find("div").addBack().length,3,"Check node,textnode,comment to find zero divs, but preserves pushStack")}),test("find(leading combinator)",function(){expect(4),deepEqual(jQuery("#qunit-fixture").find("> div").get(),q("foo","nothiddendiv","moretests","tabindex-tests","liveHandlerOrder","siblingTest","fx-test-group"),"find child elements"),deepEqual(jQuery("#qunit-fixture").find("> #foo, > #moretests").get(),q("foo","moretests"),"find child elements"),deepEqual(jQuery("#qunit-fixture").find("> #foo > p").get(),q("sndp","en","sap"),"find child elements"),deepEqual(jQuery("#siblingTest, #siblingfirst").find("+ *").get(),q("siblingnext","fx-test-group"),"ensure document order")}),test("find(node|jQuery object)",function(){expect(12);var e=jQuery("#foo"),t=jQuery(".blogTest"),n=jQuery("#first"),r=t.add(n),i=e.add(t);equal(e.find(t).text(),"Yahoo","Find with blog jQuery object"),equal(e.find(t[0]).text(),"Yahoo","Find with blog node"),equal(e.find(n).length,0,"#first is not in #foo"),equal(e.find(n[0]).length,0,"#first not in #foo (node)"),ok(e.find(r).is(".blogTest"),"Find returns only nodes within #foo"),ok(i.find(t).is(".blogTest"),"Blog is part of the collection, but also within foo"),ok(i.find(t[0]).is(".blogTest"),"Blog is part of the collection, but also within foo(node)"),equal(r.find(e).length,0,"Foo is not in two elements"),equal(r.find(e[0]).length,0,"Foo is not in two elements(node)"),equal(r.find(n).length,0,"first is in the collection and not within two"),equal(r.find(n).length,0,"first is in the collection and not within two(node)"),equal(r.find(e[0]).addBack().length,2,"find preserves the pushStack, see #12009")}),test("is(String|undefined)",function(){expect(23),ok(jQuery("#form").is("form"),"Check for element: A form must be a form"),ok(!jQuery("#form").is("div"),"Check for element: A form is not a div"),ok(jQuery("#mark").is(".blog"),"Check for class: Expected class 'blog'"),ok(!jQuery("#mark").is(".link"),"Check for class: Did not expect class 'link'"),ok(jQuery("#simon").is(".blog.link"),"Check for multiple classes: Expected classes 'blog' and 'link'"),ok(!jQuery("#simon").is(".blogTest"),"Check for multiple classes: Expected classes 'blog' and 'link', but not 'blogTest'"),ok(jQuery("#en").is('[lang="en"]'),"Check for attribute: Expected attribute lang to be 'en'"),ok(!jQuery("#en").is('[lang="de"]'),"Check for attribute: Expected attribute lang to be 'en', not 'de'"),ok(jQuery("#text1").is('[type="text"]'),"Check for attribute: Expected attribute type to be 'text'"),ok(!jQuery("#text1").is('[type="radio"]'),"Check for attribute: Expected attribute type to be 'text', not 'radio'"),ok(jQuery("#text2").is(":disabled"),"Check for pseudoclass: Expected to be disabled"),ok(!jQuery("#text1").is(":disabled"),"Check for pseudoclass: Expected not disabled"),ok(jQuery("#radio2").is(":checked"),"Check for pseudoclass: Expected to be checked"),ok(!jQuery("#radio1").is(":checked"),"Check for pseudoclass: Expected not checked"),ok(!jQuery("#foo").is(0),"Expected false for an invalid expression - 0"),ok(!jQuery("#foo").is(null),"Expected false for an invalid expression - null"),ok(!jQuery("#foo").is(""),'Expected false for an invalid expression - ""'),ok(!jQuery("#foo").is(undefined),"Expected false for an invalid expression - undefined"),ok(!jQuery("#foo").is({plain:"object"}),"Check passing invalid object"),ok(jQuery("#en").is('[lang="en"],[lang="de"]'),"Comma-separated; Check for lang attribute: Expect en or de"),ok(jQuery("#en").is('[lang="de"],[lang="en"]'),"Comma-separated; Check for lang attribute: Expect en or de"),ok(jQuery("#en").is('[lang="en"] , [lang="de"]'),"Comma-separated; Check for lang attribute: Expect en or de"),ok(jQuery("#en").is('[lang="de"] , [lang="en"]'),"Comma-separated; Check for lang attribute: Expect en or de")}),test("is() against non-elements (#10178)",function(){expect(14);var e,t,n,r=jQuery(document),i=["a","*"],s={text:document.createTextNode(""),comment:document.createComment(""),document:document,window:window,array:[],"plain object":{},"function":function(){}};for(e in s){r[0]=s[e];for(t=0;t<i.length;t++)n=i[t],ok(!r.is(n),e+' does not match "'+n+'"')}}),test("is(jQuery)",function(){expect(19),ok(jQuery("#form").is(jQuery("form")),"Check for element: A form is a form"),ok(!jQuery("#form").is(jQuery("div")),"Check for element: A form is not a div"),ok(jQuery("#mark").is(jQuery(".blog")),"Check for class: Expected class 'blog'"),ok(!jQuery("#mark").is(jQuery(".link")),"Check for class: Did not expect class 'link'"),ok(jQuery("#simon").is(jQuery(".blog.link")),"Check for multiple classes: Expected classes 'blog' and 'link'"),ok(!jQuery("#simon").is(jQuery(".blogTest")),"Check for multiple classes: Expected classes 'blog' and 'link', but not 'blogTest'"),ok(jQuery("#en").is(jQuery('[lang="en"]')),"Check for attribute: Expected attribute lang to be 'en'"),ok(!jQuery("#en").is(jQuery('[lang="de"]')),"Check for attribute: Expected attribute lang to be 'en', not 'de'"),ok(jQuery("#text1").is(jQuery('[type="text"]')),"Check for attribute: Expected attribute type to be 'text'"),ok(!jQuery("#text1").is(jQuery('[type="radio"]')),"Check for attribute: Expected attribute type to be 'text', not 'radio'"),ok(!jQuery("#text1").is(jQuery("input:disabled")),"Check for pseudoclass: Expected not disabled"),ok(jQuery("#radio2").is(jQuery("input:checked")),"Check for pseudoclass: Expected to be checked"),ok(!jQuery("#radio1").is(jQuery("input:checked")),"Check for pseudoclass: Expected not checked"),ok(jQuery("#form").is(jQuery("form")[0]),"Check for element: A form is a form"),ok(!jQuery("#form").is(jQuery("div")[0]),"Check for element: A form is not a div"),ok(jQuery("#mark").is(jQuery(".blog")[0]),"Check for class: Expected class 'blog'"),ok(!jQuery("#mark").is(jQuery(".link")[0]),"Check for class: Did not expect class 'link'"),ok(jQuery("#simon").is(jQuery(".blog.link")[0]),"Check for multiple classes: Expected classes 'blog' and 'link'"),ok(!jQuery("#simon").is(jQuery(".blogTest")[0]),"Check for multiple classes: Expected classes 'blog' and 'link', but not 'blogTest'")}),test("is() with :has() selectors",function(){expect(6),ok(jQuery("#foo").is(":has(p)"),"Check for child: Expected a child 'p' element"),ok(!jQuery("#foo").is(":has(ul)"),"Check for child: Did not expect 'ul' element"),ok(jQuery("#foo").is(":has(p):has(a):has(code)"),"Check for childs: Expected 'p', 'a' and 'code' child elements"),ok(!jQuery("#foo").is(":has(p):has(a):has(code):has(ol)"),"Check for childs: Expected 'p', 'a' and 'code' child elements, but no 'ol'"),ok(jQuery("#foo").is(jQuery("div:has(p)")),"Check for child: Expected a child 'p' element"),ok(!jQuery("#foo").is(jQuery("div:has(ul)")),"Check for child: Did not expect 'ul' element")}),test("is() with positional selectors",function(){expect(27);var e=jQuery("<p id='posp'><a class='firsta' href='#'><em>first</em></a><a class='seconda' href='#'><b>test</b></a><em></em></p>").appendTo("#qunit-fixture"),t=function(e,t,n){equal(jQuery(e).is(t),n,"jQuery('"+e+"').is('"+t+"')")};t("#posp","p:last",!0),t("#posp","#posp:first",!0),t("#posp","#posp:eq(2)",!1),t("#posp","#posp a:first",!1),t("#posp .firsta","#posp a:first",!0),t("#posp .firsta","#posp a:last",!1),t("#posp .firsta","#posp a:even",!0),t("#posp .firsta","#posp a:odd",!1),t("#posp .firsta","#posp a:eq(0)",!0),t("#posp .firsta","#posp a:eq(9)",!1),t("#posp .firsta","#posp em:eq(0)",!1),t("#posp .firsta","#posp em:first",!1),t("#posp .firsta","#posp:first",!1),t("#posp .seconda","#posp a:first",!1),t("#posp .seconda","#posp a:last",!0),t("#posp .seconda","#posp a:gt(0)",!0),t("#posp .seconda","#posp a:lt(5)",!0),t("#posp .seconda","#posp a:lt(1)",!1),t("#posp em","#posp a:eq(0) em",!0),t("#posp em","#posp a:lt(1) em",!0),t("#posp em","#posp a:gt(1) em",!1),t("#posp em","#posp a:first em",!0),t("#posp em","#posp a em:last",!0),t("#posp em","#posp a em:eq(2)",!1),ok(jQuery("#option1b").is("#select1 option:not(:first)"),"POS inside of :not() (#10970)"),ok(jQuery(e[0]).is("p:last"),"context constructed from a single node (#13797)"),ok(!jQuery(e[0]).find("#firsta").is("a:first"),"context derived from a single node (#13797)")}),test("index()",function(){expect(2),equal(jQuery("#text2").index(),2,"Returns the index of a child amongst its siblings"),equal(jQuery("<div/>").index(),-1,"Node without parent returns -1")}),test("index(Object|String|undefined)",function(){expect(16);var e=jQuery([window,document]),t=jQuery("#radio1,#radio2,#check1,#check2");equal(e.index(window),0,"Check for index of elements"),equal(e.index(document),1,"Check for index of elements"),equal(t.index(document.getElementById("radio1")),0,"Check for index of elements"),equal(t.index(document.getElementById("radio2")),1,"Check for index of elements"),equal(t.index(document.getElementById("check1")),2,"Check for index of elements"),equal(t.index(document.getElementById("check2")),3,"Check for index of elements"),equal(t.index(window),-1,"Check for not found index"),equal(t.index(document),-1,"Check for not found index"),equal(e.index(e),0,"Pass in a jQuery object"),equal(e.index(e.eq(1)),1,"Pass in a jQuery object"),equal(jQuery("#form input[type='radio']").index(jQuery("#radio2")),1,"Pass in a jQuery object"),equal(jQuery("#text2").index(),2,"Check for index amongst siblings"),equal(jQuery("#form").children().eq(4).index(),4,"Check for index amongst siblings"),equal(jQuery("#radio2").index("#form input[type='radio']"),1,"Check for index within a selector"),equal(jQuery("#form input[type='radio']").index(jQuery("#radio2")),1,"Check for index within a selector"),equal(jQuery("#radio2").index("#form input[type='text']"),-1,"Check for index not found within a selector")}),test("filter(Selector|undefined)",function(){expect(9),deepEqual(jQuery("#form input").filter(":checked").get(),q("radio2","check1"),"filter(String)"),deepEqual(jQuery("p").filter("#ap, #sndp").get(),q("ap","sndp"),"filter('String, String')"),deepEqual(jQuery("p").filter("#ap,#sndp").get(),q("ap","sndp"),"filter('String,String')"),deepEqual(jQuery("p").filter(null).get(),[],"filter(null) should return an empty jQuery object"),deepEqual(jQuery("p").filter(undefined).get(),[],"filter(undefined) should return an empty jQuery object"),deepEqual(jQuery("p").filter(0).get(),[],"filter(0) should return an empty jQuery object"),deepEqual(jQuery("p").filter("").get(),[],"filter('') should return an empty jQuery object");var e=jQuery("#nonnodes").contents();equal(e.filter("span").length,1,"Check node,textnode,comment to filter the one span"),equal(e.filter("[name]").length,0,"Check node,textnode,comment to filter the one span")}),test("filter(Function)",function(){expect(2),deepEqual(jQuery("#qunit-fixture p").filter(function(){return!jQuery("a",this).length}).get(),q("sndp","first"),"filter(Function)"),deepEqual(jQuery("#qunit-fixture p").filter(function(e,t){return!jQuery("a",t).length}).get(),q("sndp","first"),"filter(Function) using arg")}),test("filter(Element)",function(){expect(1);var e=document.getElementById("text1");deepEqual(jQuery("#form input").filter(e).get(),q("text1"),"filter(Element)")}),test("filter(Array)",function(){expect(1);var e=[document.getElementById("text1")];deepEqual(jQuery("#form input").filter(e).get(),q("text1"),"filter(Element)")}),test("filter(jQuery)",function(){expect(1);var e=jQuery("#text1");deepEqual(jQuery("#form input").filter(e).get(),q("text1"),"filter(Element)")}),test("filter() with positional selectors",function(){expect(19);var e=function(e,t,n){equal(jQuery(e).filter(t).length,n,"jQuery( "+e+" ).filter( "+t+" )")};jQuery("<p id='posp'><a class='firsta' href='#'><em>first</em></a><a class='seconda' href='#'><b>test</b></a><em></em></p>").appendTo("#qunit-fixture"),e("#posp","#posp:first",1),e("#posp","#posp:eq(2)",0),e("#posp","#posp a:first",0),e("#posp .firsta","#posp a:first",1),e("#posp .firsta","#posp a:last",1),e("#posp .firsta","#posp a:last-child",0),e("#posp .firsta","#posp a:even",1),e("#posp .firsta","#posp a:odd",0),e("#posp .firsta","#posp a:eq(0)",1),e("#posp .firsta","#posp a:eq(9)",0),e("#posp .firsta","#posp em:eq(0)",0),e("#posp .firsta","#posp em:first",0),e("#posp .firsta","#posp:first",0),e("#posp .seconda","#posp a:first",1),e("#posp .seconda","#posp em:first",0),e("#posp .seconda","#posp a:last",1),e("#posp .seconda","#posp a:gt(0)",0),e("#posp .seconda","#posp a:lt(5)",1),e("#posp .seconda","#posp a:lt(1)",1)}),test("closest()",function(){expect(13);var e;deepEqual(jQuery("body").closest("body").get(),q("body"),"closest(body)"),deepEqual(jQuery("body").closest("html").get(),q("html"),"closest(html)"),deepEqual(jQuery("body").closest("div").get(),[],"closest(div)"),deepEqual(jQuery("#qunit-fixture").closest("span,#html").get(),q("html"),"closest(span,#html)"),e=jQuery("#nothiddendivchild"),deepEqual(e.closest("html",document.body).get(),[],"Context limited."),deepEqual(e.closest("body",document.body).get(),[],"Context limited."),deepEqual(e.closest("#nothiddendiv",document.body).get(),q("nothiddendiv"),"Context not reached."),equal(jQuery("#qunit-fixture p").closest("#qunit-fixture").length,1,"Closest should return a unique set"),equal(jQuery("<div><p></p></div>").find("p").closest("table").length,0,"Make sure disconnected closest work."),equal(jQuery("<div foo='bar'></div>").closest("[foo]").length,1,"Disconnected nodes with attribute selector"),equal(jQuery("<div>text</div>").closest("[lang]").length,0,"Disconnected nodes with text and non-existent attribute selector"),ok(!jQuery(document).closest("#foo").length,"Calling closest on a document fails silently"),e=jQuery("<div>text</div>"),deepEqual(e.contents().closest("*").get(),e.get(),"Text node input (#13332)")}),test("closest() with positional selectors",function(){expect(2),deepEqual(jQuery("#qunit-fixture").closest("div:first").get(),[],"closest(div:first)"),deepEqual(jQuery("#qunit-fixture div").closest("body:first div:last").get(),q("fx-tests"),"closest(body:first div:last)")}),test("closest(jQuery)",function(){expect(8);var e=jQuery("#nothiddendivchild"),t=jQuery("#nothiddendiv"),n=jQuery("#foo"),r=jQuery("body");ok(e.closest(t).is("#nothiddendiv"),"closest( jQuery('#nothiddendiv') )"),ok(e.closest(t[0]).is("#nothiddendiv"),"closest( jQuery('#nothiddendiv') ) :: node"),ok(e.closest(e).is("#nothiddendivchild"),"child is included"),ok(e.closest(e[0]).is("#nothiddendivchild"),"child is included  :: node"),equal(e.closest(document.createElement("div")).length,0,"created element is not related"),equal(e.closest(n).length,0,"Sibling not a parent of child"),equal(e.closest(n[0]).length,0,"Sibling not a parent of child :: node"),ok(e.closest(r.add(t)).is("#nothiddendiv"),"Closest ancestor retrieved.")}),test("not(Selector|undefined)",function(){expect(11),equal(jQuery("#qunit-fixture > p#ap > a").not("#google").length,2,"not('selector')"),deepEqual(jQuery("p").not(".result").get(),q("firstp","ap","sndp","en","sap","first"),"not('.class')"),deepEqual(jQuery("p").not("#ap, #sndp, .result").get(),q("firstp","en","sap","first"),"not('selector, selector')"),deepEqual(jQuery("#ap *").not("code").get(),q("google","groups","anchor1","mark"),"not('tag selector')"),deepEqual(jQuery("#ap *").not("code, #mark").get(),q("google","groups","anchor1"),"not('tag, ID selector')"),deepEqual(jQuery("#ap *").not("#mark, code").get(),q("google","groups","anchor1"),"not('ID, tag selector')");var e=jQuery("p").get();deepEqual(jQuery("p").not(null).get(),e,"not(null) should have no effect"),deepEqual(jQuery("p").not(undefined).get(),e,"not(undefined) should have no effect"),deepEqual(jQuery("p").not(0).get(),e,"not(0) should have no effect"),deepEqual(jQuery("p").not("").get(),e,"not('') should have no effect"),deepEqual(jQuery("#form option").not("option.emptyopt:contains('Nothing'),optgroup *,[value='1']").get(),q("option1c","option1d","option2c","option2d","option3c","option3d","option3e","option4d","option4e","option5a","option5b"),"not('complex selector')")}),test("not(Element)",function(){expect(1);var e=jQuery("#form select");deepEqual(e.not(e[1]).get(),q("select1","select3","select4","select5"),"filter out DOM element")}),test("not(Function)",function(){expect(1),deepEqual(jQuery("#qunit-fixture p").not(function(){return jQuery("a",this).length}).get(),q("sndp","first"),"not(Function)")}),test("not(Array)",function(){expect(2),equal(jQuery("#qunit-fixture > p#ap > a").not(document.getElementById("google")).length,2,"not(DOMElement)"),equal(jQuery("p").not(document.getElementsByTagName("p")).length,0,"not(Array-like DOM collection)")}),test("not(jQuery)",function(){expect(1),deepEqual(jQuery("p").not(jQuery("#ap, #sndp, .result")).get(),q("firstp","en","sap","first"),"not(jQuery)")}),test("has(Element)",function(){expect(3);var e,t,n;e=jQuery("#qunit-fixture").has(jQuery("#sndp")[0]),deepEqual(e.get(),q("qunit-fixture"),"Keeps elements that have the element as a descendant"),t=jQuery("<a><b><i/></b></a>"),deepEqual(t.has(t.find("i")[0]).get(),t.get(),"...Even when detached"),n=jQuery("#qunit-fixture, #header").has(jQuery("#sndp")[0]),deepEqual(n.get(),q("qunit-fixture"),"Does not include elements that do not have the element as a descendant")}),test("has(Selector)",function(){expect(5);var e,t,n,r;e=jQuery("#qunit-fixture").has("#sndp"),deepEqual(e.get(),q("qunit-fixture"),"Keeps elements that have any element matching the selector as a descendant"),t=jQuery("<a><b><i/></b></a>"),deepEqual(t.has("i").get(),t.get(),"...Even when detached"),n=jQuery("#qunit-fixture, #header").has("#sndp"),deepEqual(n.get(),q("qunit-fixture"),"Does not include elements that do not have the element as a descendant"),n=jQuery("#select1, #select2, #select3").has("#option1a, #option3a"),deepEqual(n.get(),q("select1","select3"),"Multiple contexts are checks correctly"),r=jQuery("#qunit-fixture").has("#sndp, #first"),deepEqual(r.get(),q("qunit-fixture"),"Only adds elements once")}),test("has(Arrayish)",function(){expect(4);var e,t,n,r;e=jQuery("#qunit-fixture").has(jQuery("#sndp")),deepEqual(e.get(),q("qunit-fixture"),"Keeps elements that have any element in the jQuery list as a descendant"),t=jQuery("<a><b><i/></b></a>"),deepEqual(t.has(t.find("i")).get(),t.get(),"...Even when detached"),n=jQuery("#qunit-fixture, #header").has(jQuery("#sndp")),deepEqual(n.get(),q("qunit-fixture"),"Does not include elements that do not have an element in the jQuery list as a descendant"),r=jQuery("#qunit-fixture").has(jQuery("#sndp, #first")),deepEqual(r.get(),q("qunit-fixture"),"Only adds elements once")}),test("addBack()",function(){expect(5),deepEqual(jQuery("#en").siblings().addBack().get(),q("sndp","en","sap"),"Check for siblings and self"),deepEqual(jQuery("#foo").children().addBack().get(),q("foo","sndp","en","sap"),"Check for children and self"),deepEqual(jQuery("#sndp, #en").parent().addBack().get(),q("foo","sndp","en"),"Check for parent and self"),deepEqual(jQuery("#groups").parents("p, div").addBack().get(),q("qunit-fixture","ap","groups"),"Check for parents and self"),deepEqual(jQuery("#select1 > option").filter(":first-child").addBack(":last-child").get(),q("option1a","option1d"),"Should contain the last elems plus the *filtered* prior set elements")}),test("siblings([String])",function(){expect(6),deepEqual(jQuery("#en").siblings().get(),q("sndp","sap"),"Check for siblings"),deepEqual(jQuery("#nonnodes").contents().eq(1).siblings().get(),q("nonnodesElement"),"Check for text node siblings"),deepEqual(jQuery("#foo").siblings("form, b").get(),q("form","floatTest","lengthtest","name-tests","testForm"),"Check for multiple filters");var e=q("sndp","en","sap");deepEqual(jQuery("#en, #sndp").siblings().get(),e,"Check for unique results from siblings"),deepEqual(jQuery("#option5a").siblings("option[data-attr]").get(),q("option5c"),"Has attribute selector in siblings (#9261)"),equal(jQuery("<a/>").siblings().length,0,"Detached elements have no siblings (#11370)")}),test("siblings([String]) - jQuery only",function(){expect(2),deepEqual(jQuery("#sndp").siblings(":has(code)").get(),q("sap"),"Check for filtered siblings (has code child element)"),deepEqual(jQuery("#sndp").siblings(":has(a)").get(),q("en","sap"),"Check for filtered siblings (has anchor child element)")}),test("children([String])",function(){expect(2),deepEqual(jQuery("#foo").children().get(),q("sndp","en","sap"),"Check for children"),deepEqual(jQuery("#foo").children("#en, #sap").get(),q("en","sap"),"Check for multiple filters")}),test("children([String]) - jQuery only",function(){expect(1),deepEqual(jQuery("#foo").children(":has(code)").get(),q("sndp","sap"),"Check for filtered children")}),test("parent([String])",function(){expect(6);var e;equal(jQuery("#groups").parent()[0].id,"ap","Simple parent check"),equal(jQuery("#groups").parent("p")[0].id,"ap","Filtered parent check"),equal(jQuery("#groups").parent("div").length,0,"Filtered parent check, no match"),equal(jQuery("#groups").parent("div, p")[0].id,"ap","Check for multiple filters"),deepEqual(jQuery("#en, #sndp").parent().get(),q("foo"),"Check for unique results from parent"),e=jQuery("<div>text</div>"),deepEqual(e.contents().parent().get(),e.get(),"Check for parent of text node (#13265)")}),test("parents([String])",function(){expect(6),equal(jQuery("#groups").parents()[0].id,"ap","Simple parents check"),deepEqual(jQuery("#nonnodes").contents().eq(1).parents().eq(0).get(),q("nonnodes"),"Text node parents check"),equal(jQuery("#groups").parents("p")[0].id,"ap","Filtered parents check"),equal(jQuery("#groups").parents("div")[0].id,"qunit-fixture","Filtered parents check2"),deepEqual(jQuery("#groups").parents("p, div").get(),q("ap","qunit-fixture"),"Check for multiple filters"),deepEqual(jQuery("#en, #sndp").parents().get(),q("foo","qunit-fixture","dl","body","html"),"Check for unique results from parents")}),test("parentsUntil([String])",function(){expect(10);var e=jQuery("#groups").parents();deepEqual(jQuery("#groups").parentsUntil().get(),e.get(),"parentsUntil with no selector (nextAll)"),deepEqual(jQuery("#groups").parentsUntil(".foo").get(),e.get(),"parentsUntil with invalid selector (nextAll)"),deepEqual(jQuery("#groups").parentsUntil("#html").get(),e.slice(0,-1).get(),"Simple parentsUntil check"),equal(jQuery("#groups").parentsUntil("#ap").length,0,"Simple parentsUntil check"),deepEqual(jQuery("#nonnodes").contents().eq(1).parentsUntil("#html").eq(0).get(),q("nonnodes"),"Text node parentsUntil check"),deepEqual(jQuery("#groups").parentsUntil("#html, #body").get(),e.slice(0,3).get(),"Less simple parentsUntil check"),deepEqual(jQuery("#groups").parentsUntil("#html","div").get(),jQuery("#qunit-fixture").get(),"Filtered parentsUntil check"),deepEqual(jQuery("#groups").parentsUntil("#html","p,div,dl").get(),e.slice(0,3).get(),"Multiple-filtered parentsUntil check"),equal(jQuery("#groups").parentsUntil("#html","span").length,0,"Filtered parentsUntil check, no match"),deepEqual(jQuery("#groups, #ap").parentsUntil("#html","p,div,dl").get(),e.slice(0,3).get(),"Multi-source, multiple-filtered parentsUntil check")}),test("next([String])",function(){expect(6),equal(jQuery("#ap").next()[0].id,"foo","Simple next check"),equal(jQuery("<div>text<a id='element'></a></div>").contents().eq(0).next().attr("id"),"element","Text node next check"),equal(jQuery("#ap").next("div")[0].id,"foo","Filtered next check"),equal(jQuery("#ap").next("p").length,0,"Filtered next check, no match"),equal(jQuery("#ap").next("div, p")[0].id,"foo","Multiple filters"),equal(jQuery("body").next().length,0,"Simple next check, no match")}),test("prev([String])",function(){expect(5),equal(jQuery("#foo").prev()[0].id,"ap","Simple prev check"),deepEqual(jQuery("#nonnodes").contents().eq(1).prev().get(),q("nonnodesElement"),"Text node prev check"),equal(jQuery("#foo").prev("p")[0].id,"ap","Filtered prev check"),equal(jQuery("#foo").prev("div").length,0,"Filtered prev check, no match"),equal(jQuery("#foo").prev("p, div")[0].id,"ap","Multiple filters")}),test("nextAll([String])",function(){expect(5);var e=jQuery("#form").children();deepEqual(jQuery("#label-for").nextAll().get(),e.slice(1).get(),"Simple nextAll check"),equal(jQuery("<div>text<a id='element'></a></div>").contents().eq(0).nextAll().attr("id"),"element","Text node nextAll check"),deepEqual(jQuery("#label-for").nextAll("input").get(),e.slice(1).filter("input").get(),"Filtered nextAll check"),deepEqual(jQuery("#label-for").nextAll("input,select").get(),e.slice(1).filter("input,select").get(),"Multiple-filtered nextAll check"),deepEqual(jQuery("#label-for, #hidden1").nextAll("input,select").get(),e.slice(1).filter("input,select").get(),"Multi-source, multiple-filtered nextAll check")}),test("prevAll([String])",function(){expect(5);var e=jQuery(jQuery("#form").children().slice(0,12).get().reverse());deepEqual(jQuery("#area1").prevAll().get(),e.get(),"Simple prevAll check"),deepEqual(jQuery("#nonnodes").contents().eq(1).prevAll().get(),q("nonnodesElement"),"Text node prevAll check"),deepEqual(jQuery("#area1").prevAll("input").get(),e.filter("input").get(),"Filtered prevAll check"),deepEqual(jQuery("#area1").prevAll("input,select").get(),e.filter("input,select").get(),"Multiple-filtered prevAll check"),deepEqual(jQuery("#area1, #hidden1").prevAll("input,select").get(),e.filter("input,select").get(),"Multi-source, multiple-filtered prevAll check")}),test("nextUntil([String])",function(){expect(12);var e=jQuery("#form").children().slice(2,12);deepEqual(jQuery("#text1").nextUntil().get(),jQuery("#text1").nextAll().get(),"nextUntil with no selector (nextAll)"),equal(jQuery("<div>text<a id='element'></a></div>").contents().eq(0).nextUntil().attr("id"),"element","Text node nextUntil with no selector (nextAll)"),deepEqual(jQuery("#text1").nextUntil(".foo").get(),jQuery("#text1").nextAll().get(),"nextUntil with invalid selector (nextAll)"),deepEqual(jQuery("#text1").nextUntil("#area1").get(),e.get(),"Simple nextUntil check"),equal(jQuery("#text1").nextUntil("#text2").length,0,"Simple nextUntil check"),deepEqual(jQuery("#text1").nextUntil("#area1, #radio1").get(),jQuery("#text1").next().get(),"Less simple nextUntil check"),deepEqual(jQuery("#text1").nextUntil("#area1","input").get(),e.not("button").get(),"Filtered nextUntil check"),deepEqual(jQuery("#text1").nextUntil("#area1","button").get(),e.not("input").get(),"Filtered nextUntil check"),deepEqual(jQuery("#text1").nextUntil("#area1","button,input").get(),e.get(),"Multiple-filtered nextUntil check"),equal(jQuery("#text1").nextUntil("#area1","div").length,0,"Filtered nextUntil check, no match"),deepEqual(jQuery("#text1, #hidden1").nextUntil("#area1","button,input").get(),e.get(),"Multi-source, multiple-filtered nextUntil check"),deepEqual(jQuery("#text1").nextUntil("[class=foo]").get(),jQuery("#text1").nextAll().get(),"Non-element nodes must be skipped, since they have no attributes")}),test("prevUntil([String])",function(){expect(11);var e=jQuery("#area1").prevAll();deepEqual(jQuery("#area1").prevUntil().get(),e.get(),"prevUntil with no selector (prevAll)"),deepEqual(jQuery("#nonnodes").contents().eq(1).prevUntil().get(),q("nonnodesElement"),"Text node prevUntil with no selector (prevAll)"),deepEqual(jQuery("#area1").prevUntil(".foo").get(),e.get(),"prevUntil with invalid selector (prevAll)"),deepEqual(jQuery("#area1").prevUntil("label").get(),e.slice(0,-1).get(),"Simple prevUntil check"),equal(jQuery("#area1").prevUntil("#button").length,0,"Simple prevUntil check"),deepEqual(jQuery("#area1").prevUntil("label, #search").get(),jQuery("#area1").prev().get(),"Less simple prevUntil check"),deepEqual(jQuery("#area1").prevUntil("label","input").get(),e.slice(0,-1).not("button").get(),"Filtered prevUntil check"),deepEqual(jQuery("#area1").prevUntil("label","button").get(),e.slice(0,-1).not("input").get(),"Filtered prevUntil check"),deepEqual(jQuery("#area1").prevUntil("label","button,input").get(),e.slice(0,-1).get(),"Multiple-filtered prevUntil check"),equal(jQuery("#area1").prevUntil("label","div").length,0,"Filtered prevUntil check, no match"),deepEqual(jQuery("#area1, #hidden1").prevUntil("label","button,input").get(),e.slice(0,-1).get(),"Multi-source, multiple-filtered prevUntil check")}),test("contents()",function(){expect(12);var e,t;equal(jQuery("#ap").contents().length,9,"Check element contents"),ok(jQuery("#iframe").contents()[0],"Check existence of IFrame document"),e=jQuery("#loadediframe").contents()[0].body,ok(e,"Check existence of IFrame body"),equal(jQuery("span",e).text(),"span text","Find span in IFrame and check its text"),jQuery(e).append("<div>init text</div>"),equal(jQuery("div",e).length,2,"Check the original div and the new div are in IFrame"),equal(jQuery("div",e).last().text(),"init text","Add text to div in IFrame"),jQuery("div",e).last().text("div text"),equal(jQuery("div",e).last().text(),"div text","Add text to div in IFrame"),jQuery("div",e).last().remove(),equal(jQuery("div",e).length,1,"Delete the div and check only one div left in IFrame"),equal(jQuery("div",e).text(),"span text","Make sure the correct div is still left after deletion in IFrame"),jQuery("<table/>",e).append("<tr><td>cell</td></tr>").appendTo(e),jQuery("table",e).remove(),equal(jQuery("div",e).length,1,"Check for JS error on add and delete of a table in IFrame"),t=jQuery("#nonnodes").contents().contents(),equal(t.length,1,"Check node,textnode,comment contents is just one"),equal(t[0].nodeValue,"hi","Check node,textnode,comment contents is just the one from span")}),test("sort direction",function(){expect(12);var e=jQuery("#ap, #select1 > *, #moretests > form"),t={parent:!1,parents:!0,parentsUntil:!0,next:!1,prev:!1,nextAll:!1,prevAll:!0,nextUntil:!1,prevUntil:!0,siblings:!1,children:!1,contents:!1};jQuery.each(t,function(t,n){var r=e[t]().get(),i=jQuery.unique([].concat(r));deepEqual(r,n?i.reverse():i,"Correct sort direction for "+t)})}),test("add(String|Element|Array|undefined)",function(){expect(15);var e,t,n,r;deepEqual(jQuery("#sndp").add("#en").add("#sap").get(),q("sndp","en","sap"),"Check elements from document"),deepEqual(jQuery("#sndp").add(jQuery("#en")[0]).add(jQuery("#sap")).get(),q("sndp","en","sap"),"Check elements from document"),e=jQuery("<div/>").add("#sndp"),ok(e[0].parentNode,"Sort with the disconnected node last (started with disconnected first)."),e=jQuery("#sndp").add("<div/>"),ok(!e[1].parentNode,"Sort with the disconnected node last."),t=jQuery("<div/>"),n=jQuery([]).add(jQuery("<p id='x1'>xxx</p>").appendTo(t)).add(jQuery("<p id='x2'>xxx</p>").appendTo(t)),equal(n[0].id,"x1","Check on-the-fly element1"),equal(n[1].id,"x2","Check on-the-fly element2"),n=jQuery([]).add(jQuery("<p id='x1'>xxx</p>").appendTo(t)[0]).add(jQuery("<p id='x2'>xxx</p>").appendTo(t)[0]),equal(n[0].id,"x1","Check on-the-fly element1"),equal(n[1].id,"x2","Check on-the-fly element2"),n=jQuery([]).add(jQuery("<p id='x1'>xxx</p>")).add(jQuery("<p id='x2'>xxx</p>")),equal(n[0].id,"x1","Check on-the-fly element1"),equal(n[1].id,"x2","Check on-the-fly element2"),n=jQuery([]).add("<p id='x1'>xxx</p>").add("<p id='x2'>xxx</p>"),equal(n[0].id,"x1","Check on-the-fly element1"),equal(n[1].id,"x2","Check on-the-fly element2"),equal(jQuery([]).add(r).length,0,"Check that undefined adds nothing"),equal(jQuery([]).add(document.getElementById("form")).length,1,"Add a form"),equal(jQuery([]).add(document.getElementById("select1")).length,1,"Add a select")}),test("add(String, Context)",function(){expect(6),deepEqual(jQuery("#firstp").add("#ap").get(),q("firstp","ap"),"Add selector to selector "),deepEqual(jQuery(document.getElementById("firstp")).add("#ap").get(),q("firstp","ap"),"Add gEBId to selector"),deepEqual(jQuery(document.getElementById("firstp")).add(document.getElementById("ap")).get(),q("firstp","ap"),"Add gEBId to gEBId");var e=document.getElementById("firstp");deepEqual(jQuery("#firstp").add("#ap",e).get(),q("firstp"),"Add selector to selector "),deepEqual(jQuery(document.getElementById("firstp")).add("#ap",e).get(),q("firstp"),"Add gEBId to selector, not in context"),deepEqual(jQuery(document.getElementById("firstp")).add("#ap",document.getElementsByTagName("body")[0]).get(),q("firstp","ap"),"Add gEBId to selector, in context")}),test("eq('-1') #10616",function(){expect(3);var e=jQuery("div");equal(e.eq(-1).length,1,"The number -1 returns a selection that has length 1"),equal(e.eq("-1").length,1,"The string '-1' returns a selection that has length 1"),deepEqual(e.eq("-1"),e.eq(-1),"String and number -1 match")}),test("index(no arg) #10977",function(){expect(2);var e,t,n;e=jQuery("<ul id='indextest'><li class='zero'>THIS ONE</li><li class='one'>a</li><li class='two'>b</li><li class='three'>c</li></ul>"),jQuery("#qunit-fixture").append(e),strictEqual(jQuery("#indextest li.zero").first().index(),0,"No Argument Index Check"),e.remove(),t=document.createDocumentFragment(),n=t.appendChild(document.createElement("div")),equal(jQuery(n).index(),0,"If jQuery#index called on element whose parent is fragment, it still should work correctly")}),test("traversing non-elements with attribute filters (#12523)",function(){expect(5);var e=jQuery("#nonnodes").contents();equal(e.filter("[id]").length,1,".filter"),equal(e.find("[id]").length,0,".find"),strictEqual(e.is("[id]"),!0,".is"),deepEqual(e.closest("[id='nonnodes']").get(),q("nonnodes"),".closest"),deepEqual(e.parents("[id='nonnodes']").get(),q("nonnodes"),".parents")});