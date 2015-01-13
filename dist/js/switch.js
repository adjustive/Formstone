/*! Formstone v0.0.1 [switch.js] 2015-01-13 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},l,b.classes),b.target=this.data(k+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.mq="(max-width:"+(1/0===b.maxWidth?"100000px":b.maxWidth)+")",b.mqGuid=b.classes.raw.base+"__"+o++;var c=this.data(k+"-group");b.group=c?"[data-"+k+'-group="'+c+'"]':!1,!b.collapse&&b.group&&a(b.group).eq(0).attr("data-"+k+"-active","true"),b.onEnable=this.data(k+"-active"),b.$switches=a().add(this).add(b.$target),this.touch({tap:!0}).on(m.tap,b,i),a.mediaquery("bind",b.mqGuid,b.mq,{enter:function(){g.call(b.$el,b)},leave:function(){h.call(b.$el,b)}})}function d(b){a.mediaquery("unbind",b.mqGuid,b.mq),b.$switches.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(m.namespace),this.touch("destroy")}function e(b){if(b.enabled&&!b.active){a(b.group).not(b.$el)[j.namespace]("deactivate");var c=b.group?a(b.group).index(b.$el):null;b.$switches.addClass(b.classes.raw.active),this.trigger(m.activate,[c]),b.active=!0}}function f(a){a.enabled&&a.active&&(a.$switches.removeClass(a.classes.raw.active),this.trigger(m.deactivate),a.active=!1)}function g(a){a.enabled||(a.$switches.addClass(a.classes.raw.enabled),a.enabled=!0,this.trigger(m.enable),a.onEnable?(a.active=!1,e.call(this,a)):(a.active=!0,f.call(this,a)))}function h(a){a.enabled&&(a.$switches.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")),this.trigger(m.disable),a.enabled=!1)}function i(a){n.killEvent(a);var b=a.data;b.active&&b.collapse?f.call(b.$el,b):e.call(b.$el,b)}var j=b.Plugin("switch",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{tap:"tap",activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_destruct:d,activate:e,deactivate:f,enable:g,disable:h}}),k=j.namespace,l=j.classes,m=j.events,n=j.functions,o=0}(jQuery,Formstone);