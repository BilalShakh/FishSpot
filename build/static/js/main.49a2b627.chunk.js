(this.webpackJsonpproject4ww3=this.webpackJsonpproject4ww3||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(47),r=a.n(c),n=(a(146),a(57)),o=a(4),l=a(25),d=a(20),j=a(8),b=a(10),h=a(14),u=a(13),x=a(235),g=a(213),p=a(214),O=a(238),m=a(216),f=a(217),w=a(218),S=a(134),v=a(234),y=a(221),C=a(219),k=a(222),I=(a(147),Object(i.createContext)("")),L=a(26),R=a.n(L),W=a(1);var z=function(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(x.a)();return Object(i.useEffect)((function(){if(localStorage.getItem("accessToken")){var e={accessToken:localStorage.getItem("accessToken")};R.a.get("https://www.compsci4ww3bilalyichun.com:8080/auth/verify",{headers:e}).then((function(e,t){e.data.isValid?a({username:localStorage.getItem("username"),id:localStorage.getItem("id"),status:!0}):(localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),s({title:"Log in has timed out, please sign in again.",status:"warning",isClosable:!0}))}))}}),[localStorage.getItem("accessToken")]),Object(W.jsx)("div",{class:"background-header",children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(p.a,{py:"7",px:"5",display:{base:"none",md:"flex"},children:Object(W.jsxs)(O.a,{spacing:"50px",children:[Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/",children:"Home"})}),Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/submission",children:"Add New Spot"})})]})}),Object(W.jsx)(f.a,{display:{base:"none",md:"block"}}),Object(W.jsx)(p.a,{p:"3",children:Object(W.jsx)(w.a,{fontSize:{base:"2xl",md:"4xl"},color:"white",children:"FISH SPOT"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(p.a,{p:"5",children:[Object(W.jsxs)(O.a,{spacing:"50px",display:{base:"none",md:"flex"},children:[Object(W.jsx)(l.b,{to:"/search",children:Object(W.jsx)(C.a,{w:6,h:6,color:"white",_hover:{cursor:"Pointer"}})}),t.status?Object(W.jsxs)(m.a,{size:"sm",color:"white",children:["Signed in as: ",t.username]}):Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/signin",children:"Sign In"})}),t.status?Object(W.jsx)(S.a,{colorScheme:"purple",borderRadius:"25px",onClick:function(){a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),s({title:"Successfully signed out of your account!",status:"success",isClosable:!0})},children:"Sign out"}):Object(W.jsx)(S.a,{colorScheme:"purple",borderRadius:"25px",children:Object(W.jsx)(l.b,{to:"/signup",children:"Sign up"})})]}),Object(W.jsxs)(v.a,{children:[Object(W.jsx)(v.b,{as:y.a,"aria-label":"Options",icon:Object(W.jsx)(k.a,{}),variant:"outline",display:{base:"inline-flex",md:"none"},bg:"white"}),Object(W.jsxs)(v.d,{children:[Object(W.jsx)(l.b,{to:"/",children:Object(W.jsx)(v.c,{children:"Home"})}),Object(W.jsx)(l.b,{to:"/submission",children:Object(W.jsx)(v.c,{children:"Add New Spot"})}),Object(W.jsx)(l.b,{to:"/signin",children:Object(W.jsx)(v.c,{children:"Sign in"})}),Object(W.jsx)(l.b,{to:"/signup",children:Object(W.jsx)(v.c,{children:"Sign up"})})]})]})]})]})})};a(172);var N=function(){return Object(W.jsx)("div",{class:"background-footer",children:Object(W.jsxs)(O.c,{divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"center"}),spacing:"0",children:[Object(W.jsx)(p.a,{}),Object(W.jsx)(p.a,{width:"75%",mt:"15px",children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(p.a,{children:Object(W.jsxs)(O.c,{spacing:"0",alignItems:"baseline",children:[Object(W.jsx)(w.a,{fontSize:"2xl",color:"white",children:"FISH SPOT"}),Object(W.jsx)(w.a,{fontSize:"l",color:"white",width:"200px",children:"Premium Service for finding your fishing spot"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"200px",children:"Contact Number: 123-456-7891"})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{display:{base:"none",md:"flex"},children:Object(W.jsxs)(O.c,{spacing:"0",alignItems:"baseline",children:[Object(W.jsx)(w.a,{fontSize:"xl",color:"white",children:"Quick Navigation"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Home"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Add new spot"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Search"})]})})]})})]})})},T=a.p+"static/media/fishing_1.a08d269c.jpg",D=a.p+"static/media/fishing_2.bf89dfc7.jpeg",P=a.p+"static/media/fishing_3.84d6fe77.jpg",A=a.p+"static/media/fishing_4.d6bc01be.jpg",q=a.p+"static/media/fishing_5.6da8ec61.jpg",E=a(224),F=a(223),U=a(225),M=a(226);var _=function(e){return Object(W.jsx)("div",{children:Object(W.jsxs)(p.a,{maxW:"300px",h:"492px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",backgroundColor:e.color,children:[Object(W.jsx)(F.a,{w:"300px",ratio:.87,children:Object(W.jsx)(E.a,{src:e.Image,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(p.a,{p:"6",children:[Object(W.jsxs)(p.a,{display:"flex",alignItems:"baseline",children:[Object(W.jsx)(U.a,{borderRadius:"full",px:"2",colorScheme:"gray",children:e.badge}),Object(W.jsx)(p.a,{color:"gray.700",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.featureLine})]}),Object(W.jsx)(p.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(W.jsx)(p.a,{isTruncated:!0,children:e.description}),Object(W.jsxs)(p.a,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(t,a){return Object(W.jsx)(M.a,{color:a<e.rating?"gray.500":"gray.300"},a)})),Object(W.jsxs)(p.a,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.reviewCount," reviews"]})]})]})]})})},H=(a(173),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"home-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(_,{color:"pink",Image:T,badge:"trending",featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(_,{color:"teal.100",Image:D,badge:"trending",featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(_,{color:"orange.200",Image:P,badge:"trending",featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(_,{color:"purple.200",Image:A,badge:"trending",featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]}),Object(W.jsxs)(O.a,{children:[Object(W.jsx)(p.a,{maxH:"400px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",children:Object(W.jsx)(E.a,{src:q,alt:"IMAGE NOT FOUND"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(p.a,{p:"2",width:"400px",children:[Object(W.jsx)(w.a,{fontSize:"3xl",color:"white",fontWeight:"bold",children:"Ice fishing at Devils Lake"}),Object(W.jsx)(f.a,{}),Object(W.jsx)(w.a,{fontSize:"l",color:"white",noOfLines:[1,2,3,4,5,6,7,8,9,11,12],mt:"20px",children:"The state of North Dakota sure knows how to sell this lake. Touting it as \u201ca fishing destination unlike anywhere else,\u201d the tourism board brags that its fish are large and healthy, its winter season is long, and the \u201chuge\u201d size of the lake means you can avoid tangling your lines with any other overeager anglers. Grab a 3 or 10-day license to search for jumbo perch, walleye and big pike."}),Object(W.jsx)(w.a,{fontSize:"s",color:"white",mt:"20px",children:"North Dakota, USA"})]})]}),Object(W.jsx)(N,{})]})})}}]),a}(i.Component)),Y=a(70),$=a(227),G=a(228);a(174);function V(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(""),r=Object(o.a)(c,2),n=r[0],l=r[1],j=Object(i.useState)(""),b=Object(o.a)(j,2),h=b[0],u=b[1],g=Object(i.useState)(""),m=Object(o.a)(g,2),v=m[0],y=m[1],C=Object(i.useState)(""),k=Object(o.a)(C,2),L=k[0],T=k[1],D=Object(i.useState)(""),P=Object(o.a)(D,2),A=P[0],q=P[1],E=Object(d.g)(),F=Object(i.useContext)(I).setAuthState,U=Object(x.a)();function M(e){var t=e.target.id,a=e.target.value;switch(t){case"FirstName":s(a);break;case"LastName":l(a);break;case"Email":u(a);break;case"Username":y(a);break;case"PasswordI":T(a);break;default:q(a)}}var _=function(){var e={Email:h,Password:A,Name:a+" "+n,Username:v};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/signup",e).then((function(e,t){e.data.status?(U({title:"Account successfully created",status:"success",isClosable:!0}),function(){var e={Email:h,Password:A};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/login",e).then((function(e,t){e.data.valid?(localStorage.setItem("accessToken",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data.id),F({username:e.data.username,id:e.data.id,status:!0}),U({title:"Account successfully logged in!",status:"success",isClosable:!0})):U({title:"Invalid Email or Password Entered",status:"error",isClosable:!0})}))}(),E.push("/")):U({title:e.data.reason,status:"error",isClosable:!0})}))};return Object(W.jsx)("div",{class:"registration-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",maxW:"850px",maxH:"550px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",children:"Sign up"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"15px",children:[Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)(Y.a,{w:"320px",id:"FirstNameFC",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"First name"}),Object(W.jsx)(G.a,{id:"FirstName",bg:"gray.600",borderWidth:"0px",placeholder:"First name",textColor:"white",value:a,onChange:M})]}),Object(W.jsxs)(Y.a,{w:"320px",id:"LastNameFC",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Last name"}),Object(W.jsx)(G.a,{id:"LastName",bg:"gray.600",borderWidth:"0px",placeholder:"Last name",textColor:"white",value:n,onChange:M})]})]}),Object(W.jsxs)(Y.a,{w:"655px",id:"EmailFC",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Email"}),Object(W.jsx)(G.a,{id:"Email",type:"email",bg:"gray.600",borderWidth:"0px",placeholder:"Email",textColor:"white",value:h,onChange:M})]}),Object(W.jsxs)(Y.a,{w:"655px",id:"UsernameFC",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Username"}),Object(W.jsx)(G.a,{id:"Username",bg:"gray.600",borderWidth:"0px",placeholder:"Username",textColor:"white",value:v,onChange:M})]}),Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)(Y.a,{w:"320px",id:"passwordInitial",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Password"}),Object(W.jsx)(G.a,{id:"PasswordI",type:"password",bg:"gray.600",borderWidth:"0px",placeholder:"Password",textColor:"white",value:L,onChange:M})]}),Object(W.jsxs)(Y.a,{w:"320px",id:"passwordConfirm",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white"}),Object(W.jsx)(G.a,{id:"PasswordC",type:"password",bg:"gray.600",borderWidth:"0px",placeholder:"Confrim Password",textColor:"white",value:A,onChange:M})]})]}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";/^[a-zA-Z]+$/.test(a)||(t+="First name is invalid, please include only letters in your Firstname."),/^[a-zA-Z]+$/.test(n)||(t+="Last name is invalid, please include only letters in your lastname."),/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(h)||(t+="Email is invalid, please enter a valid email. "),L===A&&/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(A)||(t+="Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "),t.length>0?U({title:"Invalid Details entered",description:t,status:"error",isClosable:!0}):_()},children:"Submit"})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(N,{})]})})}var Z=a(5),K=a(239);var B=function(e){return Object(W.jsx)("div",{children:Object(W.jsxs)(p.a,{maxW:"300px",h:"492px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",backgroundColor:e.color,children:[Object(W.jsx)(F.a,{w:"300px",ratio:.87,children:Object(W.jsx)(E.a,{src:e.Image,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(p.a,{p:"6",children:[Object(W.jsx)(p.a,{display:"flex",alignItems:"baseline",children:Object(W.jsx)(p.a,{color:"gray.700",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.featureLine})}),Object(W.jsx)(p.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(W.jsx)(p.a,{isTruncated:!0,children:e.description}),Object(W.jsxs)(p.a,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(t,a){return Object(W.jsx)(M.a,{color:a<e.rating?"gray.500":"gray.300"},a)})),Object(W.jsxs)(p.a,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.reviewCount," reviews"]})]})]})]})})},J=a(71);var Q={width:"100vw",height:"100vh"};function X(e){var t=e.locations,a=e.zoomLevel,i=s.a.useState(null),c=Object(o.a)(i,2),r=c[0],n=c[1],l=Object(J.d)({googleMapsApiKey:"AIzaSyDsHPRgT-culwhK_LMVrOi9zbrRdGijXjQ"}),d=l.isLoaded;if(l.loadError)return"Error loading maps";if(!d)return"Loading Maps";var j=function(e){var t=[];return Object.keys(e).forEach((function(a){t.push(e[a])})),t}(t);return Object(W.jsx)("div",{children:Object(W.jsxs)(J.a,{mapContainerStyle:Q,zoom:a,center:{lat:t.first.lat,lng:t.first.lng},children:[j.map((function(e){return Object(W.jsx)(J.c,{position:{lat:e.lat,lng:e.lng},onClick:function(){n(null),n(e)}})})),r?Object(W.jsx)(J.b,{position:{lat:r.lat+2e-4,lng:r.lng},onCloseClick:function(){n(null)},children:Object(W.jsx)("h2",{children:r.text})}):null]})})}a(176);var ee={first:{text:"Credit River, Mississauga, ON",lat:43.5557682874319,lng:-79.60028572660218},1:{text:"Cooksville Creek",lat:43.56416169111711,lng:-79.56491222843655},2:{text:"Mimico Creek",lat:43.623089818162995,lng:-79.48015828092811}};function te(){var e=Object(d.h)().query,t=Object(d.g)(),s=a(177),c=Object(i.useState)([]),r=Object(o.a)(c,2),n=r[0],j=r[1],b=Object(i.useState)(!1),h=Object(o.a)(b,2),u=h[0],x=h[1],g=Object(i.useState)(ee),f=Object(o.a)(g,2),w=f[0],S=f[1],v=["pink","teal.100","orange.200","purple.200"];return Object(i.useEffect)((function(){var a=s.parse(e);e||t.push("/"),a.type&&a.q||t.push("/");var i={};if(a.useLocation&&(i={location:"true"===a.useLocation,lng:a.lng,lat:a.lat}),"Rating"===a.type){var c="All"===a.q?a.q:a.q.substring(0,1);R.a.get("https://www.compsci4ww3bilalyichun.com:8080/search/Rating/"+c,{headers:i}).then((function(e,t){!0===e.data.found?(x(!0),j(e.data.cardData)):x(!1)}))}else R.a.get("https://www.compsci4ww3bilalyichun.com:8080/search/name/"+a.q,{headers:i}).then((function(e,t){!0===e.data.found?(x(!0),j(e.data.cardData)):x(!1)}))}),[e]),Object(i.useEffect)((function(){for(var e={},t=0;t<n.length;t++)if(0===t)e={first:{text:n[t].Name,lat:n[t].Longitude,lng:n[t].Latitude}};else{var a=Object(Z.a)({},t.toString(),{text:n[t].Name,lat:n[t].Longitude,lng:n[t].Latitude});e=Object.assign(e,a)}0!==Object.keys(e).length&&S(e)}),[n]),Object(W.jsx)("div",{class:"result-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),!1===u?Object(W.jsx)(p.a,{height:"80vh",width:"90vw",children:Object(W.jsx)(m.a,{color:"white",alignSelf:"flex-start",fontSize:"3xl",children:"No results found."})}):Object(W.jsxs)(O.c,{spacing:"40px",children:[Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",width:"65vw",height:"60vh",children:Object(W.jsx)(X,{locations:w,zoomLevel:12})}),Object(W.jsx)(K.a,{columns:4,spacingX:"20px",spacingY:"20px",flexWrap:"wrap",children:u&&n.map((function(e){return Object(W.jsx)(l.b,{to:"/spot/"+e.ObjectID,children:Object(W.jsx)(B,{color:v[Math.floor(Math.random()*v.length)],Image:"https://www.compsci4ww3bilalyichun.com:8080/spot/images/"+e.Image_key,featureLine:e.Feature+" fishing spot",title:e.Name,description:e.Description,rating:e.Rating,reviewCount:e.NumReviews})})}))})]}),Object(W.jsx)(N,{})]})})}var ae=a(229);var ie=function(e){return Object(W.jsxs)(O.a,{justifyItems:"baseline",alignSelf:"baseline",w:"100%",children:[Object(W.jsx)(ae.a,{name:e.name}),Object(W.jsxs)(O.c,{alignItems:"baseline",spacing:"5px",children:[Object(W.jsxs)(O.a,{children:[Object(W.jsx)(w.a,{fontSize:"130%",color:"white",children:e.name}),Object(W.jsx)(f.a,{}),Object(W.jsx)(g.a,{children:Array(5).fill("").map((function(t,a){return Object(W.jsx)(M.a,{color:a<e.rating?"gray.300":"gray.500",alignSelf:"center"},a)}))})]}),Object(W.jsx)(w.a,{fontSize:"100%",fontWeight:"thin",noOfLines:[1,2,3],color:"white",children:e.description})]})]})},se=a(230),ce=a(231),re=(a(192),a.p+"static/media/fishing_6.643c946f.jpg"),ne={first:{text:"Credit River, Mississauga, ON",lat:43.5557682874319,lng:-79.60028572660218}};function oe(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(d.h)().id,c=Object(d.g)(),r=Object(x.a)(),n=Object(i.useState)("Credit River"),l=Object(o.a)(n,2),j=l[0],b=l[1],h=Object(i.useState)(""),u=Object(o.a)(h,2),m=u[0],v=u[1],y=Object(i.useState)(ne),C=Object(o.a)(y,2),k=C[0],L=C[1],T=Object(i.useState)(re),D=Object(o.a)(T,2),P=D[0],A=D[1],q=Object(i.useState)(!1),F=Object(o.a)(q,2),U=F[0],M=F[1],_=Object(i.useState)(""),H=Object(o.a)(_,2),G=H[0],V=H[1],Z=Object(i.useState)("1 Star"),K=Object(o.a)(Z,2),B=K[0],J=K[1],Q=Object(i.useState)([]),ee=Object(o.a)(Q,2),te=ee[0],ae=ee[1];Object(i.useEffect)((function(){s||c.push("/"),R.a.get("https://www.compsci4ww3bilalyichun.com:8080/spot/info/"+s).then((function(e,t){e.data.isValid?(b(e.data.SpotName),L({first:{text:e.data.SpotName,lat:e.data.LocLongitude,lng:e.data.LocLatitude}}),v(e.data.Description),A("https://www.compsci4ww3bilalyichun.com:8080/spot/images/"+e.data.ImageKey)):c.push("/")})),R.a.get("https://www.compsci4ww3bilalyichun.com:8080/spot/reviews/"+s).then((function(e,t){e.data.foundReview&&ae(e.data.reviews)}))}),[s,c]);var oe=function(){var e={ObjectID:s,UserID:t.id,Rating:B.substring(0,1),Description:G},i={accessToken:localStorage.getItem("accessToken")};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/spot/reviews/create",e,{headers:i}).then((function(e,t){e.data.valid?(r({title:"Your review has been successfully posted!",status:"success",isClosable:!0}),R.a.get("https://www.compsci4ww3bilalyichun.com:8080/spot/reviews/"+s).then((function(e,t){e.data.foundReview&&ae(e.data.reviews)})),M(!1)):e.data.reason?(r({title:"You already posted a review on this spot.",status:"error",isClosable:!0}),M(!1)):(r({title:"Your session has expired, please login again",status:"error",isClosable:!0}),a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),M(!1))}))},le=function(e){var t=e.target.id,a=e.target.value;if("Description"===t)V(a),console.log(G);else J(a),console.log(B)};return Object(W.jsx)("div",{class:"object-background",children:Object(W.jsxs)(O.c,{spacing:"80px",children:[Object(W.jsx)(z,{}),Object(W.jsxs)(O.a,{maxW:"50%",children:[Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",children:Object(W.jsx)(E.a,{src:P,alt:"IMAGE NOT FOUND"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(O.c,{p:"2",alignSelf:"flex-start",maxW:"40%",children:[Object(W.jsx)(w.a,{fontSize:"180%",color:"white",fontWeight:"bold",alignSelf:"flex-start",children:j}),Object(W.jsx)(w.a,{fontSize:"100%",color:"white",noOfLines:[1,2,3,4,11,12],mt:"20px",children:m})]})]}),Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{fontSize:"130%",color:"white",fontWeight:"thin",alignSelf:"flex-start",children:"Find the location of the spot on the map below."}),Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",width:"85vw",children:Object(W.jsx)(X,{locations:k,zoomLevel:17})})]}),Object(W.jsxs)(O.c,{divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"center"}),w:"80%",children:[Object(W.jsxs)(g.a,{w:"80%",children:[Object(W.jsx)(p.a,{children:Object(W.jsx)(w.a,{fontSize:"180%",color:"white",children:"Reviews"})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{mt:"3",children:Object(W.jsx)(w.a,{fontSize:"125%",color:"white",fontWeight:"thin",_hover:{textDecoration:"underline",cursor:"Pointer"},onClick:function(e){if(U)r({title:"Error: A review is in progress",status:"warning",isClosable:!0});else if(localStorage.getItem("accessToken")){var t={accessToken:localStorage.getItem("accessToken")};R.a.get("https://www.compsci4ww3bilalyichun.com:8080/auth/verify",{headers:t}).then((function(e,t){e.data.isValid?M(!0):(localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),r({title:"Log in has timed out, please sign in again to write a review.",status:"warning",isClosable:!0}))}))}else r({title:"Please login or sign up to write a review",status:"warning",isClosable:!0})},children:"Write a new Review"})})]}),Object(W.jsxs)(O.c,{w:"80%",divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"baseline"}),children:[U&&Object(W.jsx)(p.a,{w:"100%",children:Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"15px",alignSelf:"flex-start",children:[Object(W.jsxs)(Y.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",alignSelf:"baseline",children:"Review Description"}),Object(W.jsx)(se.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Description",textColor:"white",id:"Description",value:G,onChange:le})]}),Object(W.jsxs)(Y.a,{w:"100%",id:"search-cat",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"What is your Rating?"}),Object(W.jsxs)(ce.a,{bg:"gray.600",color:"white",borderWidth:"0px",id:"ReviewRating",value:B,onChange:le,children:[Object(W.jsx)("option",{class:"option-select",children:"1 Star"}),Object(W.jsx)("option",{class:"option-select",children:"2 Star"}),Object(W.jsx)("option",{class:"option-select",children:"3 Star"}),Object(W.jsx)("option",{class:"option-select",children:"4 Star"}),Object(W.jsx)("option",{class:"option-select",children:"5 Star"})]})]}),Object(W.jsxs)(O.a,{alignSelf:"flex-start",children:[Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(){var e="";""===m&&(e+="A Spot's Description is required."),""===B&&(e+="Please re-select your rating or enter a new rating."),localStorage.getItem("accessToken")||(e+="Your session has expired, please re-login to your account.",M(!1)),e.length>0?r({title:"Invalid review details given",description:e,status:"error",isClosable:!0}):oe()},children:"Submit"}),Object(W.jsx)(S.a,{colorScheme:"red",alignSelf:"flex-start",onClick:function(){M(!1),V(""),J("")},children:"Cancel"})]})]})})}),te.map((function(e){return Object(W.jsx)(ie,{name:e.Name,rating:e.Rating,description:e.Description})}))]})]}),Object(W.jsx)(N,{})]})})}var le=a(90),de=a(240);a(193);function je(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(!1),r=Object(o.a)(c,2),n=r[0],l=r[1],j=Object(i.useState)(""),b=Object(o.a)(j,2),h=b[0],u=b[1],g=Object(i.useState)("All"),m=Object(o.a)(g,2),v=m[0],y=m[1],C=Object(i.useState)(!1),k=Object(o.a)(C,2),I=k[0],L=k[1],R=Object(i.useState)(null),T=Object(o.a)(R,2),D=T[0],P=T[1],A=Object(i.useState)(null),q=Object(o.a)(A,2),E=q[0],F=q[1],U=Object(x.a)(),M=Object(d.g)(),_=function(e){a?(s(!1),l(!0)):(s(!0),l(!1))},H=function(e){var t=e.target.id,a=e.target.value;if("searchText"===t)u(a);else y(a)};return Object(W.jsx)("div",{class:"search-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",w:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{spacing:"50px",alignItems:"flex-start",children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Search"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"50px",alignSelf:"flex-start",children:[Object(W.jsxs)(Y.a,{w:"100%",id:"search-term",isRequired:!0,isDisabled:!a,children:[Object(W.jsx)($.a,{color:"white",children:"Search Term"}),Object(W.jsx)(G.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Search Term",textColor:"white",id:"searchText",value:h,onChange:H})]}),Object(W.jsxs)(Y.a,{w:"100%",id:"search-cat",isRequired:!0,isDisabled:!n,children:[Object(W.jsx)($.a,{color:"white",children:"Rating"}),Object(W.jsxs)(ce.a,{bg:"gray.600",color:"white",borderWidth:"0px",id:"searchRatingVal",value:v,onChange:H,children:[Object(W.jsx)("option",{class:"option-select",children:"All"}),Object(W.jsx)("option",{class:"option-select",children:"1 Star"}),Object(W.jsx)("option",{class:"option-select",children:"2 Star"}),Object(W.jsx)("option",{class:"option-select",children:"3 Star"}),Object(W.jsx)("option",{class:"option-select",children:"4 Star"}),Object(W.jsx)("option",{class:"option-select",children:"5 Star"})]})]}),Object(W.jsxs)(O.c,{children:[Object(W.jsxs)(O.a,{alignSelf:"flex-start",children:[Object(W.jsx)(S.a,{colorScheme:"pink",alignSelf:"flex-start",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){P(e.coords.latitude),F(e.coords.longitude),L(!0)}),(function(){U({title:"Unable to retrieve your location",status:"error",isClosable:!0})})):U({title:"Geolocation is not supported by your browser",status:"error",isClosable:!0})},children:"Search by location"}),Object(W.jsxs)(w.a,{color:"white",children:["Longitude: ",D||"Not Found",",  Latitude: ",E||"Not Found"]})]}),Object(W.jsx)(w.a,{color:"gray.300",fontSize:"sm",children:"Note: Search by location finds spot within 100km of your location only, as such it is not a requirement to search."})]}),Object(W.jsx)(le.a,{defaultValue:"name",alignSelf:"flex-start",color:"white",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(de.a,{value:"name",onChange:_,isChecked:a,children:"Search by Name"}),Object(W.jsx)(de.a,{value:"rating",onChange:_,isChecked:n,children:"Search by Rating"})]})}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(){var e="";if(!0===a&&""===h&&(e+="You need to enter a value to search."),!0===n&&""===v&&(e+="Please re-select or select a rating to search for."),e.length>0)U({title:"Invalid search query",description:e,status:"error",isClosable:!0});else{var t=a?"Name":"Rating",i=a?h:v;!0===I?M.push("/results/type="+t+"&q="+i+"&useLocation=true&lng="+D+"&lat="+E):M.push("/results/type="+t+"&q="+i)}},children:"Submit"})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(N,{})]})})}a(194);function be(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(i.useState)(re),c=Object(o.a)(s,2),r=c[0],n=c[1],l=Object(i.useState)(re),j=Object(o.a)(l,2),b=j[0],h=j[1],u=Object(i.useState)(""),g=Object(o.a)(u,2),m=g[0],v=g[1],y=Object(i.useState)(""),C=Object(o.a)(y,2),k=C[0],L=C[1],T=Object(i.useState)(""),D=Object(o.a)(T,2),P=D[0],A=D[1],q=Object(i.useState)(""),F=Object(o.a)(q,2),U=F[0],M=F[1],_=Object(i.useState)(""),H=Object(o.a)(_,2),V=H[0],Z=H[1],K=Object(i.useState)(""),B=Object(o.a)(K,2),J=B[0],Q=B[1],X=Object(i.useState)(""),ee=Object(o.a)(X,2),te=ee[0],ae=ee[1],ie=Object(d.g)(),ce=Object(x.a)();Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude;ae(t);var a=e.coords.longitude;Q(a)}),(function(e){return alert(e.message)}),{enableHighAccuracy:!0,timeout:2e4,maximumAge:1e3})}),[]);var ne=function(){var e=new FormData;e.append("Image",b),e.append("SpotName",k),e.append("Feature",m),e.append("Description",P),e.append("LocLongitude",U),e.append("LocLatitude",V),e.append("UserLongitude",J),e.append("UserLatitude",te),e.append("UserID",t.id);var i={accessToken:localStorage.getItem("accessToken"),"Content-Type":"multipart/form-data"};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/spot/create",e,{headers:i}).then((function(e,t){e.data.valid?(ce({title:"Your spot has been successfully posted!",status:"success",isClosable:!0}),ie.push("/")):(ce({title:"Your session has expired, please login again",status:"error",isClosable:!0}),a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"))}))};function oe(e){var t=e.target.id,a=e.target.value;switch(t){case"Image":n(URL.createObjectURL(e.target.files[0])),h(e.target.files[0]),console.log(r);break;case"Feature":v(a);break;case"Name":L(a);break;case"Description":A(a);break;case"LocLongitude":M(a);break;default:Z(a)}}return Object(W.jsx)("div",{class:"submission-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",maxW:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Add a New Fishing Spot"}),Object(W.jsxs)("form",{children:[Object(W.jsxs)(O.a,{spacing:"20px",children:[Object(W.jsx)(p.a,{w:"58%",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",alignSelf:"center",children:Object(W.jsx)(E.a,{src:r,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(O.c,{spacing:"15px",children:[Object(W.jsxs)(Y.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Fishing Spot Name"}),Object(W.jsx)(G.a,{type:"text",bg:"gray.600",borderWidth:"0px",placeholder:"Name",textColor:"white",id:"Name",value:k,onChange:oe})]}),Object(W.jsxs)(Y.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Main Feature"}),Object(W.jsx)(G.a,{type:"text",bg:"gray.600",borderWidth:"0px",placeholder:"One Word Descriptor",textColor:"white",id:"Feature",value:m,onChange:oe})]}),Object(W.jsxs)(Y.a,{w:"100%",id:"description",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Description"}),Object(W.jsx)(se.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Description",textColor:"white",id:"Description",value:P,onChange:oe})]}),Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)(Y.a,{w:"50%",id:"location-longitude",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Location"}),Object(W.jsx)(G.a,{type:"number",required:!0,bg:"gray.600",borderWidth:"0px",placeholder:"Longitude",textColor:"white",id:"LocLongitude",value:U,onChange:oe})]}),Object(W.jsxs)(Y.a,{w:"50%",id:"location-latitude",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white"}),Object(W.jsx)(G.a,{type:"number",required:!0,bg:"gray.600",borderWidth:"0px",placeholder:"Latitude",textColor:"white",id:"LocLatitude",value:V,onChange:oe})]})]}),Object(W.jsx)(w.a,{color:"white",children:" Your Location:"}),Object(W.jsxs)(w.a,{color:"white",children:[" Latitude: ",te,"  Longitude: ",J]}),Object(W.jsxs)(Y.a,{w:"100%",id:"spot-image",alignSelf:"baseline",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Image"}),Object(W.jsx)(G.a,{id:"Image",type:"file",bg:"#444242",borderWidth:"0px",color:"white",onChange:oe}),Object(W.jsx)(Y.b,{children:"Please upload your Spot's Image"})]})]})]}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";r===re&&(t+="Please upload a picture of your spot. "),""===k&&(t+="Spot name is required. "),""===P&&(t+="A description is required for the spot. "),""!==V&&""!==U||(t+="You need to enter the location with both longitude and latitude of the location. "),""!==te&&""!==J||(t+="Please give your location permission. "),localStorage.getItem("accessToken")||(t+="Please login or create an account."),P.length>=5e3&&(t+="Please write a description that is under 5000 characters."),t.length>0?ce({title:"Invalid Spot Details entered",description:t,status:"error",isClosable:!0}):ne()},children:"Submit"})]})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(N,{})]})})}a(195);var he=a(232);function ue(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(""),r=Object(o.a)(c,2),n=r[0],l=r[1],j=Object(d.g)(),b=Object(i.useContext)(I).setAuthState,h=Object(x.a)(),u=function(e){var t=e.target.id,a=e.target.value;if("Email"===t)s(a);else l(a)};return Object(W.jsx)("div",{class:"signin-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",w:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{spacing:"50px",alignItems:"flex-start",children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Sign In"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"70px",alignSelf:"flex-start",children:[Object(W.jsxs)(Y.a,{w:"100%",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Email"}),Object(W.jsx)(G.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Email",type:"email",textColor:"white",id:"Email",value:a,onChange:u})]}),Object(W.jsxs)(Y.a,{w:"100%",isRequired:!0,children:[Object(W.jsx)($.a,{color:"white",children:"Password"}),Object(W.jsx)(G.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Password",type:"password",textColor:"white",id:"Password",value:n,onChange:u})]}),Object(W.jsx)(S.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(a)||(t+="Email is invalid, please enter a valid email. "),/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(n)||(t+="Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "),t.length>0?(console.log(2),h({title:"Invalid Login Details entered",description:t,status:"error",isClosable:!0})):(console.log(1),function(){var e={Email:a,Password:n};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/login",e).then((function(e,t){e.data.valid?(localStorage.setItem("accessToken",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data.id),b({username:e.data.username,id:e.data.id,status:!0}),h({title:"Account successfully logged in!",status:"success",isClosable:!0}),j.push("/")):h({title:"Invalid Email or Password Entered",status:"error",isClosable:!0})}))}())},children:Object(W.jsx)(he.a,{children:"Sign In"})})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(N,{})]})})}var xe=function(){var e=Object(i.useState)({username:"",id:0,status:!1}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(W.jsx)(I.Provider,{value:{authState:a,setAuthState:s},children:Object(W.jsx)(l.a,{children:Object(W.jsxs)(d.d,{children:[Object(W.jsx)(d.b,{path:"/",exact:!0,render:function(e){return Object(W.jsx)(H,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/signup",exact:!0,render:function(e){return Object(W.jsx)(V,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/spot/:id",exact:!0,render:function(e){return Object(W.jsx)(oe,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/submission",exact:!0,render:function(e){return Object(W.jsx)(be,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/results/:query",exact:!0,render:function(e){return Object(W.jsx)(te,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/search",exact:!0,render:function(e){return Object(W.jsx)(je,Object(n.a)({},e))}}),Object(W.jsx)(d.b,{path:"/signin",exact:!0,render:function(e){return Object(W.jsx)(ue,Object(n.a)({},e))}}),Object(W.jsx)(d.a,{to:"/"})]})})})},ge=a(236);r.a.render(Object(W.jsx)(s.a.StrictMode,{children:Object(W.jsx)(ge.a,{children:Object(W.jsx)(xe,{})})}),document.getElementById("root"))}},[[196,1,2]]]);