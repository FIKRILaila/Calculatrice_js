function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;

function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
    form.display.value = eval(form.display.value);
    var p=form.display.value;
    var li = document.createElement("li")
    li.textContent = p;
    var ul = document.querySelector(".pass")
    ul.appendChild(li)
    li.addEventListener("click",()=>{
    form.display.value = li.textContent;
  })
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}


const a = document.querySelector("#b")
const submit = document.querySelector("#submit")
let dataY = [];
let input;
submit.addEventListener("click", (e)=> {
    e.preventDefault();
    let dataY = [];
  for (let x = 0; x < 10; x++) {
    with(Math){
      if(a.value=="cos(x)" || a.value=="sin(x)" || a.value=="tan(x)" ){
         input = a.value.replace(/[x]+/g, `${x}`);
      }else{
        input = a.value.replace(/[x]+/g, `*${x}`);
      }
      dataY.push(eval(input))
    }
    }
    var Courbe = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(Courbe, {
      type: "line",
      data: {
        labels: [0, 1, 2, 3, 4, 5,6,7,8,9],
        datasets: [
          {
            label: "f(x)",
            data:  dataY,
            fill: false,
            backgroundColor: [
                "#FF7904",
            ],
            borderColor: [
                "#FF7904",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                // suggestedMin: -2,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                beginAtZero: true,
                suggestedMin: -2,
              },
            },
          ],
        },
      },
    });
    
})

//  let memory=document.getElementsByClassName('.pass')
//  console.log(memory)
//     memory.forEach(element => {
//     element.addEventListener("click", function(){ });
// });
        // let memory= document.querySelector('.pass');
        // myfunction(str){
        //     let output=document.getElementById()
            
        // }
        // for(let i=0; i<memory.length; i++){
        //     memory.value.addEventListener("click",myfunction(memory.value));
        // }
