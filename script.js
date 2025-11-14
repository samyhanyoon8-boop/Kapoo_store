// رقم الواتساب الأساسي
const whatsappNumber = "01284070117";

// شراء من ببجي
function buyPUBG(product) {
    let id = document.getElementById("pubg-id").value;
    let name = document.getElementById("pubg-name").value;

    if (id.trim() === "" || name.trim() === "") {
        alert("من فضلك اكتب الاي دي واسم الحساب!");
        return;
    }

    let message =
        `طلب جديد من متجر كابو:\n\n` +
        `اللعبة: ببجي\n` +
        `الاي دي: ${id}\n` +
        `اسم الحساب: ${name}\n` +
        `المنتج: ${product}\n\n` +
        `طريقة الدفع: فودافون كاش\n` +
        `01032675967`;

    openWhatsApp(message);
}

// شراء من فري فاير
function buyFF(product) {
    let id = document.getElementById("ff-id").value;
    let name = document.getElementById("ff-name").value;

    if (id.trim() === "" || name.trim() === "") {
        alert("من فضلك اكتب الاي دي واسم الحساب!");
        return;
    }

    let message =
        `طلب جديد من متجر كابو:\n\n` +
        `اللعبة: فري فاير\n` +
        `الاي دي: ${id}\n` +
        `اسم الحساب: ${name}\n` +
        `المنتج: ${product}\n\n` +
        `طريقة الدفع: فودافون كاش\n` +
        `01032675967`;

    openWhatsApp(message);
}

// شراء من قسم تعليم المجال
function buyCourse(product) {
    let message =
        `طلب شراء من قسم تعليم المجال:\n\n` +
        `المنتج: ${product}\n`;

    openWhatsApp(message);
}

// فتح الواتساب بالرسالة
function openWhatsApp(message) {
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}