import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Calendar,
  CheckSquare,
  Clock,
  Headphones,
  MessageSquare,
  Sparkles,
  Lightbulb,
  Pencil,
  Bookmark,
  Zap,
  Layers,
  Eye,
  Volume2,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundGradient } from "@/components/background-gradient"

export default function ToolsPage() {
  return (
    <>
      <BackgroundGradient />
      <div className="container mx-auto py-10 px-4">
        <header className="mb-10 relative">
          <div className="absolute right-0 top-0">
            <ThemeToggle />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">DivergentTools</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <strong>A curated collection of apps, services, and resources to help neurodivergent individuals <u><i>thrive</i></u>.</strong>
            </p>
          </div>
        </header>

        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-[5rem] justify-center">
            <TabsTrigger value="daily" className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4" />
              <span className="hidden md:inline">Day to Day</span>
              <span className="inline md:hidden">Daily</span>
            </TabsTrigger>
            <TabsTrigger value="second-brain" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden md:inline">Second Brain</span>
              <span className="inline md:hidden">Brain</span>
            </TabsTrigger>
            <TabsTrigger value="focus" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Focus</span>
            </TabsTrigger>
            <TabsTrigger value="time" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Time</span>
            </TabsTrigger>
            <TabsTrigger value="sensory" className="flex items-center gap-2">
              <Volume2 className="h-4 w-4" />
              <span>Sensory</span>
            </TabsTrigger>
            <TabsTrigger value="communication" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden md:inline">Communication</span>
              <span className="inline md:hidden">Comm</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckSquare className="h-6 w-6" />
              Day to Day Organization
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                title="Todoist"
                description="Task management app with natural language processing for quick task entry and flexible organization."
                icon={<CheckSquare className="h-6 w-6 text-rose-500" />}
                tags={["Tasks", "Reminders", "Cross-platform"]}
                features={["Natural language input", "Priority levels", "Recurring tasks", "Visual progress tracking"]}
              />
              <ToolCard
                title="Microsoft To Do"
                description="Simple task manager with My Day feature to help focus on what matters today."
                icon={<CheckSquare className="h-6 w-6 text-blue-500" />}
                tags={["Free", "Tasks", "Microsoft"]}
                features={["My Day focused view", "Task steps", "Due dates", "List organization"]}
              />
              <ToolCard
                title="Habitica"
                description="Gamified habit and task tracker that turns your life into an RPG."
                icon={<Sparkles className="h-6 w-6 text-purple-500" />}
                tags={["Gamification", "Habits", "Community"]}
                features={["RPG-style rewards", "Social accountability", "Habit tracking", "Daily task management"]}
              />
              <ToolCard
                title="Brili"
                description="Visual routine manager designed specifically for ADHD and autism."
                icon={<Clock className="h-6 w-6 text-amber-500" />}
                tags={["Routines", "Visual", "Timer"]}
                features={["Visual timers", "Routine sequences", "Rewards system", "Parent/caregiver monitoring"]}
              />
              <ToolCard
                title="Tiimo"
                description="Visual daily planner and reminder app designed for neurodivergent people."
                icon={<Calendar className="h-6 w-6 text-teal-500" />}
                tags={["Visual", "Calendar", "Reminders"]}
                features={["Visual schedule", "Time awareness", "Customizable icons", "Gentle notifications"]}
              />
              <ToolCard
                title="Alarmy"
                description="Alarm app with missions that force you to get out of bed and engage your brain."
                icon={<Clock className="h-6 w-6 text-red-500" />}
                tags={["Alarm", "Morning Routine"]}
                features={[
                  "Photo verification missions",
                  "Math problems",
                  "Physical movement requirements",
                  "Multiple alarm options",
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="second-brain" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              Second Brain & Knowledge Management
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                title="Notion"
                description="All-in-one workspace for notes, tasks, wikis, and databases with flexible organization."
                icon={<Layers className="h-6 w-6 text-black dark:text-white" />}
                tags={["Notes", "Database", "All-in-one"]}
                features={["Flexible page structure", "Database views", "Templates", "Web clipper"]}
              />
              <ToolCard
                title="Obsidian"
                description="Knowledge base that works on local Markdown files with powerful linking capabilities."
                icon={<Bookmark className="h-6 w-6 text-purple-700" />}
                tags={["Markdown", "Linking", "Local-first"]}
                features={["Bidirectional linking", "Graph view", "Local storage", "Plugin ecosystem"]}
              />
              <ToolCard
                title="Roam Research"
                description="Note-taking tool designed for networked thought with bidirectional linking."
                icon={<Pencil className="h-6 w-6 text-blue-600" />}
                tags={["Bidirectional Links", "Daily Notes"]}
                features={["Daily notes", "Block references", "Sidebar views", "Query language"]}
              />
              <ToolCard
                title="Evernote"
                description="Note-taking app with powerful search and web clipping capabilities."
                icon={<Bookmark className="h-6 w-6 text-green-600" />}
                tags={["Notes", "Web Clipper", "Search"]}
                features={["OCR for images", "Web clipper", "Cross-platform sync", "Document scanning"]}
              />
              <ToolCard
                title="Mem.ai"
                description="AI-powered note-taking tool that automatically organizes your thoughts."
                icon={<Lightbulb className="h-6 w-6 text-yellow-500" />}
                tags={["AI", "Notes", "Organization"]}
                features={["AI organization", "Smart connections", "Quick capture", "Timeline view"]}
              />
              <ToolCard
                title="MindNode"
                description="Mind mapping tool to visually organize your thoughts and ideas."
                icon={<Brain className="h-6 w-6 text-green-500" />}
                tags={["Mind Maps", "Visual", "Brainstorming"]}
                features={["Visual organization", "Quick entry", "Outline view", "Cross-platform"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="focus" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              Focus & Productivity
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                title="Forest"
                description="Stay focused by planting virtual trees that grow while you work and die if you leave the app."
                icon={<Zap className="h-6 w-6 text-green-600" />}
                tags={["Pomodoro", "Gamification"]}
                features={["Visual motivation", "Timed sessions", "Distraction blocking", "Achievement tracking"]}
              />
              <ToolCard
                title="Freedom"
                description="Block distracting websites and apps across all your devices."
                icon={<Eye className="h-6 w-6 text-blue-500" />}
                tags={["Blocker", "Cross-platform"]}
                features={["Scheduled sessions", "Recurring blocks", "Locked mode", "Cross-device sync"]}
              />
              <ToolCard
                title="Brain.fm"
                description="Functional music designed to help you focus, relax, or sleep."
                icon={<Headphones className="h-6 w-6 text-purple-600" />}
                tags={["Audio", "Focus", "Science-backed"]}
                features={["Focus music", "Science-backed audio", "Session timing", "Offline listening"]}
              />
              <ToolCard
                title="Focusmate"
                description="Virtual coworking platform that pairs you with an accountability partner for scheduled sessions."
                icon={<MessageSquare className="h-6 w-6 text-teal-600" />}
                tags={["Accountability", "Community"]}
                features={["Scheduled sessions", "Accountability partners", "Video coworking", "Session planning"]}
              />
              <ToolCard
                title="Cold Turkey"
                description="Powerful website and application blocker with strict enforcement."
                icon={<Eye className="h-6 w-6 text-red-500" />}
                tags={["Blocker", "Strict"]}
                features={[
                  "Unbypassable blocks",
                  "Scheduled blocks",
                  "Application blocking",
                  "Customizable block lists",
                ]}
              />
              <ToolCard
                title="Centered"
                description="Flow state app that combines task planning, focus music, and distraction blocking."
                icon={<Zap className="h-6 w-6 text-indigo-500" />}
                tags={["Flow State", "All-in-one"]}
                features={["Flow state coaching", "Task sequencing", "Focus music", "Distraction blocking"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="time" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Time Management
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                title="Toggl Track"
                description="Simple time tracker with powerful reporting features."
                icon={<Clock className="h-6 w-6 text-red-500" />}
                tags={["Time Tracking", "Reports"]}
                features={["One-click tracking", "Project organization", "Detailed reports", "Idle detection"]}
              />
              <ToolCard
                title="TimeTimer"
                description="Visual timer that shows time passing with a disappearing red disk."
                icon={<Clock className="h-6 w-6 text-red-600" />}
                tags={["Visual", "Timer"]}
                features={[
                  "Visual time representation",
                  "Optional audible alert",
                  "Multiple timer options",
                  "Physical and digital versions",
                ]}
              />
              <ToolCard
                title="Clockify"
                description="Free time tracking software with detailed reporting and team features."
                icon={<Clock className="h-6 w-6 text-blue-500" />}
                tags={["Free", "Time Tracking"]}
                features={["Unlimited tracking", "Project tracking", "Reporting", "Team management"]}
              />
              <ToolCard
                title="RescueTime"
                description="Automatic time tracking and distraction management software."
                icon={<Clock className="h-6 w-6 text-purple-500" />}
                tags={["Automatic", "Analytics"]}
                features={["Automatic tracking", "Productivity scoring", "Focus sessions", "Detailed reports"]}
              />
              <ToolCard
                title="Pomodoro Timer"
                description="Timer based on the Pomodoro Technique with work and break intervals."
                icon={<Clock className="h-6 w-6 text-red-400" />}
                tags={["Pomodoro", "Technique"]}
                features={[
                  "25/5 minute intervals",
                  "Long break after 4 cycles",
                  "Task tracking",
                  "Customizable intervals",
                ]}
              />
              <ToolCard
                title="Calendar Blocking Apps"
                description="Apps like Google Calendar or Fantastical for time blocking your day."
                icon={<Calendar className="h-6 w-6 text-blue-400" />}
                tags={["Calendar", "Time Blocking"]}
                features={["Visual day planning", "Color coding", "Recurring events", "Notifications"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="sensory" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Volume2 className="h-6 w-6" />
              Sensory Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                title="Dark Reader"
                description="Browser extension that creates dark themes for websites on the fly."
                icon={<Eye className="h-6 w-6 text-gray-800 dark:text-gray-200" />}
                tags={["Visual", "Browser Extension"]}
                features={["Automatic dark mode", "Brightness adjustment", "Contrast settings", "Site whitelist"]}
              />
              <ToolCard
                title="Noisli"
                description="Background noise generator with customizable soundscapes."
                icon={<Volume2 className="h-6 w-6 text-teal-500" />}
                tags={["Audio", "Background Noise"]}
                features={[
                  "Customizable sound mixing",
                  "Saved combinations",
                  "Timer function",
                  "Distraction-free text editor",
                ]}
              />
              <ToolCard
                title="f.lux"
                description="Adjusts your computer's display colors based on the time of day."
                icon={<Eye className="h-6 w-6 text-orange-500" />}
                tags={["Visual", "Screen"]}
                features={[
                  "Automatic color adjustment",
                  "Customizable color temperatures",
                  "Sunrise/sunset adaptation",
                  "Movie mode",
                ]}
              />
              <ToolCard
                title="MyNoise"
                description="Sophisticated background noise generator with highly customizable soundscapes."
                icon={<Volume2 className="h-6 w-6 text-blue-500" />}
                tags={["Audio", "Customizable"]}
                features={[
                  "Calibrated to your hearing",
                  "Interactive sound generators",
                  "Extensive sound library",
                  "Frequency-specific adjustments",
                ]}
              />
              <ToolCard
                title="Be Focused"
                description="Focus timer with interval training to help manage sensory overload."
                icon={<Clock className="h-6 w-6 text-red-500" />}
                tags={["Timer", "Breaks"]}
                features={["Interval timing", "Task management", "Progress tracking", "Customizable intervals"]}
              />
              <ToolCard
                title="Endel"
                description="Personalized soundscapes that adapt to your location, weather, heart rate, and circadian rhythm."
                icon={<Headphones className="h-6 w-6 text-indigo-500" />}
                tags={["Audio", "Adaptive", "AI"]}
                features={[
                  "Personalized sound",
                  "Circadian rhythm alignment",
                  "Activity-based modes",
                  "AI-generated soundscapes",
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Communication Assistance
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                title="Grammarly"
                description="Writing assistant that helps with grammar, clarity, and tone."
                icon={<Pencil className="h-6 w-6 text-green-600" />}
                tags={["Writing", "Grammar"]}
                features={["Grammar checking", "Tone detection", "Clarity suggestions", "Vocabulary enhancement"]}
              />
              <ToolCard
                title="Hemingway Editor"
                description="Makes your writing bold and clear by highlighting complex sentences and common errors."
                icon={<Pencil className="h-6 w-6 text-yellow-600" />}
                tags={["Writing", "Clarity"]}
                features={[
                  "Readability scoring",
                  "Sentence complexity analysis",
                  "Passive voice detection",
                  "Adverb highlighting",
                ]}
              />
              <ToolCard
                title="Otter.ai"
                description="Real-time transcription and note-taking for meetings and conversations."
                icon={<MessageSquare className="h-6 w-6 text-purple-500" />}
                tags={["Transcription", "Notes"]}
                features={["Real-time transcription", "Speaker identification", "Searchable notes", "Audio recording"]}
              />
              <ToolCard
                title="AAC Apps"
                description="Augmentative and Alternative Communication apps like Proloquo2Go or TouchChat."
                icon={<MessageSquare className="h-6 w-6 text-blue-500" />}
                tags={["AAC", "Communication"]}
                features={[
                  "Symbol-based communication",
                  "Text-to-speech",
                  "Customizable vocabulary",
                  "Visual scene displays",
                ]}
              />
              <ToolCard
                title="Speechify"
                description="Text-to-speech app that reads articles, documents, and books aloud."
                icon={<Volume2 className="h-6 w-6 text-orange-500" />}
                tags={["Text-to-Speech", "Reading"]}
                features={["Natural-sounding voices", "Speed control", "Multiple languages", "OCR for printed text"]}
              />
              <ToolCard
                title="Social Scripts Apps"
                description="Apps like Autism Social Skills or Social Story Creator for practicing social interactions."
                icon={<MessageSquare className="h-6 w-6 text-teal-500" />}
                tags={["Social Skills", "Scripts"]}
                features={[
                  "Customizable social stories",
                  "Visual supports",
                  "Situation-specific scripts",
                  "Progress tracking",
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

interface ToolCardProps {
  title: string
  description: string
  icon: React.ReactNode
  tags: string[]
  features: string[]
}

function ToolCard({ title, description, icon, tags, features }: ToolCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md backdrop-blur-sm bg-white/80 dark:bg-gray-950/80">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-sm space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

