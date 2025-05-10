"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Types pour les membres de l'équipe
type SocialLink = {
  platform: "github" | "linkedin" | "facebook" | "email"
  url: string
}

type TeamMember = {
  id: number
  name: string
  firstName: string
  lastName: string
  role: string
  specialty: string
  image: string
  bio: string
  socialLinks: SocialLink[]
}

// Composant principal
export default function Team() {
  // Données des membres de l'équipe
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Dupont",
      firstName: "Sarah",
      lastName: "Dupont",
      role: "Directrice Marketing",
      specialty: "SEO & Content Strategy",
      image: "/images/team-2.png?height=400&width=400",
      bio: "Experte en stratégie de contenu et SEO avec plus de 8 ans d'expérience dans le marketing digital.",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "email", url: "mailto:sarah@thinktrend.com" },
      ],
    },
    {
      id: 2,
      name: "Thomas Martin",
      firstName: "Thomas",
      lastName: "Martin",
      role: "Lead Developer",
      specialty: "Full-Stack Development",
      image: "/images/team-1.png?height=400&width=400",
      bio: "Développeur full-stack passionné par les technologies web modernes et l'architecture logicielle.",
      socialLinks: [
        { platform: "github", url: "https://github.com/" },
        { platform: "linkedin", url: "https://linkedin.com/" },
        { platform: "email", url: "mailto:thomas@thinktrend.com" },
      ],
    },
    {
      id: 3,
      name: "Emma Leclerc",
      firstName: "Emma",
      lastName: "Leclerc",
      role: "UI/UX Designer",
      specialty: "User Experience & Interface Design",
      image: "/images/team-4.png?height=400&width=400",
      bio: "Designer créative spécialisée dans la création d'expériences utilisateur intuitives et esthétiques.",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "github", url: "https://github.com/" },
      ],
    },
    {
      id: 4,
      name: "Lucas Bernard",
      firstName: "Lucas",
      lastName: "Bernard",
      role: "Social Media Manager",
      specialty: "Content Creation & Community Management",
      image: "/images/team-3.png?height=400&width=400",
      bio: "Expert en gestion de communauté et création de contenu engageant pour les réseaux sociaux.",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "email", url: "mailto:lucas@thinktrend.com" },
      ],
    },
  ]

  // État pour le membre sélectionné (pour la vue mobile)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  // Fonction pour obtenir l'icône du réseau social
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "email":
        return <Mail className="h-5 w-5" />
      default:
        return null
    }
  }

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-[#1D1046] uppercase tracking-wider mb-3">Notre équipe</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Des experts passionnés</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les talents qui font de Think Trend une agence unique. Notre équipe combine expertise technique,
            créativité et passion pour vous offrir des solutions digitales exceptionnelles.
          </p>
        </motion.div>

        {/* Vue mobile - Sélecteur et détail */}
        <div className="md:hidden mb-12">
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D1046]"
              onChange={(e) => {
                const selected = teamMembers.find((m) => m.id === Number.parseInt(e.target.value))
                setSelectedMember(selected || null)
              }}
              value={selectedMember?.id || ""}
            >
              <option value="" disabled>
                Sélectionnez un membre
              </option>
              {teamMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name} - {member.role}
                </option>
              ))}
            </select>
          </div>

          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900">
                  {selectedMember.firstName} <span className="text-[#1D1046]">{selectedMember.lastName}</span>
                </h4>
                <p className="text-[#1D1046] font-medium mb-3">{selectedMember.role}</p>
                <p className="text-gray-500 text-sm mb-2">Spécialité: {selectedMember.specialty}</p>
                <p className="text-gray-600 mb-6">{selectedMember.bio}</p>

                <div className="flex space-x-3">
                  {selectedMember.socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1D1046] hover:text-white transition-colors"
                    >
                      {getSocialIcon(link.platform)}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Vue desktop - Grille */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1046]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Overlay avec bio au survol */}
                <div className="absolute inset-0 flex items-end z-20">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm leading-relaxed">{member.bio}</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-white/80 text-sm">En savoir plus</span>
                      <ArrowUpRight className="ml-1 h-4 w-4 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {member.firstName} <span className="text-[#1D1046]">{member.lastName}</span>
                    </h4>
                    <p className="text-[#1D1046] font-medium mb-1">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.specialty}</p>
                  </div>

                  <div className="flex space-x-2">
                    {member.socialLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1D1046] hover:text-white transition-colors"
                      >
                        {getSocialIcon(link.platform)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#1D1046] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2d1a69] transition-colors shadow-md"
          >
            Rejoindre notre équipe
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
