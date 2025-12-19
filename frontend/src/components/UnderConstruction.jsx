import React from 'react';
import { motion } from 'framer-motion';
import { Construction, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const UnderConstruction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1.1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/deleonrehab', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com/deleonrehab', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/deleonrehab', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com/company/deleonrehab', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-amber-50 p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 border border-cyan-100"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <img
              src="/logo.png"
              alt="De Leon Rehab Logo"
              className="h-20 w-auto object-contain"
            />
          </motion.div>

          {/* Animated Icon */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="bg-gradient-to-br from-cyan-400 to-teal-500 p-6 rounded-2xl shadow-lg"
            >
              <Construction className="w-16 h-16 text-white" strokeWidth={2} />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent"
          >
            Under Construction
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 text-center mb-6 leading-relaxed"
          >
            Estamos trabajando en algo increíble para ti. Nuestro sitio web estará disponible muy pronto.
          </motion.p>

          {/* Message */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6 mb-8 border border-cyan-200"
          >
            <p className="text-gray-700 text-center">
              En <span className="font-semibold text-teal-700">De Leon Rehab</span>, nos dedicamos a brindarte el mejor servicio. Mientras tanto, síguenos en nuestras redes sociales para mantenerte al día con nuestras novedades.
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Progreso del sitio</span>
              <span className="text-sm font-semibold text-teal-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 h-full rounded-full shadow-lg"
              />
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-200 pt-8"
          >
            <p className="text-center text-sm font-medium text-gray-600 mb-4">
              Síguenos en nuestras redes sociales
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-600 mb-2">¿Tienes alguna pregunta?</p>
            <a
              href="mailto:info@deleonrehab.com"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              info@deleonrehab.com
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-gray-500 mt-6"
        >
          © 2025 De Leon Rehab. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;