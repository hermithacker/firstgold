JS.Set=new JS.Class({extend:{forEach:function(a,b,c){if(!a)return;if(a.forEach)return a.forEach(b,c);for(var d=0,e=a.length;d<e;d++){if(a[d])b.call(c||null,a[d],d)}},areEqual:function(a,b){return a.equals?a.equals(b):(a===b)}},include:JS.Enumerable||{},initialize:function(a,b,c){this.clear();if(b)this.klass.forEach(a,function(item){this.add(b.call(c||null,item))},this);else this.merge(a)},forEach:function(a,b){this.klass.forEach(this._0,a,b)},add:function(a){if(this.contains(a))return false;this._0.push(a);this.length=this.size=this._0.length;return true},classify:function(a,b){var c={},d=this._0.length,e;while(d--){e=a.call(b||null,this._0[d]);if(!c[e])c[e]=new this.klass;c[e].add(this._0[d])}return c},clear:function(){this._0=[];this.length=this.size=this._0.length},complement:function(b){var c=new this.klass;this.klass.forEach(b,function(a){if(!this.contains(a))c.add(a)},this);return c},contains:function(a){return this._1(a)!==-1},difference:function(a){a=(a instanceof JS.Set)?a:new JS.Set(a);var b=new this.klass,c=this._0,d=c.length;while(d--){if(!a.contains(c[d]))b.add(c[d])}return b},divide:function(a,b){var c=this.classify(a,b),d=new this.klass;for(var e in c)d.add(c[e]);return d},equals:function(a){if(this.length!==a.length||!(a instanceof JS.Set))return false;var b=this._0.length;while(b--){if(!a.contains(this._0[b]))return false}return true},flatten:function(a){var b=this._0,c,d=b.length;if(!a){this.clear();a=this}while(d--){c=b[d];if(c instanceof JS.Set)c.flatten(a);else a.add(c)}return a},intersection:function(b){var c=new this.klass;this.klass.forEach(b,function(a){if(this.contains(a))c.add(a)},this);return c},isEmpty:function(){return this._0.length===0},isProperSubset:function(a){return this._0.length<a._0.length&&this.isSubset(a)},isProperSuperset:function(){return this._0.length>other._0.length&&this.isSuperset(other)},isSubset:function(a){var b=this._0,c=b.length;while(c--){if(!a.contains(b[c]))return false}return true},isSuperset:function(a){return a.isSubset(this)},merge:function(b){this.klass.forEach(b,function(a){this.add(a)},this)},product:function(c){var d=new JS.Set;this.forEach(function(b){this.klass.forEach(c,function(a){d.add([b,a])})},this);return d},rebuild:function(){var a=this._0;this.clear();this.merge(a)},remove:function(a){var b=this._1(a);if(b===-1)return;this._0.splice(b,1);this.length=this.size=this._0.length},removeIf:function(a,b){var c=this._0,d=c.length;while(d--){if(a.call(b||null,c[d]))this.remove(c[d])}},replace:function(a){this.clear();this.merge(a)},subtract:function(b){this.klass.forEach(b,function(a){this.remove(a)},this)},union:function(a){var b=new this.klass;b.merge(this);b.merge(a);return b},xor:function(a){var b=new JS.Set(a);var c=this._0,d=c.length,e;while(d--){e=c[d];b[b.contains(e)?'remove':'add'](e)}return b},_1:function(a){var b=this._0.length,c=this.klass.areEqual;while(b--){if(c(a,this._0[b]))return b}return-1}});JS.Set.include({n:JS.Set.instanceMethod('intersection'),u:JS.Set.instanceMethod('union'),x:JS.Set.instanceMethod('product')});JS.SortedSet=new JS.Class(JS.Set,{extend:{compare:function(a,b){return a.compareTo?a.compareTo(b):(a<b?-1:(a>b?1:0))}},add:function(a){var b=this._1(a,true);if(b===null)return;this._0.splice(b,0,a);this.length=this.size=this._0.length},_1:function(a,b){var c=this._0,d=c.length,e=0,f=d;if(d===0)return b?0:-1;var g=this.klass.compare,h=this.klass.areEqual;if(g(a,c[0])<1){f=0;e=0}if(g(a,c[d-1])>0){f=0;e=d}while(!h(a,c[e])&&f>0.5){f=f/2;e+=(g(a,c[e])>0?1:-1)*Math.round(f);if(e>0&&g(a,c[e-1])>0&&g(a,c[e])<1)f=0}while(c[e]&&!h(a,c[e])&&g(a,c[e])===0)e+=1;var i=h(a,c[e]);return b?(i?null:e):(i?e:-1)}});JS.Enumerable.include({toSet:function(a,b,c){a=a||JS.Set;return new a(this,b,c)}});