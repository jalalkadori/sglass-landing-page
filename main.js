// slider control 

(() => {
    //If you want to add more images, add the link name and URL image URL in the array list below.
        const images_list = [
    {
        "url": "https://www.s-glass.fr/images/slide_3.png",
        "alt": "",
        "name": "image 1",
        "link": ""
    },
    {
        "url": "https://www.s-glass.fr/images/slide_1.png",
        "alt": "",
        "name": "image 2",
        "link": ""
    },
        ];
    
    // generated by https://www.html-code-generator.com/html/image-slideshow-generator
        let slider_id = document.querySelector("#Slider");
    
        // append all images
        let dots_div = "";
        let images_div = "";
        for (let i = 0; i < images_list.length; i++) {
            // if no link without href="" tag
            let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
            images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
                            '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
                         '</a>';
        }
        slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
        let slide_index = 0;
    
        const images = slider_id.querySelectorAll(".hcg-slides");
        const showSlides = () => {
            if (slide_index > images.length-1) {
                slide_index = 0;
            }
            if (slide_index < 0) {
                slide_index = images.length-1;
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
                if (i == slide_index) {
                    images[i].style.display = "flex";
                }
            }
        }
    
        // auto play
        setInterval(() => {
            slide_index++;
            showSlides();
        }, 2000);
    
    })();

// whatsapp button 
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?3254';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
        "enabled":true,
        "chatButtonSetting":{
            "backgroundColor":"#4dc247",
            "ctaText":"Contact Nous",
            "borderRadius":"25",
            "marginLeft":"0",
            "marginBottom":"50",
            "marginRight":"50",
            "position":"right"
        },
        "brandSetting":{
            "brandName":"JKAD",
            "brandSubTitle":"Typically replies within a day",
            "brandImg":"https://cdn.clare.ai/wati/images/WATI_logo_square_2.png",
            "welcomeText":"Hi there!\nHow can I help you?",
            "messageText":"Hello, I have a question about {{page_link}}",
            "backgroundColor":"#0a5f54",
            "ctaText":"Start Chat",
            "borderRadius":"25",
            "autoShow":false,
            "phoneNumber":"212601949570"
        }
    };
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
