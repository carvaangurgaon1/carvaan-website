"use client";
import Image from "next/image";
import { FiLinkedin, FiInstagram } from "react-icons/fi";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Ashima Bansal",
      role: "Founder",
      img: "https://source.unsplash.com/400x400/?woman,portrait",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Nikhil Bansal",
      role: "Co-Founder",
      img: "https://source.unsplash.com/400x400/?man,smiling",
      linkedin: "#",
      instagram: "#",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
        Meet The Team
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100"
          >
            <div className="relative w-full h-64">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-pink-600 font-medium mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-500">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FiLinkedin className="hover:text-blue-700 text-xl" />
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  <FiInstagram className="hover:text-pink-600 text-xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
