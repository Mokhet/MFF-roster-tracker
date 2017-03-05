if ( !String.prototype.format )
{
 String.prototype.format = function()
 {
  var i, regexp,
      formatted = this;

  for ( i = 0; i < arguments.length; i++ )
  {
   regexp = new RegExp("\\{" + i + "\\}", "gi");
   formatted = formatted.replace(regexp, arguments[i]);
  }

  return formatted;
 };
}

if ( !String.prototype.trim )
{
 String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };
}


String.__camel = String.__hyphen = {};
String.prototype.toCamel = function()
{
 var i, m/*axLength*/, a/*rray*/, r/*etour*/;

 if ( String.__camel[this] ) { return String.__camel[this]; }

 a = this.split("-");
 m = a.length;

 if ( m == 1 ) { return a[0]; }
 r = this.indexOf("-") === 0 ? a[0].charAt(0).toUpperCase() + a[0].substring(1) : a[0];

 for ( i = 1; i < m; i++ )
 {
  r += a[i].charAt(0).toUpperCase() + a[i].substring(1);
 }

 String.__camel[this] = r;
 String.__hyphen[r] = this;
 return r;
};

String.prototype.toHyphen = function()
{
 var i, m/*axLength*/,
     r/*etour*/ = "";

 if ( String.__hyphen[this] ) { return String.__hyphen[this]; }

 for ( i = 0, m = this.length; i < m; ++i )
 {
  if ( this.charAt(i) == this.charAt(i).toUpperCase() )
  {
   r += "-" + this.charAt(i).toLowerCase();
  }
  else { r += this.charAt(i); }
 }

 String.__hyphen[this] = r;
 String.__camel[r] = this;
 return r;
};
