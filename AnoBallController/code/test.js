"use strict"

autowatch = 1;
inlets = 1;
outlets = 20;

var myval=0;

if (jsarguments.length>1)
	myval = jsarguments[1];

function bang()
{
	outlet(0,"myvalue", "is", "probably", "not", Math.random());
}

function msg_int(v)
{
	post("received int " + v + "\n");
	myval = v;
	bang();
}

function msg_float(v)
{
	post("received float " + v + "\n");
	myval = v;
	bang();
}

function list()
{
	var a = arrayfromargs(arguments);
	post("received list " + a + "\n");
	myval = a;
	bang();
}

function msg_string(v) {
	post("received string " + v + "\n");
	myval = v;
	bang();
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	
	for (var i = 0; i < a.length; i++) {
		post("received message " + a[i] + "\n");
	}
	
	//post("received message " + a + "\n");
	myval = a;
	bang();
}