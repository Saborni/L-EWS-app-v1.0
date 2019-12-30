function detectMsBrowser() {
        using_ms_browser =
          navigator.appName == "Microsoft Internet Explorer" ||
          (navigator.appName == "Netscape" &&
            navigator.appVersion.indexOf("Edge") > -1) ||
          (navigator.appName == "Netscape" &&
            navigator.appVersion.indexOf("Trident") > -1);

        if (using_ms_browser == true) {
          alert(
            "Please use Chrome or Firefox for the best browsing experience!"
          );
        }
}
function setBrandMarginTop() {
        var bottomContainerHeight = $(".tm-welcome-container").height();
        $(".tm-brand-container-outer").css({
          "margin-top": -bottomContainerHeight + "px"
        });
}
function windowResize(){
    $(window).resize(function() {
        setBrandMarginTop();
    });
}

function toggleTopicMenu(){
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
}

$(function() {
    setBrandMarginTop();
    detectMsBrowser();
    toggleTopicMenu();        
    // Handle window resize event
    windowResize();
});