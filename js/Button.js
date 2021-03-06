/* global API */
function Button(options)
{
 var /*i, */k;

 this._node = API.DOM.getById(options.renderTo).appendChild(document.createElement("span"));
 this._node.className = "button";
 if ( options.id ) { this._id = options.id; }
 if ( options.noHover ) { this._node.classList.add("noHover"); }
 if ( options.className ) { this._node.classList.add(options.className); }
 if ( options.content ) { this.setContent(options.content); }
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
 "removeContent" : function()
 {
  this._node.classList.remove("content");
  this._node.innerHTML = "";
 },
 "setContent" : function(content)
 {
  this.removeContent();
  if ( !Array.isArray(content) ) { content = [content]; }
  content.forEach(function(node)
                  {
                   if ( typeof node == "string" ) { this.appendChild(document.createTextNode(node)); }
                   else if ( typeof node == "function" ) { node.call(this, this); }
                   else { this.appendChild(node); }
                  }, this._node);
  this._node.classList.add("content");
 },
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
 var src,
     node = API.DOM.getById(options.renderTo).appendChild(document.createElement("span")),
     img = node.appendChild(document.createElement("img"));
 node.className = "imageButton";
 if ( options.className ) { node.classList.add(options.className); }
 if ( options.checked ) { node.classList.add("checked"); }
 if ( options.title ) { node.title = options.title; }
 if ( options.switchImage )
 {
  src = options.switchImage[options.checked ? "checked" : "unchecked"];
  node.classList.add("switchImage");
  node.dataset.switchChecked = options.switchImage.checked;
  node.dataset.switchUnchecked = options.switchImage.unchecked;
  node.onclick = function()
  {
   var checked;
   this.classList.toggle("checked");
   checked = this.classList.contains("checked");
   this.firstChild.src = "images/" + this.dataset[checked ? "switchChecked" : "switchUnchecked"];
   options.callback(checked, options.type);
  };
 }
 else
 {
  src = options.image;
  node.onclick = function()
  {
   this.classList.toggle("checked");
   options.callback(this.classList.contains("checked"), options.type);
  };
 }
 img.src = "images/" + src;
 return this;
}

function ToggleSwitch(options)
{
 var div;
 this._node = API.DOM.getById(options.renderTo).appendChild(document.createElement("label"));
 this._input = this._node.appendChild(document.createElement("input"));
 this._input.type = "checkbox";
 this._input.checked = !!options.checked;
 this._input.value = "value" in options ? options.value : "";
 div = this._node.appendChild(document.createElement("div"));
 div.className = "slider";
 this._node.className = "switch";
 if ( !options.id ) { options.id = "autoToggleId" + ToggleSwitch.UID++; }
 if ( options.content )
 {
  this._label = API.DOM.getById(options.renderTo).appendChild(document.createElement("label"));
  this._label.classList.add("labelSwitch");
  this._label.htmlFor = options.id;
  this._label.appendChild(document.createTextNode(options.content));
 }
 if ( options.large ) { this._node.classList.add("large"); }
 this._id = options.id;
 this._input.id = options.id;
 if ( options.callback ) { this._node.onchange = (function(toggleSwitch, cb, data) { return function() { cb.call(toggleSwitch, toggleSwitch._input.checked, data || null); }; })(this, options.callback, options.data); }
 this.setDisabled(!!options.disabled);
}

ToggleSwitch.UID = 0;

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
 this.onshow = options.onshow;
 this.btn = new Button(opt);
 this.items = options.items;
}

Dropdown.current = null;
Dropdown.listener = function(evt)
                    {
                     var item,
                         target = API.EVT.getParentTarget(evt, "li", "dropdown-item");
                     if ( target && Dropdown.current )
                     {
                      item = Dropdown.current.items.find(function(item) { return item.id == target.dataset.itemId; });
                      if ( item && item.li && !item.li.classList.contains("disabledItem") )
                      {
                       if ( item.callback ) { item.callback.call(target); }
                       Dropdown.hide(!target || !target.classList.contains("preventAutoclose"));
                      }
                      return false;
                     }
                     Dropdown.hide();
                    };

Dropdown.hide = function(allowed)
{
 var ul;
 if ( allowed !== false )
 {
  ul = document.getElementById("dropdown-items");
  if ( ul && ul.parentNode )
  {
   ul.parentNode.removeChild(ul);
   document.body.removeEventListener("click", Dropdown.listener, false);
   Dropdown.current = null;
  }
 }
};

Dropdown.prototype =
{
 "setEnabledItem" : function(id, state)
 {
  var item = this.items.find(function(item) { return item.id == id; });
  if ( item && item.li ) { item.li.classList[state ? "remove" : "add"]("disabledItem"); }
 },
 "enableItem" : function(id) { this.setEnabledItem(id, true); },
 "disableItem" : function(id) { this.setEnabledItem(id, false); },
 "showItems" : function()
 {
  var that = this;
  return function(evt)
  {
   var ul, bounding,
       cancel = false;
   if ( Dropdown.current == that ) { cancel = true; }
   Dropdown.hide();
   document.body.removeEventListener("click", Dropdown.listener, false);
   if ( cancel ) { return false; }
   Dropdown.current = that;
   ul = document.body.appendChild(document.createElement("ul"));
   ul.id = "dropdown-items";
   that.items.forEach(function(item)
                      {
                       var span, k,
                           li = this.appendChild(document.createElement("li"));
                       item.li = li;
                       li.className = "dropdown-item";
                       if ( item.fa )
                       {
                        span = li.appendChild(document.createElement("i"));
                        li.classList.add("image");
                        span.className = "fa fa-{0}".format(item.fa);
                       }
                       if ( item.content )
                       {
                        if ( !Array.isArray(item.content) ) { item.content = [item.content]; }
                        item.content.forEach(function(node)
                                             {
                                              if ( typeof node == "string" ) { this.appendChild(document.createTextNode(node)); }
                                              else if ( typeof node == "function" ) { node.call(this, this); }
                                              else { this.appendChild(node); }
                                             }, li);
                        li.classList.add("content");
                       }
                       if ( "class" in item ) { li.classList.add(item["class"]); }
                       if ( item.disabled ) { li.classList.add("disabledItem"); }
                       if ( item.title ) { li.title = item.title; }
                       li.dataset.itemId = item.id;
                       if ( item.events )
                       {
                        for ( k in item.events )
                        {
                         if ( item.events.hasOwnProperty(k) )
                         {
                          li.addEventListener(k, item.events[k], false);
                         }
                        }
                       }
                      }, ul);
   bounding = that.btn._node.getBoundingClientRect();
   ul.style.top = (bounding.top + bounding.height) + "px";
   ul.style.left = bounding.left + "px";
   evt.stopPropagation();
   document.body.addEventListener("click", Dropdown.listener, false);
   if ( that.onshow && (typeof that.onshow == "function") ) { that.onshow.call(that); }
  };
 }
};