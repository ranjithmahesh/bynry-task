import { FiLogOut } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
export const NavMenu = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard className="text-2xl" />,
    Link: "/dashboard",
  },
  {
    name: "Usres",
    icon: <IoPersonCircleOutline className="text-2xl" />,
    Link: "/user",
  },
];
export const MobileNavMenu = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard className="text-2xl" />,
    Link: "/dashboard",
  },
  {
    name: "Usres",
    icon: <IoPersonCircleOutline className="text-2xl" />,
    Link: "/user",
  },
  {
    name: "Logout",
    icon: <FiLogOut className="text-2xl" />,
    Link: "/",
  },
];

export const UserData = [
  {
    name: "John Doe",
    city: "New York",
    email: "john.doe@gmail.com",
    mobile: "+91-9876543210",
    gender: "Male",
    coordinates: { lat: 40.7128, lng: -74.006 },
    description:
      "John is a software engineer living in New York. He loves exploring new technologies and building cool projects in his free time. In his spare time, he enjoys playing video games and hiking.",
    interests: ["Technology", "Programming", "Gaming", "Hiking"],
    education: "Bachelor's degree in Computer Science",
    occupation: "Software Engineer",
    languages: ["JavaScript", "Python", "Java"],
    img: "https://source.unsplash.com/random/800x600?john-doe",
  },
  {
    name: "Jane Smith",
    city: "Los Angeles",
    email: "jane.smith@hotmail.com",
    mobile: "+91-9876543211",
    gender: "Female",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    description:
      "Jane is a freelance graphic designer based in Los Angeles. She enjoys creating beautiful designs and exploring different art styles. In her free time, she likes to visit art galleries and attend design workshops.",
    interests: ["Graphic Design", "Art", "Traveling", "Workshops"],
    education: "Bachelor's degree in Fine Arts",
    occupation: "Freelance Graphic Designer",
    languages: ["English", "Spanish"],
    img: "https://source.unsplash.com/random/800x600?jane-smith",
  },
  {
    name: "Bob Johnson",
    city: "Chicago",
    email: "bob.johnson@gmail.com",
    mobile: "+91-9876543212",
    gender: "Male",
    coordinates: { lat: 41.8781, lng: -87.6298 },
    description:
      "Bob is a marketing executive working for a tech company in Chicago. He is passionate about digital marketing and enjoys helping businesses grow. In his spare time, he likes to read books on marketing strategies and attend marketing conferences.",
    interests: ["Marketing", "Business Growth", "Reading", "Conferences"],
    education: "Master's degree in Marketing",
    occupation: "Marketing Executive",
    languages: ["English", "French"],
    img: "https://source.unsplash.com/random/800x600?bob-johnson",
  },
  {
    name: "Alice Brown",
    city: "Houston",
    email: "alice.brown@hotmail.com",
    mobile: "+91-9876543213",
    gender: "Female",
    coordinates: { lat: 29.7604, lng: -95.3698 },
    description:
      "Alice is a nurse working at a hospital in Houston. She is dedicated to providing compassionate care to her patients and is always looking for ways to improve her nursing skills. In her free time, she enjoys gardening and volunteering at local charities.",
    interests: ["Nursing", "Healthcare", "Gardening", "Volunteering"],
    education: "Bachelor's degree in Nursing",
    occupation: "Registered Nurse",
    languages: ["English", "Spanish"],
    img: "https://source.unsplash.com/random/800x600?alice-brown",
  },
  {
    name: "Ethan Williams",
    city: "Phoenix",
    email: "ethan.williams@gmail.com",
    mobile: "+91-9876543214",
    gender: "Male",
    coordinates: { lat: 33.4484, lng: -112.074 },
    description:
      "Ethan is a high school teacher in Phoenix. He is passionate about education and enjoys helping students reach their full potential. In his free time, he likes to play basketball and watch movies.",
    interests: ["Education", "Teaching", "Basketball", "Movies"],
    education: "Bachelor's degree in Education",
    occupation: "High School Teacher",
    languages: ["English", "Spanish"],
    img: "https://source.unsplash.com/random/800x600?ethan-williams",
  },
  {
    name: "Emma Jones",
    city: "Philadelphia",
    email: "emma.jones@hotmail.com",
    mobile: "+91-9876543215",
    gender: "Female",
    coordinates: { lat: 39.9526, lng: -75.1652 },
    description:
      "Emma is a journalist working for a newspaper in Philadelphia. She is passionate about storytelling and enjoys writing articles that inspire others. In her free time, she likes to travel and try new foods.",
    interests: ["Journalism", "Writing", "Traveling", "Food"],
    education: "Bachelor's degree in Journalism",
    occupation: "Journalist",
    languages: ["English", "French"],
    img: "https://source.unsplash.com/random/800x600?emma-jones",
  },
  {
    name: "Michael Brown",
    city: "San Antonio",
    email: "michael.brown@gmail.com",
    mobile: "+91-9876543216",
    gender: "Male",
    coordinates: { lat: 29.4241, lng: -98.4936 },
    description:
      "Michael is a chef working at a restaurant in San Antonio. He is passionate about cooking and loves experimenting with new recipes. In his free time, he enjoys hiking and fishing.",
    interests: ["Cooking", "Food", "Hiking", "Fishing"],
    education: "Culinary Arts degree",
    occupation: "Chef",
    languages: ["English", "Italian"],
    img: "https://source.unsplash.com/random/800x600?michael-brown",
  },
  {
    name: "Sophia Clark",
    city: "Seattle",
    email: "sophia.clark@gmail.com",
    mobile: "+91-9876543217",
    gender: "Female",
    coordinates: { lat: 47.6062, lng: -122.3321 },
    description:
      "Sophia is a web developer living in Seattle. She enjoys creating responsive and user-friendly websites. In her free time, she likes to go hiking and attend tech meetups.",
    interests: ["Web Development", "Hiking", "Tech Meetups"],
    education: "Bachelor's degree in Computer Science",
    occupation: "Web Developer",
    languages: ["HTML", "CSS", "JavaScript"],
    img: "https://source.unsplash.com/random/800x600?sophia-clark",
  },
  {
    name: "William Rodriguez",
    city: "Miami",
    email: "william.rodriguez@hotmail.com",
    mobile: "+91-9876543218",
    gender: "Male",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    description:
      "William is a photographer based in Miami. He specializes in capturing beautiful landscapes and portraits. In his spare time, he enjoys surfing and exploring new photography techniques.",
    interests: ["Photography", "Surfing", "Exploring"],
    education: "Self-taught photographer",
    occupation: "Photographer",
    languages: ["English", "Spanish"],
    img: "https://source.unsplash.com/random/800x600?william-rodriguez",
  },
  {
    name: "Olivia Wilson",
    city: "Dallas",
    email: "olivia.wilson@gmail.com",
    mobile: "+91-9876543219",
    gender: "Female",
    coordinates: { lat: 32.7767, lng: -96.797 },
    description:
      "Olivia is a fashion designer in Dallas. She loves creating unique and stylish clothing designs. In her free time, she enjoys shopping for fabrics and attending fashion shows.",
    interests: ["Fashion Design", "Shopping", "Fashion Shows"],
    education: "Bachelor's degree in Fashion Design",
    occupation: "Fashion Designer",
    languages: ["English"],
    img: "https://source.unsplash.com/random/800x600?olivia-wilson",
  },
  {
    name: "Daniel Martinez",
    city: "Denver",
    email: "daniel.martinez@hotmail.com",
    mobile: "+91-9876543220",
    gender: "Male",
    coordinates: { lat: 39.7392, lng: -104.9903 },
    description:
      "Daniel is a software developer living in Denver. He enjoys building innovative software solutions and learning about new technologies. In his spare time, he likes to play guitar and go hiking.",
    interests: ["Software Development", "Guitar", "Hiking"],
    education: "Bachelor's degree in Computer Science",
    occupation: "Software Developer",
    languages: ["Java", "Python", "JavaScript"],
    img: "https://source.unsplash.com/random/800x600?daniel-martinez",
  },
];
