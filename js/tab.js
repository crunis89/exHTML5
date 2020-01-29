var panels = $('.board section')
var tabs = $('.tab a')

tabs.click(function(e){
    e.preventDefault();
    panels.removeClass('board-act');
    $(this).parent().parent().addClass('board-act');
});

// preventDefault 는 a 태그 처럼
// 클릭 이벤트 외에 별도의 브라우저 행동을 막기 위해 사용됩니다.