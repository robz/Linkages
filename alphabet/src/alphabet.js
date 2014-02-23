var alphabet = (function () {
    var data = {
        A: {"P1":{"x":0,"y":0},"P5":{"x":-1.0778157916711084,"y":5.768165836661112},"a1":1.0980000000000005,"a2":2.856,"a3":6.1000000000000005,"a4":1.3079999999999998,"a5":0.8140000000000003,"speed1":1,"speed2":2,"theta2_phase":1.824637013204952,"theta3":3.492194393730414},    
        B: {"P1":{"x":0,"y":0},"P5":{"x":4.1402,"y":-2.3649},"a1":2,"a2":4,"a3":5.198,"a4":1.418,"a5":2.76,"speed1":2,"speed2":1,"theta2_phase":4.4095,"theta3":5.073},
        C: {"P1":{"x":0,"y":0},"P5":{"x":-4.912510670907552,"y":2.4104427255863565},"a1":1.3179999999999996,"a2":3.824,"a3":5.308,"a4":2.65,"a5":2.32,"speed1":2,"speed2":1,"theta2_phase":3.234544347557418,"theta3":4.423318639237631},
        D: {"P1":{"x":0,"y":0},"P5":{"x":-2.6422887735039673,"y":-2.415543050622793},"a1":1.934,"a2":3.8899999999999997,"a3":2.932000000000001,"a4":0,"a5":3.287999999999999,"speed1":2,"speed2":1,"theta2_phase":0,"theta3":2.5157435799779084},
        E: {"P1":{"x":0,"y":0},"P5":{"x":-6.2417169898768625,"y":3.989952252214987},"a1":1.0539999999999992,"a2":6.464000000000002,"a3":9.538,"a4":2.078,"a5":5.048,"speed1":4,"speed2":1,"theta2_phase":2.4881019330644834,"theta3":3.9118673552332117},
        I: {"P1":{"x":0,"y":0},"P5":{"x":-3.445144885114209,"y":-3.4222653560851337},"a1":2.99,"a2":4.087999999999999,"a3":4.494000000000001,"a4":0,"a5":3.0679999999999996,"speed1":2,"speed2":1,"theta2_phase":0,"theta3":1.4375489812658921}, 
        L: {"P1":{"x":0,"y":0},"P5":{"x":4.60147322000203,"y":0.8538295255582481},"a1":1.4719999999999995,"a2":5.320000000000001,"a3":4.911999999999998,"a4":2.4959999999999996,"a5":3.7059999999999995,"speed1":2,"speed2":1,"theta2_phase":2.0042966644116538,"theta3":4.1192124703701385},
        M: {"P1":{"x":0,"y":0},"P5":{"x":8.3712908232126,"y":5.47005392598615},"a1":1.6259999999999992,"a2":5.606000000000002,"a3":10,"a4":2.2319999999999993,"a5":1.5059999999999998,"speed1":4,"speed2":1,"theta2_phase":2.1839957641969905,"theta3":4.506256685292402},
        N: {"P1":{"x":0,"y":0},"P5":{"x":-3.0207882639248145,"y":-4.345123964230958},"a1":1.2739999999999994,"a2":4.792000000000002,"a3":6.8540000000000045,"a4":1.5059999999999987,"a5":2.9799999999999995,"speed1":3,"speed2":1,"theta2_phase":3.096314270799466,"theta3":3.9671593859363945},
        O: {"P1":{"x":0,"y":0},"P5":{"x":0.7638094607488793,"y":-0.01790528459836699},"a1":3.342,"a2":4,"a3":3.108000000000001,"a4":0,"a5":2.4519999999999995,"speed1":2,"speed2":1,"theta2_phase":4.4095,"theta3":5.073},
        P: {"P1":{"x":0,"y":0},"P5":{"x":-0.08618659437840308,"y":-4.55916613545778},"a1":0.966,"a2":7.299999999999997,"a3":8.124,"a4":1.5499999999999994,"a5":2.364,"speed1":2,"speed2":1,"theta2_phase":0.1934826588824985,"theta3":4.160681493397525},
        Q: {"P1":{"x":0,"y":0},"P5":{"x":1.0188,"y":-0.7208},"a1":3.034,"a2":5.694,"a3":5.528,"a4":2.178,"a5":4.19,"speed1":3,"speed2":4,"theta2_phase":1.47906,"theta3":3.55251},
        R: {"P1":{"x":0,"y":0},"P5":{"x":3.793923815510016,"y":-2.1966858800565343},"a1":2.3739999999999997,"a2":4,"a3":5.462000000000001,"a4":1.308,"a5":1.6159999999999997,"speed1":2,"speed2":1,"theta2_phase":1.3684383113250809,"theta3":4.3265575855070635},
        S: {"P1":{"x":0,"y":0},"P5":{"x":3.928307468042183,"y":0.6874186762985419},"a1":0.8119999999999998,"a2":5.759999999999999,"a3":5.176000000000001,"a4":0.9680000000000002,"a5":3.112,"speed1":1,"speed2":3,"theta2_phase":0.34557519189487773,"theta3":2.101097166720855},
        W: {"P1":{"x":0,"y":0},"P5":{"x":-7.60340083092165,"y":-6.4952517891410455},"a1":1.5379999999999996,"a2":6.178000000000002,"a3":10,"a4":2.341999999999999,"a5":2.0999999999999996,"speed1":4,"speed2":1,"theta2_phase":2.2669338102517615,"theta3":4.450964654589222},
        X: {"P1":{"x":0,"y":0},"P5":{"x":0.016018560067503566,"y":-0.0001540197164024651},"a1":3.298,"a2":4.572,"a3":6.122,"a4":6.93,"a5":0,"speed1":5,"speed2":1,"theta2_phase":1.009079560333042,"theta3":2.902831611916968}
    };
    
    Object.keys(data).forEach(function (letter) {
        var d = data[letter];
    
        d.scale = function (s) {
            d.P5.x *= s;
            d.P5.y *= s;
            d.a1 *= s;
            d.a2 *= s;
            d.a3 *= s;
            d.a4 *= s;
            d.a5 *= s;
        
            return d;
        };
        
        d.translate = function (x, y) {
            d.P1.x += x;
            d.P1.y += y;
            d.P5.x += x;
            d.P5.y += y;
            
            return d;
        };
    });
    
    Object.keys(data).forEach(function (letter) {
        var points = new FiveBarCoupler(data[letter]).calcCouplerPath(100),
            minx = Infinity,
            maxx = -Infinity, 
            miny = Infinity, 
            maxy = -Infinity;
            
        points.forEach(function (e) {
            minx = (e[0] < minx) ? e[0] : minx;
            maxx = (e[0] > maxx) ? e[0] : maxx;
            miny = (e[1] < miny) ? e[1] : miny;
            maxy = (e[1] > maxy) ? e[1] : maxy;
        });
        
        var width = maxx - minx,
            height = maxy - miny,
            scale = 1/height;
            
        minx *= scale;
        maxx *= scale
        miny *= scale;
        
        data[letter].scale(scale).translate(-minx, -miny);
        data[letter].width = maxx - minx;
    });

    return data;
}());