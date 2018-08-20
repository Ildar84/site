export {addingMsg, clearCartMsg, afterSendMsg}

  var addingMsg = new $.peekABar({
    autohide: true,
    backgroundColor: '#2f2f2f',
    opacity: '0.8',
    html: 'Added to cart',
    position: 'bottom'
  })

  var clearCartMsg = new $.peekABar({
    cssClass: 'bar-onClear',
    backgroundColor: 'orange',
    opacity: '0.8',
    position: 'bottom',
    html: '<span>Do you really want to remove all stuffs from cart?</span><div><button class="btn del-yes">Yes</Button><button class="btn del-no">No</Button></div>',
  })

  var afterSendMsg = new $.peekABar({
    autohide: true,
    backgroundColor: 'blue',
    opacity: '0.8',
    position: 'bottom',
    onHide: closeAfter,
  })

  function closeAfter(){
    $('.order').remove();
  }
