const whatsappNumber = "01284070117";

// ببجي
function buyPUBG(product) {
    let id = document.getElementById("pubg-id").value;
    let name = document.getElementById("pubg-name").value;

    if(!id || !name){
        alert("من فضلك اكتب الاي دي واسم الحساب!");
        return;
    }

    let message = `طلب جديد من متجر كابو:
اللعبة: ببجي
الاي دي: ${id}
اسم الحساب: ${name}
المنتج: ${product}
الدفع: فودافون كاش 01032675967`;

    openWhatsApp(message);
}

// فري فاير
function buyFF(product) {
    let id = document.getElementById("ff-id").value;
    let name = document.getElementById("ff-name").value;

    if(!id || !name){
        alert("من فضلك اكتب الاي دي واسم الحساب!");
        return;
    }

    let message = `طلب جديد من متجر كابو:
اللعبة: فري فاير
الاي دي: ${id}
اسم الحساب: ${name}
المنتج: ${product}
الدفع: فودافون كاش 01032675967`;

    openWhatsApp(message);
}

// تعليم المجال
function buyCourse(product){
    let message = `طلب جديد من متجر كابو:
الخدمة: ${product}`;

    openWhatsApp(message);
}

// فتح واتساب
function openWhatsApp(message){
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}
