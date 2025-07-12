const mensData=[
    {
        "name": "Classic White Shirt",
        "person":"men",
        "category": "shirts",
        "price": 15.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "White",
        "stock": 200,
        "description": "A comfortable, everyday essential white T-shirt made from soft cotton.",
        "image": "https://media.istockphoto.com/id/1208088017/photo/business-or-white-blue-shirt-front-and-back-view-mock-up-isolated-on-white-background-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vUWApD3rISPQwHkei2sA2Htx_ejl7nJkBOF3jgLDw0I="
    },
    {
        "name": "Slim Fit jeans",
        "person":"men",
        "category": "jeans",
        "price": 45.99,
        "sizes": ["30", "32", "34", "36", "38"],
        "color": "Blue",
        "stock": 120,
        "description": "Stylish slim-fit jeans with a modern look, perfect for casual outings.",
        "image": "https://media.istockphoto.com/id/527236518/photo/mans-legs.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxmqWzjfx0uw_D4FhBKAWGiFqKDOgii8SjhhFclHyrQ="
    },
    {
        "name": "Cotton Polo Shirt",
        "person":"men",
        "category": "shirts",
        "price": 22.99,
        "sizes": ["M", "L", "XL"],
        "color": "Navy Blue",
        "stock": 150,
        "description": "A classic navy polo shirt made from premium cotton, offering style and comfort.",
        "image": "https://media.istockphoto.com/id/2148418549/photo/portrait-of-a-smiling-young-indian-man-sitting-near-an-office-center-holding-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=l0TMBeizRH9pnTwEyCIrLd96t4szHRte7D6QxcLMyPA="
    },
    {
        "name": "Leather Biker jacket",
        "person":"men",
        "category": "jackets",
        "price": 129.99,
        "sizes": ["M", "L", "XL"],
        "color": "Gold",
        "stock": 45,
        "description": "Edgy leather biker jacket, perfect for adding a bold statement to your outfit.",
        "image": "https://media.istockphoto.com/id/875790144/photo/gold-woman-leather-jacket-isolated-on-white.jpg?s=612x612&w=0&k=20&c=YDuQ2nR4k27wPtFBaOfaPpjpZMeWRXpeC-dzfgjFHRU="
    },
    {
        "name": "Casual Hoodie",
        "person":"men",
        "category": "jackets",
        "price": 35.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "Gray",
        "stock": 100,
        "description": "Soft and cozy hoodie ideal for lounging or casual outings.",
        "image": "https://media.istockphoto.com/id/1294576092/photo/hipster-indian-man.jpg?s=612x612&w=0&k=20&c=v_ijIhed62ucbBzKJyIOQ-MwVUunYsdKpp8kI3aMuDw="
    },
    {
        "name": "Straight Leg Chinos",
        "person":"men",
        "category": "pants",
        "price": 39.99,
        "sizes": ["30", "32", "34", "36"],
        "color": "Khaki",
        "stock": 90,
        "description": "Versatile khaki chinos that pair well with both formal and casual attire.",
        "image": "https://media.istockphoto.com/id/115885850/photo/black-slacks-and-black-shoes.jpg?s=612x612&w=0&k=20&c=fefqzNXIluau-ZiBI_Hps_sZ2LikAr3jIjPFB5wxal0="
    },
    {
        "name": "Crew Neck Sweater",
        "person":"men",
        "category": "jacket",
        "price": 29.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "White",
        "stock": 75,
        "description": "A warm, green crew neck sweater perfect for chilly days.",
        "image": "https://media.istockphoto.com/id/1296786631/photo/blank-white-hooded-sweatshirt-mockup-with-zipper-in-front-and-back-views.webp?a=1&b=1&s=612x612&w=0&k=20&c=XRTawZ-aCyhHYzQk24pqpcx2rvwHvwrR8sOiYvbzH0E="
    },
    {
        "name": "Formal Dress Shirt",
        "person":"men",
        "category": "shirts",
        "price": 32.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "Light Blue",
        "stock": 60,
        "description": "Light blue formal shirt, ideal for office or formal events.",
        "image": "https://media.istockphoto.com/id/926243716/photo/portrait-of-cool-elegant-boss-in-shirt-pants-holding-one-hand-in-pocket-and-in-another-one.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ktJbx2msYB91gbDIPsN8f7STEDG3tJBHaemh_6FJZ0="
    },
    {
        "name": "Relaxed Fit shorts",
        "person":"men",
        "category": "shorts",
        "price": 20.99,
        "sizes": ["S", "M", "L"],
        "color": "Beige",
        "stock": 80,
        "description": "Casual beige shorts designed for comfort and style during warm days.",
        "image": "https://media.istockphoto.com/id/1162997762/photo/legs-of-a-man-walking-along-the-shore-of-the-beach.jpg?s=612x612&w=0&k=20&c=romjUEK_Md3r3-RvelxjYxGNF73MyjoWb4Y4fQmT988="
    },
    {
        "name": "Windbreaker jacket",
        "person":"men",
        "category": "jackets",
        "price": 54.99,
        "sizes": ["M", "L", "XL"],
        "color": "Red",
        "stock": 55,
        "description": "Lightweight red windbreaker, ideal for outdoor activities.",
        "image": "https://media.istockphoto.com/id/1074239872/photo/a-studio-portrait-of-young-man-wearing-winter-coat.jpg?s=612x612&w=0&k=20&c=ICxVo_BEmPo5ymqNv9AgzAfdeQCB_OIGslXsIXuNsmY="
    },
    {
        "name": "Athletic Joggers",
        "person":"men",
        "category": "pants",
        "price": 25.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "Black",
        "stock": 120,
        "description": "Comfortable joggers made for workouts or relaxed wear.",
        "image": "https://media.istockphoto.com/id/496412648/photo/young-bearded-male-in-sport-casual-clothes-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=vPF8Ps5xKe3NU3MFlU1PiyAq0Y90GXodknrBD4-OUac="
    },
    {
        "name": "Basic Round Neck T-Shirt",
        "person":"men",
        "category": "shirts",
        "price": 14.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "Gray",
        "stock": 130,
        "description": "Simple gray T-shirt that is a wardrobe essential.",
        "image": "https://media.istockphoto.com/id/1206211067/photo/plain-black-t-shirt-hanging-on-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=hRjvY5oQ3x9r9v_f6XDgsS8Zx7HFHHdlch2SQJoRRto="
    },
    {
        "name": "Slim Fit Blazer",
        "person":"men",
        "category": "blazers",
        "price": 85.99,
        "sizes": ["M", "L", "XL"],
        "color": "Blue",
        "stock": 40,
        "description": "A charcoal slim-fit blazer for a sharp and modern look.",
        "image": "https://media.istockphoto.com/id/527236518/photo/mans-legs.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxmqWzjfx0uw_D4FhBKAWGiFqKDOgii8SjhhFclHyrQ="
    },
    {
        "name": "V-Neck T-Shirt",
        "person":"men",
        "category": "shirts",
        "price": 17.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "Black",
        "stock": 100,
        "description": "Versatile black V-neck T-shirt, perfect for any occasion.",
        "image": "https://media.istockphoto.com/id/1206211095/photo/front-and-rear-view-of-plain-white-t-shirt-hanging-on-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=-IBBBeBqdLTIk1WfTuJj3wyX4e06cgpW8iZAukDXqEI="
    },
    {
        "name": "Bomber jacket",
        "person":"men",
        "category": "jackets",
        "price": 95.99,
        "sizes": ["M", "L", "XL"],
        "color": "Olive",
        "stock": 50,
        "description": "Trendy olive bomber jacket, perfect for layering.",
        "image": "https://media.istockphoto.com/id/1302083733/photo/varsity-jacket-mockup-in-front-side-and-back-views.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0nOFEOFxw0qJRbHKnA-2uhAaHju24Gm7X3N9b2k3CA="
    },
    {
        "name": "Cargo pants",
        "person":"men",
        "category": "pants",
        "price": 36.99,
        "sizes": ["30", "32", "34", "36"],
        "color": "Gray",
        "stock": 85,
        "description": "Durable cargo pants with multiple pockets for convenience.",
        "image": "https://plus.unsplash.com/premium_photo-1698339571239-8c65d17adab7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Graphic T-Shirt",
        "person":"men",
        "category": "shirts",
        "price": 18.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "White",
        "stock": 110,
        "description": "Casual graphic T-shirt with a trendy design.",
        "image": "https://media.istockphoto.com/id/1325515219/photo/raglan-long-sleeve-t-shirt.jpg?s=612x612&w=0&k=20&c=nkVC2DifgzY_GYT5mHBHBKu4-vv1IsoNpEs5IZedI0c="
    },
    {
        "name": "Puffer jacket",
        "person":"men",
        "category": "jackets",
        "price": 120.99,
        "sizes": ["M", "L", "XL", "XXL"],
        "color": "Navy",
        "stock": 30,
        "description": "Warm puffer jacket designed for colder climates.",
        "image": "https://media.istockphoto.com/id/1069165932/photo/black-leather-jacket-shot-from-front-and-back-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=RrcS7vj1W-MowcFDp5g8U_8iXLlZzZ-3ZYmtLt3sfGs="
    },
    {
        "name": "Sporty Track pants",
        "person":"men",
        "category": "pants",
        "price": 27.99,
        "sizes": ["S", "M", "L", "XL"],
        "color": "Navy",
        "stock": 90,
        "description": "Comfortable navy track pants for sports and daily wear.",
        "image": "https://media.istockphoto.com/id/1322763090/photo/blank-joggers-mockup-front-and-side-views.webp?a=1&b=1&s=612x612&w=0&k=20&c=iNPk3GNI65lQeSBED-MOKJr2cE7rJPylmDjv70HJMNg="
    },
    {
        "name": "Chino shorts",
        "person":"men",
        "category": "shorts",
        "price": 24.99,
        "sizes": ["S", "M", "L"],
        "color": "Olive",
        "stock": 95,
        "description": "Classic olive chino shorts, perfect for summer days.",
        "image": "https://media.istockphoto.com/id/638772422/photo/laughing-beach-guy.webp?a=1&b=1&s=612x612&w=0&k=20&c=fwkIEjKUmVhxtMXlN571pJH9llHCJDBFZXxK6OrE9v0=",
    }
]


module.exports={data:mensData};