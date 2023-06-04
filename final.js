$(document).ready(() => {
  const about_val = 1282;
  const exp_val = 2499;
  const proj_val = 4581;
  const cont_val = 6395;
  $(window).on("scroll", function () {
    var curr = document.documentElement.scrollTop || document.body.scrollTop;
    if (curr >= cont_val) {
      document.getElementById("4").classList.add("current");
      document.getElementById("3").classList.remove("current");
      document.getElementById("2").classList.remove("current");
      document.getElementById("1").classList.remove("current");
    } else if (curr >= proj_val) {
      document.getElementById("4").classList.remove("current");
      document.getElementById("3").classList.add("current");
      document.getElementById("2").classList.remove("current");
      document.getElementById("1").classList.remove("current");
    } else if (curr >= exp_val) {
      document.getElementById("4").classList.remove("current");
      document.getElementById("3").classList.remove("current");
      document.getElementById("2").classList.add("current");
      document.getElementById("1").classList.remove("current");
    } else if (curr >= about_val) {
      document.getElementById("4").classList.remove("current");
      document.getElementById("3").classList.remove("current");
      document.getElementById("2").classList.remove("current");
      document.getElementById("1").classList.add("current");
    } else {
      document.getElementById("4").classList.remove("current");
      document.getElementById("3").classList.remove("current");
      document.getElementById("2").classList.remove("current");
      document.getElementById("1").classList.remove("current");
    }
  });
});
