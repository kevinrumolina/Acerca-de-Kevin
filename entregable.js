function main(){
	$("#nombre").hide();
}

$("#boton").on("click",function(){
  	$("#nombre").slideToggle(400);
})

