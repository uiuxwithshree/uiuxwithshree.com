'use client'

import figmaicon from "@/public/images/icons/figma.svg"
import notionicon from "@/public/images/icons/notion.svg"
import framericon from "@/public/images/icons/framer.svg"
import openaiicon from "@/public/images/icons/openai.svg"
import mazeicon from "@/public/images/icons/maze.svg"
import claudeicon from "@/public/images/icons/claude.svg"
import miroicon from "@/public/images/icons/miro.svg"
import Image from "next/image"

const TOOLS = [
  { name: 'Figma', Icon: figmaicon },
  { name: 'Notion', Icon: notionicon },
  { name: 'Framer', Icon: framericon },
  { name: 'OpenAI', Icon: openaiicon },
  { name: 'Maze', Icon: mazeicon },
  { name: 'Claude', Icon: claudeicon },
  { name: 'Miro', Icon: miroicon },
]

const TOOLS_DOUBLED = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS]


function ToolPill({ name, Icon }: (typeof TOOLS)[number]) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-full border border-[#e8e6e0] bg-white p-3  md:p-5 ">
      <Image
        src={Icon}
        alt={`${name} icon`}
        className="h-5 w-5 md:h-8 md:w-8 object-contain"
      />
    </div>
  )
}

function ToolsTicker() {
  return (
    <div className="flex h-14 md:h-full items-center overflow-hidden rounded-3xl border border-[#e8e6e0] bg-[#F5F5F5]">
      <div className="flex shrink-0 gap-2 md:gap-3 items-center w-max animate-ticker">
        {TOOLS_DOUBLED.map((tool, i) => (
          <ToolPill key={`${tool.name}-${i}`} {...tool} />
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default ToolsTicker

