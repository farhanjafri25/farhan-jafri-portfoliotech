import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:5173'], // Allow both Vite dev server ports
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'farhanjafri8@gmail.com',
      subject: 'New message from your portfolio contact form',
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name} (${email})</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #0ea5e9; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully:', result);
    
    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email'
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Email server running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
});
