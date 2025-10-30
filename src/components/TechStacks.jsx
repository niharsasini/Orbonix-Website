import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaAws,
  FaDocker,
  FaMicrosoft,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDatabase,
  FaAndroid,
  FaApple,
  FaSwift,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiGo,
  SiFlutter,
  SiReact,
  SiKotlin,
} from "react-icons/si";
import { motion } from "framer-motion";

const TechStacks = () => {
  const stacks = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Angular", icon: <FaAngular className="text-red-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "C#", icon: <FaMicrosoft className="text-blue-400" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Go", icon: <SiGo className="text-cyan-400" /> },
        { name: "NestJS", icon: <SiNestjs className="text-pink-500" /> },
      ],
    },
    {
      category: "Mobile Development",
      items: [
        { name: "React Native", icon: <SiReact className="text-blue-400" /> },
        { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
        { name: "Android", icon: <FaAndroid className="text-green-500" /> },
        { name: "iOS", icon: <FaApple className="text-gray-300" /> },
        { name: "Swift", icon: <FaSwift className="text-orange-400" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
        { name: "Java", icon: <FaJava className="text-red-400" /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-400" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Prisma", icon: <SiPrisma className="text-indigo-500" /> },
        { name: "Sequelize", icon: <SiSequelize className="text-sky-400" /> },
        { name: "Mongoose", icon: <FaDatabase className="text-orange-500" /> },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-500" />,
        },
        {
          name: "Microsoft Azure",
          icon: <FaMicrosoft className="text-blue-400" />,
        },
      ],
    },
    {
      category: "AI & Data Science",
      items: [
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="text-orange-500" />,
        },
        { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="text-yellow-500" />,
        },
        { name: "Pandas", icon: <SiPandas className="text-blue-400" /> },
        { name: "NumPy", icon: <SiNumpy className="text-purple-400" /> },
        { name: "Python", icon: <FaPython className="text-green-400" /> },
      ],
    },
  ];

  return (
    <section
      className="relative py-12 px-6 text-white overflow-hidden"
      style={{ backgroundColor: "#2A1B1B" }}
    >
      {/* Left Circuit Image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[360px] h-[360px] opacity-50 pointer-events-none hidden md:block">
        <img
          src="/assets/images/leftCircuit.svg"
          alt="Left Circuit"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Circuit Image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[480px] h-[480px] opacity-50 pointer-events-none hidden md:block">
        <img
          src="/assets/images/circuitImg.svg"
          alt="Right Circuit"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Heading */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center mb-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-white leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400">
            Cutting-Edge Tech Stacks
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          We leverage the latest{" "}
          <span className="text-orange-400 font-semibold">
            enterprise-grade tools
          </span>{" "}
          and{" "}
          <span className="text-orange-300 font-semibold">
            modern frameworks
          </span>{" "}
          to build scalable, secure, and high-performing solutions.
          <br className="hidden md:block" />
          From cloud platforms to AI-driven architectures, we ensure your
          business stays ahead of the curve.
        </p>
      </motion.div>

      {/* Tech Cards */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto z-10">
        {stacks.map((stack, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-[#3a2222] to-[#2A1B1B] p-5 rounded-xl shadow-md hover:shadow-xl border border-orange-400/20 transition-transform hover:scale-105"
            whileHover={{ y: -4 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-orange-300">
              {stack.category}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {stack.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[#201313] p-2.5 rounded-lg border border-orange-400/20 hover:bg-[#3a2222] transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
