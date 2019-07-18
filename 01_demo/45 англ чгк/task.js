//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:70,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Hamburger, Big Mac",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Coca-Cola"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"DNA",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Noise. Headphones protected from the noise of the city",
			}
]		;


	  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
//устанавливаем title уровня последние 2 символа имени локала
if (!document.querySelector("title").innerHTML) document.querySelector("title").innerHTML="AreYouReady"+taskName.slice(-2);
