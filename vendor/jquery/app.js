document.ready(function(){
    $('#menu').load('pages.html');

    $('#tree1').treed();

    $('#tree2').treed({openedClass:'glyphicon-folder-open', closedClass:'glyphicon-folder-close'});

    $('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});

})
