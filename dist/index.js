"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=n(function(k,v){
var f=require('@stdlib/stats-strided-dvariancepn/dist').ndarray;function x(e,r,a,i,y){return f(e,r,a,i,y)}v.exports=x
});var c=n(function(w,s){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=t();function l(e,r,a,i){return m(e,r,a,i,j(e,i))}s.exports=l
});var o=n(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),_=t();R(d,"ndarray",_);q.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),u,p=O(E(__dirname,"./native.js"));b(p)?u=g:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
