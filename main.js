
     function chocolateImage() {
        document.getElementById('cornetto-flavour').src = './images/capture4.jpg';
        document.getElementById('cornetto-title').innerText = 'Cornetto - Double Chocolate';
        document.getElementById('cornetto-quantity').value='1';
        document.getElementById('cornetto-pricelabel').innerHTML='₹ 70';
      }
  
      function Butterscotch() {
        document.getElementById('cornetto-flavour').src = './images/capture5.jpg';
        document.getElementById('cornetto-title').innerText = 'Cornetto - Butterscotch';
        document.getElementById('cornetto-quantity').value='1';
        document.getElementById('cornetto-pricelabel').innerHTML='₹ 80';
      }
  
      function RoyalKulfi() {
        document.getElementById("cornetto-flavour").src = './images/capture6.jpg';
        document.getElementById('cornetto-title').innerText = 'Cornetto - Royal Kulfi';
        document.getElementById('cornetto-quantity').value='1';
        document.getElementById('cornetto-pricelabel').innerHTML='₹ 90';
      }
  
      function kulfimalai() {
        document.getElementById("kulfi-flavour").src = './images/capture10.jpg';
      }
  
      function pistaKulfi() {
        document.getElementById("kulfi-flavour").src = './images/capture12.jpg';
      }
  
      function rajbhog() {
        document.getElementById("kulfi-flavour").src = './images/capture13.jpg';
      }
  
      function matkaMalai() {
        document.getElementById("matka-flavour").src = './images/capture14.jpg';
      }
  
      function matkaPista() {
        document.getElementById("matka-flavour").src = './images/capture15.jpg';
      }
      
       var title = '';
       var totalQuantity = 0;
  
       function Cornetto(value) {
        switch(value) {
          case 'Cornetto-Double Chocolate':
              chocolateImage();
            break;
          case 'Cornetto-Butterscotch':
            Butterscotch();
            break;
          case 'Cornetto-Royal kulfi':
            RoyalKulfi();
            break;
        }
      }
  
      function cornettoPriceCal(){
        var cornetto_alert = document.getElementById('cornetto-alert');
        var cornetto_price_label = document.getElementById('cornetto-pricelabel');
        var cornetto_check_price = document.getElementById('cornetto-checkprice');
        var cornetto_order_now = document.getElementById('cornetto-orderNow');
        var quantVal = document.getElementById('cornetto-quantity').value;
        var cornetto_title = document.getElementById('cornetto-title');


        if(cornetto_title.innerText.includes('Cornetto-Double Chocolate')){
          if(quantVal > 0){
            cornetto_alert.style.visibility='hidden';
            cornetto_order_now.style.visibility='visible';
            var totalPrice = quantVal * 70;
            return cornetto_price_label.innerHTML = '₹ '+totalPrice;
          }
          else{
              cornetto_alert.style.visibility='visible';
              cornetto_order_now.style.visibility='hidden';
          }
        }
        else if(cornetto_title.innerText.includes('Cornetto - Butterscotch')){
          if(quantVal > 0){
            cornetto_alert.style.visibility='hidden';
            cornetto_order_now.style.visibility='visible';
            var totalPrice2 = quantVal * 80;
            return cornetto_price_label.innerHTML = '₹ '+totalPrice2;
          }
          else{
              cornetto_alert.style.visibility='visible';
              cornetto_order_now.style.visibility='hidden';
          }
        }
         else{
            if(quantVal > 0){
            cornetto_alert.style.visibility='hidden';
            cornetto_order_now.style.visibility='visible';
            var totalPrice3 = quantVal * 90;
            return cornetto_price_label.innerHTML = '₹ '+totalPrice3;
          }
          else{
              cornetto_alert.style.visibility='visible';
              cornetto_order_now.style.visibility='hidden';
          }
        }
      }
      
  
      function placeOrder(){
        const order = {
        chocolate_double:{
          chocolate_itemlabel:"",
          chocolate_quantity:"",
          chocolate_price:0
        },
        butterscotch:{
          butterscotch_itemlabel:"",
          butterscotch_quantity:"",
          butterscotch_price:0
        },
        royal_kulfi:{
          royal_kulfi_itemlabel:"",
          royal_kulfi_quantity:"",
          royal_kulfi_price:0
        }
      }
  
        var cornetto_title = document.getElementById('cornetto-title').innerText;
        var cornetto_quantity = document.getElementById('cornetto-quantity').value;
        //var cornetto_price = document.getElementById('cornetto-pricelabel').innerText;
        // if(cornetto_title.includes('Cornetto - Double Chocolate')){
        //   if(cornetto_quantity > 0){
        //       order.chocolate_double.chocolate_itemlabel = cornetto_title;
        //       order.chocolate_double.chocolate_quantity = cornetto_quantity;
        //       order.chocolate_double.chocolate_price = cornettoPriceCal();
        //       alert('Thankyou for an order\n\nitem name:'+order.chocolate_double.chocolate_itemlabel+'\n quantity:' + order.chocolate_double.chocolate_quantity+'\ntotal price:'+order.chocolate_double.chocolate_price);
        //   }
        //   else{
        //     alert('something went wrong');
        //   }
        // }
        if(cornetto_title.includes('Cornetto - Butterscotch')){
          if(cornetto_quantity > 0){
              order.butterscotch.butterscotch_itemlabel = cornetto_title;
              order.butterscotch.butterscotch_quantity = cornetto_quantity;
              order.butterscotch.butterscotch_price = cornettoPriceCal(); 
              alert('Thankyou for an order\n\nitem name:'+order.butterscotch.butterscotch_itemlabel+'\n quantity:' + order.butterscotch.butterscotch_quantity+'\ntotal price:'+order.butterscotch.butterscotch_price);
          }
          else{
            alert('something went wrong');
          }
        }
        else if(cornetto_title.includes('Cornetto - Royal Kulfi')){
          if(cornetto_quantity > 0){
              order.royal_kulfi.royal_kulfi_itemlabel = cornetto_title;
              order.royal_kulfi.royal_kulfi_quantity = cornetto_quantity;
              order.royal_kulfi.royal_kulfi_price = cornettoPriceCal(); 
              alert(' Thankyou for an order\n\nitem name:'+order.royal_kulfi.royal_kulfi_itemlabel+'\n quantity:' + order.royal_kulfi.royal_kulfi_quantity+'\ntotal price:'+order.royal_kulfi.royal_kulfi_price);
          } 
          else{
            alert('something went wrong');
          }
        }
        else{
          if(cornetto_quantity > 0){
              order.chocolate_double.chocolate_itemlabel = cornetto_title;
              order.chocolate_double.chocolate_quantity = cornetto_quantity;
              order.chocolate_double.chocolate_price = cornettoPriceCal();
              alert('Thankyou for an order\n\nitem name:'+order.chocolate_double.chocolate_itemlabel+'\n quantity:' + order.chocolate_double.chocolate_quantity+'\ntotal price:'+order.chocolate_double.chocolate_price);
          }
          else{
            alert('something went wrong');
          }
        }
     }