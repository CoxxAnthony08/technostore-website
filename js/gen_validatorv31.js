function Validator(e){return this.formobj=document.forms[e],this.formobj?(this.formobj.onsubmit?(this.formobj.old_onsubmit=this.formobj.onsubmit,this.formobj.onsubmit=null):this.formobj.old_onsubmit=null,this.formobj._sfm_form_name=e,this.formobj.onsubmit=form_submit_handler,this.addValidation=add_validation,this.setAddnlValidationFunction=set_addnl_vfunction,this.clearAllValidations=clear_all_validations,this.disable_validations=!1,document.error_disp_handler=new sfm_ErrorDisplayHandler,this.EnableOnPageErrorDisplay=validator_enable_OPED,this.EnableOnPageErrorDisplaySingleBox=validator_enable_OPED_SB,this.show_errors_together=!0,this.EnableMsgsTogether=sfm_enable_show_msgs_together,document.set_focus_onerror=!0,void(this.EnableFocusOnError=sfm_validator_enable_focus)):void alert("Error: couldnot get Form object "+e)}function sfm_validator_enable_focus(e){document.set_focus_onerror=e}function set_addnl_vfunction(e){this.formobj.addnlvalidation=e}function sfm_set_focus(e){document.set_focus_onerror&&e.focus()}function sfm_enable_show_msgs_together(){this.show_errors_together=!0,this.formobj.show_errors_together=!0}function clear_all_validations(){for(var e=0;e<this.formobj.elements.length;e++)this.formobj.elements[e].validationset=null}function form_submit_handler(){var bRet=!0
document.error_disp_handler.clear_msgs()
for(var itr=0;itr<this.elements.length&&(this.elements[itr].validationset&&!this.elements[itr].validationset.validate()&&(bRet=!1),bRet||this.show_errors_together);itr++);return this.addnlvalidation&&(str=" var ret = "+this.addnlvalidation+"()",eval(str),ret||(bRet=!1)),bRet?!0:(document.error_disp_handler.FinalShowMsg(),!1)}function add_validation(e,r,t){var s=null
if(arguments.length>3&&(s=arguments[3]),!this.formobj)return void alert("Error: The form object is not set properly")
var a=this.formobj[e]
return a.length&&isNaN(a.selectedIndex)&&(a=a[0]),a?(a.validationset||(a.validationset=new ValidationSet(a,this.show_errors_together)),a.validationset.add(r,t,s),void(a.validatorobj=this)):void alert("Error: Couldnot get the input object named: "+e)}function validator_enable_OPED(){document.error_disp_handler.EnableOnPageDisplay(!1)}function validator_enable_OPED_SB(){document.error_disp_handler.EnableOnPageDisplay(!0)}function sfm_ErrorDisplayHandler(){this.msgdisplay=new AlertMsgDisplayer,this.EnableOnPageDisplay=edh_EnableOnPageDisplay,this.ShowMsg=edh_ShowMsg,this.FinalShowMsg=edh_FinalShowMsg,this.all_msgs=[],this.clear_msgs=edh_clear_msgs}function edh_clear_msgs(){this.msgdisplay.clearmsg(this.all_msgs),this.all_msgs=[]}function edh_FinalShowMsg(){this.msgdisplay.showmsg(this.all_msgs)}function edh_EnableOnPageDisplay(e){1==e?this.msgdisplay=new SingleBoxErrorDisplay:this.msgdisplay=new DivMsgDisplayer}function edh_ShowMsg(e,r){var t=[]
t.input_element=r,t.msg=e,this.all_msgs.push(t)}function AlertMsgDisplayer(){this.showmsg=alert_showmsg,this.clearmsg=alert_clearmsg}function alert_clearmsg(e){}function alert_showmsg(e){for(var r="",t=null,s=0;s<e.length;s++)null==t&&(t=e[s].input_element),r+=e[s].msg+"\n"
alert(r),null!=t&&sfm_set_focus(t)}function sfm_show_error_msg(e,r){document.error_disp_handler.ShowMsg(e,r)}function SingleBoxErrorDisplay(){this.showmsg=sb_div_showmsg,this.clearmsg=sb_div_clearmsg}function sb_div_clearmsg(e){var r=form_error_div_name(e)
show_div_msg(r,"")}function sb_div_showmsg(e){for(var r="<ul>\n",t=0;t<e.length;t++)r+="<li>"+e[t].msg+"</li>\n"
r+="</ul>"
var s=form_error_div_name(e)
show_div_msg(s,r)}function form_error_div_name(e){var r=null
for(var t in e)if(r=e[t].input_element)break
var s=""
return r&&(s=r.form._sfm_form_name+"_errorloc"),s}function DivMsgDisplayer(){this.showmsg=div_showmsg,this.clearmsg=div_clearmsg}function div_clearmsg(e){for(var r in e){var t=element_div_name(e[r].input_element)
show_div_msg(t,"")}}function element_div_name(e){var r=e.form._sfm_form_name+"_"+e.name+"_errorloc"
return r=r.replace(/[\[\]]/gi,"")}function div_showmsg(e){var r=null
for(var t in e){null==r&&(r=e[t].input_element)
var s=element_div_name(e[t].input_element)
show_div_msg(s,e[t].msg)}null!=r&&sfm_set_focus(r)}function show_div_msg(e,r){if(e.length<=0)return!1
if(document.layers){if(divlayer=document.layers[e],!divlayer)return
divlayer.document.open(),divlayer.document.write(r),divlayer.document.close()}else if(document.all){if(divlayer=document.all[e],!divlayer)return
divlayer.innerHTML=r}else if(document.getElementById){if(divlayer=document.getElementById(e),!divlayer)return
divlayer.innerHTML=r}divlayer.style.visibility="visible"}function ValidationDesc(e,r,t,s){this.desc=r,this.error=t,this.itemobj=e,this.condition=s,this.validate=vdesc_validate}function vdesc_validate(){return null==this.condition||eval(this.condition)?validateInput(this.desc,this.itemobj,this.error)?!0:(this.itemobj.validatorobj.disable_validations=!0,sfm_set_focus(this.itemobj),!1):!0}function ValidationSet(e,r){this.vSet=[],this.add=add_validationdesc,this.validate=vset_validate,this.itemobj=e,this.msgs_together=r}function add_validationdesc(e,r,t){this.vSet[this.vSet.length]=new ValidationDesc(this.itemobj,e,r,t)}function vset_validate(){for(var e=!0,r=0;r<this.vSet.length&&(e=e&&this.vSet[r].validate(),e||this.msgs_together);r++);return e}function validateEmail(e){var r=e.match("^(.+)@(.+)$")
if(null==r)return!1
if(null!=r[1]){var t=/^\"?[\w-_\.]*\"?$/
if(null==r[1].match(t))return!1}if(null!=r[2]){var s=/^[\w-\.]*\.[A-Za-z]{2,4}$/
if(null==r[2].match(s)){var a=/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/
if(null==r[2].match(a))return!1}return!0}return!1}function IsCheckSelected(e,r){var t=!1,s=e.form.elements[e.name]
if(s.length){for(var a=-1,n=0;n<s.length;n++)if(s[n].value==r){a=n
break}a>=0&&"1"==s[a].checked&&(t=!0)}else"1"==e.checked&&(t=!0)
return t}function TestDontSelectChk(e,r,t){var s=!0
return s=IsCheckSelected(e,r)?!1:!0,0==s&&(t&&0!=t.length||(t="Can't Proceed as you selected "+e.name),sfm_show_error_msg(t,e)),s}function TestShouldSelectChk(e,r,t){var s=!0
return s=IsCheckSelected(e,r)?!0:!1,0==s&&(t&&0!=t.length||(t="You should select "+e.name),sfm_show_error_msg(t,e)),s}function TestRequiredInput(objValue,strError){var ret=!0,val=objValue.value
return val=val.replace(/^\s+|\s+$/g,""),0==eval(val.length)&&(strError&&0!=strError.length||(strError=objValue.name+" : Required Field"),sfm_show_error_msg(strError,objValue),ret=!1),ret}function TestMaxLen(objValue,strMaxLen,strError){var ret=!0
return eval(objValue.value.length)>eval(strMaxLen)&&(strError&&0!=strError.length||(strError=objValue.name+" : "+strMaxLen+" characters maximum "),sfm_show_error_msg(strError,objValue),ret=!1),ret}function TestMinLen(objValue,strMinLen,strError){var ret=!0
return eval(objValue.value.length)<eval(strMinLen)&&(strError&&0!=strError.length||(strError=objValue.name+" : "+strMinLen+" characters minimum  "),sfm_show_error_msg(strError,objValue),ret=!1),ret}function TestInputType(e,r,t,s){var a=!0,n=e.value.search(r)
return e.value.length>0&&n>=0&&(t&&0!=t.length||(t=s),sfm_show_error_msg(t,e),a=!1),a}function TestEmail(e,r){var t=!0
return e.value.length>0&&!validateEmail(e.value)&&(r&&0!=r.length||(r=e.name+": Enter a valid Email address "),sfm_show_error_msg(r,e),t=!1),t}function TestLessThan(objValue,strLessThan,strError){var ret=!0
return isNaN(objValue.value)?(sfm_show_error_msg(objValue.name+": Should be a number ",objValue),ret=!1):eval(objValue.value)>=eval(strLessThan)&&(strError&&0!=strError.length||(strError=objValue.name+" : value should be less than "+strLessThan),sfm_show_error_msg(strError,objValue),ret=!1),ret}function TestGreaterThan(objValue,strGreaterThan,strError){var ret=!0
return isNaN(objValue.value)?(sfm_show_error_msg(objValue.name+": Should be a number ",objValue),ret=!1):eval(objValue.value)<=eval(strGreaterThan)&&(strError&&0!=strError.length||(strError=objValue.name+" : value should be greater than "+strGreaterThan),sfm_show_error_msg(strError,objValue),ret=!1),ret}function TestRegExp(e,r,t){var s=!0
return e.value.length>0&&!e.value.match(r)&&(t&&0!=t.length||(t=e.name+": Invalid characters found "),sfm_show_error_msg(t,e),s=!1),s}function TestDontSelect(objValue,dont_sel_index,strError){var ret=!0
return null==objValue.selectedIndex&&(sfm_show_error_msg("ERROR: dontselect command for non-select Item"),ret=!1),objValue.selectedIndex==eval(dont_sel_index)&&(strError&&0!=strError.length||(strError=objValue.name+": Please Select one option "),sfm_show_error_msg(strError,objValue),ret=!1),ret}function TestSelectOneRadio(e,r){for(var t=e.form.elements[e.name],s=!1,a=0;a<t.length;a++)if(t[a].checked){s=!0
break}return 0==s&&(r&&0!=r.length||(r="Please select one option from "+e.name),sfm_show_error_msg(r,e)),s}function validateInput(e,r,t){var s=!0,a=e.search("="),n="",o=""
switch(a>=0?(n=e.substring(0,a),o=e.substr(a+1)):n=e,n){case"req":case"required":s=TestRequiredInput(r,t)
break
case"maxlength":case"maxlen":s=TestMaxLen(r,o,t)
break
case"minlength":case"minlen":s=TestMinLen(r,o,t)
break
case"alnum":case"alphanumeric":s=TestInputType(r,"[^A-Za-z0-9]",t,r.name+": Only alpha-numeric characters allowed ")
break
case"alnum_s":case"alphanumeric_space":s=TestInputType(r,"[^A-Za-z0-9\\s]",t,r.name+": Only alpha-numeric characters and space allowed ")
break
case"num":case"numeric":s=TestInputType(r,"[^0-9]",t,r.name+": Only digits allowed ")
break
case"dec":case"decimal":s=TestInputType(r,"[^0-9.]",t,r.name+": Only numbers allowed ")
break
case"alphabetic":case"alpha":s=TestInputType(r,"[^A-Za-z]",t,r.name+": Only alphabetic characters allowed ")
break
case"alphabetic_space":case"alpha_s":s=TestInputType(r,"[^A-Za-z\\s]",t,r.name+": Only alphabetic characters and space allowed ")
break
case"email":s=TestEmail(r,t)
break
case"lt":case"lessthan":s=TestLessThan(r,o,t)
break
case"gt":case"greaterthan":s=TestGreaterThan(r,o,t)
break
case"regexp":s=TestRegExp(r,o,t)
break
case"dontselect":s=TestDontSelect(r,o,t)
break
case"dontselectchk":s=TestDontSelectChk(r,o,t)
break
case"shouldselchk":s=TestShouldSelectChk(r,o,t)
break
case"selone_radio":s=TestSelectOneRadio(r,t)}return s}function VWZ_IsListItemSelected(e,r){for(var t=0;t<e.options.length;t++)if(1==e.options[t].selected&&e.options[t].value==r)return!0
return!1}function VWZ_IsChecked(e,r){if(e.length){for(var t=0;t<e.length;t++)if("1"==e[t].checked&&e[t].value==r)return!0}else if("1"==e.checked)return!0
return!1}