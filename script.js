function buy(section, product, price = null) {
    let name, id, message;

    if(section === 'ببجي'){
        name = document.getElementById('pubgName').value;
        id = document.getElementById('pubgID').value;
        if(!name || !id){
            alert("من فضلك اكتب اسم الحساب و الاي دي");
            return;
        }
        message = `مرحبا! لقد تم شراء المنتج: ${product} \nالسعر: ${price} جنيه \nاسم الحساب: ${name} \nالـID: ${id}`;
    }
    else if(section === 'فري فاير'){
        name = document.getElementById('ffName').value;
        id = document.getElementById('ffID').value;
        if(!name || !id){
            alert("من فضلك اكتب اسم الحساب و الاي دي");
            return;
        }
        message = `مرحبا! لقد تم شراء المنتج: ${product} \nالسعر: ${price} جنيه \nاسم الحساب: ${name} \nالـID: ${id}`;
    }
    else if(section === 'تعليم المجال'){
        name = document.getElementById('eduName').value;
        if(!name){
            alert("من فضلك اكتب اسمك");
            return;
        }
        message = `مرحبا! لقد تم شراء المنتج: ${product} \nاسم المشتري: ${name}`;
    }

    const whatsappNumber = "01284070117";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
