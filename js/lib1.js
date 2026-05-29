const productlist = [
    {
        id: "01",
        name: "Classic Elegance Room",
        price: 250,
        image: "../assets/images/Classic_Elegance.jpg",
        productlink: "https://stylethehaven.com/romantic-shabby-chic-living-room-decor/",
        desc: "Luxury  /  Vintage  /  Charm  /  Elegance",
        detail: "The Classic Elegance Room creates a luxurious atmosphere inspired by vintage European interiors. Soft lighting, elegant furniture, and delicate decorative details bring warmth and sophistication into the space. This room is perfect for people who appreciate timeless beauty, peaceful moments, and artistic living. The combination of classic colors and graceful textures gives the room a charming personality that feels both romantic and refined. Whether for relaxation, reading, or simply enjoying a quiet evening, this design offers comfort with a touch of royal elegance."
    },
    {
        id: "02",
        name: "Fairy Dreamy Room",
        price: 180,
        image: "../assets/images/fairyroom.jpg",
        productlink: "https://www.pinterest.com/pin/19773685858567637/",
        desc: "Soft /  Romantic /  Gentle  / Poetic",
        detail: "The Fairy Dreamy Room is designed with a magical and poetic atmosphere that feels calm and comforting. Gentle pastel colors, soft fabrics, and dreamy decorations create a relaxing environment full of warmth and imagination. This room is ideal for those who love peaceful spaces with a romantic touch. The elegant lighting and cozy arrangement make every corner feel delicate and inspiring. It is a perfect place to relax after a long day, enjoy quiet moments, or express a soft artistic lifestyle filled with beauty and serenity."
    },
    {
        id: "03",
        name: "Modern Home Room",
        price: 100,
        image: "../assets/images/home.jpg",
        productlink: "https://www.pinterest.com/pin/648940627574557652/",
        desc: "Peaceful  /  Cozy /  Chill /  Modern",
        detail: "The Modern Home Room combines simplicity and comfort to create a clean and peaceful living space. Minimalist furniture, neutral colors, and smart organization provide a modern lifestyle that feels relaxing and practical. This room is suitable for people who enjoy calm environments with a stylish contemporary touch. Natural lighting and cozy textures make the atmosphere warm and welcoming. Whether working, studying, or resting, the room supports both productivity and comfort. Its balanced design reflects a modern personality while still maintaining a sense of home and tranquility."
    },
    {
        id: "04",
        name: "Street Type Room",
        price: 150,
        image: "../assets/images/streettype.jpg",
        productlink: "https://decorsly.com/indian-living-room-designs/?utm_source=Pinterest&utm_medium=organic",
        desc: "Rebellious /  Edgy /  Vibrant /  Urban",
        detail: "The Street Type Room expresses bold urban energy with creative and rebellious design elements. Graffiti-inspired decorations, dynamic colors, and industrial-style furniture create a youthful and modern atmosphere. This room is perfect for people who enjoy freedom, individuality, and street culture. Every detail reflects confidence and artistic expression, making the space lively and full of personality. The combination of edgy textures and vibrant lighting gives the room a unique identity. It is an exciting environment for creativity, music, socializing, or simply enjoying a stylish city lifestyle."
    },
    {
        id: "05",
        name: "Historical Room",
        price: 250,
        image: "../assets/images/historical.jpg",
        productlink: "https://modern-living-spaces.de/wohnzimmer-deko-asiatischer-stil/?utm_source=Pinterest&utm_medium=organic",
        desc: "Traditional /  Mystical  / Oriental  / Graceful",
        detail: "The Historical Room captures the beauty of traditional culture and ancient artistic design. Inspired by oriental architecture and historical elegance, the room features graceful decorations, warm tones, and detailed craftsmanship. The atmosphere feels calm, mystical, and deeply connected to heritage and history. This design is ideal for those who appreciate classical aesthetics and cultural richness. Elegant patterns and timeless furniture create a refined and meaningful environment. The Historical Room offers a peaceful retreat where tradition, beauty, and graceful living come together in perfect harmony."
    },
];

function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1. Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class","product-item col m-4");

	//2. Tạo khung chưa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class","product-image h-75");

	//3. Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chưa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class","product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
	const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");

	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink +"?id="+id);
	productLink.setAttribute("class", "btn btn-info");

	//Gắn paragraph 1, 2 và Link vào khung 
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gắn khung hình và thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gắn product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container = document.getElementById('product-list');

	container.innerHTML = "";

	products.forEach(item => {
		//Tạo element cha bằng createElement
		const productItem = document.createElement('div');

		//productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//Sử dụng Template Literal nạp dữ liệu vào 
		productItem.innerHTML = `
			<div class="product-image ratio ratio-1x1 overflow-hidden">
				<img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
			</div>
			<div class="product-info p-2 text-center">
				<p class="product-name mb-1">${item.name}</p>
				<p class="product-price text-danger fw-bold mb-2">
					${item.price.toLocaleString('vi-VN')}.000 VND/H
				</p>
				<a href= "../html/present.html?id=${item.id}" class= "btn btn-sm btn-outline-primary w-100">Xem chi tiết
				</a>
			</div>
		`;
		container.appendChild(productItem);
	});
}

showProduct(productlist);