$(document).ready(function () {
  const fetchInfo = function () {
    $.getJSON('/info').done(function (info) {
      $('#brother').text( info.brother );
      $('#time').text( info.time );
      $('#uptime').text( info.uptime );
      console.log( info.fortune );
    });
  }

  setInterval(fetchInfo, 2000);
  fetchInfo();

  // const fetchBrother = function () {
  //   $('#brother').load('/brother');
  // };
  //
  // setInterval( fetchBrother, 3000 );
  // fetchBrother();
  //
  // const fetchTime = function () {
  //   $('#time').load('/time');
  // }
  //
  // setInterval( fetchTime, 1000 );
  // fetchTime();
  //
  // const fetchUptime = function () {
  //   $('#uptime').load('/uptime');
  // };
  //
  // setInterval( fetchUptime, 5000 );
  // fetchUptime();
});
