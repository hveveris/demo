//	HYPE.documents["index"]

(function(){(function k(){var f="index.hyperesources",d="index",c="index_hype_container";if(false==!1)try{for(var g=document.getElementsByTagName("script"),a=0;a<g.length;a++){var b=g[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){f=b.substr(0,b.lastIndexOf("/"));break}}}catch(m){}if(false==!1&&null==window.HYPE_466)null==window.HYPE_dtl_466?(window.HYPE_dtl_466=[],window.HYPE_dtl_466.push(k),d=document.getElementsByTagName("head")[0],c=document.createElement("script"),
a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,c.type="text/javascript",c.src=f+"/"+(!0==(null!=a&&10>a||false==!0)?"HYPE-466.full.min.js":"HYPE-466.thin.min.js"),d.appendChild(c)):window.HYPE_dtl_466.push(k);else{window.HYPE_dtl_466=[];g=window.HYPE.documents;if(null!=g[d]){b=1;a=d;do d=""+a+"-"+b++;while(null!=g[d]);for(var e=document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==c&&null==e[a].getAttribute("HYP_dn")){var b=
1,h=c;do c=""+h+"-"+b++;while(null!=document.getElementById(c));e[a].id=c;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeDragAndDropApplication",source:"function(hypeDocument, element, event) {\t\n\tvar minIndex = 100;\n\tvar draggableItemCount = 4;\n\tvar droppedItems = {};\n\tvar draggablePrefix = \"drag\";\n\tvar droppablePrefix = \"drop\";\n\t\n\t$(document).ready(function(){\n\t\n\t\tfor (var j=1; j<=draggableItemCount; j++)\n\t\t{\n\t\t\t\t//\n\t\t\t\t//INITIALIZE DRAGGABLE ELEMENTS\n\t\t\t\t//\n\t\t\t\t\n\t\t\t\tvar draggable = \"#\" + draggablePrefix + j;\n\t\t\t\t\n\t\t\t\t//save initial position\t\n\t\t\t\t$(draggable).prop(\"initialPosition\", $(draggable).position());\n\t\t\t\t\n\t\t\t\t//set initial index\n\t\t\t\t$(draggable).parent().zIndex(minIndex++);\n\t\t\t\t\n\t\t\t\t//on mouse down\n\t\t\t\t$(draggable).mousedown(function(){ \n\t\t\t\t\t$(this).css('opacity', .8);\n\t\t\t\t\t$(this).parent().zIndex(minIndex++);\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\t//on mouse up\n\t\t\t\t$(draggable).mouseup(function(){ \n\t\t\t\t\t$(this).css('opacity', 1);\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\t//make draggable\n\t\t\t\t$(draggable).draggable ({\n        \t\t\t\n        \t\t\tcontainment\t\t:\"#index_hype_container\",\n        \t\t\tcursor \t\t\t:\"pointer\",\n        \t\t\trevert\t\t\t:\"invalid\",\n        \t\t\trevertDuration\t:300,\n\t\t\t\t\tscope\t\t\t:\"stuff\",\n        \t\t\t\n        \t\t\tstart\t\t\t:function(event, ui){\n        \t\t\t\t\t\t\t\t\n        \t\t\t\t\t\t\t}\n\t\t    \t});\n\t\t    \t\n\t\t    \t\n\t\t    \t//\n\t\t    \t//INITIALIZE DROPPABLE ELEMENTS\n\t\t    \t//\n\t\t    \t\n\t\t    \tvar droppable = \"#\" + droppablePrefix + j;\n\n\t\t\t\t//initial opacity\n\t\t    \t$(droppable).css('opacity', .8);\n\t\t    \t\n\t\t    \t$(droppable).droppable({\n\t\t\t\n\t\t\t\tscope\t\t:\"stuff\",\n\t\t\t\t\n\t\t\t\tover\t\t:function(event, ui){\n\t\t\t\t\t\t\t\t$(this).css('transform', 'scale(1.1)');\n\t\t\t\t\t\t\t\t$(this).css('opacity', 1);\n\t\t\t\t\t\t\t},\n\n\t\t\t\tout\t\t\t:function(event, ui){\n\t\t\t\t\t\t\t\t$(this).css('transform', 'scale(1.0)');\n\t\t\t\t\t\t\t\t$(this).css('opacity', 0.8);\n\t\t\t\t\t\t\t},\n\n\t\t\t\t\n\t\t\t\tdrop\t\t:function(event, ui){\n\t\t\t\t\n\t\t\t\t\t\t\t\t//reset droppable looks\n\t\t\t\t\t\t\t\t$(this).css('transform', 'scale(1.0)');\n\t\t\t\t\t\t\t\t$(this).css('opacity', 0.8);\n\t\t\t\t\n\t\t\t\t\t\t\t\t//current draggable and droppable\n\t\t\t\t\t\t\t\tvar draggableId = $(ui.draggable).attr(\"id\");\n\t\t\t\t\t\t\t\tvar droppableId = $(this).attr(\"id\");\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//move existing droppable back to its initial position\n\t\t\t\t\t\t\t\tvar existingId = droppedItems[droppableId];\n\t\t\t\t\t\t\t\tif (existingId != null && existingId != draggableId)\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tvar initialPosition = $('#' + existingId).prop('initialPosition');\n\t\t\t\t\t\t\t\t\t$('#' + existingId).animate({ top:initialPosition.top, left:initialPosition.left }, 300);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//remove draggable from previous droppable\n\t\t\t\t\t\t\t\t$.each(droppedItems, function(key, value){ if (value === draggableId) droppedItems[key] = null; }); \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//assign the new draggable\n\t\t\t\t\t\t\t\tdroppedItems[droppableId] = draggableId;\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//position the draggable on the droppable\n\t\t\t\t\t\t\t\tvar targetPosition = $(this).position();\n\t\t\t\t\t\t\t\t$(ui.draggable).animate({ top:targetPosition.top - 2, left:targetPosition.left - $(this).width() - 14 });\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tconsole.log(\"dropping \" + draggableId + \" on \" + droppableId);\n\t\t\t\t\t\t\t\tconsole.log(droppedItems);\n\t\t\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t }\n\t});\n\t\n}",identifier:"163"},{name:"initializeBodyPartsApplication",source:"function(hypeDocument, element, event) {\t\n\t\t\n\tvar minIndex = 100;\n\tvar draggableItemCount = 5;\n\tvar droppedItems = {};\n\tvar draggablePrefix = \"bodyDrag\";\n\tvar droppablePrefix = \"bodyDrop\";\n\t\n\t$(document).ready(function(){\n\t\n\t\tfor (var j=1; j<=draggableItemCount; j++)\n\t\t{\n\t\t\t\t//\n\t\t\t\t//INITIALIZE DRAGGABLE ELEMENTS\n\t\t\t\t//\n\t\t\t\t\n\t\t\t\tvar draggable = \"#\" + draggablePrefix + j;\n\t\t\t\t\n\t\t\t\t//save initial position\t\n\t\t\t\t$(draggable).prop(\"initialPosition\", $(draggable).position());\n\t\t\t\t\n\t\t\t\t//set initial index\n\t\t\t\t$(draggable).parent().zIndex(minIndex++);\n\t\t\t\t\n\t\t\t\t//on mouse down\n\t\t\t\t$(draggable).mousedown(function(){ \n\t\t\t\t\t$(this).css('opacity', .8);\n\t\t\t\t\t$(this).parent().zIndex(minIndex++);\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\t//on mouse up\n\t\t\t\t$(draggable).mouseup(function(){ \n\t\t\t\t\t$(this).css('opacity', 1);\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\t//make draggable\n\t\t\t\t$(draggable).draggable ({\n        \t\t\t\n        \t\t\tcontainment\t\t:\"#index_hype_container\",\n        \t\t\tcursor \t\t\t:\"pointer\",\n        \t\t\trevert\t\t\t:\"invalid\",\n        \t\t\trevertDuration\t:300,\n\t\t\t\t\tscope\t\t\t:\"stuff\",\n        \t\t\t\n        \t\t\tstart\t\t\t:function(event, ui){\n        \t\t\t\t\t\t\t\t\n        \t\t\t\t\t\t\t}\n\t\t    \t});\n\t\t    \t\n\t\t    \t\n\t\t    \t//\n\t\t    \t//INITIALIZE DROPPABLE ELEMENTS\n\t\t    \t//\n\t\t    \t\n\t\t    \tvar droppable = \"#\" + droppablePrefix + j;\n\n\t\t\t\t//initial opacity\n\t\t    \t$(droppable).css('opacity', .8);\n\t\t    \t\n\t\t    \t$(droppable).droppable({\n\t\t\t\n\t\t\t\tscope\t\t:\"stuff\",\n\t\t\t\t\n\t\t\t\tover\t\t:function(event, ui){\n\t\t\t\t\t\t\t\t$(this).css('transform', 'scale(1.1)');\n\t\t\t\t\t\t\t\t$(this).css('opacity', 1);\n\t\t\t\t\t\t\t},\n\n\t\t\t\tout\t\t\t:function(event, ui){\n\t\t\t\t\t\t\t\t$(this).css('transform', 'scale(1.0)');\n\t\t\t\t\t\t\t\t$(this).css('opacity', 0.8);\n\t\t\t\t\t\t\t},\n\n\t\t\t\t\n\t\t\t\tdrop\t\t:function(event, ui){\n\t\t\t\t\n\t\t\t\t\t\t\t\t//reset droppable looks\n\t\t\t\t\t\t\t\t$(this).css('transform', 'scale(1.0)');\n\t\t\t\t\t\t\t\t$(this).css('opacity', 0.8);\n\t\t\t\t\n\t\t\t\t\t\t\t\t//current draggable and droppable\n\t\t\t\t\t\t\t\tvar draggableId = $(ui.draggable).attr(\"id\");\n\t\t\t\t\t\t\t\tvar droppableId = $(this).attr(\"id\");\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//move existing droppable back to its initial position\n\t\t\t\t\t\t\t\tvar existingId = droppedItems[droppableId];\n\t\t\t\t\t\t\t\tif (existingId != null && existingId != draggableId)\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tvar initialPosition = $('#' + existingId).prop('initialPosition');\n\t\t\t\t\t\t\t\t\t$('#' + existingId).animate({ top:initialPosition.top, left:initialPosition.left }, 300);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//remove draggable from previous droppable\n\t\t\t\t\t\t\t\t$.each(droppedItems, function(key, value){ if (value === draggableId) droppedItems[key] = null; }); \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//assign the new draggable\n\t\t\t\t\t\t\t\tdroppedItems[droppableId] = draggableId;\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//position the draggable on the droppable\n\t\t\t\t\t\t\t\tvar targetPosition = $(this).position();\n\t\t\t\t\t\t\t\t$(ui.draggable).animate({ top:targetPosition.top + 2, left:targetPosition.left + 4 });\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tconsole.log(\"dropping \" + draggableId + \" on \" + droppableId);\n\t\t\t\t\t\t\t\tconsole.log(droppedItems);\n\t\t\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t }\n\t});\n\t\n}",identifier:"168"},{name:"initializeQuestionnaireLevel",source:"function(hypeDocument, element, event) {\t\n\tvar timer, timeElapsed;\n\tvar startButtonId = '#startQuestionnaire';\n\tvar updateInterval = 100;\n\tvar initialClockRotation = 84;\n\tvar degreesPerSecond = 360/60;\n\tvar quizDurationSeconds = 60;\n\tvar numCorrectAnswers = 0;\n\t\n\tvar questionIndex = 0;\n\tvar answers = [];\n\tvar correctAnswers = [1, 2, 0, 2, 0, 2, 1, 0, 2, 1, 2, 1, 0, 0, 1, 2, 0, 2, 1, 0];\n\tvar questions = [\n\t\t{q:\"jkwwncwncnercnr ewbcbw ewbc\", answers:[\"Yes\", \"No\", \"Maybe\"]},\n\t\t{q:\"dnxkjnw cwcncwencnc ewhcbewjhbc ewbc\", answers:[\"No\", \"Yes\", \"Always\"]},\n\t\t{q:\"nuwecnkwecbcibic ewbcbw ewbc\", answers:[\"Never\", \"No\", \"Yes\"]},\n\t\t{q:\"wncljkwncjwjkcn ewhcbewjhbc ewbc\", answers:[\"Yes\", \"No\", \"Perhaps\"]},\n\t\t{q:\"xcnwencixu newx ewbcbw ewbc\", answers:[\"Never\", \"No\", \"Yes\"]},\n\t\t{q:\"xnkwencxnewcnwecn ewhcbewjhbc ewbc\", answers:[\"Yes\", \"No\", \"Maybe\"]},\n\t\t{q:\"kxnwexnen jkcweknc ewbcbw ewbc\", answers:[\"No\", \"Yes\", \"Always\"]},\n\t\t{q:\"nweuenn wehwe ewhcbewjhbc ewbc\", answers:[\"Never\", \"No\", \"Yes\"]},\n\t\t{q:\"wnclencecnwc cc ewbcbw ewbc\", answers:[\"Yes\", \"No\", \"Perhaps\"]},\n\t\t{q:\"cnbuewbcubwiu c ewhcbewjhbc ewbc\", answers:[\"Yes\", \"No\", \"Maybe\"]},\n\t\t{q:\"xnenucnewiunc ewbcbw ewhcbewjhbc  ewbc\", answers:[\"Yes\", \"No\", \"Perhaps\"]},\n\t\t{q:\"xvqytwxwqxuqnbx ewbcbw ewhcbewjhbc  ewbc\", answers:[\"No\", \"Yes\", \"Always\"]},\n\t\t{q:\"xnwenxuiewnxuieiubx ewbcbw ewhcbewjhbc  ewbc\", answers:[\"Never\", \"No\", \"Yes\"]},\n\t\t{q:\"qbnxuwqxxwxx ndn ewbc\", answers:[\"Yes\", \"No\", \"Maybe\"]},\n\t\t{q:\"kwbxkuewbxuew ewhcbewjhbc ewbc\", answers:[\"Yes\", \"No\", \"Perhaps\"]},\n\t\t{q:\"xljejcoiewniueuwc ewhcbewjhbc ewbc\", answers:[\"No\", \"Yes\", \"Always\"]},\n\t\t{q:\"nxuiowexuenwxue ewhcbewjhbc ewbc\", answers:[\"Never\", \"No\", \"Yes\"]},\n\t\t{q:\"nxionewiunxex ewbcbw ewbc\", answers:[\"Yes\", \"No\", \"Maybe\"]},\n\t\t{q:\"xnoeiwnxoiuenwxw ewhcbewjhbc ewbc\", answers:[\"Yes\", \"No\", \"Perhaps\"]},\n\t\t{q:\"xnbuewbxiubew ewbcbw ewbc\", answers:[\"No\", \"Yes\", \"Always\"]}\t];\n\t\n\thideControls();\n\tinitButtons();\n\t\n\t$('#next').click(function(){ clearInterval(timer); $(startButtonId).css('opacity', 1); });\n\t$(startButtonId).click(startQuestionnaire);\t\n\t\n\tfunction startQuestionnaire()\n\t{\n\t\t$(startButtonId).click(null);\n\t\t$(startButtonId).css('opacity', .5);\n\t\t\n\t\ttimeElapsed = 0;\n\t\ttimer = setInterval(timerUpdate, updateInterval);\n\t\t\n\t\tprepareNextQuestion();\n\t}\n\t\n\tfunction timerUpdate()\n\t{\n\t\ttimeElapsed += updateInterval * .001; \n\t\t\n\t\tvar degree = initialClockRotation + degreesPerSecond * timeElapsed;\n\t\t$('#clockHand').css({transform: 'rotate(' + degree + 'deg)' });\n\t\t\n\t\tif (timeElapsed >= quizDurationSeconds)\n\t\t{\n\t\t\tclearInterval(timer);\n\t\t\thideControls();\n\t\t\t$('#questionNumber').css('display', 'block');\n\t\t\t$('#questionNumber').html(\"You answered correctly \" + numCorrectAnswers + \" questions.\");\n\t\t}\n\t}\n\t\n\tfunction hideControls()\n\t{\n\t\t$('#answer1').css('display', 'none');\n\t\t$('#answer2').css('display', 'none');\n\t\t$('#answer3').css('display', 'none');\n\t\t$('#questionNumber').css('display', 'none');\n\t\t$('#questionContainer').css('display', 'none');\n\t}\n\t\n\tfunction initButtons()\n\t{\n\t\t$('#answer1').click(answerQuestion);\n\t\t$('#answer2').click(answerQuestion);\n\t\t$('#answer3').click(answerQuestion);\n\t}\n\t\n\tfunction answerQuestion()\n\t{\n\t\tconsole.log($(this));\n\t\t\n\t\tvar answerId = $(this).attr(\"id\").substr(-1, 1);\n\t\tanswers[questionIndex] = answerId - 1;\n\t\t\n\t\tif (correctAnswers[questionIndex] == answerId)\n\t\t\tnumCorrectAnswers++;\n\t\t\n\t\tquestionIndex++;\n\t\t\n\t\thideControls();\n\t\tupdateScore();\n\t\tprepareNextQuestion();\t\t\t\t\n\t}\n\t\n\tfunction updateScore()\n\t{\t\t\t\n\t\t$('#score').css('display', 'block');\n\t\t$('#score').html(numCorrectAnswers + ' of ' + questionIndex);\n\t}\n\t\n\tfunction prepareNextQuestion()\n\t{\n\t\tif (questionIndex >= questions.length)\n\t\t{\n\t\t\t$('#questionNumber').css('display', 'block');\n\t\t\t$('#questionNumber').html('OUT OF QUESTIONS');\n\t\t\tclearInterval(timer);\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar question = questions[questionIndex];\n\t\t\n\t\t$('#questionNumber').css('display', 'block');\n\t\t$('#questionNumber').html('QUESTION ' + (questionIndex + 1));\n\t\t\n\t\t$('#questionContainer').css('display', 'block');\n\t\t$('#questionContainer').html(question.q);\n\t\t\n\t\tvar numAnswers = question.answers.length;\n\t\tfor (var i=0; i<numAnswers; i++)\n\t\t{\n\t\t\tvar currentAnswer = '#answer' + (i+1);\n\t\t\t$(currentAnswer).css('display', 'block');\n\t\t\t$(currentAnswer).html(question.answers[i]);\t\t}\n\t}\n}",identifier:"170"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(l){window.console&&window.console.log(l),e[b[a].name]=function(){}}f=new HYPE_466(d,c,{"10":{n:"jquery.ui.touch-punch.min.js"},"2":{p:1,n:"BG.jpg",g:"69",t:"@1x"},"3":{p:1,n:"target.png",g:"53",t:"@1x"},"11":{n:"jquery-ui.min.js"},"4":{p:1,n:"needle.png",g:"113",t:"@1x"},"5":{p:1,n:"clock_back.png",g:"115",o:true,t:"@1x"},"6":{p:1,n:"clock_back%402x.png",g:"115",o:true,t:"@2x"},"7":{p:1,n:"body_02.png",g:"155",t:"@1x"},"0":{p:1,n:"arrow.png",g:"48",t:"@1x"},"8":{n:"Modernizr.js"},"1":{p:1,n:"drag.png",g:"59",t:"@1x"},"9":{n:"jquery.js"}},f,[],e,[{n:"matching",o:"1",X:[0]},{n:"60 SEC CHALLENGE",o:"85",X:[1]},{n:"LABELS",o:"121",X:[2]}],[{A:{a:[{p:4,h:"163"}]},o:"80",p:"600px",x:0,cA:false,Z:540,Y:990,c:"#FFFFFF",L:[],bY:1,d:990,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["195","180","176","202","197","198","196","190","191","189","187","179","178","177","182","186","185","184","203","200","201","199","183","194","193","192","188","204","181"],v:{"200":{G:"#000000",aU:8,bS:36,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"auto",t:16,Z:"break-word",aP:"auto",v:"bold",w:"Four legs",bF:"199",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:90,b:33},"194":{c:19,d:19,I:"None",J:"None",f:135,K:"None",g:"#000000",L:"None",M:0,N:0,bF:"192",A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:2,P:0,D:"#A0A0A0",a:90,b:7},"186":{G:"#000000",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Eight legs",bF:"184",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:83,b:34},"178":{h:"59",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"177",c:274,k:"div",z:1,d:100,r:"inline"},"199":{x:"visible",k:"div",bD:"auto",c:274,d:100,z:33,i:"drag1",a:169,aP:"pointer",j:"absolute",b:101},"190":{G:"#000000",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Two legs",bF:"189",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:91,b:35},"182":{h:"53",p:"no-repeat",x:"visible",tY:0.5,q:"100% 100%",a:703,j:"absolute",i:"drop2",z:42,k:"div",b:318,d:95,c:229,r:"inline",tX:0.5},"201":{h:"59",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"199",z:1,k:"div",c:274,d:100,r:"inline",bD:"auto"},"195":{b:227,z:56,K:"Solid",c:86,L:"Solid",d:15,aS:6,M:1,bD:"auto",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"85"}]},F:"center",G:"#000000",aP:"pointer",w:"NEXT LEVEL",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"187":{h:"53",p:"no-repeat",x:"visible",i:"drop1",q:"100% 100%",a:703,j:"absolute",b:426,c:229,k:"div",z:46,d:95,r:"inline"},"179":{G:"#000000",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Million legs",bF:"177",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:85,b:34},"191":{h:"59",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"189",c:274,k:"div",z:1,d:100,r:"inline"},"183":{h:"48",p:"no-repeat",x:"visible",a:31,q:"100% 100%",b:40,j:"absolute",r:"inline",c:206,k:"div",z:32,d:80},"202":{G:"#FFFFFF",aU:8,bS:36,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Human",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:53,aS:8,aT:8,a:784,F:"center",b:134},"196":{G:"#000000",aU:8,c:122,bS:36,aV:8,d:96,r:"inline",s:"Helvetica,Arial,Sans-Serif",X:-1,t:16,Z:"break-word",w:"<b>DRAG</b><div><b>&nbsp;</b><div><b><font color=\"#8b8b8b\" size=\"2\">TO THE CORRECT TARGET &amp; PRESS</font></b></div></div><div><b><font color=\"#8b8b8b\" size=\"2\">SUBMIT</font></b></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:50,aS:8,aT:8,a:8,b:118},"188":{aV:8,w:"<b>Match the following statements</b>",x:"visible",a:189,Z:"break-word",b:23,y:"preserve",j:"absolute",z:30,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bS:36,aS:8,t:16,aU:8,G:"#000000",r:"inline"},"192":{x:"visible",g:"",k:"div",c:990,d:26,z:31,a:0,j:"absolute",b:0},"184":{x:"visible",k:"div",c:274,d:100,z:39,i:"drag3",a:165,aP:"pointer",j:"absolute",b:316},"176":{G:"#FFFFFF",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Millipede",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:54,aS:8,aT:8,a:780,F:"center",b:352},"203":{h:"53",p:"no-repeat",x:"visible",i:"drop3",q:"100% 100%",a:703,j:"absolute",b:210,c:229,k:"div",z:38,d:95,r:"inline"},"197":{G:"#FFFFFF",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Spider",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:52,aS:8,aT:8,a:789,F:"center",b:242},"189":{x:"visible",k:"div",c:274,d:100,z:47,i:"drag4",a:164,aP:"pointer",j:"absolute",b:426},"180":{G:"#FFFFFF",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Dog",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:55,aS:8,aT:8,a:798,F:"center",b:457},"193":{c:990,d:17,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",bF:"192",C:"#A0A0A0",z:1,O:0,D:"#A0A0A0",P:0,a:0,b:0},"185":{h:"59",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:36,j:"absolute",bF:"184",z:1,k:"div",b:0,d:100,c:274,r:"inline"},"177":{x:"visible",k:"div",c:274,d:100,z:43,i:"drag2",a:165,aP:"pointer",j:"absolute",b:209},"204":{h:"53",p:"no-repeat",x:"visible",i:"drop4",q:"100% 100%",a:703,j:"absolute",b:102,c:229,k:"div",z:2,d:95,r:"inline"},"198":{c:100,bS:36,d:3,I:"None",J:"None",K:"None",g:"#48CDD3",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:51,P:0,D:"#A0A0A0",a:16,b:147},"181":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:36,j:"absolute",b:1,c:990,k:"div",z:1,d:540,r:"inline"}}},{A:{a:[{p:4,h:"170"}]},o:"112",p:"600px",x:1,cA:false,Z:540,Y:990,c:"#FFFFFF",L:[],bY:1,d:990,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["225","224","223","222","221","220","219","218","212","214","207","209","213","208","206","210","216","217","215","211","205"],v:{"221":{b:243,z:60,K:"Solid",c:395,L:"Solid",d:15,aS:6,M:1,bD:"auto",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,i:"answer1",j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"START",x:"visible",I:"Solid",a:218,y:"preserve",J:"Solid"},"213":{G:"#00CBE4",aU:8,c:154,bS:36,d:18,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",i:"questionNumber",w:"QUESTION",j:"absolute",x:"visible",k:"div",y:"preserve",z:44,aS:8,aT:8,a:218,b:124},"205":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:36,j:"absolute",b:1,c:990,k:"div",z:1,d:540,r:"inline"},"218":{G:"#000000",aU:8,c:149,bS:36,aV:8,d:96,r:"inline",s:"Helvetica,Arial,Sans-Serif",X:-1,t:16,Z:"break-word",w:"<b>YOUR SCORE</b><b><br></b>",j:"absolute",x:"visible",k:"div",y:"preserve",z:57,aS:8,aT:8,a:8,b:419},"222":{b:288,z:61,K:"Solid",c:395,L:"Solid",d:15,aS:6,M:1,bD:"auto",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,i:"answer2",j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"START",x:"visible",I:"Solid",a:218,y:"preserve",J:"Solid"},"214":{h:"115",p:"no-repeat",x:"visible",a:840,q:"100% 100%",b:39,j:"absolute",r:"inline",c:127,k:"div",z:54,d:127},"206":{G:"#000000",aU:8,c:149,bS:36,aV:8,d:96,r:"inline",s:"Helvetica,Arial,Sans-Serif",X:-1,t:16,Z:"break-word",w:"<b>START &amp; ANSWER</b><div><b>&nbsp;</b><div><font color=\"#8b8b8b\" size=\"2\"><b>PRESS START AND ANSWER THE MULTI-CHOICE QUESTIONS</b></font></div></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:42,aS:8,aT:8,a:8,b:149},"219":{c:100,bS:36,d:3,I:"None",J:"None",K:"None",g:"#48CDD3",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:58,P:0,D:"#A0A0A0",a:16,b:450},"210":{h:"48",p:"no-repeat",x:"visible",a:31,q:"100% 100%",b:72,j:"absolute",r:"inline",c:206,k:"div",z:32,d:80},"223":{b:333,z:62,K:"Solid",c:395,L:"Solid",d:15,aS:6,M:1,bD:"auto",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,i:"answer3",j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"START",x:"visible",I:"Solid",a:218,y:"preserve",J:"Solid"},"215":{x:"visible",g:"",k:"div",c:990,d:26,z:31,a:0,j:"absolute",b:0},"207":{bR:0,w:"",h:"113",p:"no-repeat",x:"visible",tY:0.39000000000000001,q:"100% 100%",a:852,b:95,j:"absolute",z:53,k:"div",i:"clockHand",d:14,c:75,aY:0,r:"inline",f:444,tX:0.69999999999999996},"211":{aV:8,w:"<b>60 second challenge&nbsp;</b><br>How many questions can you get correct in 60 seconds",x:"visible",a:189,Z:"break-word",b:23,y:"preserve",j:"absolute",z:30,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bS:36,aS:8,t:16,aU:8,G:"#000000",r:"inline"},"224":{G:"#000000",aU:8,c:391,aV:8,d:60,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",i:"questionContainer",w:"Question text",j:"absolute",x:"visible",k:"div",y:"preserve",z:63,aS:8,aT:8,a:220,b:154},"216":{c:19,d:19,I:"None",J:"None",f:135,K:"None",g:"#000000",L:"None",M:0,N:0,bF:"215",A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:2,P:0,D:"#A0A0A0",a:90,b:7},"208":{c:100,bS:36,d:3,I:"None",J:"None",K:"None",g:"#48CDD3",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:43,P:0,D:"#A0A0A0",a:16,b:178},"220":{b:297,z:59,K:"Solid",c:86,L:"Solid",d:15,aS:6,M:1,bD:"auto",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,i:"next",aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"121"}]},F:"center",G:"#000000",aP:"pointer",w:"NEXT LEVEL",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"212":{c:991,d:133,I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:56,O:0,D:"#D8DDE4",a:-1,b:407},"225":{aV:8,w:"0/0",x:"visible",a:16,Z:"break-word",b:458,y:"preserve",j:"absolute",z:64,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",i:"score",aS:8,t:16,aU:8,G:"#000000",r:"inline"},"217":{c:990,d:17,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",bF:"215",C:"#A0A0A0",z:1,O:0,D:"#A0A0A0",P:0,a:0,b:0},"209":{b:258,z:52,K:"Solid",c:86,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,i:"startQuestionnaire",j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"START",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}}},{A:{a:[{p:4,h:"168"}]},o:"148",p:"600px",x:2,cA:false,Z:540,Y:990,c:"#FFFFFF",L:[],bY:1,d:990,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["236","230","244","237","234","243","231","245","242","238","232","233","239","241","229","227","228","226","235","240"],v:{"238":{b:310,z:53,K:"Solid",c:197,L:"Solid",d:13,aS:8,M:2,N:2,aT:8,bS:36,O:2,g:"#14A1C9",aU:8,P:2,i:"bodyDrag2",aV:8,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Helvetica,Arial,Sans-Serif",D:"#FFFFFF",t:14,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Mouth",x:"visible",I:"Solid",a:15,y:"preserve",J:"Solid"},"242":{b:350,z:54,K:"Solid",c:197,L:"Solid",d:13,aS:8,M:2,N:2,aT:8,bS:36,O:2,g:"#14A1C9",aU:8,P:2,i:"bodyDrag3",aV:8,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Helvetica,Arial,Sans-Serif",D:"#FFFFFF",t:14,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Intestines",x:"visible",I:"Solid",a:15,y:"preserve",J:"Solid"},"234":{c:224,d:35,I:"Dashed",e:0.6391569972038269,J:"Dashed",K:"Dashed",g:"#E8EBED",L:"Dashed",M:1,i:"bodyDrop1",N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:1,C:"#000000",z:60,P:1,D:"#000000",a:403,b:126},"226":{x:"visible",g:"",k:"div",c:990,d:26,z:31,a:0,j:"absolute",b:0},"239":{c:100,bS:36,d:3,I:"None",J:"None",K:"None",g:"#48CDD3",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:43,P:0,D:"#A0A0A0",a:16,b:147},"230":{c:224,d:35,I:"Dashed",e:0.6391569972038269,J:"Dashed",K:"Dashed",g:"#E8EBED",L:"Dashed",M:1,i:"bodyDrop4",N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:1,C:"#000000",z:63,P:1,D:"#000000",a:326,b:468},"243":{h:"155",p:"no-repeat",x:"visible",a:535,q:"100% 100%",b:141,j:"absolute",r:"inline",c:183,k:"div",z:58,d:400},"235":{G:"#000000",aU:8,c:282,bS:36,aV:8,d:18,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"<b>Match the labels to the image</b>",j:"absolute",x:"visible",k:"div",y:"preserve",z:30,aS:8,aT:8,a:189,b:23},"227":{c:19,d:19,I:"None",J:"None",f:135,K:"None",g:"#000000",L:"None",M:0,N:0,bF:"226",A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:2,P:0,D:"#A0A0A0",a:90,b:7},"231":{b:431,z:56,K:"Solid",c:197,L:"Solid",d:13,aS:8,M:2,N:2,aT:8,bS:36,O:2,g:"#14A1C9",aU:8,P:2,i:"bodyDrag5",aV:8,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Helvetica,Arial,Sans-Serif",D:"#FFFFFF",t:14,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Lung",x:"visible",I:"Solid",a:15,y:"preserve",J:"Solid"},"244":{c:224,d:35,I:"Dashed",e:0.6391569972038269,J:"Dashed",K:"Dashed",g:"#E8EBED",L:"Dashed",M:1,i:"bodyDrop3",N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:1,C:"#000000",z:62,P:1,D:"#000000",a:376,b:378},"236":{c:224,d:35,I:"Dashed",e:0.6391569972038269,J:"Dashed",K:"Dashed",g:"#E8EBED",L:"Dashed",M:1,i:"bodyDrop2",N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:1,C:"#000000",z:64,P:1,D:"#000000",a:671,b:191},"228":{c:990,d:17,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",bF:"226",C:"#A0A0A0",z:1,O:0,D:"#A0A0A0",P:0,a:0,b:0},"240":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:36,j:"absolute",b:1,c:990,k:"div",z:1,d:540,r:"inline"},"232":{b:227,z:52,K:"Solid",c:86,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#000000",aP:"pointer",w:"NEXT LEVEL",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"245":{b:391,z:55,K:"Solid",c:197,L:"Solid",d:13,aS:8,M:2,N:2,aT:8,bS:36,O:2,g:"#14A1C9",aU:8,P:2,i:"bodyDrag4",aV:8,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Helvetica,Arial,Sans-Serif",D:"#FFFFFF",t:14,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Hand",x:"visible",I:"Solid",a:15,y:"preserve",J:"Solid"},"237":{c:224,d:35,I:"Dashed",e:0.6391569972038269,J:"Dashed",K:"Dashed",g:"#E8EBED",L:"Dashed",M:1,i:"bodyDrop5",N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:1,C:"#000000",z:61,P:1,D:"#000000",a:646,b:269},"229":{h:"48",p:"no-repeat",x:"visible",a:31,q:"100% 100%",b:40,j:"absolute",r:"inline",c:206,k:"div",z:32,d:80},"241":{G:"#000000",aU:8,c:122,bS:36,aV:8,d:96,r:"inline",s:"Helvetica,Arial,Sans-Serif",X:-1,t:16,Z:"break-word",w:"<b>DRAG</b><div><b>&nbsp;</b><div><b><font color=\"#8b8b8b\" size=\"2\">TO THE CORRECT TARGET &amp; PRESS</font></b></div></div><div><b><font color=\"#8b8b8b\" size=\"2\">SUBMIT</font></b></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:42,aS:8,aT:8,a:8,b:118},"233":{b:271,z:44,K:"Solid",c:197,L:"Solid",d:13,aS:8,M:2,N:2,aT:8,bS:36,O:2,g:"#14A1C9",aU:8,P:2,i:"bodyDrag1",aV:8,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Helvetica,Arial,Sans-Serif",D:"#FFFFFF",t:14,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Head",x:"visible",I:"Solid",a:15,y:"preserve",J:"Solid"}}}],{},h,{},
0,false,false,true,-1,true,true,true);g[d]=f.API;document.getElementById(c).setAttribute("HYP_dn",d);f.z_o(this.body)}})();})();
