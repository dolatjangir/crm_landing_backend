export const newContactUsRequestTemplate = (userName, userEmail, message) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa; line-height: 1.6;">
    
    <!-- Main Container -->
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                
                <!-- Email Content Card -->
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                                New Contact Request
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                                You've received a new message
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Name Section -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 15px; background-color: #f8f9fc; border-left: 4px solid #667eea; border-radius: 6px;">
                                        <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Name
                                        </p>
                                        <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                                            ${userName}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Email Section -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 15px; background-color: #f8f9fc; border-left: 4px solid #667eea; border-radius: 6px;">
                                        <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Email Address
                                        </p>
                                        <p style="margin: 0;">
                                            <a href="mailto:${userEmail}" style="color: #667eea; font-size: 16px; font-weight: 500; text-decoration: none;">
                                                ${userEmail}
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Section -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 20px; background-color: #f8f9fc; border-left: 4px solid #667eea; border-radius: 6px;">
                                        <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Message
                                        </p>
                                        <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
                                            ${message}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Action Button -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 35px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${userEmail}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                                            Reply to ${userName}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fc; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">
                                This is an automated notification from your contact form
                            </p>
                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                                © 2024 ibigdata. All rights reserved.
                            </p>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>` }




export const contactUsReplyTemplate = (userName) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa; line-height: 1.6;">
    
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); overflow: hidden;">
                    
                    <!-- Decorative Top Bar -->
                    <tr>
                        <td style="height: 6px; background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);"></td>
                    </tr>
                    
                    <!-- Logo/Brand Section -->
                    <tr>
                        <td style="padding: 50px 40px 30px 40px; text-align: center;">
                            <div style="display: inline-block; padding: 16px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; margin-bottom: 20px;">
                                <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">
                                    CreatikAI
                                </h2>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Success Icon -->
                    <tr>
                        <td align="center" style="padding: 0 40px 30px 40px;">
                            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Main Message -->
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <h1 style="margin: 0 0 20px 0; color: #1e293b; font-size: 32px; font-weight: 700; text-align: center; line-height: 1.3;">
                                Thanks for Reaching Out!
                            </h1>
                            <p style="margin: 0 0 25px 0; color: #334155; font-size: 18px; text-align: center; line-height: 1.6;">
                                Hi <span style="color: #667eea; font-weight: 600;">${userName}</span>,
                            </p>
                            <p style="margin: 0; color: #475569; font-size: 16px; text-align: center; line-height: 1.7;">
                                Thank you for contacting <strong style="color: #667eea;">CreatikAI</strong>. We've received your message and our team will get back to you shortly.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Info Box -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #f8f9fc 0%, #e9ecf5 100%); border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                                <tr>
                                    <td style="padding: 30px; text-align: center;">
                                        <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                            Expected Response Time
                                        </p>
                                        <p style="margin: 0 0 8px 0; color: #1e293b; font-size: 28px; font-weight: 700;">
                                            24-48 Hours
                                        </p>
                                        <p style="margin: 0; color: #64748b; font-size: 14px;">
                                            During business days
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- What's Next Section -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <h3 style="margin: 0 0 20px 0; color: #1e293b; font-size: 18px; font-weight: 600; text-align: center;">
                                What happens next?
                            </h3>
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 15px 20px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; float: left;">
                                            <span style="color: #ffffff; font-weight: 700; font-size: 16px;">1</span>
                                        </div>
                                        <div style="overflow: hidden;">
                                            <p style="margin: 0 0 5px 0; color: #1e293b; font-size: 15px; font-weight: 600;">
                                                We review your message
                                            </p>
                                            <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                                                Our team will carefully read your inquiry
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 15px 20px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; float: left;">
                                            <span style="color: #ffffff; font-weight: 700; font-size: 16px;">2</span>
                                        </div>
                                        <div style="overflow: hidden;">
                                            <p style="margin: 0 0 5px 0; color: #1e293b; font-size: 15px; font-weight: 600;">
                                                Expert assigned
                                            </p>
                                            <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                                                A specialist will be assigned to help you
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 15px 20px; vertical-align: top;">
                                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; float: left;">
                                            <span style="color: #ffffff; font-weight: 700; font-size: 16px;">3</span>
                                        </div>
                                        <div style="overflow: hidden;">
                                            <p style="margin: 0 0 5px 0; color: #1e293b; font-size: 15px; font-weight: 600;">
                                                You receive our response
                                            </p>
                                            <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                                                We'll email you with a detailed answer
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- CTA Section -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                                <tr>
                                    <td style="padding: 30px; text-align: center;">
                                        <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                                            In the meantime, explore our resources
                                        </p>
                                        <a href="https://creatikai.com" style="display: inline-block; padding: 12px 30px; background-color: #ffffff; color: #667eea; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                                            Visit Our Website
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Signature -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <div style="border-top: 2px solid #e2e8f0; padding-top: 30px;">
                                <p style="margin: 0 0 8px 0; color: #64748b; font-size: 15px; font-weight: 500;">
                                    Best regards,
                                </p>
                                <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 700;">
                                    CreatikAI Support Team
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fc; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 15px 0; color: #64748b; font-size: 13px; line-height: 1.6;">
                                This is an automated confirmation email. Please do not reply to this message.
                            </p>
                            <table role="presentation" style="width: auto; margin: 0 auto; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 0 10px;">
                                        <a href="https://creatikai.com" style="color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">Website</a>
                                    </td>
                                    <td style="color: #cbd5e1;">|</td>
                                    <td style="padding: 0 10px;">
                                        <a href="https://creatikai.com/support" style="color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">Support</a>
                                    </td>
                                    <td style="color: #cbd5e1;">|</td>
                                    <td style="padding: 0 10px;">
                                        <a href="https://creatikai.com/privacy" style="color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">Privacy Policy</a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 15px 0 0 0; color: #94a3b8; font-size: 12px;">
                                © 2024 CreatikAI. All rights reserved.
                            </p>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
`;

