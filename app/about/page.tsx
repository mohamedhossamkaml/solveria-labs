"use client";
import './page.css';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }
  })
};

export default function AboutPage() {
  const cards = [
    {
      title: "Our Mission",
      body: "At Solveria Labs, our mission is to empower businesses by building state-of-the-art digital systems. We believe that technology should be a multiplier, not a bottleneck. Our freelance collective is dedicated to bridging the gap between complex engineering and flawless user experiences."
    },
    {
      title: "Who We Are",
      body: "We are a highly specialized freelance team of engineers, designers, and systems architects. Born from a shared passion for high-performance computing and elegant design, Solveria Labs tackles everything from immersive landing pages to robust backend databases and cutting-edge AI integrations."
    },
    {
      title: "Our Approach",
      body: "Precision. Performance. Polish. We don't just write code; we engineer solutions. By utilizing the latest tech stacks and adhering to rigorous standards, we ensure that every platform we construct is secure, scalable, and visually breathtaking."
    }
  ];

  return (
    <main className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="page-title">About <span className="text-gradient">Solveria Labs</span></h1>
        <p className="page-subtitle">We are architects of the digital frontier.</p>
      </motion.div>

      <div className="about-content">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="about-card glass"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
