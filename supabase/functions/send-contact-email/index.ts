
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Add logging for debugging purposes
const apiKey = Deno.env.get("RESEND_API_KEY");
console.log("API Key present:", apiKey !== undefined && apiKey !== null);

if (!apiKey) {
  console.error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(apiKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": 
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received contact form submission");
    
    if (!apiKey) {
      throw new Error("Missing Resend API key. Please add the RESEND_API_KEY to your Edge Function secrets.");
    }
    
    const formData: ContactFormData = await req.json();
    console.log("Form data:", JSON.stringify(formData));
    
    // Using the provided email address
    const toEmail = Deno.env.get("CONTACT_EMAIL_RECIPIENT") || "info@rndventures.co.in";
    console.log("Sending email to:", toEmail);
    
    const { name, email, phone, company, message } = formData;

    console.log("Sending notification email...");
    const emailResponse = await resend.emails.send({
      from: "R&D Ventures Contact Form <no-reply@rndventures.co.in>",
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });
    console.log("Notification email response:", JSON.stringify(emailResponse));

    // Also send a confirmation email to the submitter
    console.log("Sending confirmation email...");
    const confirmationResponse = await resend.emails.send({
      from: "R&D Ventures <no-reply@rndventures.co.in>",
      to: [email],
      subject: "We've received your message",
      html: `
        <h2>Thank you for contacting R&D Ventures</h2>
        <p>Hello ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>The R&D Ventures Team</p>
      `,
    });
    console.log("Confirmation email response:", JSON.stringify(confirmationResponse));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
