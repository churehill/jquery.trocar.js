jquery.trocar.js
=========

Small jquery library to allow users to edit the content of any html element by using the contenteditable attribute.

You can set a couple of diferent parameters when you initialize the plugin:

```javascript
$('.editable-text').trocar({
	'on': 'focus',
	'off': 'blur',
	'endOnEnter': true,
	'filterPaste': true
});
```

The complete list of parameters

Key | Default | Description
--- | --- | ---
on | focus | Event name used to start the editing mode, by default when you focus. You can set any event or always to have it initialized just on load. When an element is in editing mode it has the css class "trocar-editable"
off | blur | Event name used to fire the change event, by default when you blur.
endOnEnter | false | If true just finish the editing mode when you press enter.
filterPaste | false | If true when you paste some content its just going to use its innerText instead of the html.


Also the plugin triggers some events when you start or end the editing of the element:

Event | Description
--- | ---
start-edit.trocar | Fired when the edit mode is started, based on the on parameter.
end-edit.trocar | Fired when the edit mode is finished, based on the off parameter.


