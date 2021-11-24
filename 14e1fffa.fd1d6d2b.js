(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return t?i.a.createElement(f,l(l({ref:n},s),{},{components:t})):i.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(8),o=(t(0),t(111)),a={id:"vilt",sidebar_label:"ViLT",title:"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"},l={unversionedId:"projects/vilt",id:"projects/vilt",isDocsHomePage:!1,title:"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision",description:"This repository contains the code for pytorch implementation of ViLT model, released originally under this (repo). Please cite the following papers if you are using ViLT model from mmf:",source:"@site/docs/projects/vilt.md",slug:"/projects/vilt",permalink:"/docs/projects/vilt",editUrl:"https://github.com/facebookresearch/mmf/edit/main/website/docs/projects/vilt.md",version:"current",lastUpdatedBy:"ryan-qiyu-jiang",lastUpdatedAt:1637731385,sidebar_label:"ViLT",sidebar:"docs",previous:{title:"UniT: Multimodal Multitask Learning with a Unified Transformer",permalink:"/docs/projects/unit"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Training",id:"training",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This repository contains the code for pytorch implementation of ViLT model, released originally under this (",Object(o.b)("a",{parentName:"p",href:"https://github.com/dandelin/ViLT"},"repo"),"). Please cite the following papers if you are using ViLT model from mmf:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Wonjae Kim, Bokyung Son, and Ildoo Kim. 2021. ",Object(o.b)("em",{parentName:"li"},"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision}"),". In 38th International Conference on Machine Learning (ICML). (",Object(o.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/2102.03334"},"arXiV"),")")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"@misc{kim2021vilt,\n      title={ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision},\n      author={Wonjae Kim and Bokyung Son and Ildoo Kim},\n      year={2021},\n      eprint={2102.03334},\n      archivePrefix={arXiv},\n      primaryClass={stat.ML}\n}\n")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Follow installation instructions in the ",Object(o.b)("a",{parentName:"p",href:"https://mmf.readthedocs.io/en/latest/notes/installation.html"},"documentation"),"."),Object(o.b)("h2",{id:"training"},"Training"),Object(o.b)("p",null,"To train ViLT model on the VQA2.0 dataset, run the following command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mmf_run config=projects/vilt/configs/vqa2/defaults.yaml run_type=train_val dataset=vqa2 model=vilt\n")),Object(o.b)("p",null,"To finetune using different pretrained starting weights, change the ",Object(o.b)("inlineCode",{parentName:"p"},"pretrained_model_name")," under image_encoder in the config yaml to reference a huggingface model."))}u.isMDXComponent=!0}}]);