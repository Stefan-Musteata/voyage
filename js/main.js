    //Slider
  var $slider = $('.slider');
  var $slideBox = $slider.find('.slide-box');
  var $leftControl = $slider.find('.slide-left');
  var $rightControl = $slider.find('.slide-right');
  var $slides = $slider.find('.slide');
  var numItems = $slider.find('.slide').length;
  var position = 0;
  var windowWidth = $(window).width();
  
  $slides.width(windowWidth);
  $leftControl.on('click', function(){
    var width = $slider.width();
    position = position - 1 >= 0 ? position - 1 : numItems - 1;
    if(position != numItems-1){
      $slider.find('.slide').eq(position + 1).css('margin-left', 0);
    }
    else{
      $slider.find('.slide:gt(0)').each(function(index){
        $(this).css('margin-left', width * -1 + 'px');
      });
    }
  });

  $rightControl.on('click', function(){
    var width = $slider.width();
    position = position + 1 < numItems ? position + 1 : 0;
    if(position != 0){
      $slider.find('.slide').eq(position).css('margin-left',  width * -1 + 'px');
    }
    else{
      $slider.find('.slide').css('margin-left', 0);
    }
  });

  $(window).resize(function(){
   $slides.width($(window).width()).height($(window).height);
  });

  //Top Nav menu
  function myFunction() {
    var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
  }

  //Datepicker
  $( "#datepicker" ).datepicker();


  //Autocomplete search in input
  var result = document.querySelector('.autocomplete-list');
  var Arr = [
    {
      city: 'London, United Kingdom',
      abrev: 'LON', 
      airport: [
        {
          name: 'London Heathrow Airport',
          abrev: 'LHR', 
        },{
          name: 'London Gatwick Airport',
          abrev: 'LGW', 
        },{
          name: 'London City Airport',
          abrev: 'LCY', 
        },{
          name: 'London City Airport',
          abrev: 'LCY', 
        },{
          name: 'London Stansend Airport',
          abrev: 'STN', 
        },{
          name: 'London Luton Airport',
          abrev: 'LTN', 
        },
      ]
    }
  ]

    // auto complete function
  function autoComplete(Arr, Input) {
      return Arr.filter( item => item.city.toLowerCase().includes(Input.toLowerCase()) ) 
  }

  
  //Get value (Stefan)
  function getValue(val){
      // if no value
      if(!val){
        result.innerHTML='';
        return
      }
    
      // search goes here 
      var data = autoComplete(Arr,val);
      
      // append list data
      var res =  data.map( item =>  `
                            <li>
                              <a href="/">
                                <span>
                                  <i class="fa fa-building-o"></i>${item.city}
                                </span> 
                                <span>${item.abrev}</span>
                              </a>
                            </li>`
                            +item.airport.map(airport => `
                              <li class="airport">
                                <a href="/">
                                  <span><i class="fa fa-plane"></i>${airport.name}</span>
                                  <span>${airport.abrev}</span>
                                </a>
                              </li>`).join(' ') 
                          )

      //E buna si aceasta varianta e mai bine structurata
      // var city = data.map(item => item.city)
      // var airports = data.map(item => item.airport.map(airport => airport.name))
      // var result = [city, airports[0]].flat()
      
      result.innerHTML = `<ul>${res}</ul>`;
  }