/* global API */
function Button(options)
{
 var /*i, */k;

 this._node = API.DOM.getById(options.renderTo).appendChild(document.createElement("span"));
 this._node.className = "button";
 if ( options.id ) { this._id = options.id; }
 if ( options.noHover ) { this._node.classList.add("noHover"); }
 if ( options.className ) { this._node.classList.add(options.className); }
 if ( options.content )
 {
  if ( !Array.isArray(options.content) ) { options.content = [options.content]; }
  options.content.forEach(function(node)
                          {
                           if ( typeof node == "string" ) { this.innerHTML += node; }
                           else { this.appendChild(node); }
                          }, this._node);
  this._node.classList.add("content");
 }
 if ( options.fa ) { this.setIcon(options.fa); }
 if ( options.styles ) { for ( k in options.styles ) { if ( options.styles.hasOwnProperty(k) ) { this._node.style[k] = options.styles[k]; } } }
 if ( options.callback ) { this._node.onclick = (function(btn, cb) { return function(evt) { if ( btn.isEnabled() ) { cb.call(btn, evt); } }; })(this, options.callback); }
 if ( options.small ) { this._node.classList.add("small"); }
 if ( options.listener ) { API.EVT.on(options.listener.method, options.listener.callback, options.listener.context || this); }
 if ( options.hide ) { this.hide(); }
 if ( options.active ) { this.setActive(options.active); }
 if ( options.title )  { this._node.title = options.title; }
 this.setEnabled(true);
 if ( options.disabled ) { this.setDisabled(options.disabled); }
 if ( options.enabled ) { this.setEnabled(options.enabled); }
 return this;
}

Button.prototype =
{
 "_node" : null,
 "_nodeIcon" : null,
 "_id" : null,
 "setActive" : function(state) { this._node.classList[state ? "add" : "remove"]("active"); },
 "isActive" : function() { return this._node.classList.contains("active"); },
 "toggle" : function() { this.setActive(!this.isActive()); },
 "show" : function() { this._node.style.display = ""; },
 "hide" : function() { this._node.style.display = "none"; },
 "getId" : function() { return this._id; },
 "setDisabled" : function(state) { this._node.classList[state ? "add" : "remove"]("disabled"); },
 "isDisabled" : function() { return this._node.classList.contains("disabled"); },
 "setEnabled" : function(state) { this.setDisabled(!state); },
 "isEnabled" : function() { return !this.isDisabled(); },
 "setIcon" : function(icon)
 {
  this.removeIcon();
  this._node.classList.add("image");
  this._nodeIcon = document.createElement("i");
  this._nodeIcon.className = "fa fa-{0}".format(icon);
  if ( this._node.firstChild ) { this._node.insertBefore(this._nodeIcon, this._node.firstChild); }
  else { this._node.appendChild(this._nodeIcon); }
 },
 "removeIcon" : function()
 {
  if ( this._nodeIcon ) { this._node.removeChild(this._nodeIcon); }
  this._nodeIcon = null;
  this._node.classList.remove("image");
 }
};

// TODO : inherit from Button
function ImageButton(options)
{
 var img,
     node = API.DOM.getById(options.renderTo).appendChild(document.createElement("span"));
 node.className = "imageButton";
 if ( options.className ) { node.classList.add(options.className); }
 if ( options.checked ) { node.classList.add("checked"); }
 node.onclick = function()
 {
  this.classList.toggle("checked");
  options.callback(this.classList.contains("checked"), options.type);
 };
 img = node.appendChild(document.createElement("img"));
 img.src = "images/" + options.image;
 return this;
}

function ToggleSwitch(options)
{
 var div;
 this._node = API.DOM.getById(options.renderTo).appendChild(document.createElement("label"));
 this._input = this._node.appendChild(document.createElement("input"));
 this._input.type = "checkbox";
 this._input.checked = !!options.checked;
 div = this._node.appendChild(document.createElement("div"));
 div.className = "slider";
 this._node.className = "switch";
 if ( options.content )
 {
  this._label = API.DOM.getById(options.renderTo).appendChild(document.createElement("label"));
  this._label.classList.add("labelSwitch");
  if ( options.id ) { this._label.htmlFor = options.id; }
  this._label.appendChild(document.createTextNode(options.content));
 }
 if ( options.large ) { this._node.classList.add("large"); }
 if ( options.id )
 {
  this._id = options.id;
  this._input.id = options.id;
 }
 if ( options.callback ) { this._node.onchange = (function(toggleSwitch, cb, data) { return function() { cb.call(toggleSwitch, toggleSwitch._input.checked, data || null); }; })(this, options.callback, options.data); }
 this.setDisabled(!!options.disabled);
}

ToggleSwitch.prototype =
{
 "_node" : null,
 "_input" : null,
 "_label" : null,
 "show" : function() { this._node.style.display = ""; this._label.style.display = ""; },
 "hide" : function() { this._node.style.display = "none"; this._label.style.display = "none"; },
 "setDisabled" : function(state) { this._input.disabled = state; }
};

function Dropdown(options)
{
 var opt = {},
     map = ["renderTo", "id", "noHover", "className", "content", "fa", "styles", "small", "listener", "hide", "active", "title"];
 map.forEach(function(item) { if ( options[item] ) { opt[item] = options[item]; } });
 opt.callback = this.showItems();
 this.btn = new Button(opt);
 this.items = options.items;
}

Dropdown.listenerDocument = false;

Dropdown.prototype =
{
 "showItems" : function()
 {
  var that = this;
  return function(evt)
  {
   var bounding = that.btn._node.getBoundingClientRect(),
       ul = document.getElementById("dropdown-items");
   if ( ul && ul.parentNode ) { ul.parentNode.removeChild(ul); }
   ul = document.body.appendChild(document.createElement("ul"));
   ul.id = "dropdown-items";
   that.items.forEach(function(item)
                      {
                       var span,
                           li = this.appendChild(document.createElement("li"));
                       li.className = "dropdown-item";
                       if ( item.fa )
                       {
                        span = li.appendChild(document.createElement("i"));
                        li.classList.add("image");
                        span.className = "fa fa-{0}".format(item.fa);
                       }
                       if ( item.content )
                       {
                        span = li.appendChild(document.createElement("span"));
                        li.classList.add("content");
                        span.innerHTML = item.content;
                       }
                       li.dataset.itemId = item.id;
                      }, ul);
   ul.style.top = (bounding.top + bounding.height) + "px";
   ul.style.left = bounding.left + "px";
   evt.stopPropagation();
   if ( !Dropdown.listenerDocument )
   {
    document.body.addEventListener("click", function(evt)
                                            {
                                             var item,
                                                 target = API.EVT.getParentTarget(evt, "li", "dropdown-item");
                                                 ul = document.getElementById("dropdown-items");
                                             if ( ul && ul.parentNode ) { ul.parentNode.removeChild(ul); }
                                             if ( target )
                                             {
                                              item = that.items.find(function(item) { return item.id == target.dataset.itemId; });
                                              if ( item && item.callback ) { item.callback(); }
                                              return false;
                                             }
                                            }, false);
    Dropdown.listenerDocument = true;
   }
  };
 }
};