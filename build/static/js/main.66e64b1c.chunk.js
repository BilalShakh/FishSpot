(this.webpackJsonpproject4ww3=this.webpackJsonpproject4ww3||[]).push([[0],{144:function(e,t,a){},145:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(47),r=a.n(c),n=(a(144),a(57)),o=a(4),l=a(25),d=a(20),j=a(8),h=a(9),b=a(12),u=a(11),x=a(218),g=a(196),p=a(197),O=a(221),m=a(199),f=a(200),w=a(201),S=a(132),v=a(217),y=a(204),C=a(202),k=a(205),I=(a(145),Object(i.createContext)("")),R=a(27),L=a.n(R),W=a(1);var T=function(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(x.a)();return Object(i.useEffect)((function(){if(localStorage.getItem("accessToken")){var e={accessToken:localStorage.getItem("accessToken")};L.a.get("https://www.compsci4ww3bilalyichun.com:8080/auth/verify",{headers:e}).then((function(e,t){e.data.isValid?a({username:localStorage.getItem("username"),id:localStorage.getItem("id"),status:!0}):(localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),s({title:"Log in has timed out, please sign in again.",status:"warning",isClosable:!0}))}))}}),[localStorage.getItem("accessToken")]),Object(W.jsx)("div",{class:"background-header",children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(p.a,{py:"7",px:"5",display:{base:"none",md:"flex"},children:Object(W.jsxs)(O.a,{spacing:"50px",children:[Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/",children:"Home"})}),Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/submission",children:"Add New Spot"})})]})}),Object(W.jsx)(f.a,{display:{base:"none",md:"block"}}),Object(W.jsx)(p.a,{p:"3",children:Object(W.jsx)(w.a,{fontSize:{base:"2xl",md:"4xl"},color:"white",children:"FISH SPOT"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(p.a,{p:"5",children:[Object(W.jsxs)(O.a,{spacing:"50px",display:{base:"none",md:"flex"},children:[Object(W.jsx)(l.b,{to:"/search",children:Object(W.jsx)(C.a,{w:6,h:6,color:"white",_hover:{cursor:"Pointer"}})}),t.status?Object(W.jsxs)(m.a,{size:"sm",color:"white",children:["Signed in as: ",t.username]}):Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/signin",children:"Sign In"})}),t.status?Object(W.jsx)(S.a,{colorScheme:"purple",borderRadius:"25px",onClick:function(){a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),s({title:"Successfully signed out of your account!",status:"success",isClosable:!0})},children:"Sign out"}):Object(W.jsx)(S.a,{colorScheme:"purple",borderRadius:"25px",children:Object(W.jsx)(l.b,{to:"/signup",children:"Sign up"})})]}),Object(W.jsxs)(v.a,{children:[Object(W.jsx)(v.b,{as:y.a,"aria-label":"Options",icon:Object(W.jsx)(k.a,{}),variant:"outline",display:{base:"inline-flex",md:"none"},bg:"white"}),Object(W.jsxs)(v.d,{children:[Object(W.jsx)(l.b,{to:"/",children:Object(W.jsx)(v.c,{children:"Home"})}),Object(W.jsx)(l.b,{to:"/submission",children:Object(W.jsx)(v.c,{children:"Add New Spot"})}),Object(W.jsx)(l.b,{to:"/signin",children:Object(W.jsx)(v.c,{children:"Sign in"})}),Object(W.jsx)(l.b,{to:"/signup",children:Object(W.jsx)(v.c,{children:"Sign up"})})]})]})]})]})})};a(170);var P=function(){return Object(W.jsx)("div",{class:"background-footer",children:Object(W.jsxs)(O.c,{divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"center"}),spacing:"0",children:[Object(W.jsx)(p.a,{}),Object(W.jsx)(p.a,{width:"75%",mt:"15px",children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(p.a,{children:Object(W.jsxs)(O.c,{spacing:"0",alignItems:"baseline",children:[Object(W.jsx)(w.a,{fontSize:"2xl",color:"white",children:"FISH SPOT"}),Object(W.jsx)(w.a,{fontSize:"l",color:"white",width:"200px",children:"Premium Service for finding your fishing spot"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"200px",children:"Contact Number: 123-456-7891"})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{display:{base:"none",md:"flex"},children:Object(W.jsxs)(O.c,{spacing:"0",alignItems:"baseline",children:[Object(W.jsx)(w.a,{fontSize:"xl",color:"white",children:"Quick Navigation"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Home"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Add new spot"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Search"})]})})]})})]})})},z=a.p+"static/media/fishing_1.a08d269c.jpg",N=a.p+"static/media/fishing_2.bf89dfc7.jpeg",A=a.p+"static/media/fishing_3.84d6fe77.jpg",D=a.p+"static/media/fishing_4.d6bc01be.jpg",E=a.p+"static/media/fishing_5.6da8ec61.jpg",F=a(207),q=a(206),M=a(208),U=a(209);var H=function(e){return Object(W.jsx)("div",{children:Object(W.jsxs)(p.a,{maxW:"300px",h:"492px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",backgroundColor:e.color,children:[Object(W.jsx)(q.a,{w:"300px",ratio:.87,children:Object(W.jsx)(F.a,{src:e.Image,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(p.a,{p:"6",children:[Object(W.jsxs)(p.a,{display:"flex",alignItems:"baseline",children:[Object(W.jsx)(M.a,{borderRadius:"full",px:"2",colorScheme:"gray",children:e.badge}),Object(W.jsx)(p.a,{color:"gray.700",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.featureLine})]}),Object(W.jsx)(p.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(W.jsx)(p.a,{isTruncated:!0,children:e.description}),Object(W.jsxs)(p.a,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(t,a){return Object(W.jsx)(U.a,{color:a<e.rating?"gray.500":"gray.300"},a)})),Object(W.jsxs)(p.a,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.reviewCount," reviews"]})]})]})]})})},_=(a(171),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"home-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(T,{}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(H,{color:"pink",Image:z,badge:"trending",featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(H,{color:"teal.100",Image:N,badge:"trending",featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(H,{color:"orange.200",Image:A,badge:"trending",featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(H,{color:"purple.200",Image:D,badge:"trending",featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]}),Object(W.jsxs)(O.a,{children:[Object(W.jsx)(p.a,{maxH:"400px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",children:Object(W.jsx)(F.a,{src:E,alt:"IMAGE NOT FOUND"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(p.a,{p:"2",width:"400px",children:[Object(W.jsx)(w.a,{fontSize:"3xl",color:"white",fontWeight:"bold",children:"Ice fishing at Devils Lake"}),Object(W.jsx)(f.a,{}),Object(W.jsx)(w.a,{fontSize:"l",color:"white",noOfLines:[1,2,3,4,5,6,7,8,9,11,12],mt:"20px",children:"The state of North Dakota sure knows how to sell this lake. Touting it as \u201ca fishing destination unlike anywhere else,\u201d the tourism board brags that its fish are large and healthy, its winter season is long, and the \u201chuge\u201d size of the lake means you can avoid tangling your lines with any other overeager anglers. Grab a 3 or 10-day license to search for jumbo perch, walleye and big pike."}),Object(W.jsx)(w.a,{fontSize:"s",color:"white",mt:"20px",children:"North Dakota, USA"})]})]}),Object(W.jsx)(P,{})]})})}}]),a}(i.Component)),$=a(70),G=a(210),V=a(211);a(172);function B(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(""),r=Object(o.a)(c,2),n=r[0],l=r[1],j=Object(i.useState)(""),h=Object(o.a)(j,2),b=h[0],u=h[1],g=Object(i.useState)(""),m=Object(o.a)(g,2),v=m[0],y=m[1],C=Object(i.useState)(""),k=Object(o.a)(C,2),R=k[0],z=k[1],N=Object(i.useState)(""),A=Object(o.a)(N,2),D=A[0],E=A[1],F=Object(d.g)(),q=Object(i.useContext)(I).setAuthState,M=Object(x.a)();function U(e){var t=e.target.id,a=e.target.value;switch(t){case"FirstName":s(a);break;case"LastName":l(a);break;case"Email":u(a);break;case"Username":y(a);break;case"PasswordI":z(a);break;default:E(a)}}var H=function(){var e={Email:b,Password:D,Name:a+" "+n,Username:v};L.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/signup",e).then((function(e,t){e.data.status?(M({title:"Account successfully created",status:"success",isClosable:!0}),function(){var e={Email:b,Password:D};L.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/login",e).then((function(e,t){e.data.valid?(localStorage.setItem("accessToken",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data.id),q({username:e.data.username,id:e.data.id,status:!0}),M({title:"Account successfully logged in!",status:"success",isClosable:!0})):M({title:"Invalid Email or Password Entered",status:"error",isClosable:!0})}))}(),F.push("/")):M({title:e.data.reason,status:"error",isClosable:!0})}))};return Object(W.jsx)("div",{class:"registration-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(T,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",maxW:"850px",maxH:"550px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",children:"Sign up"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"15px",children:[Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"320px",id:"FirstNameFC",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"First name"}),Object(W.jsx)(V.a,{id:"FirstName",bg:"gray.600",borderWidth:"0px",placeholder:"First name",textColor:"white",value:a,onChange:U})]}),Object(W.jsxs)($.a,{w:"320px",id:"LastNameFC",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Last name"}),Object(W.jsx)(V.a,{id:"LastName",bg:"gray.600",borderWidth:"0px",placeholder:"Last name",textColor:"white",value:n,onChange:U})]})]}),Object(W.jsxs)($.a,{w:"655px",id:"EmailFC",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Email"}),Object(W.jsx)(V.a,{id:"Email",type:"email",bg:"gray.600",borderWidth:"0px",placeholder:"Email",textColor:"white",value:b,onChange:U})]}),Object(W.jsxs)($.a,{w:"655px",id:"UsernameFC",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Username"}),Object(W.jsx)(V.a,{id:"Username",bg:"gray.600",borderWidth:"0px",placeholder:"Username",textColor:"white",value:v,onChange:U})]}),Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"320px",id:"passwordInitial",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Password"}),Object(W.jsx)(V.a,{id:"PasswordI",type:"password",bg:"gray.600",borderWidth:"0px",placeholder:"Password",textColor:"white",value:R,onChange:U})]}),Object(W.jsxs)($.a,{w:"320px",id:"passwordConfirm",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white"}),Object(W.jsx)(V.a,{id:"PasswordC",type:"password",bg:"gray.600",borderWidth:"0px",placeholder:"Confrim Password",textColor:"white",value:D,onChange:U})]})]}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";/^[a-zA-Z]+$/.test(a)||(t+="First name is invalid, please include only letters in your Firstname."),/^[a-zA-Z]+$/.test(n)||(t+="Last name is invalid, please include only letters in your lastname."),/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(b)||(t+="Email is invalid, please enter a valid email. "),R===D&&/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(D)||(t+="Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "),t.length>0?M({title:"Invalid Details entered",description:t,status:"error",isClosable:!0}):H()},children:"Submit"})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}var Y=function(e){return Object(W.jsx)("div",{children:Object(W.jsxs)(p.a,{maxW:"300px",h:"492px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",backgroundColor:e.color,children:[Object(W.jsx)(q.a,{w:"300px",ratio:.87,children:Object(W.jsx)(F.a,{src:e.Image,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(p.a,{p:"6",children:[Object(W.jsx)(p.a,{display:"flex",alignItems:"baseline",children:Object(W.jsx)(p.a,{color:"gray.700",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.featureLine})}),Object(W.jsx)(p.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(W.jsx)(p.a,{isTruncated:!0,children:e.description}),Object(W.jsxs)(p.a,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(t,a){return Object(W.jsx)(U.a,{color:a<e.rating?"gray.500":"gray.300"},a)})),Object(W.jsxs)(p.a,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.reviewCount," reviews"]})]})]})]})})},K=a(71);var Z={width:"100vw",height:"100vh"};function J(e){var t=e.locations,a=e.zoomLevel,i=s.a.useState(null),c=Object(o.a)(i,2),r=c[0],n=c[1],l=Object(K.d)({googleMapsApiKey:"AIzaSyDsHPRgT-culwhK_LMVrOi9zbrRdGijXjQ"}),d=l.isLoaded;if(l.loadError)return"Error loading maps";if(!d)return"Loading Maps";var j=function(e){var t=[];return Object.keys(e).forEach((function(a){t.push(e[a])})),t}(t);return Object(W.jsx)("div",{children:Object(W.jsxs)(K.a,{mapContainerStyle:Z,zoom:a,center:{lat:t.first.lat,lng:t.first.lng},children:[j.map((function(e){return Object(W.jsx)(K.c,{position:{lat:e.lat,lng:e.lng},onClick:function(){n(null),n(e)}})})),r?Object(W.jsx)(K.b,{position:{lat:r.lat+2e-4,lng:r.lng},onCloseClick:function(){n(null)},children:Object(W.jsx)("h2",{children:r.text})}):null]})})}a(174);var Q={first:{text:"Credit River, Mississauga, ON",lat:43.5557682874319,lng:-79.60028572660218},1:{text:"Cooksville Creek",lat:43.56416169111711,lng:-79.56491222843655},2:{text:"Mimico Creek",lat:43.623089818162995,lng:-79.48015828092811}},X=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"result-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(T,{}),Object(W.jsxs)(O.c,{spacing:"40px",children:[Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",width:"65vw",height:"60vh",children:Object(W.jsx)(J,{locations:Q,zoomLevel:12})}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(Y,{color:"pink",Image:z,featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(Y,{color:"teal.100",Image:N,featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(Y,{color:"orange.200",Image:A,featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(Y,{color:"purple.200",Image:D,featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(Y,{color:"pink",Image:z,featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(Y,{color:"teal.100",Image:N,featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(Y,{color:"orange.200",Image:A,featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(Y,{color:"purple.200",Image:D,featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]})]}),Object(W.jsx)(P,{})]})})}}]),a}(i.Component),ee=a(212);var te=function(e){return Object(W.jsxs)(O.a,{justifyItems:"baseline",alignSelf:"baseline",w:"100%",children:[Object(W.jsx)(ee.a,{name:e.name}),Object(W.jsxs)(O.c,{alignItems:"baseline",spacing:"1px",children:[Object(W.jsxs)(g.a,{w:"25%",children:[Object(W.jsx)(w.a,{fontSize:"130%",color:"white",children:e.name}),Object(W.jsx)(f.a,{}),Array(5).fill("").map((function(t,a){return Object(W.jsx)(U.a,{color:a<e.rating?"gray.300":"gray.500",alignSelf:"center"},a)}))]}),Object(W.jsx)(w.a,{fontSize:"100%",fontWeight:"thin",noOfLines:[1,2,3],color:"white",children:e.description})]})]})},ae=a(213),ie=a(214),se=(a(175),a.p+"static/media/fishing_6.643c946f.jpg"),ce={first:{text:"Credit River, Mississauga, ON",lat:43.5557682874319,lng:-79.60028572660218}};function re(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(d.h)().id,c=Object(d.g)(),r=Object(x.a)(),n=Object(i.useState)("Credit River"),l=Object(o.a)(n,2),j=l[0],h=l[1],b=Object(i.useState)(""),u=Object(o.a)(b,2),m=u[0],v=u[1],y=Object(i.useState)(ce),C=Object(o.a)(y,2),k=C[0],R=C[1],z=Object(i.useState)(se),N=Object(o.a)(z,2),A=N[0],D=N[1],E=Object(i.useState)(!1),q=Object(o.a)(E,2),M=q[0],U=q[1],H=Object(i.useState)(""),_=Object(o.a)(H,2),V=_[0],B=_[1],Y=Object(i.useState)(""),K=Object(o.a)(Y,2),Z=K[0],Q=K[1],X=Object(i.useState)([]),ee=Object(o.a)(X,2),re=ee[0],ne=ee[1];Object(i.useEffect)((function(){L.a.get("https://www.compsci4ww3bilalyichun.com:8080/spot/info/"+s).then((function(e,t){e.data.isValid?(h(e.data.SpotName),R({first:{text:e.data.SpotName,lat:e.data.LocLatitude,lng:e.data.LocLongitude}}),v(e.data.Description),D("https://www.compsci4ww3bilalyichun.com:8080/spot/images/"+e.data.ImageKey)):c.push("/")})),L.a.get("https://www.compsci4ww3bilalyichun.com:8080/spot/reviews/"+s).then((function(e,t){e.data.foundReview&&ne(e.data.reviews)}))}),[s,c]);var oe=function(){var e={ObjectID:s,UserID:t.id,Rating:Z.substring(0,1),Description:V},i={accessToken:localStorage.getItem("accessToken")};L.a.post("https://www.compsci4ww3bilalyichun.com:8080/spot/reviews/create",e,{headers:i}).then((function(e,t){e.data.valid?(r({title:"Your review has been successfully posted!",status:"success",isClosable:!0}),L.a.get("https://www.compsci4ww3bilalyichun.com:8080/spot/reviews/"+s).then((function(e,t){e.data.foundReview&&ne(e.data.reviews)}))):(r({title:"Your session has expired, please login again",status:"error",isClosable:!0}),a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),U(!1))}))},le=function(e){var t=e.target.id,a=e.target.value;if("Description"===t)B(a),console.log(V);else Q(a),console.log(Z)};return Object(W.jsx)("div",{class:"object-background",children:Object(W.jsxs)(O.c,{spacing:"80px",children:[Object(W.jsx)(T,{}),Object(W.jsxs)(O.a,{maxW:"50%",children:[Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",children:Object(W.jsx)(F.a,{src:A,alt:"IMAGE NOT FOUND"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(O.c,{p:"2",alignSelf:"flex-start",maxW:"40%",children:[Object(W.jsx)(w.a,{fontSize:"180%",color:"white",fontWeight:"bold",alignSelf:"flex-start",children:j}),Object(W.jsx)(w.a,{fontSize:"100%",color:"white",noOfLines:[1,2,3,4,11,12],mt:"20px",children:m})]})]}),Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{fontSize:"130%",color:"white",fontWeight:"thin",alignSelf:"flex-start",children:"Find the location of the spot on the map below."}),Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",width:"85vw",children:Object(W.jsx)(J,{locations:k,zoomLevel:17})})]}),Object(W.jsxs)(O.c,{divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"center"}),w:"80%",children:[Object(W.jsxs)(g.a,{w:"80%",children:[Object(W.jsx)(p.a,{children:Object(W.jsx)(w.a,{fontSize:"180%",color:"white",children:"Reviews"})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{mt:"3",children:Object(W.jsx)(w.a,{fontSize:"125%",color:"white",fontWeight:"thin",_hover:{textDecoration:"underline",cursor:"Pointer"},onClick:function(e){if(M)r({title:"Error: A review is in progress",status:"warning",isClosable:!0});else if(localStorage.getItem("accessToken")){var t={accessToken:localStorage.getItem("accessToken")};L.a.get("https://www.compsci4ww3bilalyichun.com:8080/auth/verify",{headers:t}).then((function(e,t){e.data.isValid?U(!0):(localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),r({title:"Log in has timed out, please sign in again to write a review.",status:"warning",isClosable:!0}))}))}else r({title:"Please login or sign up to write a review",status:"warning",isClosable:!0})},children:"Write a new Review"})})]}),Object(W.jsxs)(O.c,{w:"80%",divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"baseline"}),children:[M&&Object(W.jsx)(p.a,{w:"100%",children:Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"15px",alignSelf:"flex-start",children:[Object(W.jsxs)($.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",alignSelf:"baseline",children:"Review Description"}),Object(W.jsx)(ae.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Description",textColor:"white",id:"Description",value:V,onChange:le})]}),Object(W.jsxs)($.a,{w:"100%",id:"search-cat",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"What is your Rating?"}),Object(W.jsxs)(ie.a,{bg:"gray.600",color:"white",borderWidth:"0px",id:"ReviewRating",value:Z,onChange:le,children:[Object(W.jsx)("option",{class:"option-select",children:"1 Star"}),Object(W.jsx)("option",{class:"option-select",children:"2 Star"}),Object(W.jsx)("option",{class:"option-select",children:"3 Star"}),Object(W.jsx)("option",{class:"option-select",children:"4 Star"}),Object(W.jsx)("option",{class:"option-select",children:"5 Star"})]})]}),Object(W.jsxs)(O.a,{alignSelf:"flex-start",children:[Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(){var e="";""===m&&(e+="A Spot's Description is required."),""===Z&&(e+="Please re-select your rating or enter a new rating."),localStorage.getItem("accessToken")||(e+="Your session has expired, please re-login to your account.",U(!1)),e.length>0?r({title:"Invalid review details given",description:e,status:"error",isClosable:!0}):oe()},children:"Submit"}),Object(W.jsx)(S.a,{colorScheme:"red",alignSelf:"flex-start",onClick:function(){U(!1),B(""),Q("")},children:"Cancel"})]})]})})}),re.map((function(e){return Object(W.jsx)(te,{name:e.Name,rating:e.Rating,description:e.Description})}))]})]}),Object(W.jsx)(P,{})]})})}var ne=a(5),oe=a(90),le=a(222),de=(a(176),a(215)),je=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={searchName:!0,searchRating:!1,SearchText:"",SearchRatingVal:"All",longitude:null,latitude:null},e.handleRadioClick=function(t){e.state.searchName?(e.setState({searchName:!1}),e.setState({searchRating:!0})):(e.setState({searchRating:!1}),e.setState({searchName:!0}))},e.generalChangeHandler=function(t){var a=t.target.id,i=t.target.value;e.setState(Object(ne.a)({},a,i))},e.getLocation=function(){navigator.geolocation?(console.log("Locating..."),navigator.geolocation.getCurrentPosition((function(t){e.setState({longitude:t.coords.latitude,latitude:t.coords.longitude})}),(function(){console.log("Unable to retrieve your location")}))):console.log("Geolocation is not supported by your browser")},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"search-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(T,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",w:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{spacing:"50px",alignItems:"flex-start",children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Search"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"50px",alignSelf:"flex-start",children:[Object(W.jsxs)($.a,{w:"100%",id:"search-term",isRequired:!0,isDisabled:!this.state.searchName,children:[Object(W.jsx)(G.a,{color:"white",children:"Search Term"}),Object(W.jsx)(V.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Search Term",textColor:"white",id:"SearchText",value:this.state.SearchText,onChange:this.generalChangeHandler})]}),Object(W.jsxs)($.a,{w:"100%",id:"search-cat",isRequired:!0,isDisabled:!this.state.searchRating,children:[Object(W.jsx)(G.a,{color:"white",children:"Rating"}),Object(W.jsxs)(ie.a,{bg:"gray.600",color:"white",borderWidth:"0px",id:"SearchRatingVal",value:this.state.SearchRatingVal,onChange:this.generalChangeHandler,children:[Object(W.jsx)("option",{class:"option-select",children:"All"}),Object(W.jsx)("option",{class:"option-select",children:"1 Star"}),Object(W.jsx)("option",{class:"option-select",children:"2 Star"}),Object(W.jsx)("option",{class:"option-select",children:"3 Star"}),Object(W.jsx)("option",{class:"option-select",children:"4 Star"}),Object(W.jsx)("option",{class:"option-select",children:"5 Star"})]})]}),Object(W.jsxs)(O.a,{alignSelf:"flex-start",children:[Object(W.jsx)(S.a,{colorScheme:"pink",alignSelf:"flex-start",onClick:this.getLocation,children:"Search by location"}),Object(W.jsxs)(w.a,{color:"white",children:["Longitude: ",this.state.longitude?this.state.longitude:"Not Found",",  Latitude: ",this.state.latitude?this.state.longitude:"Not Found"]})]}),Object(W.jsx)(oe.a,{defaultValue:"name",alignSelf:"flex-start",color:"white",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(le.a,{value:"name",onChange:this.handleRadioClick,isChecked:this.state.searchName,children:"Search by Name"}),Object(W.jsx)(le.a,{value:"rating",onChange:this.handleRadioClick,isChecked:this.state.searchRating,children:"Search by Rating"})]})}),Object(W.jsx)(S.a,{colorScheme:"purple",type:"submit",alignSelf:"flex-start",children:Object(W.jsx)(de.a,{href:"/Results",children:"Submit"})})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}}]),a}(s.a.Component),he=je;a(177);function be(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(i.useState)(se),c=Object(o.a)(s,2),r=c[0],n=c[1],l=Object(i.useState)(se),j=Object(o.a)(l,2),h=j[0],b=j[1],u=Object(i.useState)(""),g=Object(o.a)(u,2),m=g[0],v=g[1],y=Object(i.useState)(""),C=Object(o.a)(y,2),k=C[0],R=C[1],z=Object(i.useState)(""),N=Object(o.a)(z,2),A=N[0],D=N[1],E=Object(i.useState)(""),q=Object(o.a)(E,2),M=q[0],U=q[1],H=Object(i.useState)(""),_=Object(o.a)(H,2),B=_[0],Y=_[1],K=Object(i.useState)(""),Z=Object(o.a)(K,2),J=Z[0],Q=Z[1],X=Object(i.useState)(""),ee=Object(o.a)(X,2),te=ee[0],ie=ee[1],ce=Object(d.g)(),re=Object(x.a)();Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude;ie(t);var a=e.coords.longitude;Q(a)}),(function(e){return alert(e.message)}),{enableHighAccuracy:!0,timeout:2e4,maximumAge:1e3})}),[]);var ne=function(){var e=new FormData;e.append("Image",h),e.append("SpotName",k),e.append("Feature",m),e.append("Description",A),e.append("LocLongitude",M),e.append("LocLatitude",B),e.append("UserLongitude",J),e.append("UserLatitude",te),e.append("UserID",t.id);var i={accessToken:localStorage.getItem("accessToken"),"Content-Type":"multipart/form-data"};L.a.post("https://www.compsci4ww3bilalyichun.com:8080/spot/create",e,{headers:i}).then((function(e,t){e.data.valid?(re({title:"Your spot has been successfully posted!",status:"success",isClosable:!0}),ce.push("/")):(re({title:"Your session has expired, please login again",status:"error",isClosable:!0}),a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"))}))};function oe(e){var t=e.target.id,a=e.target.value;switch(t){case"Image":n(URL.createObjectURL(e.target.files[0])),b(e.target.files[0]),console.log(r);break;case"Feature":v(a);break;case"Name":R(a);break;case"Description":D(a);break;case"LocLongitude":U(a);break;default:Y(a)}}return Object(W.jsx)("div",{class:"submission-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(T,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",maxW:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Add a New Fishing Spot"}),Object(W.jsxs)("form",{children:[Object(W.jsxs)(O.a,{spacing:"20px",children:[Object(W.jsx)(p.a,{w:"58%",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",alignSelf:"center",children:Object(W.jsx)(F.a,{src:r,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(O.c,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Fishing Spot Name"}),Object(W.jsx)(V.a,{type:"text",bg:"gray.600",borderWidth:"0px",placeholder:"Name",textColor:"white",id:"Name",value:k,onChange:oe})]}),Object(W.jsxs)($.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Main Feature"}),Object(W.jsx)(V.a,{type:"text",bg:"gray.600",borderWidth:"0px",placeholder:"One Word Descriptor",textColor:"white",id:"Feature",value:m,onChange:oe})]}),Object(W.jsxs)($.a,{w:"100%",id:"description",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Description"}),Object(W.jsx)(ae.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Description",textColor:"white",id:"Description",value:A,onChange:oe})]}),Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"50%",id:"location-longitude",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Location"}),Object(W.jsx)(V.a,{type:"number",required:!0,bg:"gray.600",borderWidth:"0px",placeholder:"Longitude",textColor:"white",id:"LocLongitude",value:M,onChange:oe})]}),Object(W.jsxs)($.a,{w:"50%",id:"location-latitude",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white"}),Object(W.jsx)(V.a,{type:"number",required:!0,bg:"gray.600",borderWidth:"0px",placeholder:"Latitude",textColor:"white",id:"LocLatitude",value:B,onChange:oe})]})]}),Object(W.jsx)(w.a,{color:"white",children:" Your Location:"}),Object(W.jsxs)(w.a,{color:"white",children:[" Latitude: ",te,"  Longitude: ",J]}),Object(W.jsxs)($.a,{w:"100%",id:"spot-image",alignSelf:"baseline",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Image"}),Object(W.jsx)(V.a,{id:"Image",type:"file",bg:"#444242",borderWidth:"0px",color:"white",onChange:oe}),Object(W.jsx)($.b,{children:"Please upload your Spot's Image"})]})]})]}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";r===se&&(t+="Please upload a picture of your spot. "),""===k&&(t+="Spot name is required. "),""===A&&(t+="A description is required for the spot. "),""!==B&&""!==M||(t+="You need to enter the location with both longitude and latitude of the location. "),""!==te&&""!==J||(t+="Please give your location permission. "),localStorage.getItem("accessToken")||(t+="Please login or create an account."),A.length>=5e3&&(t+="Please write a description that is under 5000 characters."),t.length>0?re({title:"Invalid Spot Details entered",description:t,status:"error",isClosable:!0}):ne()},children:"Submit"})]})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}a(178);function ue(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(""),r=Object(o.a)(c,2),n=r[0],l=r[1],j=Object(d.g)(),h=Object(i.useContext)(I).setAuthState,b=Object(x.a)(),u=function(e){var t=e.target.id,a=e.target.value;if("Email"===t)s(a);else l(a)};return Object(W.jsx)("div",{class:"signin-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(T,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",w:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{spacing:"50px",alignItems:"flex-start",children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Sign In"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"70px",alignSelf:"flex-start",children:[Object(W.jsxs)($.a,{w:"100%",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Email"}),Object(W.jsx)(V.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Email",type:"email",textColor:"white",id:"Email",value:a,onChange:u})]}),Object(W.jsxs)($.a,{w:"100%",isRequired:!0,children:[Object(W.jsx)(G.a,{color:"white",children:"Password"}),Object(W.jsx)(V.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Password",type:"password",textColor:"white",id:"Password",value:n,onChange:u})]}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(a)||(t+="Email is invalid, please enter a valid email. "),/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(n)||(t+="Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "),t.length>0?(console.log(2),b({title:"Invalid Login Details entered",description:t,status:"error",isClosable:!0})):(console.log(1),function(){var e={Email:a,Password:n};L.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/login",e).then((function(e,t){e.data.valid?(localStorage.setItem("accessToken",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data.id),h({username:e.data.username,id:e.data.id,status:!0}),b({title:"Account successfully logged in!",status:"success",isClosable:!0}),j.push("/")):b({title:"Invalid Email or Password Entered",status:"error",isClosable:!0})}))}())},children:Object(W.jsx)(de.a,{children:"Sign In"})})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}var xe=function(){var e=Object(i.useState)({username:"",id:0,status:!1}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(W.jsx)(I.Provider,{value:{authState:a,setAuthState:s},children:Object(W.jsx)(l.a,{children:Object(W.jsxs)(d.d,{children:[Object(W.jsx)(d.b,{path:"/",exact:!0,render:function(e){return Object(W.jsx)(_,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/signup",exact:!0,render:function(e){return Object(W.jsx)(B,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/spot/:id",exact:!0,render:function(e){return Object(W.jsx)(re,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/submission",exact:!0,render:function(e){return Object(W.jsx)(be,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/results",exact:!0,render:function(e){return Object(W.jsx)(X,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/search",exact:!0,render:function(e){return Object(W.jsx)(he,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/signin",exact:!0,render:function(e){return Object(W.jsx)(ue,Object(n.a)({},e))}}),Object(W.jsx)(d.a,{to:"/"})]})})})},ge=a(219);r.a.render(Object(W.jsx)(s.a.StrictMode,{children:Object(W.jsx)(ge.a,{children:Object(W.jsx)(xe,{})})}),document.getElementById("root"))}},[[179,1,2]]]);