$(function(){
  // write your solution here.
    // var number1, number2, result1 

  $('#number1 > button.incr').click(function(){
      // var number = $(this).parent().find('.number').text() //number in string
      var number1 = parseInt($(this).parent().find('.number').text()) //parse the number in string
      number1++//increment number
      var result1 = $(this).parent().find('.number').text(number1)
  })

  $('#number1 > button.decr').click(function(){
      // var number = $(this).parent().find('.number').text() //number in string
      var number1 = parseInt($(this).parent().find('.number').text()) //parse the number in string
      number1--//increment number
      $(this).parent().find('.number').text(number1)
  })
//clicking +, - , * , / and show operation
  $('#add').click(function(){
    $(this).parent().find('#operation').text('+')
  })

  $('#sub').click(function(){
    $(this).parent().find('#operation').text('-')
  })

  $('#mult').click(function(){
    $(this).parent().find('#operation').text('*')
  })

  $('#div').click(function(){
    $(this).parent().find('#operation').text('/')
  })

  $('#number2 > button.incr').click(function(){
      // var number = $(this).parent().find('.number').text() //number in string
      var number2 = parseInt($(this).parent().find('.number').text()) //parse the number in string
      number2++//increment number
      $(this).parent().find('.number').text(number2)
  })

  $('#number2 > button.decr').click(function(){
      // var number = $(this).parent().find('.number').text() //number in string
      var number2 = parseInt($(this).parent().find('.number').text()) //parse the number in string
      number2--//increment number
      $(this).parent().find('.number').text(number2)
  })

  //equals function
  $('#equals').click(function(){
    result1 = parseInt($(this).parent().parent().find('#number1').find('.number').text())
    operation= $(this).parent().parent().find('#operation').text()
    result2 = parseInt($(this).parent().parent().find('#number2').find('.number').text())
      if(operation == "-"){
        var result = result1 - result2
      }
      else if(operation == "+"){
        var result = result1 + result2
      }
      else if(operation == "*"){
        var result = result1 * result2
      }
      else if(operation == "/"){
        var result = result1 / result2
      }

    $(this).parent().find('#result').text(result)
  })

});
