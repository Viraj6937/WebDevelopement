
     function chocolateImage() {
        document.getElementById('cornetto-flavour').src = './images/capture4.jpg';
        document.getElementById('cornetto-title').innerText = 'Cornetto-Double Chocolate';
        document.getElementById('cornetto-quantity').value='1';
        document.getElementById('cornetto-pricelabel').innerHTML='₹ 70';
      }
  
      function Butterscotch() {
        document.getElementById('cornetto-flavour').src = './images/capture5.jpg';
        document.getElementById('cornetto-title').innerText = 'Cornetto-Butterscotch';
        document.getElementById('cornetto-quantity').value='1';
        document.getElementById('cornetto-pricelabel').innerHTML='₹ 80';
      }
  
      function RoyalKulfi() {
        document.getElementById("cornetto-flavour").src = './images/capture6.jpg';
        document.getElementById('cornetto-title').innerText = 'Cornetto-Royal Kulfi';
        document.getElementById('cornetto-quantity').value='1';
        document.getElementById('cornetto-pricelabel').innerHTML='₹ 90';
      }
  
      function kulfimalai() {
        document.getElementById("kulfi-flavour").src = './images/capture10.jpg';
        document.getElementById('koolfi-title').innerText='Koolfi-Mawa Malai';
        document.getElementById('koolfi-quantity').value='1';
        document.getElementById('koolfi-pricelabel').innerText='₹ 40';
      }
  
      function pistaKulfi() {
        document.getElementById("kulfi-flavour").src = './images/capture12.jpg';
        document.getElementById('koolfi-title').innerText='Koolfi-Pista Malai';
        document.getElementById('koolfi-quantity').value='1';
        document.getElementById('koolfi-pricelabel').innerText= '₹ 45';
      }
  
      function rajbhog() {
        document.getElementById("kulfi-flavour").src = './images/capture13.jpg';
        document.getElementById('koolfi-title').innerText='Koolfi-Rajbhog';
        document.getElementById('koolfi-quantity').value='1';
        document.getElementById('koolfi-pricelabel').innerText= '₹ 47';
      }
  
      function matkaMalai() {
        document.getElementById("matka-flavour").src = './images/capture14.jpg';
        document.getElementById('matka-title').innerText='Matka-Malai';
        document.getElementById('matka-quantity').value='1';
        document.getElementById('matka-pricelabel').innerText='₹ 65';
      }
  
      function matkaPista() {
        document.getElementById("matka-flavour").src = './images/capture15.jpg';
        document.getElementById('matka-title').innerText='Matka-Pista';
        document.getElementById('matka-quantity').value='1';
        document.getElementById('matka-pricelabel').innerText='₹ 78';
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
        else if(cornetto_title.innerText.includes('Cornetto-Butterscotch')){
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
      

      function koolfiPriceCal(){
        var koolfi_title = document.getElementById('koolfi-title');
        var koolfi_quantity = document.getElementById('koolfi-quantity').value;
        var koolfi_alert = document.getElementById('koolfi-alert');
        var koolfi_price = document.getElementById('koolfi-pricelabel');
        var koolfi_order = document.getElementById('koolfi-orderNow');

        if(koolfi_title.innerText.includes('Koolfi-Mawa Malai')){
          if(koolfi_quantity > 0){
              koolfi_alert.style.visibility='hidden';
              koolfi_order.style.visibility='visible';
              var price = koolfi_quantity * 40;
              return koolfi_price.innerHTML = '₹ '+price;
          }
          else{
            koolfi_alert.style.visibility='visible';
            koolfi_order.style.visibility='hidden';
          }
        }
        else if(koolfi_title.innerText.includes('Koolfi-Pista Malai')){
           if(koolfi_quantity > 0){
              koolfi_alert.style.visibility='hidden';
              koolfi_order.style.visibility='visible';
              var Price2 = koolfi_quantity * 45;
              return koolfi_price.innerHTML = '₹ '+Price2;
           }
           else{
              koolfi_alert.style.visibility='visible';
              koolfi_order.style.visibility='hidden';
           }
        }
        else{
             if(koolfi_quantity > 0){
                koolfi_alert.style.visibility='hidden';
                koolfi_order.style.visibility='visible';
                var Price3 = koolfi_quantity * 47;
                return koolfi_price.innerHTML = '₹ '+Price3;
             }else{
              koolfi_alert.style.visibility='visible';
              koolfi_order.style.visibility='hidden';
             }
        }
      }

      function matkaPriceCal(){
        var matka_title = document.getElementById('matka-title');
        var matka_quantity = document.getElementById('matka-quantity').value;
        var matka_price = document.getElementById('matka-pricelabel');
        var matka_alert = document.getElementById('matka-alert');
        var matka_orderNow = document.getElementById('matka-orderNow');

        if(matka_title.innerText.includes('Matka-Malai')){
            if(matka_quantity > 0){
               matka_alert.style.visibility='hidden';
               matka_orderNow.style.visibility='visible';
               var matkaPrice1 = matka_quantity * 65;
               return matka_price.innerHTML = '₹ '+matkaPrice1;
            }
            else{
              matka_alert.style.visibility='visible';
              matka_orderNow.style.visibility='hidden';
            }
        }
        else{
             if(matka_quantity > 0){
              matka_alert.style.visibility='hidden';
              matka_orderNow.style.visibility='visible';
              var matkaPrice1 = matka_quantity * 78;
              return matka_price.innerHTML = '₹ '+matkaPrice1;
              }
              else{
                matka_alert.style.visibility='visible';
                matka_orderNow.style.visibility='hidden';
              }
        }
      }


      function placeCornettoOrder(){
        const order = {
            cornetto:{
              itemname:'',
              quantity:'',
              price:0
            }
        }
        var itemname = document.getElementById('cornetto-title').innerText;
        var quantity = document.getElementById('cornetto-quantity').value;
        if(itemname.includes('Cornetto-Double Chocolate')){
           if(quantity > 0){
            order.cornetto.itemname = itemname;
            order.cornetto.quantity = quantity;
            order.cornetto.price = cornettoPriceCal();
            alert('Thankyou for an order\n\n'+'item name: '+order.cornetto.itemname+'\nquantity: '+order.cornetto.quantity+'\n price: '+order.cornetto.price);
           }
           else{
            alert('something went wrong');
           }

        }else if(itemname.includes('Cornetto-Butterscotch')){
          if(quantity > 0){
            order.cornetto.itemname = itemname;
            order.cornetto.quantity = quantity;
            order.cornetto.price = cornettoPriceCal();
            alert('Thankyou for an order\n\n'+'item name: '+order.cornetto.itemname+'\nquantity: '+order.cornetto.quantity+'\n price: '+order.cornetto.price);
           }
           else{
            alert('something went wrong');
           }
        }else{
          if(quantity > 0){
            order.cornetto.itemname = itemname;
            order.cornetto.quantity = quantity;
            order.cornetto.price = cornettoPriceCal();
            alert('Thankyou for an order\n\n'+'item name: '+order.cornetto.itemname+'\nquantity: '+order.cornetto.quantity+'\nprice: '+order.cornetto.price);
           }
           else{
            alert('something went wrong');
           }
        }
      }

      function placeKoolfiOrder(){
        const order = {
          koolfi:{
            itemname:'',
            quantity:'',
            price:0
          }
        }
         
        var itemname = document.getElementById('koolfi-title').innerText;
        var quantity = document.getElementById('koolfi-quantity').value;

        if(itemname.includes('Koolfi-Mawa Malai')){
          if(quantity > 0){
            order.koolfi.itemname = itemname;
            order.koolfi.quantity = quantity;
            order.koolfi.price = koolfiPriceCal();
            alert('Thankyou for an order \n\n'+'item name: '+order.koolfi.itemname+'\nquantity: '+order.koolfi.quantity+'\nprice: '+order.koolfi.price);
        }
        else{
          alert('something went wrong');
        }
        }
        else if(itemname.includes('Koolfi-Pista Malai')){
          if(quantity > 0){
            order.koolfi.itemname = itemname;
            order.koolfi.quantity = quantity;
            order.koolfi.price = koolfiPriceCal();
            alert('Thankyou for an order \n\n'+'item name: '+order.koolfi.itemname+'\nquantity: '+order.koolfi.quantity+'\nprice: '+order.koolfi.price);
        }
        else{
          alert('something went wrong');
        }
        }
        else{
          if(quantity > 0){
            order.koolfi.itemname = itemname;
            order.koolfi.quantity = quantity;
            order.koolfi.price = koolfiPriceCal();
            alert('Thankyou for an order \n\n'+'item name: '+order.koolfi.itemname+'\nquantity: '+order.koolfi.quantity+'\nprice: '+order.koolfi.price);
        }
        else{
          alert('something went wrong');
        }
        }
      }

      function placeMatkaOrder(){
        const order = {
          matka:{
            itemname:'',
            quantity:'',
            price:0
          }
        }
         
        var itemname = document.getElementById('matka-title').innerText;
        var quantity = document.getElementById('matka-quantity').value;
        
        if(itemname.includes('Matka-Malai')){
          if(quantity > 0){
             order.matka.itemname = itemname;
             order.matka.quantity = quantity;
             order.matka.price = matkaPriceCal();
             alert('Thankyou for an order\n\n'+'item name: '+order.matka.itemname+'\nquantity:'+order.matka.quantity+'\nprice:'+order.matka.price);
          }
          else{
            alert('something went wrong');
          }
        }
        else{
          if(quantity > 0){
            order.matka.itemname = itemname;
            order.matka.quantity = quantity;
            order.matka.price = matkaPriceCal();
            alert('Thankyou for an order\n\n'+'item name: '+order.matka.itemname+'\nquantity: '+order.matka.quantity+'\nprice: '+order.matka.price);
         }
         else{
           alert('something went wrong');
         }
        }
      }
