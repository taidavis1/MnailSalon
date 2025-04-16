const ServicesData = [
    {
        id : 1,
        servicename: 'Manicures',
        service: [
            {
                id : 1,
                name: 'Classic Manicure',
                price: '$25',
                img_url : require('../img/manicure/4.jpg'),
                desc: 'Nail Trimming, Shaping, cuticle cut, buffing, lotion with a 5 minute massage & finished with your choice of color',
            },
            {
                id : 2,
                name: 'Deluxe Manicure',
                price: '$35',
                img_url : require('../img/manicure/2.jpg'),
                desc: 'Soak, cleanse, shape your nails, trim cuticles, apply collagen gloves to soothe your skin, massage & moisturizing lotion, finish off with hot towels & polish'
            },
            {
                id : 3,
                name: 'Heavenly Manicure',
                price: '$45',
                img_url : require('../img/manicure/3.jpg'),
                desc: 'Immerse yourself into the ultimate experience with sea salt scrub, hydrating milk & honey butter to smooth & soften rough skin, followed by hot stones reflexology, additional massage, hands, arms'
            },
            {
                id : 4,
                name: 'Gold Manicure',
                price: '$55',
                img_url : require('../img/manicure/1.jpg'),
                desc: 'Indulge in the most luxurious manicure by rejuvenating & hydrating your skin with freshly cut cucumbers along with organic mask, followed by hot stones massage on hands, arms, neck & shoulders & finished with hot towels, & polish'
            },
        ],
        img_url : require('../img/manicure/1.jpg'),
    },
    {
        id: 2,
        servicename: 'Pedicure',
        service: [
            {
                id : 1,
                name: 'Express Pedicure',
                price: '$38',
                img_url : require('../img/pedicure/1.png'),
                desc: 'Soak, nail shaping filing, cuticle trim, buffing & polish of choice'
            },
            {
                id : 2,
                name: 'Lavender Pedicure',
                price: '$35',
                img_url : require('../img/pedicure/2.png'),
                desc: 'Soak, nail shaping, filing, cuticle trim, buffing, CALLUS Removal of dead skin under the feet, heel treatment, massage, finishing up with hot towels & Polish'
            },
            {
                id : 3,
                name: 'Fresh Cucumber Pedicure',
                price: '$50',
                img_url : require('../img/pedicure/3.png'),
                desc: 'A symphony of essential oils, vitamin E, antioxidants formulated to stimulate your senses as it smooths, refines & conditions your feet. A Cucumbers rub follows to wipe dead skin & restore moisture, hot stones massage & Hot towels, (10 MINUTE MASSAGE)',
            },
            {
                id : 4,
                name: 'Fresh Aloe Vera Pedicure',
                img_url : require('../img/pedicure/4.png'),
                price: '$57',
                desc: 'Designed to moisturize, revitalize & hydrate the skin, this pedicure is full Of Vitamin E, a warm paraffin treatment seals in moisture & provides complete hydration, leaving you renewed, soften with silky smooth ski (15 MINUTE MASSAGE)'
            },
            {
                id: 5,
                name: 'Signature Cosmo Pedicure',
                price: '$65',
                desc: 'An unforgettable experience of pure pampering that softens the skin, eliminates dryness, deeply relaxes you, the pedicure begins with a foot bath, cuticle trim, extensive callus removal, & sea salt exfoliation is included to help soften rough skin, our foot mask incorporates with long Deep tissue massage, paraffin wax, hot stones & war, towels to infuse moisture providing a silky smooth skin, (20 MIN FOOT MASSAGE)'
            },
            {
                id: 6,
                name: 'Volcano Pedicure',
                price: '$79',
                desc: 'One of our most indulgent pedicure treatments includes a soothing soak, a purifying scrub, a nourishing mask, followed by a paraffin wax treatment, hot stone therapy, and a 20-minute deep tissue foot massage, finishing with a 5-minute shoulder massage using our rich massage cream to soften and soothe'
            },
            {
                id: 7,
                name: 'Candle Wax Gold CBD Pedicure',
                price: '$89',
                desc: 'This pedicure treatment offers a calming experience, hydrating the skin to minimize dryness and remove dead skin cells. It enhances blood circulation by dilating blood vessels with warm heat from CANDLE WAX treatments. Our CEREMONY of GOLD products slow down collagen depletion, boost skin elasticity, and stimulate skin toning. The treatment includes a gold soak with herbal infused foot bath, neck therapy, and collagen foot mask, accompanied by a 25-minute massage with hot stone and paraffin wax & 5 minutes shoulder massage'
            }
        ],
        img_url : require('../img/pedicure/1.png'),
    },
    {
        id : 3,
        servicename: 'Gel Services',
        service: [
            {
                id : 1,
                name: 'Hard Gel (Builder Gel)',
                price : '$60+',
                img_url : require('../img/gelx2.jpg')
            },
            {
                id : 2,
                name: 'Gel X',
                price: '$65+',
                img_url : require('../img/gelx3.jpg')
            },
            {
                id : 3,
                name: 'Gel Manicure',
                price: '$45+',
            },
            {
                id : 4,
                name: 'Gel Polish Change',
                price: '$30',
            },
        ],
        img_url : require('../img/gelx3.jpg')
    },
    {
        id : 4,
        servicename : 'Acrylic Services',
        service : [ 
            {
                id : 1,
                name : 'Acrylic Full set',
                price: '$50+'
            },
            {
                id : 2,
                name : 'Acrylic Fill',
                price: '$45+'
            },
            {
                id : 3,
                name : 'Solar Pink & White',
                price: '$55+'
            },
            {
                id : 4,
                name : 'Solar Pink & White Fill',
                price: '$50+'
            }
        ],
        img_url : require('../img/6.jpg')
    },
    {
        id: 11,
        servicename: 'Dipping Powder (Next-Gen)',
        service: [
            {
                name: 'Dip Color',
                price : '$45',
            },
            {
                name: 'Dip French',
                price : '$55+',
            },
            {
                name: 'Dip Ombré',
                price : '$70',
            }
        ],
        img_url: require('../img/dip.png'),
    },
    {
        id : 5,
        servicename: 'Waxing',
        service: [
            {
                name: 'Eyebrows',
                price: '$15'
            },
            {
                name: 'Upper Lip',
                price: '$10'
            },
            {
                name: 'Side Burns',
                price: '$10'
            },
            {
                name: 'Cheeks',
                price: '$15+'
            },
            {
                name: 'Full Face',
                price: '$45+'
            },
            {
                name: 'Chin',
                price: '$15+'
            },
            {
                name: 'Under Arms',
                price: '$25+'
            },
            {
                name: 'Full Arms',
                price: '$55+'
            },
            {
                name: 'Half Arm',
                price: '$40+'
            },
            {
                name: 'Back',
                price: '$55+'
            },
            {
                name: 'Chest',
                price: '$45+'
            },
            {
                name: 'Full Legs',
                price: '$65+'
            },
            {
                name: 'Lower Legs',
                price: '$40+'
            },
            {
                name: 'Upper Legs',
                price: '$45+'
            },
            {
                name: 'Brazilian',
                price: '$60+'
            },
            {
                name: 'Bikini',
                price: '$50+'
            }
        ],
        img_url : require('../img/wax.jpg')
    },
    {
        id : 7,
        servicename: 'Eyelash Extension',
        service: [
            {
                name : 'Eyelash Tinting',
                price : '$25',
                img_url: require('../img/eyelash/4.jpg')
            },
            {
                name : 'Eyebrows Tinting',
                price : '$20',
                img_url: require('../img/eyelash/7.png')
            },
            {
                name : 'Lashes',
                price : 'Market Price',
                img_url: require('../img/eyelash/1.jpg')
            },
            {
                name : 'Lashes Fill',
                price : 'Varies',
                img_url: require('../img/eyelash/6.jpg')
            }
        ],
        img_url: require('../img/eyelash/5 (2).jpg')
    },
    {
        id : 8,
        servicename: 'Extra',
        service: [
            {
                name: 'Add Gel',
                price : '$20'
            },
            {
                name : 'French Style',
                price : '$10+'
            },
            {
                name : 'Nail Shaping',
                price : '$5'
            },
            {
                name : 'Nail Extensions',
                price : '$5'
            },
            {
                name : 'Extra Length',
                price : '$5+'
            },
            {
                name : 'Cuticle Cut',
                price : '$5'
            },
            {
                name : 'Nail Repair',
                price : '$8+'
            },
            {
                name : 'Nail Designs',
                price : '$5+'
            },
            {
                name: 'Matte Nails',
                price : '$5'
            },
            {
                name: 'Toe Nails Exten',
                price: '$8'
            },
            {
                name: 'Toe Full Set',
                price: '$50'
            },
            {
                name: 'Cut Down Reshape',
                price: '$5+'
            },
            {
                name: 'Paraffin Wax Hand',
                price: '$8'
            },
            {
                name: 'Paraffin Wax Toe',
                price: '$10'
            },
            {
                name: 'Acrylic Removal',
                price: '$20+'
            },
            {
                name: 'Dip/ Gel Removal',
                price: '$15+'
            },
            {
                name: 'Gel X Removal',
                price: '$20+'
            },
            {
                name: 'Shinny Buff',
                price: '$5'
            },
            {
                name: 'Collagen Glove/Sock',
                price: '$10'
            }
        ],
        img_url: require('../img/extra.png')
    },
    {
        id : 9,
        servicename: 'Kid Service',
        service: [
            {
                name : 'Manicure',
                price : '$15'
            },
            {
                name : 'Pedicure',
                price : '$25'
            },
            {
                name: 'Polish Change Hand',
                price: '$10'
            },
            {
                name: 'Polish Change Feet',
                price: '$10'
            },
            {
                name: 'Gel Polish Hand',
                price: '$20'
            },
            {
                name: 'Gel Polish Feet',
                price: '$20'
            }
        ],
        img_url : require('../img/kid.png')
    },
    {
        id : 10,
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
        id : 12,
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