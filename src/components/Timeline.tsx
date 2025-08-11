'use client'

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { Clock, CheckCircle2 } from 'lucide-react'

interface TimelineStep {
  id: number;
  title: string;
  duration: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Identifier les acquéreurs les plus prometteurs",
    duration: "Moins de 24h",
    description: "Nous échangeons sur vos objectifs et, grâce à nos algorithmes, vous recevez immédiatement un panorama des acquéreurs stratégiques et financiers les plus alignés avec votre projet."
  },
  {
    id: 2,
    title: "Établir une valorisation fondée sur des données réelles",
    duration: "Moins de 24h",
    description: "Nous calculons une valorisation précise à partir de données marché et préparons tous les supports clés pour lancer votre vente sur les meilleures bases."
  },
  {
    id: 3,
    title: "Susciter l'intérêt et la concurrence",
    duration: "2 à 4 semaines",
    description: "Nous contactons, en toute confidentialité, les acheteurs stratégiques et financiers les plus pertinents pour générer une tension concurrentielle maximale."
  },
  {
    id: 4,
    title: "Orchestrer chaque étape avec précision",
    duration: "4 à 8 semaines",
    description: "Nos automatisations nous permettent d'optimiser chaque étape du processus : organisation des rendez-vous, gestion des questions-réponses, filtrage des offres…"
  },
  {
    id: 5,
    title: "Finaliser la transaction dans les meilleures conditions",
    duration: "4 à 8 semaines",
    description: "Nous verrouillons les conditions idéales et menons la transaction jusqu'à la signature, sans perte de valeur ni délais inutiles."
  }
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  // Calculer la hauteur jusqu'au dernier checkpoint basé sur l'index
  const calculateTimelineHeight = () => {
    // On approxime la hauteur en se basant sur le nombre d'étapes et l'espacement
    // Chaque étape fait environ 220px (padding + contenu augmentés)
    const approximateStepHeight = 220; // Estimation de l'espacement entre les étapes (augmenté)
    const lastStepHeight = (timelineSteps.length - 1) * approximateStepHeight + 50; // +50 pour le premier élément
    return lastStepHeight;
  };

  const timelineHeight = calculateTimelineHeight();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);

  // Logique simplifiée basée sur le pourcentage de scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newActiveSteps: number[] = [];
    
    // Chaque étape s'active à 20%, 40%, 60%, 80%, 100% du scroll
    for (let i = 0; i < timelineSteps.length; i++) {
      const stepThreshold = (i + 1) / timelineSteps.length;
      if (latest >= stepThreshold - 0.1) { // -0.1 pour déclencher un peu plus tôt
        newActiveSteps.push(i + 1);
      }
    }
    
    setActiveSteps(newActiveSteps);
  });

  return (
    <section
      id="timeline"
      className="bg-zinc-50 py-12 md:py-20"
      ref={containerRef}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        {/* Header section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-balance text-3xl sm:text-4xl font-light lg:text-5xl font-garamond text-slate-800">
            Notre approche
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700">
            Une approche structurée pour maximiser le prix de votre entreprise et réduire les délais de vente.
          </p>
        </div>
      </div>

      {/* Timeline content */}
      <div className="relative max-w-4xl mx-auto pb-8">
        {timelineSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-start gap-6 md:gap-8 pt-12 md:pt-16 first:pt-0"
          >
            {/* Timeline node */}
            <div className="self-start z-40 mt-1">
              <motion.div 
                className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 backdrop-blur-sm ${
                  activeSteps.includes(step.id)
                    ? 'bg-slate-800/90 border-slate-800 text-white shadow-md shadow-slate-800/20'
                    : 'bg-white/80 border-slate-300/60 text-slate-500 hover:border-slate-400/80'
                }`}
                animate={{
                  scale: activeSteps.includes(step.id) ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {activeSteps.includes(step.id) ? (
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                ) : (
                  <span className="font-medium text-xs md:text-sm">{step.id}</span>
                )}
              </motion.div>
            </div>

            {/* Content directement collé */}
            <div className="flex-1 pb-6 md:pb-8 last:pb-0">
              {/* Titre */}
              <h3 className={`text-2xl md:text-3xl font-light font-garamond mb-3 leading-tight transition-colors duration-500 ${
                activeSteps.includes(step.id) ? 'text-slate-900' : 'text-slate-700'
              }`}>
                {step.title}
              </h3>

              {/* Badge durée */}
              <div className="flex items-center gap-2 mb-3">
                <div className={`px-2.5 py-0.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all duration-500 ${
                  activeSteps.includes(step.id)
                    ? 'bg-slate-800/5 text-slate-700 border border-slate-200/50'
                    : 'bg-slate-500/5 text-slate-500 border border-slate-200/30'
                }`}>
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </div>

              {/* Description */}
              <p className={`text-base leading-relaxed transition-colors duration-500 ${
                activeSteps.includes(step.id) ? 'text-slate-600' : 'text-slate-500'
              }`}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
        
        {/* Timeline line de base (grise) */}
        <div
          style={{
            height: timelineHeight + "px",
          }}
          className="absolute left-4 md:left-5 top-0 w-[2px] bg-slate-200/60 rounded-full"
        />
        
        {/* Timeline line progressive (colorée) */}
        <motion.div
          style={{
            height: heightTransform,
          }}
          className="absolute left-4 md:left-5 top-0 w-[2px] bg-gradient-to-b from-slate-700 to-slate-600 rounded-full origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </section>
  )
} 