# Tooltip

A jQuery plugin for simple tooltips.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)


## Use 
### Basic

Tooltip will generate a tooltip based on the target element's `data-title` attribute. Tooltip can be configured to open in a specific direction by setting the `direction` key at initialization:

```
$(".target").tooltip({
	direction: "top"
});
```

```
<a href="#" data-title="ToolTip Text">Tooltip Target</a>
```

### Follow

Tooltip can be configured to follow the user's mouse:

```
$(".target").tooltip({
	follow: true
});
```

### Match

Tooltip can be configured to match the user's mouse position, relative to the target:

```
$(".target").tooltip({
	match: true
});
```

### Delay

A delay can be set to avoid accidental tooltips:

```
$(".target").tooltip({
	delay: 500
});
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-tooltip-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| delay | int | 0 | Hover delay |
| direction | string | 'top' | Tooltip direction |
| follow | boolean | false | Flag to follow mouse |
| formatter | function | $.noop | Text format function |
| margin | int | 15 | Tooltip margin |
| match | boolean | false | Flag to match mouse position |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.tooltip("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").tooltip("destroy");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| .fs-tooltip | element | Base widget class |
| .fs-tooltip.fs-tooltip-visible | modifier | Inidcates visible state |
| .fs-tooltip.fs-tooltip-right | modifier | Inidcates right side display |
| .fs-tooltip.fs-tooltip-left | modifier | Inidcates left side display |
| .fs-tooltip.fs-tooltip-top | modifier | Inidcates top display |
| .fs-tooltip.fs-tooltip-bottom | modifier | Inidcates bottom display |
| .fs-tooltip-content | element | Tooltip content wrapper |
| .fs-tooltip-caret | element | Tooltip caret |
