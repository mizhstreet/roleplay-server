const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../helpers/bcrypt.helper");
const prisma = new PrismaClient();

const categoriesWithProducts = [
  {
    name: "Gaming",
    products: {
      create: [
        {
          imageSrc: "car.png",
          price: 960,
          stars: 3,
          rates: 27,
          discount: 0,
          quantity: 0,
          title: "Kids Electric Car",
          details:
            "An exciting electric car for kids to drive around in style, providing hours of entertainment and fun.",
        },
        {
          imageSrc: "g-black.png",
          price: 660,
          stars: 5,
          rates: 25,
          discount: 40,
          quantity: 0,
          title: "GP11 Shooter USB Gamepad",
          details:
            "Enhance your gaming experience with the GP11 Shooter USB gamepad, featuring high-quality construction and precise controls.",
        },
        {
          imageSrc: "g-colored.png",
          price: 160,
          stars: 3,
          rates: 80,
          discount: 40,
          quantity: 0,
          title: "HAVIT HV-G92 Gamepad",
          details:
            "Enjoy responsive and precise gaming controls with the HAVIT HV-G92 gamepad, designed for hours of gaming fun.",
        },
      ],
    },
  },
  {
    name: "Technology",
    products: {
      create: [
        {
          imageSrc: "camera.png",
          price: 360,
          stars: 4,
          rates: 39,
          discount: 0,
          quantity: 0,
          title: "CANON EOS DSLR Camera",
          details:
            "Capture stunning photos and videos with this professional-grade Canon DSLR camera, perfect for photography enthusiasts.",
        },
        {
          imageSrc: "labtop.png",
          price: 700,
          stars: 4,
          rates: 4,
          discount: 0,
          quantity: 0,
          title: "ASUS FHD Gaming Laptop",
          details:
            "Experience high-performance gaming with this ASUS FHD gaming laptop, featuring advanced graphics and smooth gameplay.",
        },
        {
          imageSrc: "headphones.png",
          price: 160,
          stars: 4,
          rates: 62,
          discount: 40,
          quantity: 0,
          title: "RGB Liquid CPU Cooler",
          details:
            "Keep your CPU cool and running smoothly with the RGB liquid CPU cooler, featuring a high-performance pump and customizable RGB lighting.",
        },
        {
          imageSrc: "keyboard.png",
          price: 1160,
          stars: 3,
          rates: 83,
          discount: 35,
          quantity: 0,
          title: "AK-900 Wired Keyboard",
          details:
            "Type with speed and accuracy using the AK-900 wired keyboard, featuring a durable construction and ergonomic design.",
        },
        {
          imageSrc: "tv.png",
          price: 400,
          stars: 5,
          rates: 80,
          discount: 30,
          quantity: 0,
          title: "IPS LCD Gaming Monitor",
          details:
            "Immerse yourself in gaming with the IPS LCD gaming monitor, delivering vibrant visuals and smooth gameplay.",
        },
      ],
    },
  },
  {
    name: "General",
    products: {
      create: [
        {
          imageSrc: "dogfood.png",
          price: 100,
          stars: 5,
          rates: 2,
          discount: 0,
          quantity: 0,
          title: "Breed Dry Dog Food",
          details:
            "Nutritious dry dog food to keep your furry friend healthy and happy, made with high-quality ingredients.",
        },
        {
          imageSrc: "cream.png",
          price: 500,
          stars: 3,
          rates: 60,
          discount: 0,
          quantity: 0,
          title: "Curology Product Set",
          details:
            "A complete skincare set by Curology to cleanse, moisturize, and protect your skin, leaving it soft and radiant.",
        },
        {
          imageSrc: "bookself.png",
          price: 360,
          stars: 5,
          rates: 81,
          discount: 40,
          quantity: 0,
          title: "Small Bookshelf",
          details:
            "Organize your books and decorative items neatly with this small bookshelf, designed to fit in compact spaces.",
        },
      ],
    },
  },
  {
    name: "Clothes",
    products: {
      create: [
        {
          imageSrc: "jacket.png",
          price: 660,
          stars: 3,
          rates: 8,
          discount: 40,
          quantity: 0,
          title: "Quilted Satin Jacket",
          details:
            "Stay stylish and warm with this quilted satin jacket, perfect for adding a trendy touch to your outfit.",
        },
        {
          imageSrc: "bag.png",
          price: 1160,
          stars: 3,
          rates: 57,
          discount: 40,
          quantity: 0,
          title: "Gucci Duffle Bag",
          details:
            "Travel in style with the Gucci duffle bag, crafted from premium materials and designed for durability and luxury.",
        },
        {
          imageSrc: "coat.png",
          price: 360,
          stars: 4,
          rates: 86,
          discount: 40,
          quantity: 0,
          title: "The North Coat",
          details:
            "Stay warm and fashionable with The North Coat, featuring a durable construction and timeless design.",
        },
        {
          imageSrc: "chair.png",
          price: 400,
          stars: 4,
          rates: 67,
          discount: 25,
          quantity: 0,
          title: "S-Series Comfort Chair",
          details:
            "Relax in comfort with the S-Series comfort chair, featuring ergonomic design and plush cushioning for long hours of sitting.",
        },
      ],
    },
  },
  {
    name: "New Arrival",
    products: {
      create: [
        {
          imageSrc: "JBL_BOOMBOX.png",
          price: 1200,
          stars: 3,
          rates: 12,
          discount: 0,
          quantity: 0,
          title: "JBL Boombox 2",
          details:
            "Experience powerful sound with the JBL Boombox 2, featuring a rugged design and long battery life for all-day listening.",
        },
        {
          imageSrc: "perfume.png",
          price: 1200,
          stars: 3,
          rates: 36,
          discount: 0,
          quantity: 0,
          title: "perfume",
          details:
            "This perfume is a blend of oud, rose, and incense, creating a rich and luxurious scent that lasts all day.",
        },
        {
          imageSrc: "phone.png",
          price: 1200,
          stars: 3,
          rates: 83,
          discount: 0,
          quantity: 0,
          title: "Phone",
          details:
            "This phone features a large display, powerful processor, and long battery life, perfect for work and play.",
        },
        {
          imageSrc: "playstation.png",
          price: 1200,
          stars: 4,
          rates: 90,
          discount: 0,
          quantity: 0,
          title: "PlayStation 5",
          details:
            "The black and white version of the PS5 is coming out on sale.",
        },
        {
          imageSrc: "speakers.png",
          price: 1200,
          stars: 4,
          rates: 48,
          discount: 0,
          quantity: 0,
          title: "Speaker",
          details: "Amazing sound quality with the Amazon wireless speaker.",
        },
        {
          imageSrc: "womenCollections.png",
          price: 1200,
          stars: 4,
          rates: 13,
          discount: 0,
          quantity: 0,
          title: "Women's Collections",
          details:
            "Women's collections are featured that give you another vibe, and you can find the best collections here.",
        },
        {
          imageSrc: "shoes.png",
          price: 400,
          stars: 4,
          rates: 10,
          discount: 0,
          quantity: 0,
          title: "Football Shoes",
          details:
            "The best football shoes for your game, and you can find the best collections here.",
        },
      ],
    },
  },
];

async function main() {
  const admin1 = await prisma.user.upsert({
    where: { email: "arzhed@admin.com" },
    update: {},
    create: {
      email: "arzhed@admin.com",
      username: "Arzhed",
      password: hashPassword("admin17"),
      role: "admin",
    },
  });

  for (let i = 0; i < categoriesWithProducts.length; i++) {
    const item = categoriesWithProducts[i];
    await prisma.category.create({
      data: {
        // title: item.name,
        name: item.name,
        product: {
          createMany: {
            data: item.products.create,
          },
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
