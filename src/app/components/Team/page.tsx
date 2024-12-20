import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Umer Khan",
      profession: "Software Engineer",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
    {
      name: "Areeba Khan",
      profession: "Product Designer",
      image:
        "https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s=",
    },
    {
      name: "Fahad Khan",
      profession: "Marketing Specialist",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/003/492/211/small/portrait-of-attentive-self-confident-bearded-man-looking-at-camera-with-serious-expression-smiling-determined-business-man-indoor-studio-shot-isolated-on-white-background-free-photo.JPG",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-24 lg:h-full h-full bg-white lg:mt-8 mb-6 container max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Meet Our Team
      </h1>
      <p className="text-gray-600 mb-8 text-center text-sm">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-wrap justify-center lg:gap-6 gap-16 mt-8 mb-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={member.image}
              alt={`Image of ${member.name}`}
              width={300}
              height={300}
              quality={100}
              className="w-64 h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-gray-500 mb-4">{member.profession}</p>
            <div className="flex space-x-4">
              <Link href="#">
                <FaFacebook className="text-blue-600 text-xl hover:text-blue-800" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-blue-500 text-xl hover:text-blue-800" />
              </Link>
              <Link href="#">
                <FaTwitter className="text-blue-400 text-xl hover:text-blue-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
