$(function () {

    //header

    let iletisimKutusuTel = $(".telefon");

    iletisimKutusuTel.click(function(e){
        e.preventDefault();
    });

    //nav-links functions
    let navLinks = $(".nav-link");
    let dropdownItems = $(".dropdown-item");
    let randevuBtn = $(".btnRand");
    let iletisimAcKapa = $(".acKapaIletisim");
    let iletisimKutusu = $(".iletisimKutusu");
    let hakkimdaNavItem = $(".hakkimdaNavItem");

    // navLinks.mouseenter(function () {
    //     $(this).css("border-top", "2px solid white");
    // });

    // navLinks.mouseleave(function () {
    //     $(this).css("border-top", "none");
    // });

    // randevuBtn.mouseenter(function () {
    //     $(this).css("border-top", "none");
    // });

    randevuBtn.click(function () {
        $('html, body').animate({ scrollTop: 2700 }, '500');
    });

    iletisimAcKapa.click(function () {
        iletisimKutusu.toggle("slow");
    });

    hakkimdaNavItem.click(function () {
        $('html, body').animate({ scrollTop: 400 }, '500');
    });

    dropdownItems.click(function () {
        $('html, body').animate({ scrollTop: 1200 }, '500');
    });

    
    //Hizmetlerimiz function

    let navAileDan = $(".aileDan");
    let navOyunTer = $(".oyunTer");
    let navAileAra = $(".aileAra");
    let navTravmaYas = $(".travmaYas");
    let hizmetAileDan = $("#list-aileDan-list");
    let hizmetOyunTer = $("#list-oyunTer-list");
    let hizmetAileAra = $("#list-aileAra-list");
    let hizmetTravmaYas = $("#list-travmaYas-list");

    navAileDan.click(function(){
        hizmetAileDan.tab('show');
    });

    navOyunTer.click(function(){
        hizmetOyunTer.tab('show');
    });

    navAileAra.click(function(){
        hizmetAileAra.tab('show');
    });

    navTravmaYas.click(function(){
        hizmetTravmaYas.tab('show');
    });

    //Kitaplarımız function

    let kitaplar = $(".kitaplar");
    let kitaplarBtn = $(".kitaplarBtn");
    let gizliKitaplar = $(".gizliKitaplar");

    gizliKitaplar.hide();
    
    count = 0;
    /*
    kitaplarBtn.click(function () {
        count += 1;
        gizliKitaplar.toggle("slow");
        if (count % 2 == 0) {
            kitaplarBtn.text("Tüm Kitaplar");
            $('html, body').animate({ scrollTop: 1900 }, '600');
        }
        else if (count % 2 == 1) {
            kitaplarBtn.text("Daha Az Kitap");
            $('html, body').animate({ scrollTop: 2450 }, '600');
        }
    });
    */
    // Randevu Function
    $(function () {
        $("#datepicker").datepicker();
    });

    let randevuInputs = $(".form-control");
    let formGroups = $("form-group");
    let options = $("option");

    $("#tarih").datepicker({
        dateFormat: "dd.mm.yy",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        dayNamesMin: ["Pts", "Sl", "Çrş", "Prş", "Cm", "Cts", "Pzr"]
    });

    // Footer Function

    let footerTel = $(".footerTel");
    let footerAdres = $(".footerAdres");

    footerTel.click(function(e){
        e.preventDefault();
    })

    footerAdres.click(function(e){
        e.preventDefault();
    });
    
    //BacktoTop function
    var backToTopBtn = $('#backToTopBtn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    backToTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, '600');
    })


});

