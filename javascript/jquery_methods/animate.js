<button id="animateBtn">Animate me!</button>

<div id="box" style="width:100px; height:100px; background:#e74c3c; margin-top:20px;"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
  $(document).ready(function(){
    $("#animateBtn").click(function(){
      $("#box").animate({
        left: '250px',      // move right
        opacity: 0.5,       // fade a bit
        height: '150px',    // grow taller
        width: '150px'      // grow wider
      }, 1000); // duration: 1000ms = 1 second
    });
  });
</script>
