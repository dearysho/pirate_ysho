$('.playerList').click(function(e){
	$('.playerList').removeClass('spark');
	$(this).addClass('spark');
	// rankArea
	index = $(this).index();
	count = 10-index;
	console.log('index: ',index,'count: ',count);
	$('.rankFrame').removeClass('rank0').removeClass('rank1').removeClass('rank2').removeClass('rank3').removeClass('rank4').removeClass('rank5').removeClass('rank6').removeClass('rank7').removeClass('rank8').removeClass('rank9');
	for(var i=0; i<=9; i++){
		if(count==10){
			count = 0;
		}
		$('.rankFrame').eq(i).addClass(`rank${count}`);//0->7 1->8 2->9 3->0
		count+=1;
	}
});