let k, m, z, y, w, h;

function varinit() {
  varchange();
  $("#stiffnessSpinner").on("input", function() {
    validatePositiveInput("#stiffnessSpinner");
  });

  $("#omegaSpinner").on("input", function() {
    validatePositiveInput("#omegaSpinner");
  });

  $("#massSpinner").on("input", function() {
    validatePositiveInput("#massSpinner");
  });

  $("#dampingSpinner").on("input", function() {
    validatePositiveInput("#dampingSpinner");
  });

  $("#magnitudeSpinner").on("input", function() {
    validatePositiveInput("#magnitudeSpinner");
  });

  $("#frequencySpinner").on("input", function() {
    validatePositiveInput("#frequencySpinner");
  });
  $("#k2Spinner").on("input", function() {
    validatePositiveInput("#k2Spinner");
  });







  $("#stiffnessSlider").slider("value", 150);
  $("#stiffnessSpinner").spinner("value", 150);

  $("#massSlider").slider("value", 2.8);
  $("#massSpinner").spinner("value", 2.8);

  $("#dampingSlider").slider("value", 200);
  $("#dampingSpinner").spinner("value", 200);

  $("#magnitudeSlider").slider("value", 2000);
  $("#magnitudeSpinner").spinner("value", 2000);

  $("#frequencySlider").slider("value", 200);
  $("#frequencySpinner").spinner("value", 200);

  $("#k2Slider").slider("value", 2000);
  $("#k2Spinner").spinner("value", 2000);
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Variable stiffness slider and number input types
  $("#stiffnessSlider").slider({ max: 200, min: 100, step: 1 }); // slider initialisation : jQuery widget
  $("#stiffnessSpinner").spinner({ max: 200, min: 100, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#stiffnessSlider").on("slide", function (e, ui) {
    $("#stiffnessSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#stiffnessSpinner").on("spin", function (e, ui) {
    $("#stiffnessSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#stiffnessSpinner").on("change", function () {
    varchange();
  });

  //Variable mass slider and number input types
  $("#massSlider").slider({ max: 5, min: 2.2, step: 0.1 }); // slider initialisation : jQuery widget
  $("#massSpinner").spinner({ max: 5, min: 2.2, step: 0.1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#massSlider").on("slide", function (e, ui) {
    $("#massSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#massSpinner").on("spin", function (e, ui) {
    $("#massSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#massSpinner").on("change", function () {
    varchange();
  });

  //Variable damping slider and number input types
  $("#dampingSlider").slider({ max: 200, min: 100, step: 10 }); // slider initialisation : jQuery widget
  $("#dampingSpinner").spinner({ max: 200, min: 100, step: 10 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#dampingSlider").on("slide", function (e, ui) {
    $("#dampingSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#dampingSpinner").on("spin", function (e, ui) {
    $("#dampingSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#dampingSpinner").on("change", function () {
    varchange();
  });

  //Variable magnitude slider and number input types
  $("#magnitudeSlider").slider({ max: 2000, min: 1000, step: 100 }); // slider initialisation : jQuery widget
  $("#magnitudeSpinner").spinner({ max: 2000, min: 1000, step: 100 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#magnitudeSlider").on("slide", function (e, ui) {
    $("#magnitudeSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#magnitudeSpinner").on("spin", function (e, ui) {
    $("#magnitudeSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#magnitudeSpinner").on("change", function () {
    varchange();
  });

  //Variable frequency slider and number input types
  $("#frequencySlider").slider({ max: 10000, min: 200, step: 10 }); // slider initialisation : jQuery widget
  $("#frequencySpinner").spinner({ max: 10000, min: 200, step: 10 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#frequencySlider").on("slide", function (e, ui) {
    $("#frequencySpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#frequencySpinner").on("spin touchstart", function (e, ui) {
    $("#frequencySlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#frequencySpinner").on("change", function () {
    varchange();
  });
 
  // $("#frequencySpinner").on("touchstart", function (e) {
  //   // Your touch event logic here
  //   varchange();
  // });


  $("#k2Slider").slider({ max: 12000, min: 2000, step: 100 }); // slider initialisation : jQuery widget
  $("#k2Spinner").spinner({ max: 12000, min: 2000, step: 100 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (e, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin touchstart", function (e, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#k2Spinner").on("change", function () {
    varchange();
  });
  varupdate();
}
function validatePositiveInput(inputId) {
  const value = $(inputId).spinner("value");
  if (value <= 0 || isNaN(value)) {
    // If value is zero, negative, or NaN, set the value to a default value
    $(inputId).spinner("value", 1); // You can change 1 to any default value you prefer
  }
}
function varupdate() {
  $("#stiffnessSlider").slider(
    "value",
    $("#stiffnessSpinner").spinner("value")
  );
  $("#massSlider").slider("value", $("#massSpinner").spinner("value"));
  $("#dampingSlider").slider("value", $("#dampingSpinner").spinner("value"));
  $("#magnitudeSlider").slider(
    "value",
    $("#magnitudeSpinner").spinner("value")
  );
  $("#frequencySlider").slider(
    "value",
    $("#frequencySpinner").spinner("value")
  );
  $("#k2Slider").slider(
    "value",
    $("#k2Spinner").spinner("value")
  );
  k = $("#stiffnessSpinner").spinner("value");
  m = $("#massSpinner").spinner("value");
  z = $("#dampingSpinner").spinner("value");
  y = $("#magnitudeSpinner").spinner("value");
  w = $("#frequencySpinner").spinner("value");
  h = $("#k2Spinner").spinner("value");
  // width = document.querySelector("#canvas-container").width;
  // height = document.querySelector("#canvas-container").height;
  // document.querySelector("#mass").innerHTML =  .toFixed(4) + " rad/s"; //Displaying values
  // document.querySelector("#k").innerHTML = η.toFixed(4);
  // document.querySelector("#c").innerHTML = z.toFixed(4);
}
function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}