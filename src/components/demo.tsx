import { HeroGeometric } from "./ui/shape-landing-hero"
import { CybersecuritySparklesHero, SparklesShowcase, SparklesExperience } from "./ui/sparkles-demo"

function DemoHeroGeometric() {
    return <HeroGeometric 
        badge="Kokonut UI"
        title1="Elevate Your"
        title2="Digital Vision" 
    />
}

function DemoCybersecurityHero() {
    return <CybersecuritySparklesHero />
}

function DemoSparklesShowcase() {
    return <SparklesShowcase />
}

function DemoSparklesExperience() {
    return <SparklesExperience />
}

export { 
    DemoHeroGeometric, 
    DemoCybersecurityHero, 
    DemoSparklesShowcase, 
    DemoSparklesExperience 
} 