//задания на уровень
let lang="eng";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Brasil",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"USA(the Golden Gate Bridge)",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Russia",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Belgium",
			},
 	task10 = {task:``,
			pict:"./images/10.gif",
			answer:"Spain"
			}
]			


  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
//устанавливаем title уровня последние 2 символа имени локала
if (!document.querySelector("title").innerHTML) document.querySelector("title").innerHTML="AreYouReady"+taskName.slice(-2);