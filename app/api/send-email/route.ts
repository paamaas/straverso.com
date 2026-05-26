import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, e-post og melding er påkrevd' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Straverso <onboarding@resend.dev>',
      to: email,
      replyTo: email,
      subject: `Melding mottatt - ${name}`,
      html: `
        <h2>Takk for meldingen!</h2>
        <p>Hei ${name},</p>
        <p>Vi har mottatt meldingen din:</p>
        <p style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br />')}
        </p>
        <p>Vi kommer tilbake til deg så snart som mulig.</p>
        <p>Med vennlig hilsen,<br />Straverso teamet</p>
      `,
    });

    // Send internal notification email
    await resend.emails.send({
      from: 'Straverso <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'onboarding@resend.dev',
      subject: `Ny melding fra ${name}`,
      html: `
        <h2>Ny melding fra kontaktskjemaet</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Melding:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Melding sendt! Vi kontakter deg snart.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Kunne ikke sende meldingen. Prøv igjen senere.' },
      { status: 500 }
    );
  }
}
