"use strict";(self.webpackChunkeasyexcel=self.webpackChunkeasyexcel||[]).push([[685],{5680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var n=t(6540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(t),u=l,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||r;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[b]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1782:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(8168),l=(t(6540),t(5680));const r={title:"\u5173\u4e8eeasyexcel",sidebar_position:1},o="EasyExcel",s={unversionedId:"index",id:"version-2.x/index",title:"\u5173\u4e8eeasyexcel",description:"EasyExcel\u662f\u4e00\u4e2a\u57fa\u4e8eJava\u7684\u7b80\u5355\u3001\u7701\u5185\u5b58\u7684\u8bfb\u5199Excel\u7684\u5f00\u6e90\u9879\u76ee\u3002\u5728\u5c3d\u53ef\u80fd\u8282\u7ea6\u5185\u5b58\u7684\u60c5\u51b5\u4e0b\u652f\u6301\u8bfb\u5199\u767eM\u7684Excel\u3002",source:"@site/versioned_docs/version-2.x/index.md",sourceDirName:".",slug:"/",permalink:"/docs/2.x/",draft:!1,editUrl:"https://github.com/alibaba-open-source-website/easyexcel/tree/main/versioned_docs/version-2.x/index.md",tags:[],version:"2.x",sidebarPosition:1,frontMatter:{title:"\u5173\u4e8eeasyexcel",sidebar_position:1},sidebar:"docSidebar",next:{title:"\u8bfbExcel",permalink:"/docs/2.x/quickstart/read"}},i={},c=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u5b98\u65b9\u7f51\u7ad9",id:"\u5b98\u65b9\u7f51\u7ad9",level:2},{value:"\u8054\u7cfb\u65b9\u5f0f",id:"\u8054\u7cfb\u65b9\u5f0f",level:3},{value:"64M\u5185\u5b581\u5206\u949f\u5185\u8bfb\u53d675M(46W\u884c25\u5217)\u7684Excel",id:"64m\u5185\u5b581\u5206\u949f\u5185\u8bfb\u53d675m46w\u884c25\u5217\u7684excel",level:3},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:3},{value:"\u8bfbExcel",id:"\u8bfbexcel",level:4},{value:"\u5199Excel",id:"\u5199excel",level:4},{value:"web\u4e0a\u4f20\u3001\u4e0b\u8f7d",id:"web\u4e0a\u4f20\u4e0b\u8f7d",level:4}],p={toc:c},b="wrapper";function m(e){let{components:a,...r}=e;return(0,l.yg)(b,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"easyexcel"},"EasyExcel"),(0,l.yg)("p",null,"EasyExcel\u662f\u4e00\u4e2a\u57fa\u4e8eJava\u7684\u7b80\u5355\u3001\u7701\u5185\u5b58\u7684\u8bfb\u5199Excel\u7684\u5f00\u6e90\u9879\u76ee\u3002\u5728\u5c3d\u53ef\u80fd\u8282\u7ea6\u5185\u5b58\u7684\u60c5\u51b5\u4e0b\u652f\u6301\u8bfb\u5199\u767eM\u7684Excel\u3002\ngithub\u5730\u5740:",(0,l.yg)("a",{parentName:"p",href:"https://github.com/alibaba/easyexcel"},"https://github.com/alibaba/easyexcel"),"\n\u5f00\u6e90\u9879\u76ee\u4e0d\u5bb9\u6613\uff0c\u5982\u679c\u89c9\u5f97\u672c\u9879\u76ee\u5bf9\u60a8\u7684\u5de5\u4f5c\u8fd8\u662f\u6709\u5e2e\u52a9\u7684\u8bdd\uff0c\u8bf7\u5728\u5e2e\u5fd9\u5728",(0,l.yg)("a",{target:"_blank",href:"https://github.com/alibaba/easyexcel"},(0,l.yg)("img",{src:"https://img.shields.io/github/stars/alibaba/easyexcel.svg?style=flat-square&label=Stars&logo=github",alt:"github star"})),"\u70b9\u4e2a\u2605Star\u3002"),(0,l.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/qa"},"\u5e38\u89c1\u95ee\u9898")),(0,l.yg)("h2",{id:"\u5b98\u65b9\u7f51\u7ad9"},"\u5b98\u65b9\u7f51\u7ad9"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://easyexcel.opensource.alibaba.com/"},"https://easyexcel.opensource.alibaba.com/")),(0,l.yg)("h3",{id:"\u8054\u7cfb\u65b9\u5f0f"},"\u8054\u7cfb\u65b9\u5f0f"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/community/support"},"\u5982\u4f55\u83b7\u53d6\u652f\u6301")),(0,l.yg)("h3",{id:"64m\u5185\u5b581\u5206\u949f\u5185\u8bfb\u53d675m46w\u884c25\u5217\u7684excel"},"64M\u5185\u5b581\u5206\u949f\u5185\u8bfb\u53d675M(46W\u884c25\u5217)\u7684Excel"),(0,l.yg)("p",null,"\u5f53\u7136\u8fd8\u6709\u6025\u901f\u6a21\u5f0f\u80fd\u66f4\u5feb\uff0c\u4f46\u662f\u5185\u5b58\u5360\u7528\u4f1a\u5728100M\u591a\u4e00\u70b9\n",(0,l.yg)("img",{alt:"img",src:t(8683).A,width:"730",height:"174"})),(0,l.yg)("h3",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.yg)("h4",{id:"\u8bfbexcel"},"\u8bfbExcel"),(0,l.yg)("p",null,"DEMO\u4ee3\u7801\u5730\u5740\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://github.com/alibaba/easyexcel/blob/v2.2.11/src/test/java/com/alibaba/easyexcel/test/demo/read/ReadTest.java"},"https://github.com/alibaba/easyexcel/blob/v2.2.11/src/test/java/com/alibaba/easyexcel/test/demo/read/ReadTest.java")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'    /**\n     * \u6700\u7b80\u5355\u7684\u8bfb\n     * <p>1. \u521b\u5efaexcel\u5bf9\u5e94\u7684\u5b9e\u4f53\u5bf9\u8c61 \u53c2\u7167{@link DemoData}\n     * <p>2. \u7531\u4e8e\u9ed8\u8ba4\u4e00\u884c\u884c\u7684\u8bfb\u53d6excel\uff0c\u6240\u4ee5\u9700\u8981\u521b\u5efaexcel\u4e00\u884c\u4e00\u884c\u7684\u56de\u8c03\u76d1\u542c\u5668\uff0c\u53c2\u7167{@link DemoDataListener}\n     * <p>3. \u76f4\u63a5\u8bfb\u5373\u53ef\n     */\n    @Test\n    public void simpleRead() {\n        String fileName = TestFileUtil.getPath() + "demo" + File.separator + "demo.xlsx";\n        // \u8fd9\u91cc \u9700\u8981\u6307\u5b9a\u8bfb\u7528\u54ea\u4e2aclass\u53bb\u8bfb\uff0c\u7136\u540e\u8bfb\u53d6\u7b2c\u4e00\u4e2asheet \u6587\u4ef6\u6d41\u4f1a\u81ea\u52a8\u5173\u95ed\n        EasyExcel.read(fileName, DemoData.class, new DemoDataListener()).sheet().doRead();\n    }\n')),(0,l.yg)("h4",{id:"\u5199excel"},"\u5199Excel"),(0,l.yg)("p",null,"DEMO\u4ee3\u7801\u5730\u5740\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://github.com/alibaba/easyexcel/blob/v2.2.11/src/test/java/com/alibaba/easyexcel/test/demo/write/WriteTest.java"},"https://github.com/alibaba/easyexcel/blob/v2.2.11/src/test/java/com/alibaba/easyexcel/test/demo/write/WriteTest.java")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'    /**\n     * \u6700\u7b80\u5355\u7684\u5199\n     * <p>1. \u521b\u5efaexcel\u5bf9\u5e94\u7684\u5b9e\u4f53\u5bf9\u8c61 \u53c2\u7167{@link com.alibaba.easyexcel.test.demo.write.DemoData}\n     * <p>2. \u76f4\u63a5\u5199\u5373\u53ef\n     */\n    @Test\n    public void simpleWrite() {\n        String fileName = TestFileUtil.getPath() + "write" + System.currentTimeMillis() + ".xlsx";\n        // \u8fd9\u91cc \u9700\u8981\u6307\u5b9a\u5199\u7528\u54ea\u4e2aclass\u53bb\u8bfb\uff0c\u7136\u540e\u5199\u5230\u7b2c\u4e00\u4e2asheet\uff0c\u540d\u5b57\u4e3a\u6a21\u677f \u7136\u540e\u6587\u4ef6\u6d41\u4f1a\u81ea\u52a8\u5173\u95ed\n        // \u5982\u679c\u8fd9\u91cc\u60f3\u4f7f\u752803 \u5219 \u4f20\u5165excelType\u53c2\u6570\u5373\u53ef\n        EasyExcel.write(fileName, DemoData.class).sheet("\u6a21\u677f").doWrite(data());\n    }\n')),(0,l.yg)("h4",{id:"web\u4e0a\u4f20\u4e0b\u8f7d"},"web\u4e0a\u4f20\u3001\u4e0b\u8f7d"),(0,l.yg)("p",null,"DEMO\u4ee3\u7801\u5730\u5740\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://github.com/alibaba/easyexcel/blob/v2.2.11/src/test/java/com/alibaba/easyexcel/test/demo/web/WebTest.java"},"https://github.com/alibaba/easyexcel/blob/v2.2.11/src/test/java/com/alibaba/easyexcel/test/demo/web/WebTest.java")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},' /**\n     * \u6587\u4ef6\u4e0b\u8f7d\uff08\u5931\u8d25\u4e86\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6709\u90e8\u5206\u6570\u636e\u7684Excel\uff09\n     * <p>1. \u521b\u5efaexcel\u5bf9\u5e94\u7684\u5b9e\u4f53\u5bf9\u8c61 \u53c2\u7167{@link DownloadData}\n     * <p>2. \u8bbe\u7f6e\u8fd4\u56de\u7684 \u53c2\u6570\n     * <p>3. \u76f4\u63a5\u5199\uff0c\u8fd9\u91cc\u6ce8\u610f\uff0cfinish\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5173\u95edOutputStream,\u5f53\u7136\u4f60\u5916\u9762\u518d\u5173\u95ed\u6d41\u95ee\u9898\u4e0d\u5927\n     */\n    @GetMapping("download")\n    public void download(HttpServletResponse response) throws IOException {\n        // \u8fd9\u91cc\u6ce8\u610f \u6709\u540c\u5b66\u53cd\u5e94\u4f7f\u7528swagger \u4f1a\u5bfc\u81f4\u5404\u79cd\u95ee\u9898\uff0c\u8bf7\u76f4\u63a5\u7528\u6d4f\u89c8\u5668\u6216\u8005\u7528postman\n        response.setContentType("application/vnd.ms-excel");\n        response.setCharacterEncoding("utf-8");\n        // \u8fd9\u91ccURLEncoder.encode\u53ef\u4ee5\u9632\u6b62\u4e2d\u6587\u4e71\u7801 \u5f53\u7136\u548ceasyexcel\u6ca1\u6709\u5173\u7cfb\n        String fileName = URLEncoder.encode("\u6d4b\u8bd5", "UTF-8");\n        response.setHeader("Content-disposition", "attachment;filename=" + fileName + ".xlsx");\n        EasyExcel.write(response.getOutputStream(), DownloadData.class).sheet("\u6a21\u677f").doWrite(data());\n    }\n\n    /**\n     * \u6587\u4ef6\u4e0a\u4f20\n     * <p>1. \u521b\u5efaexcel\u5bf9\u5e94\u7684\u5b9e\u4f53\u5bf9\u8c61 \u53c2\u7167{@link UploadData}\n     * <p>2. \u7531\u4e8e\u9ed8\u8ba4\u4e00\u884c\u884c\u7684\u8bfb\u53d6excel\uff0c\u6240\u4ee5\u9700\u8981\u521b\u5efaexcel\u4e00\u884c\u4e00\u884c\u7684\u56de\u8c03\u76d1\u542c\u5668\uff0c\u53c2\u7167{@link UploadDataListener}\n     * <p>3. \u76f4\u63a5\u8bfb\u5373\u53ef\n     */\n    @PostMapping("upload")\n    @ResponseBody\n    public String upload(MultipartFile file) throws IOException {\n        EasyExcel.read(file.getInputStream(), UploadData.class, new UploadDataListener(uploadDAO)).sheet().doRead();\n        return "success";\n    }\n')))}m.isMDXComponent=!0},8683:(e,a,t)=>{t.d(a,{A:()=>n});const n="data:image/png;base64,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"}}]);