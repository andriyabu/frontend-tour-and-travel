import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
    {
        id: "01",
        title: "Westminister Bridge",
        city: "London",
        distance: 300,
        price: 99,
        maxGroupSize: 10,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg01,
        featured: true,
    },
    {
        id: "02",
        title: "Bali, Indonesia",
        city: "Denpasar",
        distance: 400,
        price: 99,
        maxGroupSize: 8,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg02,
        featured: true,
    },
    {
        id: "03",
        title: "Snowy Mountains, Thailand",
        city: "Thailand",
        distance: 500,
        price: 99,
        maxGroupSize: 8,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg03,
        featured: true,
    },
    {
        id: "04",
        title: "Beautiful Sunrise, Thailand",
        city: "Thailand",
        distance: 500,
        price: 99,
        maxGroupSize: 8,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg04,
        featured: true,
    },
    {
        id: "05",
        title: "Nusa Penida Bali, Indonesia",
        city: "Denpasar",
        distance: 500,
        price: 99,
        maxGroupSize: 8,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg05,
        featured: false,
    },
    {
        id: "06",
        title: "Cherry Blossoms Spring, Japan",
        city: "Tokyo",
        distance: 500,
        price: 99,
        maxGroupSize: 8,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg06,
        featured: false,
    },
    {
        id: "07",
        title: "Holmen Lofoten",
        city: "France",
        distance: 500,
        price: 99,
        maxGroupSize: 8,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg07,
        featured: false,
    },
    {
        id: "08",
        title: "Comodo Island, Indonesia",
        city: "Labuan Bajo",
        distance: 500,
        price: 99,
        maxGroupSize: 10,
        desc: "This is description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg08,
        featured: true,
    },
];

export default tours;

