(function(thisObj){

    var val1, val2, freq;

    rotationRepeaterPanel(thisObj);

    //biuld window
    function rotationRepeaterPanel(thisObj) {
        var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Rotation Repeater", undefined);
        win.spacing = 5;
    
        var rotationval1 = win.add("group", undefined, "GroupTwo");
        rotationval1.orientation = "column";
        val1 = rotationval1.add("slider", undefined, "0");
    
        var rotationval2 = win.add("group", undefined, "GroupOne");
        rotationval2.orientation = "column";
        val2 = rotationval2.add("slider", undefined, "0");

        var rotationFrequency = win.add("group", undefined, "GroupOne");
        rotationFrequency.orientation = "column";
        freq = rotationFrequency.add("slider", undefined, "1");

        var applyBtn = win.add("button", undefined, "Apply");

    
        applyBtn.onClick = function(){
            rotationRepe();
        };
    
        win.onResizing = win.onResize = function() {
            this.layout.resize();
        };
    
        win instanceof Window
            ? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());
    }

    //Rotation Repeater function
    function rotationRepe(){
        app.beginUndoGroup("Rotation Repeater");
        
        alert("Yah");

        app.endUndoGroup();
    }

})(this);