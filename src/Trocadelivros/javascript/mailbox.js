$('#btnchat').click((e) => {
    $('#chat').css('display', 'flex');
    $('#btnchat').css('display','none');
  });
$('#btnsend').click((e) => {
    $('#chat').css('display', 'none');
    $('#btnchat').css('display', 'flex');
    
  });