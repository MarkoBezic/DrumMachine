$(document).ready(() => {
  $(".drum-pad").click((e) => {
    $(e.target).children()[0].play();
    console.log($(e.target)[0].id);
    switch ($(e.target)[0].id) {
      case "heater1":
        $("#display").html("Heater 1");
        break;
      case "heater2":
        $("#display").html("Heater 2");
        break;
      case "heater3":
        $("#display").html("Heater 3");
        break;
      case "heater4":
        $("#display").html("Heater 4");
        break;
      case "clap":
        $("#display").html("Clap");
        break;
      case "openhh":
        $("#display").html("Open HH");
        break;
      case "kicknhat":
        $("#display").html("Kick n'Hat");
        break;
      case "kick":
        $("#display").html("Kick");
        break;
      case "closedhh":
        $("#display").html("Closed HH");
        break;
      default:
        console.log("default case");
    }
  });
  $(document).keydown((e) => {
    switch (e.keyCode) {
      case 81:
        $("#Q")[0].play();
        $("#heater1").addClass("drump-pad-active");
        $("#display").html("Heater 1");
        break;
      case 87:
        $("#W")[0].play();
        $("#display").html("Heater 2");
        break;
      case 69:
        $("#E")[0].play();
        $("#display").html("Heater 3");
        break;
      case 65:
        $("#A")[0].play();
        $("#display").html("Heater 4");
        break;
      case 83:
        $("#S")[0].play();
        $("#display").html("Clap");
        break;
      case 68:
        $("#D")[0].play();
        $("#display").html("Open HH");
        break;
      case 90:
        $("#Z")[0].play();
        $("#display").html("Kick n'Hat");
        break;
      case 88:
        $("#X")[0].play();
        $("#display").html("Kick");
        break;
      case 67:
        $("#C")[0].play();
        $("#display").html("Closed HH");
        break;
      default:
        break;
    }
  });
});
