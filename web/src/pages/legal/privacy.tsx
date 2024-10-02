import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/head';
import Loader from '../../components/loader';

const LegalPRIVACY = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the page title
    document.title = "Privacy Policy - Blue Lobster, Inc.";

    // Add the necessary stylesheets
    const linkElements = [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700|Poppins:300,400,500,600,700,800,900&display=swap", rel: "stylesheet" },
      { href: "/static/css/theme.bundle.css", rel: "stylesheet" },
      { href: "/static/css/custom.css", rel: "stylesheet" }
    ];

    linkElements.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Cleanup function
    return () => {
      linkElements.forEach(link => {
        const existingLink = document.head.querySelector(`link[href="${link.href}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, []);

  useEffect(() => {
    // When everything is loaded, set isLoading to false
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="space-y-6">
          <p><strong>Privacy Policy Last updated: May 15, 2024</strong></p>

          <p>This Privacy Policy outlines how Blue Lobster.com, Inc or its affiliates ("Blue Lobster," "we," "our" or "us") collect, use, and share customer information in relation to our platforms, services, and solutions (collectively, the "Services").</p>

          <p>Please note that this Privacy Policy does not apply to data our customers may process when using our services.</p>

          <p>We may gather data from various sources, including: (i) information that you provide through your user account on our Services (your "Account"); (ii) your use of our Services; and (iii) from third-party websites, services, and partners.</p>

          <p>We encourage you to read this Privacy Policy carefully to be fully informed. If you have any questions about this Privacy Policy or Blue Lobster's data collection and disclosure practices, please contact us.</p>

          <p><strong>Information We Collect & Information You Provide</strong></p>

          <p><strong>Account Registration:</strong> When creating an Account with us, you may be asked to submit information such as name, company name, address, email address, and your phone number.</p>

          <p><strong>Payment Information:</strong> Financial information such as a credit/debit card number added to your account is processed through Stripe, our third-party payment system. Your financial information is not stored on our platform. However, we do have access to financial information through our third-party payment system and instruct them to store your payment details.</p>

          <p><strong>Communications:</strong> We may receive additional personal information about you such as, but not limited to, your name, email address, phone number, message content, attachments sent, and additional information you choose to provide if you contact us directly. When you open an email from us, we may also receive a confirmation.</p>


          <p><strong>Personal information necessary to set up an Account is required.</strong></p>

          <p><strong>Information We Collect During Use of Our Services</strong></p>

          <p><strong>Use of Tracking Technologies:</strong> As a service provider, certain information is collected automatically, and we store it in our log files.
          When using our Services, certain information may automatically be collected from your device. This can include IP addresses, browser type, ISP,
          referring/exit pages, operating system, date/time stamp, clickstream data, landing page, and referring URL. A cookie will be placed on your device when visiting our Services to collect this information.
          Cookies will contain amounts of information necessary for our services to recognize you. We reserve the right to collect information about your use of our Services,
          Service functionality, visit frequency, and other Service interactions automatically. We may still track your use when using different websites and services.
          In some countries, including those in the European Economic Area, information mentioned earlier in this paragraph may be considered personal information depending on the jurisdiction.</p>

		  <p><strong>Service Usage:</strong> We may collect information about your engagement with our Services during your use. That includes processor and memory usage, storage utilization, network connections, and other system-level metrics. We also use this data to optimize our business's ability to serve customers.</p>

          <p><strong>Information Received from Third Parties</strong></p>

          <p><strong>Third-Party Accounts:</strong> If you decide to link our Services to a third-party account, we will collect information from that account. This includes an authentication token. You may limit the information shared with us by visiting the privacy settings of your third-party accounts.</p>

          <p><strong>How We Use Information</strong></p>
          <p>We use collected information to:</p>

         <p> 1. Analyze usage to improve our Services;</p>
         <p> 2. Understand how you use our Services;</p>
         <p> 3. Increase Service functionality;</p>
         <p> 4. Communicate with you; and</p>
         <p> 5. Process payment transactions.</p>


          <p><strong>How We Share Information: </strong> We may share collected information with others in different ways, including:</p>

          <p><strong>Anonymized Information:</strong> When allowed by law, we may send user information to our partners in anonymized form, to ensure that you cannot be identified.</p>

          <p><strong>Hosting Partners / Suppliers:</strong> User information can be shared with suppliers in order to share information about your company to paint an accurate picture of demand.</p>

          <p><strong>Analytics:</strong> We use analytics providers such as Google Analytics. Google Analytics collects non-identifying information through the use of cookies. Specific privacy options can be found at http://www.google.com/policies/privacy/partners/.</p>

          <p><strong>When Required Through Requests or Processes:</strong> We may share information to comply with applicable laws, regulations, legal processes, or governmental requests, to detect or address fraud, security, or technical issues, to respond to requests for information, and to protect rights, property and safety.</p>

          <p><strong>With Your Permission:</strong> We may share your information with your consent.</p>

          <h2>Legal Basis for Personal Information Processing</h2>

          <p>Our legal basis for collecting and using personal information will vary depending on the specific information required.</p>

          <p>In most cases, we will collect personal information from you when you're purchasing our services, or when we have your permission to do so. We may need to communicate with you when responding to your inquiries, improving our Services, analyzing business strategy, or monitoring illegal activities.</p>

          <p>In rare cases, we may need to collect your personal information under legal obligation to protect you or another person. The information collected will not be shared with uninvolved authorities.</p>

          <p>We will make it clear when you need to provide personal information to comply with a legal order or when entering into a contract with you. We will notify you at the corresponding time and inform you if providing your personal information is required. If there are possible consequences that will result from a failure to provide your personal information, you will also be informed.</p>
          <p><strong>Your Data Protection Rights Under the General Data Protection Regulation</strong></p>
          <p>If you are an individual resident of the European Economic Area, you have the following data protection rights:</p>

            <p>1. The right to access, correct, update, or request deletion of your personal information by emailing us.</p>
            <p>2. The right to object to the processing of your personal information, ask us to restrict the processing of your personal information, or request portability of your personal information. You can exercise these rights by emailing us.</p>
            <p>3. The right to opt-out of marketing communications we send you. You can exercise this right by clicking on the "unsubscribe" or "opt-out" link in the marketing emails we send you. To opt-out of other forms of marketing, please email us.</p>
            <p>4. The right to withdraw your consent at any time for the collection and processing of your personal information. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
            <p>5. The right to complain to a data protection authority about our collection and use of your personal information.</p>


          <p>We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.</p>

          <p><strong>Your Choices</strong></p>
          <p>You can use certain Service features without registering. If you wish to unsubscribe from certain promotional emails, follow the instructions listed at the end of the email. We may still contact you for informational, transactional, account-related, or company-related matters even after you unsubscribe.</p>

          <p>Many browsers now have a disable cookie feature, which allows you to choose the cookies you want to accept. If you decide to accept no cookies, certain parts of our Services may no longer work.</p>

          <p><strong>Minor's Privacy</strong></p>
          <p>Blue Lobster does not knowingly collect information from minors under 18 years of age. In correlation, minors under 18 are not allowed to use our Services. You can alert us via email if you discover any violations of the rules listed in this paragraph.</p>

          <p><strong>Changes to Our Privacy Policy</strong></p>
          <p>We may change this Privacy Policy at our discretion. Such changes will be posted on our websites. We will notify you via email or other communication if we change the way we use or share collected personal information.</p>

          <p><strong>International Data Transfers</strong></p>
          <p>Blue Lobster is a global business, and as a result, the transfer of personal information to countries other than the country of origin is possible. These countries may have different data protection laws than the country of origin. Your personal information will be protected as described in this Privacy Policy during transfers.</p>

          <p><strong>Contact Us</strong></p>
          <p>If you have any inquiries regarding this Privacy Policy, please feel free to contact us.</p>

          <p>The data controller of your personal information is Blue Lobster.com, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPRIVACY;