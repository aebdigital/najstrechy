import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Meno, e-mail a správa sú povinné polia.' }, { status: 400 });
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    const sender = process.env.SMTP2GO_SENDER;
    const recipient = process.env.CONTACT_FORM_RECIPIENT;

    if (!apiKey || !sender || !recipient) {
      console.error('Missing SMTP2GO configuration variables');
      return NextResponse.json(
        { error: 'Chyba konfigurácie odosielania správ. Kontaktujte nás prosím telefonicky.' },
        { status: 500 }
      );
    }

    const mailBody = {
      sender: sender,
      to: [recipient],
      subject: `Nová správa z webu naj-strechasa.sk od: ${name}`,
      text_body: `Meno: ${name}\nE-mail: ${email}\nTelefón: ${phone || 'Neuvedený'}\n\nSpráva:\n${message}`,
      html_body: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; padding: 20px; border-radius: 8px;">
          <h2 style="color: #144269; border-bottom: 2px solid #cc451c; padding-bottom: 10px; margin-top: 0;">Nová správa z webu naj-strechasa.sk</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Meno:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">E-mail:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Telefón:</td>
              <td style="padding: 6px 0;">${phone || '<i>Neuvedený</i>'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #cc451c; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 8px;">Obsah správy:</strong>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      custom_headers: [
        {
          header: 'Reply-To',
          value: email,
        },
      ],
    };

    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': apiKey,
      },
      body: JSON.stringify(mailBody),
    });

    const data = await response.json();

    if (!response.ok || data.data?.error) {
      console.error('SMTP2GO API error:', data);
      return NextResponse.json({ error: 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Vyskytla sa neočakávaná chyba.' }, { status: 500 });
  }
}
