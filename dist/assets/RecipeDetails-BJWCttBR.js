import{H as t,g as d,j as n,m as c,l as p,F as m,n as h,f as o,o as g}from"./index-BXnzDVwr.js";import{C as j,L as u}from"./CategoriesBar-BbRhE4Cs.js";const f=t.div`
  margin: 0 20px;
`,w=t.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;
  width: auto;

  @media only all and (min-width: 1000px) {
    min-width: 400px;
  }
`,x=t.div`
  line-height: 1;
  margin-bottom: 15px;
  min-width: 100px;

  @media only all and (max-width: 420px) {
    min-width: 80px;
  }
`,y=t(x)`
  flex: 3 1 70%;
  padding-right: 10px;

  @media only all and (max-width: 420px) {
    flex: 3 1 55%;
`,C=t(x)`
  flex: 1 1 30%;

  @media only all and (max-width: 420px) {
    flex: 1 1 45%;
`,v=({ingredients:i})=>{const{t:e}=d();return n.jsxs(f,{children:[n.jsx("h3",{children:e("ingredients_head")}),n.jsx(w,{children:i.map((s,l)=>n.jsxs(c.Fragment,{children:[n.jsx(y,{children:s.title}),n.jsx(C,{children:`${s.amount||""} ${p.toLower(s.unit)}`})]},l))})]})},L=t.div`
  margin: 0 10px;
`,R=t.p`
  text-align: justify;
  text-justify: inter-word;
`,F=({preparation:i})=>{const{t:e}=d();return n.jsxs(L,{children:[n.jsx("h3",{children:e("preparation")}),n.jsx(R,{children:i})]})},T=t.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 40px;

  @media only all and (min-width: 1000px) {
    align-items: flex-start;
    flex-direction: row;
  }
`,b=t(j)`
  display: inline;
  margin-right: 20px;
`,A=({recipe:i})=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:i.title}),n.jsx(b,{categories:i.categories}),i.time?n.jsxs("span",{children:[n.jsx(m,{icon:h})," ",i.time,"'"]}):null,n.jsxs(T,{children:[i.ingredients.length>0?n.jsx(v,{ingredients:i.ingredients}):null,i.preparation&&n.jsx(F,{preparation:i.preparation})]})]}),D=()=>{const i=o(a=>a.recipes.recipes),e=o(a=>a.recipes.loading),s=g(),l=Number(s.id)||-1,r=i.find(a=>a.id===l);return n.jsx(u,{isLoading:e,children:r&&n.jsx(A,{recipe:r})})};export{D as default};
