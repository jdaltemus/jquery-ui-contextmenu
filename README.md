# jquery-contextmenu [![Build Status](https://travis-ci.org/mar10/jquery-contextmenu.png?branch=master)](https://travis-ci.org/mar10/jquery-contextmenu)

A jQuery plugin that provides a context menu (based on the standard [jQueryUI menu] widget).

  * themable
  * supports delegation (i.e. can be bound to elements that don't exist at the
    time the context menu is initialized)
  * exposes events from [jQueryUI menu]: `blur`, `create`, `focus`, `select`


## Status
Beta: *not* ready for production.


## Demo

[Live demo page](http://mar10.github.com/jquery-contextmenu/sample-widget.html)


## Example

Say we have some HTML elements that we want to attach a popup menu to:

```html
<div id="container">
    <div class="hasmenu">AAA</div>
    <div class="hasmenu">BBB</div>
    <div class="hasmenu">CCC</div>
</div>
```


now we can enable a contextmenu like so:
 
```js
$("#container").contextmenu({
    delegate: ".hasmenu",
    menu: "#options",
    select: function(event, ui) {
        var menuId = ui.item.find(">a").attr("href"),
            target = event.relatedTarget;
        alert("select " + menuId + " on " + $(target).text());
    }
});
```

To apply the selector globally, pass `document` as context:

```js
$(document).contextmenu({
    delegate: ".hasmenu",
    [...]
});
```

Of course we also have to provide some HTML markup that defines the context menu 
structure (see [jQueryUI menu] for details):

```html
<ul id="options" class="ui-helper-hidden">
    <li><a href="#action1">Action 1</a>
    <li><a href="#action2">Action 2</a>
    <li class="ui-state-disabled"><a href="#action3">Action 3</a>
    <li>----
    <li><a>Extra</a>
        <ul>
            <li><a href="#action4">sub4</a>
            <li><a href="#action5">sub5</a>
        </ul>
</ul>
```


## API documentation
### Options
<dl>
<dt>delegate</dt>
<dd>
    `{String}` jQuery selector describing the elements that trigger the context menu.    
</dd>
<dt>menu</dt>
<dd>
    `{String | jQuery | function}` jQuery object or selector (or function returning such) describing the menu definition.    
</dd>
</dl>


### Methods
<dl>
<dt>open(target)</dt>
<dd>
    Open context menu on a specific target (must match options.delegate).
</dd>
</dl>


### Events
jquery-contextmenu exposes events from [jQueryUI menu]: `blur`, `create`, `focus`, `select`.
However, since the `event.target` parameter contains the menu item, we additionally pass the element 
that was right-clicked in `event.relatedTarget`.

Events may be handled by defining a handler option:
```js
$("#container").contextmenu({
    [...]
    select: function(event, ui) {
        var menuId = ui.item.find(">a").attr("href"),
            target = event.relatedTarget;
        alert("select " + menuId + " on " + $(target).text());
    }
});
```

Alternatively a handler may be bound, so this is equivaent:
```js
$("#container").bind("contextmenuselect", function(event, ui) {
    var menuId = ui.item.find(">a").attr("href"),
        target = event.relatedTarget;
    alert("select " + menuId + " on " + $(target).text());
}
```

<dl>
<dt>beforeopen(event)</dt>
<dd>
    Menu about to open; return `false` to prevent opening.
</dd>
<dt>blur(event, ui)</dt>
<dd>
    menu option lost focus
</dd>
<dt>close(event, ui)</dt>
<dd>
    menu was closed
</dd>
<dt>create(event, ui)</dt>
<dd>
    menu was initialized
</dd>
<dt>focus(event, ui)</dt>
<dd>
    menu option got focus
</dd>
<dt>init(event, ui)</dt>
<dd>
    ui-contextmenu was initialized
</dd>
<dt>open(event, ui)</dt>
<dd>
    menu was opened
</dd>
<dt>select(event, ui)</dt>
<dd>
     menu option was selected; return `false` to prevent closing.
</dd>
</dl>

[jQueryUI menu]: http://jqueryui.com/menu/