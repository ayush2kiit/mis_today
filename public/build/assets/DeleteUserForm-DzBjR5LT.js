import{d as i,T as _,o as w,c as y,w as e,g as s,a as c,b as t,u as a,B as h,n as v}from"./app-BuFpoxW1.js";import{a as g,b as k}from"./DialogModal-BK54LmD_.js";import{_ as m}from"./DangerButton-BKJtyiOb.js";import{_ as x,a as b}from"./TextInput-Dq4itaZN.js";import{_ as C}from"./SecondaryButton-BSy3vA_P.js";import"./SectionTitle-BRlJVPM3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const D=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),V={class:"mt-5"},$={class:"mt-4"},O={__name:"DeleteUserForm",setup(A){const r=i(!1),l=i(null),o=_({password:""}),p=()=>{r.value=!0,setTimeout(()=>l.value.focus(),250)},u=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>l.value.focus(),onFinish:()=>o.reset()})},n=()=>{r.value=!1,o.reset()};return(B,d)=>(w(),y(g,null,{title:e(()=>[s(" Delete Account ")]),description:e(()=>[s(" Permanently delete your account. ")]),content:e(()=>[D,c("div",V,[t(m,{onClick:p},{default:e(()=>[s(" Delete Account ")]),_:1})]),t(k,{show:r.value,onClose:n},{title:e(()=>[s(" Delete Account ")]),content:e(()=>[s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),c("div",$,[t(x,{ref_key:"passwordInput",ref:l,modelValue:a(o).password,"onUpdate:modelValue":d[0]||(d[0]=f=>a(o).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:h(u,["enter"])},null,8,["modelValue"]),t(b,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(C,{onClick:n},{default:e(()=>[s(" Cancel ")]),_:1}),t(m,{class:v(["ms-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:u},{default:e(()=>[s(" Delete Account ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{O as default};
