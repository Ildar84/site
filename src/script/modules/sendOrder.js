import {afterSendMsg} from './barMessages'
export default (cart)=>{
  $('#sendOrder').ajaxForm(function(responseText, statusText, xhr, $form){
    // console.log('xhr=',xhr);
    // console.log('statusText=',statusText);
    // console.log('$form=',$form);
    // console.log('responceText=',responseText);

    afterSendMsg.show({
          html: responseText
        })

    if(statusText=='success') {
      cart.checkBage();
    }


  })

  // $('#sendOrder').submit(function(){
  //   $(this).ajaxSubmit({
  //     // url: '/send-order/',
  //     // method: 'post',
  //     success: afterSendMsg.show({
  //       html: afterSendMsg(responseText),
  //     }),
  //   })
  //   return false
  // })

} // default function
