import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  productType: string;
  quantity?: string;
  location: string;
  details: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteRequest = await req.json();
    
    console.log("Received quote request:", { email: quoteData.email, name: quoteData.fullName });

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Gongola Blocks <onboarding@resend.dev>",
        to: ["your-email@example.com"], // Replace with your actual business email
        subject: `New Quote Request from ${quoteData.fullName}`,
        html: `
          <h1>New Quote Request</h1>
          
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> ${quoteData.fullName}</p>
          <p><strong>Email:</strong> ${quoteData.email}</p>
          <p><strong>Phone:</strong> ${quoteData.phone}</p>
          ${quoteData.company ? `<p><strong>Company:</strong> ${quoteData.company}</p>` : ''}
          
          <h2>Project Information</h2>
          <p><strong>Product Type:</strong> ${quoteData.productType}</p>
          ${quoteData.quantity ? `<p><strong>Quantity:</strong> ${quoteData.quantity}</p>` : ''}
          <p><strong>Delivery Location:</strong> ${quoteData.location}</p>
          
          <h2>Project Details</h2>
          <p>${quoteData.details.replace(/\n/g, '<br>')}</p>
          
          <hr>
          <p><small>This email was sent from your quote request form.</small></p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
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
