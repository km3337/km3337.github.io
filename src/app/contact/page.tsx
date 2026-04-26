import type { Metadata } from 'next'
import { ContactXpForm } from '../components/ContactXpForm'

export const metadata: Metadata = {
    title: 'Contact — NULL INSIDE',
    description: 'Get in touch with Kristian Mentor.',
}

export default function ContactPage() {
    return <ContactXpForm />
}
