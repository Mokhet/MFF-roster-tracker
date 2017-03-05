var API = {"uid":0};

API.FEATURES = function()
{
 var
  E/*lement*/, T/*mpValue*/,
  D/*ocument*/ = document,
  F/*eatures*/ =
  {
   "rgba":false,
   "canvas":false,
   "strict":D.compatMode === "CSS1Compat",
   "quirks":D.compatMode !== "CSS1Compat",
   "SVG":!!(D && ( T = D.implementation ) && typeof T.hasFeature == "function" && T.hasFeature("http://www.w3.org/TR/SVG11/feature#CoreAttribute", "1.1")),
   // détermine si un objet possède une méthode "M" qui peut etre "call"
   "isMethod":function(O/*ject*/, M/*ethodString*/)
   {
    var t/*ype*/;
    if ( O && M in O )
    {
     t = typeof O[M];
     return !!(((t === "function" || t === "object") && O[M]) || t === "unknown");
    }
    return false;
   },
   "isProperty":function(O/*bject*/, P/*ropertyString*/)
   {
    var t/*ype*/, o/*bject*/;
    if ( P in O )
    {
     o = O[P];
     t = typeof o;
     return !!(o && ( t === "function" || t === "object" ) );
    }
    return false;
   }
  };

 if ( F.isMethod(D, "createElement") )
 {
  // check rgba
  E = D.createElement("p");
  T = /^rgba/;
  if ( E && E.style && typeof T.test == "function")
  {
   try
   {
    E.style.color = "rgba(1,1,1,0.5)";
    F.rgba = T.test(E.style.color);
   }
   catch (e) {}
  }
  // check canvas
  E = D.createElement("canvas");
  F.canvas = !!(E && E.getContext && E.getContext("2d"));
 }
 E = null;
 return F;
}();

API.DOM =
{
"getById":function(E/*lementID*/, D/*ocument*/)
{
 var
  z,
  f/*eatures*/ = API.FEATURES,
  isM = f.isMethod,
  fn = function() { return null; },
  n/*ame*/ = "APICheckGBI",
  d/*ocument*/ = D || document,
  b/*ody*/ = d.body || d.documentElement,
  e/*lement*/ = d.createElement("a");

 if ( typeof E !== "string" ) { return E; }
 e.name = n;
 if ( isM(d, "getElementById") && isM(b, "appendChild") && isM(b, "removeChild") )
 {
  b.appendChild(e);
  z = d.getElementById(n);
  // bug des IE qui considère les NAME comme des ID
  if ( z && f.isProperty(d, "all") )
  {
   fn = function(i,d)
   {
    var n/*ode*/;
    if ( typeof i !== "string" ) { return i; }
    n = (d || document).all[i];
    return n && n.id == i ? n : null;
   };
  }
  else
  {
   fn = function(i,d)
   {
    var n/*ode*/;
    if ( typeof i !== "string" ) { return i; }
    n = (d || document).getElementById(i);
    return n && n.id == i ? n : null;
   };
  }
  b.removeChild(e);
 }
 return ( API.DOM.getById = fn )(E, D);
},
"flush":function(E/*lementID*/, P/*roperties*/)
{
 var i, n/*ode*/ = API.DOM.getById(E);
 if ( !n ) { return null; }
 while ( n.firstChild )
 {
  if ( P ) { for ( i = P.length; i--; ) { n.firstChild[P] = null; } }
  n.removeChild(n.firstChild);
 }
 return n;
},
"parent":function(E/*lementID*/, N/*odeName*/, C/*lassName*/)
{
 var
  c/*hecker*/ = API.DOM.nodeChecker(N, C),
  n/*ode*/ = API.DOM.getById(E);
 if ( n )
 {
  N = N.toUpperCase();
  while ( n && n.parentNode )
  {
   if ( c(n, N, C) ) { return n; }
   n = n.parentNode;
  }
 }
 return null;
},
"nodeChecker":function(N/*odeName*/, C/*lassName*/)
{
 return   C && N ? function(e,n,c) { return e && e.nodeName && e.nodeName.toUpperCase() == n && API.DOM.CSS.has(c, e); }
        : C      ? function(e,n,c) { return API.DOM.CSS.has(c, e); }
        :          function(e,n)   { return e && e.nodeName && e.nodeName.toUpperCase() == n; };
},
"addStyleElement":function(css, id)
{
 var n/*ode*/;
 if ( !id ) { id = "API_CSS_UID_" + ( API.uid++ ); }
 n = API.DOM.getById(id);
 if ( n ) { n.parentNode.removeChild(n); }
 n = document.getElementsByTagName("head")[0].appendChild(document.createElement("style"));
 n.id = id;
 n.type = "text/css";
 n.appendChild(document.createTextNode(css));
},
"_loaded":[],
"addLinkElement":function(U/*rl*/, id)
{
 var n/*ode*/;
 if ( !API.DOM._loaded[U] )
 {
  if ( !id || id === "" ) { id = U.replace(/[^\w]/g, "-").toCamel() + API.uid++; }
  n = document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));
  n.id = id;
  n.rel = "stylesheet";
  n.href = U;
  API.DOM._loaded[U] = id;
 }
}
};

