const ServicesData = [
    {
        id : 1,
        servicename: 'Manicure & Pedicure',
        service: [
            {
                id : 1,
                name: 'Herbal Green Tea Pedicure/Manicure',
                price: '$60/$40',
                img_url : require('../img/manicure/1.jpg'),
                desc: 'The aromas of this foot bath will open your sinuses and clear your head to pamper your senses. Natural Chinese herbs will increase blood circulatiuon while protecting and restoring moisture followed with a warm neck wrap to soothe any tensions.',
            },
            {
                id : 2,
                name: 'Detox Pedicure/Manicure',
                price: '$80/$47',
                img_url : require('../img/manicure/2.jpg'),
                desc: 'One of our most enjoybable pedicyres. Includes a charcoal soak , purifying scrub , nourishing mask , and neck therapy. this is followed by parrafin wax treatment and a 25 minute feet and shoulder massage using hot stones and emollient massage cream to soften and soothe'
            },
            {
                id : 3,
                name: 'Organic Pedicure/Manicure',
                price: '$70/$45',
                img_url : require('../img/manicure/3.jpg'),
                desc: 'An organic pedicure system with bubbling detox crystal foot bath to eliminate toxins from the body. A pedicure infused with collagen to reduce the eefects of aging skin as the collagen is absorbed by the skin and a relaxing neck therapy and hot stone foot massage to relieve stress'
            },
            {
                id : 4,
                name: 'Basic Pedicure/Manicure',
                price: '$35/$22',
                img_url : require('../img/manicure/4.jpg'),
                desc: 'Foot Soak + Nail Shaping + Cutigie Care + Soft Pumice Foot Scrub + Sugar Exfoliating Scrub + Lotion Foot Massage + Color Polish.'
            }, 
            
            {
                id : 5,
                name: 'Golden Pedicure/Manicure',
                price: '$85/$50',
                img_url : require('../img/manicure/5.jpg'),
                desc : 'Enjoy the most luxurious pedicure utilizing products from Ceremony of gold which includes a gold soak , scrub , and gel mask. The extremely rejuvenating pedicure with 24K gold ingredients to aid the slowdow of collagen depletion , increasing of ksin elasticity , and stimulating cells to the help tone up the skin. Gold soak with herbal infused foot bath + neck therapy + collagen foot mask + 25 minute feet and shoulder massage wit hhot stones'
            },
            {
                id : 6,
                name: 'Peppermint Pedicure/Manicure',
                price: '$50/$30',
                img_url : require('../img/manicure/6.jpg'),
                desc: 'Ease your feet into an aroma therapeutic bath rich with tea tree oil, fragrant eucalyptus oil , and Vitamin-e-all-anti-inflammatory. hen enjoy a lavish scrub of mineral sea salt that polishes the skin. An intense heel smoothing treatment with peppermint cream soothes and refreshes like a gentle breeze. Finish with a moisture restoring warm paraffin treatment and a warm neck wrap'
            },
            {
                id : 7,
                name: 'Citrus or Aloe Vera/Manicure',
                price: '$70/$40',
                img_url : require('../img/manicure/7.png'),
                desc: 'Grapefruit , orange , lemon infused foot bath to eliminate bacterial present on the skin. Our summer citrus pedicure is a symphony of essential oils , vitamin E , and antioxidants formulated to stimulate your senses as it smooth , refines , and c onditions your feet. A fruit rub follows to wipe dead skin and restore moisture. It provides rich vitamins and minerals to give naturally radiant skin with strong healthy nails'
            },
        ],
        img_url : require('../img/manicure/1.jpg'),
    },
    {
        id : 2,
        servicename: 'Gel-X',
        service: [
            {
                id : 1,
                name: 'New Set/Refill',
                price : '$65/$55',
                img_url : require('../img/gelx2.jpg')
            },
            {
                id : 2,
                name: 'Hybrid color gel new set / refill',
                price: '$60/$50',
                img_url : require('../img/gelx3.jpg')
            },
        ],
        img_url : require('../img/gelx3.jpg')
    },
    {
        id : 3,
        servicename : 'Nail Enhancements',
        service : [
            {
                id : 1,
                name : 'Gel Manicure',
                price: '$42'
            },
            {
                id : 2,
                name : 'Gel Manicure French',
                price: '$48'
            },
            {
                id : 3,
                name : 'Gel Color W/O Service',
                price: '$30'
            },
            {
                id : 4,
                name : 'Gel Color With Service',
                price: '$20'
            },
            {
                id : 5,
                name : 'French/ American extra',
                price: '$8'
            },
            {
                id : 6,
                name : 'Dipping 1 Color Powder',
                price: '$42+'
            },
            {
                id : 7,
                name : 'Dipping Pink And White',
                price: '$50+'
            },
            {
                id : 8,
                name : 'Solar Pink And White',
                price: '$60+'
            },
            {
                id : 9,
                name : 'Acrylic Fullset/Refill',
                price: '$50+ / $40+'
            },
            {
                id : 10,
                name : 'Acrylic Color Powder Fullset/Refill',
                price: '$50+ / $40+'
            },
        ],
        img_url : require('../img/6.jpg')
    },
    {
        id : 4,
        servicename: 'Waxing',
        service: [
            {
                name: 'Eyebrow',
                price: '$12'
            },
            {
                name: 'Lip',
                price: '$8'
            },
            {
                name: 'Chin',
                price: '$10'
            },
            {
                name: 'Full Chin',
                price: '$15'
            },
            {
                name: 'Full Face',
                price: '$40'
            },
            {
                name: 'Stomach',
                price: '$25'
            },
            {
                name: 'Chest',
                price: '$35+'
            },
            {
                name: 'Full Leg / For Leg',
                price: '$65+ / $40+'
            },
            {
                name: 'Full Arm / For Arm',
                price: '$45+ / $25+'
            },
            {
                name: 'Under Arm',
                price: '$20'
            },
            {
                name: 'Bikini',
                price: '$45+'
            },
            {
                name: 'Brazilian',
                price: '$55+'
            },
        ],
        img_url : require('../img/wax.jpg')
    },
    {
        id : 5,
        servicename: 'Facials',
        service: [
            {
                name: 'Express 30 Min Teen',
                price: '$45',
                img_url: require('../img/facial/1.png')
            },
            {
                name: 'Dream 50 Min',
                price: '$60',
                img_url: require('../img/facial/2.png')
            },
            {
                name: 'Gentlement 60 Min',
                price: '$75',
                img_url: require('../img/facial/3.png')
            },
            {
                name: 'M Signature 90 Min',
                price: '$90',
                img_url: require('../img/facial/4.png')
            },
        ],
        img_url: require('../img/facial/3.png')
    },
    {
        id : 6,
        servicename: 'Eyelash Extension',
        service: [
            {
                name : 'Cluster',
                price : '$60',
                img_url: require('../img/eyelash/4.jpg')
            },
            {
                name : 'Classic',
                price : '$99+',
                img_url: require('../img/eyelash/7.jpg')
            },
            {
                name : 'Hybrid',
                price : '$125+',
                img_url: require('../img/eyelash/1.jpg')
            },
            {
                name : 'Volume',
                price : '$150+',
                img_url: require('../img/eyelash/6.jpg')
            }
        ],
        img_url: require('../img/eyelash/5 (2).jpg')
    },
    {
        id : 7,
        servicename: 'Extra',
        service: [
            {
                name: 'Extension',
                price : '$5+'
            },
            {
                name : 'Shape',
                price : '$5'
            },
            {
                name : 'Nail Design / Repair',
                price : '$5+ / Each Nail'
            },
            {
                name : 'Polish Change Hand / Toe',
                price : '$10 / $15'
            },
            {
                name : 'Parafin Wax',
                price : '$8'
            },
            {
                name : 'Acrylic Removal W/O Service',
                price : '$20'
            },
            {
                name : 'Dipping Removal W/O Service',
                price : '$10'
            },
            {
                name : 'Removal With Service',
                price : '$5'
            },
        ],
        img_url: require('../img/extra.png')
    },
    {
        id : 8,
        servicename: 'Kid Service',
        service: [
            {
                name : 'Manicure',
                price : '$10'
            },
            {
                name : 'Pedicure',
                price : '$25'
            },
            {
                name : 'Polish Hand/ Toe',
                price : '$6/$10'
            },
            {
                name : 'Gel Color',
                price : '$15'
            }
        ],
        img_url : require('../img/kid.png')
    },
    {
        id : 9,
        servicename: 'Head Spa',
        service: [
            {
                name : 'Hair And Scalp Recovery',
                price : '$50 / 60 min',
                img_url: require('../img/headspa.png')
            },
            {
                name : 'Shampoo & Mini Facial',
                price : '$80 / 60 min'
            },
            {
                name : 'Polish Hand/ Toe',
                price : '$6/$10'
            },
            {
                name : 'Head Spa',
                price : '$120 / 90 min'
            },
            {
                name : 'Head Spa & Back Facial',
                price : '$160 / 90 min'
            },
            {
                name : 'M SPA BEAUTY ( Head Spa + Back Facial + Detox Manicure/ Dip/ Gel + Detox Pedicure)',
                price : '$280 / 90 min'
            }
        ],
        img_url : require('../img/headspa.png')
    },
    {
        id : 10,
        servicename: 'Drinks Offer',
        service: [
            {
                name: 'Magarita'
            },
            {
                name: 'Pina Colada'
            },
            {
                name: 'Sparkling Cranberry Vodka'
            },
            {
                name: 'Red Wine'
            },
            {
                name: 'White Wine'
            },
            {
                name: 'Mimosa'
            },
            {
                name: 'Coke , Sprite , Dr.Pepper , Water'
            }
        ],
        img_url : require('../img/drink.jpg')
    }
];

export default ServicesData;