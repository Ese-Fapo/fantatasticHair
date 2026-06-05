import React from 'react';
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';

export default function WhatsAppChat() {
  return (
    <FloatingWhatsApp
      phoneNumber="4899258544" // International number without +, spaces, or dashes
      accountName="Fantastic Hair"
      chatMessage="Olá! Como podemos te ajudar?"
      statusMessage="Normalmente respondemos em até 1 hora"
      allowClickAway
      notification
    />
  )
}
