"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Mastering Melodies: A Guide to Music Theory",
    description:
      "Dive into the fundamentals of music theory with our comprehensive course. From scales and chords to key signatures and time signatures, this course will lay the groundwork for your musical journey.",
  },
  {
    title: "Music and Mind: Exploring the Psychology of Musical Perception",
    description:
      "Delve into the fascinating intersection of music and psychology. This course explores topics such as music cognition, emotion, memory, and perception, providing valuable insights into the profound impact of music on the human mind and behavior.",
  },
  {
    title: "Soundscapes of the World: Exploring Global Music Traditions",
    description:
      "Embark on a journey around the world through music. This course introduces you to diverse musical traditions from various cultures, offering insights into their unique rhythms, melodies, and instruments.",
  },
  {
    title: "Expressive Ensemble: The Dynamics of Group Performance",
    description:
      "Explore the dynamics of group performance and learn how to collaborate effectively with other musicians. This course focuses on ensemble playing techniques, communication skills, and rehearsal strategies to help you thrive in a group setting.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
