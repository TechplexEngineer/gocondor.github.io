(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(91)),i={title:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"First make sure you have Gincoat cli installed by running go get github.com/gincoat/installer/gincoat, then create a project using the following command gincoat new [project-name] [project-location]",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/gincoat/gincoat.github.io/edit/source/docs/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Features Control",permalink:"/docs/features-control"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"First make sure you have ",Object(a.b)("inlineCode",{parentName:"p"},"Gincoat cli")," installed by running ",Object(a.b)("inlineCode",{parentName:"p"},"go get github.com/gincoat/installer/gincoat"),", then create a project using the following command ",Object(a.b)("inlineCode",{parentName:"p"},"gincoat new [project-name] [project-location]")),Object(a.b)("p",null,"Now Let's create a route to handle our first request.\nlets assume the request is of a type ",Object(a.b)("inlineCode",{parentName:"p"},"get")," and will be made to the root ",Object(a.b)("inlineCode",{parentName:"p"},"/")," and the response should be the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Hello from example handler!"\n}\n')),Object(a.b)("p",null,"Let's start by defining the handler function for the request, to do that first create a file with the name ",Object(a.b)("inlineCode",{parentName:"p"},"example.go")," in ",Object(a.b)("inlineCode",{parentName:"p"},"httpd/handlers")," folder and then add to it the following code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'package handlers\n\nimport (\n"github.com/gin-gonic/gin"\n)\n\nfunc ExampleShow(c *gin.Context) {\n\xa0 \xa0 message := "Hello from example handler!"\n    c.JSON(200, gin.H{\n        "message": message,\n    })\n}\n')),Object(a.b)("p",null,"Next lets define the route, to do that open up the file ",Object(a.b)("inlineCode",{parentName:"p"},"httpd/routes.go"),", then inside the function ",Object(a.b)("inlineCode",{parentName:"p"},"RegisterRoutes()")," add this line ",Object(a.b)("inlineCode",{parentName:"p"},'router.Get("/", handlers.ExampleShow)')," and make sure it looks like below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'func RegisterRoutes() {\n    router := routing.Resolve()\n    // Define your routes here\n    router.Get("/", handlers.ExampleShow)\n}\n\n')),Object(a.b)("p",null,"Next cd into the project folder and start the app by running the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"gincoat run:dev\n")),Object(a.b)("p",null,"Finally, open up your browser and navigate to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:8000")))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,g=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(g,c(c({ref:t},p),{},{components:n})):o.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);