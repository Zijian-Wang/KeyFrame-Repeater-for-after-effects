(function(thisObj){

    //createPannel();

    var panelGlobal = thisObj;

    //function createPannel(){
        

        /*
        Code for Import https://scriptui.joonas.me — (Triple click to select): 
        {"activeId":14,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"RotationRepeaterWindow","windowType":"Palette","creationProps":{"su1PanelCoordinates":true,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"Rotation Repeater","preferredSize":[300,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["fill","center"]}},"item-1":{"id":1,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Key 1: ","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-2":{"id":2,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":"key1Val","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-5","justify":"left","preferredSize":[50,0],"alignment":"fill","helpTip":"第一关键帧数值"}},"item-3":{"id":3,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"RotationRepeate","creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Rotation Repeat （重复旋转关键帧）","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":40,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"Group","parentId":3,"style":{"enabled":true,"varName":"key1","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"Group","parentId":3,"style":{"enabled":true,"varName":"key2","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"StaticText","parentId":10,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Key 2: ","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-12":{"id":12,"type":"EditText","parentId":10,"style":{"enabled":true,"varName":"key2Val","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"5","justify":"left","preferredSize":[50,0],"alignment":"fill","helpTip":"中间关键帧数值"}},"item-14":{"id":14,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"applyBttn","text":"Apply | 应用","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-15":{"id":15,"type":"Group","parentId":3,"style":{"enabled":true,"varName":"freq","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-16":{"id":16,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Frequency: ","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":"频率（按秒数计算）"}},"item-17":{"id":17,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"freq","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0.1","justify":"left","preferredSize":[50,0],"alignment":"fill","helpTip":null}},"item-18":{"id":18,"type":"Checkbox","parentId":3,"style":{"enabled":true,"varName":"holdFrame","text":"Hold Keyframe","preferredSize":[0,0],"alignment":"center","helpTip":null}}},"order":[0,3,5,1,2,10,11,12,15,16,17,18,14],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":false,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"var"}}
        */ 

        // ROTATIONREPEATERWINDOW
        // ======================
        var RotationRepeaterWindow = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {su1PanelCoordinates: true, resizeable: true}); 
            if ( !(panelGlobal instanceof Panel) ) RotationRepeaterWindow.text = "Rotation Repeater";  
            RotationRepeaterWindow.orientation = "column"; 
            RotationRepeaterWindow.alignChildren = ["Left","center"]; 
            RotationRepeaterWindow.spacing = 10; 
            RotationRepeaterWindow.margins = 16; 

        // KEY1
        // ====
        var key1 = RotationRepeaterWindow.add("group", undefined, {name: "key1"}); 
            key1.orientation = "row"; 
            key1.alignChildren = ["left","center"]; 
            key1.spacing = 10; 
            key1.margins = 0; 

        var statictext1 = key1.add("statictext", undefined, undefined, {name: "statictext1"}); 
            statictext1.text = "首尾帧数值: "; 
            statictext1.helpTip = "第一关键帧数值"; 
            statictext1.alignment = ["left","fill"]; 

        var key1Val = key1.add('edittext {properties: {name: "key1Val"}}'); 
            key1Val.helpTip = "第一关键帧数值"; 
            key1Val.text = "-5"; 
            key1Val.preferredSize.width = 50; 
            key1Val.alignment = ["left","fill"]; 

        // KEY2
        // ====
        var key2 = RotationRepeaterWindow.add("group", undefined, {name: "key2"}); 
            key2.orientation = "row"; 
            key2.alignChildren = ["left","center"]; 
            key2.spacing = 10; 
            key2.margins = 0; 

        var statictext2 = key2.add("statictext", undefined, undefined, {name: "statictext2"}); 
            statictext2.text = "中间帧数值: "; 
            statictext2.helpTip = "中间关键帧数值"; 
            statictext2.alignment = ["left","fill"]; 

        var key2Val = key2.add('edittext {properties: {name: "key2Val"}}'); 
            key2Val.helpTip = "中间关键帧数值"; 
            key2Val.text = "5"; 
            key2Val.preferredSize.width = 50; 
            key2Val.alignment = ["left","fill"]; 

        // FREQ
        // ====
        var freq = RotationRepeaterWindow.add("group", undefined, {name: "freq"}); 
            freq.orientation = "row"; 
            freq.alignChildren = ["center","center"]; 
            freq.spacing = 10; 
            freq.margins = 0; 

        var statictext3 = freq.add("statictext", undefined, undefined, {name: "statictext3"}); 
            statictext3.helpTip = "频率（按帧数计算）"; 
            statictext3.text = "频率（帧）: "; 
            statictext3.alignment = ["center","fill"]; 

        var freq1 = freq.add('edittext {properties: {name: "freq1"}}'); 
            freq1.text = "1"; 
            freq1.preferredSize.width = 50; 
            freq1.alignment = ["center","fill"]; 

        // ROTATIONREPEATE
        // ===============
        var holdFrame = RotationRepeaterWindow.add("checkbox", undefined, undefined, {name: "holdFrame"}); 
            holdFrame.text = "Hold Keyframe"; 
            holdFrame.alignment = ["left","center"]; 

        // ROTATIONREPEATERWINDOW
        // ======================
        var applyBttn = RotationRepeaterWindow.add("button", undefined, undefined, {name: "applyBttn"}); 
            applyBttn.text = "Apply | 应用"; 
            applyBttn.alignment = ["center","center"]; 

        RotationRepeaterWindow.layout.layout(true);
        RotationRepeaterWindow.layout.resize();
        RotationRepeaterWindow.onResizing = RotationRepeaterWindow.onResize = function () { this.layout.resize(); }

        // ITEM REFERENCE LIST ( Info: http://jongware.mit.edu/Sui/index_1.html ) 
        RotationRepeaterWindow.items = { 
        RotationRepeaterWindow: RotationRepeaterWindow, // palette
        key1: key1, // group
        key1Val: key1Val, // edittext
        key2: key2, // group
        key2Val: key2Val, // edittext
        freq: freq, // group
        freq1: freq1, // edittext
        holdFrame: holdFrame, // checkbox
        applyBttn: applyBttn // button
        };
        RotationRepeaterWindow.itemsArray = [RotationRepeaterWindow, RotationRepeaterWindow, key1, key1Val, key2, key2Val, freq, freq1, holdFrame, applyBttn];

        var val1 = Number(key1Val.text);
        var val2 = Number(key2Val.text);
        var frequency = Number(freq1.text);

        key1Val.onChanging = function(){val1 = Number(key1Val.text)};
        key2Val.onChanging = function(){val2 = Number(key2Val.text)};
        freq1.onChanging = function(){frequency = Number(freq1.text)};

        //click button triger event
        applyBttn.onClick = function(){
            rotationRepe(val1, val2, frequency, holdFrame.value);
        }

        if ( RotationRepeaterWindow instanceof Window ) RotationRepeaterWindow.show();
        //return RotationRepeaterWindow;
    //}
    
    //Rotation Repeater function
    function rotationRepe(value1, value2, frequency, keyStatusIsHold){
        app.beginUndoGroup("Rotation Repeater");
        
        var selected = app.project.activeItem.selectedProperties; //获得所有选择的属性
        
        var time = app.project.activeItem.time; //获取当前时间
        var fps = app.project.activeItem.frameRate; //获取FPS
        var timeFrequency = frequency / fps; //获得间隔秒数

        //alert("length = "+ selected.length + "time ="+ time);
        //alert("val1: "+ key1Val + "\nVal2: "+ key2Val + "\nFreq: "+ freq1);
        //alert(localize('%1\n%2\n%3', value1, value2, frequency));
        //alert(keyStatusIsHold);

        if(selected.length == 0){
            alert("没有选择属性！");
            return
        }

        if(frequency < 1){
            alert("间隔帧数最少为 1 ");
            return
        }

        //支持多选properties
        for(var i=0; i < selected.length; i++){

            //alert("i = " + i + "\nlength = " + selected.length + "\nTime: " + time);

            var key1 = selected[i].addKey(time);
            selected[i].setValueAtKey(key1, value1);

            var key2 = selected[i].addKey(time+timeFrequency);
            selected[i].setValueAtKey(key2, value2);

            var key3 = selected[i].addKey(time+timeFrequency*2);
            selected[i].setValueAtKey(key3, value1);

            if(keyStatusIsHold == true){
                selected[i].setInterpolationTypeAtKey(key1, KeyframeInterpolationType.HOLD);
                selected[i].setInterpolationTypeAtKey(key2, KeyframeInterpolationType.HOLD);
                selected[i].setInterpolationTypeAtKey(key3, KeyframeInterpolationType.HOLD);
            }

            selected[i].expression = 'loopOut(type = "cycle", numKeyframes = 0)';
        }

        app.endUndoGroup();
    }

})(this);