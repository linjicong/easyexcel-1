"use strict";(self.webpackChunkeasyexcel=self.webpackChunkeasyexcel||[]).push([[5353],{1057:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>t,default:()=>j,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=r(4848),l=r(8453);const s={title:"\u5199Excel",sidebar_position:2},t=void 0,i={id:"api/write",title:"\u5199Excel",description:"\u6ce8\u89e3",source:"@site/docs/api/write.md",sourceDirName:"api",slug:"/api/write",permalink:"/docs/current/api/write",draft:!1,unlisted:!1,editUrl:"https://github.com/alibaba-open-source-website/easyexcel/tree/main/docs/api/write.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5199Excel",sidebar_position:2},sidebar:"apiSidebar",previous:{title:"\u8bfbExcel",permalink:"/docs/current/api/"},next:{title:"\u586b\u5145Excel",permalink:"/docs/current/api/fill"}},c={},h=[{value:"\u6ce8\u89e3",id:"\u6ce8\u89e3",level:2},{value:"<code>ExcelProperty</code>",id:"excelproperty",level:3},{value:"<code>ExcelIgnore</code>",id:"excelignore",level:3},{value:"<code>ExcelIgnoreUnannotated</code>",id:"excelignoreunannotated",level:3},{value:"<code>DateTimeFormat</code>",id:"datetimeformat",level:3},{value:"<code>NumberFormat</code>",id:"numberformat",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",level:3},{value:"\u901a\u7528\u53c2\u6570",id:"\u901a\u7528\u53c2\u6570",level:3},{value:"WriteWorkbook",id:"writeworkbook",level:3},{value:"WriteSheet",id:"writesheet",level:3},{value:"WriteTable",id:"writetable",level:3}];function x(e){const d={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h2,{id:"\u6ce8\u89e3",children:"\u6ce8\u89e3"}),"\n",(0,n.jsx)(d.p,{children:"\u4f7f\u7528\u6ce8\u89e3\u5f88\u7b80\u5355\uff0c\u53ea\u8981\u5728\u5bf9\u5e94\u7684\u5b9e\u4f53\u7c7b\u4e0a\u9762\u52a0\u4e0a\u6ce8\u89e3\u5373\u53ef\u3002"}),"\n",(0,n.jsx)(d.h3,{id:"excelproperty",children:(0,n.jsx)(d.code,{children:"ExcelProperty"})}),"\n",(0,n.jsx)(d.p,{children:"\u7528\u4e8e\u5339\u914dexcel\u548c\u5b9e\u4f53\u7c7b\u7684\u5339\u914d,\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u7528\u4e8e\u5339\u914dexcel\u4e2d\u7684\u5934\uff0c\u5fc5\u987b\u5168\u5339\u914d,\u5982\u679c\u6709\u591a\u884c\u5934\uff0c\u4f1a\u5339\u914d\u6700\u540e\u4e00\u884c\u5934"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"order"}),(0,n.jsx)(d.td,{children:"Integer.MAX_VALUE"}),(0,n.jsxs)(d.td,{children:["\u4f18\u5148\u7ea7\u9ad8\u4e8e",(0,n.jsx)(d.code,{children:"value"}),"\uff0c\u4f1a\u6839\u636e",(0,n.jsx)(d.code,{children:"order"}),"\u7684\u987a\u5e8f\u6765\u5339\u914d\u5b9e\u4f53\u548cexcel\u4e2d\u6570\u636e\u7684\u987a\u5e8f"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"index"}),(0,n.jsx)(d.td,{children:"-1"}),(0,n.jsxs)(d.td,{children:["\u4f18\u5148\u7ea7\u9ad8\u4e8e",(0,n.jsx)(d.code,{children:"value"}),"\u548c",(0,n.jsx)(d.code,{children:"order"}),"\uff0c\u4f1a\u6839\u636e",(0,n.jsx)(d.code,{children:"index"}),"\u76f4\u63a5\u6307\u5b9a\u5230excel\u4e2d\u5177\u4f53\u7684\u54ea\u4e00\u5217"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"converter"}),(0,n.jsx)(d.td,{children:"\u81ea\u52a8\u9009\u62e9"}),(0,n.jsxs)(d.td,{children:["\u6307\u5b9a\u5f53\u524d\u5b57\u6bb5\u7528\u4ec0\u4e48\u8f6c\u6362\u5668\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u9009\u62e9\u3002\u5199\u7684\u60c5\u51b5\u4e0b\u53ea\u8981\u5b9e\u73b0",(0,n.jsx)(d.code,{children:"com.alibaba.excel.converters.Converter#convertToExcelData(com.alibaba.excel.converters.WriteConverterContext<T>)"})," \u65b9\u6cd5\u5373\u53ef"]})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"excelignore",children:(0,n.jsx)(d.code,{children:"ExcelIgnore"})}),"\n",(0,n.jsx)(d.p,{children:"\u9ed8\u8ba4\u6240\u6709\u5b57\u6bb5\u90fd\u4f1a\u548cexcel\u53bb\u5339\u914d\uff0c\u52a0\u4e86\u8fd9\u4e2a\u6ce8\u89e3\u4f1a\u5ffd\u7565\u8be5\u5b57\u6bb5"}),"\n",(0,n.jsx)(d.h3,{id:"excelignoreunannotated",children:(0,n.jsx)(d.code,{children:"ExcelIgnoreUnannotated"})}),"\n",(0,n.jsxs)(d.p,{children:["\u9ed8\u8ba4\u4e0d\u7ba1\u52a0\u4e0d\u52a0",(0,n.jsx)(d.code,{children:"ExcelProperty"}),"\u7684\u6ce8\u89e3\u7684\u6240\u6709\u5b57\u6bb5\u90fd\u4f1a\u53c2\u4e0e\u8bfb\u5199\uff0c\u52a0\u4e86",(0,n.jsx)(d.code,{children:"ExcelIgnoreUnannotated"}),"\u6ce8\u89e3\u4ee5\u540e\uff0c\u4e0d\u52a0",(0,n.jsx)(d.code,{children:"ExcelProperty"}),"\u6ce8\u89e3\u7684\u5b57\u6bb5\u5c31\u4e0d\u4f1a\u53c2\u4e0e"]}),"\n",(0,n.jsx)(d.h3,{id:"datetimeformat",children:(0,n.jsx)(d.code,{children:"DateTimeFormat"})}),"\n",(0,n.jsxs)(d.p,{children:["\u65e5\u671f\u8f6c\u6362\uff0c\u7528",(0,n.jsx)(d.code,{children:"String"}),"\u53bb\u63a5\u6536excel\u65e5\u671f\u683c\u5f0f\u7684\u6570\u636e\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6ce8\u89e3,\u53c2\u6570\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u53c2\u7167",(0,n.jsx)(d.code,{children:"java.text.SimpleDateFormat"}),"\u4e66\u5199\u5373\u53ef"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"use1904windowing"}),(0,n.jsx)(d.td,{children:"\u81ea\u52a8\u9009\u62e9"}),(0,n.jsx)(d.td,{children:"excel\u4e2d\u65f6\u95f4\u662f\u5b58\u50a81900\u5e74\u8d77\u7684\u4e00\u4e2a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff0c\u4f46\u662f\u6709\u65f6\u5019\u9ed8\u8ba4\u5f00\u59cb\u65e5\u671f\u662f1904\uff0c\u6240\u4ee5\u8bbe\u7f6e\u8fd9\u4e2a\u503c\u6539\u6210\u9ed8\u8ba41904\u5e74\u5f00\u59cb"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"numberformat",children:(0,n.jsx)(d.code,{children:"NumberFormat"})}),"\n",(0,n.jsxs)(d.p,{children:["\u6570\u5b57\u8f6c\u6362\uff0c\u7528",(0,n.jsx)(d.code,{children:"String"}),"\u53bb\u63a5\u6536excel\u6570\u5b57\u683c\u5f0f\u7684\u6570\u636e\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6ce8\u89e3\u3002"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u53c2\u7167",(0,n.jsx)(d.code,{children:"java.text.DecimalFormat"}),"\u4e66\u5199\u5373\u53ef"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"roundingMode"}),(0,n.jsx)(d.td,{children:"RoundingMode.HALF_UP"}),(0,n.jsx)(d.td,{children:"\u683c\u5f0f\u5316\u7684\u65f6\u5019\u8bbe\u7f6e\u820d\u5165\u6a21\u5f0f"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,n.jsx)(d.h3,{id:"\u6982\u5ff5\u4ecb\u7ecd",children:"\u6982\u5ff5\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"WriteWorkbook"})," \u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u4e2aexcel"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"WriteSheet"})," \u7406\u89e3\u6210\u4e00\u4e2aexcel\u91cc\u9762\u7684\u4e00\u4e2a\u8868\u5355"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"WriteTable"})," \u4e00\u4e2a\u8868\u5355\u91cc\u9762\u5982\u679c\u6709\u591a\u4e2a\u5b9e\u9645\u7528\u7684\u8868\u683c\uff0c\u5219\u53ef\u4ee5\u7528",(0,n.jsx)(d.code,{children:"WriteTable"})]}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"\u901a\u7528\u53c2\u6570",children:"\u901a\u7528\u53c2\u6570"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"WriteWorkbook"}),",",(0,n.jsx)(d.code,{children:"WriteSheet"})," ,",(0,n.jsx)(d.code,{children:"WriteTable"}),"\u90fd\u4f1a\u6709\u7684\u53c2\u6570\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u4e0a\u7ea7\u3002"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"converter"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u9ed8\u8ba4\u52a0\u8f7d\u4e86\u5f88\u591a\u8f6c\u6362\u5668\uff0c\u8fd9\u91cc\u53ef\u4ee5\u52a0\u5165\u4e0d\u652f\u6301\u7684\u5b57\u6bb5"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"writeHandler"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u5199\u7684\u5904\u7406\u5668\u3002\u53ef\u4ee5\u5b9e\u73b0",(0,n.jsx)(d.code,{children:"WorkbookWriteHandler"}),",",(0,n.jsx)(d.code,{children:"SheetWriteHandler"}),",",(0,n.jsx)(d.code,{children:"RowWriteHandler"}),",",(0,n.jsx)(d.code,{children:"CellWriteHandler"}),"\uff0c\u5728\u5199\u5165excel\u7684\u4e0d\u540c\u9636\u6bb5\u4f1a\u8c03\u7528"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"relativeHeadRowIndex"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"\u5199\u5165\u5230excel\u548c\u4e0a\u9762\u7a7a\u5f00\u51e0\u884c"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"head"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u4e0e",(0,n.jsx)(d.code,{children:"clazz"}),"\u4e8c\u9009\u4e00\u3002\u8bfb\u53d6\u6587\u4ef6\u5934\u5bf9\u5e94\u7684\u5217\u8868\uff0c\u4f1a\u6839\u636e\u5217\u8868\u5339\u914d\u6570\u636e\uff0c\u5efa\u8bae\u4f7f\u7528class"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"clazz"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u4e0e",(0,n.jsx)(d.code,{children:"head"}),"\u4e8c\u9009\u4e00\u3002\u8bfb\u53d6\u6587\u4ef6\u7684\u5934\u5bf9\u5e94\u7684class\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6ce8\u89e3\u3002\u5982\u679c\u4e24\u4e2a\u90fd\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u8bfb\u53d6\u5168\u90e8\u6570\u636e"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"autoTrim"}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"\u4f1a\u5bf9\u5934\u3001\u8bfb\u53d6\u6570\u636e\u7b49\u8fdb\u884c\u81ea\u52a8trim"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"use1904windowing"}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsx)(d.td,{children:"excel\u4e2d\u65f6\u95f4\u662f\u5b58\u50a81900\u5e74\u8d77\u7684\u4e00\u4e2a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff0c\u4f46\u662f\u6709\u65f6\u5019\u9ed8\u8ba4\u5f00\u59cb\u65e5\u671f\u662f1904\uff0c\u6240\u4ee5\u8bbe\u7f6e\u8fd9\u4e2a\u503c\u6539\u6210\u9ed8\u8ba41904\u5e74\u5f00\u59cb"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"useScientificFormat"}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsx)(d.td,{children:"\u6570\u5b57\u8f6c\u6587\u672c\u7684\u65f6\u5019\u5728\u8f83\u5927\u7684\u6570\u503c\u7684\u662f\u5426\u662f\u5426\u91c7\u7528\u79d1\u5b66\u8ba1\u6570\u6cd5"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"needHead"}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"\u662f\u5426\u9700\u8981\u5199\u5165\u5934\u5230excel"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"useDefaultStyle"}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"\u662f\u5426\u4f7f\u7528\u9ed8\u8ba4\u7684\u6837\u5f0f"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"automaticMergeHead"}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"\u81ea\u52a8\u5408\u5e76\u5934\uff0c\u5934\u4e2d\u76f8\u540c\u7684\u5b57\u6bb5\u4e0a\u4e0b\u5de6\u53f3\u90fd\u4f1a\u53bb\u5c1d\u8bd5\u5339\u914d"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"excludeColumnIndexes"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u9700\u8981\u6392\u9664\u5bf9\u8c61\u4e2d\u7684index\u7684\u6570\u636e"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"excludeColumnFieldNames"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u9700\u8981\u6392\u9664\u5bf9\u8c61\u4e2d\u7684\u5b57\u6bb5\u7684\u6570\u636e"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"includeColumnIndexes"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u53ea\u8981\u5bfc\u51fa\u5bf9\u8c61\u4e2d\u7684index\u7684\u6570\u636e"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"includeColumnFieldNames"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u53ea\u8981\u5bfc\u51fa\u5bf9\u8c61\u4e2d\u7684\u5b57\u6bb5\u7684\u6570\u636e"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"orderByIncludeColumn"}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsx)(d.td,{children:"@since 3.3.0 \u5728\u4f7f\u7528\u4e86\u53c2\u6570includeColumnFieldNames \u6216\u8005 includeColumnIndexes\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u4f20\u5165\u96c6\u5408\u7684\u987a\u5e8f\u6392\u5e8f"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filedCacheLocation"}),(0,n.jsx)(d.td,{children:"THREAD_LOCAL"}),(0,n.jsxs)(d.td,{children:["@since 3.3.0 \u89e3\u6790class\u7684field\u4f1a\u6709\u7f13\u5b58\uff0c\u4ee5\u524d\u5168\u5c40\u653e\u5230Map\u91cc\u9762\uff0c3.3.0 \u4ee5\u540e\u9ed8\u8ba4\u653e\u5230ThreadLocal \uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u6b21\u8bfb\u5199\u90fd\u4f1a\u91cd\u65b0\u89e3\u6790class\uff0c\u53ef\u4ee5\u53cd\u5c04\u4fee\u6539class\u7684\u6ce8\u89e3\uff0c\u5e76\u53d1\u573a\u666f\u4e0d\u4f1a\u76f8\u4e92\u5f71\u50cf\u3002",(0,n.jsx)("br",{}),"  THREAD_LOCAL\uff1a\u9ed8\u8ba4\uff0c\u6bcf\u6b21\u8bfb\u5199\u90fd\u4f1a\u7f13\u5b58\uff0c\u4f46\u662f\u4e0d\u662f\u540c\u4e00\u6b21\u4e0d\u4f1a\u5f71\u50cf",(0,n.jsx)("br",{}),"  MEMORY\uff1a\u653e\u5230\u5168\u5c40\u7684\u5185\u5b58\u91cc\u9762\uff0c\u7406\u8bba\u4e0a\u6027\u80fd\u4f1a\u66f4\u597d\uff0c\u4f46\u662f\u65e0\u6cd5\u901a\u8fc7\u53cd\u5c04\u3001\u6392\u9664\u7b49\u65b9\u6cd5\u4fee\u6539\u5bfc\u51fa\u7684\u5bf9\u8c61",(0,n.jsx)("br",{})," NONE\uff1a\u4e0d\u7f13\u5b58\uff0c\u6027\u80fd\u4f1a\u53d8\u5dee\uff0c\u6d89\u53ca\u5230\u8bfb\u7684\u540c\u65f6\u8981\u5199\uff0c\u800c\u4e14\u8fd8\u8981\u53cd\u5c04\u3001\u6392\u9664\u7b49\u65b9\u6cd5\u533a\u4fee\u6539\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u3002",(0,n.jsx)("br",{})]})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"writeworkbook",children:"WriteWorkbook"}),"\n",(0,n.jsxs)(d.admonition,{type:"tip",children:[(0,n.jsx)(d.p,{children:"\u8bbe\u7f6e\u65b9\u6cd5\u5982\u4e0b\uff0c\u627e\u4e0d\u5230\u53c2\u6570\u7684\u770b\u4e0b\u901a\u7528\u53c2\u6570\u91cc\u9762\u662f\u5426\u5b58\u5728\u3002"}),(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-java",children:' EasyExcel.write(fileName, DemoData.class)\n            // \u5728 write \u65b9\u6cd5\u4e4b\u540e\uff0c \u5728 sheet\u65b9\u6cd5\u4e4b\u524d\u90fd\u662f\u8bbe\u7f6eWriteWorkbook\u7684\u53c2\u6570\n            .sheet("\u6a21\u677f")\n            .doWrite(() -> {\n                // \u5206\u9875\u67e5\u8be2\u6570\u636e\n                return data();\n            });\n'})})]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"excelType"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u5f53\u524dexcel\u7684\u7c7b\u578b,\u652f\u6301XLS\u3001XLSX\u3001CSV"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"outputStream"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u4e0e",(0,n.jsx)(d.code,{children:"file"}),"\u4e8c\u9009\u4e00\u3002\u5199\u5165\u6587\u4ef6\u7684\u6d41"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"file"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u4e0e",(0,n.jsx)(d.code,{children:"outputStream"}),"\u4e8c\u9009\u4e00\u3002\u5199\u5165\u7684\u6587\u4ef6"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"templateInputStream"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u6a21\u677f\u7684\u6587\u4ef6\u6d41"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"templateFile"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u6a21\u677f\u6587\u4ef6"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"charset"}),(0,n.jsx)(d.td,{children:"Charset#defaultCharset"}),(0,n.jsx)(d.td,{children:"\u53ea\u6709csv\u6587\u4ef6\u6709\u7528\uff0c\u5199\u5165\u6587\u4ef6\u7684\u65f6\u5019\u4f7f\u7528\u7684\u7f16\u7801"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"autoCloseStream"}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"\u81ea\u52a8\u5173\u95ed\u5199\u5165\u7684\u6d41\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"password"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsx)(d.td,{children:"\u8bfb\u53d6\u6587\u4ef6\u7684\u5bc6\u7801"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"inMemory"}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsx)(d.td,{children:"\u662f\u5426\u5728\u5185\u5b58\u5904\u7406\uff0c\u9ed8\u8ba4\u4f1a\u751f\u6210\u4e34\u65f6\u6587\u4ef6\u4ee5\u8282\u7ea6\u5185\u5b58\u3002\u5185\u5b58\u6a21\u5f0f\u6548\u7387\u4f1a\u66f4\u597d\uff0c\u4f46\u662f\u5bb9\u6613OOM"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"writeExcelOnException"}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsx)(d.td,{children:"\u5199\u5165\u8fc7\u7a0b\u4e2d\u629b\u51fa\u5f02\u5e38\u4e86\uff0c\u662f\u5426\u5c1d\u8bd5\u628a\u6570\u636e\u5199\u5165\u5230excel"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"writesheet",children:"WriteSheet"}),"\n",(0,n.jsxs)(d.admonition,{type:"tip",children:[(0,n.jsx)(d.p,{children:"\u8bbe\u7f6e\u65b9\u6cd5\u5982\u4e0b\uff0c\u627e\u4e0d\u5230\u53c2\u6570\u7684\u770b\u4e0b\u901a\u7528\u53c2\u6570\u91cc\u9762\u662f\u5426\u5b58\u5728\u3002"}),(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-java",children:' EasyExcel.write(fileName, DemoData.class)\n            .sheet("\u6a21\u677f")\n             // \u5728 sheet \u65b9\u6cd5\u4e4b\u540e\uff0c \u5728 doWrite\u65b9\u6cd5\u4e4b\u524d\u90fd\u662f\u8bbe\u7f6eWriteSheet\u7684\u53c2\u6570\n            .doWrite(() -> {\n                // \u5206\u9875\u67e5\u8be2\u6570\u636e\n                return data();\n            });\n'})})]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sheetNo"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"\u9700\u8981\u5199\u5165\u7684\u7f16\u7801"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sheetName"}),(0,n.jsx)(d.td,{children:"\u7a7a"}),(0,n.jsxs)(d.td,{children:["\u9700\u8981\u4e9b\u7684Sheet\u540d\u79f0\uff0c\u9ed8\u8ba4\u540c",(0,n.jsx)(d.code,{children:"sheetNo"})]})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"writetable",children:"WriteTable"}),"\n",(0,n.jsxs)(d.admonition,{type:"tip",children:[(0,n.jsx)(d.p,{children:"\u8bbe\u7f6e\u65b9\u6cd5\u5982\u4e0b\uff0c\u627e\u4e0d\u5230\u53c2\u6570\u7684\u770b\u4e0b\u901a\u7528\u53c2\u6570\u91cc\u9762\u662f\u5426\u5b58\u5728\u3002"}),(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-java",children:'        EasyExcel.write(fileName, DemoData.class)\n            .sheet("\u6a21\u677f")\n            .table()\n            // \u5728 table \u65b9\u6cd5\u4e4b\u540e\uff0c \u5728 doWrite\u65b9\u6cd5\u4e4b\u524d\u90fd\u662f\u8bbe\u7f6eWriteTable\u7684\u53c2\u6570\n            .doWrite(() -> {\n                // \u5206\u9875\u67e5\u8be2\u6570\u636e\n                return data();\n            });\n'})})]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u540d\u79f0"}),(0,n.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tableNo"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"\u9700\u8981\u5199\u5165\u7684\u7f16\u7801"})]})})]})]})}function j(e={}){const{wrapper:d}={...(0,l.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},8453:(e,d,r)=>{r.d(d,{R:()=>t,x:()=>i});var n=r(6540);const l={},s=n.createContext(l);function t(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);