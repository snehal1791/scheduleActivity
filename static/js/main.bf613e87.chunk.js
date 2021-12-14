(this["webpackJsonpschedule-activity"]=this["webpackJsonpschedule-activity"]||[]).push([[0],{19:function(t,e,i){},20:function(t,e,i){},23:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i(13),s=i.n(n),c=(i(19),i(4)),r=i(5),l=i(7),o=i(6),m=(i(20),i(2)),d=i(8),u=i(25),h=i(0),j=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={id:t.props.id||Object(u.a)(),activityName:t.props.activityName||"",date:t.props.date||"",startTime:t.props.startTime||"",endTime:t.props.endTime||"",numMaxGuests:t.props.numMaxGuests||0},t.handleSubmit=function(e){e.preventDefault(),t.props.onFormSubmit&&t.props.onFormSubmit({id:t.state.id,activityName:t.state.activityName,date:t.state.date,startTime:t.state.startTime,endTime:t.state.endTime,numMaxGuests:t.state.numMaxGuests})},t.handleNameChange=function(e){t.setState({activityName:e.target.value})},t.handleDateChange=function(e){t.setState({date:e.target.value})},t.handleStartTimeChange=function(e){t.setState({startTime:e.target.value})},t.handleEndTimeChange=function(e){t.setState({endTime:e.target.value})},t.handleMaxGuestsChange=function(e){t.setState({numMaxGuests:e.target.value})},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props.id?"Update":"Create";return Object(h.jsxs)("form",{className:"create-activity-form",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"activity-name-label",children:"Name: "}),Object(h.jsx)("input",{type:"text",name:"activity name",placeholder:"Enter Name of the Acitivity",value:this.state.activityName,onChange:this.handleNameChange,required:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"activity-date-label",children:"Date: "}),Object(h.jsx)("input",{type:"date",name:"activity date",value:this.state.date,onChange:this.handleDateChange,required:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"activity-start-time-label",children:"Start Time: "}),Object(h.jsx)("input",{type:"time",name:"activity start time",value:this.state.startTime,onChange:this.handleStartTimeChange,required:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"activity-end-time-label",children:"End Time: "}),Object(h.jsx)("input",{type:"time",name:"activity end time",value:this.state.endTime,onChange:this.handleEndTimeChange,required:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"activity-name-label",children:"Maximum Number of Guests: "}),Object(h.jsx)("input",{type:"number",name:"activity maximum number of guests",value:this.state.numMaxGuests,onChange:this.handleMaxGuestsChange})]}),Object(h.jsxs)("div",{className:"buttons-segment",children:[Object(h.jsxs)("button",{className:"basic-button",children:[t," Activity"]}),this.props.id?Object(h.jsx)("button",{className:"basic-button",onClick:this.props.onFormClose,children:"Cancel"}):Object(h.jsx)(d.b,{to:"/",className:"cancel-activity",role:"button",children:"Cancel"})]})]})}}]),i}(a.Component),v=j,b=i(10),p=i.n(b),y=i(14),O=i.n(y),x=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).handleDelete=function(){t.props.onDeleteActivity(t.props.id)},t.handleFormEdit=function(){t.props.openForm(t.props.id)},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props,e=p()(t.startTime,"HH:mm").format("h:mm a"),i=p()(t.endTime,"HH:mm").format("h:mm a");return Object(h.jsxs)("div",{className:"content col",children:[Object(h.jsxs)("div",{className:"activities-content",children:[Object(h.jsx)("h2",{className:"activity-name",children:this.props.activityName}),Object(h.jsx)("div",{className:"activity-info",children:Object(h.jsx)(O.a,{format:"dddd, MMMM D, Y",children:t.date})}),Object(h.jsxs)("div",{className:"activity-time",children:[e," - ",i]}),Object(h.jsxs)("div",{className:"activity-guests",children:[Object(h.jsx)("span",{className:"guest-icon"}),this.props.numMaxGuests]})]}),Object(h.jsxs)("div",{className:"extra-content",children:[Object(h.jsx)("button",{className:"extra-content-buttons edit-icon",onClick:this.handleFormEdit}),Object(h.jsx)("button",{className:"extra-content-buttons trash-icon",onClick:this.handleDelete})]})]})}}]),i}(a.Component),f=x,N=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={editFormOpen:!1,activityToEdit:null,query:""},t.handleFormEdit=function(e){t.setState({editFormOpen:!0,activityToEdit:e})},t.handleFormClose=function(){t.setState({editFormOpen:!1})},t.handleFormSubmit=function(e){t.props.onFormSubmit(e),t.handleFormClose()},t.updateQuery=function(e){t.setState((function(){return{query:e.trim()}}))},t.clearQuery=function(){t.updateQuery("")},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this,e=this.props.activities,i=this.state.query,a=""===i?e:e.filter((function(t){return t.activityName.toLowerCase().includes(i.toLowerCase())})),n=a.map((function(e){return Object(h.jsx)(f,{id:e.id,activityName:e.activityName,date:e.date,startTime:e.startTime,endTime:e.endTime,numMaxGuests:e.numMaxGuests,onDeleteActivity:t.props.onDeleteActivity,openForm:t.handleFormEdit},e.id)})),s=a.filter((function(e){return e.id===t.state.activityToEdit}));return this.state.editFormOpen?Object(h.jsx)("div",{className:"edit-activity-main",children:Object(h.jsx)(v,{id:this.state.activityToEdit,activityName:s[0].activityName,date:s[0].date,startTime:s[0].startTime,endTime:s[0].endTime,numMaxGuests:s[0].numMaxGuests,onFormSubmit:this.handleFormSubmit,onFormClose:this.handleFormClose})}):Object(h.jsxs)("div",{className:"list-of-activities row",children:[Object(h.jsxs)("div",{className:"list-activities-top",children:[Object(h.jsx)("input",{className:"search-activities",type:"text",placeholder:"Search Activity by Name",value:this.state.query,onChange:function(e){return t.updateQuery(e.target.value)}}),i?Object(h.jsxs)("span",{className:"search-result",children:["Now showing activities ",n.length," of ",e.length]}):""]}),n]})}}]),i}(a.Component),g=N,C=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props.activities,e=t.sort((function(t,e){return t.activityName>e.activityName?1:t.activityName<e.activityName?-1:0}));return console.log(e),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("div",{className:"left-container",children:Object(h.jsx)("h1",{className:"header-title main-header",children:"Schedule Activities"})}),Object(h.jsx)("div",{className:"right-container",children:Object(h.jsx)(d.b,{to:"/createActivity",className:"create-activity-link",children:"New Activity"})})]}),Object(h.jsx)("main",{className:"App-main",children:t.length?Object(h.jsx)(g,{className:"activity container",activities:e,onDeleteActivity:this.props.onDeleteActivity,onFormSubmit:this.props.onFormSubmit}):Object(h.jsx)("div",{className:"no-activities",children:'Schedule new activities by clicking on the "New Activity" button or navigate to "/createActivity"'})})]})}}]),i}(a.Component),T=C,S=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={redirectTo:!1},t.handleSubmit=function(e){t.props.onFormSubmit(e),t.setState({redirectTo:!0})},t}return Object(r.a)(i,[{key:"render",value:function(){return this.state.redirectTo?Object(h.jsx)(m.d,{children:Object(h.jsx)(m.b,{path:"*",element:Object(h.jsx)(m.a,{replace:!0,to:"/"})})}):Object(h.jsxs)("div",{className:"create-activity",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(d.b,{to:"/",className:"close-create-activity",children:"Close"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h1",{className:"header-title",children:"Activity Details"})})]}),Object(h.jsx)("main",{className:"create-activity-main",children:Object(h.jsx)(v,{onFormSubmit:this.handleSubmit})})]})}}]),i}(a.Component),A=S,F=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={activities:[]},t.handleCreateActivity=function(e){t.createActivity(e)},t.createActivity=function(e){console.log(e),t.setState({activities:t.state.activities.concat(e)})},t.onDeleteActivity=function(e){t.setState((function(t){return{activities:t.activities.filter((function(t){return t.id!==e}))}}))},t.handleFormSubmit=function(e){t.updateActivity(e)},t.updateActivity=function(e){t.setState({activities:t.state.activities.map((function(t){return t.id===e.id?Object.assign({},t,{activityName:e.activityName,date:e.date,startTime:e.startTime,endTime:e.endTime,numMaxGuests:e.numMaxGuests}):t}))})},t}return Object(r.a)(i,[{key:"render",value:function(){return Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{path:"/",element:Object(h.jsx)(T,{activities:this.state.activities,onDeleteActivity:this.onDeleteActivity,onFormSubmit:this.handleFormSubmit})}),Object(h.jsx)(m.b,{path:"/createActivity",element:Object(h.jsx)(A,{onFormSubmit:this.handleCreateActivity})})]})}}]),i}(a.Component),M=F,D=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,c=e.getTTFB;i(t),a(t),n(t),s(t),c(t)}))};s.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),D()}},[[23,1,2]]]);
//# sourceMappingURL=main.bf613e87.chunk.js.map