export default function() {

  (function quantityProducts() {
    let $inputItems = $('.cart__item-qty');
    $inputItems.each(function({
      let $quantityArrowMinus = $(this).find(".fa-minus-square");
      let $quantityArrowPlus = $(this).find(".fa-plus-square");
      let $quantityNum = $(this).find(".input[type=number]");
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    }))



  })();

}
