'use client'

import { SendRounded } from "@mui/icons-material"
import { useState } from "react"

function ContactCard() {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!msg.trim()) return

        setStatus('sending')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '76da9979-038b-4f6a-81d9-c8a55db66815',
                    message: msg,
                    subject: 'Someone sent a message from your portfolio!',
                }),
            })
            const data = await res.json()

            if (data.success) {
                setStatus('sent')
                setMsg('')
                setTimeout(() => setStatus('idle'), 3000)
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="flex h-full flex-col justify-between rounded-3xl border border-[#e8e6e0] bg-white p-7">
            <div>
                <h3 className="font-syne mb-1.5 text-2xl leading-tight font-bold">
                    Scrolled this far? Let's get in touch!
                </h3>
                <p className="text-sm leading-[1.6] text-[#5c5a54]">
                    Have a project in mind? Want to hire me? Looking for a design partner? Or just want to say hi? I'm all ears.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder={
                        status === 'sent'
                            ? 'Message sent 🎉'
                            : status === 'error'
                                ? 'Something went wrong...'
                                : 'Send a message'
                    }
                    disabled={status === 'sending' || status === 'sent'}
                    className="min-w-0 flex-1 rounded-full border border-[#e8e6e0] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#0d0d0d] outline-none transition-colors placeholder:text-[#9e9b93] focus:border-[#0d0d0d] disabled:opacity-60"
                />
                <button
                    type="submit"
                    disabled={status === 'sending' || status === 'sent' || !msg.trim()}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#5A39ED] text-white transition hover:bg-[#4a2fd4] disabled:opacity-50"
                >
                    {status === 'sending' ? (
                        <span className="block size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                        <SendRounded
                            sx={{ fontSize: 20 }}
                            className="block translate-x-0.5"
                            aria-hidden
                        />
                    )}
                </button>
            </form>
        </div>
    )
}

export default ContactCard