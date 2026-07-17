export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return res.status(500).json({ ok: false, error: 'EmailJS is not configured on the server.' });
  }

  let body;
  try {
    body = typeof req.body === 'object' && req.body !== null ? req.body : JSON.parse(req.body || '{}');
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'Invalid request body.' });
  }

  const { name, email, message, time } = body;

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name,
      email,
      message,
      time: time || new Date().toLocaleString()
    }
  };

  try {
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + privateKey
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('EmailJS API error:', resp.status, text);
      return res.status(502).json({ ok: false, error: 'Email provider rejected the request.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('EmailJS request failed:', err);
    return res.status(502).json({ ok: false, error: 'Could not reach the email provider.' });
  }
}