API.DOM.CSS =
{
 "has":function(C/*lassName*/, E/*lementID*/)
 {
  var
   f/*eatures*/ = API.FEATURES,
   n/*ode*/ = API.DOM.getById(E),
   fn = function(C,E)
   {
    var n/*ode*/ = API.DOM.getById(E);
    if ( !n || !n.className ) { return false; }
    return n.className.split(" ").contains(C);
   };
  if ( n && f.isProperty(n, "classList") && f.isMethod(n.classList, "contains") )
  {
   fn = function(C, E)
   {
    var n/*ode*/ = API.DOM.getById(E);
    if ( n ) { return n.classList.contains(C); }
    return false;
   };
  }
  return ( API.DOM.CSS.has = fn )(C, E);
 }
};

API.EVT =
{
"getTarget":function(E/*vent*/)
{
 var
  isP = API.FEATURES.isProperty,
  f/*unction*/ = function() { return null; };
 if ( E && isP(E, "target") )
 {
  f = function(e)
  {
   var t = e && e.target ? e.target : null;
   return t && t.nodeType == 3 /*3==document.TEXT_NODE*/ ? t.parentNode : t;
  };
 }
 else if ( isP(window, "event") && isP(window.event, "srcElement") )
 {
  f = function()
  {
   var e = window.event, t = e && e.srcElement ? e.srcElement : null;
   return t && t.nodeType == 3 /*3==document.TEXT_NODE*/ ? t.parentNode : t;
  };
 }
 return (API.EVT.getTarget = f)(E);
},
"getParentTarget":function(E/*vent*/, N/*odeName*/, C/*lassName*/)
{
 return API.DOM.parent(API.EVT.getTarget(E), N, C);
}

};

API.numberToFixed = (function()
{
 function P/*adLeft*/(I/*nput*/, S/*ize*/, C/*har*/)
 {
  var r/*etour*/ = "" + I;
  while ( r.length < S ) { r = C + r; }
  return r;
 }
 function U/*nsignedString*/(N/*ombre*/, D/*igits*/)
 {
  var t, s = "" + Math.round(N * Math.pow(10, D)),
      d/*ebut*/, f/*in*/;
  if (/\D/.test(s)) { return "" + N; }
  s = P(s, 1 + D, "0");
  d = s.substring(0, t = (s.length - D));
  f = s.substring(t);
  if ( f ) { f = "." + f; }
  return d + f; // avoid "0."
 }

 return function(N/*ombre*/, D/*igits*/)
 {
  var
   n/*ombre*/ = parseFloat((N || "0").toString().replace(",", ".").replace(/[^0-9e\.\-+]/g, "")) || 0,
   u/*nsigned*/ = U(Math.abs(n), D);
  if ( isNaN(u) ) { u = 0; }
  u = (n < 0 ? "-" : "") + u;
  return Number(u);
 };
})();