export const newsletterReplyTemplate = (userName = "there") => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Newsletter</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa; line-height: 1.6;">
    
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); overflow: hidden;">
                    
                    <!-- Decorative Top Bar -->
                    <tr>
                        <td style="height: 6px; background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);"></td>
                    </tr>
                    
                    <!-- Logo/Brand Section -->
                    <tr>
                        <td style="padding: 50px 40px 30px 40px; text-align: center;">
                            <div style="display: inline-block; padding: 16px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; margin-bottom: 20px;">
                                <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">
                                    CreatikAI
                                </h2>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Success Icon -->
                    <tr>
                        <td align="center" style="padding: 0 40px 30px 40px;">
                            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Main Message -->
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <h1 style="margin: 0 0 20px 0; color: #1e293b; font-size: 32px; font-weight: 700; text-align: center; line-height: 1.3;">
                                Welcome to Our Newsletter!
                            </h1>
                            <p style="margin: 0 0 25px 0; color: #334155; font-size: 18px; text-align: center; line-height: 1.6;">
                                Hi <span style="color: #667eea; font-weight: 600;">${userName}</span>,
                            </p>
                            <p style="margin: 0; color: #475569; font-size: 16px; text-align: center; line-height: 1.7;">
                                Thank you for subscribing to <strong style="color: #667eea;">CreatikAI Newsletter</strong>. 
                                You will now receive updates, tips, and exclusive offers directly in your inbox.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- CTA Section -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                                <tr>
                                    <td style="padding: 30px; text-align: center;">
                                        <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                                            Explore our latest content and tools
                                        </p>
                                        <a href="https://creatikai.com" style="display: inline-block; padding: 12px 30px; background-color: #ffffff; color: #667eea; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                                            Visit Our Website
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Signature -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <div style="border-top: 2px solid #e2e8f0; padding-top: 30px;">
                                <p style="margin: 0 0 8px 0; color: #64748b; font-size: 15px; font-weight: 500;">
                                    Best regards,
                                </p>
                                <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 700;">
                                    CreatikAI Team
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fc; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 15px 0; color: #64748b; font-size: 13px; line-height: 1.6;">
                                This is an automated email. Please do not reply to this message.
                            </p>
                            <table role="presentation" style="width: auto; margin: 0 auto; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 0 10px;">
                                        <a href="https://creatikai.com" style="color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">Website</a>
                                    </td>
                                    <td style="color: #cbd5e1;">|</td>
                                    <td style="padding: 0 10px;">
                                        <a href="https://creatikai.com/privacy" style="color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">Privacy Policy</a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 15px 0 0 0; color: #94a3b8; font-size: 12px;">
                                © 2024 CreatikAI. All rights reserved.
                            </p>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
`;
