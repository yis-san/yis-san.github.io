function more() {
    var id=1;
    var table = document.getElementById("tg");
        var rowCount = table.getElementsByTagName("tr").length;
  var id = rowCount + 1;

  var row = table.insertRow(1);
  row.id=id;
  var rowId = row.id;
    
    
    for (i = 0; i < 20; i++) { 
        var cell = row.insertCell(i);
        cell.id = i;
        cell.innerHTML = '<input type="text" id="s'+id+''+i+'" style="width: 65%;background-color: transparent;border: 0px;"">';
        }
        id++;
}

function submit(){
    localStorage.clear();
    var i = 19;
    var table = document.getElementById("tg");
    var rowCount = table.getElementsByTagName("tr").length;
    for(j=2; j<rowCount+1; j++) {
        var total = 0;
        var totalrp = 0;
        for(a=0; a<i+1; a++){
            var id = 's'+j+a;
            if(a === 0){
                var name = document.getElementById(id).value;
                console.log(name);
            }
            if(a === 1) {
                var rank = document.getElementById(id).value;
                console.log(rank);
            }
            if(a === 2) {
                var multiplier = document.getElementById(id).value;
                console.log(multiplier);
            }
            if(a === 3){
                var rtask1 = document.getElementById(id).value;
                console.log(rtask1);
            }
            if(a === 4){
                var rtask2 = document.getElementById(id).value;
                console.log(rtask2);
            }
            if(a === 5){
                var rtask3 = document.getElementById(id).value;
                console.log(rtask3);
            }
            if(a === 6){
                var su5 = document.getElementById(id).value;
                console.log(su5);
            }
            if(a === 7){
                var add = document.getElementById(id).value;
                console.log(add);
            }
            if(a === 8){
                var v1 = document.getElementById(id).value;
                console.log(v1);
            }
            if(a === 9){
                var rtask4 = document.getElementById(id).value;
                console.log(rtask4);
            }
            if(a === 10){
                var rtask5 = document.getElementById(id).value;
                console.log(rtask5);
            }
            if(a === 11){
                var best = document.getElementById(id).value;
                console.log(best);
            }
            if(a === 12){
                var rtask5n = document.getElementById(id).value;
                console.log(rtask5n);
            }
            if(a === 13){
                var rtask6 = document.getElementById(id).value;
                console.log(rtask6);
            }
            if(a === 14){
                var rtask7 = document.getElementById(id).value;
                console.log(rtask7);
            }
            if(a === 15){
                var rtask8 = document.getElementById(id).value;
                console.log(rtask8);
            }
            if(a === 16){
                var ntask1 = document.getElementById(id).value;
                console.log(ntask1);
            }
            if(a === 17){
                var ntask2 = document.getElementById(id).value;
                console.log(ntask2);
            }
            if(a === 18){
                var ntask3 = document.getElementById(id).value;
                console.log(ntask3);
            }
            if(a === 19){
                var ntask4 = document.getElementById(id).value;
                console.log(ntask4);
            }
        }
        if(rank == "captain" || rank == "lieutenant" || rank == "veteran") {
            total = multiplier*rtask1*3+multiplier*rtask2*5+multiplier*rtask3*15+multiplier*su5*5+multiplier*add*6+multiplier*v1*5+multiplier*rtask4*15+multiplier*rtask5*5+multiplier*best*5+multiplier*rtask5n*3+multiplier*rtask6*4+multiplier*rtask7*7+multiplier*rtask8*15+multiplier*ntask1*12+multiplier*ntask2*10+multiplier*ntask3*8+multiplier*ntask4*4;
            var hour2 = 0;
            hour2 = Math.floor(add/2);
            totalrp = rtask1*5+rtask2*3+rtask3*5+hour2*3+rtask4*5+rtask5*10+rtask6*3+rtask7*7+rtask8*8+ntask1*10+ntask2*4+ntask3*6+ntask4*2;
            var rt1 = 0; var rt2 = 0; var rt3 = 0; var sup5 = 0; var addd = 0; var v11 = 0; var rt4 = 0; var rt5 = 0; var besti = 0; var rt5n = 0; var rt6 = 0; var rt7 = 0; var rt8 = 0; var nt1 = 0; var nt2 = 0; var nt3 = 0; var nt4 = 0; var rprt1 = 0; var rprt2 = 0; var rprt3 = 0; var rp1h = 0; var rprt4 = 0; var rprt5 = 0; var rprt6 = 0; var rprt7 = 0; var rprt8 = 0; var rpnt1 = 0; var rpnt2 = 0; var rpnt3 = 0; var rpnt4 = 0;
            if(rtask1>0) rt1 = multiplier*rtask1*3; rprt1 = rtask1*5; if(rtask2>0) rt2 = multiplier*rtask2*5; rprt2 = rtask2*3; if(rtask3>0) rt3 = multiplier*rtask3*15; rprt3 = rtask3*5; if(su5>0) sup5 = multiplier*su5*5; if(add>0) addd = multiplier*add*6; var hour1 = 0; hour1=Math.floor(add/2); rp1h = hour1*3; if(v1>0) v11 = multiplier*v1*5; else{ } if(rtask4>0) rt4 = multiplier*rtask4*15; rprt4 = rtask4*5; if(rtask5>0) rt5 = multiplier*rtask5*5; rprt5 = rtask5*10; if(best>0) besti = multiplier*best*5; if(rtask5n>0) rt5n = multiplier*rtask5n*3; if(rtask6>0) rt6 = multiplier*rtask6*4; rprt6 = rtask6*3; if(rtask7>0) rt7 = multiplier*rtask7*7; rprt7 = rtask7*7; if(rtask8>0) rt8 = multiplier*rtask8*15; rprt8 = rtask8*8; if(ntask1>0) nt1 = multiplier*ntask1*12; rpnt1 = ntask1*10; if(ntask2>0) nt2 = multiplier*ntask2*10; rpnt2 = ntask2*4; if(ntask3>0) nt3 = multiplier*ntask3*8; rpnt3 = ntask3*6; if(ntask4>0) nt4 = multiplier*ntask4*4; rpnt4 = ntask4*2;
        } else if(rank = "member") {
            total = multiplier*rtask1*3+multiplier*rtask2*5+multiplier*rtask3*15+multiplier*su5*5+multiplier*add*6+multiplier*v1*5+multiplier*rtask4*15+multiplier*rtask5*5+multiplier*best*5+multiplier*rtask5n*3+multiplier*rtask6*4+multiplier*rtask7*7+multiplier*rtask8*15+multiplier*ntask1*12+multiplier*ntask2*10+multiplier*ntask3*8+multiplier*ntask4*4;
            var hour2 = 0;
            hour2 = Math.floor(add/2);
            totalrp = rtask1*5+rtask2*3+rtask3*5+hour2*3+rtask4*5+rtask5*10+rtask6*3+rtask7*7+rtask8*8+ntask1*10+ntask2*4+ntask3*6+ntask4*2;
            var rt1 = 0; var rt2 = 0; var rt3 = 0; var sup5 = 0; var addd = 0; var v11 = 0; var rt4 = 0; var rt5 = 0; var besti = 0; var rt5n = 0; var rt6 = 0; var rt7 = 0; var rt8 = 0; var nt1 = 0; var nt2 = 0; var nt3 = 0; var nt4 = 0; var rprt1 = 0; var rprt2 = 0; var rprt3 = 0; var rp1h = 0; var rprt4 = 0; var rprt5 = 0; var rprt6 = 0; var rprt7 = 0; var rprt8 = 0; var rpnt1 = 0; var rpnt2 = 0; var rpnt3 = 0; var rpnt4 = 0;
            if(rtask1>0) rt1 = multiplier*rtask1*3; rprt1 = rtask1*5; if(rtask2>0) rt2 = multiplier*rtask2*5; rprt2 = rtask2*3; if(rtask3>0) rt3 = multiplier*rtask3*15; rprt3 = rtask3*5; if(su5>0) sup5 = multiplier*su5*5; if(add>0) addd = multiplier*add*6; var hour1 = 0; hour1=Math.floor(add/2); rp1h = hour1*3;  if(v1>0) v11 = multiplier*v1*5; if(rtask4>0) rt4 = multiplier*rtask4*15; rprt4 = rtask4*5; if(rtask5>0) rt5 = multiplier*rtask5*5; rprt5 = rtask5*10; if(best>0) besti = multiplier*best*5; if(rtask5n>0) rt5n = multiplier*rtask5n*3; if(rtask6>0) rt6 = multiplier*rtask6*4; rprt6 = rtask6*3; if(rtask7>0) rt7 = multiplier*rtask7*7; rprt7 = rtask7*7; if(rtask8>0) rt8 = multiplier*rtask8*15; rprt8 = rtask8*8; if(ntask1>0) nt1 = multiplier*ntask1*12; rpnt1 = ntask1*10; if(ntask2>0) nt2 = multiplier*ntask2*10; rpnt2 = ntask2*4; if(ntask3>0) nt3 = multiplier*ntask3*8; rpnt3 = ntask3*6; if(ntask4>0) nt4 = multiplier*ntask4*4; rpnt4 = ntask4*2;
        }
        let data = ''+name+' ('+rank+')'+'\r\r\n'+'Total points - '+total+'\r\n'+'Total rp - '+totalrp+'\r\n\r\n'+'+'+rt1+' points '+'+'+rprt1+' rp '+'for '+rtask1+'x rtask 1'+'\r\n'+'+'+rt2+' points '+'+'+rprt2+' rp'+' for '+rtask2+'x rtask 2'+'\r\n'+'+'+rt3+' points '+'+'+rprt3+' rp'+' for '+rtask3+'x rtask 3'+'\r\n'+'+'+sup5+' for additional 5 supports'+'\r\n'+'+'+addd+' for additional 30 minutes'+'\r\n'+'+'+rp1h+' rp'+' for 1h in the support'+'\r\n'+'+'+v11+' for ending support in a 1v1'+'\r\n'+'+'+rt4+' points '+'+'+rprt4+' rp'+' for '+rtask4+'x rtask 4'+'\r\n'+'+'+rt5+' points '+'+'+rprt5+' rp for '+rtask5+'x rtask 5'+'\r\n'+'+'+besti+' for being the best on the joint training'+'\r\n'+'+'+rt5n+' for '+rtask5n+'x rtask 5 not full duration'+'\r\n'+'+'+rt6+' points '+'+'+rprt6+' rp'+' for '+rtask6+'x rtask 6'+'\r\n'+'+'+rt7+' points '+'+'+rprt7+' rp'+' for '+rtask7+'x rtask 7'+'\r\n'+'+'+rt8+' points '+'+'+rprt8+' rp'+' for '+rtask8+'x rtask 8'+'\r\n'+'+'+nt1+' points '+'+'+rpnt1+' rp'+' for ntask 1'+'\r\n'+'+'+nt2+' points '+'+'+rpnt2+' rp'+' for ntask 2'+'\r\n'+'+'+nt3+' points '+'+'+rpnt3+' rp'+' for ntask 3'+'\r\n'+'+'+nt4+' points '+'+'+rpnt4+' rp'+' for ntask 4'+'\r\n'+'================================='+'\r\n';
        localStorage.setItem(j, data);
    }
            
            for(b=1; b<rowCount+1; b++){
                if(b=1){
                    var c1=localStorage.getItem(b);
                    if(c1 === null) {
                        c1 = '';
                    }
                }
                if(b=2){
                    var c2=localStorage.getItem(b);
                    if(c2 === null) {
                        c2 = '';
                    }
                }
                if(b=3){
                    var c3=localStorage.getItem(b);
                    if(c3 === null) {
                        c3 = '';
                    }
                }
                if(b=4){
                    var c4=localStorage.getItem(b);
                    if(c4 === null) {
                        c4 = '';
                    }
                }
                if(b=5){
                    var c5=localStorage.getItem(b);
                    if(c5 === null) {
                        c5 = '';
                    }
                }
                if(b=6){
                    var c6=localStorage.getItem(b);
                    if(c6 === null) {
                        c6 = '';
                    }
                }
                if(b=7){
                    var c7=localStorage.getItem(b);
                    if(c7 === null) {
                        c7 = '';
                    }
                }
                if(b=8){
                    var c8=localStorage.getItem(b);
                    if(c8 === null) {
                        c8 = '';
                    }
                }
                if(b=9){
                    var c9=localStorage.getItem(b);
                    if(c9 === null) {
                        c9 = '';
                    }
                }
                if(b=10){
                    var c10=localStorage.getItem(b);
                    if(c10 === null) {
                        c10 = '';
                    }
                }
                if(b=11){
                    var c11=localStorage.getItem(b);
                    if(c11 === null) {
                        c11 = '';
                    }
                }
                if(b=12){
                    var c12=localStorage.getItem(b);
                    if(c12 === null) {
                        c12 = '';
                    }
                }
                if(b=13){
                    var c13=localStorage.getItem(b);
                    if(c13 === null) {
                        c13 = '';
                    }
                }
                if(b=14){
                    var c14=localStorage.getItem(b);
                    if(c14 === null) {
                        c14 = '';
                    }
                }
                if(b=15){
                    var c15=localStorage.getItem(b);
                    if(c15 === null) {
                        c15 = '';
                    }
                }
                if(b=16){
                    var c16=localStorage.getItem(b);
                    if(c16 === null) {
                        c16 = '';
                    }
                }
                if(b=17){
                    var c17=localStorage.getItem(b);
                    if(c17 === null) {
                        c17 = '';
                    }
                }
                if(b=18){
                    var c18=localStorage.getItem(b);
                    if(c18 === null) {
                        c18 = '';
                    }
                }
                if(b=19){
                    var c19=localStorage.getItem(b);
                    if(c19 === null) {
                        c19 = '';
                    }
                }
                if(b=20){
                    var c20=localStorage.getItem(b);
                    if(c20 === null) {
                        c20 = '';
                    }
                }
                if(b=21){
                    var c21=localStorage.getItem(b);
                    if(c21 === null) {
                        c21 = '';
                    }
                }
                if(b=22){
                    var c22=localStorage.getItem(b);
                    if(c22 === null) {
                        c22 = '';
                    }
                }
                if(b=23){
                    var c23=localStorage.getItem(b);
                    if(c23 === null) {
                        c23 = '';
                    }
                }
                if(b=24){
                    var c24=localStorage.getItem(b);
                    if(c24 === null) {
                        c24 = '';
                    }
                }
                if(b=25){
                    var c25=localStorage.getItem(b);
                    if(c25 === null) {
                        c25 = '';
                    }
                }
                if(b=26){
                    var c26=localStorage.getItem(b);
                    if(c26 === null) {
                        c26 = '';
                    }
                }
                if(b=27){
                    var c27=localStorage.getItem(b);
                    if(c27 === null) {
                        c27 = '';
                    }
                }
                if(b=28){
                    var c28=localStorage.getItem(b);
                    if(c28 === null) {
                        c28 = '';
                    }
                }
                if(b=29){
                    var c29=localStorage.getItem(b);
                    if(c29 === null) {
                        c29 = '';
                    }
                }
                if(b=30){
                    var c30=localStorage.getItem(b);
                    if(c30 === null) {
                        c30 = '';
                    }
                }
                if(b=31){
                    var c31=localStorage.getItem(b);
                    if(c31 === null) {
                        c31 = '';
                    }
                }
                if(b=32){
                    var c32=localStorage.getItem(b);
                    if(c32 === null) {
                        c32 = '';
                    }
                }
                if(b=33){
                    var c33=localStorage.getItem(b);
                    if(c33 === null) {
                        c33 = '';
                    }
                }
                if(b=34){
                    var c34=localStorage.getItem(b);
                    if(c34 === null) {
                        c34 = '';
                    }
                }
                if(b=35){
                    var c35=localStorage.getItem(b);
                    if(c35 === null) {
                        c35 = '';
                    }
                }
                if(b=36){
                    var c36=localStorage.getItem(b);
                    if(c36 === null) {
                        c36 = '';
                    }
                }
                if(b=37){
                    var c37=localStorage.getItem(b);
                    if(c37 === null) {
                        c37 = '';
                    }
                }
                if(b=38){
                    var c38=localStorage.getItem(b);
                    if(c38 === null) {
                        c38 = '';
                    }
                }
                if(b=39){
                    var c39=localStorage.getItem(b);
                    if(c39 === null) {
                        c39 = '';
                    }
                }
                if(b=40){
                    var c40=localStorage.getItem(b);
                    if(c40 === null) {
                        c40 = '';
                    }
                }
                if(b=41){
                    var c41=localStorage.getItem(b);
                    if(c41 === null) {
                        c41 = '';
                    }
                }
                if(b=42){
                    var c42=localStorage.getItem(b);
                    if(c42 === null) {
                        c42 = '';
                    }
                }
                if(b=43){
                    var c43=localStorage.getItem(b);
                    if(c43 === null) {
                        c43 = '';
                    }
                }
                if(b=44){
                    var c44=localStorage.getItem(b);
                    if(c44 === null) {
                        c44 = '';
                    }
                }
                if(b=45){
                    var c45=localStorage.getItem(b);
                    if(c45 === null) {
                        c45 = '';
                    }
                }
            }
            result = c45.concat(c44,c43,c42,c41,c40,c39,c38,c37,c36,c35,c34,c33,c32,c31,c30,c29,c28,c27,c26,c25,c24,c23,c22,c21,c20,c19,c18,c17,c16,c15,c14,c13,c12,c11,c10,c9,c8,c7,c6,c5,c4,c3,c2,c1);
            console.log(result);
            const textToBLOB = new Blob([result], { type: 'text/plain' });
            const sFileName = 'comment.txt';
            let newLink = document.createElement("a");
            newLink.download = sFileName;
            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }
    
            newLink.click();
}
