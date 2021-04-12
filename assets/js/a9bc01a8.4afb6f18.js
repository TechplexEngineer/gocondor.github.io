(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(n),b=r,h=s["".concat(o,".").concat(b)]||s[b]||p[b]||i;return n?a.a.createElement(h,l(l({ref:t},d),{},{components:n})):a.a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(102)),o={title:"Validation and Input Binding"},l={unversionedId:"validation",id:"validation",isDocsHomePage:!1,title:"Validation and Input Binding",description:"Validation takes place when you fill (bind) a given struct with your request data, this struct could be any of your database models which live in the directory models, or any of your input model which lives in httpd/input/input.go, the input models are simply an intermediate models that used only for validation, you can use them when you don't want to fill your database models with the request data.",source:"@site/docs/validation.md",slug:"/validation",permalink:"/docs/validation",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/validation.md",version:"current",sidebar:"docs",previous:{title:"Gin Context",permalink:"/docs/gin-context"},next:{title:"Middlewares",permalink:"/docs/middlewares"}},u=[],d={toc:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Validation takes place when you fill (bind) a given struct with your request data, this struct could be any of your database models which live in the directory ",Object(i.b)("inlineCode",{parentName:"p"},"models"),", or any of your input model which lives in ",Object(i.b)("inlineCode",{parentName:"p"},"httpd/input/input.go"),", the input models are simply an intermediate models that used only for validation, you can use them when you don't want to fill your database models with the request data."),Object(i.b)("h4",{id:"how-to-define-validation-rules"},"How to define validation rules"),Object(i.b)("p",null,"Validation rules are defined using the struct tag ",Object(i.b)("inlineCode",{parentName:"p"},"binding"),", here is an example of how you can define them for a user struct"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `json: "name" form: "name" binding:"exists,alphanum"`\n    Age  int    `json: "age"  form: "age"  binding:"exists,alphanum,gte=18"`\n}\n')),Object(i.b)("p",null,"Note: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the tags ",Object(i.b)("inlineCode",{parentName:"li"},"json")," and ",Object(i.b)("inlineCode",{parentName:"li"},"form")," indicate the type of content of the input (the request) that we are binding from, for the above example it means, if the content type of the input is ",Object(i.b)("inlineCode",{parentName:"li"},"json")," populate the struct's variable ",Object(i.b)("inlineCode",{parentName:"li"},"Name")," with the value from the json's key ",Object(i.b)("inlineCode",{parentName:"li"},"name"),", and the same thing for ",Object(i.b)("inlineCode",{parentName:"li"},"Age")),Object(i.b)("li",{parentName:"ul"},"the tag ",Object(i.b)("inlineCode",{parentName:"li"},"binding")," indicates the validation rules.")),Object(i.b)("h4",{id:"execute-the-validation"},"Execute the validation"),Object(i.b)("p",null,"to execute the validation you simply need to bind the request data to your struct using the method ",Object(i.b)("inlineCode",{parentName:"p"},"ShouldBind(&var)"),", or if you are sure what is the type of content of the request, you can use the proper method which is one of these 'ShouldBind(&var)', ShouldBindJSON(&var), ShouldBindXML(&var), ShouldBindQuery(&var), ShouldBindYAML(&var), ShouldBindHeader(&var).\nAs you can see all these methods a pointer to a declared variable of the type of your struct.\nIf validation failed, an error will be returned, here is an example of how we can bind and validate the request data to the above struct "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'func SomeHander(c *gin.Context) {\n    var user User\n    err := c.ShouldBindJSON(&user)\n    if err != nil {\n        // validation failed\n        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})\n        return\n    }\n\n    // validation passed, the variable user is filled with the request data\n    fmt.Println(user)\n}\n')))}c.isMDXComponent=!0}}]);