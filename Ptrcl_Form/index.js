function total(){
let m1 = document.frm.s1.value;
let m2 = document.frm.s2.value;

let total = m1*1+m2*1;
document.frm.t.value = total;
}

function avg(){
    let m1 = document.frm.s1.value;
    let m2 = document.frm.s2.value;
    
    let avg = (m1*1+m2*1)/2;
    document.frm.a.value = avg;

    if (avg >= 75) {
        document.frm.r.value = "A"

    } else if (avg >= 65) {
        document.frm.r.value = "B"
    }
    else if (avg >= 50) {
        document.frm.r.value = "C"
    } else if (avg >= 40) {
        document.frm.r.value = "D"
    }
    else {
        document.frm.r.value = "D-"
    }
    }
