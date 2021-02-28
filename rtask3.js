function more() {
    var id=1;
    var table = document.getElementById("tg");
        var rowCount = table.getElementsByTagName("tr").length;
  var id = rowCount + 1;

  var row = table.insertRow(1);
  row.id=id;
  var rowId = row.id;
    
    
    for (i = 0; i < 19; i++) { 
        var cell = row.insertCell(i);
        cell.id = i;
        cell.innerHTML = '<input type="text" id="s'+id+''+i+'" style="width: 65%;background-color: transparent;border: 0px;"">';
        }
        id++;
}

function submit(){
    localStorage.clear();
    var i = 18;
    var table = document.getElementById("tg");
    var rowCount = table.getElementsByTagName("tr").length
    for(j=2; j<rowCount+1; j++) {
        var total = 0;

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
            if(a === 2){
                var rtask1 = document.getElementById(id).value;
                console.log(rtask1);
            }
            if(a === 3){
                var rtask2 = document.getElementById(id).value;
                console.log(rtask2);
            }
            if(a === 4){
                var rtask3 = document.getElementById(id).value;
                console.log(rtask3);
            }
            if(a === 4){
                var rtask3 = document.getElementById(id).value;
                console.log(rtask3);
            }
            if(a === 5){
                var su5 = document.getElementById(id).value;
                console.log(su5);
            }
            if(a === 6){
                var add = document.getElementById(id).value;
                console.log(add);
            }
            if(a === 7){
                var v1 = document.getElementById(id).value;
                console.log(v1);
            }
            if(a === 8){
                var rtask4 = document.getElementById(id).value;
                console.log(rtask4);
            }
            if(a === 9){
                var rtask5 = document.getElementById(id).value;
                console.log(rtask5);
            }
            if(a === 10){
                var best = document.getElementById(id).value;
                console.log(best);
            }
            if(a === 11){
                var rtask5n = document.getElementById(id).value;
                console.log(rtask5n);
            }
            if(a === 12){
                var rtask6 = document.getElementById(id).value;
                console.log(rtask6);
            }
            if(a === 13){
                var rtask7 = document.getElementById(id).value;
                console.log(rtask7);
            }
            if(a === 14){
                var rtask8 = document.getElementById(id).value;
                console.log(rtask8);
            }
            if(a === 15){
                var ntask1 = document.getElementById(id).value;
                console.log(ntask1);
            }
            if(a === 16){
                var ntask2 = document.getElementById(id).value;
                console.log(ntask2);
            }
            if(a === 17){
                var ntask3 = document.getElementById(id).value;
                console.log(ntask3);
            }
            if(a === 18){
                var ntask4 = document.getElementById(id).value;
                console.log(ntask4);
            }
        }
        if(rank == "captain" || rank == "lieutenant" || rank == "veteran" || rank == "Captain" || rank == "Lieutenant" || rank == "Veteran") {
            total = 1.5*rtask1*3+1.5*rtask2*5+1.5*1.5*rtask3*5+1.5*su5*5+1.5*add*3+1.5*v1*5+1.5*rtask4*15+1.5*rtask5*5+1.5*best*5+1.5*rtask5n*3+1.5*rtask6*4+1.5*rtask7*7+1.5*rtask8*15+1.5*ntask1*12+1.5*ntask2*10+1.5*ntask3*8+1.5*ntask4*4;
            var rt1 = 0; var rt2 = 0; var rt3 = 0; var sup5 = 0; var addd = 0; var v11 = 0; var rt4 = 0; var rt5 = 0; var besti = 0; var rt5n = 0; var rt6 = 0; var rt7 = 0; var rt8 = 0; var nt1 = 0; var nt2 = 0; var nt3 = 0; var nt4 = 0;
            if(rtask1>0) rt1 = 1.5*rtask1*3; else{ } if(rtask2>0) rt2 = 1.5*rtask2*5; else{ } if(rtask3>0) rt3 = 1.5*1.5*rtask3*5; else{ } if(su5>0) sup5 = 1.5*su5*5; else{ } if(add>0) addd = 1.5*add*3; else{ } if(v1>0) v11 = 1.5*v1*5; else{ } if(rtask4>0) rt4 = 1.5*rtask4*15; else{ } if(rtask5>0) rt5 = 1.5*rtask5*5; else{ } if(best>0) besti = 1.5*best*5; else{ } if(rtask5n>0) rt5n = 1.5*rtask5n*3; else{ } if(rtask6>0) rt6 = 1.5*rtask6*4; else{ } if(rtask7>0) rt7 = 1.5*rtask7*7; else{ } if(rtask8>0) rt8 = 1.5*rtask8*15; else{ } if(ntask1>0) nt1 = 1.5*ntask1*12; else{ } if(ntask2>0) nt2 = 1.5*ntask2*10; else{ } if(ntask3>0) nt3 = 1.5*ntask3*8; else{ } if(ntask4>0) nt4 = 1.5*ntask4*4; else{ }
        } else if(rank == "member" || rank == "Member") {
            total = rtask1*3+rtask2*5+1.5*rtask3*5+su5*5+add*3+v1*5+rtask4*15+rtask5*5+best*5+rtask5n*3+rtask6*4+rtask7*7+rtask8*15+ntask1*12+ntask2*10+ntask3*8+ntask4*4;
            var rt1 = 0; var rt2 = 0; var rt3 = 0; var sup5 = 0; var addd = 0; var v1 = 0; var rt4 = 0; var rt5 = 0; var besti = 0; var rt5n = 0; var rt6 = 0; var rt7 = 0; var rt8 = 0; var nt1 = 0; var nt2 = 0; var nt3 = 0; var nt4 = 0;
            if(rtask1>0) rt1 = rtask1*3; else{ } if(rtask2>0) rt2 = rtask2*5; else{ } if(rtask3>0) rt3 = 1.5*rtask3*5; else{ } if(su5>0) sup5 = su5*5; else{ } if(add>0) addd = add*3; else{ } if(v1>0) v11 = v1*5; else{ } if(rtask4>0) rt4 = rtask4*15; else{ } if(rtask5>0) rt5 = rtask5*5; else{ } if(best>0) besti = best*5; else{ } if(rtask5n>0) rt5n = rtask5n*3; else{ } if(rtask6>0) rt6 = rtask6*4; else{ } if(rtask7>0) rt7 = rtask7*7; else{ } if(rtask8>0) rt8 = rtask8*15; else{ } if(ntask1>0) nt1 = ntask1*12; else{ } if(ntask2>0) nt2 = ntask2*10; else{ } if(ntask3>0) nt3 = ntask3*8; else{ } if(ntask4>0) nt4 = ntask4*4; else{ }
        }
        let data = ''+name+' ('+rank+')'+'\r\r\n'+'Total points - '+total+'\r\n'+'+'+rt1+' for rtask 1, '+rtask1+' times'+'\r\n'+'+'+rt2+' for rtask 2, '+rtask2+' times'+'\r\n'+'+'+rt3+' for rtask 3, '+rtask3+' times'+'\r\n'+'+'+sup5+' for additional 5 supports'+'\r\n'+'+'+addd+' for additional 30 minutes'+'\r\n'+'+'+v11+' for ending support in a 1v1'+'\r\n'+'+'+rt4+' for rtask 4, '+rtask4+' times'+'\r\n'+'+'+rt5+' for rtask 5, '+rtask5+' times'+'\r\n'+'+'+besti+' for being the best on the joint training'+'\r\n'+'+'+rt5n+' for rtask 5 not full duration, '+rtask5n+' times'+'\r\n'+'+'+rt6+' for rtask 6, '+rtask6+' times'+'\r\n'+'+'+rt7+' for rtask 7, '+rtask7+' times'+'\r\n'+'+'+rt8+' for rtask 8, '+rtask8+' times'+'\r\n'+'+'+nt1+' for ntask 1'+'\r\n'+'+'+nt2+' for ntask 2'+'\r\n'+'+'+nt3+' for ntask 3'+'\r\n'+'+'+nt4+' for ntask 4'+'\r\n'+'================================='+'\r\n';
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
            const sFileName = 'Task of the week: rtask3.txt';
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
