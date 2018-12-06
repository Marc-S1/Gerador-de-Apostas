function mega() {

	var numeros = [];
	var num;
	for(var i=0;i<6;i++)
	{
		num = Math.floor((Math.random() * 60) + 1);
		
		numeros.push(num);
	}
	var resultado="";
	for(var i=0;i<6;i++)
	{
		resultado+=numeros[i]+" ";
	}
       
	document.getElementById("numeros").innerHTML=resultado;
}

function lotofacil()
{
	var numeros = [];
	var num;
	for(var i=0;i<15;i++)
	{
		num = Math.floor((Math.random() * 60) + 1);
		
		numeros.push(num);
	}
	var resultado="";
	for(var i=0;i<15;i++)
	{
		resultado+=numeros[i]+" ";
	}
	document.getElementById("numeros").innerHTML=resultado;
}

function quina()
{
	var numeros = [];
	var num;
	for(var i=0;i<5;i++)
	{
		num = Math.floor((Math.random() * 60) + 1);
		
		numeros.push(num);
	}
	var resultado="";
	for(var i=0;i<5;i++)
	{
		resultado+=numeros[i]+" ";
	}
	document.getElementById("numeros").innerHTML=resultado;
}

function lotomania()
{
	var numeros = [];
	var num;
	for(var i=0;i<50;i++)
	{
		num = Math.floor((Math.random() * 60) + 1);
		
		numeros.push(num);
	}
	var resultado="";
	for(var i=0;i<50;i++)
	{
		resultado+=numeros[i]+" ";
	}
	document.getElementById("numeros").innerHTML=resultado;
}
