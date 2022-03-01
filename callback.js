var cd=10;
function greeting() {
    if(cd==0)
    alert("Happy Independence Day")
    else
    alert(cd--);

  }
  
  function no10(callback) {
    callback(cd);
    no9(callback);
  }
  
  function no9(callback)
  {
      callback(cd)
      no8(callback)
  }
  
  function no8(callback)
  {
      callback(cd)
      no7(callback)
  }
  function no7(callback)
  {
      callback(cd)
      no6(callback)
  }  
  function no6(callback)
  {
      callback(cd)
      no5(callback)
  }  
  function no5(callback)
  {
      callback(cd)
      no4(callback)
  }  
  function no4(callback)
  {
      callback(cd)
      no3(callback)
  }  
  function no3(callback)
  {
      callback(cd)
      no2(callback)
  }  
  function no2(callback)
  {
      callback(cd)
      no1(callback)
  }  
  function no1(callback)
  {
      callback(cd)
      noc(callback)
  }
  function noc(callback)
  {
      callback(cd)
  }
 no10(greeting);